#!/usr/bin/env node
/**
 * Réécrit tous les drafts (status draft/validated, jamais envoyés) avec le template à jour.
 * Préserve uniquement les drafts qui ont déjà été ouverts/édités manuellement
 * (heuristique : si le body ne matche AUCUN ancien template connu, on le laisse).
 */
import { spawnSync } from "node:child_process";

const NEW_SUBJECT = "Un financement Assurance Maladie que la plupart des CDS ne demandent pas";
const NEW_BODY_TEMPLATE = (helloLine) => `${helloLine}

Je dirige Opti-CDS — on accompagne les centres de santé sur un dispositif de financement de l'Assurance Maladie auquel tous les CDS ont droit, mais que la quasi-totalité ne demande jamais.

Pas par négligence : le sujet est si peu connu (même des comptables et avocats généralistes) et le dossier tellement administratif que la plupart des directions finissent par laisser tomber. Pourtant c'est une rentrée non négligeable chaque année quand on s'en occupe correctement.

On prend tout en charge, de bout en bout, sans avance de votre part : on n'est rémunéré qu'au succès — uniquement si le versement arrive sur votre compte.

Vous avez 15 min cette semaine pour qu'on en parle ?

Bonne journée,

Sacha
Opti-CDS
https://opti-cds.fr`;

// Heuristique : un draft "auto-généré" contient l'un de ces marqueurs des anciens templates.
const AUTO_MARKERS = [
  "Subvention Teulade",
  "article L162-32",
  "Sacha Bitoun",
  "En moyenne nos clients récupèrent",
  "On accompagne les centres de santé sur la subvention Teulade",
  "regarde rapidement si",
];

function wrangler(cmd) {
  const r = spawnSync(
    "npx",
    ["wrangler", "d1", "execute", "optids-cold", "--remote", "--json", "--command", cmd],
    { encoding: "utf-8", maxBuffer: 100 * 1024 * 1024 }
  );
  if (r.status !== 0) { console.error("wrangler failed:", r.stderr); process.exit(1); }
  const idx = r.stdout.indexOf("[");
  return JSON.parse(r.stdout.slice(idx))[0]?.results || [];
}

// Récupère tous les drafts éditables (draft/validated, jamais envoyé)
const rows = wrangler(
  "SELECT id, first_name, draft_subject, draft_body FROM contacts WHERE draft_status IN ('draft','validated') AND step = 0"
);
console.log(`${rows.length} drafts candidats`);

const toUpdate = [];
for (const r of rows) {
  const body = r.draft_body || "";
  const looksAuto = AUTO_MARKERS.some(m => body.includes(m));
  if (!looksAuto) continue; // édité manuellement -> on touche pas
  const helloLine = r.first_name ? `Bonjour ${r.first_name},` : "Bonjour,";
  toUpdate.push({
    id: r.id,
    subject: NEW_SUBJECT,
    body: NEW_BODY_TEMPLATE(helloLine),
  });
}
console.log(`${toUpdate.length} drafts à réécrire (les drafts édités manuellement sont préservés)`);

if (process.argv.includes("--apply")) {
  console.log("Application en cours...");
  for (let i = 0; i < toUpdate.length; i += 50) {
    const chunk = toUpdate.slice(i, i + 50);
    // une UPDATE par draft (le body contient des quotes, plus simple ainsi)
    for (const u of chunk) {
      const safeBody = u.body.replace(/'/g, "''");
      const safeSubject = u.subject.replace(/'/g, "''");
      wrangler(
        `UPDATE contacts SET draft_subject='${safeSubject}', draft_body='${safeBody}', updated_at=datetime('now') WHERE id=${u.id}`
      );
    }
    process.stdout.write(`\r  ${Math.min(i + 50, toUpdate.length)}/${toUpdate.length}   `);
  }
  console.log("\nDone.");
} else {
  console.log("(dry-run — ajoute --apply pour appliquer)");
  console.log("\nÉchantillon (3 premiers) :");
  toUpdate.slice(0, 3).forEach(u => console.log(`  id=${u.id}`));
}
