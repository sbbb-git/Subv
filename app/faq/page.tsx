import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ — Accompagnement et financements des centres de santé",
  description:
    "Réponses aux questions fréquentes sur l’accompagnement des centres de santé, leur modèle économique et la mobilisation de leurs financements.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  { q: "Quels types de centres de santé accompagnez-vous ?", a: "Tous : CDS médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, qu’ils soient portés par une association, une mutuelle, une collectivité (CMS), une SCIC ou un établissement public." },
  { q: "Comment commence une mission ?", a: "Par un premier échange de 30 minutes pour cadrer votre situation, suivi d’un audit gratuit livré sous 48h ouvrées. À l’issue, nous proposons un plan d’action priorisé et un mode de rémunération transparent." },
  { q: "Quel est votre modèle de rémunération ?", a: "Selon la mission : honoraires fixes transparents ou rémunération au résultat (success fee) proportionnelle aux montants effectivement obtenus. Le modèle est contractualisé en amont, sans frais cachés." },
  { q: "Êtes-vous indépendants ?", a: "Oui. Nous sommes un cabinet privé indépendant, sans lien capitalistique ou contractuel avec la CPAM, l’URSSAF, l’Assurance Maladie ou la FNCS. Nous défendons l’intérêt exclusif de nos clients." },
  { q: "Travaillez-vous partout en France ?", a: "Oui, sur l’ensemble du territoire métropolitain et ultramarin. Selon les missions, nous intervenons à distance et/ou sur site." },
  { q: "Que couvre votre audit gratuit ?", a: "Une cartographie de vos recettes et financements actuels, l’identification des dispositifs non mobilisés, une estimation du potentiel récupérable et un plan d’action priorisé." },
  { q: "Combien de temps prend un accompagnement ?", a: "Le diagnostic initial est livré sous 48h. La mise en œuvre varie selon les dispositifs concernés : quelques semaines à plusieurs mois pour les démarches longues." },
  { q: "Quels dispositifs peuvent être mobilisés par un CDS ?", a: "Une dizaine de dispositifs cumulables : rémunérations conventionnelles, ACI, Forfait Structure, ROSP, FIR/ARS, aides à l’installation, dispositifs CPAM spécifiques (dont la subvention Teulade), aides des collectivités." },
  { q: "La subvention Teulade peut-elle être incluse dans l’accompagnement ?", a: "Oui, parmi d’autres dispositifs. Nous abordons systématiquement la subvention Teulade dans le cadre d’un audit global, car son articulation avec l’ACI et le FIR est l’une des sources d’erreurs les plus fréquentes." },
  { q: "Quel niveau de mobilisation interne demandez-vous ?", a: "Le minimum nécessaire : une heure ou deux pour l’échange initial et la transmission sécurisée des éléments comptables et administratifs. Nous gérons ensuite la partie technique." },
  { q: "Mes données sont-elles confidentielles ?", a: "Oui. Charte RGPD, accord de confidentialité signé en amont de tout audit, données stockées en France." },
  { q: "Pouvez-vous accompagner un CDS en création ?", a: "Oui, depuis l’étude de faisabilité jusqu’à l’ouverture conventionnée, en passant par les statuts juridiques, le projet de santé, le dossier ARS et le conventionnement CPAM." },
  { q: "Et si nous sommes déjà accompagnés ailleurs ?", a: "Nous intervenons en complémentarité, sur un périmètre spécifique. Beaucoup de nos missions cohabitent avec un expert-comptable, un commissaire aux comptes ou un cabinet juridique." },
  { q: "Qui sont vos interlocuteurs habituels ?", a: "Les directeurs et gestionnaires de CDS, les trésoriers d’associations, les DGS de collectivités portant un CMS, les responsables financiers de mutuelles." },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "FAQ" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            FAQ — Accompagnement & financements des CDS
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Les questions les plus fréquentes des directeurs et gestionnaires de
            centres de santé que nous accompagnons.
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
