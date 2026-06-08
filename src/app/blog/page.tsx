import { createMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import { blogArticles } from "@/data/blog";
import { getArticleImage } from "@/lib/images";
import CTA from "@/components/CTA";

export const metadata = createMetadata({
  title: "Blog – News & Insights rund um Umzüge in Bern",
  description:
    "Aktuelle News, Trends und Insights rund um Umzüge in Bern. Erfahren Sie mehr über Wohnquartiere, Umzugstrends und praktische Tipps.",
  path: "/blog",
  keywords: ["umzug blog bern", "umzug news", "wohnen bern"],
});

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Unser Blog"
        highlight="Blog"
        subtitle="News, Trends und Insights rund um Umzüge, Wohnen und Leben in Bern."
        showCta={false}
        compact
      />
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...blogArticles]
              .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
              .map((article) => {
              const image = getArticleImage(article.slug, "blog");
              return (
                <ArticleCard
                  key={article.slug}
                  {...article}
                  basePath="/blog"
                  imageSrc={image.src}
                  imageAlt={image.alt}
                />
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
