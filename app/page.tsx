import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { cdsTypes } from "@/content/types";
import { posts } from "@/content/posts";
import { Faq } from "@/components/Faq";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "SubventionsCDS — Cabinet de conseil pour centres de santé",
  description:
    "Création, développement, comptabilité, dossier ARS, conventionnement CPAM, mobilisation des subventions et financements. Cabinet dédié aux centres de santé. Diagnostic gratuit en 48h.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    q: "Sur quels sujets accompagnez-vous les centres de santé ?",
    a: "Création de CDS, développement et ouverture d’antennes, comptabilité et gestion, montage de dossiers ARS, conventionnement CPAM, mise en conformité, audit financier, mobilisation des subventions et financements (ACI, FIR, dispositifs CPAM, aides régionales).",
  },
  {
    q: "Comment commence une mission ?",
    a: "Par un audit gratuit de votre situation, livré sous 48h ouvrées. Nous identifions les chantiers prioritaires et vous proposons un plan d’action chiffré.",
  },
  {
    q: "Quel est votre modèle de rémunération ?",
    a: "Forfait transparent ou rémunération au résultat selon la mission, toujours contractualisé en amont. Pas de frais cachés.",
  },
  {
    q: "Travaillez-vous avec tous les types de CDS ?",
    a: "Oui : centres médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, qu’ils soient associatifs, mutualistes, municipaux ou portés par une SCIC.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-white" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-100 blur-3xl opacity-60 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-xs font-semibold">
              Cabinet de conseil dédié aux centres de santé
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.05]">
              Ouvrez, développez et pilotez votre <span className="text-brand-600">centre de santé</span> en toute sérénité.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">
              SubventionsCDS accompagne les centres de santé sur l’ensemble de
              leur cycle de vie : <strong>création</strong>, <strong>développement</strong>,
              <strong> comptabilité</strong>, <strong>dossiers ARS</strong>,
              <strong> conventionnement CPAM</strong> et <strong>mobilisation des
              subventions et financements</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 shadow">
                Demander un diagnostic gratuit
              </Link>
              <Link href="/services" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-6 py-3">
                Voir nos services
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
              {[
                ["48h", "pour un diagnostic gratuit"],
                ["9", "services dédiés CDS"],
                ["1", "interlocuteur unique"],
              ].map(([n, l]) => (
                <div key={n} className="rounded-xl bg-white ring-1 ring-brand-100 p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-brand-700">{n}</div>
                  <div className="text-xs text-ink-mute mt-1 leading-tight">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white ring-1 ring-brand-100 shadow-xl p-7">
              <div className="absolute -top-4 left-7 inline-flex items-center rounded-full bg-brand-600 text-white text-xs font-semibold px-3 py-1">
                Diagnostic gratuit
              </div>
              <h2 className="text-xl font-bold text-ink">Ce que comprend l’audit</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "Vue d’ensemble de votre situation administrative et financière",
                  "Identification des dispositifs non mobilisés",
                  "Estimation du potentiel récupérable",
                  "Plan d’action priorisé",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-ink-soft">
                    <span className="text-brand-600 font-bold">✓</span> {t}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-6 block text-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3">
                Demander mon diagnostic
              </Link>
              <p className="mt-3 text-[11px] text-ink-mute text-center">
                Sans engagement · Réponse sous 48h ouvrées
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos services"
            title="Un cabinet, tous vos sujets CDS"
            subtitle="De l’idée d’ouverture jusqu’au pilotage quotidien, nous prenons en charge ce qui ralentit votre centre."
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tous les types de CDS"
            title="Une expertise pour chaque typologie"
            subtitle="Médical, dentaire, infirmier, polyvalent, municipal, associatif, mutualiste : chaque modèle a ses leviers et ses contraintes."
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
                <div className="mt-3 text-xs text-brand-700 font-semibold">En savoir plus →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEULADE DISCRET */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-600 mb-3">
              Spécialité phare du cabinet
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
              Subvention Teulade : faites valoir vos droits.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              La subvention Teulade, prévue à l’article L162-32 du code de la
              sécurité sociale, est l’un des dispositifs structurants des
              centres de santé conventionnés. Et l’un des plus sous-mobilisés.
              Notre cabinet l’a placée au cœur de son expertise.
            </p>
            <div className="mt-7">
              <Link
                href="/subvention-teulade"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3"
              >
                En savoir plus sur la subvention Teulade →
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-brand-50 ring-1 ring-brand-100 p-7">
            <p className="text-sm font-semibold text-brand-800 uppercase tracking-wide">Rapport IGAS 2025</p>
            <p className="mt-3 text-2xl font-bold text-ink leading-tight">
              ≈ 25 % des centres de santé n’ont pas perçu la subvention Teulade au titre de 2022.
            </p>
            <p className="mt-4 text-ink-soft text-sm">
              Source : Inspection Générale des Affaires Sociales, février 2025.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-300 mb-3">Pourquoi nous</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Une équipe qui ne parle que CDS.
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Nos consultants maîtrisent l’écosystème des centres de santé :
              cadre conventionnel, dispositifs CPAM et ARS, financements ACI et
              FIR, comptabilité analytique, dossiers de création et de
              renouvellement. Spécialistes, pas généralistes.
            </p>
            <ul className="mt-6 space-y-3 text-white/90 text-[15px]">
              {[
                "Spécialisation exclusive sur les centres de santé",
                "Honoraires transparents — forfait ou résultat",
                "Confidentialité totale (charte RGPD)",
                "Interlocuteur unique sur toutes vos démarches",
              ].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-brand-300">✓</span> {t}</li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              ["48h", "Délai de l’audit gratuit"],
              ["9", "Services dédiés CDS"],
              ["8", "Typologies de centres maîtrisées"],
              ["100%", "Confidentialité"],
            ].map(([n, l]) => (
              <div key={n} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-3xl font-extrabold text-brand-300">{n}</div>
                <div className="mt-2 text-white/80 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
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
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Questions fréquentes" title="Comment travaillons-nous avec un CDS ?" />
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
            Reprenons ensemble le pilotage de votre CDS
          </h2>
          <p className="mt-4 text-brand-50/90 text-lg">Diagnostic gratuit en 48h, sans engagement.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white text-brand-700 hover:bg-brand-50 px-6 py-3 font-semibold shadow">
            Demander mon diagnostic
          </Link>
        </div>
      </section>
    </>
  );
}
