#!/usr/bin/env node
/**
 * Audit AGRESSIF de tous les primaires en draft (toutes régions).
 *
 * Score chaque contact sur plusieurs signaux et flag bad_email tout ce
 * qui passe sous le seuil. Re-promote le primaire suivant pour chaque CDS.
 *
 * Usage : node scripts/audit-all.mjs [--apply] [--threshold=N]
 *   --threshold=1   par défaut : flag tout ce qui score < 1 (strict)
 *   --threshold=0   conservateur : flag uniquement les scores négatifs
 *   --threshold=2   très agressif : on garde que les highly trusted
 */
import { spawnSync } from "node:child_process";

const APPLY = process.argv.includes("--apply");
const thArg = process.argv.find(a => a.startsWith("--threshold="));
const THRESHOLD = thArg ? parseInt(thArg.split("=")[1], 10) : 1;

const PERSONAL = new Set(["gmail.com","googlemail.com","outlook.fr","outlook.com","outlook.es",
  "hotmail.fr","hotmail.com","live.fr","live.com","msn.com",
  "yahoo.fr","yahoo.com","ymail.com","orange.fr","wanadoo.fr","free.fr","sfr.fr",
  "neuf.fr","laposte.net","bbox.fr","numericable.fr","icloud.com","me.com",
  "proton.me","protonmail.com","tutanota.com","aol.com","gmx.fr","gmx.com",
  "orange.com"]);

const STOPWORDS = new Set(["le","la","les","de","du","des","d","et","aux","au","l",
  "centre","centres","cds","csi","cmpp","cmp","sante","santé","medical","médical",
  "médicale","medicale","dentaire","dentaires","polyvalent","polyvalente","municipal",
  "municipale","communautaire","intercommunal","association","mutualiste","mutualite",
  "mutuelle","soins","soin","infirmier","infirmiers","saint","ste","st","sainte",
  "paris","ave","rue","boulevard","avenue","bd","csm","fr","com","org","net"]);

const HEALTH = ["sante","medical","dentaire","ophtalmo","cds","csi","centre","clinique",
  "polyclin","mutuel","mutual","cabinet","sant","medic","odonto","dental"];

// Domaines à kill direct
const JUNK_DOMAINS = new Set([
  "sentry.io","sentry.wixpress.com","wixpress.com","wix.com","godaddy.com",
  "hospitalidee.fr","doctolib.fr","ameli.fr","pagesjaunes.fr",
  "talent.com","careerexplorer.com","writingexplained.org","merriam-webster.com",
  "mapquest.com","premierleague.com","office.com",
  "icade.fr","sodexo.fr","sodexo.com","axa.fr","edf.fr","carrefour.com",
  "monsite.com","example.com","yourdomain.com","seltzercompetences.fr",
  "rdv-medecins.com","med.works","redentklinik.com","districlubmedical.com",
  "icaliforniamedical.com","livinparis.com","lescentresdesante.com",
  "philharmoniedeparis.fr","ag2rlamondiale.fr","msa.fr","oxance.fr",
  "donbosco.asso.fr", "wibox.fr", "barnes-montblanc.com", "francethisway.com",
  "petitscommerces.fr", "tousvoisins.fr", "trouverunmedecin.fr",
]);
const FOREIGN_TLDS_RE = /\.(au|uk|de|es|it|pt|be|nl|ch|tr|us|ru|cn|jp|kr|br|mx|ie|at|se|no|dk|fi|pl|cz|ro|hu|bg|hr|sk|si|lv|lt|ee|mt|lu|in|ca)$/;
const JUNK_TLD_RE = /\.(app|shop|online|site|club|xyz|tv|biz|cloud|works|agency|studio|tech)$/;

const BAD_LOCALS = new Set([
  "noreply","no-reply","donotreply","webmaster","postmaster","abuse","admin",
  "dpo","rgpd","privacy","legal","support","serviceclient","service-client",
  "customercare","customerservice","client","recrutement","recrutements",
  "rh","drh","compta","comptabilite","facturation","commercial","ventes",
  "marketing","communication","presse","media","medias","redaction",
  "exemple","example","test","sample","demo","fake","root","mail",
]);

function normTokens(s) {
  return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")
    .replace(/[^a-z0-9 ]+/g," ").split(/\s+/).filter(t => t.length>=4 && !STOPWORDS.has(t));
}

function isMairie(d) {
  return /^mairie|^ville[-.]|^commune[-.]|\.gouv\.fr$|\.mairie\.|^cias/.test(d);
}

function isHashLocal(local) {
  if (local.length < 18) return false;
  if (/[._-]/.test(local)) return false;
  return /^[a-f0-9]+$/i.test(local);
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

  // HARD KILLS
  if (JUNK_DOMAINS.has(dom)) { return { score: -10, reasons: [`junk domain ${dom}`] }; }
  if (FOREIGN_TLDS_RE.test(dom)) { return { score: -10, reasons: [`foreign TLD ${dom}`] }; }
  if (JUNK_TLD_RE.test(dom)) { return { score: -10, reasons: [`junk TLD ${dom}`] }; }
  if (BAD_LOCALS.has(local)) { return { score: -10, reasons: [`bad local ${local}`] }; }
  if (isHashLocal(local)) { return { score: -10, reasons: [`hex hash local`] }; }
  if (/^\d{8,}$/.test(local)) { return { score: -10, reasons: [`digit-only local`] }; }
  if (local.length > 30 && !/[._-]/.test(local)) {
    return { score: -10, reasons: [`long random local`] };
  }

  // POSITIVES
  if ((c.source||"").startsWith("ars_")) { s += 5; reasons.push("ARS source"); }
  if ([...cdsTokens, ...villeTokens].some(t => root.includes(t))) {
    s += 4; reasons.push("dom matches CDS/ville");
  }
  if (PERSONAL.has(dom)) {
    s += 3; reasons.push("personal provider");
    // mais le local doit pas être trop générique
    if (["contact","info","accueil"].includes(local)) s -= 1;
  }
  if (isMairie(dom)) { s += 3; reasons.push("mairie/.gouv"); }
  if (["mairie","commune","maire","ccas"].includes(local)) { s += 3; reasons.push("local mairie/ccas"); }
  if (HEALTH.some(k => dom.includes(k))) { s += 2; reasons.push("health keyword"); }
  if (["direction","directeur","accueil","contact","secretariat","info","cabinet"].includes(local)) {
    s += 1; reasons.push("clean local");
  }

  // NEGATIVES
  if (s === 0) { s = -2; reasons.push("no signal"); }
  return { score: s, reasons };
}

function wrangler(cmd) {
  const r = spawnSync("npx",
    ["wrangler","d1","execute","optids-cold","--remote","--json","--command",cmd],
    { encoding:"utf-8", maxBuffer: 200*1024*1024 });
  if (r.status !== 0) { console.error(r.stderr); process.exit(1); }
  const idx = r.stdout.indexOf("[");
  return JSON.parse(r.stdout.slice(idx))[0]?.results || [];
}

console.log(`Fetching all primary contacts in draft (toutes régions)...`);
const rows = wrangler(
  "SELECT id, email, nom_cds, ville, dept, region, source FROM contacts " +
  "WHERE is_primary=1 AND draft_status='draft'"
);
console.log(`-> ${rows.length} primaires à auditer\n`);

const scored = rows.map(c => ({ ...c, ...scoreContact(c) }));
const dist = { kill: [], suspect: [], ok: [], good: [] };
const reasonStats = {};
for (const c of scored) {
  if (c.score < THRESHOLD) {
    dist.kill.push(c);
    for (const r of c.reasons) reasonStats[r] = (reasonStats[r]||0)+1;
  }
  else if (c.score < 3) dist.suspect.push(c);
  else if (c.score < 5) dist.ok.push(c);
  else dist.good.push(c);
}

console.log(`Distribution :`);
console.log(`  💎 Highly trusted (≥5)  : ${dist.good.length}`);
console.log(`  ✅ OK (3-4)            : ${dist.ok.length}`);
console.log(`  🟡 Suspect (THR-2)    : ${dist.suspect.length}`);
console.log(`  🔴 Kill (< ${THRESHOLD})         : ${dist.kill.length}`);

console.log(`\nTop raisons de kill :`);
Object.entries(reasonStats).sort((a,b)=>b[1]-a[1]).slice(0,15).forEach(([r,n]) =>
  console.log(`  ${n.toString().padStart(4)}  ${r}`)
);

console.log(`\nÉchantillon de 25 kills :`);
dist.kill.slice(0,25).forEach(c => {
  console.log(`  ${c.id.toString().padEnd(5)} [${(c.region||"--").padEnd(20)}] ${c.email.padEnd(45)} <- ${(c.nom_cds||"").slice(0,45)} | ${c.reasons[0]}`);
});

if (!APPLY) {
  console.log(`\n(dry-run — ajoute --apply pour flagger les ${dist.kill.length} en bad_email + re-promote)`);
  process.exit(0);
}

console.log(`\nFlagging ${dist.kill.length} en bad_email + re-promote des primaires...`);
const ids = dist.kill.map(c => c.id);
for (let i = 0; i < ids.length; i += 200) {
  const chunk = ids.slice(i, i+200).join(",");
  wrangler(`UPDATE contacts SET draft_status='bad_email', updated_at=datetime('now') WHERE id IN (${chunk})`);
  process.stdout.write(`\r  flagged ${Math.min(i+200, ids.length)}/${ids.length}`);
}
console.log();

// Re-promote primaries pour les CDS dont le primaire a été flag
console.log(`Re-computing is_primary global...`);
wrangler(`
UPDATE contacts SET is_primary = 0;
UPDATE contacts SET is_primary = 1 WHERE id IN (
  SELECT id FROM (
    SELECT id, ROW_NUMBER() OVER (
      PARTITION BY cds_key
      ORDER BY
        CASE WHEN draft_status='bad_email' THEN 1 ELSE 0 END,
        CASE WHEN source LIKE 'ars_%' THEN 0 ELSE 1 END,
        CASE WHEN source IN ('scraping_idf_v3','scraping_fr_v3') THEN 1 ELSE 2 END,
        length(email), id
    ) AS rn FROM contacts
  ) WHERE rn = 1
)`);
console.log(`Done.`);
