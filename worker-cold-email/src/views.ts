// Rendu HTML du dashboard (server-side, sans framework)

const esc = (s: any) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

function shell(title: string, body: string): Response {
  return new Response(
    `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} — Opti-CDS Admin</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  textarea { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
</style>
</head>
<body class="bg-slate-50 text-slate-900">
<nav class="bg-white border-b">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
    <a href="/" class="font-bold text-lg">Opti-CDS · Cold Email</a>
    <a href="/?status=draft" class="text-sm text-slate-600 hover:text-slate-900">Drafts</a>
    <a href="/?status=validated" class="text-sm text-slate-600 hover:text-slate-900">Validés</a>
    <a href="/?status=sent" class="text-sm text-slate-600 hover:text-slate-900">Envoyés</a>
    <a href="/stats" class="text-sm text-slate-600 hover:text-slate-900">Stats</a>
  </div>
</nav>
<main class="max-w-7xl mx-auto p-4">
${body}
</main>
</body>
</html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

const STATUS_BADGE: Record<string, string> = {
  draft:     "bg-amber-100 text-amber-800",
  validated: "bg-emerald-100 text-emerald-800",
  sent:      "bg-sky-100 text-sky-800",
  skipped:   "bg-slate-200 text-slate-600",
  bad_email: "bg-rose-100 text-rose-800",
};
const STATUS_LABEL: Record<string, string> = {
  draft: "Brouillon", validated: "Validé", sent: "Envoyé",
  skipped: "Ignoré", bad_email: "Mail faux",
};

const STEP_BADGE: Record<number, string> = {
  0: "—", 1: "J0", 2: "J+4", 3: "J+9",
};

export function renderList(opts: {
  contacts: Array<any>,
  stats: { draft: number; validated: number; sent: number; skipped: number; bad_email: number; total: number; today_sent: number },
  filters: { status: string; q: string; dept: string; specialite: string },
  page: number,
  pageSize: number,
  totalFiltered: number,
  specialites: string[],
  depts: string[],
}): Response {
  const { contacts, stats, filters, page, pageSize, totalFiltered, specialites, depts } = opts;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / pageSize));
  const qs = (overrides: Record<string, any>) => {
    const p: Record<string, string> = { status: filters.status, q: filters.q, dept: filters.dept, specialite: filters.specialite, page: String(page) };
    for (const [k, v] of Object.entries(overrides)) p[k] = String(v);
    return new URLSearchParams(Object.entries(p).filter(([_, v]) => v !== "")).toString();
  };

  // forme du retour vers la liste après quick action
  const returnTo = `/${(filters.status || filters.q || filters.dept || filters.specialite || page > 1) ? "?" : ""}` +
    new URLSearchParams(Object.entries({
      status: filters.status, q: filters.q, dept: filters.dept,
      specialite: filters.specialite, page: page > 1 ? String(page) : "",
    }).filter(([_, v]) => v !== "")).toString();

  const rows = contacts.map(c => `
    <tr class="border-b hover:bg-slate-50">
      <td class="px-3 py-2">
        <span class="inline-block px-2 py-0.5 text-xs rounded ${STATUS_BADGE[c.draft_status] || "bg-slate-100"}">${STATUS_LABEL[c.draft_status] || c.draft_status}</span>
        ${c.step > 0 ? `<span class="ml-1 inline-block px-1.5 py-0.5 text-xs rounded bg-slate-100 text-slate-600">${STEP_BADGE[c.step]}</span>` : ""}
      </td>
      <td class="px-3 py-2">
        <a href="/c/${c.id}" class="font-medium text-slate-900 hover:text-emerald-700">${esc(c.nom_cds || "(sans nom)")}</a>
        <div class="text-xs text-slate-500">${esc(c.email)}</div>
      </td>
      <td class="px-3 py-2 text-sm">${esc(c.specialite || "")}</td>
      <td class="px-3 py-2 text-sm">${esc(c.ville || "")} ${c.dept ? `<span class="text-slate-400">(${esc(c.dept)})</span>` : ""}</td>
      <td class="px-3 py-2 text-sm text-slate-500">${esc(c.telephone || "")}</td>
      <td class="px-3 py-2 text-right whitespace-nowrap">
        ${c.draft_status !== "bad_email" ? `
          <form method="post" action="/c/${c.id}/quickflag" class="inline">
            <input type="hidden" name="status" value="bad_email">
            <input type="hidden" name="return_to" value="${esc(returnTo)}">
            <button class="text-rose-600 hover:bg-rose-50 px-2 py-1 rounded text-sm" title="Marquer email faux">❌ Faux</button>
          </form>` : `
          <form method="post" action="/c/${c.id}/quickflag" class="inline">
            <input type="hidden" name="status" value="draft">
            <input type="hidden" name="return_to" value="${esc(returnTo)}">
            <button class="text-slate-500 hover:bg-slate-100 px-2 py-1 rounded text-sm" title="Annuler le flag">↶ Annuler</button>
          </form>`}
        <a href="/c/${c.id}" class="text-emerald-700 hover:underline text-sm ml-2">Ouvrir →</a>
      </td>
    </tr>`).join("");

  const body = `
  <div class="grid grid-cols-2 md:grid-cols-6 gap-3 mb-4">
    <div class="bg-white rounded-lg border p-3"><div class="text-xs text-slate-500">Total</div><div class="text-xl font-bold">${stats.total}</div></div>
    <a href="/?status=draft" class="bg-amber-50 rounded-lg border border-amber-200 p-3 hover:border-amber-400"><div class="text-xs text-amber-700">Brouillons</div><div class="text-xl font-bold text-amber-900">${stats.draft}</div></a>
    <a href="/?status=validated" class="bg-emerald-50 rounded-lg border border-emerald-200 p-3 hover:border-emerald-400"><div class="text-xs text-emerald-700">Validés (file)</div><div class="text-xl font-bold text-emerald-900">${stats.validated}</div></a>
    <a href="/?status=sent" class="bg-sky-50 rounded-lg border border-sky-200 p-3 hover:border-sky-400"><div class="text-xs text-sky-700">Envoyés</div><div class="text-xl font-bold text-sky-900">${stats.sent}</div></a>
    <a href="/?status=bad_email" class="bg-rose-50 rounded-lg border border-rose-200 p-3 hover:border-rose-400"><div class="text-xs text-rose-700">Mails faux</div><div class="text-xl font-bold text-rose-900">${stats.bad_email || 0}</div></a>
    <div class="bg-slate-100 rounded-lg border p-3"><div class="text-xs text-slate-600">Envoyés aujourd'hui</div><div class="text-xl font-bold">${stats.today_sent}</div></div>
  </div>

  <form method="get" class="bg-white rounded-lg border p-3 mb-4 flex flex-wrap gap-3 items-end">
    <div>
      <label class="block text-xs text-slate-500">Statut</label>
      <select name="status" class="border rounded px-2 py-1 text-sm">
        <option value=""           ${filters.status==="" ? "selected" : ""}>Tous</option>
        <option value="draft"      ${filters.status==="draft" ? "selected" : ""}>Brouillon</option>
        <option value="validated"  ${filters.status==="validated" ? "selected" : ""}>Validé</option>
        <option value="sent"       ${filters.status==="sent" ? "selected" : ""}>Envoyé</option>
        <option value="skipped"    ${filters.status==="skipped" ? "selected" : ""}>Ignoré</option>
        <option value="bad_email"  ${filters.status==="bad_email" ? "selected" : ""}>Mail faux</option>
      </select>
    </div>
    <div>
      <label class="block text-xs text-slate-500">Spécialité</label>
      <select name="specialite" class="border rounded px-2 py-1 text-sm">
        <option value="">Toutes</option>
        ${specialites.map(s => `<option ${filters.specialite===s ? "selected" : ""}>${esc(s)}</option>`).join("")}
      </select>
    </div>
    <div>
      <label class="block text-xs text-slate-500">Département</label>
      <select name="dept" class="border rounded px-2 py-1 text-sm">
        <option value="">Tous</option>
        ${depts.map(d => `<option ${filters.dept===d ? "selected" : ""}>${esc(d)}</option>`).join("")}
      </select>
    </div>
    <div class="flex-1 min-w-[200px]">
      <label class="block text-xs text-slate-500">Recherche (nom / email / ville)</label>
      <input type="search" name="q" value="${esc(filters.q)}" class="border rounded px-2 py-1 text-sm w-full" placeholder="dentaire bagnolet…">
    </div>
    <button class="bg-slate-900 text-white text-sm px-3 py-1.5 rounded">Filtrer</button>
    <a href="/" class="text-sm text-slate-500 hover:underline">Reset</a>
  </form>

  <div class="bg-white rounded-lg border overflow-hidden">
    <table class="w-full text-sm">
      <thead class="bg-slate-50 text-xs uppercase text-slate-500">
        <tr>
          <th class="px-3 py-2 text-left">Statut</th>
          <th class="px-3 py-2 text-left">Centre / email</th>
          <th class="px-3 py-2 text-left">Spécialité</th>
          <th class="px-3 py-2 text-left">Ville</th>
          <th class="px-3 py-2 text-left">Tél.</th>
          <th class="px-3 py-2"></th>
        </tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="6" class="px-3 py-8 text-center text-slate-500">Aucun contact.</td></tr>`}</tbody>
    </table>
    <div class="bg-slate-50 px-3 py-2 flex items-center justify-between text-sm">
      <div class="text-slate-500">${totalFiltered} résultat${totalFiltered>1?"s":""} · page ${page}/${totalPages}</div>
      <div class="flex gap-2">
        ${page > 1 ? `<a class="px-2 py-1 border rounded bg-white" href="?${qs({page: page-1})}">‹ Préc.</a>` : ""}
        ${page < totalPages ? `<a class="px-2 py-1 border rounded bg-white" href="?${qs({page: page+1})}">Suiv. ›</a>` : ""}
      </div>
    </div>
  </div>`;
  return shell("Contacts", body);
}

export function renderDetail(c: any, history: any[]): Response {
  const subjectVal = esc(c.draft_subject || "");
  const bodyVal = esc(c.draft_body || "");
  const histRows = history.map(h => `
    <tr class="border-b text-xs">
      <td class="px-2 py-1 text-slate-500">${esc(h.sent_at)}</td>
      <td class="px-2 py-1"><span class="px-1.5 py-0.5 rounded bg-slate-100">${STEP_BADGE[h.step] || h.step}</span></td>
      <td class="px-2 py-1">${esc(h.status)}</td>
      <td class="px-2 py-1 text-slate-500">${esc(h.error || "")}</td>
    </tr>`).join("") || `<tr><td colspan="4" class="px-2 py-3 text-center text-slate-400 text-xs">Aucun envoi.</td></tr>`;

  const body = `
  <a href="/" class="text-sm text-slate-500 hover:text-slate-900">← Retour à la liste</a>

  <div class="mt-3 grid md:grid-cols-3 gap-4">
    <section class="md:col-span-1 bg-white rounded-lg border p-4">
      <div class="flex items-start justify-between">
        <h1 class="text-lg font-bold leading-tight">${esc(c.nom_cds || "(sans nom)")}</h1>
        <span class="inline-block px-2 py-0.5 text-xs rounded ${STATUS_BADGE[c.draft_status] || "bg-slate-100"}">${STATUS_LABEL[c.draft_status] || c.draft_status}</span>
      </div>
      <div class="mt-3 space-y-1 text-sm">
        <div>📧 <a href="mailto:${esc(c.email)}" class="text-emerald-700">${esc(c.email)}</a></div>
        ${c.telephone ? `<div>📞 <a href="tel:${esc(c.telephone)}" class="text-slate-700">${esc(c.telephone)}</a></div>` : ""}
        ${c.adresse ? `<div>📍 ${esc(c.adresse)}${c.code_postal ? ", "+esc(c.code_postal) : ""} ${esc(c.ville || "")}</div>` : ""}
        ${c.dept ? `<div>🗺️ Département ${esc(c.dept)}</div>` : ""}
        ${c.specialite ? `<div>🩺 ${esc(c.specialite)}</div>` : ""}
        ${c.site_web ? `<div>🌐 <a href="${esc(c.site_web)}" target="_blank" rel="noopener" class="text-emerald-700 hover:underline break-all">${esc(c.site_web)}</a></div>` : ""}
        ${c.finess ? `<div class="text-xs text-slate-400 pt-2">FINESS: ${esc(c.finess)}${c.siret ? " · SIRET: "+esc(c.siret) : ""}</div>` : ""}
      </div>

      <form method="post" action="/c/${c.id}/notes" class="mt-4">
        <label class="block text-xs text-slate-500">Notes (privé)</label>
        <textarea name="notes" rows="3" class="w-full border rounded p-2 text-sm">${esc(c.notes || "")}</textarea>
        <button class="mt-1 text-xs text-slate-600 hover:text-slate-900">💾 Sauver notes</button>
      </form>

      <div class="mt-4 border-t pt-3">
        <div class="text-xs text-slate-500 mb-1">Historique d'envois</div>
        <table class="w-full"><tbody>${histRows}</tbody></table>
      </div>
    </section>

    <section class="md:col-span-2 bg-white rounded-lg border p-4">
      <form method="post" action="/c/${c.id}/save" class="space-y-3">
        <div>
          <label class="block text-xs text-slate-500">Objet</label>
          <input type="text" name="subject" value="${subjectVal}" class="w-full border rounded p-2 text-sm">
        </div>
        <div>
          <label class="block text-xs text-slate-500">Corps du mail (markdown / plain text)</label>
          <textarea name="body" rows="18" class="w-full border rounded p-2 text-sm">${bodyVal}</textarea>
          <div class="text-xs text-slate-400 mt-1">Un footer de désinscription sera ajouté automatiquement avant envoi.</div>
        </div>

        <div class="flex flex-wrap gap-2">
          <button name="action" value="save" class="px-3 py-1.5 rounded bg-slate-200 text-sm hover:bg-slate-300">💾 Sauvegarder draft</button>
          ${c.draft_status === "validated"
            ? `<button name="action" value="unvalidate" class="px-3 py-1.5 rounded bg-amber-100 text-amber-900 text-sm hover:bg-amber-200">↶ Retour brouillon</button>`
            : `<button name="action" value="validate" class="px-3 py-1.5 rounded bg-emerald-600 text-white text-sm hover:bg-emerald-700">✅ Valider (file d'envoi)</button>`}
          <button name="action" value="send_now" class="px-3 py-1.5 rounded bg-sky-600 text-white text-sm hover:bg-sky-700"
                  onclick="return confirm('Envoyer immédiatement ce mail à ${esc(c.email)} ?')">📤 Envoyer maintenant</button>
          <button name="action" value="bad_email" class="px-3 py-1.5 rounded bg-rose-100 text-rose-800 text-sm hover:bg-rose-200">❌ Mail faux</button>
          <button name="action" value="skip" class="px-3 py-1.5 rounded bg-slate-100 text-slate-600 text-sm hover:bg-slate-200">Ignorer</button>
        </div>
      </form>
    </section>
  </div>`;
  return shell(c.nom_cds || "Contact", body);
}

export function renderStats(data: any): Response {
  const body = `
  <h1 class="text-xl font-bold mb-3">Stats</h1>
  <pre class="bg-white border rounded p-4 text-xs overflow-auto">${esc(JSON.stringify(data, null, 2))}</pre>`;
  return shell("Stats", body);
}
