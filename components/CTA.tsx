import Link from "next/link";

export function CTASection({
  title = "Parlons de votre centre de santé",
  subtitle,
  href = "/#contact",
  label = "Contactez-nous",
}: {
  title?: string;
  subtitle?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-white/75 text-lg">{subtitle}</p>}
        <Link
          href={href}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white text-ink hover:bg-accent-50 font-semibold px-6 py-3 transition shadow-sm"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
