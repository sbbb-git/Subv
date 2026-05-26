import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Subvention Teulade : accompagnement spécialisé pour centres de santé",
  description:
    "Subvention Teulade (article L162-32 du code de la sécurité sociale) : un dispositif structurant, sous-mobilisé. Cabinet spécialisé dans l'accompagnement des centres de santé conventionnés.",
  alternates: { canonical: "/subvention-teulade" },
  keywords: [
    "subvention Teulade",
    "Teulade centre de santé",
    "article L162-32",
    "L162-32 code sécurité sociale",
    "aide Teulade",
    "décret 14 décembre 1992 Teulade",
    "subvention CPAM centre de santé",
    "subvention Teulade éligibilité",
    "subvention Teulade accompagnement",
    "cabinet subvention Teulade",
    "récupérer subvention Teulade",
  ],
  openGraph: {
    title: "Subvention Teulade · Accompagnement spécialisé",
    description: "Article L162-32 du code de la sécurité sociale. Notre cœur d’expertise.",
    url: "https://www.subventionscds.fr/subvention-teulade",
  },
};

const faqs = [
  { q: "Qu’est-ce que la subvention Teulade ?", a: "Un dispositif ancien, prévu à l’article L162-32 du code de la sécurité sociale, qui organise une prise en charge par l’Assurance Maladie d’une partie des charges sociales des centres de santé conventionnés." },
  { q: "D’où vient le nom « Teulade » ?", a: "Du nom de René Teulade, ministre des Affaires sociales et de l’Intégration, signataire du décret du 14 décembre 1992 fixant les modalités du dispositif." },
  { q: "Tous les centres de santé y ont-ils droit ?", a: "Le dispositif vise les centres de santé conventionnés salariant des praticiens et auxiliaires médicaux. Plusieurs conditions cumulatives s’appliquent — chaque cas s’apprécie individuellement." },
  { q: "Est-ce cumulable avec les autres financements ?", a: "Oui, sous conditions. Le dispositif s’articule avec l’ACI, les financements FIR, le Forfait Structure et les aides à l’installation, dès lors qu’il n’y a pas double financement d’une même mission." },
  { q: "Pourquoi se faire accompagner ?", a: "Le rapport IGAS 2025 indique qu’environ un quart des centres de santé n’a pas perçu la subvention au titre de 2022. Méconnaissance, complexité de l’articulation URSSAF/CPAM et hétérogénéité des pratiques entre caisses en sont les causes principales." },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pb-28">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Subvention Teulade" }]} />
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">Article L162-32 du code de la sécurité sociale</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                La subvention <span className="italic text-accent-600">Teulade</span>.
              </h1>
              <p className="mt-10 text-ink-soft text-lg md:text-xl max-w-2xl leading-[1.65]">
                Un dispositif ancien, structurant pour le financement des
                centres de santé, et pourtant l’un des plus sous-mobilisés.
                Notre cœur d’expertise.
              </p>
            </div>
            <aside className="lg:col-span-4 lg:border-l lg:pl-10 border-line lg:pt-6">
              <p className="eyebrow">Prendre contact</p>
              <p className="mt-3 serif text-xl text-ink leading-snug">
                Quelques lignes sur votre centre, nous revenons vers vous.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block text-[13px] tracking-wide uppercase font-medium border border-ink hover:bg-ink hover:text-bg text-ink transition px-5 py-3"
              >
                Nous écrire
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <article className="bg-paper border-b border-line">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 md:py-28 prose-content">
          <p className="dropcap text-[19px] leading-[1.75] text-ink-soft mb-10">
            La subvention tire son nom de <strong>René Teulade</strong>, ministre
            signataire du décret du <strong>14 décembre 1992</strong>. Elle
            s’inscrit dans une logique d’équilibrage entre l’exercice libéral
            — où l’Assurance Maladie contribue à certaines cotisations des
            praticiens conventionnés — et l’exercice salarié propre aux
            centres de santé.
          </p>

          <h2>Un dispositif sous-mobilisé</h2>
          <p>
            Le rapport IGAS de février 2025 sur l’évaluation du modèle
            économique des centres de santé pluriprofessionnels relève
            qu’<strong>environ un quart des centres de santé</strong> n’a pas
            perçu cette subvention au titre de 2022. Les causes sont
            structurelles : méconnaissance du dispositif, complexité de la
            mise en œuvre, articulation délicate entre l’URSSAF, la CPAM et
            la paie.
          </p>

          <blockquote>
            « Nous abordons toujours la subvention Teulade dans le cadre
            d’une vue d’ensemble du financement du centre. Jamais isolément. »
          </blockquote>

          <h2>Articulation avec les autres dispositifs</h2>
          <p>
            La subvention Teulade n’existe pas dans le vide. Voir notre vue
            d’ensemble des{" "}
            <Link href="/financements">financements mobilisables par un centre de santé</Link> :
            ACI, FIR, Forfait Structure, aides à l’installation et fonds des
            collectivités.
          </p>

          <h2>Pourquoi nous</h2>
          <ul>
            <li>Spécialisation exclusive sur les centres de santé</li>
            <li>Honoraires transparents, contractualisés en amont</li>
            <li>Confidentialité totale, NDA systématique</li>
            <li>Interlocuteur unique pour toutes les démarches</li>
          </ul>
        </div>
      </article>

      <section className="border-b border-line">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-4 serif text-4xl md:text-5xl text-ink tracking-tight font-light mb-12">
            Sur le dispositif.
          </h2>
          <Faq items={faqs} />
        </div>
      </section>

      <section className="bg-ink text-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="serif text-4xl md:text-5xl text-bg font-light tracking-tight leading-[1.1]">
              Parlons de votre centre de santé.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <Link href="/contact" className="inline-block text-[14px] tracking-wide uppercase font-medium border border-bg hover:bg-bg hover:text-ink text-bg transition px-6 py-3.5">
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
