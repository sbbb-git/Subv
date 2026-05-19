import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "À propos — Cabinet de conseil dédié aux centres de santé",
  description:
    "Le seul cabinet de conseil exclusivement dédié aux centres de santé : récupération de la subvention Teulade, accompagnement CPAM, ACI, FIR, ARS. Nos valeurs, notre méthode, notre indépendance.",
  alternates: { canonical: "/a-propos" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "À propos" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Un cabinet 100 % dédié aux centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Nous ne faisons qu’une seule chose : aider les centres de santé à
            récupérer ce que la réglementation leur doit déjà.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Pourquoi ce cabinet existe</h2>
        <p>
          Selon le rapport IGAS de février 2025, près d’<strong>un quart des centres
          de santé</strong> n’ont pas perçu la subvention Teulade au titre de 2022.
          Pour un secteur dont l’équilibre économique est déjà fragile, c’est inacceptable.
          Le cabinet a été créé pour combler ce manque : être l’interlocuteur unique,
          spécialisé, qui défend les intérêts financiers des CDS face à des dispositifs
          qu’aucune institution ne leur explique de façon proactive.
        </p>

        <h2>Notre méthode</h2>
        <ul>
          <li><strong>Spécialisation exclusive</strong> : un seul secteur, un seul métier — les CDS.</li>
          <li><strong>Rémunération au résultat</strong> sur la mission Teulade : si vous ne touchez rien, vous ne payez rien.</li>
          <li><strong>Confidentialité totale</strong> : charte RGPD et accord de confidentialité signé avant tout audit.</li>
          <li><strong>Indépendance</strong> : aucun lien capitalistique avec la CPAM, l’URSSAF, l’Assurance Maladie ou la FNCS.</li>
        </ul>

        <h2>Nos engagements</h2>
        <ul>
          <li>Diagnostic gratuit en 48h ouvrées.</li>
          <li>Tableau de bord et reporting mensuel pour chaque mission.</li>
          <li>Aucun honoraire caché — tout est contractualisé en amont.</li>
        </ul>

        <h2>À qui nous parlons</h2>
        <p>
          Aux <strong>directeurs et gestionnaires de centres de santé</strong>, aux
          trésoriers d’associations, aux DGS de collectivités portant un CMS, aux
          mutuelles, aux médecins coordinateurs. Bref, à toute personne en charge de
          la santé financière d’un CDS.
        </p>
      </article>

      <CTASection />
    </>
  );
}
