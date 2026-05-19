import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Lexique du financement des centres de santé — Teulade, ACI, FIR, URSSAF",
  description:
    "Glossaire des termes clés du financement des centres de santé : subvention Teulade, ACI, FIR, ARS, CPAM, URSSAF, ROSP, CDS, CSP, CSI, Forfait Structure, conventionnement.",
  alternates: { canonical: "/lexique" },
};

const terms: { term: string; def: string }[] = [
  { term: "ACI", def: "Accord Conventionnel Interprofessionnel. Convention conclue avec l’Assurance Maladie qui finance forfaitairement les structures pluriprofessionnelles selon des indicateurs (1 point = 7 €, minimum 20 000 €/an)." },
  { term: "Article L162-32", def: "Article du code de la sécurité sociale qui fonde la subvention Teulade et impose à la CPAM de rembourser 11,5 % de l’assiette des cotisations patronales d’un CDS." },
  { term: "Assiette des cotisations", def: "Base de calcul des cotisations sociales, généralement constituée du salaire brut. C’est sur cette assiette (et non sur le montant des cotisations) que s’applique le taux de 11,5 %." },
  { term: "ARS", def: "Agence Régionale de Santé. Autorité de tutelle des CDS, en charge du zonage, du conventionnement initial et de financements via le FIR." },
  { term: "CDS", def: "Centre de Santé. Structure de soins ambulatoires définie par l’article L6323-1 du code de la santé publique, employant des soignants salariés." },
  { term: "CMS", def: "Centre Municipal de Santé. Centre de santé porté par une commune ou une collectivité territoriale." },
  { term: "Conventionnement", def: "Acte par lequel un centre de santé adhère à l’accord national avec l’Assurance Maladie. Préalable indispensable à la facturation en tiers payant et à la subvention Teulade." },
  { term: "CPAM", def: "Caisse Primaire d’Assurance Maladie. Caisse départementale qui instruit les dossiers Teulade et procède au versement." },
  { term: "CPTS", def: "Communauté Professionnelle Territoriale de Santé. Forme de coopération entre professionnels d’un territoire, parfois confondue à tort avec un CDS." },
  { term: "CSI", def: "Centre de Soins Infirmiers. Centre de santé spécialisé en soins infirmiers, souvent à domicile." },
  { term: "DSN", def: "Déclaration Sociale Nominative. Déclaration mensuelle des employeurs qui sert de base au calcul de l’assiette Teulade." },
  { term: "FIR", def: "Fonds d’Intervention Régional. Géré par l’ARS, il cofinance des missions de prévention, coordination ou accès aux soins." },
  { term: "Forfait Structure", def: "Forfait versé aux médecins pour la modernisation de leur outil de travail (informatique, télémédecine, services numériques)." },
  { term: "IGAS", def: "Inspection Générale des Affaires Sociales. Auteure du rapport 2025 sur le modèle économique des CDS pluriprofessionnels." },
  { term: "MSP", def: "Maison de Santé Pluriprofessionnelle. Structure libérale coordonnée — à ne pas confondre avec un CDS où les soignants sont salariés." },
  { term: "ROSP", def: "Rémunération sur Objectifs de Santé Publique. Rémunération forfaitaire des médecins traitants liée à des indicateurs de qualité." },
  { term: "SCIC", def: "Société Coopérative d’Intérêt Collectif. Statut juridique possible pour un centre de santé." },
  { term: "Subvention Teulade", def: "Subvention prévue à l’article L162-32 du code de la sécurité sociale, qui rembourse à un CDS 11,5 % de l’assiette des cotisations patronales d’assurance maladie, maternité, invalidité et décès." },
  { term: "URSSAF", def: "Union de Recouvrement des cotisations de Sécurité Sociale et d’Allocations Familiales. C’est l’organisme qui encaisse les cotisations patronales — son attestation est indispensable au dossier Teulade." },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Lexique" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Lexique du financement des centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Les acronymes et concepts clés à connaître quand on dirige ou gère un
            centre de santé.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <dl className="space-y-5">
          {terms.map((t) => (
            <div key={t.term} className="rounded-xl bg-white ring-1 ring-brand-100 p-5">
              <dt className="font-bold text-ink">{t.term}</dt>
              <dd className="mt-2 text-ink-soft leading-relaxed">{t.def}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-ink-mute">
          Pour approfondir : <Link href="/subvention-teulade" className="text-brand-700 underline">subvention Teulade</Link>,{" "}
          <Link href="/article-l162-32" className="text-brand-700 underline">article L162-32</Link>,{" "}
          <Link href="/autres-financements" className="text-brand-700 underline">autres financements</Link>.
        </p>
      </section>

      <CTASection />
    </>
  );
}
