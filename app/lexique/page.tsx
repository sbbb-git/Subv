import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { makePageMeta, SITE_URL } from "@/lib/seo";
import { termes } from "@/content/lexique";

export const metadata: Metadata = makePageMeta({
  title: "Lexique des centres de santé",
  description:
    "Glossaire des termes clés des centres de santé : CDS, CMS, CSI, MSP, ARS, CPAM, subvention Teulade, ACI, FIR, conventionnement.",
  path: "/lexique",
});


export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Lexique" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Glossaire</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">Lexique des centres de santé.</h1>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <dl className="divide-y divide-line border-y border-line">
            {termes.map((t) => (
              <div key={t.term} className="grid md:grid-cols-12 gap-4 py-6">
                <dt className="md:col-span-3 font-bold text-ink">{t.term}</dt>
                <dd className="md:col-span-9 text-ink-soft leading-relaxed text-[16px]">
                  {t.def}
                  {t.link && (
                    <>
                      {" "}
                      <Link href={t.link} className="font-semibold text-accent-700 hover:text-accent-900 whitespace-nowrap">
                        En savoir plus
                      </Link>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Lexique des centres de santé",
            url: `${SITE_URL}/lexique`,
            hasDefinedTerm: termes.map((t) => ({
              "@type": "DefinedTerm",
              name: t.term,
              description: t.def,
            })),
          }),
        }}
      />
    </>
  );
}
