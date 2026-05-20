import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { cdsTypes, getCdsType } from "@/content/cds-types";
import { SITE_URL } from "@/lib/seo";

type Params = { type: string };

export function generateStaticParams() {
  return cdsTypes.map((t) => ({ type: t.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const t = getCdsType(params.type);
  if (!t) return {};
  return {
    title: `${t.longName} : financements, accompagnement et conseil`,
    description: `Accompagnement spécifique pour ${t.longName.toLowerCase()} : audit financier, mobilisation des dispositifs CPAM, ARS, ACI, FIR et subvention Teulade.`,
    alternates: { canonical: `/centre-de-sante/${t.slug}` },
    openGraph: {
      title: t.longName,
      description: t.shortDesc,
      url: `${SITE_URL}/centre-de-sante/${t.slug}`,
    },
  };
}

export default function Page({ params }: { params: Params }) {
  const t = getCdsType(params.type);
  if (!t) notFound();
  const others = cdsTypes.filter((o) => o.slug !== t.slug);

  const faqs = [
    {
      q: `Un ${t.longName.toLowerCase()} peut-il bénéficier de la subvention Teulade ?`,
      a: `Les centres de santé conventionnés au sens de l’article L6323-1 du code de la santé publique peuvent en bénéficier, sous conditions. Les modalités précises dépendent de la structure et de la composition de l’équipe — c’est l’objet de notre audit gratuit.`,
    },
    {
      q: `Quels financements sont prioritaires pour un ${t.longName.toLowerCase()} ?`,
      a: `Cela dépend du modèle économique du centre. Pour la plupart, les leviers principaux sont les rémunérations conventionnelles, l’ACI, la subvention Teulade et les financements ARS/FIR. Notre rôle est de définir l’architecture financière la plus adaptée à votre cas.`,
    },
    {
      q: `Comment commencer un accompagnement ?`,
      a: `Par un audit gratuit livré sous 48h. Nous établissons la cartographie de votre situation, identifions les opportunités et vous proposons un plan d’action.`,
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Centres de santé", href: "/centre-de-sante" },
              { name: t.name },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            {t.longName}
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">{t.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3">
              Diagnostic gratuit pour mon {t.name}
            </Link>
            <Link href="/financements" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Voir les financements
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Spécificités d’un {t.longName.toLowerCase()}</h2>
        <ul>
          {t.pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <h2>Points de vigilance</h2>
        <ul>
          {t.specifics.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2>Notre accompagnement</h2>
        <p>
          Pour les {t.longName.toLowerCase()}s, nous proposons un{" "}
          <Link href="/accompagnement">accompagnement global</Link> couvrant
          l’audit financier, la mobilisation des dispositifs adaptés à votre
          structure (CPAM, ACI, FIR, subvention Teulade, Forfait Structure) et
          le pilotage dans la durée. Honoraires transparents, contractualisés
          avant toute mission.
        </p>

        <h2>Questions fréquentes</h2>
      </article>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Faq items={faqs} />
      </section>

      <section className="py-14 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">Autres typologies</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/centre-de-sante/${o.slug}`}
                className="rounded-lg bg-white ring-1 ring-brand-100 hover:ring-brand-300 px-4 py-3 text-sm font-medium text-ink hover:text-brand-700"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
