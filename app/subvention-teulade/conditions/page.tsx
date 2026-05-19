import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Conditions d’éligibilité de la subvention Teulade pour un centre de santé",
  description:
    "Liste exhaustive des conditions pour bénéficier de la subvention Teulade : statut du CDS, personnels concernés, exclusions, cumul avec l’ACI, justificatifs URSSAF.",
  alternates: { canonical: "/subvention-teulade/conditions" },
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
              { name: "Conditions d’éligibilité" },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Conditions d’éligibilité à la subvention Teulade
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Toutes les conditions cumulatives à respecter pour qu’un centre de santé
            puisse percevoir la subvention prévue à l’article L162-32 du code de la
            sécurité sociale.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>1. Être un centre de santé au sens du code de la santé publique</h2>
        <p>
          Le centre doit relever de l’article <strong>L6323-1 du code de la santé
          publique</strong> et être <strong>conventionné</strong> avec l’Assurance
          Maladie. Sont éligibles les centres médicaux, dentaires, infirmiers,
          polyvalents et pluriprofessionnels, quel que soit leur statut juridique
          (association, mutuelle, collectivité, fondation, SCIC, établissement public).
        </p>

        <h2>2. Salarier des praticiens ou auxiliaires médicaux</h2>
        <p>
          Seuls les <strong>professionnels de santé salariés</strong> du centre sont
          éligibles. Sont exclus : les libéraux mis à disposition, les remplaçants
          payés à l’acte sans lien salarial, le personnel administratif pur (accueil,
          secrétariat médical non polyvalent, comptabilité, direction).
        </p>

        <h2>3. Réaliser des actes remboursables par l’Assurance Maladie</h2>
        <p>
          La subvention couvre uniquement la part d’activité <strong>donnant lieu à
          des actes remboursables</strong>. Pour les salariés mixtes (prévention +
          soins), seule la quotité « soins remboursables » entre dans l’assiette.
        </p>

        <h2>4. Ne pas être financé en double</h2>
        <p>
          Le centre doit attester sur l’honneur que les personnels concernés{" "}
          <strong>ne sont pas intégralement financés</strong> par un autre dispositif :
          ACI, FIR, financements de prévention dédiés, missions d’intérêt général…
          La subvention Teulade reste <strong>cumulable</strong> avec ces dispositifs
          dès lors qu’il n’y a pas double financement de la même activité.
        </p>

        <h2>5. Être à jour des cotisations URSSAF</h2>
        <p>
          La CPAM exige une <strong>attestation URSSAF</strong> de paiement intégral
          des cotisations sociales pour la période concernée. Un retard URSSAF bloque
          le versement de la subvention.
        </p>

        <h2>Cas particuliers</h2>
        <ul>
          <li><strong>Centres municipaux de santé</strong> : éligibles, instructions identiques.</li>
          <li><strong>Centres mutualistes</strong> : éligibles, l’URSSAF reste l’interlocuteur.</li>
          <li><strong>Centres en cours de conventionnement</strong> : éligibles dès la date d’effet du conventionnement.</li>
          <li><strong>Centres en redressement</strong> : éligibles si l’URSSAF établit un plan d’apurement à jour.</li>
        </ul>
      </article>

      <CTASection
        title="Vérifier l’éligibilité de votre CDS"
        subtitle="Nous auditons gratuitement votre situation en 48h."
        primary={{ href: "/contact", label: "Demander mon audit" }}
        secondary={{ href: "/subvention-teulade", label: "Retour à la subvention Teulade" }}
      />
    </>
  );
}
