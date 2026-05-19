import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Calcul de la subvention Teulade : assiette, taux et exemples chiffrés",
  description:
    "Comment calculer précisément le montant de la subvention Teulade : assiette des cotisations patronales URSSAF, taux de 11,5 %, exemples concrets pour différents profils de centres de santé.",
  alternates: { canonical: "/subvention-teulade/calcul" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Subvention Teulade", href: "/subvention-teulade" },
              { name: "Calcul du montant" },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Calcul de la subvention Teulade
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Méthode pas à pas, formule officielle et exemples chiffrés selon la taille
            de votre centre de santé.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>La formule officielle</h2>
        <blockquote>
          <strong>Subvention Teulade</strong> = (Assiette des cotisations patronales
          maladie + maternité + invalidité + décès) × <strong>11,5 %</strong>
        </blockquote>
        <p>
          L’assiette est généralement le <strong>salaire brut</strong> du salarié
          soignant, dans la limite des plafonds applicables. La donnée fiable est la
          ligne « assiette cotisations » figurant sur le bordereau URSSAF (DSN).
        </p>

        <h2>Méthode pas à pas</h2>
        <ol>
          <li>Lister les <strong>professionnels de santé salariés</strong> de l’année concernée.</li>
          <li>Exclure le personnel non éligible (administratif, technique).</li>
          <li>Récupérer l’<strong>assiette annuelle</strong> de chacun (DSN ou logiciel de paie).</li>
          <li>Appliquer une <strong>quotité conventionnée</strong> si activité mixte soins/prévention.</li>
          <li>Sommer les assiettes éligibles → multiplier par <strong>11,5 %</strong>.</li>
          <li>Joindre l’attestation URSSAF + le détail par salarié au formulaire CPAM.</li>
        </ol>

        <h2>Trois exemples chiffrés</h2>

        <h3>CDS infirmier (5 IDE salariés)</h3>
        <ul>
          <li>5 infirmiers × 34 000 € brut = <strong>170 000 €</strong> d’assiette éligible.</li>
          <li>Subvention annuelle : 170 000 × 11,5 % = <strong>19 550 €</strong>.</li>
          <li>Rattrapage 3 ans : <strong>≈ 58 650 €</strong>.</li>
        </ul>

        <h3>CDS médical (4 médecins + 1 IDE)</h3>
        <ul>
          <li>4 médecins × 78 000 € + 1 IDE × 34 000 € = <strong>346 000 €</strong>.</li>
          <li>Subvention annuelle : 346 000 × 11,5 % = <strong>≈ 39 790 €</strong>.</li>
          <li>Rattrapage 3 ans : <strong>≈ 119 370 €</strong>.</li>
        </ul>

        <h3>CDS polyvalent (12 ETP soignants)</h3>
        <ul>
          <li>Assiette cumulée : <strong>≈ 760 000 €</strong>.</li>
          <li>Subvention annuelle : 760 000 × 11,5 % = <strong>≈ 87 400 €</strong>.</li>
          <li>Rattrapage 3 ans : <strong>≈ 262 200 €</strong>.</li>
        </ul>

        <h2>Erreurs de calcul à éviter</h2>
        <ul>
          <li>Confondre <strong>salaire net</strong> et <strong>assiette URSSAF</strong>.</li>
          <li>Appliquer le 11,5 % aux <strong>cotisations</strong> au lieu de l’<strong>assiette</strong>.</li>
          <li>Inclure les <strong>indemnités non soumises</strong> à cotisations (titres restaurant, IK, etc.).</li>
          <li>Oublier la <strong>quotité d’activité conventionnée</strong> pour les profils mixtes.</li>
        </ul>
      </article>

      <CTASection
        title="Combien votre CDS doit récupérer ?"
        subtitle="Diagnostic gratuit basé sur vos vraies DSN et attestations URSSAF."
        primary={{ href: "/contact", label: "Demander mon calcul personnalisé" }}
        secondary={{ href: "/simulateur", label: "Utiliser le simulateur" }}
      />
    </>
  );
}
