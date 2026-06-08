import { notFound } from "next/navigation";
import Link from "next/link";
import { regions, getRegionBySlug } from "@/data/regions";
import { createMetadata, createBreadcrumbSchema, createFaqSchema } from "@/lib/seo";
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
    description: `Professioneller Umzug in ${region.name} (${region.plz}). Privatumzug, Geschäftsumzug und Transport – zuverlässig und stressfrei. Jetzt Offerte anfordern!`,
    path: `/regionen/${region.slug}`,
    keywords: [`umzug ${region.name.toLowerCase()}`, `umzugsfirma ${region.name.toLowerCase()}`, `umzugsunternehmen ${region.name.toLowerCase()}`],
  });
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) notFound();

  const faqs = [
    {
      question: `Was kostet ein Umzug in ${region.name}?`,
      answer: `Die Kosten für einen Umzug in ${region.name} hängen von Wohnungsgrösse, Stockwerk und Distanz ab. Eine 2.5-Zimmer-Wohnung kostet typischerweise CHF 1'200–2'200. Wir erstellen gerne eine kostenlose Offerte nach Besichtigung.`,
    },
    {
      question: `Wie weit ist ${region.name} von Bern entfernt?`,
      answer: `${region.name} liegt ca. ${region.distanceFromBern} von Bern entfernt. Unser Team ist regelmässig in ${region.name} im Einsatz und kennt die lokalen Gegebenheiten.`,
    },
    {
      question: `Bieten Sie auch Geschäftsumzüge in ${region.name} an?`,
      answer: `Ja, wir führen sowohl Privatumzüge als auch Geschäftsumzüge in ${region.name} und der gesamten Region Bern durch. Kontaktieren Sie uns für eine massgeschneiderte Offerte.`,
    },
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Regionen", url: "/regionen" },
    { name: region.name, url: `/regionen/${region.slug}` },
  ]);

  const faqSchema = createFaqSchema(faqs);

  const nearbyRegions = regions
    .filter((r) => r.slug !== region.slug)
    .slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero
        title={`Umzug ${region.name.toUpperCase()}`}
        highlight={region.name.toUpperCase()}
        subtitle={`Professionelle Umzüge in ${region.name} (${region.plz}) – Privatumzug, Geschäftsumzug und Transport. Ihr lokaler Umzugspartner mit ${region.distanceFromBern} Entfernung zu Bern.`}
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
              <p className="text-text-muted leading-relaxed mb-6">{region.description}</p>

              <h3 className="text-xl font-bold text-primary mb-4">Quartiere & Gebiete</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {region.highlights.map((h) => (
                  <span key={h} className="bg-surface border border-border text-sm px-3 py-1.5 rounded-full text-text-muted">
                    {h}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">Unsere Umzugsleistungen in {region.name}</h3>
              <ul className="space-y-3 mb-8">
                {[
                  `Privatumzug in ${region.name} – Wohnungen und Häuser`,
                  `Geschäftsumzug in ${region.name} – Büros und Firmen`,
                  `Transport von ${region.name} nach Bern und schweizweit`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-muted">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-primary mb-4">Häufige Fragen zum Umzug in {region.name}</h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="bg-surface border border-border rounded-lg group">
                    <summary className="px-6 py-4 font-semibold text-primary cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4 text-text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
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
                <h3 className="font-bold text-primary mb-4">Weitere Regionen</h3>
                <ul className="space-y-2">
                  {nearbyRegions.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/regionen/${r.slug}`} className="text-sm text-text-muted hover:text-accent transition-colors cursor-pointer">
                        Umzug {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA title={`Umzug in ${region.name}?`} subtitle={`Fordern Sie jetzt Ihre kostenlose Offerte für den Umzug in ${region.name} an.`} />
    </>
  );
}
