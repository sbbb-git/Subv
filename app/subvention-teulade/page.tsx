import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Subvention Teulade : nous faisons les démarches à votre place",
  description:
    "Subvention Teulade : nous prenons en charge la constitution du dossier, la récupération des pièces justificatives, le calcul, la transmission à la CPAM, les échanges et le suivi jusqu’au versement.",
  alternates: { canonical: "/subvention-teulade" },
  keywords: [
    "subvention teulade",
    "subvention teulade cds",
    "subvention teulade centre de santé",
    "subvention teulade centre dentaire",
    "récupérer subvention teulade",
    "article L162-32",
    "L162-32 code sécurité sociale",
    "aide teulade",
    "décret 14 décembre 1992 teulade",
    "subvention cpam centre de santé",
    "subvention cds",
    "subventions cds",
    "dossier subvention teulade",
  ],
  openGraph: {
    title: "Subvention Teulade : nous faisons les démarches à votre place",
    description: "Nous prenons en charge tout le dossier, de la constitution jusqu’au versement.",
    url: `${SITE_URL}/subvention-teulade`,
  },
};

const faqs = [
  {
    q: "Qu’est-ce que la subvention Teulade ?",
    a: "Un dispositif spécifique aux centres de santé conventionnés, prévu par le code de la sécurité sociale. Il participe au financement des centres de santé.",
  },
  {
    q: "Pourquoi beaucoup de centres ne la perçoivent pas ?",
    a: "Parce que les démarches sont longues, techniques et chronophages. Constituer le dossier, rassembler les pièces, faire les calculs, transmettre à la CPAM, suivre les échanges : peu de centres ont les ressources internes pour le faire correctement.",
  },
  {
    q: "Que faites-vous concrètement ?",
    a: "On prend tout en charge : constitution du dossier, récupération des pièces justificatives, calcul, transmission à la CPAM, échanges et validation jusqu’au paiement.",
  },
  {
    q: "Mon centre de santé peut-il y prétendre ?",
    a: "Les centres de santé conventionnés peuvent en principe être concernés. Chaque situation s’apprécie individuellement. Contactez-nous pour un check-up gratuit.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Honoraires transparents, contractualisés en amont, sans frais cachés. On en discute lors du premier échange.",
  },
];

const steps = [
  { n: "01", t: "Vérification de l’éligibilité", d: "Premier échange pour valider que votre centre peut prétendre au dispositif." },
  { n: "02", t: "Récupération des pièces", d: "Nous collectons auprès de vos équipes ou prestataires les documents nécessaires au dossier." },
  { n: "03", t: "Constitution du dossier", d: "Calculs, formulaires, justificatifs : nous assemblons un dossier conforme et complet." },
  { n: "04", t: "Transmission à la CPAM", d: "Nous adressons le dossier à la caisse compétente et suivons sa réception." },
  { n: "05", t: "Échanges et validation", d: "Nous répondons aux demandes de la CPAM et défendons le dossier jusqu’à acceptation." },
  { n: "06", t: "Suivi jusqu’au versement", d: "Nous restons sur le dossier jusqu’à la réception effective des fonds par votre centre." },
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
            Subvention <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">Teulade</span> :<br/>
            nous faisons les démarches à votre place.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            Nous prenons en charge l’intégralité du dossier : constitution,
            récupération des pièces justificatives, calcul, transmission à la
            CPAM, échanges et suivi jusqu’au versement effectif des fonds.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-base">Contactez-nous pour un check-up</Link>
            <Link href="/financements" className="btn-secondary text-base">Tous les financements</Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Le constat</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              La plupart des centres ne vont pas chercher cette subvention.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Pas par manque d’envie, par manque de temps. Les démarches sont
              longues, techniques, chronophages. Beaucoup de centres ne disposent
              pas des ressources internes pour les mener à bien. Résultat : une
              part significative passe à côté de financements auxquels ils ont
              pourtant droit.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              On va la chercher pour vous.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre prise en charge</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              De A à Z, sans intervention de votre part.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              On s’occupe de tout. Vous validez, on agit.
            </p>
          </div>

          <ol className="mt-10 grid md:grid-cols-2 gap-5">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl bg-white ring-1 ring-line p-6">
                <div className="text-3xl font-bold text-accent-200">{s.n}</div>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary text-base">Contactez-nous pour un check-up</Link>
          </div>
        </div>
      </section>

      <article className="bg-white border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-content">
          <h2>Pour quels centres ?</h2>
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

      <CTASection title="On va chercher votre subvention pour vous" label="Contactez-nous pour un check-up" href="/contact" />
    </>
  );
}
