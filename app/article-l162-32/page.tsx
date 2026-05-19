import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Article L162-32 du code de la sécurité sociale — texte et explications",
  description:
    "Article L162-32 du code de la sécurité sociale : texte de référence, portée juridique, application pratique pour les centres de santé et calcul de la subvention Teulade (11,5 %).",
  alternates: { canonical: "/article-l162-32" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Article L162-32" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Article L162-32 du code de la sécurité sociale
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Le texte qui fonde la subvention Teulade pour les centres de santé.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Ce que dit l’article L162-32</h2>
        <p>
          L’article L162-32 du code de la sécurité sociale prévoit que les rapports
          entre les organismes d’assurance maladie et les centres de santé sont
          définis par un accord national, et que la prise en charge des cotisations
          sociales de leurs personnels par les caisses primaires d’assurance maladie
          obéit à un mécanisme fixé par décret.
        </p>
        <p>
          Le décret d’application — dit <strong>décret Teulade</strong> (n° 92-1257
          du 14 décembre 1992) — fixe précisément le taux et les modalités : la CPAM
          verse au centre de santé l’équivalent de <strong>11,5 % de l’assiette</strong>{" "}
          des cotisations patronales d’assurance maladie, maternité, invalidité et
          décès des praticiens et auxiliaires médicaux salariés.
        </p>

        <h2>Pourquoi ce dispositif existe-t-il ?</h2>
        <p>
          Contrairement à l’exercice libéral, où l’Assurance Maladie prend en charge
          une partie des cotisations sociales des praticiens conventionnés, les
          centres de santé portent intégralement la charge sociale de leurs soignants
          salariés. L’article L162-32 vise à <strong>rééquilibrer cette différence
          structurelle</strong> entre exercice libéral et exercice salarié.
        </p>

        <h2>Portée juridique</h2>
        <ul>
          <li>Il s’agit d’un <strong>droit pour le centre de santé conventionné</strong>, pas d’une simple faculté pour la CPAM.</li>
          <li>La CPAM ne peut refuser le versement que pour un motif lié à la non-conformité du dossier (URSSAF non à jour, personnel non éligible, etc.).</li>
          <li>Un refus injustifié peut faire l’objet d’un <strong>recours gracieux</strong> puis d’un <strong>recours contentieux</strong> devant le tribunal judiciaire (pôle social).</li>
        </ul>

        <h2>Articulation avec d’autres dispositifs</h2>
        <p>
          La subvention Teulade se cumule avec l’<Link href="/autres-financements#aci">Accord
          Conventionnel Interprofessionnel (ACI)</Link>, les financements{" "}
          <Link href="/autres-financements#fir">FIR</Link>, le{" "}
          <Link href="/autres-financements#forfait-structure">Forfait Structure</Link>{" "}
          et les aides à l’installation, sous réserve qu’aucun de ces dispositifs ne
          finance déjà intégralement les personnels concernés.
        </p>

        <h2>En pratique pour votre CDS</h2>
        <p>
          Voir nos pages <Link href="/subvention-teulade">subvention Teulade</Link>,{" "}
          <Link href="/subvention-teulade/calcul">calcul du montant</Link> et{" "}
          <Link href="/subvention-teulade/dossier-cpam">dossier CPAM</Link>.
        </p>
      </article>

      <CTASection />
    </>
  );
}
