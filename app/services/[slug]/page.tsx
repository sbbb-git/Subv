import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { services } from "@/content/services";
import { makePageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    ...makePageMeta({
      title: s.metaTitle,
      description: s.metaDescription,
      path: `/services/${s.slug}`,
    }),
    keywords: s.keywords,
  };
}

export default function Page({ params }: { params: Params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Services", href: "/services" }, { name: s.name }]} />
          <div className="mt-8 flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-600 to-accent-400 text-white grid place-items-center shrink-0 shadow-lg">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon}/></svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">{s.name}</h1>
              <p className="mt-4 text-lg text-ink-soft max-w-3xl leading-relaxed">{s.hero}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-primary">Contactez-nous →</Link>
            <Link href="/services" className="btn-secondary">Tous nos services</Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">Ce que comprend la mission</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {s.pillars.map((p, i) => (
              <div key={p.title} className="rounded-xl bg-white ring-1 ring-line hover:ring-accent-300 hover:shadow-md transition p-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-accent-50 text-accent-700 grid place-items-center font-bold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-xl font-bold text-ink">Autres services</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group rounded-xl bg-white ring-1 ring-line hover:ring-accent-400 hover:shadow-md transition p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent-50 text-accent-700 grid place-items-center shrink-0 group-hover:bg-accent-600 group-hover:text-white transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={o.icon}/></svg>
                </div>
                <span className="font-semibold text-ink text-sm group-hover:text-accent-700">{o.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
