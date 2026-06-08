import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  highlight?: string;
  subtitle?: string;
  showCta?: boolean;
  compact?: boolean;
  image?: { src: string; alt: string };
};

export default function Hero({
  title,
  highlight,
  subtitle,
  showCta = true,
  compact = false,
  image = { src: "/images/hero.png", alt: "Umzugswagen beladen mit Möbeln und Kartons – Umzug Bern" },
}: HeroProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <section className={`relative overflow-hidden ${compact ? "min-h-[320px]" : "min-h-[480px] lg:min-h-[560px]"}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={!compact}
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/30" />

      <div className={`relative flex items-center ${compact ? "py-16" : "py-24 lg:py-32"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight text-white">
              {highlight && titleParts.length > 1 ? (
                <>
                  {titleParts[0]}
                  <span className="text-accent">{highlight}</span>
                  {titleParts[1]}
                </>
              ) : (
                title
              )}
            </h1>

            {subtitle && (
              <div className="mt-6">
                <div className="w-16 h-1 bg-accent mb-4" />
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                  {subtitle}
                </p>
              </div>
            )}

            {showCta && (
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/angebot"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-primary-dark font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Jetzt Angebot anfordern
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center border-2 border-white/30 hover:border-accent text-white hover:text-accent font-semibold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
