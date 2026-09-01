#!/usr/bin/env node
// ---------------------------------------------------------------------------
// scripts/gen-og-image.mjs — génère public/og-image.png au format 1200x630.
//
// Pourquoi. L'image de partage était un SVG. Facebook, LinkedIn et X ne
// rendent pas le SVG : chaque partage du site s'affichait sans aperçu. Le
// balisage schema.org `logo` attend lui aussi un format matriciel.
//
// Le PNG est produit ici puis commité, plutôt que généré à chaque build : il
// ne change qu'avec l'identité visuelle, et un binaire stable évite d'ajouter
// une dépendance de rendu au pipeline de déploiement.
//
// Usage : node scripts/gen-og-image.cjs
// ---------------------------------------------------------------------------

const { ImageResponse } = require("next/og");
const { writeFileSync } = require("node:fs");

const img = new ImageResponse(
  {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #0f2b46 0%, #14507a 55%, #1b7fb8 100%)",
        color: "white",
        fontFamily: "sans-serif",
      },
      children: [
        {
          type: "div",
          props: {
            style: { fontSize: 30, letterSpacing: 6, textTransform: "uppercase", opacity: 0.75 },
            children: "Opti-CDS",
          },
        },
        {
          type: "div",
          props: {
            style: { fontSize: 74, fontWeight: 700, lineHeight: 1.12, marginTop: 28 },
            children: "Le conseil dédié aux centres de santé",
          },
        },
        {
          type: "div",
          props: {
            style: { fontSize: 34, marginTop: 32, opacity: 0.9, lineHeight: 1.35 },
            children: "Financements, subventions, recrutement médical, organisation",
          },
        },
        {
          type: "div",
          props: {
            style: { fontSize: 28, marginTop: 44, opacity: 0.8 },
            children: "opti-cds.fr",
          },
        },
      ],
    },
  },
  { width: 1200, height: 630 }
);

(async () => {
  const buf = Buffer.from(await img.arrayBuffer());
  writeFileSync("public/og-image.png", buf);
  console.log(`public/og-image.png écrit, ${buf.length} octets`);
})();
