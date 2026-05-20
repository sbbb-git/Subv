import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Subvention Teulade : ce qu’il faut savoir pour un centre de santé",
  description:
    "La subvention Teulade (article L162-32 du code de la sécurité sociale) est l’un des dispositifs structurants des centres de santé. Présentation, conditions, articulation avec les autres financements et accompagnement.",
  alternates: { canonical: "/subvention-teulade" },
};

const faqs = [
  {
    q: "Qu’est-ce que la subvention Teulade ?",
    a: "Un dispositif ancien, prévu à l’article L162-32 du code de la sécurité sociale, qui prévoit la prise en charge par l’Assurance Maladie d’une partie des charges sociales des centres de santé conventionnés. Sa mise en œuvre relève des CPAM départementales.",
  },
  {
    q: "Tous les CDS y ont-ils droit ?",
    a: "Le dispositif vise les centres de santé conventionnés employant des praticiens et auxiliaires médicaux salariés. Plusieurs conditions doivent être réunies — nous vérifions votre éligibilité dans le cadre de l’audit gratuit.",
  },
  {
    q: "Est-ce cumulable avec les autres financements ?",
    a: "Oui, sous conditions. Elle s’articule avec l’ACI, les financements FIR, le Forfait Structure et les aides à l’installation, dès lors qu’il n’y a pas double financement d’une même mission.",
  },
  {
    q: "Pourquoi se faire accompagner ?",
    a: "Le rapport IGAS 2025 indique qu’environ un quart des centres de santé n’a pas perçu la subvention au titre de 2022. Méconnaissance, complexité du dossier et articulation URSSAF/CPAM en sont les causes principales. Un accompagnement spécialisé sécurise la démarche.",
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Subvention Teulade" },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            La subvention Teulade pour les centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            La subvention Teulade est l’un des dispositifs anciens du financement
            des centres de santé. Codifiée à l’<strong>article L162-32 du code de la
            sécurité sociale</strong>, elle s’inscrit dans l’ensemble plus large des
            ressources mobilisables par un CDS conventionné.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3">
              Vérifier mon éligibilité
            </Link>
            <Link href="/financements" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Voir tous les financements
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-content">
        <h2>Une origine ancienne</h2>
        <p>
          La subvention tire son nom de <strong>René Teulade</strong>, ministre des
          Affaires sociales signataire du décret du 14 décembre 1992 qui en a fixé
          les modalités. Le dispositif s’inscrit dans une logique d’équilibrage entre
          l’exercice libéral — où l’Assurance Maladie contribue à certaines
          cotisations des praticiens conventionnés — et l’exercice salarié propre
          aux centres de santé.
        </p>

        <h2>Une place dans un écosystème de financements</h2>
        <p>
          La subvention Teulade n’est qu’un des <strong>multiples leviers</strong>{" "}
          d’un centre de santé. Elle s’articule avec :
        </p>
        <ul>
          <li>les <Link href="/financements#aci">rémunérations forfaitaires de l’ACI</Link>,</li>
          <li>les <Link href="/financements#fir">financements FIR de l’ARS</Link>,</li>
          <li>le <Link href="/financements#forfait-structure">Forfait Structure</Link>,</li>
          <li>les aides à l’installation et à l’investissement,</li>
          <li>les cofinancements des collectivités.</li>
        </ul>
        <p>
          C’est l’articulation fine de ces dispositifs qui détermine la santé
          financière d’un CDS — pas la captation isolée de l’un d’entre eux.
        </p>

        <h2>Une mise en œuvre exigeante</h2>
        <p>
          Au-delà du principe — apparemment simple — la mise en œuvre concrète
          repose sur des interactions précises entre la <strong>CPAM</strong>,
          l’<strong>URSSAF</strong>, votre service paie et la direction du centre.
          Chaque caisse a sa procédure, ses délais et ses pratiques d’instruction.
          Le rapport IGAS 2025 indique qu’environ un quart des CDS ne perçoit pas
          le dispositif, ce qui en dit long sur la complexité opérationnelle.
        </p>
        <p>
          Notre cabinet sécurise la démarche de bout en bout : vérification de
          l’éligibilité, structuration du dossier, interactions avec les organismes,
          suivi jusqu’à l’aboutissement.
        </p>

        <h2>L’approche SubventionsCDS</h2>
        <p>
          Nous abordons systématiquement la subvention Teulade dans le cadre plus
          large d’un <Link href="/accompagnement">audit financier du CDS</Link> :
          c’est la seule façon d’éviter les doublons avec l’ACI et le FIR, et de
          construire un schéma de financement durable.
        </p>

        <h2>Questions fréquentes</h2>
      </article>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Faq items={faqs} />
      </section>

      <CTASection
        title="Faisons le point sur vos financements"
        subtitle="Diagnostic gratuit, confidentiel, sans engagement."
        primary={{ href: "/contact", label: "Demander mon diagnostic" }}
        secondary={{ href: "/financements", label: "Voir les financements" }}
      />
    </>
  );
}
