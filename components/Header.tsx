import Link from "next/link";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/centres-de-sante", label: "Centres de santé" },
  { href: "/financements", label: "Financements" },
  { href: "/subvention-teulade", label: "Subvention Teulade" },
  { href: "/a-propos", label: "Cabinet" },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-2" aria-label="Accueil SubventionsCDS">
          <span className="serif text-2xl text-ink tracking-tightest leading-none">
            Subventions<span className="text-accent-600">CDS</span>
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.22em] uppercase text-ink-mute pl-2 border-l border-line ml-1">
            Cabinet de conseil
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9 text-[14px]" aria-label="Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-soft hover:text-accent-700 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="text-[13px] tracking-wide uppercase font-medium border border-ink hover:bg-ink hover:text-bg text-ink transition px-4 py-2"
        >
          Nous écrire
        </Link>
      </div>
      <nav className="lg:hidden border-t border-line overflow-x-auto" aria-label="Navigation mobile">
        <ul className="flex gap-6 px-6 py-3 text-[13px] whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-ink-soft hover:text-accent-700">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
