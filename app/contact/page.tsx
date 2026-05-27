import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez SubventionsCDS pour discuter de votre centre de santé.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <section className="bg-soft border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-ink">
            Parlons de votre centre de santé.
          </h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            Écrivez-nous quelques lignes. Nous revenons vers vous rapidement.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-xl bg-white ring-1 ring-line p-6">
              <h2 className="font-semibold text-ink">Nous joindre</h2>
              <p className="mt-3 text-sm text-ink-soft">
                <a className="text-accent-700 hover:text-accent-900" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                <a className="text-accent-700 hover:text-accent-900" href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
              </p>
              <p className="mt-2 text-sm text-ink-mute">Lundi – Vendredi · 9h – 18h</p>
            </div>
            <div className="rounded-xl bg-accent-600 text-white p-6">
              <h2 className="font-semibold">Confidentialité</h2>
              <p className="mt-3 text-sm text-white/90 leading-relaxed">
                Vos données sont utilisées uniquement pour répondre à votre
                demande. NDA disponible sur simple demande.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
