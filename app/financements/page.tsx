import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { makePageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...makePageMeta({
    title: "Financement d’un centre de santé",
    description:
      "Panorama des financements et subventions d’un centre de santé : rémunérations, forfaits, Teulade, aides à l’installation.",
    path: "/financements",
  }),
  keywords: [
    "financement centre de santé",
    "financement cds",
    "subventions centre de santé",
    "subventions cds",
    "aide centre de santé",
    "subvention teulade",
    "dispositif financier centre de santé",
  ],
};

const items = [
  { name: "Rémunérations conventionnelles", desc: "La recette de base de tout centre de santé conventionné." },
  { name: "Dispositifs forfaitaires", desc: "Forfaits attribués sur indicateurs et conditions de structure." },
  { name: "Subvention Teulade", desc: "Dispositif spécifique aux centres de santé conventionnés.", link: "/subvention-teulade" },
  { name: "Aides à l’installation", desc: "Contrats d’aide en zones sous-dotées." },
  { name: "Aides régionales et publiques", desc: "Cofinancement par les ARS et les collectivités." },
  { name: "Subventions des collectivités", desc: "Région, département, EPCI, commune." },
];

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Financements" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Vue d’ensemble</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            Le <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">financement</span> d’un centre de santé.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-2xl leading-relaxed">
            Plusieurs dispositifs publics et conventionnels peuvent être
            mobilisés pour structurer durablement le modèle économique d’un
            centre de santé.
          </p>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.name} className="rounded-2xl bg-white ring-1 ring-line p-6">
              <h2 className="text-lg font-bold text-ink">{it.name}</h2>
              <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{it.desc}</p>
              {it.link && (
                <Link href={it.link} className="mt-3 inline-block text-sm font-semibold text-accent-700 hover:text-accent-900">
                  Voir la page dédiée →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Identifions vos subventions" label="Contactez-nous pour un check-up" href="/contact" />
    </>
  );
}
