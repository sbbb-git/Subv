"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-accent-50 ring-1 ring-accent-200 p-8 text-center">
        <h3 className="text-2xl font-bold text-ink">Message envoyé ✓</h3>
        <p className="mt-3 text-ink-soft">Nous revenons vers vous très rapidement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl ring-1 ring-line p-6 md:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Nom du centre" name="centre" placeholder="Centre de santé Saint-Exupéry" required />
        <Field label="Votre nom" name="name" placeholder="Dr Dupont" required />
        <Field label="Email" name="email" type="email" placeholder="contact@exemple.fr" required />
        <Field label="Téléphone" name="phone" placeholder="06 12 34 56 78" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-ink mb-1.5">Votre message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Quelques lignes sur votre centre et ce qui vous amène."
          className="w-full rounded-lg border border-line focus:border-accent-500 focus:ring-2 focus:ring-accent-200 px-4 py-3 text-ink placeholder:text-ink-mute/70 text-[15px]"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input type="checkbox" required className="mt-1 accent-accent-600" />
        <span>J’accepte d’être recontacté(e) au sujet de ma demande. Mes données sont utilisées uniquement à cet effet.</span>
      </label>
      <button type="submit" className="btn-primary w-full md:w-auto">Envoyer le message</button>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink mb-1.5">
        {label}{required && <span className="text-accent-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line focus:border-accent-500 focus:ring-2 focus:ring-accent-200 px-4 py-2.5 text-ink placeholder:text-ink-mute/70 text-[15px]"
      />
    </div>
  );
}
