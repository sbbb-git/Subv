import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Autres financements pour centres de santé : ACI, FIR, ARS, Forfait Structure",
  description:
    "Panorama complet des financements publics et conventionnels mobilisables par un centre de santé : ACI, FIR, dotations ARS, Forfait Structure, ROSP, aides à l’installation, fonds collectivités.",
  alternates: { canonical: "/autres-financements" },
};

const items = [
  {
    id: "teulade",
    name: "Subvention Teulade",
    base: "Article L162-32 CSS",
    montant: "11,5 % des cotisations patronales URSSAF",
    desc: "Remboursement par la CPAM de 11,5 % de l’assiette des cotisations patronales maladie, maternité, invalidité et décès des professionnels de santé salariés du CDS.",
  },
  {
    id: "aci",
    name: "Accord Conventionnel Interprofessionnel (ACI)",
    base: "Arrêté 21 août 2019",
    montant: "À partir de 20 000 € / an",
    desc: "Rémunération forfaitaire pour les structures pluriprofessionnelles. Calcul par points (1 point = 7 €) sur indicateurs socle et optionnels. Avance de 60 % en cours d’année.",
  },
  {
    id: "fir",
    name: "Fonds d’Intervention Régional (FIR)",
    base: "Géré par l’ARS",
    montant: "Variable, sur appels à projets",
    desc: "Cofinancement de missions de prévention, coordination territoriale, accès aux soins ou projets innovants portés par le centre de santé.",
  },
  {
    id: "forfait-structure",
    name: "Forfait Structure (médecins)",
    base: "Convention médicale 2024",
    montant: "Jusqu’à plusieurs milliers d’€ / médecin",
    desc: "Forfait versé aux médecins (salariés ou libéraux) pour la modernisation du cabinet : équipements informatiques, télétransmission, services numériques.",
  },
  {
    id: "rosp",
    name: "ROSP — Rémunération sur Objectifs de Santé Publique",
    base: "Convention médicale",
    montant: "Variable selon indicateurs",
    desc: "Rémunération à la performance attribuée aux médecins traitants, calculée sur des indicateurs de qualité (suivi des maladies chroniques, prévention, dépistage).",
  },
  {
    id: "installation",
    name: "Aides à l’installation (CAIM, COSCOM, COTRAM, CSTM)",
    base: "Convention médicale",
    montant: "Jusqu’à 50 000 € (CAIM)",
    desc: "Contrats d’aide à l’installation, à la consultation et à la transition dans les zones sous-dotées. Cumulables avec la subvention Teulade.",
  },
  {
    id: "collectivites",
    name: "Aides des collectivités",
    base: "Régions, départements, EPCI, communes",
    montant: "Subventions investissement + fonctionnement",
    desc: "De nombreuses collectivités cofinancent les CDS implantés sur leur territoire : locaux, équipements, postes de coordination.",
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Autres financements" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Tous les financements d’un centre de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            La subvention Teulade est la base. Mais un centre de santé peut mobiliser
            une dizaine d’autres dispositifs CPAM, ARS, ACI et collectivités. Voici la
            cartographie complète.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {items.map((it) => (
            <article key={it.id} id={it.id} className="rounded-2xl bg-white ring-1 ring-brand-100 p-7 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-3 justify-between">
                <h2 className="text-2xl font-bold text-ink">{it.name}</h2>
                <span className="text-xs font-semibold rounded-full bg-brand-100 text-brand-800 px-2.5 py-1">
                  {it.base}
                </span>
              </div>
              <p className="mt-2 text-brand-700 font-semibold">{it.montant}</p>
              <p className="mt-3 text-ink-soft leading-relaxed">{it.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cumul"
            title="Tous ces financements sont cumulables"
            subtitle="À condition de ne pas financer deux fois la même mission, vous pouvez additionner Teulade + ACI + FIR + Forfait Structure + aides collectivités."
          />
        </div>
      </section>

      <CTASection
        title="Optimisez l’ensemble de vos financements"
        subtitle="Notre audit 360° identifie en 48h tous les dispositifs auxquels votre CDS a droit."
      />
    </>
  );
}
