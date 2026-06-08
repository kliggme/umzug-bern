import { notFound } from "next/navigation";
import Link from "next/link";
import { ratgeberArticles, getRatgeberBySlug } from "@/data/ratgeber";
import { createMetadata, createBreadcrumbSchema, createArticleSchema } from "@/lib/seo";
import { renderContent } from "@/lib/content-renderer";
import { getArticleImage } from "@/lib/images";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ratgeberArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getRatgeberBySlug(slug);
  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/ratgeber/${article.slug}`,
    keywords: article.tags,
    type: "article",
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
  });
}

export default async function RatgeberArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getRatgeberBySlug(slug);
  if (!article) notFound();

  const relatedArticles = ratgeberArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Ratgeber", url: "/ratgeber" },
    { name: article.title, url: `/ratgeber/${article.slug}` },
  ]);

  const articleSchema = createArticleSchema({
    title: article.title,
    description: article.excerpt,
    slug: `ratgeber/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
  });

  const image = getArticleImage(article.slug, "ratgeber");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Hero title={article.title} showCta={false} compact image={image} />
      <Breadcrumb items={[
        { label: "Ratgeber", href: "/ratgeber" },
        { label: article.title },
      ]} />

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-text-muted mb-8 pb-8 border-b border-border">
            <span className="bg-accent text-primary-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
              {article.category}
            </span>
            <time dateTime={article.datePublished}>
              {new Date(article.datePublished).toLocaleDateString("de-CH", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{article.readTime} Lesezeit</span>
          </div>

          <p className="text-lg text-text-muted leading-relaxed mb-8">{article.excerpt}</p>

          <div className="prose-content">
            {renderContent(article.content)}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="bg-surface border border-border text-xs px-3 py-1 rounded-full text-text-muted">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-8">Weitere Ratgeber-Artikel</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/ratgeber/${a.slug}`}
                  className="bg-white border border-border rounded-lg p-6 hover:border-accent transition-colors cursor-pointer"
                >
                  <span className="text-xs font-bold uppercase text-accent">{a.category}</span>
                  <h3 className="mt-2 font-bold text-primary">{a.title}</h3>
                  <p className="mt-2 text-sm text-text-muted line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
