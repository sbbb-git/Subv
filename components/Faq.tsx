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
    <div className="space-y-3">
      {items.map((item, idx) => (
        <details key={idx} className="group rounded-xl bg-white ring-1 ring-line p-5 open:shadow-sm transition">
          <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
            <h3 className="font-semibold text-ink text-[16px]">{item.q}</h3>
            <span className="text-accent-600 text-xl leading-none mt-0.5 group-open:rotate-45 transition">+</span>
          </summary>
          <p className="mt-3 text-ink-soft leading-relaxed text-[15px]">{item.a}</p>
        </details>
      ))}
      {withSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </div>
  );
}
