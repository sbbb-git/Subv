#!/usr/bin/env node
/**
 * Push le CSV vers le Worker /import endpoint.
 *
 * Usage :
 *   WORKER_URL=https://opti-cds-cold-email.xxx.workers.dev \
 *   WEBHOOK_SECRET=xxx \
 *   node scripts/import.mjs ../campagne_optids_v1.csv
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

function parseCSVLine(line) {
  // CSV simple (pas de quoted commas dans notre fichier)
  return line.split(",").map(s => s.replace(/^﻿/, "").trim());
}

async function main() {
  const rl = readline.createInterface({ input: fs.createReadStream(file) });
  let headers = null;
  const rows = [];
  for await (const line of rl) {
    if (!line.trim()) continue;
    const cells = parseCSVLine(line);
    if (!headers) { headers = cells; continue; }
    const obj = Object.fromEntries(headers.map((h, i) => [h, cells[i] || ""]));
    rows.push(obj);
  }
  console.log(`${rows.length} lignes à pousser vers ${WORKER_URL}/import`);

  const BATCH = 200;
  let inserted = 0, skipped = 0;
  for (let i = 0; i < rows.length; i += BATCH) {
    const chunk = rows.slice(i, i + BATCH);
    const r = await fetch(`${WORKER_URL}/import`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-auth": SECRET },
      body: JSON.stringify(chunk),
    });
    const j = await r.json();
    inserted += j.inserted || 0;
    skipped += j.skipped || 0;
    console.log(`  batch ${i + chunk.length}/${rows.length} -> +${j.inserted} new, ${j.skipped} skipped`);
  }
  console.log(`\nDone. Inserted: ${inserted} | Skipped (déjà présents): ${skipped}`);
}
main().catch(e => { console.error(e); process.exit(1); });
