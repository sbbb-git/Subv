import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts } from "@/content/posts";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default function Page({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title },
            ]}
          />
          <span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-brand-600">{post.category}</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">{post.title}</h1>
          <p className="mt-4 text-lg text-ink-soft">{post.description}</p>
          <div className="mt-4 text-xs text-ink-mute flex gap-3">
            <span>{new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>· {post.readingTime}</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <section className="py-14 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">À lire aussi</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 p-5 transition">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{p.category}</span>
                <h3 className="mt-2 font-bold text-ink">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Parlons de votre centre de santé</h2>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white text-brand-700 hover:bg-brand-50 px-6 py-3 font-semibold shadow">
            Nous contacter
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </>
  );
}
