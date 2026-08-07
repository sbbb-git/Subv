import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { faqItems } from "@/content/faq";
import { makePageMeta } from "@/lib/seo";

export const metadata: Metadata = makePageMeta({
  title: "FAQ : subventions des centres de santé",
  description:
    "Questions fréquentes sur les subventions, le financement et l’accompagnement des centres de santé : Teulade, financements CDS, création.",
  path: "/faq",
});


export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "FAQ" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Questions fréquentes</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">
            FAQ : subventions et accompagnement.
          </h1>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Faq items={faqItems} />
        </div>
      </section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
