import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/seo";
import { services } from "@/content/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-bg/85 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="serif text-2xl text-bg leading-none">
            Subventions<span className="text-accent-300">CDS</span>
          </div>
          <p className="mt-5 text-bg/65 leading-relaxed text-[15px] max-w-sm">
            Cabinet de conseil dédié aux centres de santé. Accompagnement
            administratif et financier, spécialiste de la subvention Teulade.
          </p>
          <div className="mt-8 space-y-1 text-bg/65 text-[14px]">
            <p><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-bg">{CONTACT_EMAIL}</a></p>
            <p><a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:text-bg">{CONTACT_PHONE}</a></p>
          </div>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-[11px] tracking-[0.22em] uppercase text-bg/50 mb-4">Services</h3>
          <ul className="space-y-2.5 text-[14px] text-bg/75">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-bg">{s.name}</Link>
              </li>
            ))}
            <li><Link href="/services" className="text-accent-300 hover:text-bg">Tous les services →</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-[11px] tracking-[0.22em] uppercase text-bg/50 mb-4">Explorer</h3>
          <ul className="space-y-2.5 text-[14px] text-bg/75">
            <li><Link href="/centres-de-sante" className="hover:text-bg">Centres de santé</Link></li>
            <li><Link href="/financements" className="hover:text-bg">Financements</Link></li>
            <li><Link href="/subvention-teulade" className="hover:text-bg">Subvention Teulade</Link></li>
            <li><Link href="/blog" className="hover:text-bg">Blog</Link></li>
            <li><Link href="/lexique" className="hover:text-bg">Lexique</Link></li>
            <li><Link href="/faq" className="hover:text-bg">FAQ</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-[11px] tracking-[0.22em] uppercase text-bg/50 mb-4">Cabinet</h3>
          <ul className="space-y-2.5 text-[14px] text-bg/75">
            <li><Link href="/a-propos" className="hover:text-bg">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-bg">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-bg">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bg/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-[12px] text-bg/45 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {year} SubventionsCDS</span>
          <span>Cabinet indépendant — sans lien officiel avec la CPAM, l’URSSAF, l’ARS.</span>
        </div>
      </div>
    </footer>
  );
}
