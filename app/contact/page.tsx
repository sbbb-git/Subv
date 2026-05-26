import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez SubventionsCDS, cabinet d’accompagnement dédié aux centres de santé.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 md:pb-24">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">Échangeons</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                Parlons de votre<br /><span className="italic text-accent-600">centre de santé.</span>
              </h1>
              <p className="mt-10 text-ink-soft text-lg max-w-2xl leading-[1.65]">
                Quelques lignes sur votre situation suffisent pour amorcer
                l’échange. Nous revenons vers vous rapidement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-line space-y-12">
            <div>
              <p className="eyebrow">Directement</p>
              <p className="mt-4 serif text-2xl text-ink leading-snug">
                <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline">{CONTACT_EMAIL}</a>
              </p>
              <p className="mt-2 serif text-2xl text-ink leading-snug">
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="link-underline">{CONTACT_PHONE}</a>
              </p>
              <p className="mt-3 text-ink-mute text-sm">Lundi — Vendredi · 9h–18h</p>
            </div>
            <div>
              <p className="eyebrow">Confidentialité</p>
              <p className="mt-4 text-ink-soft text-[15px] leading-[1.7]">
                Vos données sont traitées dans le respect du RGPD et utilisées
                exclusivement pour répondre à votre demande. NDA signé à votre
                demande avant tout échange détaillé.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
