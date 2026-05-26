import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { cdsTypes } from "@/content/types";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "SubventionsCDS — Cabinet de conseil pour centres de santé",
  description:
    "Cabinet de conseil dédié aux centres de santé. Spécialiste de la subvention Teulade (article L162-32 du code de la sécurité sociale).",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO — editorial */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 md:pt-32 pb-24 md:pb-36">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">Cabinet de conseil · Paris</p>
              <h1 className="mt-6 serif text-[44px] md:text-[68px] lg:text-[82px] leading-[0.98] text-ink tracking-tightest font-light">
                L’accompagnement<br />
                <span className="italic text-accent-600 font-normal">administratif et financier</span><br />
                des centres de santé.
              </h1>
              <p className="mt-10 text-ink-soft text-lg md:text-xl max-w-xl leading-[1.65]">
                Nous accompagnons les centres de santé sur l’ensemble de leurs
                sujets administratifs et financiers. Notre cœur d’expertise :
                la <span className="italic">subvention Teulade</span>, prévue à
                l’article L162-32 du code de la sécurité sociale.
              </p>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <div className="border-l border-line pl-6">
                <p className="eyebrow">Nous écrire</p>
                <p className="mt-3 serif text-2xl text-ink leading-snug">
                  Un mot sur votre centre, on en discute.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block text-[14px] tracking-wide uppercase font-medium border border-ink hover:bg-ink hover:text-bg text-ink transition px-5 py-3"
                >
                  Prendre contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-line bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">Notre conviction</p>
          </div>
          <div className="lg:col-span-9">
            <p className="serif text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.2] tracking-tight font-light">
              Un centre de santé est une mécanique fragile.<br />
              <span className="text-ink-soft">Bien financé, il dure. Mal piloté, il s’épuise.</span>
            </p>
            <p className="mt-10 max-w-2xl text-ink-soft text-[17px] leading-[1.75]">
              Notre métier consiste à connaître chaque rouage : cadre
              conventionnel avec la CPAM, dispositifs de l’ARS, accords
              interprofessionnels, financements forfaitaires, obligations
              sociales. Pas généralistes — <em>spécialistes</em>.
            </p>
          </div>
        </div>
      </section>

      {/* TEULADE */}
      <section className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">La spécialité du cabinet</p>
            <h2 className="mt-6 serif text-4xl md:text-5xl text-ink tracking-tight font-light">
              Subvention <span className="italic text-accent-600">Teulade</span>
            </h2>
            <p className="mt-6 text-ink-soft text-[17px] leading-[1.75]">
              Dispositif inscrit à l’article L162-32 du code de la sécurité
              sociale, organisé par le décret du 14 décembre 1992. Ancien,
              structurant pour les centres de santé conventionnés, et pourtant
              l’un des plus sous-mobilisés du secteur.
            </p>
            <Link
              href="/subvention-teulade"
              className="mt-8 inline-block text-accent-700 hover:text-accent-900 underline decoration-accent-300 underline-offset-4 hover:decoration-accent-700 transition text-[15px]"
            >
              En savoir plus sur notre approche →
            </Link>
          </div>
          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-line">
            <figure className="max-w-xl">
              <blockquote className="serif text-2xl md:text-3xl text-ink leading-[1.35] font-light">
                « Environ un quart des centres de santé n’ont pas perçu cette
                subvention au titre de l’année 2022. »
              </blockquote>
              <figcaption className="mt-6 text-[13px] text-ink-mute tracking-wide uppercase">
                Inspection Générale des Affaires Sociales — Rapport sur le modèle économique des centres de santé pluriprofessionnels, février 2025
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* SERVICES — list */}
      <section className="border-t border-line bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">Nos domaines</p>
              <h2 className="mt-6 serif text-4xl md:text-5xl text-ink tracking-tight font-light">
                Un cabinet,<br />plusieurs sujets.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-ink-soft text-[17px] leading-[1.75] max-w-xl">
                De l’étude d’opportunité à l’ouverture, de la mobilisation des
                financements au pilotage quotidien — nous prenons en charge ce
                qui ralentit votre centre.
              </p>
            </div>
          </div>

          <ul className="divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid lg:grid-cols-12 gap-6 py-8 hover:bg-bg transition px-2 -mx-2"
                >
                  <div className="lg:col-span-1 text-ink-mute font-mono text-sm pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="serif text-2xl md:text-3xl text-ink font-light tracking-tight group-hover:text-accent-700 transition">
                      {s.name}
                    </h3>
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

      {/* TYPOLOGIES */}
      <section className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-4">
              <p className="eyebrow">Tous les types de centres</p>
              <h2 className="mt-6 serif text-4xl md:text-5xl text-ink tracking-tight font-light">
                Chaque modèle a ses leviers.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-ink-soft text-[17px] leading-[1.75] max-w-xl">
                Médical, dentaire, infirmier, polyvalent — associatif,
                mutualiste, municipal. Nous connaissons toutes les typologies
                et leurs spécificités.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {cdsTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/centres-de-sante/${t.slug}`}
                className="group block border-t border-line pt-5"
              >
                <h3 className="serif text-xl text-ink font-medium tracking-tight group-hover:text-accent-700 transition">
                  {t.name}
                </h3>
                <p className="mt-2 text-ink-soft text-[14px] leading-[1.55] line-clamp-3">{t.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="border-t border-line bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="eyebrow">Ressources</p>
              <h2 className="mt-4 serif text-4xl text-ink font-light tracking-tight">Journal</h2>
            </div>
            <Link href="/blog" className="text-accent-700 hover:text-accent-900 text-[15px] underline decoration-accent-300 underline-offset-4">
              Tous les articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
            {[...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <p className="text-[11px] tracking-[0.22em] uppercase text-accent-600 mb-3">{p.category}</p>
                <h3 className="serif text-2xl text-ink leading-[1.2] tracking-tight font-medium group-hover:text-accent-700 transition">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink-soft text-[15px] leading-[1.6] line-clamp-3">{p.description}</p>
                <p className="mt-4 text-[12px] text-ink-mute tracking-wide">
                  {new Date(p.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-line bg-ink text-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.22em] uppercase text-accent-300">Échangeons</p>
            <h2 className="mt-6 serif text-4xl md:text-5xl lg:text-6xl text-bg tracking-tight font-light leading-[1.05]">
              Parlons de votre<br />centre de santé.
            </h2>
            <p className="mt-8 text-bg/70 text-lg max-w-lg leading-relaxed">
              Quelques lignes sur votre situation. On revient vers vous, on
              discute, on définit ensemble s’il y a matière à travailler.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-bg/15 flex items-end">
            <div>
              <Link
                href="/contact"
                className="inline-block text-[14px] tracking-wide uppercase font-medium border border-bg hover:bg-bg hover:text-ink text-bg transition px-6 py-3.5"
              >
                Nous écrire
              </Link>
              <p className="mt-6 text-bg/55 text-sm">
                Ou directement à{" "}
                <a href="mailto:contact@subventionscds.fr" className="text-bg hover:text-accent-300">
                  contact@subventionscds.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
