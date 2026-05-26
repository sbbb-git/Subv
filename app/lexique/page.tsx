import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Lexique : centres de santé, ACI, FIR, CPAM, Teulade",
  description:
    "Glossaire des termes clés du financement et de la gestion des centres de santé : ACI, FIR, ARS, CPAM, URSSAF, ROSP, CDS, CSI, Forfait Structure, subvention Teulade.",
  alternates: { canonical: "/lexique" },
};

const terms = [
  { term: "ACI", def: "Accord Conventionnel Interprofessionnel. Convention nationale qui finance forfaitairement les structures pluriprofessionnelles (dont les centres de santé) sur indicateurs." },
  { term: "Article L162-32", def: "Article du code de la sécurité sociale encadrant les relations entre l’Assurance Maladie et les centres de santé. Fonde notamment la subvention dite Teulade." },
  { term: "ARS", def: "Agence Régionale de Santé. Autorité de tutelle des centres de santé, en charge du zonage, du conventionnement initial et de financements via le FIR." },
  { term: "CDS", def: "Centre de Santé. Structure de soins ambulatoires définie à l’article L6323-1 du code de la santé publique, employant des soignants salariés." },
  { term: "CMS", def: "Centre Municipal de Santé. Centre de santé porté par une commune ou une collectivité territoriale." },
  { term: "Conventionnement", def: "Acte par lequel un centre de santé adhère à l’accord national avec l’Assurance Maladie." },
  { term: "CPAM", def: "Caisse Primaire d’Assurance Maladie. Caisse départementale qui instruit les dossiers et procède aux versements." },
  { term: "CPTS", def: "Communauté Professionnelle Territoriale de Santé. Forme de coopération entre professionnels d’un territoire." },
  { term: "CSI", def: "Centre de Soins Infirmiers. Centre de santé spécialisé en soins infirmiers." },
  { term: "DSN", def: "Déclaration Sociale Nominative. Déclaration mensuelle des employeurs." },
  { term: "FIR", def: "Fonds d’Intervention Régional. Géré par l’ARS, il cofinance des missions de prévention, coordination ou accès aux soins." },
  { term: "Forfait Structure", def: "Forfait versé aux médecins pour la modernisation de leur outil de travail." },
  { term: "IGAS", def: "Inspection Générale des Affaires Sociales. Auteure du rapport 2025 sur le modèle économique des centres de santé pluriprofessionnels." },
  { term: "MSP", def: "Maison de Santé Pluriprofessionnelle. Structure libérale coordonnée — à distinguer du centre de santé où les soignants sont salariés." },
  { term: "Projet de santé", def: "Document central exigé par l’ARS pour ouvrir un centre de santé." },
  { term: "ROSP", def: "Rémunération sur Objectifs de Santé Publique." },
  { term: "SCIC", def: "Société Coopérative d’Intérêt Collectif. Statut juridique possible pour un centre de santé." },
  { term: "Subvention Teulade", def: "Dispositif prévu à l’article L162-32 du code de la sécurité sociale qui organise la prise en charge par l’Assurance Maladie d’une partie des charges sociales des centres de santé conventionnés." },
  { term: "URSSAF", def: "Union de Recouvrement des cotisations de Sécurité Sociale et d’Allocations Familiales." },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pb-28">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Lexique" }]} />
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <p className="eyebrow">Glossaire</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                Lexique.
              </h1>
              <p className="mt-10 text-ink-soft text-lg max-w-2xl leading-[1.65]">
                Les acronymes et concepts à connaître quand on dirige ou gère un
                centre de santé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <dl className="divide-y divide-line border-y border-line">
            {terms.map((t) => (
              <div key={t.term} className="grid lg:grid-cols-12 gap-6 py-8">
                <dt className="lg:col-span-3 serif text-2xl text-ink font-medium tracking-tight">{t.term}</dt>
                <dd className="lg:col-span-9 text-ink-soft leading-[1.7] text-[16px]">{t.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
