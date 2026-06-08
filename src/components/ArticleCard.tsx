import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  datePublished: string;
  readTime: string;
  basePath: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  datePublished,
  readTime,
  basePath,
  imageSrc,
  imageAlt,
}: ArticleCardProps) {
  return (
    <Link
      href={`${basePath}/${slug}`}
      className="group bg-white rounded-lg border border-border overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
        <span className="absolute bottom-4 left-4 bg-accent text-primary-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
          <time dateTime={datePublished}>
            {new Date(datePublished).toLocaleDateString("de-CH", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-3 flex-1">
          {excerpt}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
          Weiterlesen
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
