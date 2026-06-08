import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = createMetadata({
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${siteConfig.name} – Informationen zum Umgang mit Ihren Daten.`,
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Datenschutz" }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Datenschutzerklärung</h1>
          <div className="prose-content">
            <h2>1. Allgemeines</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir Sie
              über die Bearbeitung Ihrer Personendaten im Zusammenhang mit unserer Website und unseren Dienstleistungen.
            </p>
            <h2>2. Verantwortliche Stelle</h2>
            <p>
              {siteConfig.name}<br />
              {siteConfig.address.street}<br />
              {siteConfig.address.zip} {siteConfig.address.city}<br />
              E-Mail: {siteConfig.email}
            </p>
            <h2>3. Erhebung und Bearbeitung von Personendaten</h2>
            <p>
              Wir bearbeiten Personendaten, die Sie uns über das Kontaktformular, per E-Mail oder telefonisch mitteilen.
              Dazu gehören Name, E-Mail-Adresse, Telefonnummer und Angaben zu Ihrem Umzug.
            </p>
            <h2>4. Zweck der Datenbearbeitung</h2>
            <p>
              Ihre Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage, zur Erstellung von Offerten und zur Durchführung
              unserer Dienstleistungen verwendet.
            </p>
            <h2>5. Cookies</h2>
            <p>
              Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind.
              Darüber hinaus können – sofern Sie zustimmen – Cookies für anonyme Nutzungsstatistiken eingesetzt werden.
              Ihre Einwilligung können Sie jederzeit widerrufen, indem Sie die gespeicherten Cookies in Ihrem Browser löschen.
            </p>
            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Bearbeitung Ihrer Personendaten.
              Kontaktieren Sie uns unter {siteConfig.email} für Anfragen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
