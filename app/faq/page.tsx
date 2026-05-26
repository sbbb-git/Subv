import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ · Accompagnement des centres de santé",
  description:
    "Questions fréquentes sur l’accompagnement des centres de santé : missions, modèle de rémunération, subvention Teulade, dossier ARS, conventionnement CPAM, comptabilité.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  { q: "Quels types de centres de santé accompagnez-vous ?", a: "Tous : centres de santé médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, qu’ils soient portés par une association, une mutuelle, une collectivité ou une SCIC." },
  { q: "Comment commence une mission ?", a: "Par un premier échange. Vous nous écrivez quelques lignes, on en discute, on définit ensemble s’il y a matière à travailler ensemble." },
  { q: "Quel est votre modèle de rémunération ?", a: "Forfait transparent ou rémunération au résultat selon la mission, toujours contractualisé en amont." },
  { q: "Êtes-vous indépendants ?", a: "Oui. Cabinet privé indépendant, sans lien capitalistique ou contractuel avec la CPAM, l’URSSAF, l’Assurance Maladie ou la FNCS." },
  { q: "Travaillez-vous partout en France ?", a: "Oui, sur l’ensemble du territoire métropolitain et ultramarin. À distance et/ou sur site selon les missions." },
  { q: "Combien de temps prend un accompagnement ?", a: "Cela dépend de la mission : quelques semaines à plusieurs mois selon les dispositifs et les organismes concernés." },
  { q: "Pouvez-vous accompagner un projet de création de centres de santé ?", a: "Oui, de l’étude de faisabilité jusqu’à l’ouverture conventionnée, en passant par les statuts, le projet de santé, le dossier ARS et le conventionnement CPAM." },
  { q: "Aidez-vous à monter un dossier ARS ?", a: "Oui : lecture de l’appel à projets, rédaction du dossier, annexes financières, dépôt et reporting post-octroi." },
  { q: "Prenez-vous en charge la comptabilité quotidienne ?", a: "Nous proposons un pilotage budgétaire mensuel, un suivi RH/paie/URSSAF et la production d’indicateurs. Nous ne remplaçons pas un expert-comptable mais nous travaillons en complémentarité." },
  { q: "Quels dispositifs financiers connaissez-vous ?", a: "Rémunérations conventionnelles, ACI, FIR, dispositifs CPAM (dont la subvention Teulade), Forfait Structure, ROSP, aides à l’installation, fonds collectivités." },
  { q: "Comment travaillez-vous sur la subvention Teulade ?", a: "Elle est intégrée à notre audit global, jamais traitée isolément. Cela permet d’éviter les doublons avec l’ACI et le FIR, et de sécuriser l’architecture financière du centre de santé." },
  { q: "Et si nous avons déjà un cabinet d’accompagnement ?", a: "Nous intervenons en complémentarité, sur un périmètre spécifique. Beaucoup de nos missions cohabitent avec un expert-comptable, un commissaire aux comptes ou un cabinet juridique." },
  { q: "Mes données sont-elles confidentielles ?", a: "Oui. Charte RGPD, NDA signé en amont de tout audit, données hébergées en France." },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "FAQ" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            FAQ — Cabinet de conseil pour centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Les questions les plus fréquentes des directeurs et gestionnaires de
            centres de santé.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
