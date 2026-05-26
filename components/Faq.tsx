export type FaqItem = { q: string; a: string };

export function Faq({ items, withSchema = true }: { items: FaqItem[]; withSchema?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, idx) => (
        <details key={idx} className="group py-6">
          <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
            <h3 className="serif text-xl md:text-2xl text-ink font-medium tracking-tight leading-snug">{item.q}</h3>
            <span className="text-accent-600 text-2xl leading-none mt-1 group-open:rotate-45 transition shrink-0">+</span>
          </summary>
          <p className="mt-4 text-ink-soft leading-[1.75] text-[16px] max-w-3xl">{item.a}</p>
        </details>
      ))}
      {withSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </div>
  );
}
