import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Diagnostic gratuit subvention Teulade",
  description:
    "Contactez le cabinet spécialisé subvention Teulade et financement des centres de santé. Diagnostic gratuit en 48h, sans engagement.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Parlons de votre centre de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-2xl">
            Remplissez ce formulaire et obtenez sous 48h ouvrées un premier
            retour sur votre situation et nos pistes d’accompagnement.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
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
            <div className="rounded-2xl bg-brand-600 text-white p-6">
              <h2 className="text-lg font-bold">Diagnostic 100 % gratuit</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li>✓ Premier retour sous 48h ouvrées</li>
                <li>✓ Cartographie de vos financements</li>
                <li>✓ Sans engagement</li>
                <li>✓ Honoraires transparents</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-brand-100 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-ink">Confidentialité</h2>
              <p className="mt-2 text-ink-soft text-sm">
                Vos données sont traitées dans le respect du RGPD et utilisées
                uniquement pour répondre à votre demande. Aucune transmission à des
                tiers.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
