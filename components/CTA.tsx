import Link from "next/link";

export function CTASection({
  title = "Combien votre centre de santé peut récupérer ?",
  subtitle = "Diagnostic gratuit en 48h. Sans engagement.",
  primary = { href: "/contact", label: "Demander mon diagnostic" },
  secondary = { href: "/subvention-teulade", label: "Comprendre la subvention" },
}: {
  title?: string;
  subtitle?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <p className="mt-4 text-brand-50/90 text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={primary.href}
            className="rounded-lg bg-white text-brand-700 hover:bg-brand-50 px-6 py-3 font-semibold shadow"
          >
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            className="rounded-lg ring-1 ring-white/40 hover:bg-white/10 px-6 py-3 font-semibold"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
