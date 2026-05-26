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
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-4 serif text-4xl md:text-5xl text-ink tracking-tight font-light">{title}</h2>
      </div>
      {subtitle && (
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-ink-soft text-[17px] leading-[1.75] max-w-xl">{subtitle}</p>
        </div>
      )}
    </div>
  );
}
