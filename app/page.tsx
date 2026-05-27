import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "SubventionsCDS — Accompagnement des centres de santé",
  description:
    "SubventionsCDS accompagne les centres de santé : création, recrutement de médecins, conseil en organisation, optimisation de l’activité, gestion, dossier ARS, subventions et financements.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "Sur quels sujets accompagnez-vous les centres de santé ?",
    a: "Création de centre, recrutement de médecins, conseil en organisation, optimisation de l’activité, comptabilité et gestion, dossier ARS, mobilisation des subventions et financements, conformité réglementaire et projet de santé.",
  },
  {
    q: "Travaillez-vous avec tous les types de centres ?",
    a: "Oui : centres médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, qu’ils soient portés par une association, une mutuelle, une collectivité ou une SCIC.",
  },
  {
    q: "Comment se déroule une mission ?",
    a: "Vous nous écrivez quelques lignes sur votre situation. Nous en discutons, nous cadrons ensemble le périmètre et les attendus, puis nous prenons en charge l’opérationnel jusqu’au résultat.",
  },
  {
    q: "Quel est votre modèle de rémunération ?",
    a: "Forfait transparent ou rémunération au résultat selon la mission. Toujours contractualisé en amont, sans frais cachés.",
  },
  {
    q: "Connaissez-vous la subvention Teulade ?",
    a: "Oui, c’est l’un des dispositifs spécifiques aux centres de santé que nous mobilisons régulièrement, en articulation avec les autres financements (ACI, FIR, aides régionales).",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-soft to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 text-accent-700 px-3 py-1 text-xs font-semibold ring-1 ring-accent-100">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-600"></span>
                Accompagnement des centres de santé
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.1]">
                Faites grandir votre centre de santé en toute sérénité.
              </h1>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-xl">
                Création, recrutement de médecins, organisation, gestion,
                dossier ARS, subventions et financements. Nous accompagnons les
                centres de santé sur l’ensemble de leurs sujets administratifs
                et stratégiques.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#contact" className="btn-primary">Contactez-nous</Link>
                <Link href="#services" className="btn-secondary">Voir nos services</Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft">
                <span className="flex items-center gap-2"><span className="text-accent-600">✓</span> Spécialistes du secteur</span>
                <span className="flex items-center gap-2"><span className="text-accent-600">✓</span> Honoraires transparents</span>
                <span className="flex items-center gap-2"><span className="text-accent-600">✓</span> Confidentialité totale</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-white ring-1 ring-line shadow-sm p-7">
                <h2 className="text-lg font-semibold text-ink">Nos domaines d’intervention</h2>
                <ul className="mt-4 space-y-3 text-[15px]">
                  {[
                    "Création de centre de santé",
                    "Recrutement de médecins",
                    "Conseil en organisation",
                    "Optimisation de l’activité",
                    "Comptabilité & gestion",
                    "Dossier ARS",
                    "Subventions & financements",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-ink-soft">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-600 shrink-0"></span>
                      {t}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="mt-6 btn-primary w-full text-center">Contactez-nous</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES / TRUST */}
      <section className="border-y border-line bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["10", "domaines d’intervention"],
            ["1", "interlocuteur unique"],
            ["100 %", "confidentialité"],
            ["FR", "tout le territoire"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl md:text-4xl font-bold text-accent-700">{n}</div>
              <div className="mt-1 text-sm text-ink-mute">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Nos services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Un seul interlocuteur pour tous vos sujets.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              De l’étude d’opportunité à l’ouverture, du pilotage quotidien à
              la mobilisation des financements — nous prenons en charge ce qui
              ralentit votre centre.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl bg-white ring-1 ring-line hover:ring-accent-300 hover:shadow-md transition p-6 block"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-50 text-accent-700 grid place-items-center mb-4 group-hover:bg-accent-600 group-hover:text-white transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z"/></svg>
                </div>
                <h3 className="text-lg font-semibold text-ink group-hover:text-accent-700">{s.name}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{s.short}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent-700">En savoir plus →</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="#contact" className="btn-primary">Contactez-nous pour discuter de votre projet</Link>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre expertise</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
                Une équipe qui ne parle que centres de santé.
              </h2>
              <p className="mt-5 text-ink-soft leading-relaxed">
                Nous connaissons l’écosystème des centres de santé : cadre
                conventionnel, dispositifs CPAM et ARS, accords
                interprofessionnels, recrutement médical, obligations sociales.
              </p>
              <ul className="mt-6 space-y-3 text-[15px]">
                {[
                  "Spécialisation exclusive sur le secteur",
                  "Approche pragmatique et opérationnelle",
                  "Interlocuteur unique pour toutes les démarches",
                  "Confidentialité totale, NDA systématique",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-ink-soft">
                    <span className="text-accent-600 font-bold">✓</span> {t}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="mt-8 btn-primary">Contactez-nous</Link>
            </div>

            <div className="rounded-2xl bg-soft p-8 ring-1 ring-line">
              <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">À propos</p>
              <p className="mt-3 text-lg text-ink leading-relaxed">
                Nous accompagnons toutes les typologies de centres :{" "}
                <strong>médicaux</strong>, <strong>dentaires</strong>,{" "}
                <strong>infirmiers</strong>, <strong>polyvalents</strong>,{" "}
                <strong>pluriprofessionnels</strong>, qu’ils soient portés par
                une <strong>association</strong>, une <strong>mutuelle</strong>,
                une <strong>collectivité</strong> ou une <strong>SCIC</strong>.
              </p>
              <p className="mt-4 text-ink-soft text-[15px]">
                Nous mobilisons l’ensemble des dispositifs publics et
                conventionnels disponibles, dont la <strong>subvention
                Teulade</strong> (article L162-32 du code de la sécurité
                sociale), souvent sous-mobilisée par les structures
                concernées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section id="approche" className="bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre approche</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Une démarche claire en 4 étapes.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Un parcours simple, des livrables précis, des honoraires
              transparents.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Premier échange", d: "Vous nous écrivez quelques lignes sur votre situation." },
              { n: "02", t: "Cadrage", d: "Nous définissons ensemble le périmètre, les attendus et les délais." },
              { n: "03", t: "Proposition", d: "Plan d’action priorisé, honoraires transparents et contractualisés." },
              { n: "04", t: "Mise en œuvre", d: "Nous prenons en charge l’opérationnel jusqu’au résultat." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl bg-white ring-1 ring-line p-6">
                <div className="text-3xl font-bold text-accent-200">{s.n}</div>
                <h3 className="mt-2 text-lg font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="#contact" className="btn-primary">Démarrer un échange</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">FAQ</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Questions fréquentes
            </h2>
          </div>
          <div className="mt-10">
            <Faq items={homeFaqs} />
          </div>
          <div className="mt-10 text-center">
            <Link href="#contact" className="btn-primary">Contactez-nous</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-ink text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-accent-300">Contact</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Parlons de votre centre de santé.
              </h2>
              <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-lg">
                Quelques lignes sur votre situation suffisent. On revient vers
                vous rapidement, on discute, on définit ensemble s’il y a
                matière à travailler.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-ink hover:bg-accent-50 font-semibold px-5 py-3 transition shadow-sm">
                  Nous écrire →
                </Link>
                <a href="mailto:contact@subventionscds.fr" className="inline-flex items-center justify-center gap-2 rounded-lg ring-1 ring-white/30 hover:bg-white/10 text-white font-semibold px-5 py-3 transition">
                  contact@subventionscds.fr
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-7">
              <h3 className="text-lg font-semibold text-white">Ce que vous obtenez</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-white/85">
                {[
                  "Une réponse personnalisée rapide",
                  "Un interlocuteur dédié pour cadrer votre besoin",
                  "Une proposition claire, transparente, contractualisée",
                  "La discrétion qui s’impose dans le secteur",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><span className="text-accent-300 font-bold">✓</span> {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
