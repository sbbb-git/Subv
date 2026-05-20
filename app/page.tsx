import Link from "next/link";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";
import { cities } from "@/content/cities";
import { cdsTypes } from "@/content/cds-types";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "SubventionsCDS — Accompagnement & financements pour centres de santé",
  description:
    "Cabinet de conseil dédié aux centres de santé. Audit, accompagnement et mobilisation des financements publics et conventionnels : Assurance Maladie, ARS, ACI, FIR, dispositifs CPAM et URSSAF, aides à l’installation.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "Quels financements peut mobiliser un centre de santé ?",
    a: "Un centre de santé conventionné peut mobiliser une dizaine de dispositifs cumulables : rémunérations conventionnelles avec l’Assurance Maladie, ACI (Accord Conventionnel Interprofessionnel), FIR (Fonds d’Intervention Régional) géré par l’ARS, Forfait Structure, ROSP, aides à l’installation (CAIM, COSCOM, COTRAM), dispositifs CPAM spécifiques aux CDS, ainsi que des aides régionales et locales.",
  },
  {
    q: "Comment fonctionne votre accompagnement ?",
    a: "Tout commence par un audit gratuit de votre situation. Nous cartographions vos recettes et financements existants, identifions ceux que vous ne percevez pas encore, et chiffrons le potentiel récupérable. Si vous le souhaitez, nous prenons en charge l’ensemble de la mise en œuvre : préparation des dossiers, dépôt auprès des organismes (CPAM, ARS, URSSAF), relances et suivi jusqu’au versement.",
  },
  {
    q: "Sur quels types de centres de santé intervenez-vous ?",
    a: "Tous : CDS médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, qu’ils soient portés par une association, une mutuelle, une collectivité (CMS), une SCIC ou un établissement public.",
  },
  {
    q: "Quel est votre modèle de rémunération ?",
    a: "Selon la mission, nous travaillons soit en honoraires fixes transparents, soit en rémunération au résultat (success fee) proportionnelle aux montants effectivement versés. Le mode est défini avec vous au moment du cadrage et toujours contractualisé en amont.",
  },
  {
    q: "Combien de temps prend une mission ?",
    a: "Le diagnostic initial est livré sous 48h ouvrées. La mobilisation effective des financements varie selon les dispositifs : quelques semaines pour les financements rapides, plusieurs mois pour des rattrapages auprès de la CPAM ou de l’ARS.",
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
              Sécurisez l’ensemble des <span className="text-brand-600">financements</span> de votre centre de santé.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">
              SubventionsCDS accompagne les centres de santé dans la mobilisation
              de l’ensemble de leurs ressources : <strong>rémunérations conventionnelles
              de l’Assurance Maladie</strong>, <strong>ACI</strong>, <strong>FIR</strong>,
              dispositifs <strong>CPAM</strong> et <strong>ARS</strong>, aides à
              l’installation et aux investissements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 shadow"
              >
                Demander un diagnostic gratuit
              </Link>
              <Link
                href="/accompagnement"
                className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-6 py-3"
              >
                Découvrir notre accompagnement
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
              {[
                ["48h", "pour un premier diagnostic"],
                ["10+", "dispositifs cumulables"],
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
                  "Cartographie des recettes et financements de votre CDS",
                  "Identification des dispositifs non mobilisés",
                  "Estimation du potentiel récupérable",
                  "Plan d’action priorisé et chiffré",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-ink-soft">
                    <span className="text-brand-600 font-bold">✓</span> {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 block text-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3"
              >
                Demander mon audit
              </Link>
              <p className="mt-3 text-[11px] text-ink-mute text-center">
                Sans engagement, confidentialité totale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notre conviction"
            title="Un centre de santé n’est viable qu’à 100 % de ses financements."
            subtitle="Le modèle économique d’un CDS repose sur l’articulation fine de plusieurs dispositifs. Quand l’un d’eux est mal mobilisé, c’est tout l’équilibre qui se fragilise. Notre métier : faire en sorte que rien ne passe à côté."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Audit & cartographie",
                d: "Vue d’ensemble lisible de vos recettes et de votre potentiel non exploité.",
              },
              {
                t: "Mise en œuvre",
                d: "Préparation des dossiers, dépôt auprès des organismes, suivi jusqu’à versement.",
              },
              {
                t: "Pilotage dans la durée",
                d: "Tableau de bord, alertes calendaires, reporting périodique aux instances.",
              },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl bg-white ring-1 ring-brand-100 p-7 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-700 grid place-items-center font-bold">→</div>
                <h3 className="mt-5 text-lg font-bold text-ink">{b.t}</h3>
                <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos missions"
            title="Un seul cabinet pour tous vos financements"
            subtitle="Nous intervenons sur l’ensemble du cycle de vie d’un centre de santé."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Audit financier 360°", "Diagnostic complet des recettes, charges et financements de votre CDS.", "/accompagnement#audit"],
              ["Mobilisation des financements", "Identification et activation des dispositifs CPAM, ARS, ACI, FIR.", "/financements"],
              ["Accord Conventionnel Interprofessionnel", "Optimisation des indicateurs ACI et négociation annuelle avec la CPAM.", "/financements#aci"],
              ["Création de centre de santé", "Études, statuts, projet de santé, conventionnement CPAM.", "/accompagnement#creation"],
              ["Mise en conformité", "Renouvellement du projet de santé, préparation aux visites ARS.", "/accompagnement#conformite"],
              ["Direction administrative", "Pilotage de gestion à temps partagé pour les CDS sans direction dédiée.", "/accompagnement#gestion"],
            ].map(([t, d, h]) => (
              <Link
                key={t}
                href={h}
                className="group rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-lg transition p-7 block"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-600 text-white grid place-items-center font-bold">€</div>
                <h3 className="mt-5 text-lg font-bold text-ink group-hover:text-brand-700">{t}</h3>
                <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{d}</p>
                <span className="mt-4 inline-block text-brand-700 font-semibold text-sm">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notre méthode"
            title="Un parcours simple, des résultats mesurables"
            subtitle="Nous nous engageons sur des livrables, des délais et un mode de rémunération transparents."
          />
          <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Premier échange", d: "Cadrage de votre situation et de vos enjeux en 30 minutes." },
              { n: "02", t: "Audit gratuit", d: "Diagnostic confidentiel livré sous 48h, avec estimation du potentiel." },
              { n: "03", t: "Plan d’action", d: "Priorisation des chantiers, périmètre, calendrier et modèle d’honoraires." },
              { n: "04", t: "Mise en œuvre", d: "Nous prenons en charge les dossiers et le suivi jusqu’au versement." },
            ].map((s) => (
              <li key={s.n} className="rounded-2xl bg-white ring-1 ring-brand-100 p-6 shadow-sm">
                <div className="text-3xl font-extrabold text-brand-200">{s.n}</div>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TYPOLOGIES */}
      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Par typologie de CDS"
            title="Une expertise adaptée à votre centre"
            subtitle="Médical, dentaire, infirmier, polyvalent, municipal, mutualiste : chaque modèle a ses leviers."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {cdsTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/centre-de-sante/${t.slug}`}
                className="group rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-lg p-6 transition"
              >
                <h3 className="font-bold text-ink group-hover:text-brand-700">{t.name}</h3>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed line-clamp-3">{t.shortDesc}</p>
                <div className="mt-3 text-xs text-brand-700 font-semibold">
                  En savoir plus →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-300 mb-3">
              Pourquoi nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Un cabinet exclusivement dédié aux centres de santé.
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Nos consultants connaissent l’ensemble du cadre conventionnel et
              réglementaire des CDS. Nous parlons le langage des directions, des
              trésoreries, des conseils d’administration — comme celui des CPAM, ARS
              et URSSAF.
            </p>
            <ul className="mt-6 space-y-3 text-white/90 text-[15px]">
              {[
                "Spécialisation exclusive sur les centres de santé",
                "Honoraires transparents (forfait ou résultat)",
                "Confidentialité totale (charte RGPD)",
                "Reporting et interlocuteur unique",
              ].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-brand-300">✓</span> {t}</li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              ["48h", "Délai de réponse pour le diagnostic gratuit"],
              ["10+", "Dispositifs financiers cumulables"],
              ["1", "Interlocuteur unique sur toutes vos démarches"],
              ["100%", "Confidentialité — vos données restent vôtres"],
            ].map(([n, l]) => (
              <div key={n} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-3xl font-extrabold text-brand-300">{n}</div>
                <div className="mt-2 text-white/80 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES (SEO net, kept understated) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Partout en France"
            title="Une présence nationale"
            subtitle="Nous accompagnons les centres de santé sur l’ensemble du territoire."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cities.slice(0, 18).map((c) => (
              <Link
                key={c.slug}
                href={`/subvention-teulade/${c.slug}`}
                className="rounded-lg bg-white ring-1 ring-brand-100 hover:ring-brand-300 px-3 py-2 text-sm font-medium text-ink hover:text-brand-700 text-center"
              >
                {c.name} <span className="text-ink-mute">({c.deptNum})</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/subvention-teulade/villes" className="text-brand-700 hover:text-brand-900 font-semibold">
              Voir toutes les villes →
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ressources"
            title="Comprendre le financement des CDS"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 p-6 transition"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{p.category}</span>
                <h3 className="mt-2 font-bold text-ink">{p.title}</h3>
                <p className="mt-3 text-ink-soft text-sm line-clamp-3">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="Comment travaillons-nous avec un CDS ?"
          />
          <div className="mt-10">
            <Faq items={homeFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-brand-700 hover:text-brand-900 font-semibold">
              Voir toutes les questions →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Reprenons ensemble le pilotage financier de votre CDS"
        subtitle="Diagnostic gratuit en 48h, sans engagement."
        primary={{ href: "/contact", label: "Demander mon diagnostic" }}
        secondary={{ href: "/accompagnement", label: "Découvrir l’accompagnement" }}
      />
    </>
  );
}
