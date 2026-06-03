#!/usr/bin/env node
/**
 * Importe les contacts ARS 93 (transmis officiellement par l'ARS-IDF).
 * Source = ars_93, segment = A_premium (priorité absolue).
 * Ces contacts NE DOIVENT PAS être flaggés bad_email — ce sont les officiels.
 *
 * Usage : WORKER_URL=... WEBHOOK_SECRET=... node scripts/import-ars93.mjs <csv>
 */
import fs from "node:fs";

const WORKER_URL = process.env.WORKER_URL;
const SECRET = process.env.WEBHOOK_SECRET;
const file = process.argv[2] || "/tmp/finess/ars_emails_cds93.csv";

if (!WORKER_URL || !SECRET) { console.error("Missing env"); process.exit(1); }

// devine la ville depuis le libelle (ex: "AUBERVILLIERS CDS DENTAIRE..." -> AUBERVILLIERS)
function guessVille(lib) {
  const m = lib.match(/^([A-Z][A-Z\s\-]{3,30})\s+(CDS|CENTRE|Centre|Association|MNH|DRANCY)/);
  return m ? m[1].trim() : "";
}

// devine la spécialité depuis le libelle
function guessSpec(nom) {
  const n = nom.toLowerCase();
  if (/dentaire|dental|odonto/.test(n)) return "Dentaire";
  if (/ophtalmo|optique|vision/.test(n)) return "Ophtalmologie";
  if (/psy|sante mentale/.test(n)) return "Psychiatrie / Santé mentale";
  if (/radio|imagerie|echographie/.test(n)) return "Imagerie";
  if (/polyvalent|pluridisciplin/.test(n)) return "Polyvalent";
  if (/municipal/.test(n)) return "Municipal";
  if (/mutualiste|mutuelle/.test(n)) return "Mutualiste";
  return "Médical";
}

function buildDraft() {
  return {
    subject: `Un financement Assurance Maladie que la plupart des CDS ne demandent pas`,
    body: `Bonjour,

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

const content = fs.readFileSync(file, "utf-8");
const lines = content.split(/\r?\n/).filter(Boolean);
const headers = lines[0].replace(/^﻿/, "").split(",");
const rows = lines.slice(1).map(line => {
  const cells = line.split(",");
  const obj = {};
  headers.forEach((h, i) => obj[h.trim()] = (cells[i] ?? "").trim());
  return obj;
});

const contacts = rows.map(r => {
  const nom = r.libelle || "";
  const ville = guessVille(nom);
  const c = {
    email: r.email,
    nom_cds: nom,
    ville,
    dept: "93",
    region: "Île-de-France",
    specialite: guessSpec(nom),
    source: "ars_93",
    segment: "A_premium",
  };
  const d = buildDraft(c);
  c.draft_subject = d.subject;
  c.draft_body = d.body;
  return c;
});

console.log(`Pushing ${contacts.length} contacts ARS 93 vers ${WORKER_URL}`);
let inserted = 0, skipped = 0;
for (let i = 0; i < contacts.length; i += 100) {
  const chunk = contacts.slice(i, i + 100);
  const r = await fetch(`${WORKER_URL}/import`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-auth": SECRET },
    body: JSON.stringify(chunk),
  });
  const j = await r.json();
  inserted += j.inserted || 0; skipped += j.skipped || 0;
  process.stdout.write(`\r  ${Math.min(i + 100, contacts.length)}/${contacts.length}   `);
}
console.log(`\nDone. Inserted: ${inserted} | Already present (skipped): ${skipped}`);
