import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Réservez votre checkup subventions",
  description: "Réservez un rendez-vous gratuit pour faire le point sur les subventions de votre centre de santé.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Checkup gratuit" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Rendez-vous gratuit</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            Réservez votre <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">checkup&nbsp;subventions</span>.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-2xl leading-relaxed">
            Un échange dédié pour faire le point sur les subventions que votre
            centre devrait recevoir — et sur les autres sujets qui méritent
            notre attention.
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
              <h2 className="font-semibold text-ink">Nous joindre directement</h2>
              <p className="mt-3 text-sm text-ink-soft">
                <a className="text-accent-700 hover:text-accent-900" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                <a className="text-accent-700 hover:text-accent-900" href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
              </p>
              <p className="mt-2 text-sm text-ink-mute">Lundi – Vendredi · 9h – 18h</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-accent-600 to-accent-500 text-white p-6">
              <h2 className="font-semibold">Le checkup</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li className="flex gap-2"><span>✓</span> Sans engagement</li>
                <li className="flex gap-2"><span>✓</span> Confidentialité totale, NDA disponible</li>
                <li className="flex gap-2"><span>✓</span> Échange ciblé sur vos sujets</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
