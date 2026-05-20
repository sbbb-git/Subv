"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: brancher à un service d'emailing (Formspree, Resend, /api route, etc.)
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <h3 className="text-2xl font-bold text-ink">Demande reçue ✅</h3>
        <p className="mt-3 text-ink-soft">
          Nous revenons vers vous sous 24 à 48h ouvrées avec un premier point sur
          votre situation et la suite des échanges.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl border border-brand-100 p-6 md:p-8 shadow-sm">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Nom du centre de santé" name="centre" placeholder="Centre de santé Saint-Exupéry" required />
        <Field label="Votre nom" name="name" placeholder="Dr Dupont" required />
        <Field label="Email professionnel" name="email" type="email" placeholder="contact@cds-exemple.fr" required />
        <Field label="Téléphone" name="phone" placeholder="06 12 34 56 78" />
        <Field label="Département" name="dept" placeholder="75, 93, 69…" />
        <Field label="Nombre de professionnels salariés" name="effectif" placeholder="Ex. 8" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-ink mb-1">Votre situation</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Décrivez brièvement votre centre, vos enjeux du moment et ce que vous attendez de notre échange."
          className="w-full rounded-lg border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 px-4 py-3 text-ink placeholder:text-ink-mute/70"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input type="checkbox" required className="mt-1" />
        <span>
          J’accepte d’être recontacté(e) au sujet de ma demande. Mes données sont utilisées
          uniquement pour répondre à cette demande et ne sont jamais cédées à des tiers.
        </span>
      </label>
      <button
        type="submit"
        className="w-full md:w-auto inline-flex justify-center items-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 shadow"
      >
        Obtenir mon diagnostic gratuit
      </button>
      <p className="text-xs text-ink-mute">
        Diagnostic 100 % gratuit, sans engagement. Réponse sous 48h ouvrées.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink mb-1">
        {label}{required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 px-4 py-2.5 text-ink placeholder:text-ink-mute/70"
      />
    </div>
  );
}
