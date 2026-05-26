import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Lexique des centres de santé — ACI, FIR, ARS, CPAM, Teulade",
  description:
    "Glossaire des termes clés du financement et de la gestion des centres de santé : ACI, FIR, ARS, CPAM, URSSAF, ROSP, CDS, CSI, Forfait Structure, conventionnement, Teulade.",
  alternates: { canonical: "/lexique" },
};

const terms = [
  { term: "ACI", def: "Accord Conventionnel Interprofessionnel. Convention nationale qui finance forfaitairement les structures pluriprofessionnelles (dont les CDS) sur indicateurs." },
  { term: "Article L162-32", def: "Article du code de la sécurité sociale encadrant les relations entre l’Assurance Maladie et les centres de santé. Fonde notamment la subvention dite Teulade." },
  { term: "ARS", def: "Agence Régionale de Santé. Autorité de tutelle des CDS, en charge du zonage, du conventionnement initial et de financements via le FIR." },
  { term: "CDS", def: "Centre de Santé. Structure de soins ambulatoires définie à l’article L6323-1 du code de la santé publique, employant des soignants salariés." },
  { term: "CMS", def: "Centre Municipal de Santé. Centre de santé porté par une commune ou une collectivité territoriale." },
  { term: "Conventionnement", def: "Acte par lequel un centre de santé adhère à l’accord national avec l’Assurance Maladie. Préalable à la facturation en tiers payant et à la subvention Teulade." },
  { term: "CPAM", def: "Caisse Primaire d’Assurance Maladie. Caisse départementale qui instruit les dossiers et procède aux versements." },
  { term: "CPTS", def: "Communauté Professionnelle Territoriale de Santé. Forme de coopération entre professionnels d’un territoire." },
  { term: "CSI", def: "Centre de Soins Infirmiers. Centre de santé spécialisé en soins infirmiers." },
  { term: "DSN", def: "Déclaration Sociale Nominative. Déclaration mensuelle des employeurs qui sert de base à plusieurs dispositifs financiers." },
  { term: "FIR", def: "Fonds d’Intervention Régional. Géré par l’ARS, il cofinance des missions de prévention, coordination ou accès aux soins." },
  { term: "Forfait Structure", def: "Forfait versé aux médecins pour la modernisation de leur outil de travail (informatique, télémédecine, services numériques)." },
  { term: "IGAS", def: "Inspection Générale des Affaires Sociales. Auteure du rapport 2025 sur le modèle économique des CDS pluriprofessionnels." },
  { term: "MSP", def: "Maison de Santé Pluriprofessionnelle. Structure libérale coordonnée — à distinguer du CDS où les soignants sont salariés." },
  { term: "Projet de santé", def: "Document central exigé par l’ARS pour ouvrir un CDS, décrivant l’organisation des soins, la coordination et la gouvernance." },
  { term: "ROSP", def: "Rémunération sur Objectifs de Santé Publique. Rémunération forfaitaire des médecins traitants liée à des indicateurs de qualité." },
  { term: "SCIC", def: "Société Coopérative d’Intérêt Collectif. Statut juridique possible pour un CDS." },
  { term: "Subvention Teulade", def: "Dispositif prévu à l’article L162-32 du code de la sécurité sociale qui organise la prise en charge par l’Assurance Maladie d’une partie des charges sociales des CDS conventionnés." },
  { term: "URSSAF", def: "Union de Recouvrement des cotisations de Sécurité Sociale et d’Allocations Familiales." },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Lexique" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Lexique des centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Les acronymes et concepts clés à connaître quand on dirige ou gère
            un CDS.
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
      </section>
    </>
  );
}
