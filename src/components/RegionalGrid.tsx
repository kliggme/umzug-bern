import Link from "next/link";
import { regions } from "@/data/regions";

export default function RegionalGrid({ limit }: { limit?: number }) {
  const displayRegions = limit ? regions.slice(0, limit) : regions;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase text-primary">
            Umzug in der <span className="text-accent">Region Bern</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Wir sind in Bern und der gesamten Region für Sie im Einsatz – lokal, zuverlässig und termingerecht.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {displayRegions.map((region) => (
            <Link
              key={region.slug}
              href={`/regionen/${region.slug}`}
              className="group bg-surface border border-border rounded-lg px-4 py-3 text-center hover:border-accent hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                {region.name}
              </span>
              <span className="block text-xs text-text-muted mt-0.5">
                {region.plz}
              </span>
            </Link>
          ))}
        </div>

        {limit && regions.length > limit && (
          <div className="text-center mt-10">
            <Link
              href="/regionen"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer"
            >
              Alle {regions.length} Regionen anzeigen
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
