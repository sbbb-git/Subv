import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ : subventions et accompagnement des centres de santé",
  description:
    "Questions fréquentes sur les subventions, le financement et l’accompagnement des centres de santé. Subvention Teulade, financements CDS, création.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  { q: "Qu’est-ce que la subvention Teulade ?", a: "Un dispositif spécifique aux centres de santé conventionnés, prévu par le code de la sécurité sociale. Il s’inscrit dans l’ensemble des financements publics et conventionnels mobilisables par un CDS." },
  { q: "Mon centre peut-il prétendre à la subvention Teulade ?", a: "Les centres de santé conventionnés peuvent en principe être concernés. Chaque situation s’apprécie individuellement. Contactez-nous pour un check-up gratuit." },
  { q: "Quels types de centres accompagnez-vous ?", a: "Centres médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, qu’ils soient associatifs, mutualistes, municipaux ou en SCIC." },
  { q: "Sur quels sujets intervenez-vous ?", a: "Création, recrutement, organisation, gestion, financements, dossiers ARS, conformité. Notre offre phare reste la récupération des subventions." },
  { q: "Comment commence une mission ?", a: "Par un échange. Vous nous écrivez quelques lignes, on en discute, on définit ensemble s’il y a matière à travailler." },
  { q: "Êtes-vous indépendants ?", a: "Oui. Cabinet privé sans lien capitalistique avec la CPAM, l’URSSAF ou l’Assurance Maladie." },
  { q: "Travaillez-vous partout en France ?", a: "Oui, sur l’ensemble du territoire métropolitain et ultramarin." },
  { q: "Quels sont les autres financements d’un centre de santé ?", a: "Au-delà de la subvention Teulade, plusieurs dispositifs publics et conventionnels peuvent être mobilisés. Notre check-up gratuit identifie les leviers adaptés à votre situation." },
];

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "FAQ" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Questions fréquentes</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">
            FAQ : subventions et accompagnement.
          </h1>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Faq items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
