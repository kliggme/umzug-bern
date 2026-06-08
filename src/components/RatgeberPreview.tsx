import Link from "next/link";
import { ratgeberArticles } from "@/data/ratgeber";
import { getArticleImage } from "@/lib/images";
import ArticleCard from "./ArticleCard";

export default function RatgeberPreview() {
  const articles = [...ratgeberArticles]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .slice(0, 3);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold uppercase text-primary">
              Umzugs-<span className="text-accent">Ratgeber</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-xl">
              Tipps & Tricks rund um Ihren Umzug in Bern – von der Planung bis zum Einzug.
            </p>
          </div>
          <Link
            href="/ratgeber"
            className="inline-flex items-center text-sm font-semibold text-accent hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            Alle Artikel anzeigen
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => {
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
  );
}
