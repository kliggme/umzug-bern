import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata = createMetadata({
  title: "Kontakt – Umzug Bern",
  description:
    "Kontaktieren Sie Umzug Bern für eine kostenlose Offerte. Telefon, E-Mail oder Kontaktformular – wir sind für Sie da.",
  path: "/kontakt",
  keywords: ["umzug bern kontakt", "umzugsfirma bern telefon"],
});

export default function KontaktPage() {
  return (
    <>
      <Hero
        title="Kontaktieren Sie uns"
        highlight="uns"
        subtitle="Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns telefonisch, per E-Mail oder über unser Formular."
        showCta={false}
        compact
      />
      <Breadcrumb items={[{ label: "Kontakt" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Schreiben Sie uns</h2>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-primary mb-4">Kontaktdaten</h3>
                <address className="not-italic space-y-3 text-text-muted">
                  <p className="font-semibold text-text">{siteConfig.name}</p>
                  <p>{siteConfig.address.street}</p>
                  <p>{siteConfig.address.zip} {siteConfig.address.city}</p>
                  <p>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-accent transition-colors cursor-pointer">
                      Tel: {siteConfig.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${siteConfig.phoneMobile}`} className="hover:text-accent transition-colors cursor-pointer">
                      Mobil: {siteConfig.phoneMobileDisplay}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors cursor-pointer">
                      {siteConfig.email}
                    </a>
                  </p>
                </address>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-4">Öffnungszeiten</h3>
                <dl className="space-y-2 text-sm text-text-muted">
                  <div className="flex justify-between"><dt>Mo – Fr</dt><dd className="font-medium text-text">07:00 – 18:00</dd></div>
                  <div className="flex justify-between"><dt>Samstag</dt><dd className="font-medium text-text">08:00 – 16:00</dd></div>
                  <div className="flex justify-between"><dt>Sonntag</dt><dd className="font-medium text-text">Nach Vereinbarung</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
