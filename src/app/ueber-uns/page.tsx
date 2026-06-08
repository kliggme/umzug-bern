import { createMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import CTA from "@/components/CTA";
import Image from "next/image";
import { images, getServiceImage } from "@/lib/images";

export const metadata = createMetadata({
  title: "Über uns – Ihr Umzugsunternehmen in Bern",
  description:
    "Erfahren Sie mehr über Umzug Bern – Ihr erfahrenes Umzugsunternehmen mit langjähriger Expertise in Bern und der ganzen Schweiz.",
  path: "/ueber-uns",
  keywords: ["umzugsunternehmen bern", "über uns", "umzugsfirma bern erfahrung"],
});

export default function UeberUnsPage() {
  return (
    <>
      <Hero
        title="Über uns"
        highlight="uns"
        subtitle="Ihr erfahrenes Umzugsunternehmen in Bern – mit Leidenschaft, Professionalität und dem Anspruch, jeden Umzug perfekt zu machen."
        showCta={false}
        compact
        image={images.team}
      />
      <Breadcrumb items={[{ label: "Über uns" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Unsere Geschichte</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Umzug Bern wurde mit einer klaren Vision gegründet: Umzüge in der Region Bern so einfach und stressfrei wie möglich zu machen.
                Was als kleines Transportunternehmen begann, ist heute ein etabliertes Umzugsunternehmen mit einem engagierten Team von Profis.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Mit moderner Ausstattung, langjährigem Know-how und einem engagierten Team haben wir uns einen Namen als zuverlässiges
                Umzugsunternehmen in der Region Bern gemacht. Unser Anspruch: Höchste Qualität, transparente Preise und zufriedene Kunden.
              </p>
              <p className="text-text-muted leading-relaxed">
                Wir kennen Bern und seine Besonderheiten – von der engen Altstadt bis zu den modernen Wohnquartieren in Bümpliz und Köniz.
                Dieses lokale Wissen macht uns zum idealen Partner für Ihren Umzug.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative h-56 rounded-lg overflow-hidden border border-border">
                <Image
                  src={getServiceImage("transport").src}
                  alt={getServiceImage("transport").alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {[
                { title: "Erfahrung", desc: "Über 35 Jahre Erfahrung in der Umzugsbranche in Bern und der Schweiz." },
                { title: "Team", desc: "Geschulte und motivierte Umzugsprofis, die Ihr Hab und Gut behandeln wie ihr eigenes." },
                { title: "Ausstattung", desc: "Moderner Fahrzeugpark, Hebebühnen, Möbeldecken und professionelles Werkzeug." },
                { title: "Versicherung", desc: "Vollständiger Versicherungsschutz für Transport und Haftpflicht." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
