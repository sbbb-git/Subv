import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez SubventionsCDS, cabinet d’accompagnement dédié aux centres de santé.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Parlons de votre centre de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft">
            Écrivez-nous quelques lignes sur votre situation. Nous revenons
            vers vous rapidement.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white ring-1 ring-brand-100 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-ink">Nous joindre directement</h2>
              <p className="mt-3 text-ink-soft text-sm">
                ✉ <a className="text-brand-700 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
              <p className="mt-1 text-ink-soft text-sm">
                ☎ <a className="text-brand-700 underline" href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
              </p>
              <p className="mt-1 text-ink-soft text-sm">⏰ Lun.–Ven. 9h–18h</p>
            </div>
            <div className="rounded-2xl bg-brand-50 ring-1 ring-brand-100 p-6">
              <h2 className="text-lg font-bold text-ink">Confidentialité</h2>
              <p className="mt-3 text-ink-soft text-sm">
                Vos données sont traitées dans le respect du RGPD et utilisées
                uniquement pour répondre à votre message.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
