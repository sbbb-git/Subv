import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ subvention Teulade et financement des centres de santé",
  description:
    "Toutes les réponses aux questions des directeurs de centres de santé sur la subvention Teulade, l’article L162-32, le calcul, les démarches CPAM, le rattrapage, le cumul avec l’ACI, le FIR.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  { q: "Qu’est-ce que la subvention Teulade ?", a: "C’est le remboursement par la CPAM de 11,5 % de l’assiette des cotisations patronales maladie, maternité, invalidité et décès dues à l’URSSAF pour les professionnels de santé salariés d’un centre de santé. Le dispositif est prévu par l’article L162-32 du code de la sécurité sociale et tire son nom de René Teulade, ministre signataire du décret du 14 décembre 1992." },
  { q: "Quelle est la base légale de la subvention Teulade ?", a: "Article L162-32 du code de la sécurité sociale et décret n° 92-1257 du 14 décembre 1992." },
  { q: "Quel est le taux exact ?", a: "11,5 % de l’assiette des cotisations patronales d’assurance maladie, maternité, invalidité et décès." },
  { q: "Qui paie la subvention Teulade ?", a: "La caisse primaire d’assurance maladie (CPAM) du département où est implanté le centre de santé." },
  { q: "Quels centres de santé sont éligibles ?", a: "Tous les centres de santé conventionnés au sens de l’article L6323-1 du CSP : médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, quel que soit le statut juridique." },
  { q: "Quels professionnels entrent dans l’assiette ?", a: "Tous les praticiens et auxiliaires médicaux salariés réalisant des actes remboursables : médecins, chirurgiens-dentistes, sages-femmes, infirmiers, kinésithérapeutes, orthophonistes, orthoptistes, pédicures-podologues." },
  { q: "Le personnel administratif est-il éligible ?", a: "Non. Seul le personnel soignant produisant des actes remboursables est éligible. Les agents d’accueil, secrétaires, comptables et directeurs sont exclus de l’assiette." },
  { q: "Peut-on cumuler Teulade avec l’ACI ?", a: "Oui, à condition qu’il n’y ait pas double financement d’une même mission. Un salarié dont la rémunération est intégralement portée par l’ACI ne peut pas figurer dans l’assiette Teulade." },
  { q: "Peut-on cumuler Teulade avec les aides FIR ?", a: "Oui, à condition que le FIR ne couvre pas déjà la rémunération du salarié concerné." },
  { q: "Combien d’années de rattrapage peut-on demander ?", a: "Généralement 3 années non prescrites, en plus de l’année en cours. Au-delà, la prescription est généralement opposée par la CPAM." },
  { q: "Quel est le délai de versement de la CPAM ?", a: "Entre 2 et 9 mois selon les caisses, à compter de la réception du dossier complet. Plus pour un rattrapage pluriannuel." },
  { q: "Quels justificatifs joindre ?", a: "Formulaire CPAM, attestation URSSAF de paiement des cotisations, détail par salarié de l’assiette éligible, RIB du centre, attestation sur l’honneur de non-double financement." },
  { q: "Pourquoi 25 % des CDS ne touchent pas Teulade ?", a: "Selon le rapport IGAS 2025 : méconnaissance du dispositif, formulaires propres à chaque CPAM, complexité du calcul d’assiette, absence d’interlocuteur dédié, défaut de relances." },
  { q: "Comment se calcule concrètement la subvention ?", a: "Subvention = Σ (assiette cotisations patronales maladie/maternité/invalidité/décès par salarié éligible) × 11,5 %. L’assiette correspond généralement au salaire brut, plafonnée selon les règles URSSAF." },
  { q: "Faut-il être à jour à l’URSSAF ?", a: "Oui. Un retard URSSAF non purgé bloque le versement. Un plan d’apurement à jour suffit toutefois à débloquer la subvention." },
  { q: "Quel est votre modèle de rémunération ?", a: "Pour la mission Teulade, nous appliquons une rémunération au résultat (success fee), proportionnelle aux montants effectivement versés par la CPAM. Pas de versement, pas d’honoraires." },
  { q: "Combien de temps mobilise-t-on en interne ?", a: "Comptez 1 à 2 heures pour la transmission sécurisée des DSN, paies et attestations URSSAF. Nous nous occupons du reste." },
  { q: "Travaillez-vous avec toutes les CPAM ?", a: "Oui. Nous intervenons sur l’ensemble du territoire français métropolitain et ultramarin." },
  { q: "Avez-vous une convention spécifique avec la CPAM ?", a: "Non, et c’est volontaire. Nous sommes un cabinet indépendant — nous défendons l’intérêt exclusif du centre de santé." },
  { q: "Mon centre est en création, puis-je demander Teulade ?", a: "Oui, dès la date d’effet du conventionnement avec l’Assurance Maladie." },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "FAQ" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            FAQ — Subvention Teulade & financement des CDS
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Les 20 questions les plus posées par les directeurs de centres de santé.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
