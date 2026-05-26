import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${SITE_URL}/services/${s.slug}`,
    },
  };
}

export default function Page({ params }: { params: Params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Services", href: "/services" },
              { name: s.name },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">{s.name}</h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">{s.hero}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3 shadow">
              Nous contacter
            </Link>
            <Link href="/services" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Tous nos services
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">Ce que comprend la mission</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {s.pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white ring-1 ring-brand-100 p-6 shadow-sm">
              <h3 className="font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </article>

      <section className="py-14 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">Comment ça se passe</h2>
          <ol className="mt-6 space-y-4">
            {[
              ["Premier échange", "Vous nous écrivez quelques lignes, on en discute."],
              ["Cadrage", "On définit ensemble le périmètre et les attendus."],
              ["Proposition", "Honoraires transparents, contractualisés en amont."],
              ["Mise en œuvre", "Nous prenons en charge le dossier et le suivi."],
            ].map(([t, d], i) => (
              <li key={t as string} className="flex gap-4 rounded-xl bg-white ring-1 ring-brand-100 p-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white grid place-items-center font-bold">{i + 1}</div>
                <div>
                  <div className="font-bold text-ink">{t}</div>
                  <div className="text-ink-soft text-[15px] mt-1">{d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">Nos autres services</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="rounded-xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 p-4 transition">
                <div className="font-semibold text-ink text-sm">{o.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Parlons de votre projet</h2>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white text-brand-700 hover:bg-brand-50 px-6 py-3 font-semibold shadow">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
