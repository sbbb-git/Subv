#!/usr/bin/env node
// ---------------------------------------------------------------------------
// scripts/seo-audit.mjs — contrôle qualité SEO d'Opti-CDS, versionné.
//
// S'exécute APRÈS `npm run build`, sur le dossier `out/` produit par le
// static export. Sort en code 1 (et ne déploie donc rien) si une seule
// règle ci-dessous est violée. Aucune dépendance externe : Node pur.
//
// Règles (cf. prompt routine SEO, section 4) :
//   1. title (suffixe " · Opti-CDS" inclus) <= 60 caractères
//   2. meta description entre 110 et 160 caractères, APRÈS décodage entités
//   3. toute page indexable a une og:image
//   4. un article fait >= 350 mots réels (balises retirées)
//   5. un article a au moins un lien interne
//   6. un article ne contient aucune balise <Link (JSX fuité dans du HTML brut)
//   7. un lien interne pointe vers une cible présente dans out/
//
// Les pages en noindex et out/404.html sont exclues des règles 1-3.
// Usage : node scripts/seo-audit.mjs [outDir]   (outDir par défaut : "out")
// ---------------------------------------------------------------------------

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT_DIR = process.argv[2] || "out";
const errors = [];
const err = (page, msg) => errors.push(`${page}: ${msg}`);

if (!existsSync(OUT_DIR)) {
  console.error(`seo-audit: dossier "${OUT_DIR}" introuvable. Lance d'abord \`npm run build\`.`);
  process.exit(1);
}

// --- Décodage minimal des entités HTML pour mesurer une longueur réelle -----
const NAMED = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  eacute: "é", egrave: "è", ecirc: "ê", agrave: "à", acirc: "â",
  ccedil: "ç", ugrave: "ù", ucirc: "û", icirc: "î", iuml: "ï",
  ouml: "ö", uuml: "ü", euml: "ë", ocirc: "ô", laquo: "«", raquo: "»",
  rsquo: "’", lsquo: "‘", ldquo: "“", rdquo: "”", hellip: "…",
  ndash: "–", mdash: "—", euro: "€", deg: "°", times: "×", middot: "·",
};
function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-zA-Z]+);/g, (m, name) => (name in NAMED ? NAMED[name] : m));
}

// --- Collecte récursive des pages HTML -------------------------------------
function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (entry.endsWith(".html")) acc.push(full);
  }
  return acc;
}

// URL publique d'un fichier out/ (pour l'affichage et le mapping des liens)
function routeOf(file) {
  let r = "/" + relative(OUT_DIR, file).split(sep).join("/");
  r = r.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  return r === "" ? "/" : r;
}

// Une route interne "/foo" ou "/foo/bar" existe-t-elle dans out/ ?
function internalTargetExists(path) {
  const clean = path.split("#")[0].split("?")[0].replace(/\/$/, "");
  if (clean === "") return true; // "/" -> out/index.html
  const candidates = [
    join(OUT_DIR, clean, "index.html"),
    join(OUT_DIR, `${clean}.html`),
    join(OUT_DIR, clean), // asset direct (svg, txt, png...)
  ];
  return candidates.some((c) => existsSync(c));
}

const files = walk(OUT_DIR);

for (const file of files) {
  const route = routeOf(file);
  if (file.endsWith("404.html")) continue;
  const html = readFileSync(file, "utf8");

  // Pages noindex exclues des règles meta
  const robots = /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i.exec(html);
  const noindex = robots && /noindex/i.test(robots[1]);

  if (!noindex) {
    // Règle 1 : title <= 60
    const titleM = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
    if (!titleM) {
      err(route, "aucune balise <title>");
    } else {
      const title = decodeEntities(titleM[1].trim());
      if (title.length > 60) err(route, `title ${title.length} car > 60 : "${title}"`);
    }

    // Règle 2 : meta description 110-160 après décodage
    const descM = /<meta[^>]+name=["']description["'][^>]*content=["']([\s\S]*?)["']/i.exec(html)
      || /<meta[^>]+content=["']([\s\S]*?)["'][^>]*name=["']description["']/i.exec(html);
    if (!descM) {
      err(route, "aucune meta description");
    } else {
      const d = decodeEntities(descM[1].trim());
      if (d.length < 110 || d.length > 160) err(route, `meta description ${d.length} car hors 110-160`);
    }

    // Règle 3 : og:image présente
    if (!/<meta[^>]+property=["']og:image["']/i.test(html)) err(route, "og:image manquante");
  }

  // --- Règles articles : pages /ressources/<slug>/ (hors index) ------------
  const isArticle = /^\/ressources\/[^/]+\/?$/.test(route) && route !== "/ressources/";
  if (!isArticle) continue;

  // Isole le corps de l'article (div prose-content)
  const pIdx = html.indexOf("prose-content");
  let body = "";
  if (pIdx !== -1) {
    const openEnd = html.indexOf(">", pIdx);
    const closeIdx = html.indexOf("</div>", openEnd);
    body = openEnd !== -1 && closeIdx !== -1 ? html.slice(openEnd + 1, closeIdx) : "";
  }
  if (!body) {
    err(route, "corps d'article (prose-content) introuvable");
    continue;
  }

  // Règle 6 : aucune balise <Link (fuite JSX). Rendu échappé => &lt;Link
  if (/<Link\b/i.test(body) || /&lt;Link\b/i.test(body)) err(route, "balise <Link> (JSX) dans le HTML de l'article");

  // Règle 4 : >= 350 mots réels
  const text = decodeEntities(body.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  if (words < 350) err(route, `${words} mots < 350`);

  // Règle 5 + 7 : liens internes présents et cibles existantes
  const hrefs = [...body.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
  const internal = hrefs.filter((h) => h.startsWith("/") && !h.startsWith("//"));
  if (internal.length === 0) err(route, "aucun lien interne");
  for (const link of internal) {
    if (!internalTargetExists(link)) err(route, `lien interne cassé vers ${link} (cible absente de out/)`);
  }
}

if (errors.length) {
  console.error(`\nseo-audit : ${errors.length} erreur(s) — déploiement bloqué.\n`);
  for (const e of errors) console.error("  ✗ " + e);
  console.error("");
  process.exit(1);
}

console.log(`seo-audit : ${files.length} pages contrôlées, 0 erreur.`);
process.exit(0);
