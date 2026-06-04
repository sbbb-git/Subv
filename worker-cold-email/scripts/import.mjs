#!/usr/bin/env node
/**
 * Importe le CSV des CDS dans le Worker (D1).
 *
 * - Devine la spécialité depuis le nom (Dentaire / Ophtalmo / Polyvalent / etc.)
 * - Explose les emails multiples (séparés par ';') en plusieurs contacts
 * - Filtre les emails poubelles (annuaires, mutuelles, plateformes)
 * - Génère un draft auto (subject + body) à partir du template, l'utilisateur édite ensuite
 *
 * Usage :
 *   WORKER_URL=https://cold.opti-cds.fr \
 *   WEBHOOK_SECRET=xxx \
 *   node scripts/import.mjs /tmp/finess/cds_france_emails.csv
 */
import fs from "node:fs";
import readline from "node:readline";

const WORKER_URL = process.env.WORKER_URL;
const SECRET = process.env.WEBHOOK_SECRET;
const file = process.argv[2];

if (!WORKER_URL || !SECRET || !file) {
  console.error("Missing WORKER_URL / WEBHOOK_SECRET / file argument");
  process.exit(1);
}

const SPEC_RULES = [
  [/dentaire|dental|odonto|orthod/i, "Dentaire"],
  [/ophtalmo|optique|vision/i, "Ophtalmologie"],
  [/psychiatr|psycho|sante mentale|santé mentale|cmpp|cmp/i, "Psychiatrie / Santé mentale"],
  [/echographie|imagerie|radio|radiolog|scanner|irm/i, "Imagerie"],
  [/planning|planification|familial|ivg|cpef/i, "Planning familial"],
  [/dialyse|nephro/i, "Dialyse"],
  [/kine|rééducation|reeducation|kinesi/i, "Rééducation"],
  [/infirm|^csi /i, "Infirmier"],
  [/maternel|petite enfance|pmi/i, "PMI / Petite enfance"],
  [/sage[- ]femme/i, "Sage-femme"],
  [/addict|cssra|csapa/i, "Addictologie"],
  [/polyvalent|pluridisciplin/i, "Polyvalent"],
  [/municipal/i, "Municipal"],
  [/mutualiste|mutuelle/i, "Mutualiste"],
];
function guessSpec(nom) {
  if (!nom) return "Médical";
  for (const [re, label] of SPEC_RULES) if (re.test(nom)) return label;
  return "Médical";
}

const BAD_DOM = new Set([
  "hospitalidee.fr", "doctolib.fr", "ameli.fr", "pagesjaunes.fr",
  "wanadoo.fr", "free.fr", "laposte.net", "sfr.fr", "neuf.fr",
  "wixpress.com", "godaddy.com", "sentry.io", "example.com",
  "msa.fr", "ag2rlamondiale.fr", "merriam-webster.com",
]);
const BAD_LOCAL = new Set(["noreply","no-reply","donotreply","webmaster","postmaster","abuse","rgpd","dpo"]);
function cleanEmail(e) {
  e = (e||"").toLowerCase().trim().replace(/^[.,;:]+|[.,;:'")]+$/g, "");
  if (!/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(e)) return null;
  const [local, dom] = e.split("@");
  if (BAD_LOCAL.has(local) || BAD_DOM.has(dom)) return null;
  if (e.length > 60) return null;
  return e;
}

function titlecase(s) {
  if (!s) return "";
  return s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function buildDraft(c) {
  const hello = c.first_name ? `Bonjour ${c.first_name},` : "Bonjour,";
  return {
    subject: `Un financement Assurance Maladie que la plupart des CDS ne demandent pas`,
    body: `${hello}

Je dirige Opti-CDS — on accompagne les centres de santé sur un dispositif de financement de l'Assurance Maladie auquel tous les CDS ont droit, mais que la quasi-totalité ne demande jamais.

Pas par négligence : le sujet est si peu connu (même des comptables et avocats généralistes) et le dossier tellement administratif que la plupart des directions finissent par laisser tomber. Pourtant c'est une rentrée non négligeable chaque année quand on s'en occupe correctement.

On prend tout en charge, de bout en bout, sans avance de votre part : on n'est rémunéré qu'au succès — uniquement si le versement arrive sur votre compte.

Vous avez 15 min cette semaine pour qu'on en parle ?

Bonne journée,

Sacha
Opti-CDS
https://opti-cds.fr`,
  };
}

function parseCsv(content) {
  // simple CSV parser : pas de gestion des quoted commas (notre CSV n'en a pas)
  const lines = content.split(/\r?\n/).filter(l => l.length > 0);
  const headers = lines[0].replace(/^﻿/, "").split(",").map(h => h.trim());
  return lines.slice(1).map(line => {
    const cells = line.split(",");
    const obj = {};
    headers.forEach((h, i) => { obj[h] = (cells[i] ?? "").trim(); });
    return obj;
  });
}

// Répare le mojibake type "MÃDICAL" -> "MÉDICAL" (UTF-8 lu comme latin-1).
// Heuristique : si on détecte la séquence 0xC3 0x83 (chars Ã + suivant) on retraite.
function fixMojibake(s) {
  if (!s || !/[ÃÂ]/.test(s)) return s;
  try {
    const fixed = Buffer.from(s, "latin1").toString("utf-8");
    // garde la version réparée seulement si on a éliminé les caractères suspects
    return fixed.includes("�") ? s : fixed;
  } catch { return s; }
}

async function main() {
  const content = fs.readFileSync(file, "utf-8");
  const rows = parseCsv(content);
  for (const r of rows) for (const k of Object.keys(r)) r[k] = fixMojibake(r[k]);
  console.log(`${rows.length} lignes CDS dans le CSV (mojibake réparé)`);

  const contacts = [];
  for (const r of rows) {
    const emails = (r.emails || "").split(";").map(cleanEmail).filter(Boolean);
    if (emails.length === 0) continue;
    const nom = r.nom || "";
    const base = {
      nom_cds: nom,
      adresse: r.adresse || "",
      code_postal: r.code_postal || "",
      ville: titlecase(r.ville || ""),
      dept: r.dept || "",
      telephone: r.telephone || "",
      site_web: r.site_web || "",
      finess: r.finess || "",
      siret: r.siret || "",
      specialite: guessSpec(nom),
      source: process.env.SOURCE || "scraping_fr",
      segment: process.env.SEGMENT || "B_standard",
      first_name: null,
    };
    for (const email of emails) {
      const c = { ...base, email };
      const d = buildDraft(c);
      c.draft_subject = d.subject;
      c.draft_body = d.body;
      contacts.push(c);
    }
  }
  console.log(`-> ${contacts.length} contacts (emails uniques attendus) à pousser`);

  const BATCH = 100;
  let inserted = 0, skipped = 0;
  for (let i = 0; i < contacts.length; i += BATCH) {
    const chunk = contacts.slice(i, i + BATCH);
    const r = await fetch(`${WORKER_URL}/import`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-auth": SECRET },
      body: JSON.stringify(chunk),
    });
    if (!r.ok) {
      console.error(`batch ${i}: HTTP ${r.status}`);
      continue;
    }
    const j = await r.json();
    inserted += j.inserted || 0;
    skipped += j.skipped || 0;
    process.stdout.write(`\r  ${Math.min(i + BATCH, contacts.length)}/${contacts.length}  (+${inserted} new, ${skipped} skipped)   `);
  }
  console.log(`\nDone. Inserted: ${inserted} | Skipped (déjà présents): ${skipped}`);
}
main().catch(e => { console.error(e); process.exit(1); });
