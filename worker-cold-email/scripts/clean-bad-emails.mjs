#!/usr/bin/env node
/**
 * Nettoyage agressif des mails poubelles.
 *
 * Récupère les contacts en draft, applique des règles strictes,
 * et flag en bad_email tout ce qui sent l'arnaque/le faux positif.
 *
 * Usage :
 *   CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... node scripts/clean-bad-emails.mjs [--apply]
 *   (sans --apply => dry-run, montre seulement combien et lesquels)
 */
import { spawnSync } from "node:child_process";

const APPLY = process.argv.includes("--apply");

// ───────── règles bad email ─────────
const BAD_DOMAINS = new Set([
  // tracking / error reporting
  "sentry.io", "sentry.wixpress.com",
  // hosting / SaaS génériques
  "wixpress.com", "wix.com", "godaddy.com",
  "ovh.net", "ovh.com", "ovh.fr", "ovhcloud.com",
  "gandi.net", "ionos.fr", "ionos.com", "1and1.com",
  "amazonaws.com", "cloudfront.net", "sendgrid.net",
  // annuaires / plateformes santé qui ne sont PAS le CDS
  "hospitalidee.fr", "doctolib.fr", "ameli.fr", "pagesjaunes.fr",
  "msa.fr", "ag2rlamondiale.fr", "merriam-webster.com",
  "barnes-montblanc.com", "francethisway.com", "petitscommerces.fr",
  "tousvoisins.fr", "trouverunmedecin.fr",
  // exemples / placeholders
  "example.com", "example.fr", "example.org",
  "monsite.com", "monsite.fr", "yourdomain.com", "domain.com",
  "test.com", "sample.com",
  // corporates sans rapport
  "icade.fr", "icade.com", "sodexo.fr", "sodexo.com",
  "accorhotels.com", "axa.fr", "groupama.fr", "macif.fr",
  "carrefour.com", "lcl.fr", "bnpparibas.com", "credit-agricole.fr",
  "veolia.com", "engie.com", "edf.fr", "orange.com",
  // pubs / chaînes connues hors santé
  "tripadvisor.com", "tripadvisor.fr", "facebook.com", "instagram.com",
  // domaines de redirection / liens trompeurs
  "donbosco.asso.fr",
]);

const BAD_DOMAIN_SUFFIXES = [
  ".sentry.io", ".sentry.wixpress.com", ".wixsite.com",
  ".amazonaws.com", ".cloudfront.net", ".cloudfunctions.net",
  ".herokuapp.com", ".netlify.app", ".vercel.app",
];

// TLD pays étrangers : aucun CDS français n'a légitimement un mail là-dedans
const FOREIGN_TLDS = new Set([
  "au","uk","de","es","it","pt","be","nl","ch","tr","us","ru","cn",
  "jp","kr","br","mx","in","ca","ie","at","se","no","dk","fi","pl",
  "cz","gr","ro","hu","bg","hr","sk","si","lv","lt","ee","mt","lu",
]);
// TLD "junky" (apps SaaS, agences pub, etc.)
const JUNK_TLDS = new Set([
  "app","shop","online","site","club","xyz","tv","biz","info-online",
  "agency","studio","tech","works","cloud",
]);

function hasForeignTld(domain) {
  const parts = domain.split(".");
  const tld = parts[parts.length - 1];
  const sld = parts[parts.length - 2];
  // .com.au / .co.uk → pays = avant-dernier
  if (parts.length >= 3 && FOREIGN_TLDS.has(tld)) return tld;
  // pays direct (.au, .uk, .de, …)
  if (FOREIGN_TLDS.has(tld)) return tld;
  return null;
}

function hasJunkTld(domain) {
  const tld = domain.split(".").pop();
  return JUNK_TLDS.has(tld) ? tld : null;
}

const BAD_LOCAL_PARTS = new Set([
  // techniques
  "noreply", "no-reply", "donotreply", "do-not-reply",
  "webmaster", "postmaster", "abuse", "admin", "administrator",
  "hostmaster", "root", "mail", "test",
  // RGPD / juridique
  "dpo", "rgpd", "privacy", "legal", "juridique",
  // support hors-sujet
  "support", "serviceclient", "service-client", "service.client",
  "customercare", "customerservice", "client",
  // RH / Recrut / Compta / Commercial
  "recrutement", "recrutements", "recruit", "recruitment",
  "rh", "drh", "ressources-humaines",
  "compta", "comptabilite", "comptabilité", "facturation", "factures",
  "commercial", "ventes", "marketing", "communication",
  "presse", "media", "medias", "redaction",
  // examples
  "exemple", "example", "sample", "demo", "fake",
]);

// providers email personnels acceptés (ne sont pas matchés contre le nom du CDS)
const PERSONAL_PROVIDERS = new Set([
  "gmail.com", "googlemail.com", "outlook.fr", "outlook.com", "outlook.es",
  "hotmail.fr", "hotmail.com", "live.fr", "live.com", "msn.com",
  "yahoo.fr", "yahoo.com", "ymail.com",
  "orange.fr", "wanadoo.fr", "free.fr", "sfr.fr", "neuf.fr", "laposte.net",
  "bbox.fr", "numericable.fr", "club-internet.fr",
  "icloud.com", "me.com", "mac.com",
  "proton.me", "protonmail.com", "tutanota.com",
  "aol.com", "gmx.fr", "gmx.com",
  "orange.com",
]);

// mots qui indiquent un domaine "lié à la santé" même sans matcher le nom du CDS
const HEALTH_KEYWORDS = [
  "sante", "santé", "medical", "médical", "dentaire", "ophtalmo",
  "centre", "clinique", "cds", "csi", "cmpp", "cmp",
  "polyclin", "infirmier", "psy", "kine", "kiné",
  "mutualite", "mutualité", "mutualiste", "mutuelle",
  "hopital", "hôpital", "hospitalier",
];

// mots-vide à retirer du nom de CDS avant matching
const STOPWORDS = new Set([
  "le","la","les","de","du","des","d","et","aux","au","l",
  "centre","centres","cds","csi","cmpp","cmp","cmps",
  "sante","santé","medical","médical","médicale","medicale",
  "dentaire","dentaires","polyvalent","polyvalente","polyvalents",
  "ophtalmologie","ophtalmologique","ophtalmo",
  "municipal","municipale","communautaire","intercommunal",
  "association","mutualiste","mutualite","mutuelle",
  "soins","soin","infirmier","infirmiers","infirmiere",
  "saint","ste","st","sainte",
]);

function normalize(s) {
  return (s || "").toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .split(/\s+/).filter(Boolean);
}

function significantTokens(nom) {
  return normalize(nom).filter(t => t.length >= 4 && !STOPWORDS.has(t));
}

// hash hex / token long sans '.' ni '-' ni '_' => 99% du temps tracking ou erreur
function isHashLocal(local) {
  if (local.length < 20) return false;
  if (/[._-]/.test(local)) return false;
  return /^[a-f0-9]+$/i.test(local);
}

function domainMatchesCds(domain, nomCds) {
  // strip TLD + remove host parts type "www"
  const root = domain.replace(/^www\./, "").split(".").slice(0, -1).join("");
  const tokens = significantTokens(nomCds);
  if (tokens.length === 0) return false;
  for (const t of tokens) {
    if (root.includes(t) || domain.includes(t)) return true;
  }
  return false;
}

function domainLooksHealth(domain) {
  return HEALTH_KEYWORDS.some(k => domain.includes(k));
}

function isMairieDomain(domain) {
  return /^mairie/.test(domain)        // mairie*.fr, mairiedebilliat.fr, etc.
      || /^ville[-.]/.test(domain)
      || /^commune[-.]/.test(domain)
      || /^cc[a-z]+[-.]/.test(domain)   // CC* = communauté de communes
      || /^cias[-.]/.test(domain)
      || /\.mairie\./.test(domain)
      || /\.gouv\.fr$/.test(domain);
}

// le local part lui-même peut indiquer un contact mairie/admin local
function isMairieLocal(local) {
  return /^mairie/.test(local)
      || /^commune\b/.test(local)
      || /^maire\b/.test(local)
      || /^secretariat[-.]?(mairie|commune)/.test(local);
}

// chiffres consécutifs longs (ex: 1234567890@...) => suspect
function isPureDigits(local) {
  return /^\d{8,}$/.test(local);
}

function classify(email, nomCds) {
  const e = email.toLowerCase().trim();
  const [local, domain] = e.split("@");
  if (!local || !domain) return { bad: true, reason: "invalid format" };

  if (BAD_DOMAINS.has(domain)) return { bad: true, reason: `domain ${domain}` };
  for (const suf of BAD_DOMAIN_SUFFIXES) {
    if (domain.endsWith(suf)) return { bad: true, reason: `domain suffix ${suf}` };
  }
  const foreignTld = hasForeignTld(domain);
  if (foreignTld) return { bad: true, reason: `TLD étranger .${foreignTld}` };
  const junkTld = hasJunkTld(domain);
  if (junkTld) return { bad: true, reason: `TLD junky .${junkTld}` };
  if (BAD_LOCAL_PARTS.has(local)) return { bad: true, reason: `local ${local}` };
  if (isHashLocal(local)) return { bad: true, reason: "hex hash local" };
  if (isPureDigits(local)) return { bad: true, reason: "pure digits local" };
  if (local.length > 30 && !/[._-]/.test(local)) {
    return { bad: true, reason: "long local without separator" };
  }

  // ── règle "fiable" ─────────────────────────────────────────
  // Personal provider → keep (souvent c'est le mail du directeur)
  if (PERSONAL_PROVIDERS.has(domain)) return { bad: false };

  // Mairie / CCAS / ville → keep
  if (isMairieDomain(domain) || isMairieLocal(local)) return { bad: false };

  // Domaine "santé" générique → keep
  if (domainLooksHealth(domain)) return { bad: false };

  // Domaine qui matche le nom du CDS → keep
  if (domainMatchesCds(domain, nomCds)) return { bad: false };

  // Sinon : domaine random sans lien évident avec le CDS → flag
  return { bad: true, reason: "domain unrelated to CDS" };
}

// ───────── exécution wrangler ─────────
function wranglerD1(command) {
  const r = spawnSync(
    "npx",
    ["wrangler", "d1", "execute", "optids-cold", "--remote", "--json", "--command", command],
    { encoding: "utf-8", maxBuffer: 100 * 1024 * 1024 }
  );
  if (r.status !== 0) {
    console.error("wrangler d1 failed:", r.stderr);
    process.exit(1);
  }
  // wrangler prints some logs then the JSON. Find the JSON array.
  const idx = r.stdout.indexOf("[");
  const parsed = JSON.parse(r.stdout.slice(idx));
  return parsed[0]?.results || [];
}

console.log("Fetching contacts (draft + validated) from remote D1...");
// Skip ars_* sources: ces emails sont des contacts officiels ARS, jamais à flagger
const rows = wranglerD1(
  "SELECT id, email, nom_cds FROM contacts WHERE draft_status IN ('draft','validated') AND (source IS NULL OR source NOT LIKE 'ars_%')"
);
console.log(`-> ${rows.length} contacts à analyser`);

const bad = [];
const reasons = {};
for (const r of rows) {
  const c = classify(r.email, r.nom_cds || "");
  if (c.bad) {
    bad.push({ ...r, reason: c.reason });
    reasons[c.reason] = (reasons[c.reason] || 0) + 1;
  }
}

console.log(`\n=== ${bad.length} contacts à flagger bad_email (${Math.round(100*bad.length/rows.length)}%) ===`);
console.log("\nRépartition par raison :");
Object.entries(reasons).sort((a,b)=>b[1]-a[1]).forEach(([r,n]) => console.log(`  ${n.toString().padStart(4)}  ${r}`));

console.log("\nÉchantillon de 'domain unrelated to CDS' (vérif manuelle, 25 max) :");
bad.filter(r => r.reason === "domain unrelated to CDS").slice(0, 25).forEach(r => {
  console.log(`  ${r.id.toString().padEnd(5)} ${r.email.padEnd(45)} <- ${(r.nom_cds||"").slice(0,55)}`);
});

if (!APPLY) {
  console.log("\n(dry-run — pour appliquer : ajoute --apply)");
  process.exit(0);
}

console.log(`\nApplication en cours (batches de 200)...`);
let updated = 0;
for (let i = 0; i < bad.length; i += 200) {
  const chunk = bad.slice(i, i + 200);
  const ids = chunk.map(r => r.id).join(",");
  wranglerD1(`UPDATE contacts SET draft_status='bad_email', updated_at=datetime('now') WHERE id IN (${ids})`);
  updated += chunk.length;
  process.stdout.write(`\r  ${updated}/${bad.length}   `);
}
console.log(`\nDone. ${updated} contacts flaggés bad_email.`);
