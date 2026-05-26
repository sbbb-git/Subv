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
      <section className="border-b border-line">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-12 pb-16 md:pb-20">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Journal", href: "/blog" },
              { name: post.title },
            ]}
          />
          <p className="eyebrow mt-12">{post.category}</p>
          <h1 className="mt-6 serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-tightest font-light leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-8 text-ink-soft text-lg max-w-2xl leading-[1.6]">{post.description}</p>
          <p className="mt-6 text-[13px] text-ink-mute tracking-wide">
            {new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            <span className="mx-2 text-line">·</span>
            {post.readingTime}
          </p>
        </div>
      </section>

      <article className="bg-paper border-b border-line">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>

      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <p className="eyebrow mb-6">À lire aussi</p>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block border-t border-line pt-5">
                <p className="text-[11px] tracking-[0.18em] uppercase text-accent-600 mb-2">{p.category}</p>
                <h3 className="serif text-xl text-ink font-medium tracking-tight group-hover:text-accent-700 transition leading-[1.25]">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="serif text-4xl md:text-5xl text-bg font-light tracking-tight leading-[1.1]">
              Parlons de votre centre de santé.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <Link href="/contact" className="inline-block text-[14px] tracking-wide uppercase font-medium border border-bg hover:bg-bg hover:text-ink text-bg transition px-6 py-3.5">
              Nous écrire
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </>
  );
}
