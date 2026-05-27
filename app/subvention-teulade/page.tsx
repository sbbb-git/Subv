import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Subvention Teulade pour centres de santé",
  description:
    "Subvention Teulade : dispositif spécifique aux centres de santé conventionnés. Présentation, conditions générales, raisons d’un accompagnement par Opti-CDS.",
  alternates: { canonical: "/subvention-teulade" },
  keywords: [
    "subvention teulade",
    "subvention teulade cds",
    "subvention teulade centre de santé",
    "subvention teulade centre dentaire",
    "subvention teulade ide",
    "récupérer subvention teulade",
    "article L162-32",
    "L162-32 code sécurité sociale",
    "aide teulade",
    "décret 14 décembre 1992 teulade",
    "subvention cpam centre de santé",
    "subvention cds",
    "subventions cds",
  ],
  openGraph: {
    title: "Subvention Teulade pour centres de santé",
    description: "Présentation et accompagnement à la mobilisation de la subvention Teulade par Opti-CDS.",
    url: `${SITE_URL}/subvention-teulade`,
  },
};

const faqs = [
  {
    q: "Qu’est-ce que la subvention Teulade ?",
    a: "Un dispositif spécifique aux centres de santé conventionnés, prévu par le code de la sécurité sociale et fixé par un décret de 1992. Il participe au financement des centres de santé.",
  },
  {
    q: "Mon centre de santé peut-il y prétendre ?",
    a: "Les centres de santé conventionnés peuvent en principe être concernés, sous réserve de conditions précises. Chaque situation s’apprécie individuellement : contactez-nous pour un check-up gratuit.",
  },
  {
    q: "Est-ce compatible avec les autres financements ?",
    a: "Oui, sous conditions. La subvention Teulade s’articule avec les autres dispositifs publics et conventionnels mobilisables par un centre de santé.",
  },
  {
    q: "Pourquoi se faire accompagner ?",
    a: "Une part significative des centres ne mobilise pas la totalité des subventions disponibles, par complexité des démarches ou manque de ressources internes. Un accompagnement spécialisé sécurise la démarche.",
  },
];

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Subvention Teulade" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Article L162-32 du code de la sécurité sociale</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            La <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">subvention Teulade</span> pour les centres de santé.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            Dispositif spécifique aux centres de santé conventionnés.
            Opti-CDS accompagne les centres dans l’évaluation et la
            mobilisation des subventions auxquelles ils ont droit.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-base">Contactez-nous pour un check-up</Link>
            <Link href="/financements" className="btn-secondary text-base">Tous les financements</Link>
          </div>
        </div>
      </section>

      <article className="bg-white border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-content">
          <h2>Un dispositif spécifique aux centres de santé</h2>
          <p>La subvention dite Teulade est l’un des dispositifs de financement propres aux centres de santé conventionnés. Elle s’inscrit dans un ensemble plus large de subventions et de financements mobilisables par un CDS.</p>

          <h2>Un dispositif souvent sous-mobilisé</h2>
          <p>Une part significative des centres de santé ne perçoit pas la totalité des subventions auxquelles ils ont droit. Méconnaissance, complexité administrative ou manque de ressources internes : les causes sont multiples. C’est précisément la raison d’être de notre accompagnement.</p>

          <h2>Pour quels types de centres ?</h2>
          <p>Le dispositif concerne en principe l’ensemble des typologies de centres de santé conventionnés :</p>
          <ul>
            <li><a href="/centres-de-sante/medical">Centres de santé médicaux</a></li>
            <li><a href="/centres-de-sante/dentaire">Centres de santé dentaires</a></li>
            <li><a href="/centres-de-sante/infirmier">Centres de santé infirmiers (CSI)</a></li>
            <li><a href="/centres-de-sante/polyvalent">Centres polyvalents</a></li>
            <li><a href="/centres-de-sante/pluriprofessionnel">Centres pluriprofessionnels</a></li>
            <li><a href="/centres-de-sante/municipal">Centres municipaux de santé (CMS)</a></li>
            <li><a href="/centres-de-sante/associatif">Centres associatifs (loi 1901)</a></li>
            <li><a href="/centres-de-sante/mutualiste">Centres mutualistes</a></li>
          </ul>

          <h2>Notre accompagnement</h2>
          <p>Nous évaluons votre éligibilité, identifions les autres dispositifs cumulables et accompagnons la démarche jusqu’à l’aboutissement. <a href="/contact">Contactez-nous pour un check-up gratuit</a>.</p>
        </div>
      </article>

      <section className="bg-soft border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight text-center">Questions fréquentes</h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CTASection title="Évaluons ensemble vos subventions" label="Contactez-nous pour un check-up" href="/contact" />
    </>
  );
}
