import { createMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata = createMetadata({
  title: "Angebot anfordern – Kostenlose Umzugsofferte Bern",
  description:
    "Fordern Sie jetzt Ihre kostenlose und unverbindliche Umzugsofferte für Bern an. In 2 Minuten online – wir melden uns innerhalb von 24 Stunden bei Ihnen.",
  path: "/angebot",
  keywords: ["umzug offerte bern", "umzug angebot", "umzugskosten bern"],
});

export default function AngebotPage() {
  return (
    <>
      <Hero
        title="Angebot anfordern"
        highlight="Angebot"
        subtitle="In nur 2 Minuten online anfragen – wir nehmen innerhalb von 24 Stunden Kontakt mit Ihnen auf."
        showCta={false}
        compact
      />
      <Breadcrumb items={[{ label: "Angebot anfordern" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface border border-border rounded-lg p-8 lg:p-10">
            <h2 className="text-xl font-bold text-primary mb-2">Ihre Umzugsanfrage</h2>
            <p className="text-text-muted text-sm mb-8">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich mit einer massgeschneiderten Offerte.
            </p>
            <ContactForm />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { step: "1", title: "Anfrage senden", desc: "Formular ausfüllen" },
              { step: "2", title: "Kontakt aufnehmen", desc: "Innerhalb 24h" },
              { step: "3", title: "Umzug buchen", desc: "Termin vereinbaren" },
            ].map((item) => (
              <div key={item.step} className="bg-surface border border-border rounded-lg p-4">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-accent text-primary-dark font-bold rounded-full text-sm">
                  {item.step}
                </span>
                <h3 className="mt-2 font-bold text-primary text-sm">{item.title}</h3>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
