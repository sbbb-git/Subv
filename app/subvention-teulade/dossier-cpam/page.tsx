import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Dossier CPAM pour la subvention Teulade : formulaire, justificatifs, délais",
  description:
    "Comment constituer un dossier CPAM solide pour obtenir la subvention Teulade : formulaire, attestation URSSAF, courrier d’accompagnement, relances et délais de versement.",
  alternates: { canonical: "/subvention-teulade/dossier-cpam" },
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
              { name: "Dossier CPAM" },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Constituer un dossier CPAM en béton
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Liste complète des pièces, modèles de courriers et bonnes pratiques pour
            obtenir un versement rapide de la subvention Teulade par votre caisse
            primaire d’assurance maladie.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Pièces à fournir à la CPAM</h2>
        <ul>
          <li><strong>Formulaire CPAM de demande</strong> — chaque caisse a le sien.</li>
          <li><strong>Attestation URSSAF</strong> de paiement des cotisations sociales.</li>
          <li><strong>Détail par salarié</strong> de l’assiette éligible et de la quotité conventionnée.</li>
          <li>Copies des <strong>DSN</strong> ou bordereaux URSSAF de la période concernée.</li>
          <li><strong>RIB</strong> du centre de santé.</li>
          <li><strong>Attestation sur l’honneur</strong> de non-double financement.</li>
          <li>Copie du <strong>conventionnement</strong> avec l’Assurance Maladie.</li>
        </ul>

        <h2>Modèle de courrier d’accompagnement</h2>
        <blockquote>
          Madame, Monsieur le Directeur, en application de l’article L162-32 du code
          de la sécurité sociale et du décret n° 92-1257 du 14 décembre 1992, je
          sollicite par la présente le versement de la subvention au titre des
          cotisations patronales acquittées par notre centre de santé pour l’exercice
          [année]. Vous trouverez ci-joint les justificatifs requis. Je reste à votre
          disposition pour tout complément. Cordialement, [Nom, Directeur du CDS].
        </blockquote>

        <h2>Délais à anticiper</h2>
        <ul>
          <li><strong>2 à 4 mois</strong> pour un dossier courant correctement constitué.</li>
          <li><strong>4 à 9 mois</strong> pour un dossier de rattrapage pluriannuel.</li>
          <li>Au-delà de 6 mois sans réponse : <strong>première relance écrite</strong> avec accusé de réception.</li>
          <li>Au-delà de 12 mois : <strong>recours gracieux</strong> auprès du directeur de la CPAM.</li>
        </ul>

        <h2>Pourquoi un cabinet sécurise le dossier</h2>
        <ul>
          <li>Connaissance des <strong>formulaires propres à chaque CPAM</strong>.</li>
          <li>Reconstitution des <strong>assiettes</strong> par croisement DSN/paie/URSSAF.</li>
          <li>Modèle de courrier <strong>juridiquement étayé</strong>.</li>
          <li><strong>Relances jusqu’au versement</strong> avec interlocuteur dédié à la CPAM.</li>
        </ul>
      </article>

      <CTASection
        title="On constitue le dossier CPAM à votre place"
        subtitle="Vous ne touchez à rien — vous touchez la subvention."
        primary={{ href: "/contact", label: "Confier mon dossier" }}
        secondary={{ href: "/accompagnement", label: "Voir l’accompagnement" }}
      />
    </>
  );
}
