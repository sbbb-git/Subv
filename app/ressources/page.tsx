import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Ressources : subventions, financements, gestion de centre de santé",
  description:
    "Ressources et analyses sur les subventions, les financements et la gestion des centres de santé. Subvention Teulade, financement CDS, création de centre.",
  alternates: { canonical: "/ressources" },
};

export default function Page() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Ressources" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Ressources</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            Subventions, financements, gestion.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-2xl leading-relaxed">
            Repères généraux sur le financement et la gestion des centres de
            santé.
          </p>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((p) => (
            <Link key={p.slug} href={`/ressources/${p.slug}`} className="group rounded-2xl bg-white ring-1 ring-line hover:ring-accent-400 hover:shadow-md transition p-6 block flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-700">{p.category}</span>
              <h2 className="mt-2 text-lg font-bold text-ink group-hover:text-accent-700 leading-snug">{p.title}</h2>
              <p className="mt-3 text-[15px] text-ink-soft leading-relaxed flex-1">{p.description}</p>
              <div className="mt-4 text-xs text-ink-mute">{new Date(p.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })} · {p.readingTime}</div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
