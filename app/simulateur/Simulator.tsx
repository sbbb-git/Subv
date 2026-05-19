"use client";

import { useMemo, useState } from "react";

type Role = { key: string; label: string; defaultBrut: number };

const ROLES: Role[] = [
  { key: "med", label: "Médecins généralistes / spécialistes", defaultBrut: 78000 },
  { key: "dent", label: "Chirurgiens-dentistes", defaultBrut: 90000 },
  { key: "ide", label: "Infirmiers (IDE)", defaultBrut: 34000 },
  { key: "kine", label: "Kinésithérapeutes", defaultBrut: 38000 },
  { key: "sf", label: "Sages-femmes", defaultBrut: 42000 },
  { key: "autres", label: "Autres auxiliaires médicaux", defaultBrut: 32000 },
];

const RATE = 0.115;

export default function Simulator() {
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(ROLES.map((r) => [r.key, 0]))
  );

  const totals = useMemo(() => {
    const assiette = ROLES.reduce(
      (acc, r) => acc + (counts[r.key] || 0) * r.defaultBrut,
      0
    );
    const yearly = assiette * RATE;
    return {
      assiette,
      yearly,
      rattrapage: yearly * 3,
      total: yearly + yearly * 3,
    };
  }, [counts]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-white ring-1 ring-brand-100 p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-ink">Vos effectifs salariés soignants</h2>
        <p className="mt-2 text-sm text-ink-soft">
          Indiquez le nombre de professionnels à temps plein. Les salaires moyens
          utilisés sont indicatifs.
        </p>
        <div className="mt-6 space-y-4">
          {ROLES.map((r) => (
            <div key={r.key} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="flex-1">
                <div className="font-semibold text-ink">{r.label}</div>
                <div className="text-xs text-ink-mute">
                  Salaire brut annuel moyen : {r.defaultBrut.toLocaleString("fr-FR")} €
                </div>
              </div>
              <input
                type="number"
                min={0}
                value={counts[r.key]}
                onChange={(e) =>
                  setCounts((c) => ({ ...c, [r.key]: Math.max(0, Number(e.target.value || 0)) }))
                }
                className="w-28 rounded-lg border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 px-3 py-2 text-ink"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-7 shadow-lg">
        <h2 className="text-lg font-semibold">Estimation Teulade</h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-5">
          <Stat label="Assiette éligible" value={totals.assiette} />
          <Stat label="Subvention annuelle" value={totals.yearly} highlight />
          <Stat label="Rattrapage 3 ans" value={totals.rattrapage} />
          <Stat label="Total potentiel" value={totals.total} highlight />
        </div>
        <p className="mt-5 text-brand-50/80 text-sm">
          Calcul indicatif : assiette × 11,5 %. Le calcul réel intègre les quotités
          d’activité conventionnée et l’assiette URSSAF exacte.
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-5 ${highlight ? "bg-white/15 ring-1 ring-white/20" : "bg-white/5"}`}>
      <div className="text-xs uppercase tracking-wide text-brand-100/80">{label}</div>
      <div className="mt-2 text-2xl md:text-3xl font-extrabold">
        {Math.round(value).toLocaleString("fr-FR")} €
      </div>
    </div>
  );
}
