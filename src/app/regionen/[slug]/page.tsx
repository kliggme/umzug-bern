import { notFound } from "next/navigation";
import Link from "next/link";
import { regions, getRegionBySlug } from "@/data/regions";
import { services } from "@/data/services";
import { ratgeberArticles } from "@/data/ratgeber";
import {
  createMetadata,
  createBreadcrumbSchema,
  createFaqSchema,
  createServiceSchema,
} from "@/lib/seo";
import {
  getRegionContent,
  getRegionFaqs,
  getRegionKeywords,
  getNearbyRegions,
} from "@/lib/region-content";
import { renderContent } from "@/lib/content-renderer";
import { images } from "@/lib/images";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return regions.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};

  return createMetadata({
    title: `Umzug ${region.name} – Umzugsunternehmen ${region.plz}`,
    description: `Professioneller Umzug in ${region.name} (${region.plz}): Privatumzug, Geschäftsumzug, Räumung/Entsorgung und Reinigung. Lokaler Umzugspartner aus Bern, ${region.distanceFromBern} entfernt. Kostenlose Offerte!`,
    path: `/regionen/${region.slug}`,
    keywords: getRegionKeywords(region),
  });
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) notFound();

  const content = getRegionContent(region);
  const faqs = getRegionFaqs(region);
  const nearbyRegions = getNearbyRegions(region, regions);
  const relatedArticles = ratgeberArticles.slice(0, 3);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Regionen", url: "/regionen" },
    { name: region.name, url: `/regionen/${region.slug}` },
  ]);

  const faqSchema = createFaqSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: `Umzug ${region.name}`,
    description: `Professionelle Umzugsleistungen in ${region.name} (${region.plz}): Privatumzug, Geschäftsumzug, Räumung/Entsorgung und Reinigung.`,
    slug: region.slug,
    path: `/regionen/${region.slug}`,
    areaServed: region.name,
  });

  const servicesList = [
    `Privatumzug in ${region.name} – Wohnungen und Häuser`,
    `Geschäftsumzug in ${region.name} – Büros und Firmen`,
    `Räumung & Entsorgung in ${region.name}`,
    `Reinigung in ${region.name} – Umzugs- und Endreinigung`,
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Hero
        title={`Umzug ${region.name.toUpperCase()}`}
        highlight={region.name.toUpperCase()}
        subtitle={`Professionelle Umzüge in ${region.name} (${region.plz}) – Privatumzug, Geschäftsumzug, Räumung/Entsorgung und Reinigung. Ihr lokaler Umzugspartner mit ${region.distanceFromBern} Entfernung zu Bern.`}
        compact
        image={region.slug === "bern" ? images.bern : images.hero}
      />
      <Breadcrumb items={[
        { label: "Regionen", href: "/regionen" },
        { label: region.name },
      ]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Umzugsunternehmen in {region.name}
              </h2>
              <p className="text-text-muted leading-relaxed text-lg mb-8">{region.description}</p>

              <div className="flex flex-wrap gap-2 mb-10">
                {region.highlights.map((h) => (
                  <span key={h} className="bg-surface border border-border text-sm px-3 py-1.5 rounded-full text-text-muted">
                    {h}
                  </span>
                ))}
              </div>

              <div className="prose-content mb-10">
                {renderContent(content)}
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">
                Unsere Umzugsleistungen in {region.name}
              </h2>
              <ul className="space-y-3 mb-10">
                {servicesList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-muted">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6">
                Häufige Fragen zum Umzug in {region.name}
              </h2>
              <div className="space-y-4 mb-10">
                {faqs.map((faq) => (
                  <details key={faq.question} className="bg-surface border border-border rounded-lg group">
                    <summary className="px-6 py-4 font-semibold text-primary cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4 text-text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>

              <Link
                href="/angebot"
                className="inline-flex items-center bg-accent hover:bg-accent-hover text-primary-dark font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                Jetzt Offerte anfordern
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-bold text-primary mb-4">Region {region.name}</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-text-muted">PLZ</dt>
                    <dd className="font-medium">{region.plz}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Kanton</dt>
                    <dd className="font-medium">{region.kanton}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Entfernung Bern</dt>
                    <dd className="font-medium">{region.distanceFromBern}</dd>
                  </div>
                  {region.population && (
                    <div className="flex justify-between">
                      <dt className="text-text-muted">Einwohner</dt>
                      <dd className="font-medium">{region.population}</dd>
                    </div>
                  )}
                </dl>
                <Link
                  href="/angebot"
                  className="block w-full text-center mt-6 bg-accent hover:bg-accent-hover text-primary-dark font-bold px-6 py-3 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Offerte anfordern
                </Link>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-bold text-primary mb-4">Unsere Dienstleistungen</h3>
                <ul className="space-y-3">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/dienstleistungen/${s.slug}`} className="text-sm text-text-muted hover:text-accent transition-colors cursor-pointer">
                        {s.shortTitle} {region.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-bold text-primary mb-4">Nahe Regionen</h3>
                <ul className="space-y-2">
                  {nearbyRegions.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/regionen/${r.slug}`} className="text-sm text-text-muted hover:text-accent transition-colors cursor-pointer">
                        Umzug {r.name} ({r.distanceFromBern})
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/regionen" className="inline-block mt-4 text-sm font-semibold text-accent hover:text-primary transition-colors cursor-pointer">
                  Alle Regionen →
                </Link>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-bold text-primary mb-4">Ratgeber & Tipps</h3>
                <ul className="space-y-3">
                  {relatedArticles.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/ratgeber/${a.slug}`} className="text-sm text-text-muted hover:text-accent transition-colors cursor-pointer">
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-lg p-6 text-white">
                <h3 className="font-bold text-accent mb-2">Kostenlose Offerte</h3>
                <p className="text-white/70 text-sm mb-4">
                  Wir nehmen innerhalb von 24 Stunden Kontakt mit Ihnen auf – für Ihren Umzug in {region.name}.
                </p>
                <Link
                  href="/angebot"
                  className="block text-center bg-accent hover:bg-accent-hover text-primary-dark font-bold px-6 py-3 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Anfragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title={`Umzug in ${region.name}?`}
        subtitle={`Fordern Sie jetzt Ihre kostenlose Offerte für den Umzug in ${region.name} (${region.plz}) an – wir melden uns innerhalb von 24 Stunden bei Ihnen.`}
      />
    </>
  );
}
