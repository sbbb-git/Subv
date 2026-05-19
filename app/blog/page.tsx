import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog — Subvention Teulade & financement des centres de santé",
  description:
    "Analyses, guides et actualités sur la subvention Teulade, l’ACI, le FIR et tous les financements mobilisables par un centre de santé.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Blog" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Blog & ressources pour centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Guides pratiques, décryptages réglementaires et études chiffrées sur la
            subvention Teulade et le financement des CDS.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-lg transition p-6 flex flex-col"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{p.category}</span>
              <h2 className="mt-2 text-xl font-bold text-ink group-hover:text-brand-700">{p.title}</h2>
              <p className="mt-3 text-ink-soft text-[15px] flex-1">{p.description}</p>
              <div className="mt-5 text-xs text-ink-mute flex gap-3">
                <span>{new Date(p.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>· {p.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
