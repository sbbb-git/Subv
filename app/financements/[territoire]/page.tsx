import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { territoiresPublies, getTerritoire } from "@/content/territoires";
import { makePageMeta, SITE_URL } from "@/lib/seo";

type Params = { territoire: string };

export function generateStaticParams() {
  return territoiresPublies().map((t) => ({ territoire: t.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const t = getTerritoire(params.territoire);
  if (!t) return {};
  return {
    ...makePageMeta({
      title: t.metaTitle,
      description: t.metaDescription,
      path: `/financements/${t.slug}`,
    }),
    keywords: t.keywords,
  };
}

export default function Page({ params }: { params: Params }) {
  const t = getTerritoire(params.territoire);
  if (!t) notFound();

  const autres = territoiresPublies().filter((x) => x.slug !== t.slug);

  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Financements", href: "/financements" },
              { name: t.court },
            ]}
          />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">
            {t.type === "region" ? "Région" : `Département ${t.code}`}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">
            Financer un centre de santé<br />
            <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
              {t.nom}
            </span>
          </h1>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">
            Contactez-nous pour un check-up
          </Link>
        </div>
      </section>

      <article className="bg-white border-b border-line">
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-content"
          dangerouslySetInnerHTML={{ __html: t.body }}
        />
      </article>

      {autres.length > 0 && (
        <section className="bg-soft border-b border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-xl font-bold text-ink">Autres territoires</h2>
            <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {autres.map((o) => (
                <Link
                  key={o.slug}
                  href={`/financements/${o.slug}`}
                  className="rounded-lg bg-white ring-1 ring-line hover:ring-accent-400 px-4 py-3 text-sm font-medium text-ink hover:text-accent-700 transition"
                >
                  {o.court}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title="Identifions vos financements" label="Contactez-nous pour un check-up" href="/contact" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Financement de centres de santé ${t.nom}`,
            serviceType: "Conseil en financement de centres de santé",
            provider: { "@id": `${SITE_URL}#org` },
            areaServed: { "@type": "AdministrativeArea", name: t.court },
            url: `${SITE_URL}/financements/${t.slug}`,
          }),
        }}
      />
    </>
  );
}
