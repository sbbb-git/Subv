import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="text-7xl font-extrabold text-brand-600">404</div>
      <h1 className="mt-4 text-3xl font-bold text-ink">Page introuvable</h1>
      <p className="mt-3 text-ink-soft">La page que vous cherchez n’existe pas ou a été déplacée.</p>
      <Link href="/" className="mt-8 inline-block rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3">
        Retour à l’accueil
      </Link>
    </section>
  );
}
