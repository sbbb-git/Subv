/**
 * Opti-CDS cold email worker
 *
 * Cron (lun-ven 9h UTC) :
 *  1. Avance le pipeline (step 1 -> J0, step 2 -> J+4 si J0 >= 4j, step 3 -> J+9 si J+4 >= 5j)
 *  2. Envoie via Resend dans la limite DAILY_LIMIT/jour
 *  3. Threade les relances en réutilisant le Message-ID du J0
 *
 * HTTP routes :
 *  GET  /              -> dashboard simple (stats)
 *  GET  /u/:token      -> unsubscribe
 *  POST /webhook/resend -> webhook Resend (bounce / complaint / delivered)
 *  POST /run           -> trigger manuel du cron (header X-Auth: WEBHOOK_SECRET)
 *  POST /import        -> import en masse de contacts (JSON, header X-Auth)
 */

import { buildJ0, buildJ4, buildJ9, type Contact } from "./templates";

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
const DAYS_J9 = 5; // 5 jours après le J+4 = J+9

// ---------- HMAC token pour unsubscribe ----------
async function hmac(salt: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(salt),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(msg));
  return btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_").slice(0, 24);
}

async function unsubUrl(env: Env, contactId: number): Promise<string> {
  const sig = await hmac(env.UNSUBSCRIBE_SALT, String(contactId));
  return `${env.BASE_URL}/u/${contactId}.${sig}`;
}

// ---------- Resend ----------
type ResendResponse = { id?: string; message?: string };

async function sendViaResend(env: Env, opts: {
  to: string;
  subject: string;
  text: string;
  unsubscribeUrl: string;
  inReplyTo?: string;
  references?: string;
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

  const body = {
    from: env.FROM_EMAIL,
    to: [opts.to],
    reply_to: env.REPLY_TO,
    subject: opts.subject,
    text: opts.text,
    headers,
  };

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = (await r.json()) as ResendResponse;
  if (!r.ok || !data.id) {
    return { id: null, messageId: null, error: data.message || `HTTP ${r.status}` };
  }
  // Resend ne renvoie pas le Message-ID directement, on le reconstruit comme Resend le fait
  const messageId = `<${data.id}@${env.FROM_EMAIL.split("@")[1].replace(/>$/, "")}>`;
  return { id: data.id, messageId };
}

// ---------- Pipeline ----------
async function pickContactsForStep(
  env: Env, step: 1 | 2 | 3, limit: number
): Promise<Contact[]> {
  if (step === 1) {
    // J0 : prend les pending dans l'ordre segment A puis B
    const rs = await env.DB.prepare(
      `SELECT id, email, first_name, nom_cds, ville FROM contacts
       WHERE status = 'pending' AND step = 0
       ORDER BY segment ASC, id ASC
       LIMIT ?`
    ).bind(limit).all<Contact>();
    return rs.results;
  }
  const lookback = step === 2 ? DAYS_J4 : DAYS_J9;
  const prevStep = step - 1;
  const rs = await env.DB.prepare(
    `SELECT id, email, first_name, nom_cds, ville FROM contacts
     WHERE status = 'sending' AND step = ?
       AND datetime(last_sent_at) <= datetime('now', '-' || ? || ' days')
     ORDER BY segment ASC, id ASC
     LIMIT ?`
  ).bind(prevStep, lookback, limit).all<Contact>();
  return rs.results;
}

async function getJ0ThreadInfo(env: Env, contactId: number): Promise<{ subject: string; messageId: string } | null> {
  const row = await env.DB.prepare(
    `SELECT s.message_id as message_id
     FROM sends s
     WHERE s.contact_id = ? AND s.step = 1
     ORDER BY s.id ASC LIMIT 1`
  ).bind(contactId).first<{ message_id: string }>();
  if (!row?.message_id) return null;
  return { subject: `Subvention Teulade — éligibilité de votre centre`, messageId: row.message_id };
}

async function runPipeline(env: Env): Promise<{ sent: number; errors: number; breakdown: Record<string, number> }> {
  const limit = parseInt(env.DAILY_LIMIT || "30", 10);
  let budget = limit;
  const breakdown = { j0: 0, j4: 0, j9: 0 };
  let errors = 0;

  // Priorité aux relances (J+9 puis J+4) puis aux J0 — on entretient les threads avant d'en ouvrir
  for (const step of [3, 2, 1] as const) {
    if (budget <= 0) break;
    const contacts = await pickContactsForStep(env, step, budget);
    for (const c of contacts) {
      if (budget <= 0) break;
      const uurl = await unsubUrl(env, c.id);

      let subject: string, text: string, inReplyTo: string | undefined, references: string | undefined;
      if (step === 1) {
        ({ subject, text } = buildJ0(c, uurl));
      } else {
        const t = await getJ0ThreadInfo(env, c.id);
        if (!t) { errors++; continue; }
        ({ subject, text } = step === 2 ? buildJ4(c, uurl, t.subject) : buildJ9(c, uurl, t.subject));
        inReplyTo = t.messageId;
        references = t.messageId;
      }

      const result = await sendViaResend(env, {
        to: c.email, subject, text,
        unsubscribeUrl: uurl, inReplyTo, references,
      });

      const now = new Date().toISOString();
      if (result.id) {
        await env.DB.batch([
          env.DB.prepare(
            `INSERT INTO sends (contact_id, step, resend_id, message_id, sent_at, status)
             VALUES (?, ?, ?, ?, ?, 'sent')`
          ).bind(c.id, step, result.id, result.messageId, now),
          env.DB.prepare(
            `UPDATE contacts
             SET step = ?, last_sent_at = ?, status = CASE WHEN ? = 3 THEN 'done' ELSE 'sending' END
             WHERE id = ?`
          ).bind(step, now, step, c.id),
        ]);
        if (step === 1) breakdown.j0++;
        else if (step === 2) breakdown.j4++;
        else breakdown.j9++;
        budget--;
      } else {
        errors++;
        await env.DB.prepare(
          `INSERT INTO sends (contact_id, step, status, error, sent_at) VALUES (?, ?, 'error', ?, ?)`
        ).bind(c.id, step, result.error || "unknown", now).run();
      }
      // petit délai random pour pas spammer Resend (max 2 req/s)
      await new Promise(r => setTimeout(r, 250 + Math.random() * 500));
    }
  }

  const total = breakdown.j0 + breakdown.j4 + breakdown.j9;
  await env.DB.prepare(
    `INSERT INTO events (type, detail) VALUES ('run_end', ?)`
  ).bind(JSON.stringify({ sent: total, errors, breakdown, budget_left: budget })).run();

  return { sent: total, errors, breakdown };
}

// ---------- HTTP ----------
async function handleUnsubscribe(env: Env, path: string): Promise<Response> {
  const m = path.match(/^\/u\/(\d+)\.([A-Za-z0-9_\-]+)$/);
  if (!m) return new Response("Lien invalide", { status: 400 });
  const id = parseInt(m[1], 10);
  const expected = await hmac(env.UNSUBSCRIBE_SALT, String(id));
  if (expected !== m[2]) return new Response("Signature invalide", { status: 403 });
  await env.DB.batch([
    env.DB.prepare(`UPDATE contacts SET status = 'unsubscribed' WHERE id = ?`).bind(id),
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
  // Vérif secret simple via header partagé
  if (req.headers.get("x-webhook-secret") !== env.WEBHOOK_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }
  const payload = await req.json() as { type: string; data?: { email_id?: string; to?: string[] } };
  const type = payload.type || "";
  const resendId = payload.data?.email_id;
  if (!resendId) return new Response("ok");

  // Map Resend event -> notre statut
  let newSendStatus: string | null = null;
  let contactAction: string | null = null;
  if (type === "email.bounced") { newSendStatus = "bounced"; contactAction = "bounced"; }
  else if (type === "email.complained") { newSendStatus = "complained"; contactAction = "unsubscribed"; }
  else if (type === "email.delivered") { newSendStatus = "delivered"; }
  else if (type === "email.opened") { newSendStatus = "opened"; }
  else if (type === "email.clicked") { newSendStatus = "clicked"; }

  if (newSendStatus) {
    await env.DB.prepare(
      `UPDATE sends SET status = ? WHERE resend_id = ?`
    ).bind(newSendStatus, resendId).run();
  }
  if (contactAction) {
    await env.DB.prepare(
      `UPDATE contacts SET status = ? WHERE id =
         (SELECT contact_id FROM sends WHERE resend_id = ?)`
    ).bind(contactAction, resendId).run();
    await env.DB.prepare(
      `INSERT INTO events (contact_id, type, detail)
       SELECT contact_id, ?, ? FROM sends WHERE resend_id = ?`
    ).bind(type, JSON.stringify(payload), resendId).run();
  }
  return new Response("ok");
}

async function handleImport(env: Env, req: Request): Promise<Response> {
  if (req.headers.get("x-auth") !== env.WEBHOOK_SECRET) return new Response("Unauthorized", { status: 401 });
  const contacts = await req.json() as Array<{
    email: string; first_name?: string; nom_cds?: string;
    ville?: string; dept?: string; source?: string; segment?: string;
  }>;
  let inserted = 0, skipped = 0;
  for (const c of contacts) {
    const e = (c.email || "").trim().toLowerCase();
    if (!e || !e.includes("@")) { skipped++; continue; }
    try {
      const r = await env.DB.prepare(
        `INSERT OR IGNORE INTO contacts (email, first_name, nom_cds, ville, dept, source, segment)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        e, c.first_name || null, c.nom_cds || null, c.ville || null,
        c.dept || null, c.source || null, c.segment || "B_standard"
      ).run();
      if (r.meta.changes > 0) inserted++; else skipped++;
    } catch { skipped++; }
  }
  return Response.json({ inserted, skipped, total: contacts.length });
}

async function handleDashboard(env: Env): Promise<Response> {
  const stats = await env.DB.prepare(
    `SELECT status, COUNT(*) as n FROM contacts GROUP BY status`
  ).all<{ status: string; n: number }>();
  const sent24h = await env.DB.prepare(
    `SELECT COUNT(*) as n FROM sends WHERE datetime(sent_at) >= datetime('now', '-1 day') AND status NOT IN ('error')`
  ).first<{ n: number }>();
  const sent7d = await env.DB.prepare(
    `SELECT step, COUNT(*) as n FROM sends WHERE datetime(sent_at) >= datetime('now', '-7 days') AND status NOT IN ('error') GROUP BY step`
  ).all<{ step: number; n: number }>();
  const events = await env.DB.prepare(
    `SELECT type, COUNT(*) as n FROM events GROUP BY type ORDER BY n DESC LIMIT 10`
  ).all<{ type: string; n: number }>();
  return Response.json({
    contacts: stats.results,
    sent_24h: sent24h?.n || 0,
    sent_7d_by_step: sent7d.results,
    events: events.results,
  }, { headers: { "Cache-Control": "no-store" } });
}

// ---------- Entry points ----------
export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (req.method === "GET" && url.pathname === "/") return handleDashboard(env);
    if (req.method === "GET" && url.pathname.startsWith("/u/")) return handleUnsubscribe(env, url.pathname);
    if (req.method === "POST" && url.pathname === "/webhook/resend") return handleResendWebhook(env, req);
    if (req.method === "POST" && url.pathname === "/import") return handleImport(env, req);
    if (req.method === "POST" && url.pathname === "/run") {
      if (req.headers.get("x-auth") !== env.WEBHOOK_SECRET) return new Response("Unauthorized", { status: 401 });
      const result = await runPipeline(env);
      return Response.json(result);
    }
    return new Response("Not found", { status: 404 });
  },

  async scheduled(_event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(runPipeline(env).then(r => console.log("scheduled run:", JSON.stringify(r))));
  },
};
