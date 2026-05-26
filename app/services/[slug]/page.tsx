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
  const others = services.filter((x) => x.slug !== s.slug);
  const idx = services.findIndex((x) => x.slug === s.slug);

  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pb-28">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Services", href: "/services" },
              { name: s.name },
            ]}
          />
          <div className="mt-12 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <p className="eyebrow">Service {String(idx + 1).padStart(2, "0")}</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                {s.name}.
              </h1>
              <p className="mt-10 text-ink-soft text-lg md:text-xl max-w-2xl leading-[1.65]">
                {s.hero}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-4">
              <p className="eyebrow">Ce que comprend la mission</p>
              <h2 className="mt-4 serif text-3xl md:text-4xl text-ink font-light tracking-tight">
                Les piliers.
              </h2>
            </div>
          </div>
          <div className="border-t border-line">
            {s.pillars.map((p, i) => (
              <div key={p.title} className="grid lg:grid-cols-12 gap-6 py-8 border-b border-line">
                <div className="lg:col-span-1 text-ink-mute font-mono text-sm pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="serif text-2xl text-ink font-medium tracking-tight">{p.title}</h3>
                </div>
                <div className="lg:col-span-7 text-ink-soft text-[16px] leading-[1.7]">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <p className="eyebrow mb-4">Autres domaines</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {others.slice(0, 4).map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group block border-t border-line pt-5">
                <h3 className="serif text-lg text-ink font-medium tracking-tight group-hover:text-accent-700">{o.name}</h3>
                <p className="mt-2 text-ink-soft text-[14px] leading-[1.55] line-clamp-2">{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="serif text-4xl md:text-5xl text-bg font-light tracking-tight leading-[1.1]">
              Parlons de votre projet.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <Link href="/contact" className="inline-block text-[14px] tracking-wide uppercase font-medium border border-bg hover:bg-bg hover:text-ink text-bg transition px-6 py-3.5">
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
