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
    <a href="/templates" class="text-sm text-slate-600 hover:text-slate-900">Modèles</a>
    <a href="/offres" class="text-sm text-slate-600 hover:text-slate-900">Offres</a>
    <a href="/strategie" class="text-sm text-slate-600 hover:text-slate-900">Stratégie</a>
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
  filters: { status: string; q: string; dept: string; region: string; specialite: string },
  page: number,
  pageSize: number,
  totalFiltered: number,
  specialites: string[],
  depts: string[],
  regions: Array<{ region: string; n: number }>,
}): Response {
  const { contacts, stats, filters, page, pageSize, totalFiltered, specialites, depts, regions } = opts;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / pageSize));
  const qs = (overrides: Record<string, any>) => {
    const p: Record<string, string> = { status: filters.status, q: filters.q, dept: filters.dept, region: filters.region, specialite: filters.specialite, page: String(page) };
    for (const [k, v] of Object.entries(overrides)) p[k] = String(v);
    return new URLSearchParams(Object.entries(p).filter(([_, v]) => v !== "")).toString();
  };

  // forme du retour vers la liste après quick action
  const returnTo = `/${(filters.status || filters.q || filters.dept || filters.region || filters.specialite || page > 1) ? "?" : ""}` +
    new URLSearchParams(Object.entries({
      status: filters.status, q: filters.q, dept: filters.dept, region: filters.region,
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
        <div class="text-xs text-slate-500">
          ${esc(c.email)}
          ${c.alt_count > 0 ? `<span class="ml-1 inline-block px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px]" title="${c.alt_count} autre(s) email(s) pour ce CDS">+${c.alt_count} email${c.alt_count>1?"s":""}</span>` : ""}
        </div>
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
      <label class="block text-xs text-slate-500">Région</label>
      <select name="region" class="border rounded px-2 py-1 text-sm">
        <option value="">Toutes</option>
        ${regions.map(r => `<option value="${esc(r.region)}" ${filters.region===r.region ? "selected" : ""}>${esc(r.region)} (${r.n})</option>`).join("")}
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

export function renderDetail(c: any, history: any[], alternatives: any[] = [], templates: any[] = []): Response {
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

      ${alternatives.length > 0 ? `
      <div class="mt-4 border-t pt-3">
        <div class="text-xs text-slate-500 mb-2">Autres emails de ce CDS (${alternatives.length})</div>
        <div class="space-y-1">
          ${alternatives.map((a: any) => `
            <div class="flex items-center justify-between text-xs gap-2 py-1 ${a.draft_status==='bad_email' ? 'opacity-50' : ''}">
              <div class="flex-1 min-w-0">
                <a href="/c/${a.id}" class="text-slate-700 hover:text-emerald-700 truncate block">${esc(a.email)}</a>
                <span class="text-[10px] text-slate-400">${esc(STATUS_LABEL[a.draft_status] || a.draft_status)}${a.source ? " · "+esc(a.source) : ""}</span>
              </div>
              ${a.draft_status !== 'bad_email' ? `
                <form method="post" action="/c/${a.id}/swap-primary" class="inline">
                  <button class="text-emerald-600 hover:bg-emerald-50 px-2 py-0.5 rounded" title="Faire de cet email le principal">★ Principal</button>
                </form>` : ""}
            </div>`).join("")}
        </div>
      </div>` : ""}

      <div class="mt-4 border-t pt-3">
        <div class="text-xs text-slate-500 mb-1">Historique d'envois</div>
        <table class="w-full"><tbody>${histRows}</tbody></table>
      </div>
    </section>

    <section class="md:col-span-2 bg-white rounded-lg border p-4">
      ${templates.length > 0 ? `
      <form method="post" action="/c/${c.id}/apply-template" class="mb-3 flex items-end gap-2 bg-slate-50 p-2 rounded border">
        <div class="flex-1">
          <label class="block text-xs text-slate-500">Modèle de mail (10 disponibles, change l'objet et le corps)</label>
          <select name="template_id" class="w-full border rounded px-2 py-1 text-sm">
            ${templates.map((t: any) => `<option value="${esc(t.id)}" ${c.template_id===t.id ? "selected" : ""}>${esc(t.name)} — ${esc(t.angle)}</option>`).join("")}
          </select>
        </div>
        <button class="px-3 py-1.5 rounded bg-slate-700 text-white text-sm hover:bg-slate-900" onclick="return confirm('Appliquer ce modèle écrasera vos modifications manuelles du corps.')">↻ Appliquer</button>
        <a href="/templates" class="text-xs text-slate-500 hover:underline">Voir tous</a>
      </form>` : ""}

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

export function renderTemplatesPage(templates: any[], counts: Record<string, number>): Response {
  const total = Object.values(counts).reduce((s, n) => s + n, 0) || 1;
  const cards = templates.map((t: any) => {
    const sample = t.build({ email: "exemple@cds-test.fr", first_name: null, nom_cds: "CDS EXEMPLE", ville: "PARIS" });
    const n = counts[t.id] || 0;
    return `
    <div class="bg-white rounded-lg border p-4">
      <div class="flex items-start justify-between mb-1">
        <h2 class="text-base font-bold">${esc(t.name)}</h2>
        <span class="text-xs px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">${n} CDS (${Math.round(100*n/total)}%)</span>
      </div>
      <div class="text-xs text-slate-500 mb-2">${esc(t.angle)} · <span class="italic">${esc(t.targetFit)}</span></div>
      <div class="text-xs font-mono text-slate-700 bg-slate-50 rounded p-2 mb-2">
        <span class="text-slate-400">Objet:</span> ${esc(sample.subject)}
      </div>
      <pre class="text-xs font-mono text-slate-600 bg-slate-50 rounded p-2 whitespace-pre-wrap leading-relaxed max-h-64 overflow-auto">${esc(sample.body)}</pre>
    </div>`;
  }).join("");
  return shell("Modèles de mail", `
    <h1 class="text-xl font-bold mb-1">10 modèles de cold email</h1>
    <p class="text-sm text-slate-500 mb-4">Chaque CDS reçoit un modèle attribué automatiquement selon sa spécialité, son segment ou un hash de l'email. Ouvre une fiche pour changer manuellement le modèle d'un CDS donné.</p>
    <div class="grid lg:grid-cols-2 gap-4">${cards}</div>`);
}

export function renderOffersPage(offers: any[]): Response {
  const cards = offers.map((o: any) => `
    <div class="bg-white rounded-lg border ${o.recommended ? "border-emerald-400 ring-2 ring-emerald-100" : ""} p-4">
      <div class="flex items-start justify-between mb-1 gap-3">
        <h2 class="text-base font-bold leading-tight">${esc(o.name)}</h2>
        ${o.recommended ? `<span class="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 whitespace-nowrap">⭐ Défaut</span>` : ""}
      </div>
      <p class="text-sm text-slate-600 italic mb-3">${esc(o.tagline)}</p>

      <div class="space-y-2 text-sm">
        <div class="bg-slate-50 rounded p-2">
          <div class="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Formule</div>
          <div class="text-slate-800">${esc(o.pricing)}</div>
        </div>
        <div>
          <div class="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Pour qui</div>
          <div class="text-slate-700 text-xs">${esc(o.forWho)}</div>
        </div>
        <div class="bg-amber-50 rounded p-2 border border-amber-100">
          <div class="text-[10px] uppercase tracking-wider text-amber-700 mb-0.5">Phrase à dire au call</div>
          <div class="text-amber-900 text-xs italic">"${esc(o.pitch)}"</div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="bg-emerald-50 rounded p-2 border border-emerald-100">
            <div class="text-[10px] uppercase tracking-wider text-emerald-700 mb-0.5">👤 Win CDS</div>
            <div class="text-emerald-900 text-xs">${esc(o.winCds)}</div>
          </div>
          <div class="bg-sky-50 rounded p-2 border border-sky-100">
            <div class="text-[10px] uppercase tracking-wider text-sky-700 mb-0.5">💼 Win Sacha</div>
            <div class="text-sky-900 text-xs">${esc(o.winSacha)}</div>
          </div>
        </div>
        ${o.notes ? `<div class="text-[11px] text-slate-500 border-l-2 border-slate-200 pl-2 italic">${esc(o.notes)}</div>` : ""}
      </div>
    </div>`).join("");

  const body = `
  <div class="mb-4">
    <h1 class="text-xl font-bold mb-1">Bibliothèque d'offres</h1>
    <p class="text-sm text-slate-500">8 modèles d'offres, à choisir/mixer en fin de call selon le profil prospect. Toutes respectent les règles : <strong>100% au succès, aucune avance, aucun engagement de durée, aucun audit gratuit.</strong> L'offre marquée ⭐ est le défaut recommandé.</p>
  </div>
  <div class="grid lg:grid-cols-2 gap-4">${cards}</div>
  <div class="mt-6 bg-slate-50 border rounded p-4 text-sm">
    <h3 class="font-bold mb-2">Comment choisir en call</h3>
    <ul class="space-y-1 text-slate-700">
      <li>• <strong>Défaut</strong> → Modèle 1 (1.5% du brut) : pour 90% des prospects</li>
      <li>• Prospect dit "j'aime pas les %" → Modèle 2 (forfait fixe) ou 3 (paliers)</li>
      <li>• Prospect dit "récurrent c'est non" → Modèle 8 (an 1 seulement)</li>
      <li>• Prospect dit "vous êtes pas un cabinet sérieux" → Modèle 5 (paiement par livrables) ou 7 (TJM)</li>
      <li>• Prospect veut un partenaire continu → Modèle 6 (abonnement veille)</li>
      <li>• Le prospect maîtrise le marché fee-recovery → Modèle 4 (% du récupéré, plus standard)</li>
    </ul>
  </div>`;
  return shell("Offres", body);
}

// ============================================================================
// Page Stratégie : checklist pré-launch + plan en phases + KPI live + playbook
// ============================================================================
export function renderStrategiePage(opts: {
  settings: Record<string, string>,
  metrics: {
    total: number; reviewable: number; validated: number; sent_total: number;
    sent_today: number; sent_7d: number; open_rate: number | null;
    reply_rate: number | null; bounce_rate: number | null;
    bookings: number;
    by_region: Array<{ region: string; reviewable: number }>;
  },
}): Response {
  const { settings, metrics } = opts;
  const checked = (k: string) => settings[`checklist.${k}`] === "1";
  const launchReady = ["dmarc","dkim","calendly","pitch_oral","creneaux","test_send"].every(k => checked(k));
  const phaseCurrent = parseInt(settings.phase_current || "0", 10);

  const checkbox = (key: string, label: string, why: string) => `
    <form method="post" action="/strategie/toggle" class="flex items-start gap-3 py-2 border-b last:border-0">
      <input type="hidden" name="key" value="checklist.${key}">
      <input type="hidden" name="value" value="${checked(key) ? "0" : "1"}">
      <button class="mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center ${checked(key) ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300 hover:border-slate-500"}" title="Toggle">
        ${checked(key) ? "✓" : ""}
      </button>
      <div class="flex-1">
        <div class="text-sm font-medium ${checked(key) ? "text-slate-400 line-through" : "text-slate-900"}">${esc(label)}</div>
        <div class="text-xs text-slate-500">${esc(why)}</div>
      </div>
    </form>`;

  const phaseRow = (n: number, name: string, target: string, volume: string, templates: string) => `
    <div class="border rounded-lg p-3 ${phaseCurrent === n ? "border-emerald-400 ring-2 ring-emerald-100" : "border-slate-200"}">
      <div class="flex items-start justify-between mb-2">
        <h3 class="font-bold text-sm">Phase ${n} · ${esc(name)}</h3>
        ${phaseCurrent === n ? `<span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">EN COURS</span>` : phaseCurrent > n ? `<span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">FAIT</span>` : ""}
      </div>
      <div class="text-xs text-slate-600 space-y-1">
        <div><span class="text-slate-400">Cible :</span> ${esc(target)}</div>
        <div><span class="text-slate-400">Volume :</span> ${esc(volume)}</div>
        <div><span class="text-slate-400">Templates :</span> ${esc(templates)}</div>
      </div>
    </div>`;

  const kpiCard = (label: string, value: string, threshold: string, ok: boolean | null) => `
    <div class="bg-white rounded border p-3">
      <div class="text-xs text-slate-500">${esc(label)}</div>
      <div class="text-xl font-bold mt-1 ${ok === false ? "text-rose-600" : ok === true ? "text-emerald-600" : "text-slate-900"}">${esc(value)}</div>
      <div class="text-[10px] text-slate-400">${esc(threshold)}</div>
    </div>`;

  const openOk = metrics.open_rate === null ? null : metrics.open_rate >= 40;
  const replyOk = metrics.reply_rate === null ? null : metrics.reply_rate >= 5;
  const bounceOk = metrics.bounce_rate === null ? null : metrics.bounce_rate < 3;

  const replyLine = (cas: string, response: string) => `
    <div class="py-2 border-b last:border-0">
      <div class="text-xs uppercase tracking-wider text-slate-500 mb-0.5">${esc(cas)}</div>
      <div class="text-sm text-slate-800 italic">"${esc(response)}"</div>
    </div>`;

  const body = `
  <div class="mb-4">
    <h1 class="text-xl font-bold mb-1">Stratégie de campagne</h1>
    <p class="text-sm text-slate-500">Le plan en 4 phases, les KPI live, le playbook de réponses. Toutes les cases cochables sont stockées en base — quand tout est vert, tu peux lancer.</p>
  </div>

  ${!launchReady ? `
  <div class="mb-4 bg-amber-50 border border-amber-300 rounded p-3 text-sm text-amber-900">
    ⚠️ <strong>Lancement bloqué</strong> : il reste des cases non-cochées dans la checklist pré-lancement.
  </div>` : `
  <div class="mb-4 bg-emerald-50 border border-emerald-400 rounded p-3 text-sm text-emerald-900">
    ✅ <strong>Prêt à lancer.</strong> Active le cron via le worker (décommenter le schedule dans wrangler.toml + deploy) et valide les premiers contacts.
  </div>`}

  <div class="grid lg:grid-cols-3 gap-4 mb-6">
    <section class="lg:col-span-1 bg-white rounded-lg border p-4">
      <h2 class="font-bold mb-2">Checklist pré-lancement</h2>
      <p class="text-xs text-slate-500 mb-2">Tu coches au fur et à mesure que tu fais.</p>
      ${checkbox("dmarc",       "Setup DMARC chez OVH",      "Sans DMARC strict, tes mails finissent en spam Gmail/Outlook")}
      ${checkbox("dkim",        "DKIM Resend propagé",        "Vérifier que les CNAME ajoutés chez OVH sont actifs (mxtoolbox.com/dmarc.aspx)")}
      ${checkbox("calendly",    "Calendly / Cal.com actif",   "Lien à coller dans chaque réponse positive")}
      ${checkbox("pitch_oral",  "Pitch oral du call écrit",   "15 min, scripté, avec gestion des objections — voir doc séparée")}
      ${checkbox("creneaux",    "Agenda bloqué : 2-3 créneaux 30 min/semaine pour calls", "Tu vas avoir besoin de répondre dispo vite, donc pré-bloque")}
      ${checkbox("test_send",   "Test send à toi-même + 2 amis", "Vérifier rendu, anti-spam et que le lien d'unsub fonctionne")}
    </section>

    <section class="lg:col-span-2 bg-white rounded-lg border p-4">
      <h2 class="font-bold mb-2">KPI live</h2>
      <p class="text-xs text-slate-500 mb-3">Mis à jour automatiquement dès que les premiers mails partent.</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
        ${kpiCard("Reviewable",   String(metrics.reviewable),       "Contacts à reviewer",      null)}
        ${kpiCard("Validés",      String(metrics.validated),        "File d'envoi",             null)}
        ${kpiCard("Envoyés (7j)", String(metrics.sent_7d),          "Envoyés 7 derniers jours", null)}
        ${kpiCard("Bookings",     String(metrics.bookings),         "Calls bookés",             null)}
      </div>
      <div class="grid grid-cols-3 gap-2">
        ${kpiCard("Open rate",   metrics.open_rate   === null ? "—" : metrics.open_rate.toFixed(1) + "%",   "Objectif > 40%", openOk)}
        ${kpiCard("Reply rate",  metrics.reply_rate  === null ? "—" : metrics.reply_rate.toFixed(1) + "%",  "Objectif > 5%",  replyOk)}
        ${kpiCard("Bounce rate", metrics.bounce_rate === null ? "—" : metrics.bounce_rate.toFixed(1) + "%", "Objectif < 3%",  bounceOk)}
      </div>
    </section>
  </div>

  <h2 class="font-bold mb-2">Phases du plan</h2>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
    ${phaseRow(0, "Setup (avant J+0)", "Toi-même",
      "0 envoi tant que la checklist n'est pas tout verte",
      "—")}
    ${phaseRow(1, "Pilot IDF (sem. 1-2)", "50 CDS IDF les plus solides",
      "10-15 / jour, mar-jeu uniquement, 10h-11h",
      "Rotation t01/t03/t04/t06 puis garde le meilleur")}
    ${phaseRow(2, "Scale IDF (sem. 3-4)", "Reste des 133 IDF reviewable",
      "30 / jour + relances J+4 J+9 auto",
      "Meilleur template phase 1")}
    ${phaseRow(3, "National (sem. 5-8)", "Reste France, par région",
      "30 / jour, rotation full 10 templates",
      "A/B test par sous-segment")}
  </div>

  <div class="grid lg:grid-cols-2 gap-4 mb-6">
    <section class="bg-white rounded-lg border p-4">
      <h2 class="font-bold mb-2">Triggers de décision</h2>
      <p class="text-xs text-slate-500 mb-2">Si une métrique passe sous ces seuils → action immédiate.</p>
      <table class="text-sm w-full">
        <tr class="border-b"><td class="py-1.5">Open rate &lt; 30%</td><td class="text-slate-600">→ tester 3 nouveaux objets</td></tr>
        <tr class="border-b"><td class="py-1.5">Reply rate &lt; 3%</td><td class="text-slate-600">→ raccourcir le corps</td></tr>
        <tr class="border-b"><td class="py-1.5">Bounce rate &gt; 5%</td><td class="text-slate-600">→ pause, re-passer audit-idf.mjs</td></tr>
        <tr class="border-b"><td class="py-1.5">Spam complaint &gt; 0</td><td class="text-slate-600 font-bold">→ STOP TOUT, diagnose Resend</td></tr>
        <tr><td class="py-1.5">Book rate &lt; 1.5%</td><td class="text-slate-600">→ CTA pas clair, revoir dernière phrase</td></tr>
      </table>
    </section>

    <section class="bg-white rounded-lg border p-4">
      <h2 class="font-bold mb-2">Playbook de réponses</h2>
      <p class="text-xs text-slate-500 mb-2">Réponse en &lt; 4h pendant heures ouvrées. Templates prêts à coller.</p>
      ${replyLine("Intéressé / dites-en plus",
        "Je préfère vous expliquer en direct, c'est plus rapide. 15 min cette semaine ? → [lien Calendly]")}
      ${replyLine("Envoyez-moi une plaquette",
        "Je n'envoie pas de doc générique. 15 min en visio j'aurai une vraie réponse à votre situation → [lien]")}
      ${replyLine("Pas pour nous / pas le moment",
        "Pas de souci, je vous retire de la liste. Si la situation évolue : sacha@opti-cds.fr")}
      ${replyLine("STOP / désinscription",
        "(géré automatiquement via /u/ — supprime aussi des futures campagnes)")}
    </section>
  </div>

  <section class="bg-slate-50 rounded-lg border p-4 text-sm">
    <h2 class="font-bold mb-2">Cadence opérationnelle hebdo</h2>
    <ul class="space-y-1 text-slate-700">
      <li>• <strong>Lundi matin</strong> : review KPIs sem N-1 sur cette page, valider le batch de la semaine dans la liste</li>
      <li>• <strong>Mardi-mercredi-jeudi</strong> : jours d'envoi + check inbox toutes les 2h pour répondre vite</li>
      <li>• <strong>Vendredi</strong> : réponses en retard, nettoyer la liste (flag bad_email résiduels), prépa sem N+1</li>
    </ul>
  </section>

  <div class="mt-6 grid md:grid-cols-3 gap-3">
    <a href="/?status=draft&region=Île-de-France" class="bg-emerald-50 border border-emerald-300 rounded-lg p-3 hover:border-emerald-500 transition">
      <div class="text-xs uppercase text-emerald-700">Action 1</div>
      <div class="font-bold mt-1">Reviewer les 133 CDS IDF</div>
      <div class="text-xs text-slate-600 mt-1">C'est ici que tu prépares ta phase 1 (50 CDS solides à valider).</div>
    </a>
    <a href="/templates" class="bg-sky-50 border border-sky-300 rounded-lg p-3 hover:border-sky-500 transition">
      <div class="text-xs uppercase text-sky-700">Action 2</div>
      <div class="font-bold mt-1">Vérifier les 10 modèles</div>
      <div class="text-xs text-slate-600 mt-1">Tu peux ajuster la formulation avant d'envoyer.</div>
    </a>
    <a href="/offres" class="bg-amber-50 border border-amber-300 rounded-lg p-3 hover:border-amber-500 transition">
      <div class="text-xs uppercase text-amber-700">Action 3</div>
      <div class="font-bold mt-1">Choisir ton offre par défaut</div>
      <div class="text-xs text-slate-600 mt-1">Le modèle 1 (1.5% pure success) est ton arme principale.</div>
    </a>
  </div>`;

  return shell("Stratégie", body);
}

export function renderStats(data: any): Response {
  const body = `
  <h1 class="text-xl font-bold mb-3">Stats</h1>
  <pre class="bg-white border rounded p-4 text-xs overflow-auto">${esc(JSON.stringify(data, null, 2))}</pre>`;
  return shell("Stats", body);
}
