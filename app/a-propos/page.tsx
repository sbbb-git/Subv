import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "À propos · Cabinet dédié aux centres de santé",
  description:
    "SubventionsCDS : cabinet de conseil indépendant, exclusivement dédié aux centres de santé. Notre approche, notre méthode, nos engagements.",
  alternates: { canonical: "/a-propos" },
};

export default function Page() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pb-28">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Cabinet" }]} />
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <p className="eyebrow">À propos</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                Un cabinet,<br /><span className="italic text-accent-600">une seule spécialité.</span>
              </h1>
              <p className="mt-10 text-ink-soft text-lg max-w-2xl leading-[1.65]">
                Les centres de santé. Rien d’autre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-paper border-b border-line">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 md:py-28 prose-content">
          <p className="dropcap text-[19px] leading-[1.75] text-ink-soft mb-10">
            Le secteur des centres de santé est en croissance, mais son équilibre
            économique reste fragile. Beaucoup de dispositifs publics existent
            pour soutenir ce modèle — encore faut-il les connaître, les activer,
            les piloter. C’est notre métier.
          </p>

          <h2>Notre méthode</h2>
          <ul>
            <li>Spécialisation exclusive — un seul secteur, un seul métier.</li>
            <li>Honoraires transparents — forfait ou résultat, jamais de frais cachés.</li>
            <li>Confidentialité totale — charte RGPD et NDA systématique.</li>
            <li>Indépendance — aucun lien avec la CPAM, l’URSSAF, l’Assurance Maladie ou la FNCS.</li>
          </ul>

          <h2>Nos engagements</h2>
          <ul>
            <li>Plan d’action priorisé, sans bullshit.</li>
            <li>Reporting clair pour chaque mission.</li>
            <li>Interlocuteur unique pour toutes vos démarches.</li>
          </ul>

          <h2>Avec qui nous travaillons</h2>
          <p>
            Directeurs et gestionnaires de centres de santé, trésoriers
            d’associations, DGS de collectivités portant un CMS, responsables
            financiers de mutuelles, médecins coordinateurs.
          </p>

          <p>
            <Link href="/contact">→ Prendre contact</Link>
          </p>
        </div>
      </article>
    </>
  );
}
