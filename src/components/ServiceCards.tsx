import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { getServiceImage } from "@/lib/images";

export default function ServiceCards() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase text-primary">
            Unsere <span className="text-accent">Dienstleistungen</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Von Privatumzügen über Geschäftsumzüge bis zu Räumungen, Entsorgungen und Reinigungen – wir bieten das komplette Spektrum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const image = getServiceImage(service.slug);
            return (
              <Link
                key={service.slug}
                href={`/dienstleistungen/${service.slug}`}
                className="group bg-white rounded-lg border border-border overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-accent text-primary-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {service.shortTitle}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                    Erfahren Sie mehr
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
