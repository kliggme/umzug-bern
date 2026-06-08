import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = createMetadata({
  title: "Impressum",
  description: `Impressum von ${siteConfig.name} – Angaben gemäss Schweizer Recht.`,
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Impressum" }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Impressum</h1>
          <div className="prose-content">
            <h2>Angaben gemäss Art. 3 Abs. 1 lit. s UWG</h2>
            <p>
              <strong>{siteConfig.name}</strong><br />
              {siteConfig.address.street}<br />
              {siteConfig.address.zip} {siteConfig.address.city}<br />
              {siteConfig.address.country}
            </p>
            <h3>Kontakt</h3>
            <p>
              {siteConfig.contactPerson}<br />
              Mobil: {siteConfig.phoneMobileDisplay}<br />
              E-Mail: {siteConfig.email}
            </p>
            <h3>Haftungsausschluss</h3>
            <p>
              Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw.
              Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.
            </p>
            <h3>Webdesign & Umsetzung</h3>
            <p>
              Website by{" "}
              <a
                href="https://heydigital.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                heydigital.ch
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
