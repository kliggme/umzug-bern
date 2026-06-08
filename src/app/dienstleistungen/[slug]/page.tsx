import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import { createMetadata, createBreadcrumbSchema } from "@/lib/seo";
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
    description: service.description,
    path: `/dienstleistungen/${service.slug}`,
    keywords: [service.title.toLowerCase(), `${service.shortTitle.toLowerCase()} bern`],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Dienstleistungen", url: "/dienstleistungen" },
    { name: service.shortTitle, url: `/dienstleistungen/${service.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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

              <h2 className="text-2xl font-bold text-primary mb-6">Unsere Leistungen im Überblick</h2>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-text-muted">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/angebot"
                className="inline-flex items-center bg-accent hover:bg-accent-hover text-primary-dark font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                Jetzt Offerte anfordern
              </Link>
            </div>

            <div className="space-y-6">
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
              <div className="bg-primary rounded-lg p-6 text-white">
                <h3 className="font-bold text-accent mb-2">Kostenlose Offerte</h3>
                <p className="text-white/70 text-sm mb-4">
                  Erhalten Sie innerhalb von 24 Stunden eine unverbindliche Offerte.
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

      <CTA />
    </>
  );
}
