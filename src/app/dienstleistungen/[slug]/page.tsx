import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import { regions } from "@/data/regions";
import { ratgeberArticles } from "@/data/ratgeber";
import {
  createMetadata,
  createBreadcrumbSchema,
  createFaqSchema,
  createServiceSchema,
} from "@/lib/seo";
import { renderContent } from "@/lib/content-renderer";
import { getServiceImage } from "@/lib/images";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.longDescription,
    path: `/dienstleistungen/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);
  const featuredRegions = regions.slice(0, 6);
  const relatedArticles = ratgeberArticles.slice(0, 3);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Dienstleistungen", url: "/dienstleistungen" },
    { name: service.shortTitle, url: `/dienstleistungen/${service.slug}` },
  ]);

  const faqSchema = createFaqSchema(service.faqs);
  const serviceSchema = createServiceSchema({
    name: service.title,
    description: service.description,
    slug: service.slug,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Hero
        title={service.title}
        highlight="Bern"
        subtitle={service.description}
        compact
        image={getServiceImage(service.slug)}
      />
      <Breadcrumb items={[
        { label: "Dienstleistungen", href: "/dienstleistungen" },
        { label: service.shortTitle },
      ]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-text-muted leading-relaxed text-lg mb-8">{service.longDescription}</p>

              <div className="flex flex-wrap gap-2 mb-10">
                {service.highlights.map((h) => (
                  <span key={h} className="bg-surface border border-border text-sm px-3 py-1.5 rounded-full text-text-muted">
                    {h}
                  </span>
                ))}
              </div>

              <div className="prose-content mb-10">
                {renderContent(service.content)}
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">Unsere Leistungen im Überblick</h2>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-text-muted">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6">
                Häufige Fragen zu {service.shortTitle}
              </h2>
              <div className="space-y-4 mb-10">
                {service.faqs.map((faq) => (
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
                <h3 className="font-bold text-primary mb-4">{service.shortTitle} – Auf einen Blick</h3>
                <ul className="space-y-3 text-sm text-text-muted">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/angebot"
                  className="block w-full text-center mt-6 bg-accent hover:bg-accent-hover text-primary-dark font-bold px-6 py-3 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Offerte anfordern
                </Link>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-bold text-primary mb-4">Weitere Dienstleistungen</h3>
                <ul className="space-y-3">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/dienstleistungen/${s.slug}`} className="text-sm text-text-muted hover:text-accent transition-colors cursor-pointer">
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-bold text-primary mb-4">Einsatzgebiete</h3>
                <ul className="space-y-2">
                  {featuredRegions.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/regionen/${r.slug}`} className="text-sm text-text-muted hover:text-accent transition-colors cursor-pointer">
                        {service.shortTitle} {r.name}
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
                  Erhalten Sie innerhalb von 24 Stunden eine unverbindliche Offerte für Ihren {service.shortTitle} in Bern.
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
        title={`${service.shortTitle} in Bern?`}
        subtitle={`Fordern Sie jetzt Ihre kostenlose Offerte für ${service.shortTitle} an – unverbindlich und innerhalb von 24 Stunden.`}
      />
    </>
  );
}
