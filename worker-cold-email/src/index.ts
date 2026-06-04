/**
 * Opti-CDS cold email Worker + dashboard.
 *
 * Routes UI (Basic Auth, password = WEBHOOK_SECRET) :
 *  GET  /                         liste des contacts + filtres
 *  GET  /c/:id                    fiche contact + éditeur de draft
 *  POST /c/:id/save               sauvegarde draft + action (save/validate/unvalidate/skip/send_now)
 *  POST /c/:id/notes              sauvegarde notes
 *  GET  /stats                    JSON stats
 *
 * Routes API publiques :
 *  GET  /u/:id.:sig               unsubscribe (lien signé HMAC dans chaque mail)
 *  POST /webhook/resend           webhook Resend (bounce/complaint/open) — header x-webhook-secret
 *  POST /import                   bulk insert contacts JSON — header x-auth
 *  POST /run                      trigger manuel du cron — header x-auth
 *
 * Cron : lun-ven 9h UTC -> envoie jusqu'à DAILY_LIMIT mails depuis la file 'validated'
 *        + relances J+4 / J+9 templatées sur les threads ouverts.
 */

import { buildJ4, buildJ9, wrapJ0Body, type Contact } from "./templates";
import { TEMPLATES, templateById, pickTemplateFor } from "./templates-library";
import { requireAuth } from "./auth";
import { renderList, renderDetail, renderStats, renderTemplatesPage } from "./views";
import { regionFromDept, ALL_REGIONS } from "./regions";

export interface Env {
  DB: D1Database;
  RESEND_API_KEY: string;
  WEBHOOK_SECRET: string;
  UNSUBSCRIBE_SALT: string;
  FROM_EMAIL: string;
  REPLY_TO: string;
  DAILY_LIMIT: string;
  DRY_RUN: string;
  BASE_URL: string;
}

const DAYS_J4 = 4;
const DAYS_J9 = 5; // 5 j après J+4 = J+9

// ===================== HMAC unsub =====================
async function hmac(salt: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(salt),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(msg));
  return btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_").slice(0, 24);
}
async function unsubUrl(env: Env, contactId: number): Promise<string> {
  const sig = await hmac(env.UNSUBSCRIBE_SALT, String(contactId));
  return `${env.BASE_URL}/u/${contactId}.${sig}`;
}

// ===================== Resend =====================
type ResendResponse = { id?: string; message?: string };

async function sendViaResend(env: Env, opts: {
  to: string; subject: string; text: string; unsubscribeUrl: string;
  inReplyTo?: string; references?: string;
}): Promise<{ id: string | null; messageId: string | null; error?: string }> {
  if (env.DRY_RUN === "true") {
    console.log(`[DRY] -> ${opts.to} | ${opts.subject}`);
    return { id: `dry_${Date.now()}`, messageId: `<dry-${Date.now()}@opti-cds.fr>` };
  }
  const headers: Record<string, string> = {
    "List-Unsubscribe": `<${opts.unsubscribeUrl}>, <mailto:${env.REPLY_TO}?subject=unsubscribe>`,
    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
  };
  if (opts.inReplyTo) headers["In-Reply-To"] = opts.inReplyTo;
  if (opts.references) headers["References"] = opts.references;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: [opts.to],
      reply_to: env.REPLY_TO,
      subject: opts.subject,
      text: opts.text,
      headers,
    }),
  });
  const data = (await r.json()) as ResendResponse;
  if (!r.ok || !data.id) return { id: null, messageId: null, error: data.message || `HTTP ${r.status}` };
  const domain = env.FROM_EMAIL.replace(/.*<|>$/g, "").split("@")[1] || "opti-cds.fr";
  return { id: data.id, messageId: `<${data.id}@${domain}>` };
}

// ===================== Envoi unitaire =====================
async function sendJ0(env: Env, c: any): Promise<{ ok: boolean; error?: string }> {
  const uurl = await unsubUrl(env, c.id);
  const subject = (c.draft_subject || "Subvention Teulade — éligibilité de votre centre").trim();
  const body = wrapJ0Body(c.draft_body || "", uurl);
  const res = await sendViaResend(env, { to: c.email, subject, text: body, unsubscribeUrl: uurl });
  const now = new Date().toISOString();
  if (res.id) {
    await env.DB.batch([
      env.DB.prepare(
        `INSERT INTO sends (contact_id, step, resend_id, message_id, subject, sent_at, status)
         VALUES (?, 1, ?, ?, ?, ?, 'sent')`
      ).bind(c.id, res.id, res.messageId, subject, now),
      env.DB.prepare(
        `UPDATE contacts SET step=1, last_sent_at=?, status='sending', draft_status='sent', updated_at=? WHERE id=?`
      ).bind(now, now, c.id),
    ]);
    return { ok: true };
  }
  await env.DB.prepare(
    `INSERT INTO sends (contact_id, step, status, error, sent_at) VALUES (?, 1, 'error', ?, ?)`
  ).bind(c.id, res.error || "unknown", now).run();
  return { ok: false, error: res.error };
}

async function getJ0ThreadInfo(env: Env, contactId: number) {
  const row = await env.DB.prepare(
    `SELECT message_id, subject FROM sends WHERE contact_id=? AND step=1 ORDER BY id ASC LIMIT 1`
  ).bind(contactId).first<{ message_id: string; subject: string }>();
  return row?.message_id ? { messageId: row.message_id, subject: row.subject || "" } : null;
}

async function sendRelance(env: Env, c: Contact, step: 2 | 3): Promise<{ ok: boolean }> {
  const t = await getJ0ThreadInfo(env, c.id);
  if (!t) return { ok: false };
  const uurl = await unsubUrl(env, c.id);
  const { subject, text } = step === 2 ? buildJ4(c, uurl, t.subject) : buildJ9(c, uurl, t.subject);
  const res = await sendViaResend(env, {
    to: c.email, subject, text, unsubscribeUrl: uurl,
    inReplyTo: t.messageId, references: t.messageId,
  });
  const now = new Date().toISOString();
  if (res.id) {
    await env.DB.batch([
      env.DB.prepare(
        `INSERT INTO sends (contact_id, step, resend_id, message_id, subject, sent_at, status)
         VALUES (?, ?, ?, ?, ?, ?, 'sent')`
      ).bind(c.id, step, res.id, res.messageId, subject, now),
      env.DB.prepare(
        `UPDATE contacts SET step=?, last_sent_at=?,
         status = CASE WHEN ?=3 THEN 'done' ELSE 'sending' END,
         updated_at=? WHERE id=?`
      ).bind(step, now, step, now, c.id),
    ]);
    return { ok: true };
  }
  await env.DB.prepare(
    `INSERT INTO sends (contact_id, step, status, error, sent_at) VALUES (?, ?, 'error', ?, ?)`
  ).bind(c.id, step, res.error || "unknown", now).run();
  return { ok: false };
}

// ===================== Pipeline cron =====================
async function runPipeline(env: Env) {
  const limit = parseInt(env.DAILY_LIMIT || "30", 10);
  let budget = limit;
  const out = { j0: 0, j4: 0, j9: 0, errors: 0 };

  // Relances d'abord (entretien des threads ouverts)
  for (const step of [3, 2] as const) {
    if (budget <= 0) break;
    const lookback = step === 3 ? DAYS_J9 : DAYS_J4;
    const prev = step - 1;
    const rs = await env.DB.prepare(
      `SELECT id, email, first_name, nom_cds, ville, specialite
       FROM contacts
       WHERE status='sending' AND step=?
         AND datetime(last_sent_at) <= datetime('now','-'||?||' days')
       ORDER BY segment ASC, id ASC
       LIMIT ?`
    ).bind(prev, lookback, budget).all<Contact>();
    for (const c of rs.results) {
      if (budget <= 0) break;
      const r = await sendRelance(env, c, step);
      if (r.ok) {
        if (step === 2) out.j4++; else out.j9++;
        budget--;
      } else { out.errors++; }
      await new Promise(r => setTimeout(r, 250 + Math.random() * 500));
    }
  }

  // J0 — uniquement depuis la file 'validated' ET sur les emails primaires (1 mail / CDS)
  if (budget > 0) {
    const rs = await env.DB.prepare(
      `SELECT id, email, first_name, nom_cds, ville, specialite, draft_subject, draft_body
       FROM contacts
       WHERE draft_status='validated' AND status='pending' AND step=0 AND is_primary=1
       ORDER BY segment ASC, updated_at ASC
       LIMIT ?`
    ).bind(budget).all<any>();
    for (const c of rs.results) {
      if (budget <= 0) break;
      const r = await sendJ0(env, c);
      if (r.ok) { out.j0++; budget--; } else { out.errors++; }
      await new Promise(r => setTimeout(r, 250 + Math.random() * 500));
    }
  }

  await env.DB.prepare(
    `INSERT INTO events (type, detail) VALUES ('run_end', ?)`
  ).bind(JSON.stringify({ ...out, budget_left: budget })).run();
  return { sent: out.j0 + out.j4 + out.j9, errors: out.errors, breakdown: out };
}

// ===================== HTTP API =====================
async function handleUnsubscribe(env: Env, path: string): Promise<Response> {
  const m = path.match(/^\/u\/(\d+)\.([A-Za-z0-9_\-]+)$/);
  if (!m) return new Response("Lien invalide", { status: 400 });
  const id = parseInt(m[1], 10);
  const expected = await hmac(env.UNSUBSCRIBE_SALT, String(id));
  if (expected !== m[2]) return new Response("Signature invalide", { status: 403 });
  await env.DB.batch([
    env.DB.prepare(`UPDATE contacts SET status='unsubscribed' WHERE id=?`).bind(id),
    env.DB.prepare(`INSERT INTO events (contact_id, type) VALUES (?, 'unsubscribe')`).bind(id),
  ]);
  return new Response(
    `<!doctype html><meta charset=utf-8><title>Désinscription</title>
     <body style="font-family:system-ui;max-width:540px;margin:80px auto;padding:24px;line-height:1.6">
       <h1>Vous êtes désinscrit</h1>
       <p>Votre adresse est retirée de nos listes. Vous ne recevrez plus de message.</p>
       <p>Bonne journée,<br>Sacha — Opti-CDS</p>
     </body>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

async function handleResendWebhook(env: Env, req: Request): Promise<Response> {
  if (req.headers.get("x-webhook-secret") !== env.WEBHOOK_SECRET) return new Response("Unauthorized", { status: 401 });
  const payload = await req.json() as any;
  const type = payload.type || "";
  const resendId = payload.data?.email_id;
  if (!resendId) return new Response("ok");
  let newSendStatus: string | null = null, contactAction: string | null = null;
  if (type === "email.bounced")    { newSendStatus = "bounced";    contactAction = "bounced"; }
  else if (type === "email.complained") { newSendStatus = "complained"; contactAction = "unsubscribed"; }
  else if (type === "email.delivered")  { newSendStatus = "delivered"; }
  else if (type === "email.opened")     { newSendStatus = "opened"; }
  else if (type === "email.clicked")    { newSendStatus = "clicked"; }
  if (newSendStatus) {
    await env.DB.prepare(`UPDATE sends SET status=? WHERE resend_id=?`).bind(newSendStatus, resendId).run();
  }
  if (contactAction) {
    await env.DB.prepare(
      `UPDATE contacts SET status=? WHERE id=(SELECT contact_id FROM sends WHERE resend_id=?)`
    ).bind(contactAction, resendId).run();
    await env.DB.prepare(
      `INSERT INTO events (contact_id, type, detail) SELECT contact_id, ?, ? FROM sends WHERE resend_id=?`
    ).bind(type, JSON.stringify(payload), resendId).run();
  }
  return new Response("ok");
}

async function handleImport(env: Env, req: Request): Promise<Response> {
  if (req.headers.get("x-auth") !== env.WEBHOOK_SECRET) return new Response("Unauthorized", { status: 401 });
  const contacts = await req.json() as any[];
  let inserted = 0, skipped = 0;
  for (const c of contacts) {
    const e = (c.email || "").trim().toLowerCase();
    if (!e || !e.includes("@")) { skipped++; continue; }
    const region = c.region || regionFromDept(c.dept);
    const cdsKey = (c.finess && String(c.finess).trim()) || (c.nom_cds && c.nom_cds.trim()) || e;
    // Choisit le template adapté + rend le sujet/corps via la bibliothèque
    const ctx = { email: e, first_name: c.first_name || null, nom_cds: c.nom_cds || null,
                  ville: c.ville || null, specialite: c.specialite || null,
                  region: region || null, segment: c.segment || "B_standard" };
    const tpl = pickTemplateFor(ctx);
    const rendered = tpl.build(ctx);
    try {
      const r = await env.DB.prepare(
        `INSERT OR IGNORE INTO contacts
          (email, first_name, nom_cds, adresse, code_postal, ville, dept, region, telephone,
           site_web, specialite, finess, siret, source, segment, cds_key, template_id,
           draft_subject, draft_body, draft_status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'draft')`
      ).bind(
        e, c.first_name || null, c.nom_cds || null, c.adresse || null,
        c.code_postal || null, c.ville || null, c.dept || null, region, c.telephone || null,
        c.site_web || null, c.specialite || null, c.finess || null, c.siret || null,
        c.source || "manual", c.segment || "B_standard", cdsKey, tpl.id,
        rendered.subject, rendered.body,
      ).run();
      if (r.meta.changes > 0) inserted++; else skipped++;
    } catch { skipped++; }
  }
  return Response.json({ inserted, skipped, total: contacts.length });
}

// Promote next-best email of a CDS as primary (called when current primary becomes bad/unusable)
async function promoteNextPrimary(env: Env, cdsKey: string): Promise<void> {
  if (!cdsKey) return;
  const next = await env.DB.prepare(
    `SELECT id FROM contacts
     WHERE cds_key = ? AND draft_status NOT IN ('bad_email','sent','unsubscribed')
     ORDER BY
       CASE WHEN lower(substr(email,1,instr(email,'@')-1))
            IN ('direction','directeur','accueil','contact','secretariat','info','cabinet')
            THEN 0 ELSE 1 END,
       length(email), id
     LIMIT 1`
  ).bind(cdsKey).first<{ id: number }>();
  await env.DB.prepare(`UPDATE contacts SET is_primary = 0 WHERE cds_key = ?`).bind(cdsKey).run();
  if (next) {
    await env.DB.prepare(`UPDATE contacts SET is_primary = 1 WHERE id = ?`).bind(next.id).run();
  }
}

// ===================== Dashboard =====================
async function getStats(env: Env) {
  // les compteurs comptent UN CDS (= is_primary=1), pas chaque email
  const ds = await env.DB.prepare(
    `SELECT draft_status, COUNT(*) n FROM contacts WHERE is_primary=1 GROUP BY draft_status`
  ).all<{ draft_status: string; n: number }>();
  const total = ds.results.reduce((s, r) => s + r.n, 0);
  const today = await env.DB.prepare(
    `SELECT COUNT(*) n FROM sends
     WHERE status NOT IN ('error') AND datetime(sent_at) >= datetime('now', '-1 day')`
  ).first<{ n: number }>();
  const stats: any = { draft: 0, validated: 0, sent: 0, skipped: 0, bad_email: 0, total, today_sent: today?.n || 0 };
  for (const r of ds.results) stats[r.draft_status] = r.n;
  return stats;
}

async function handleList(env: Env, url: URL): Promise<Response> {
  const status = url.searchParams.get("status") || "";
  const q = (url.searchParams.get("q") || "").trim();
  const dept = url.searchParams.get("dept") || "";
  const region = url.searchParams.get("region") || "";
  const specialite = url.searchParams.get("specialite") || "";
  const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10));
  const pageSize = 50;

  // ── Liste = 1 ligne par CDS (is_primary=1) ──
  const where: string[] = ["is_primary = 1"];
  const args: any[] = [];
  if (status)     { where.push("draft_status = ?"); args.push(status); }
  if (dept)       { where.push("dept = ?");         args.push(dept); }
  if (region)     { where.push("region = ?");       args.push(region); }
  if (specialite) { where.push("specialite = ?");   args.push(specialite); }
  if (q) {
    where.push("(lower(nom_cds) LIKE ? OR lower(email) LIKE ? OR lower(ville) LIKE ?)");
    const qq = "%" + q.toLowerCase() + "%";
    args.push(qq, qq, qq);
  }
  const whereSql = where.join(" AND ");

  const totalRow = await env.DB.prepare(
    `SELECT COUNT(*) n FROM contacts WHERE ${whereSql}`
  ).bind(...args).first<{ n: number }>();
  const totalFiltered = totalRow?.n || 0;

  const rs = await env.DB.prepare(
    `SELECT c.id, c.email, c.nom_cds, c.ville, c.dept, c.region, c.telephone, c.specialite,
            c.draft_status, c.step, c.cds_key,
            (SELECT COUNT(*) FROM contacts c2
             WHERE c2.cds_key = c.cds_key AND c2.id != c.id AND c2.draft_status != 'bad_email') AS alt_count
     FROM contacts c
     WHERE ${whereSql.replace(/\bdraft_status\b/g, 'c.draft_status').replace(/\bdept\b/g, 'c.dept').replace(/\bregion\b/g, 'c.region').replace(/\bspecialite\b/g, 'c.specialite').replace(/\bnom_cds\b/g, 'c.nom_cds').replace(/\bemail\b/g, 'c.email').replace(/\bville\b/g, 'c.ville').replace(/\bis_primary\b/g, 'c.is_primary')}
     ORDER BY
       CASE c.draft_status WHEN 'validated' THEN 0 WHEN 'draft' THEN 1 WHEN 'sent' THEN 2 ELSE 3 END,
       c.updated_at DESC
     LIMIT ? OFFSET ?`
  ).bind(...args, pageSize, (page - 1) * pageSize).all<any>();

  const specs = await env.DB.prepare(
    `SELECT DISTINCT specialite FROM contacts WHERE specialite IS NOT NULL ORDER BY specialite`
  ).all<{ specialite: string }>();
  const depts = await env.DB.prepare(
    `SELECT DISTINCT dept FROM contacts WHERE dept IS NOT NULL ORDER BY dept`
  ).all<{ dept: string }>();
  const regions = await env.DB.prepare(
    `SELECT DISTINCT region, COUNT(*) AS n FROM contacts WHERE region IS NOT NULL AND is_primary=1 GROUP BY region ORDER BY region`
  ).all<{ region: string; n: number }>();

  const stats = await getStats(env);
  return renderList({
    contacts: rs.results,
    stats,
    filters: { status, q, dept, region, specialite },
    page, pageSize, totalFiltered,
    specialites: specs.results.map(r => r.specialite).filter(Boolean),
    depts: depts.results.map(r => r.dept).filter(Boolean),
    regions: regions.results.filter(r => r.region),
  });
}

async function handleDetail(env: Env, id: number): Promise<Response> {
  const c = await env.DB.prepare(`SELECT * FROM contacts WHERE id=?`).bind(id).first<any>();
  if (!c) return new Response("Contact introuvable", { status: 404 });
  const history = (await env.DB.prepare(
    `SELECT step, sent_at, status, error FROM sends WHERE contact_id=? ORDER BY id DESC`
  ).bind(id).all<any>()).results;
  // Autres emails du même CDS (alternatives)
  const alternatives = (await env.DB.prepare(
    `SELECT id, email, draft_status, source FROM contacts
     WHERE cds_key = ? AND id != ?
     ORDER BY CASE WHEN draft_status='bad_email' THEN 1 ELSE 0 END, length(email), id`
  ).bind(c.cds_key, id).all<any>()).results;
  return renderDetail(c, history, alternatives, TEMPLATES);
}

async function handleApplyTemplate(env: Env, id: number, req: Request): Promise<Response> {
  const form = await req.formData();
  const tplId = String(form.get("template_id") || "");
  const tpl = templateById(tplId);
  if (!tpl) return new Response("Unknown template", { status: 400 });
  const c = await env.DB.prepare(`SELECT * FROM contacts WHERE id=?`).bind(id).first<any>();
  if (!c) return new Response("Not found", { status: 404 });
  const rendered = tpl.build(c);
  await env.DB.prepare(
    `UPDATE contacts SET template_id=?, draft_subject=?, draft_body=?, updated_at=? WHERE id=?`
  ).bind(tpl.id, rendered.subject, rendered.body, new Date().toISOString(), id).run();
  return Response.redirect(`${new URL(req.url).origin}/c/${id}`, 303);
}

async function handleSwapPrimary(env: Env, id: number, req: Request): Promise<Response> {
  const c = await env.DB.prepare(`SELECT cds_key FROM contacts WHERE id=?`).bind(id).first<{ cds_key: string }>();
  if (!c) return new Response("Not found", { status: 404 });
  await env.DB.batch([
    env.DB.prepare(`UPDATE contacts SET is_primary = 0 WHERE cds_key = ?`).bind(c.cds_key),
    env.DB.prepare(`UPDATE contacts SET is_primary = 1, updated_at = ? WHERE id = ?`).bind(new Date().toISOString(), id),
  ]);
  return Response.redirect(`${new URL(req.url).origin}/c/${id}`, 303);
}

async function handleSave(env: Env, id: number, req: Request): Promise<Response> {
  const form = await req.formData();
  const subject = String(form.get("subject") || "").trim();
  const body = String(form.get("body") || "").trim();
  const action = String(form.get("action") || "save");

  const now = new Date().toISOString();
  await env.DB.prepare(
    `UPDATE contacts SET draft_subject=?, draft_body=?, updated_at=? WHERE id=?`
  ).bind(subject, body, now, id).run();

  if (action === "validate") {
    await env.DB.prepare(`UPDATE contacts SET draft_status='validated', updated_at=? WHERE id=?`).bind(now, id).run();
  } else if (action === "unvalidate") {
    await env.DB.prepare(`UPDATE contacts SET draft_status='draft', updated_at=? WHERE id=?`).bind(now, id).run();
  } else if (action === "skip") {
    await env.DB.prepare(`UPDATE contacts SET draft_status='skipped', updated_at=? WHERE id=?`).bind(now, id).run();
  } else if (action === "bad_email") {
    await env.DB.prepare(`UPDATE contacts SET draft_status='bad_email', updated_at=? WHERE id=?`).bind(now, id).run();
  } else if (action === "send_now") {
    const c = await env.DB.prepare(`SELECT * FROM contacts WHERE id=?`).bind(id).first<any>();
    if (c && c.step === 0) await sendJ0(env, c);
  }
  return Response.redirect(`${new URL(req.url).origin}/c/${id}`, 303);
}

async function handleQuickFlag(env: Env, id: number, req: Request): Promise<Response> {
  const form = await req.formData();
  const status = String(form.get("status") || "");
  const returnTo = String(form.get("return_to") || "/");
  const allowed = new Set(["draft", "bad_email", "skipped"]);
  if (!allowed.has(status)) return new Response("Bad status", { status: 400 });
  const c = await env.DB.prepare(`SELECT cds_key, is_primary FROM contacts WHERE id=?`).bind(id).first<{ cds_key: string; is_primary: number }>();
  await env.DB.prepare(
    `UPDATE contacts SET draft_status=?, updated_at=? WHERE id=?`
  ).bind(status, new Date().toISOString(), id).run();
  // si on flag le primaire en bad/skip, on promeut un alternatif
  if (c && c.is_primary && (status === "bad_email" || status === "skipped")) {
    await promoteNextPrimary(env, c.cds_key);
  }
  const safeReturn = returnTo.startsWith("/") ? returnTo : "/";
  return Response.redirect(`${new URL(req.url).origin}${safeReturn}`, 303);
}

async function handleSaveNotes(env: Env, id: number, req: Request): Promise<Response> {
  const form = await req.formData();
  const notes = String(form.get("notes") || "");
  await env.DB.prepare(`UPDATE contacts SET notes=?, updated_at=? WHERE id=?`)
    .bind(notes, new Date().toISOString(), id).run();
  return Response.redirect(`${new URL(req.url).origin}/c/${id}`, 303);
}

// ===================== Entry =====================
export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    const path = url.pathname;

    // routes publiques (sans auth)
    if (path.startsWith("/u/") && req.method === "GET") return handleUnsubscribe(env, path);
    if (path === "/webhook/resend" && req.method === "POST") return handleResendWebhook(env, req);
    if (path === "/import" && req.method === "POST") return handleImport(env, req);
    if (path === "/run" && req.method === "POST") {
      if (req.headers.get("x-auth") !== env.WEBHOOK_SECRET) return new Response("Unauthorized", { status: 401 });
      return Response.json(await runPipeline(env));
    }
    if (path === "/admin/distribute-templates" && req.method === "POST") {
      if (req.headers.get("x-auth") !== env.WEBHOOK_SECRET) return new Response("Unauthorized", { status: 401 });
      // Pour chaque contact éligible (draft/validated, jamais envoyé), pick + render le bon template
      const force = new URL(req.url).searchParams.get("force") === "1";
      const where = force
        ? "draft_status IN ('draft','validated') AND step=0"
        : "draft_status IN ('draft','validated') AND step=0 AND template_id IS NULL";
      let updated = 0;
      const BATCH = 500;
      let offset = 0;
      while (true) {
        const rs = await env.DB.prepare(
          `SELECT id, email, first_name, nom_cds, ville, specialite, region, segment FROM contacts WHERE ${where} LIMIT ? OFFSET ?`
        ).bind(BATCH, offset).all<any>();
        if (rs.results.length === 0) break;
        const ops = rs.results.map(c => {
          const tpl = pickTemplateFor(c);
          const rendered = tpl.build(c);
          return env.DB.prepare(
            `UPDATE contacts SET template_id=?, draft_subject=?, draft_body=?, updated_at=? WHERE id=?`
          ).bind(tpl.id, rendered.subject, rendered.body, new Date().toISOString(), c.id);
        });
        await env.DB.batch(ops);
        updated += rs.results.length;
        if (rs.results.length < BATCH) break;
        offset += BATCH;
      }
      return Response.json({ updated });
    }

    // dashboard — Basic Auth
    const authFail = requireAuth(req, env.WEBHOOK_SECRET);
    if (authFail) return authFail;

    if (path === "/" && req.method === "GET") return handleList(env, url);
    if (path === "/templates" && req.method === "GET") {
      // Stats par template
      const stats = await env.DB.prepare(
        `SELECT template_id, COUNT(*) AS n FROM contacts WHERE is_primary=1 GROUP BY template_id`
      ).all<{ template_id: string; n: number }>();
      const counts: Record<string, number> = {};
      for (const r of stats.results) counts[r.template_id || "(none)"] = r.n;
      return renderTemplatesPage(TEMPLATES, counts);
    }
    if (path === "/stats" && req.method === "GET") {
      const s = await getStats(env);
      return renderStats(s);
    }
    const detail = path.match(/^\/c\/(\d+)$/);
    if (detail && req.method === "GET") return handleDetail(env, parseInt(detail[1], 10));
    const save = path.match(/^\/c\/(\d+)\/save$/);
    if (save && req.method === "POST") return handleSave(env, parseInt(save[1], 10), req);
    const quick = path.match(/^\/c\/(\d+)\/quickflag$/);
    if (quick && req.method === "POST") return handleQuickFlag(env, parseInt(quick[1], 10), req);
    const swap = path.match(/^\/c\/(\d+)\/swap-primary$/);
    if (swap && req.method === "POST") return handleSwapPrimary(env, parseInt(swap[1], 10), req);
    const applyTpl = path.match(/^\/c\/(\d+)\/apply-template$/);
    if (applyTpl && req.method === "POST") return handleApplyTemplate(env, parseInt(applyTpl[1], 10), req);
    const notes = path.match(/^\/c\/(\d+)\/notes$/);
    if (notes && req.method === "POST") return handleSaveNotes(env, parseInt(notes[1], 10), req);

    return new Response("Not found", { status: 404 });
  },

  async scheduled(_event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(runPipeline(env).then(r => console.log("scheduled run:", JSON.stringify(r))));
  },
};
