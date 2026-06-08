import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import Testimonials from "@/components/Testimonials";
import RegionalGrid from "@/components/RegionalGrid";
import RatgeberPreview from "@/components/RatgeberPreview";
import CTA from "@/components/CTA";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Ihr Partner für Umzüge, Räumungen & Reinigungen in BERN"
        highlight="BERN"
        subtitle="Professionelle Umzüge, Räumungen und Reinigungen in Bern und der ganzen Schweiz. Ihr zuverlässiger Partner für stressfreie Umzüge – mit grösster Sorgfalt und Erfahrung."
      />

      {/* Trust badges */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "35+", label: "Jahre Erfahrung" },
              { value: "2'000+", label: "Zufriedene Kunden" },
              { value: "30", label: "Regionen abgedeckt" },
              { value: "CH", label: "Schweizweit im Einsatz" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold uppercase text-primary">
                Warum wir Ihr <span className="text-accent">richtiger Partner</span> sind
              </h2>
              <div className="w-16 h-1 bg-accent mt-4 mb-6" />
              <p className="text-text-muted leading-relaxed">
                Als erfahrenes Umzugsunternehmen in Bern stehen wir für Qualität, Zuverlässigkeit und faire Preise.
                Unser engagiertes Team begleitet Sie von der ersten Planung bis zum letzten Karton.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Kostenlose Besichtigung und Offerte",
                  "Persönliche Betreuung von Anfang bis Ende",
                  "Erfahrene und geschulte Umzugsprofis",
                  "Flexible Terminplanung – auch am Wochenende",
                  "Transparente Preise ohne versteckte Kosten",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-muted">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center mt-8 text-sm font-semibold text-accent hover:text-primary transition-colors cursor-pointer"
              >
                Mehr über uns erfahren
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-border min-h-[400px]">
              <Image
                src={images.team.src}
                alt={images.team.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <h3 className="text-xl font-bold text-white mb-2">Jetzt Angebot anfordern</h3>
                <p className="text-white/80 text-sm mb-6">
                  In nur 2 Minuten online anfragen – wir nehmen innerhalb von 24 Stunden Kontakt mit Ihnen auf.
                </p>
                <Link
                  href="/angebot"
                  className="block w-full text-center bg-accent hover:bg-accent-hover text-primary-dark font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Jetzt online in 2 Min anfragen
                </Link>
                <p className="mt-4 text-center text-xs text-white/70">
                  Oder rufen Sie uns an: <a href={`tel:${siteConfig.phoneMobile}`} className="text-accent hover:text-white transition-colors cursor-pointer">{siteConfig.phoneMobileDisplay}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCards />
      <Testimonials />
      <RegionalGrid limit={15} />
      <RatgeberPreview />
      <CTA />
    </>
  );
}
