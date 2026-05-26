import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services pour centres de santé : création, ARS, CPAM, subventions",
  description:
    "Cabinet de conseil pour centres de santé : création, développement, comptabilité, dossier ARS, conventionnement CPAM, subvention Teulade, audit financier, conformité.",
  alternates: { canonical: "/services" },
  keywords: [
    "consultant centre de santé",
    "cabinet conseil centre de santé",
    "création centre de santé",
    "dossier ARS",
    "conventionnement CPAM",
    "subvention Teulade",
  ],
};

export default function Page() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pb-28">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Services" }]} />
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">Nos domaines d’intervention</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                Un cabinet,<br /><span className="italic text-accent-600">plusieurs sujets.</span>
              </h1>
              <p className="mt-10 text-ink-soft text-lg max-w-2xl leading-[1.65]">
                De l’étude d’opportunité à l’ouverture, de la mobilisation des
                financements au pilotage quotidien — nous prenons en charge ce
                qui ralentit votre centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <ul className="divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid lg:grid-cols-12 gap-6 py-10 hover:bg-bg transition px-2 -mx-2"
                >
                  <div className="lg:col-span-1 text-ink-mute font-mono text-sm pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="lg:col-span-5">
                    <h2 className="serif text-2xl md:text-3xl text-ink font-light tracking-tight group-hover:text-accent-700 transition">
                      {s.name}
                    </h2>
                  </div>
                  <div className="lg:col-span-5 text-ink-soft text-[16px] leading-[1.6]">
                    {s.short}
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
