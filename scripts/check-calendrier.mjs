#!/usr/bin/env node
// ---------------------------------------------------------------------------
// scripts/check-calendrier.mjs — garde-fou sur le rythme de publication.
//
// L'audit SEO contrôle ce qui est déjà construit. Ce script contrôle ce qui
// est PROGRAMMÉ : les dates de publication encore à venir dans
// content/posts.ts et content/territoires.ts.
//
// Règle appliquée : jamais plus de 2 pages datées du même jour à venir.
//
// Pourquoi. Le domaine est récent et sans notoriété. Une publication groupée
// y ressemble à de la génération de masse, ce qui est précisément le signal
// à éviter. Une page tous les trois ou quatre jours, régulièrement, vaut
// mieux que huit pages puis trois semaines de silence.
//
// Le passé n'est pas contrôlé : on ne réécrit pas l'historique, et les lots
// déjà en ligne ne peuvent plus être étalés sans créer des 404.
//
// Usage : node scripts/check-calendrier.mjs
// ---------------------------------------------------------------------------

import { readFileSync, existsSync } from "node:fs";

const MAX_PAR_JOUR = 2;
const SOURCES = [
  { fichier: "content/posts.ts", champ: "date" },
  { fichier: "content/territoires.ts", champ: "datePublication" },
];

const aujourdhui = new Date().toISOString().slice(0, 10);
const aVenir = [];

for (const { fichier, champ } of SOURCES) {
  if (!existsSync(fichier)) continue;
  const src = readFileSync(fichier, "utf8");
  // Chaque entrée expose un slug puis, plus bas, sa date de publication.
  const re = new RegExp(`slug:\\s*"([^"]+)"[\\s\\S]*?${champ}:\\s*"(\\d{4}-\\d{2}-\\d{2})"`, "g");
  let m;
  while ((m = re.exec(src)) !== null) {
    const [, slug, date] = m;
    if (date > aujourdhui) aVenir.push({ slug, date, fichier });
  }
}

if (aVenir.length === 0) {
  console.log("calendrier : aucune publication programmée.");
  process.exit(0);
}

const parJour = aVenir.reduce((a, e) => ((a[e.date] = a[e.date] || []).push(e.slug), a), {});
const dates = Object.keys(parJour).sort();

console.log(`calendrier : ${aVenir.length} publication(s) programmée(s) sur ${dates.length} date(s).`);
for (const d of dates) console.log(`  ${d}  ${parJour[d].join(", ")}`);

const fautes = dates.filter((d) => parJour[d].length > MAX_PAR_JOUR);
if (fautes.length) {
  console.error(`\ncalendrier : rythme de publication non respecté.\n`);
  for (const d of fautes) {
    console.error(`  ✗ ${d} : ${parJour[d].length} pages datées du même jour (maximum ${MAX_PAR_JOUR})`);
    for (const s of parJour[d]) console.error(`      ${s}`);
  }
  console.error(`\nÉtale ces dates sur plusieurs jours avant de publier.\n`);
  process.exit(1);
}

console.log(`\ncalendrier : rythme respecté, maximum ${MAX_PAR_JOUR} par jour.`);
process.exit(0);
