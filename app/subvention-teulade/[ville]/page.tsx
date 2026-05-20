import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { cities, getCity } from "@/content/cities";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

type Params = { ville: string };

export function generateStaticParams() {
  return cities.map((c) => ({ ville: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const city = getCity(params.ville);
  if (!city) return {};
  return {
    title: `Subvention Teulade à ${city.name} (${city.deptNum}) — accompagnement des centres de santé`,
    description: `Centres de santé à ${city.name} et dans le département ${city.dept} (${city.deptNum}) : accompagnement sur la subvention Teulade et l’ensemble des financements CDS, en lien avec la ${city.cpam}.`,
    alternates: { canonical: `/subvention-teulade/${city.slug}` },
    openGraph: {
      title: `Subvention Teulade ${city.name} (${city.deptNum})`,
      description: `Cabinet de conseil dédié aux centres de santé de ${city.name}.`,
      url: `${SITE_URL}/subvention-teulade/${city.slug}`,
    },
  };
}

export default function Page({ params }: { params: Params }) {
  const city = getCity(params.ville);
  if (!city) notFound();

  const others = cities.filter((c) => c.slug !== city.slug).slice(0, 8);

  const faqs = [
    {
      q: `Mon centre de santé à ${city.name} peut-il être concerné par la subvention Teulade ?`,
      a: `Les centres de santé conventionnés du département ${city.dept} (${city.deptNum}) peuvent être concernés, sous conditions. Nous vérifions votre éligibilité dans le cadre d’un audit gratuit.`,
    },
    {
      q: `Quel est le rôle de la CPAM à ${city.name} ?`,
      a: `La ${city.cpam} est l’interlocuteur de référence des centres de santé du ${city.deptNum} pour l’ensemble des dispositifs relevant de l’Assurance Maladie, dont la subvention Teulade.`,
    },
    {
      q: `Intervenez-vous physiquement à ${city.name} ?`,
      a: `Notre cabinet intervient sur l’ensemble du territoire français. À ${city.name} et dans le ${city.deptNum}, nous travaillons indifféremment à distance et sur site, selon les besoins de la mission.`,
    },
  ];

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME} — Centres de santé ${city.name}`,
    url: `${SITE_URL}/subvention-teulade/${city.slug}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${city.dept} (${city.deptNum})`,
    },
    serviceType: "Accompagnement et conseil financier pour centres de santé",
  };

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Subvention Teulade", href: "/subvention-teulade" },
              { name: city.name },
            ]}
          />
          <span className="mt-5 inline-block text-xs font-bold tracking-widest uppercase text-brand-600">
            Département {city.deptNum} · {city.region}
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Centres de santé à {city.name} ({city.deptNum})
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            Cabinet de conseil dédié aux centres de santé, intervenant sur{" "}
            <strong>{city.name}</strong> et le département{" "}
            <strong>{city.dept}</strong>. Nous accompagnons les CDS du secteur sur
            l’ensemble de leurs financements, en lien notamment avec la{" "}
            <strong>{city.cpam}</strong>.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3">
              Diagnostic gratuit
            </Link>
            <Link href="/accompagnement" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Notre accompagnement
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Les centres de santé à {city.name}</h2>
        <p>{city.intro} On y compte aujourd’hui <strong>{city.nbCds}</strong> centres de santé conventionnés.</p>

        <h2>Notre intervention dans le {city.deptNum}</h2>
        <p>
          Nous accompagnons les centres de santé de {city.name} et du département{" "}
          {city.dept} sur l’ensemble du spectre : audit financier, mobilisation des
          dispositifs <Link href="/financements">CPAM, ARS, ACI et FIR</Link>,
          subvention Teulade, accompagnement à la création et à la mise en
          conformité.
        </p>

        <h2>Pourquoi être accompagné localement ?</h2>
        <p>
          Chaque CPAM applique sa propre procédure et son propre calendrier
          d’instruction. La connaissance des pratiques de la <strong>{city.cpam}</strong>{" "}
          est un atout pour structurer efficacement les dossiers.
        </p>

        <h2>Questions fréquentes — {city.name}</h2>
      </article>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Faq items={faqs} />
      </section>

      <section className="py-14 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">Autres villes</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/subvention-teulade/${c.slug}`}
                className="rounded-lg bg-white ring-1 ring-brand-100 hover:ring-brand-300 px-4 py-3 text-sm font-medium text-ink hover:text-brand-700"
              >
                {c.name} ({c.deptNum})
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/subvention-teulade/villes" className="text-brand-700 hover:text-brand-900 font-semibold text-sm">
              Voir toutes les villes →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Accompagnement des CDS à ${city.name}`}
        subtitle="Diagnostic gratuit sous 48h, sur place ou à distance."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
    </>
  );
}
