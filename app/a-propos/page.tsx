import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "À propos — Cabinet de conseil pour centres de santé",
  description:
    "SubventionsCDS est le seul cabinet de conseil exclusivement dédié aux centres de santé. Notre approche, notre indépendance, nos engagements.",
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
            Nous ne faisons qu’une chose : aider les centres de santé à mieux
            fonctionner, mieux se financer et mieux durer.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Pourquoi ce cabinet existe</h2>
        <p>
          Le secteur des centres de santé est en croissance, mais son équilibre
          économique reste fragile. Beaucoup de dispositifs publics existent
          pour soutenir le modèle CDS — encore faut-il les connaître, les
          activer et les piloter. C’est notre métier.
        </p>

        <h2>Notre méthode</h2>
        <ul>
          <li><strong>Spécialisation exclusive</strong> : un seul secteur, un seul métier — les CDS.</li>
          <li><strong>Honoraires transparents</strong> : forfait ou résultat, jamais de frais cachés.</li>
          <li><strong>Confidentialité totale</strong> : charte RGPD et NDA systématique.</li>
          <li><strong>Indépendance</strong> : aucun lien avec la CPAM, l’URSSAF, l’Assurance Maladie ou la FNCS.</li>
        </ul>

        <h2>Nos engagements</h2>
        <ul>
          <li>Plan d’action priorisé, sans bullshit.</li>
          <li>Reporting clair pour chaque mission.</li>
          <li>Interlocuteur unique pour toutes vos démarches.</li>
        </ul>

        <h2>Avec qui nous travaillons</h2>
        <p>
          Directeurs et gestionnaires de CDS, trésoriers d’associations, DGS de
          collectivités portant un CMS, responsables financiers de mutuelles,
          médecins coordinateurs. Toute personne en charge de la santé
          administrative ou financière d’un centre de santé.
        </p>

        <p>
          <Link href="/contact">→ Prendre contact</Link>
        </p>
      </article>
    </>
  );
}
