import { createMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCards from "@/components/ServiceCards";
import CTA from "@/components/CTA";

export const metadata = createMetadata({
  title: "Dienstleistungen – Umzug & Transport Bern",
  description:
    "Unsere Umzugsleistungen in Bern: Privatumzug, Geschäftsumzug und Transport. Alles aus einer Hand – professionell und zuverlässig.",
  path: "/dienstleistungen",
  keywords: ["umzug dienstleistungen bern", "transport bern"],
});

export default function DienstleistungenPage() {
  return (
    <>
      <Hero
        title="Unsere Dienstleistungen"
        highlight="Dienstleistungen"
        subtitle="Vom Privatumzug über den Geschäftsumzug bis zum Transport – wir bieten das komplette Spektrum für Ihren Umzug in Bern."
        showCta={false}
        compact
      />
      <Breadcrumb items={[{ label: "Dienstleistungen" }]} />
      <ServiceCards />
      <CTA />
    </>
  );
}
