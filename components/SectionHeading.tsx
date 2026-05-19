export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-ink-soft text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
