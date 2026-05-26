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
    title: `${t.longName} — accompagnement`,
    description: `${t.longName} : accompagnement par un cabinet spécialisé. Création, développement, conventionnement, financements et subventions.`,
    alternates: { canonical: `/centres-de-sante/${t.slug}` },
    openGraph: { title: t.longName, description: t.short, url: `${SITE_URL}/centres-de-sante/${t.slug}` },
  };
}

export default function Page({ params }: { params: Params }) {
  const t = cdsTypes.find((x) => x.slug === params.type);
  if (!t) notFound();
  const others = cdsTypes.filter((x) => x.slug !== t.slug);

  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pb-28">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Centres de santé", href: "/centres-de-sante" },
              { name: t.name },
            ]}
          />
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <p className="eyebrow">Typologie</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                {t.longName}.
              </h1>
              <p className="mt-10 text-ink-soft text-lg md:text-xl max-w-2xl leading-[1.65]">{t.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-paper border-b border-line">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 md:py-28 prose-content">
          <h2>Enjeux spécifiques</h2>
          <ul>
            {t.enjeux.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>

          <h2>Notre accompagnement</h2>
          <p>
            Nous accompagnons les {t.longName.toLowerCase()}s sur l’ensemble
            de leur cycle de vie :{" "}
            <Link href="/services/creation-centre-de-sante">création</Link>,{" "}
            <Link href="/services/developpement-cds">développement</Link>,{" "}
            <Link href="/services/comptabilite-cds">comptabilité et gestion</Link>,{" "}
            <Link href="/services/dossier-ars">dossiers ARS</Link>,{" "}
            <Link href="/services/conventionnement-cpam">conventionnement CPAM</Link>,
            mobilisation des{" "}
            <Link href="/services/subventions-et-financements">subventions et financements</Link>,
            et notamment la <Link href="/subvention-teulade">subvention Teulade</Link>.
          </p>
        </div>
      </article>

      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <p className="eyebrow mb-6">Autres typologies</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {others.map((o) => (
              <Link key={o.slug} href={`/centres-de-sante/${o.slug}`} className="group block border-t border-line pt-5">
                <h3 className="serif text-lg text-ink font-medium tracking-tight group-hover:text-accent-700">{o.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="serif text-4xl md:text-5xl text-bg font-light tracking-tight leading-[1.1]">
              Parlons de votre centre.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <Link href="/contact" className="inline-block text-[14px] tracking-wide uppercase font-medium border border-bg hover:bg-bg hover:text-ink text-bg transition px-6 py-3.5">
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
