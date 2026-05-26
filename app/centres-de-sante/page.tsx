import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { cdsTypes } from "@/content/types";

export const metadata: Metadata = {
  title: "Centres de santé — typologies & accompagnement",
  description:
    "Panorama des centres de santé : médical, dentaire, infirmier, polyvalent, pluriprofessionnel, municipal, associatif, mutualiste.",
  alternates: { canonical: "/centres-de-sante" },
};

export default function Page() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pb-28">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Centres de santé" }]} />
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <p className="eyebrow">Toutes les typologies</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                Chaque modèle,<br /><span className="italic text-accent-600">ses leviers.</span>
              </h1>
              <p className="mt-10 text-ink-soft text-lg max-w-2xl leading-[1.65]">
                Médical, dentaire, infirmier, polyvalent — associatif,
                mutualiste, municipal. Chaque typologie a ses spécificités, ses
                obligations et ses sources de financement. Nous les connaissons
                toutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <ul className="divide-y divide-line border-y border-line">
            {cdsTypes.map((t, i) => (
              <li key={t.slug}>
                <Link
                  href={`/centres-de-sante/${t.slug}`}
                  className="group grid lg:grid-cols-12 gap-6 py-8 hover:bg-bg transition px-2 -mx-2"
                >
                  <div className="lg:col-span-1 text-ink-mute font-mono text-sm pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="lg:col-span-4">
                    <h2 className="serif text-2xl md:text-3xl text-ink font-light tracking-tight group-hover:text-accent-700 transition">
                      {t.longName}
                    </h2>
                  </div>
                  <div className="lg:col-span-6 text-ink-soft text-[16px] leading-[1.6]">
                    {t.short}
                  </div>
                  <div className="lg:col-span-1 lg:text-right text-accent-600 text-2xl pt-1 group-hover:translate-x-1 transition">
                    →
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
