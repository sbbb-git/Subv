import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Centre de santé vs Maison de santé pluriprofessionnelle (CDS vs MSP)",
  description:
    "Comparatif entre Centre de Santé (CDS) et Maison de Santé Pluriprofessionnelle (MSP) : statut, financements, subvention Teulade, ACI, fiscalité, gouvernance.",
  alternates: { canonical: "/comparatif-cds-msp" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "CDS vs MSP" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Centre de santé vs Maison de santé pluriprofessionnelle
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            CDS et MSP sont souvent confondus, alors que les modèles juridiques,
            économiques et financiers sont radicalement différents. Voici les bons
            critères pour s’y retrouver.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Différence fondamentale</h2>
        <p>
          Dans un <strong>CDS</strong>, les soignants sont <strong>salariés</strong> ;
          dans une <strong>MSP</strong>, ils sont <strong>libéraux</strong> mais
          travaillent en coordination dans des locaux partagés.
        </p>

        <h2>Tableau comparatif</h2>
        <table>
          <thead>
            <tr><th></th><th>Centre de santé (CDS)</th><th>Maison de santé (MSP)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Statut des soignants</strong></td><td>Salariés</td><td>Libéraux</td></tr>
            <tr><td><strong>Cadre légal</strong></td><td>Art. L6323-1 CSP</td><td>Art. L6323-3 CSP</td></tr>
            <tr><td><strong>Charges patronales</strong></td><td>Oui — portées par le CDS</td><td>Non — chaque libéral gère ses cotisations</td></tr>
            <tr><td><strong>Dispositif L162-32 (Teulade)</strong></td><td>✅ Oui (sous conditions)</td><td>❌ Non éligible</td></tr>
            <tr><td><strong>ACI</strong></td><td>✅ Oui</td><td>✅ Oui</td></tr>
            <tr><td><strong>FIR / ARS</strong></td><td>✅ Oui</td><td>✅ Oui</td></tr>
            <tr><td><strong>Modèle économique</strong></td><td>Salaires + recettes Assurance Maladie + subventions</td><td>Honoraires libéraux + ACI</td></tr>
            <tr><td><strong>Gouvernance</strong></td><td>Association, mutuelle, collectivité, SCIC</td><td>Société interprofessionnelle (SISA le plus souvent)</td></tr>
          </tbody>
        </table>

        <h2>Quel modèle choisir ?</h2>
        <p>
          Le modèle CDS s’impose quand :
        </p>
        <ul>
          <li>Le projet est porté par une collectivité ou un opérateur associatif.</li>
          <li>L’objectif est de salarier des soignants pour stabiliser l’offre de soins.</li>
          <li>Le territoire connaît une désertification médicale.</li>
        </ul>
        <p>
          Le modèle MSP est privilégié quand :
        </p>
        <ul>
          <li>Les libéraux existants souhaitent simplement se coordonner.</li>
          <li>La gouvernance reste entièrement portée par les professionnels.</li>
        </ul>

        <h2>Des dispositifs propres au modèle CDS</h2>
        <p>
          Plusieurs dispositifs sont propres aux centres de santé conventionnés
          (dont la prise en charge prévue à l’article L162-32 du code de la sécurité
          sociale). Ce sont des leviers structurels pour la viabilité du modèle
          salarial — encore faut-il les mobiliser correctement.
        </p>
      </article>

      <CTASection />
    </>
  );
}
