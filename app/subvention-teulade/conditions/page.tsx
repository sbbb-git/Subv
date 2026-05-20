import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Éligibilité à la subvention Teulade — vérifier la situation de votre CDS",
  description:
    "Conditions générales d’éligibilité à la subvention Teulade pour les centres de santé : statut, conventionnement, personnels concernés. Vérification d’éligibilité par notre cabinet.",
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
              { name: "Éligibilité" },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Votre CDS est-il éligible à la subvention Teulade ?
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Les grandes conditions à connaître. La vérification fine relève d’un
            audit individualisé que nous réalisons gratuitement.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Conditions générales</h2>
        <p>
          Le dispositif vise les centres de santé répondant à plusieurs critères
          cumulatifs liés à leur statut, leur conventionnement, la nature de leurs
          personnels et la conformité de leurs obligations sociales. Plusieurs cas
          de figure peuvent par ailleurs faire perdre tout ou partie du bénéfice
          (doublons avec d’autres financements, mauvais paramétrage des contrats,
          activité non-conventionnée…).
        </p>

        <h2>Typologies concernées</h2>
        <p>
          L’ensemble des typologies de CDS peut être concerné, sous conditions :
        </p>
        <ul>
          <li><Link href="/centre-de-sante/medical">Centres médicaux</Link></li>
          <li><Link href="/centre-de-sante/dentaire">Centres dentaires</Link></li>
          <li><Link href="/centre-de-sante/infirmier">Centres infirmiers (CSI)</Link></li>
          <li><Link href="/centre-de-sante/polyvalent">Centres polyvalents</Link></li>
          <li><Link href="/centre-de-sante/pluriprofessionnel">Centres pluriprofessionnels</Link></li>
          <li><Link href="/centre-de-sante/municipal">Centres municipaux de santé (CMS)</Link></li>
          <li><Link href="/centre-de-sante/associatif">Centres associatifs</Link></li>
          <li><Link href="/centre-de-sante/mutualiste">Centres mutualistes</Link></li>
        </ul>

        <h2>Pourquoi une vérification au cas par cas est indispensable</h2>
        <p>
          La perte de bénéfice provient rarement d’un refus frontal. Elle vient
          plus souvent d’une <strong>chaîne d’éléments mal articulés</strong> :
          contrats de travail mal qualifiés, doublons avec d’autres dispositifs,
          obligations sociales en décalage, périmètre d’activité non sécurisé.
          C’est pourquoi nous traitons toujours le sujet dans le cadre d’un audit
          global du CDS — et non comme une démarche isolée.
        </p>

        <h2>Audit gratuit d’éligibilité</h2>
        <p>
          En 48h, nous établissons une <strong>cartographie confidentielle</strong>
          de votre situation, identifions les risques et opportunités, et vous
          proposons un plan d’action. Sans engagement de votre part.
        </p>
      </article>

      <CTASection
        title="Vérifier l’éligibilité de votre CDS"
        subtitle="Diagnostic gratuit, livré sous 48h ouvrées."
        primary={{ href: "/contact", label: "Demander mon audit" }}
        secondary={{ href: "/subvention-teulade", label: "Retour à la subvention Teulade" }}
      />
    </>
  );
}
