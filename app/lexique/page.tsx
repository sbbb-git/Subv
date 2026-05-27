import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Lexique : centres de santé, subventions, financements",
  description:
    "Glossaire des termes clés des centres de santé : CDS, CMS, CSI, MSP, ARS, CPAM, subvention Teulade, ACI, FIR, conventionnement.",
  alternates: { canonical: "/lexique" },
};

const terms = [
  { term: "CDS", def: "Centre de santé. Structure de soins ambulatoires définie par le code de la santé publique, qui emploie des soignants salariés." },
  { term: "CMS", def: "Centre municipal de santé : centre de santé porté par une commune ou une collectivité territoriale." },
  { term: "CSI", def: "Centre de soins infirmiers : centre de santé spécialisé en soins infirmiers." },
  { term: "MSP", def: "Maison de santé pluriprofessionnelle. Structure libérale coordonnée, à distinguer du centre de santé où les soignants sont salariés." },
  { term: "ARS", def: "Agence régionale de santé. Autorité de tutelle des centres de santé." },
  { term: "CPAM", def: "Caisse primaire d’assurance maladie." },
  { term: "Subvention Teulade", def: "Dispositif spécifique aux centres de santé conventionnés, prévu par le code de la sécurité sociale." },
  { term: "Conventionnement", def: "Acte par lequel un centre de santé adhère à l’accord national avec l’Assurance Maladie." },
  { term: "Projet de santé", def: "Document central exigé par l’ARS pour ouvrir un centre de santé." },
  { term: "ACI", def: "Accord conventionnel interprofessionnel : convention qui finance forfaitairement certaines structures coordonnées." },
];

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Lexique" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Glossaire</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">Lexique des centres de santé.</h1>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <dl className="divide-y divide-line border-y border-line">
            {terms.map((t) => (
              <div key={t.term} className="grid md:grid-cols-12 gap-4 py-6">
                <dt className="md:col-span-3 font-bold text-ink">{t.term}</dt>
                <dd className="md:col-span-9 text-ink-soft leading-relaxed text-[16px]">{t.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
