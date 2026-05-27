import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Nos services pour centres de santé",
  description:
    "Création, recrutement de médecins, conseil en organisation, optimisation de l’activité, comptabilité, dossier ARS, subventions et financements, audit financier, conformité.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Services" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Nos services</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
            Tout ce qui fait <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">tourner</span> votre centre.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-2xl leading-relaxed">
            {services.length} domaines traités par une équipe spécialisée
            centres de santé.
          </p>
          <Link href="/#contact" className="mt-7 inline-flex btn-primary">Contactez-nous</Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl bg-white ring-1 ring-line hover:ring-accent-400 hover:shadow-xl hover:-translate-y-0.5 transition-all p-6 block"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-50 to-accent-100 text-accent-700 grid place-items-center mb-4 group-hover:from-accent-600 group-hover:to-accent-400 group-hover:text-white transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon}/></svg>
              </div>
              <h2 className="text-lg font-bold text-ink group-hover:text-accent-700">{s.name}</h2>
              <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                En savoir plus
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
