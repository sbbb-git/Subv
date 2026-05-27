"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdwyeep";
const INTERESTS = ["Subventions", "Gestion", "Accompagnement", "Autres"];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrorMsg(null);

    try {
      const formData = new FormData(form);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.errors?.[0]?.message || "Une erreur est survenue. Réessayez ou écrivez-nous directement.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Impossible d’envoyer le message. Vérifiez votre connexion ou écrivez-nous directement.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl bg-accent-50 ring-1 ring-accent-200 p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-accent-600 text-white grid place-items-center mx-auto">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-ink">Message envoyé.</h3>
        <p className="mt-3 text-ink-soft">Nous revenons vers vous très rapidement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl ring-1 ring-line p-6 md:p-8 space-y-6 shadow-sm">
      <div>
        <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Check-up gratuit</p>
        <h3 className="mt-2 text-xl md:text-2xl font-bold text-ink">Contactez-nous</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Nom du centre" name="centre" placeholder="Centre de santé Saint-Exupéry" required />
        <Field label="Votre nom" name="name" placeholder="Dr Dupont" required />
        <Field label="Email" name="email" type="email" placeholder="contact@exemple.fr" required />
        <Field label="Téléphone (facultatif)" name="phone" placeholder="06 12 34 56 78" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-ink mb-3">Sujets qui vous intéressent</label>
        <div className="grid grid-cols-2 gap-2">
          {INTERESTS.map((label) => (
            <label key={label} className="flex items-center gap-2.5 rounded-lg border border-line hover:border-accent-400 hover:bg-accent-50/50 px-3 py-2.5 cursor-pointer transition has-[:checked]:border-accent-600 has-[:checked]:bg-accent-50">
              <input type="checkbox" name="sujets" value={label} className="accent-accent-600 w-4 h-4" />
              <span className="text-sm text-ink select-none">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-ink mb-1.5">Votre message (facultatif)</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Quelques lignes pour orienter notre premier échange."
          className="w-full rounded-lg border border-line focus:border-accent-500 focus:ring-2 focus:ring-accent-200 px-4 py-3 text-ink placeholder:text-ink-mute/70 text-[15px]"
        />
      </div>

      {/* Honeypot anti-spam (caché) */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {/* Sujet par défaut côté inbox Formspree */}
      <input type="hidden" name="_subject" value="Nouvelle demande de check-up — Opti-CDS" />

      {status === "error" && errorMsg && (
        <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm px-4 py-3">
          {errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full md:w-auto text-base disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "sending" ? "Envoi en cours…" : "Envoyer"}
        {status !== "sending" && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        )}
      </button>
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
