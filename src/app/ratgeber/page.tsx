import { createMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import { ratgeberArticles } from "@/data/ratgeber";
import { getArticleImage } from "@/lib/images";
import CTA from "@/components/CTA";

export const metadata = createMetadata({
  title: "Umzugs-Ratgeber – Tipps & Tricks für Ihren Umzug",
  description:
    "Praktische Tipps und Anleitungen für Ihren Umzug in Bern. Checklisten, Kostenübersicht, Verpackungstipps und mehr – alles für einen stressfreien Umzug.",
  path: "/ratgeber",
  keywords: ["umzug ratgeber", "umzug tipps", "umzug checkliste bern"],
});

export default function RatgeberPage() {
  return (
    <>
      <Hero
        title="Umzugs-Ratgeber"
        highlight="Ratgeber"
        subtitle="Tipps & Tricks rund um Ihren Umzug in Bern – von der Planung bis zum Einzug in Ihr neues Zuhause."
        showCta={false}
        compact
      />
      <Breadcrumb items={[{ label: "Ratgeber" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...ratgeberArticles]
              .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
              .map((article) => {
              const image = getArticleImage(article.slug, "ratgeber");
              return (
                <ArticleCard
                  key={article.slug}
                  {...article}
                  basePath="/ratgeber"
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
