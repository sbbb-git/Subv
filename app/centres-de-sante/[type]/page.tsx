import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { cdsTypes, getType } from "@/content/types";
import { makePageMeta } from "@/lib/seo";

type Params = { type: string };

export function generateStaticParams() {
  return cdsTypes.map((t) => ({ type: t.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const t = getType(params.type);
  if (!t) return {};
  // Cible Ahrefs : title ≤ 60 chars, description 70-160. Le suffixe
  // "· Opti-CDS" (11 chars) est ajouté via le template du root layout, donc
  // on garde un title de base court.
  const lname = t.name.toLowerCase();
  const description = `${t.short} Subventions, financements et accompagnement du ${lname} par une équipe spécialisée.`;
  return {
    ...makePageMeta({
      title: t.name,
      description: description.slice(0, 158),
      path: `/centres-de-sante/${t.slug}`,
    }),
    keywords: [lname, `subventions ${lname}`, `financement ${lname}`],
  };
}

export default function Page({ params }: { params: Params }) {
  const t = getType(params.type);
  if (!t) notFound();
  const others = cdsTypes.filter((x) => x.slug !== t.slug);

  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Centres de santé", href: "/centres-de-sante" },
              { name: t.name },
            ]}
          />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Typologie</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">{t.longName}.</h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">{t.intro}</p>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      <article className="bg-white border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
          <h2>Notre accompagnement</h2>
          <p>
            Opti-CDS accompagne les {t.longName.toLowerCase()}s sur l’ensemble
            de leur cycle de vie : <a href="/services/creation-centre-de-sante">création</a>,{" "}
            <a href="/services/recrutement-de-medecins">recrutement</a>,{" "}
            <a href="/services/conseil-en-organisation">organisation</a>,{" "}
            <a href="/services/comptabilite-gestion">gestion</a>, mobilisation des{" "}
            <a href="/financements">financements</a> et notamment de la{" "}
            <a href="/subvention-teulade">subvention Teulade</a>.
          </p>
          <p>
            Chaque situation s’apprécie individuellement. <a href="/contact">Contactez-nous</a> pour un check-up gratuit.
          </p>
        </div>
      </article>

      <section className="bg-soft border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-ink">Autres typologies de centres</h2>
          <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/centres-de-sante/${o.slug}`} className="rounded-lg bg-white ring-1 ring-line hover:ring-accent-400 px-4 py-3 text-sm font-medium text-ink hover:text-accent-700 transition">
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
