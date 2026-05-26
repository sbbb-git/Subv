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
      <div className="border border-line bg-bg p-10">
        <h3 className="serif text-3xl text-ink font-light tracking-tight">Message envoyé.</h3>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Nous revenons vers vous rapidement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
        <Field label="Nom du centre" name="centre" placeholder="Centre de santé Saint-Exupéry" required />
        <Field label="Votre nom" name="name" placeholder="Dr Dupont" required />
        <Field label="Email" name="email" type="email" placeholder="contact@exemple.fr" required />
        <Field label="Téléphone" name="phone" placeholder="06 12 34 56 78" />
      </div>
      <div>
        <label className="block text-[11px] tracking-[0.18em] uppercase text-ink-mute mb-2">Votre message</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Quelques lignes sur votre centre et ce qui vous amène."
          className="w-full bg-transparent border-b border-line focus:border-accent-600 focus:outline-none py-3 text-ink placeholder:text-ink-mute/60 text-[16px] leading-[1.6] resize-none"
        />
      </div>
      <label className="flex items-start gap-3 text-[13px] text-ink-soft leading-[1.55]">
        <input type="checkbox" required className="mt-1.5 accent-accent-600" />
        <span>
          J’accepte d’être recontacté(e) au sujet de ma demande. Mes données sont utilisées uniquement à cet effet.
        </span>
      </label>
      <button
        type="submit"
        className="text-[14px] tracking-wide uppercase font-medium border border-ink hover:bg-ink hover:text-bg text-ink transition px-8 py-4"
      >
        Envoyer le message
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] tracking-[0.18em] uppercase text-ink-mute mb-2">
        {label}{required && <span className="text-accent-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-line focus:border-accent-600 focus:outline-none py-2.5 text-ink placeholder:text-ink-mute/60 text-[16px]"
      />
    </div>
  );
}
