import Link from "next/link";
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/seo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/90 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-bold text-lg">
            Subventions<span className="text-brand-300">CDS</span>
          </div>
          <p className="mt-3 text-white/70 max-w-md text-sm leading-relaxed">
            Cabinet de conseil dédié aux centres de santé. Nous accompagnons les CDS dans la
            mobilisation de l’ensemble de leurs financements publics et conventionnels.
          </p>
          <p className="mt-4 text-white/60 text-sm">
            ✉ <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
            <br />☎ <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:text-white">{CONTACT_PHONE}</a>
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Notre offre</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/accompagnement" className="hover:text-white">Accompagnement</Link></li>
            <li><Link href="/financements" className="hover:text-white">Financements CDS</Link></li>
            <li><Link href="/centre-de-sante" className="hover:text-white">Typologies de centres</Link></li>
            <li><Link href="/subvention-teulade" className="hover:text-white">Subvention Teulade</Link></li>
            <li><Link href="/comparatif-cds-msp" className="hover:text-white">CDS vs MSP</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Ressources</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/lexique" className="hover:text-white">Lexique</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/a-propos" className="hover:text-white">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-white/50 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {year} {SITE_NAME}. Tous droits réservés.</span>
          <span>
            Site indépendant — sans lien officiel avec la CPAM, l’URSSAF, l’Assurance Maladie ou
            la FNCS.
          </span>
        </div>
      </div>
    </footer>
  );
}
