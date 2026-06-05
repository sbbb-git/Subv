#!/usr/bin/env node
/**
 * Audit IDF : repère les emails primaires en draft qui sentent encore le faux.
 *
 * Calcule un score de confiance par email + nom_cds :
 *  - +3 si domaine matche le nom du CDS ou la ville
 *  - +2 si domaine = personal provider (gmail/orange/free/etc.)
 *  - +2 si domaine est une mairie / .gouv.fr
 *  - +1 si domaine contient un mot santé (sante/medical/dentaire/cds/...)
 *  - +1 si local part est sain (direction/contact/accueil/secretariat/info)
 *  -2 si domaine ne matche rien (suspect)
 *
 * Affiche les contacts SOUS un seuil (1 par défaut) — c'est ceux à reviewer/virer.
 *
 * Usage : node scripts/audit-idf.mjs [--apply]   (--apply = flag bad_email)
 */
import { spawnSync } from "node:child_process";
const APPLY = process.argv.includes("--apply");

const PERSONAL = new Set(["gmail.com","outlook.fr","outlook.com","hotmail.fr","hotmail.com",
  "yahoo.fr","yahoo.com","orange.fr","wanadoo.fr","free.fr","sfr.fr","laposte.net",
  "neuf.fr","icloud.com","proton.me","aol.com","live.fr","live.com","gmx.fr"]);
const STOPWORDS = new Set(["le","la","les","de","du","des","d","et","aux","au","l",
  "centre","centres","cds","csi","cmpp","cmp","sante","santé","medical","médical",
  "médicale","medicale","dentaire","dentaires","polyvalent","polyvalente","municipal",
  "municipale","communautaire","intercommunal","association","mutualiste","mutualite",
  "mutuelle","soins","soin","infirmier","infirmiers","saint","ste","st","sainte",
  "paris","ave","rue","boulevard","avenue","bd"]);
const HEALTH = ["sante","medical","dentaire","ophtalmo","cds","csi","centre","clinique",
  "polyclin","mutuel","mutual","cabinet"];

function normTokens(s) {
  return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")
    .replace(/[^a-z0-9 ]+/g," ").split(/\s+/).filter(t => t.length>=4 && !STOPWORDS.has(t));
}
function isMairie(d) {
  return /^mairie|^ville[-.]|^commune[-.]|\.gouv\.fr$|\.mairie\.|^cias/.test(d);
}

function scoreContact(c) {
  const e = (c.email||"").toLowerCase();
  if (!e.includes("@")) return { score: -99, reasons: ["invalid"] };
  const [local, dom] = e.split("@");
  const reasons = [];
  let s = 0;
  const cdsTokens = normTokens(c.nom_cds || "");
  const villeTokens = normTokens(c.ville || "");
  const root = dom.replace(/^www\./,"");

  if ([...cdsTokens, ...villeTokens].some(t => root.includes(t))) {
    s += 3; reasons.push("dom matches CDS/ville");
  }
  if (PERSONAL.has(dom)) { s += 2; reasons.push("personal provider"); }
  if (isMairie(dom))      { s += 2; reasons.push("mairie/.gouv"); }
  if (HEALTH.some(k => dom.includes(k))) { s += 1; reasons.push("health keyword in dom"); }
  if (["direction","directeur","contact","accueil","secretariat","info","cabinet"].includes(local)) {
    s += 1; reasons.push("clean local");
  }
  // ARS source = donné officiel, trust max
  if ((c.source||"").startsWith("ars_")) { s += 10; reasons.push("ARS source"); }
  if (s === 0) { s = -2; reasons.push("no signal"); }
  return { score: s, reasons };
}

function wrangler(cmd) {
  const r = spawnSync("npx",
    ["wrangler","d1","execute","optids-cold","--remote","--json","--command",cmd],
    { encoding:"utf-8", maxBuffer: 100*1024*1024 });
  if (r.status !== 0) { console.error(r.stderr); process.exit(1); }
  const idx = r.stdout.indexOf("[");
  return JSON.parse(r.stdout.slice(idx))[0]?.results || [];
}

const rows = wrangler(
  "SELECT id, email, nom_cds, ville, dept, source FROM contacts " +
  "WHERE region='Île-de-France' AND is_primary=1 AND draft_status='draft'"
);
console.log(`${rows.length} primaires IDF en draft à auditer\n`);

const scored = rows.map(c => ({ ...c, ...scoreContact(c) }));
const buckets = { good: [], ok: [], suspect: [], bad: [] };
for (const c of scored) {
  if (c.score >= 4) buckets.good.push(c);
  else if (c.score >= 2) buckets.ok.push(c);
  else if (c.score >= 0) buckets.suspect.push(c);
  else buckets.bad.push(c);
}

console.log(`Score:`);
console.log(`  ✅ Fiable (≥4)   : ${buckets.good.length}`);
console.log(`  🟡 OK (2-3)      : ${buckets.ok.length}`);
console.log(`  🟠 Suspect (0-1) : ${buckets.suspect.length}`);
console.log(`  🔴 Très suspect (<0) : ${buckets.bad.length}`);

console.log(`\n=== Très suspects (à flagger bad_email) ===`);
buckets.bad.slice(0, 30).forEach(c => {
  console.log(`  ${c.id.toString().padEnd(5)} ${c.email.padEnd(45)} <- ${(c.nom_cds||"").slice(0,55)}`);
});

console.log(`\n=== Suspects (vérifier manuellement) ===`);
buckets.suspect.slice(0, 20).forEach(c => {
  console.log(`  ${c.id.toString().padEnd(5)} ${c.email.padEnd(45)} <- ${(c.nom_cds||"").slice(0,55)}`);
});

if (APPLY) {
  console.log(`\nFlagging ${buckets.bad.length} contacts as bad_email...`);
  for (let i = 0; i < buckets.bad.length; i += 200) {
    const ids = buckets.bad.slice(i, i+200).map(c => c.id).join(",");
    wrangler(`UPDATE contacts SET draft_status='bad_email', updated_at=datetime('now') WHERE id IN (${ids})`);
  }
  console.log(`Done.`);
} else {
  console.log(`\n(dry-run — ajoute --apply pour flagger les ${buckets.bad.length} très suspects)`);
}
