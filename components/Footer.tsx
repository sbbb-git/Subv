import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/seo";
import { services } from "@/content/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/85 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-lg bg-accent-600 grid place-items-center text-white" aria-hidden>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z"/></svg>
            </span>
            <span className="font-semibold text-white tracking-tight text-[17px]">
              Subventions<span className="text-accent-300">CDS</span>
            </span>
          </div>
          <p className="mt-4 text-white/65 text-sm leading-relaxed max-w-sm">
            Accompagnement des centres de santé : création, recrutement, organisation, gestion, financements.
          </p>
          <p className="mt-5 text-white/65 text-sm space-y-1">
            <span className="block"><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a></span>
            <span className="block"><a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:text-white">{CONTACT_PHONE}</a></span>
          </p>
        </div>
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase tracking-widest text-white/45 mb-4">Nos services</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.name}</Link></li>
            ))}
            <li><Link href="/services" className="text-accent-300 hover:text-white">Voir tous les services →</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xs uppercase tracking-widest text-white/45 mb-4">Site</h3>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link href="/#expertise" className="hover:text-white">Expertise</Link></li>
            <li><Link href="/#approche" className="hover:text-white">Approche</Link></li>
            <li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xs uppercase tracking-widest text-white/45 mb-4">Contact</h3>
          <Link href="/#contact" className="btn-primary text-sm">
            Contactez-nous
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-white/45">
          © {year} SubventionsCDS
        </div>
      </div>
    </footer>
  );
}
