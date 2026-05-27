export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-ink-soft leading-relaxed">{subtitle}</p>}
    </div>
  );
}
