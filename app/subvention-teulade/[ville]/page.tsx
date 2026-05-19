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
    title: `Subvention Teulade à ${city.name} (${city.deptNum}) — accompagnement CDS`,
    description: `Subvention Teulade pour les centres de santé de ${city.name} et du département ${city.dept} (${city.deptNum}). Récupération de 11,5 % des charges patronales via la ${city.cpam}. Diagnostic gratuit en 48h.`,
    alternates: { canonical: `/subvention-teulade/${city.slug}` },
    openGraph: {
      title: `Subvention Teulade ${city.name} (${city.deptNum})`,
      description: `Cabinet de conseil dédié aux centres de santé de ${city.name} pour récupérer la subvention Teulade.`,
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
      q: `Mon centre de santé à ${city.name} est-il éligible à la subvention Teulade ?`,
      a: `Oui, dès lors que votre centre est conventionné avec l’Assurance Maladie et qu’il salarie des professionnels de santé réalisant des actes remboursables. Cela vaut pour tous les CDS du département ${city.dept} (${city.deptNum}).`,
    },
    {
      q: `Quelle CPAM traite ma demande Teulade à ${city.name} ?`,
      a: `Les dossiers Teulade des centres de santé de ${city.name} et du ${city.deptNum} sont instruits par la ${city.cpam}. Chaque caisse dispose de son propre formulaire et de ses propres délais d’instruction.`,
    },
    {
      q: `Combien de temps prend l’obtention de la subvention Teulade à ${city.name} ?`,
      a: `Pour la ${city.cpam}, comptez en moyenne 3 à 6 mois pour un dossier en cours, et 6 à 12 mois pour un rattrapage pluriannuel. Le respect des justificatifs URSSAF accélère significativement le délai.`,
    },
    {
      q: `Peut-on récupérer la subvention sur les exercices passés à ${city.name} ?`,
      a: `Oui. Les centres de santé du ${city.deptNum} peuvent en principe réclamer les exercices N-1, N-2 et N-3 non versés, sous réserve de produire les attestations URSSAF correspondantes.`,
    },
    {
      q: `Comment intervenez-vous concrètement pour un CDS à ${city.name} ?`,
      a: `À distance et sur place si nécessaire. Nous récupérons vos DSN et attestations URSSAF, calculons l’assiette éligible, montons le dossier complet pour la ${city.cpam} et assurons les relances jusqu’au versement.`,
    },
  ];

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME} — Subvention Teulade ${city.name}`,
    url: `${SITE_URL}/subvention-teulade/${city.slug}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${city.dept} (${city.deptNum})`,
    },
    serviceType: "Accompagnement à la récupération de la subvention Teulade pour centres de santé",
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
            Subvention Teulade à {city.name} ({city.deptNum})
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            Cabinet de conseil spécialisé centres de santé, intervenant sur{" "}
            <strong>{city.name}</strong> et l’ensemble du département{" "}
            <strong>{city.dept}</strong>. Nous récupérons pour votre CDS{" "}
            <strong>11,5 % des cotisations patronales URSSAF</strong> via la{" "}
            <strong>{city.cpam}</strong>, en cours et sur les exercices non prescrits.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3">
              Diagnostic gratuit pour mon CDS à {city.name}
            </Link>
            <Link href="/simulateur" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Simulateur Teulade
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Les centres de santé à {city.name}</h2>
        <p>{city.intro} On y compte aujourd’hui <strong>{city.nbCds}</strong> centres de santé conventionnés.</p>

        <h2>Comment fonctionne la subvention Teulade pour un CDS de {city.name} ?</h2>
        <p>
          La subvention Teulade, prévue à l’article L162-32 du code de la sécurité
          sociale, oblige la <strong>{city.cpam}</strong> à rembourser à votre centre
          de santé <strong>11,5 % de l’assiette des cotisations patronales</strong>{" "}
          versées à l’URSSAF pour vos soignants salariés. Le mécanisme est strictement
          identique partout en France, mais chaque CPAM applique sa propre procédure et
          son propre formulaire — c’est précisément ce point qui retarde ou bloque tant
          de dossiers dans le département {city.deptNum}.
        </p>

        <h2>Spécificités locales et bonnes pratiques</h2>
        <ul>
          <li>Interlocuteur : <strong>{city.cpam}</strong> — service du conventionnement / centres de santé.</li>
          <li>Justificatifs URSSAF à demander à l’URSSAF compétente du {city.deptNum}.</li>
          <li>Délais constatés : 3 à 9 mois selon la complexité du dossier.</li>
          <li>Recours gracieux possible auprès du directeur de la {city.cpam} en cas de retard prolongé.</li>
        </ul>

        <h2>Nos missions à {city.name}</h2>
        <ul>
          <li><strong>Audit gratuit</strong> de votre situation Teulade (en cours + rattrapage N-3)</li>
          <li><strong>Reconstitution</strong> des assiettes URSSAF par salarié</li>
          <li><strong>Montage du dossier</strong> au format attendu par la {city.cpam}</li>
          <li><strong>Relances</strong> jusqu’au versement effectif</li>
          <li><strong>Optimisation</strong> des autres financements (ACI, FIR, ARS, Forfait Structure)</li>
        </ul>

        <h2>Combien votre CDS de {city.name} peut récupérer ?</h2>
        <p>
          À titre d’exemple, un centre de santé du {city.deptNum} employant 8 soignants
          salariés équivalents temps plein peut espérer entre <strong>35 000 € et
          90 000 €</strong> par an au titre de la subvention Teulade. Sur trois années
          de rattrapage, le total dépasse fréquemment <strong>200 000 €</strong>. Notre{" "}
          <Link href="/simulateur">simulateur</Link> donne une estimation immédiate.
        </p>

        <h2>Questions fréquentes — Subvention Teulade {city.name}</h2>
      </article>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Faq items={faqs} />
      </section>

      <section className="py-14 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">Autres villes où nous intervenons</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/subvention-teulade/${c.slug}`}
                className="rounded-lg bg-white ring-1 ring-brand-100 hover:ring-brand-300 px-4 py-3 text-sm font-medium text-ink hover:text-brand-700"
              >
                Teulade {c.name} ({c.deptNum})
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
        title={`Activez votre subvention Teulade à ${city.name}`}
        subtitle="Diagnostic gratuit sous 48h, intervention à distance ou sur place."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
    </>
  );
}
