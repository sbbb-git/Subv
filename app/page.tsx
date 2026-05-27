import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "SubventionsCDS — Nous récupérons les subventions pour vous",
  description:
    "SubventionsCDS accompagne les centres de santé : nous récupérons les subventions pour vous, créons votre centre, recrutons vos médecins, optimisons votre activité, montons vos dossiers ARS.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "Concrètement, vous faites quoi ?",
    a: "Nous récupérons les subventions pour vous, nous recrutons vos médecins, nous montons vos dossiers ARS, nous optimisons votre activité, nous structurons votre gestion. Vous restez concentré sur les soins.",
  },
  {
    q: "Travaillez-vous avec tous les types de centres ?",
    a: "Oui : centres médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, qu’ils soient portés par une association, une mutuelle, une collectivité ou une SCIC.",
  },
  {
    q: "Quel est votre modèle de rémunération ?",
    a: "Forfait transparent ou rémunération au résultat selon la mission. Contractualisé en amont, sans frais cachés.",
  },
  {
    q: "Et la subvention Teulade ?",
    a: "Oui, c’est l’un des dispositifs que nous mobilisons régulièrement pour nos clients, en articulation avec les autres financements (ACI, FIR, aides régionales).",
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
                Nous récupérons les <span className="text-accent-600">subventions</span> pour vous.
              </h1>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-xl">
                Et bien plus : création, recrutement de médecins, organisation,
                gestion, dossiers ARS, communication, achats. On s’occupe de
                tout ce qui ralentit votre centre.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#contact" className="btn-primary">Contactez-nous</Link>
                <Link href="#services" className="btn-secondary">Voir nos services</Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-white ring-1 ring-line shadow-sm p-7">
                <h2 className="text-lg font-semibold text-ink">Ce qu’on fait pour votre centre</h2>
                <ul className="mt-4 space-y-3 text-[15px]">
                  {[
                    "On récupère vos subventions",
                    "On recrute vos médecins",
                    "On crée ou développe votre centre",
                    "On monte vos dossiers ARS",
                    "On optimise votre activité",
                    "On structure votre gestion",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-ink-soft">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-600 shrink-0"></span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="mt-6 btn-primary w-full text-center">Contactez-nous</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMESSE BANDEAU */}
      <section className="bg-accent-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-2xl md:text-3xl font-bold tracking-tight">
              Nous récupérons les subventions pour vous.
            </p>
            <p className="mt-2 text-white/85 text-[15px]">
              ACI, FIR, subvention Teulade, aides à l’installation, fonds des
              collectivités — on identifie, on monte, on suit.
            </p>
          </div>
          <div className="md:text-right">
            <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-ink hover:bg-accent-50 font-semibold px-5 py-3 transition shadow-sm">
              Démarrer maintenant →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Nos services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              On s’occupe de tout, vous gardez les soins.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Une équipe spécialisée pour faire tourner votre centre de santé
              sans accroc. {services.length} domaines, un seul réflexe : on fait.
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

      {/* PUNCH MARKETING */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                t: "Vos subventions, récupérées.",
                d: "Subvention Teulade, ACI, FIR, aides régionales — on les active toutes.",
              },
              {
                t: "Vos médecins, recrutés.",
                d: "Approche directe, ingénierie contractuelle, intégration fluide.",
              },
              {
                t: "Votre centre, optimisé.",
                d: "Activité, cotation, gestion, organisation — chiffres à la clé.",
              },
            ].map((b) => (
              <div key={b.t} className="rounded-xl bg-soft p-7 ring-1 ring-line">
                <h3 className="text-2xl font-bold text-ink leading-tight">{b.t}</h3>
                <p className="mt-3 text-ink-soft">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="#contact" className="btn-primary">Parlons-en aujourd’hui</Link>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre expertise</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
                On ne fait que des centres de santé.
              </h2>
              <p className="mt-5 text-ink-soft leading-relaxed">
                Cadre conventionnel, dispositifs CPAM et ARS, accords
                interprofessionnels, recrutement médical, obligations sociales,
                organisation des soins : on connaît tout.
              </p>
              <ul className="mt-6 space-y-3 text-[15px]">
                {[
                  "Spécialisation exclusive sur le secteur",
                  "Approche pragmatique et opérationnelle",
                  "Confidentialité totale, NDA systématique",
                  "Honoraires transparents, forfait ou résultat",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-ink-soft">
                    <span className="text-accent-600 font-bold">✓</span> {t}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="mt-8 btn-primary">Contactez-nous</Link>
            </div>

            <div className="rounded-2xl bg-white p-8 ring-1 ring-line">
              <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">À qui on parle</p>
              <p className="mt-3 text-lg text-ink leading-relaxed">
                Centres <strong>médicaux</strong>, <strong>dentaires</strong>,{" "}
                <strong>infirmiers</strong>, <strong>polyvalents</strong>,{" "}
                <strong>pluriprofessionnels</strong>, qu’ils soient portés par
                une <strong>association</strong>, une <strong>mutuelle</strong>,
                une <strong>collectivité</strong> ou une <strong>SCIC</strong>.
              </p>
              <p className="mt-4 text-ink-soft text-[15px]">
                Directeurs, gestionnaires, médecins coordinateurs, DGS de
                collectivités, responsables financiers de mutuelles — tous nos
                interlocuteurs partagent la même contrainte : faire tourner un
                centre dans un cadre dense.
              </p>
              <Link href="#contact" className="mt-6 btn-secondary">Discutons de votre cas</Link>
            </div>
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
                Récupérons vos subventions ensemble.
              </h2>
              <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-lg">
                Quelques lignes sur votre centre suffisent. On revient vers
                vous rapidement, on identifie ce qui peut être activé, on chiffre.
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
              <h3 className="text-lg font-semibold text-white">Ce qu’on vous garantit</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-white/85">
                {[
                  "Une réponse personnalisée rapide",
                  "Un cadrage net et chiffré",
                  "Une proposition transparente, contractualisée",
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
