import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Journal — Centres de santé",
  description: "Articles et analyses sur le pilotage et le financement des centres de santé.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pb-28">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Journal" }]} />
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <p className="eyebrow">Ressources</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                Journal.
              </h1>
              <p className="mt-10 text-ink-soft text-lg max-w-2xl leading-[1.65]">
                Analyses, décryptages et notes de lecture sur le pilotage et
                le financement des centres de santé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <ul className="divide-y divide-line border-y border-line">
            {sorted.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group grid lg:grid-cols-12 gap-6 py-10 hover:bg-bg transition px-2 -mx-2">
                  <div className="lg:col-span-2 text-[11px] tracking-[0.18em] uppercase text-ink-mute pt-2">
                    {p.category}
                  </div>
                  <div className="lg:col-span-7">
                    <h2 className="serif text-2xl md:text-3xl text-ink font-light tracking-tight leading-[1.2] group-hover:text-accent-700 transition">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-ink-soft text-[15px] leading-[1.6] line-clamp-2">{p.description}</p>
                  </div>
                  <div className="lg:col-span-3 lg:text-right text-[13px] text-ink-mute tracking-wide pt-2">
                    {new Date(p.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                    <span className="mx-2 text-line">·</span>
                    {p.readingTime}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
