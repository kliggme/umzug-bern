import { createMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCards from "@/components/ServiceCards";
import CTA from "@/components/CTA";

export const metadata = createMetadata({
  title: "Dienstleistungen – Umzug, Räumung & Reinigung Bern",
  description:
    "Unsere Leistungen in Bern: Privatumzug, Geschäftsumzug, Räumung/Entsorgung und Reinigung. Alles aus einer Hand – professionell und zuverlässig.",
  path: "/dienstleistungen",
  keywords: ["umzug dienstleistungen bern", "räumung bern", "entsorgung bern", "reinigung bern"],
});

export default function DienstleistungenPage() {
  return (
    <>
      <Hero
        title="Unsere Dienstleistungen"
        highlight="Dienstleistungen"
        subtitle="Vom Privatumzug über den Geschäftsumzug bis zur Räumung, Entsorgung und Reinigung – wir bieten das komplette Spektrum in Bern."
        showCta={false}
        compact
      />
      <Breadcrumb items={[{ label: "Dienstleistungen" }]} />
      <ServiceCards />
      <CTA />
    </>
  );
}
