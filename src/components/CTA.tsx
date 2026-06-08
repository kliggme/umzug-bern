import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type CTAProps = {
  title?: string;
  subtitle?: string;
};

export default function CTA({
  title = "Jetzt einfach online anfragen",
  subtitle = "Wir nehmen innerhalb von 24 Stunden Kontakt mit Ihnen auf – für Ihren Umzug in Bern.",
}: CTAProps) {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold uppercase text-white">
          {title}
        </h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/angebot"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-primary-dark font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            Angebot anfordern
          </Link>
          <a
            href={`tel:${siteConfig.phoneMobile}`}
            className="inline-flex items-center justify-center border-2 border-white/30 hover:border-accent text-white hover:text-accent font-semibold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
