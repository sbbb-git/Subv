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
        <details
          key={idx}
          className="group rounded-xl border border-brand-100 bg-white p-5 open:shadow-sm transition"
        >
          <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
            <h3 className="font-semibold text-ink text-[17px]">{item.q}</h3>
            <span className="text-brand-600 group-open:rotate-45 transition text-xl leading-none">+</span>
          </summary>
          <p className="mt-3 text-ink-soft leading-relaxed">{item.a}</p>
        </details>
      ))}
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </div>
  );
}
