import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { cdsTypes } from "@/content/types";
import { posts } from "@/content/posts";
import { Faq } from "@/components/Faq";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "SubventionsCDS — Cabinet d’accompagnement des centres de santé",
  description:
    "Cabinet d’accompagnement dédié aux centres de santé. Spécialiste de la subvention Teulade (article L162-32 du code de la sécurité sociale) et de l’ensemble des sujets administratifs des CDS.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    q: "Que faites-vous concrètement ?",
    a: "Nous accompagnons les centres de santé sur leurs sujets administratifs et financiers. Notre cœur d’expertise : la subvention Teulade, prévue à l’article L162-32 du code de la sécurité sociale. Nous intervenons également sur la création, le développement, la gestion administrative et les autres financements (ACI, FIR, ARS).",
  },
  {
    q: "Sur quels types de centres de santé intervenez-vous ?",
    a: "Tous : CDS médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, qu’ils soient portés par une association, une mutuelle, une collectivité ou une SCIC.",
  },
  {
    q: "Quel est votre modèle de rémunération ?",
    a: "Selon la mission, honoraires forfaitaires ou rémunération au résultat. Toujours contractualisé en amont, jamais de frais cachés.",
  },
  {
    q: "Comment commence une mission ?",
    a: "Par un échange. Vous nous écrivez ou nous appelez, on discute de votre situation, on définit ensemble s’il y a matière à travailler ensemble.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-white" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-100 blur-3xl opacity-60 -z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-xs font-semibold">
              Cabinet dédié aux centres de santé
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.05]">
              L’accompagnement administratif et financier des <span className="text-brand-600">centres de santé</span>.
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              SubventionsCDS accompagne les centres de santé sur l’ensemble de
              leurs sujets administratifs et financiers. Notre cœur d’expertise :
              la <strong>subvention Teulade</strong>, prévue à l’article L162-32
              du code de la sécurité sociale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 shadow"
              >
                Nous contacter
              </Link>
              <Link
                href="/subvention-teulade"
                className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-6 py-3"
              >
                La subvention Teulade
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white ring-1 ring-brand-100 shadow-xl p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Notre spécialité
            </p>
            <h2 className="mt-2 text-2xl font-bold text-ink">
              Subvention Teulade
            </h2>
            <p className="mt-3 text-ink-soft leading-relaxed text-[15px]">
              Dispositif ancien (1992), structurant pour les centres de santé
              conventionnés, et pourtant l’un des plus sous-mobilisés du
              secteur.
            </p>
            <div className="mt-5 rounded-xl bg-brand-50 p-4 text-sm text-ink-soft">
              <span className="font-semibold text-brand-800">Rapport IGAS 2025 :</span>{" "}
              environ <strong>25 %</strong> des centres de santé n’ont pas perçu
              la subvention Teulade au titre de 2022.
            </div>
            <Link
              href="/subvention-teulade"
              className="mt-5 inline-flex items-center gap-1 text-brand-700 hover:text-brand-900 font-semibold text-sm"
            >
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* PITCH SOBRE */}
      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ce que nous faisons"
            title="Une équipe qui ne parle que CDS"
            subtitle="Nous connaissons l’écosystème des centres de santé : cadre conventionnel, dispositifs CPAM et ARS, financements et obligations sociales. Pas généralistes — spécialistes."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Subvention Teulade",
                d: "Cœur de métier. Le dispositif prévu à l’article L162-32 du code de la sécurité sociale, sur lequel beaucoup de CDS passent à côté.",
                h: "/subvention-teulade",
              },
              {
                t: "Sujets administratifs CDS",
                d: "Création, conventionnement, projet de santé, dossiers ARS, suivi des financements conventionnels.",
                h: "/services",
              },
              {
                t: "Toutes typologies",
                d: "CDS médicaux, dentaires, infirmiers, polyvalents, pluripro — associatifs, mutualistes, municipaux.",
                h: "/centres-de-sante",
              },
            ].map((b) => (
              <Link
                key={b.t}
                href={b.h}
                className="group rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 p-7 shadow-sm transition"
              >
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-700">{b.t}</h3>
                <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{b.d}</p>
                <span className="mt-4 inline-block text-brand-700 font-semibold text-sm">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos domaines d’intervention"
            title="Un cabinet, plusieurs sujets CDS"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-lg transition p-7 block"
              >
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-700">{s.name}</h3>
                <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{s.short}</p>
                <span className="mt-4 inline-block text-brand-700 font-semibold text-sm">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TYPOLOGIES */}
      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tous les types de CDS"
            title="Une expertise pour chaque typologie"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {cdsTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/centres-de-sante/${t.slug}`}
                className="group rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-lg p-6 transition"
              >
                <h3 className="font-bold text-ink group-hover:text-brand-700">{t.name}</h3>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed line-clamp-3">{t.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Ressources" title="Le blog du CDS" />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 p-6 transition">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{p.category}</span>
                <h3 className="mt-2 font-bold text-ink">{p.title}</h3>
                <p className="mt-3 text-ink-soft text-sm line-clamp-3">{p.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-brand-700 hover:text-brand-900 font-semibold">Tous les articles →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Questions fréquentes" title="Comment travaillons-nous ?" />
          <div className="mt-10"><Faq items={faqs} /></div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-brand-700 hover:text-brand-900 font-semibold">Voir toutes les questions →</Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Parlons de votre centre de santé
          </h2>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white text-brand-700 hover:bg-brand-50 px-6 py-3 font-semibold shadow">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
