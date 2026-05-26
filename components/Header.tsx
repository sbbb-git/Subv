import Link from "next/link";
import { SITE_NAME } from "@/lib/seo";

const navItems = [
  { href: "/services", label: "Nos services" },
  { href: "/centres-de-sante", label: "Centres de santé" },
  { href: "/financements", label: "Financements" },
  { href: "/blog", label: "Ressources" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label={`${SITE_NAME} — accueil`}>
          <span className="w-9 h-9 rounded-lg bg-brand-600 text-white grid place-items-center font-bold shadow-sm group-hover:bg-brand-700 transition">
            S
          </span>
          <span className="font-bold text-ink tracking-tight">
            Subventions<span className="text-brand-600">CDS</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-brand-700 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 shadow-sm transition"
        >
          Diagnostic gratuit
        </Link>
      </div>
      <nav className="lg:hidden border-t border-brand-100 overflow-x-auto" aria-label="Navigation mobile">
        <ul className="flex gap-4 px-4 py-2 text-sm whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-ink-soft hover:text-brand-700 font-medium">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
