import Link from "next/link";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#expertise", label: "Notre expertise" },
  { href: "/#approche", label: "Approche" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Accueil SubventionsCDS">
          <span className="w-9 h-9 rounded-lg bg-accent-600 grid place-items-center text-white" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z"/></svg>
          </span>
          <span className="font-semibold text-ink tracking-tight text-[17px]">
            Subventions<span className="text-accent-600">CDS</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium" aria-label="Navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink-soft hover:text-accent-700 transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#contact" className="btn-primary py-2 px-4 text-sm">
          Contactez-nous
        </Link>
      </div>
    </header>
  );
}
