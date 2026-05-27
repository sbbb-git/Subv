import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { services } from "@/content/services";
import { SITE_URL } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `${SITE_URL}/services/${s.slug}` },
  };
}

export default function Page({ params }: { params: Params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <>
      <section className="bg-soft border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Services", href: "/services" }, { name: s.name }]} />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-ink">{s.name}</h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">{s.hero}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-primary">Contactez-nous</Link>
            <Link href="/services" className="btn-secondary">Tous nos services</Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">Ce que comprend la mission</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {s.pillars.map((p) => (
              <div key={p.title} className="rounded-xl bg-white ring-1 ring-line p-6">
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft border-y border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-ink">Comment ça se passe</h2>
          <ol className="mt-6 grid md:grid-cols-4 gap-4">
            {[
              ["01", "Premier échange", "Vous nous écrivez quelques lignes."],
              ["02", "Cadrage", "Périmètre et attendus définis ensemble."],
              ["03", "Proposition", "Honoraires transparents, contractualisés."],
              ["04", "Mise en œuvre", "Nous prenons en charge l’opérationnel."],
            ].map(([n, t, d]) => (
              <li key={n as string} className="rounded-xl bg-white ring-1 ring-line p-5">
                <div className="text-2xl font-bold text-accent-200">{n}</div>
                <h3 className="mt-1 font-semibold text-ink">{t}</h3>
                <p className="mt-1 text-sm text-ink-soft">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link href="/#contact" className="btn-primary">Contactez-nous</Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-xl font-semibold text-ink">Autres services</h2>
          <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="rounded-xl ring-1 ring-line hover:ring-accent-300 p-4 transition">
                <span className="font-semibold text-ink text-sm">{o.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
