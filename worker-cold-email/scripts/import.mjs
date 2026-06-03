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
  const nomShort = (c.nom_cds || "votre centre").slice(0, 60);
  const hello = c.first_name ? `Bonjour ${c.first_name},` : "Bonjour,";
  return {
    subject: `Subvention Teulade — éligibilité de votre centre`,
    body: `${hello}

Je dirige Opti-CDS, on accompagne les centres de santé sur la subvention Teulade (article L162-32 du code de la sécurité sociale) et le montage des dossiers ARS associés.

En moyenne nos clients récupèrent 15 à 20 k€ par dossier validé. Rémunération exclusivement au succès — vous ne nous payez que si la subvention tombe sur votre compte.

Vous avez 15 min cette semaine pour qu'on regarde rapidement si ${nomShort} est éligible ? Je vous fais un check sans engagement.

Bonne journée,

Sacha Bitoun
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

async function main() {
  const content = fs.readFileSync(file, "utf-8");
  const rows = parseCsv(content);
  console.log(`${rows.length} lignes CDS dans le CSV`);

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
      source: "scraping_fr",
      segment: "B_standard",
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
