import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { cdsTypes, getCdsType } from "@/content/cds-types";
import { SITE_URL } from "@/lib/seo";

type Params = { type: string };

export function generateStaticParams() {
  return cdsTypes.map((t) => ({ type: t.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const t = getCdsType(params.type);
  if (!t) return {};
  return {
    title: `Subvention Teulade pour ${t.longName.toLowerCase()} — calcul, démarches, accompagnement`,
    description: `Subvention Teulade pour les ${t.longName.toLowerCase()}s : calcul de l’assiette URSSAF spécifique, montants attendus, démarches CPAM, accompagnement par un cabinet spécialisé.`,
    alternates: { canonical: `/centre-de-sante/${t.slug}` },
    openGraph: {
      title: `Subvention Teulade ${t.name}`,
      description: t.shortDesc,
      url: `${SITE_URL}/centre-de-sante/${t.slug}`,
    },
  };
}

export default function Page({ params }: { params: Params }) {
  const t = getCdsType(params.type);
  if (!t) notFound();
  const others = cdsTypes.filter((o) => o.slug !== t.slug);

  const faqs = [
    {
      q: `Un ${t.longName.toLowerCase()} est-il éligible à la subvention Teulade ?`,
      a: `Oui. Tous les centres de santé conventionnés au sens de l’article L6323-1 du code de la santé publique sont éligibles à la subvention Teulade, qu’ils soient ${cdsTypes.map((c) => c.name.replace("CDS ", "").replace("Centre municipal de santé", "municipaux").toLowerCase()).slice(0, 4).join(", ")} ou pluriprofessionnels.`,
    },
    {
      q: `Quels personnels d’un ${t.longName.toLowerCase()} sont éligibles ?`,
      a: `Les praticiens et auxiliaires médicaux salariés réalisant des actes remboursables par l’Assurance Maladie. Le personnel administratif pur est exclu de l’assiette.`,
    },
    {
      q: `Quelle est l’assiette URSSAF à retenir pour un ${t.longName.toLowerCase()} ?`,
      a: `L’assiette des cotisations patronales d’assurance maladie, maternité, invalidité et décès — généralement le salaire brut, retracé sur la DSN et l’attestation URSSAF de paiement des cotisations.`,
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Centres de santé" },
              { name: t.name },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Subvention Teulade pour {t.longName.toLowerCase()}
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">{t.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3">
              Diagnostic gratuit pour mon {t.name}
            </Link>
            <Link href="/simulateur" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Simulateur Teulade
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Pourquoi la subvention Teulade est essentielle pour un {t.longName.toLowerCase()}</h2>
        <ul>
          {t.pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <h2>Calcul de l’assiette pour un {t.longName.toLowerCase()}</h2>
        <p>{t.cotisationsNote}</p>
        <blockquote>
          <strong>Exemple {t.name}</strong> — {t.exemple.effectif} ·
          Assiette éligible : {t.exemple.assiette.toLocaleString("fr-FR")} € ·
          Subvention annuelle : <strong>{t.exemple.annuel.toLocaleString("fr-FR")} €</strong> ·
          Rattrapage 3 ans : <strong>{t.exemple.rattrapage.toLocaleString("fr-FR")} €</strong>
        </blockquote>

        <h2>Points de vigilance spécifiques</h2>
        <ul>
          {t.specifics.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2>Notre accompagnement pour les {t.longName.toLowerCase()}s</h2>
        <p>
          Nous intervenons sur l’ensemble des typologies de centres de santé. Notre
          mission Teulade pour {t.longName.toLowerCase()} comprend l’audit gratuit
          initial, le calcul fin de l’assiette, le montage du dossier CPAM et les
          relances jusqu’au versement. Honoraires uniquement au succès.
        </p>

        <h2>Questions fréquentes — {t.name}</h2>
      </article>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Faq items={faqs} />
      </section>

      <section className="py-14 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">Autres typologies de centres de santé</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/centre-de-sante/${o.slug}`}
                className="rounded-lg bg-white ring-1 ring-brand-100 hover:ring-brand-300 px-4 py-3 text-sm font-medium text-ink hover:text-brand-700"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
