import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { cdsTypes } from "@/content/types";
import { SITE_URL } from "@/lib/seo";

type Params = { type: string };

export function generateStaticParams() {
  return cdsTypes.map((t) => ({ type: t.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const t = cdsTypes.find((x) => x.slug === params.type);
  if (!t) return {};
  return {
    title: `${t.longName} — accompagnement, financements, ouverture`,
    description: `${t.longName} : accompagnement par un cabinet spécialisé. Création, développement, conventionnement, financements et subventions.`,
    alternates: { canonical: `/centres-de-sante/${t.slug}` },
    openGraph: {
      title: t.longName,
      description: t.short,
      url: `${SITE_URL}/centres-de-sante/${t.slug}`,
    },
  };
}

export default function Page({ params }: { params: Params }) {
  const t = cdsTypes.find((x) => x.slug === params.type);
  if (!t) notFound();
  const others = cdsTypes.filter((x) => x.slug !== t.slug);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Centres de santé", href: "/centres-de-sante" },
              { name: t.name },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">{t.longName}</h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">{t.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3 shadow">
              Diagnostic gratuit pour mon {t.name}
            </Link>
            <Link href="/services" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Voir nos services
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Enjeux d’un {t.longName.toLowerCase()}</h2>
        <ul>
          {t.enjeux.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>

        <h2>Notre accompagnement</h2>
        <p>
          Nous accompagnons les {t.longName.toLowerCase()}s sur l’ensemble de
          leur cycle de vie :{" "}
          <Link href="/services/creation-centre-de-sante">création</Link>,{" "}
          <Link href="/services/developpement-cds">développement</Link>,{" "}
          <Link href="/services/comptabilite-cds">comptabilité et gestion</Link>,{" "}
          <Link href="/services/dossier-ars">dossiers ARS</Link>,{" "}
          <Link href="/services/conventionnement-cpam">conventionnement CPAM</Link>,
          mobilisation des{" "}
          <Link href="/services/subventions-et-financements">subventions et financements</Link>,
          et notamment la <Link href="/subvention-teulade">subvention Teulade</Link>.
        </p>
      </article>

      <section className="py-14 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">Autres typologies</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/centres-de-sante/${o.slug}`} className="rounded-lg bg-white ring-1 ring-brand-100 hover:ring-brand-300 px-4 py-3 text-sm font-medium text-ink hover:text-brand-700">
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Parlons de votre centre</h2>
          <p className="mt-4 text-brand-50/90 text-lg">Diagnostic gratuit en 48h, sans engagement.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white text-brand-700 hover:bg-brand-50 px-6 py-3 font-semibold shadow">
            Demander mon diagnostic
          </Link>
        </div>
      </section>
    </>
  );
}
