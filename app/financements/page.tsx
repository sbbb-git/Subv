import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Financements pour centres de santé : ACI, FIR, ARS, dispositifs CPAM",
  description:
    "Panorama des financements publics et conventionnels mobilisables par un centre de santé : ACI, FIR, dotations ARS, Forfait Structure, ROSP, aides à l’installation, dispositifs spécifiques CPAM et fonds collectivités.",
  alternates: { canonical: "/financements" },
};

const items = [
  {
    id: "remunerations",
    name: "Rémunérations conventionnelles",
    base: "Accord national CDS",
    desc: "Actes remboursables par l’Assurance Maladie, tiers payant, forfaits divers : la recette de base de tout centre de santé conventionné.",
  },
  {
    id: "aci",
    name: "Accord Conventionnel Interprofessionnel (ACI)",
    base: "Arrêté 21 août 2019",
    desc: "Rémunération forfaitaire pour les structures pluriprofessionnelles. Calcul par points, sur indicateurs socle et optionnels. Avance versée en cours d’année selon les engagements.",
  },
  {
    id: "fir",
    name: "Fonds d’Intervention Régional (FIR)",
    base: "Géré par l’ARS",
    desc: "Cofinancement de missions de prévention, coordination territoriale, accès aux soins ou projets innovants portés par le centre de santé.",
  },
  {
    id: "teulade",
    name: "Dispositif L162-32 (dit subvention Teulade)",
    base: "Article L162-32 CSS",
    desc: "Dispositif ancien prévoyant la prise en charge par l’Assurance Maladie d’une partie des charges sociales des centres de santé conventionnés. Articulation à étudier au cas par cas avec les autres dispositifs.",
  },
  {
    id: "forfait-structure",
    name: "Forfait Structure",
    base: "Convention médicale",
    desc: "Forfait versé aux médecins pour la modernisation de leur outil de travail : équipements informatiques, télétransmission, services numériques.",
  },
  {
    id: "rosp",
    name: "ROSP — Rémunération sur Objectifs de Santé Publique",
    base: "Convention médicale",
    desc: "Rémunération à la performance attribuée aux médecins traitants, calculée sur des indicateurs de qualité (suivi des maladies chroniques, prévention, dépistage).",
  },
  {
    id: "installation",
    name: "Aides à l’installation (CAIM, COSCOM, COTRAM, CSTM)",
    base: "Convention médicale",
    desc: "Contrats d’aide à l’installation, à la consultation et à la transition dans les zones sous-dotées.",
  },
  {
    id: "collectivites",
    name: "Aides des collectivités",
    base: "Régions, départements, EPCI, communes",
    desc: "De nombreuses collectivités cofinancent les CDS implantés sur leur territoire : locaux, équipements, postes de coordination.",
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Financements" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Les financements d’un centre de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Un centre de santé peut mobiliser une dizaine de dispositifs cumulables.
            Voici un panorama d’ensemble — sans recette, parce que chaque CDS a
            son architecture propre.
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
              <p className="mt-3 text-ink-soft leading-relaxed">{it.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cumul"
            title="Plusieurs dispositifs cumulables"
            subtitle="Sous réserve de ne pas financer deux fois la même mission, la plupart de ces dispositifs se cumulent. C’est la cohérence de l’ensemble qui fait l’équilibre."
          />
        </div>
      </section>

      <CTASection
        title="Audit gratuit de vos financements"
        subtitle="Nous identifions les dispositifs non mobilisés et chiffrons le potentiel."
      />
    </>
  );
}
