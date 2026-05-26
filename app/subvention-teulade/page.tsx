import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Subvention Teulade — Accompagnement des centres de santé",
  description:
    "La subvention Teulade (article L162-32 du code de la sécurité sociale) est l’un des dispositifs structurants des centres de santé. Cabinet spécialisé.",
  alternates: { canonical: "/subvention-teulade" },
  keywords: [
    "subvention Teulade",
    "Teulade centre de santé",
    "article L162-32",
    "L162-32 code sécurité sociale",
    "subvention CDS",
    "aide Teulade",
    "décret 14 décembre 1992",
    "subvention CPAM centre de santé",
  ],
};

const faqs = [
  {
    q: "Qu’est-ce que la subvention Teulade ?",
    a: "Un dispositif ancien, prévu à l’article L162-32 du code de la sécurité sociale, qui organise une prise en charge par l’Assurance Maladie d’une partie des charges sociales des centres de santé conventionnés.",
  },
  {
    q: "D’où vient le nom « Teulade » ?",
    a: "Du nom de René Teulade, ministre des Affaires sociales et de l’Intégration, signataire du décret du 14 décembre 1992 fixant les modalités du dispositif.",
  },
  {
    q: "Tous les centres de santé y ont-ils droit ?",
    a: "Le dispositif vise les centres de santé conventionnés salariant des praticiens et auxiliaires médicaux. Plusieurs conditions cumulatives s’appliquent — chaque cas s’apprécie individuellement.",
  },
  {
    q: "Est-ce cumulable avec les autres financements ?",
    a: "Oui, sous conditions. Le dispositif s’articule avec l’ACI, les financements FIR, le Forfait Structure et les aides à l’installation, dès lors qu’il n’y a pas double financement d’une même mission.",
  },
  {
    q: "Pourquoi se faire accompagner ?",
    a: "Le rapport IGAS 2025 indique qu’environ un quart des centres de santé n’a pas perçu la subvention au titre de 2022. Méconnaissance, complexité de l’articulation URSSAF/CPAM et hétérogénéité des pratiques entre caisses en sont les causes principales.",
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Subvention Teulade" }]} />
          <span className="mt-5 inline-block text-xs font-bold tracking-widest uppercase text-brand-600">
            Article L162-32 du code de la sécurité sociale
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink">
            La subvention Teulade pour les centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            Un dispositif ancien, structurant pour le financement des centres de
            santé, et pourtant l’un des plus sous-mobilisés. Cabinet spécialisé,
            nous en avons fait notre cœur d’expertise.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3 shadow">
              Nous contacter
            </Link>
            <Link href="/financements" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Tous les financements des centres de santé
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-content">
        <h2>Une origine ancienne, un rôle structurant</h2>
        <p>
          La subvention tire son nom de <strong>René Teulade</strong>, ministre
          signataire du décret du <strong>14 décembre 1992</strong>. Elle
          s’inscrit dans une logique d’équilibrage entre l’exercice libéral —
          où l’Assurance Maladie contribue à certaines cotisations des
          praticiens conventionnés — et l’exercice salarié propre aux centres
          de santé.
        </p>

        <h2>Un dispositif sous-mobilisé</h2>
        <p>
          Le rapport IGAS de février 2025 sur l’évaluation du modèle économique
          des centres de santé pluriprofessionnels relève qu’<strong>environ un
          quart des centres de santé</strong> n’a pas perçu cette subvention au titre de
          2022. Les causes sont structurelles : méconnaissance du dispositif,
          complexité de la mise en œuvre, articulation délicate entre l’URSSAF,
          la CPAM et la paie.
        </p>

        <h2>Notre approche</h2>
        <p>
          Plutôt que d’aborder la subvention Teulade isolément, nous
          l’intégrons systématiquement à une vue d’ensemble du financement de
          votre centre de santé, afin d’éviter les doublons avec d’autres dispositifs
          (ACI, FIR) et de construire une architecture financière durable.
        </p>

        <h2>Articulation avec les autres dispositifs des centres de santé</h2>
        <p>
          La subvention Teulade n’existe pas dans le vide. Voir notre vue
          d’ensemble des{" "}
          <Link href="/financements">financements mobilisables par un centre de santé</Link> :
          <Link href="/financements#aci"> ACI</Link>,{" "}
          <Link href="/financements#fir">FIR</Link>,{" "}
          <Link href="/financements#forfait-structure">Forfait Structure</Link>,
          aides à l’installation et fonds des collectivités.
        </p>

        <h2>Pourquoi nous</h2>
        <ul>
          <li>Spécialisation exclusive sur les centres de santé</li>
          <li>Honoraires transparents, contractualisés en amont</li>
          <li>Confidentialité totale (charte RGPD)</li>
          <li>Interlocuteur unique pour toutes vos démarches</li>
        </ul>

        <h2>Questions fréquentes</h2>
      </article>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Faq items={faqs} />
      </section>

      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Parlons de votre centre de santé
          </h2>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white text-brand-700 hover:bg-brand-50 px-6 py-3 font-semibold shadow">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
