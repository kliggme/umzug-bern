import { createMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import RegionalGrid from "@/components/RegionalGrid";
import CTA from "@/components/CTA";

export const metadata = createMetadata({
  title: "Umzug Region Bern – Alle Einsatzgebiete",
  description:
    "Umzüge in Bern und 30 Regionen im Berner Mittelland, Oberland, Seeland und Jura. Finden Sie Ihren Umzugsservice in Ihrer Gemeinde.",
  path: "/regionen",
  keywords: ["umzug region bern", "umzug kanton bern", "umzugsfirma region"],
});

export default function RegionenPage() {
  return (
    <>
      <Hero
        title="Umzug in der Region Bern"
        highlight="Bern"
        subtitle="Wir sind in über 30 Gemeinden in und um Bern für Sie im Einsatz. Finden Sie Ihren Umzugsservice in Ihrer Region."
        showCta={false}
        compact
      />
      <Breadcrumb items={[{ label: "Regionen" }]} />
      <RegionalGrid />
      <CTA title="Umzug in Ihrer Region?" subtitle="Kontaktieren Sie uns für eine kostenlose Offerte – egal wo in der Region Bern." />
    </>
  );
}
