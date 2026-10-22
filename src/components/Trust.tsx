import { siteConfig } from "@/lib/site-config";

const promises = [
  {
    title: "Kostenlose Offerte",
    text: "Besichtigung vor Ort und eine verbindliche Offerte. Was drinsteht, gilt – ohne versteckte Kosten.",
    icon: "document",
  },
  {
    title: "Direkter Ansprechpartner",
    text: `Sie sprechen mit ${siteConfig.contactPerson}, nicht mit einem Callcenter. Erreichbar unter ${siteConfig.phoneMobileDisplay}.`,
    icon: "person",
  },
  {
    title: "Versichert unterwegs",
    text: "Privatumzüge sind über eine Transportversicherung abgedeckt. Den Umfang halten wir in der Offerte fest.",
    icon: "shield",
  },
  {
    title: "Rückmeldung innert 24 Stunden",
    text: "Nach Ihrer Anfrage melden wir uns innerhalb eines Tages und klären den nächsten Schritt.",
    icon: "clock",
  },
  {
    title: "Aus Bern, für Bern",
    text: `Sitz an der ${siteConfig.address.street} in ${siteConfig.address.zip} ${siteConfig.address.city}. Wir kennen Altstadt, Quartiere und enge Zufahrten.`,
    icon: "pin",
  },
  {
    title: "Termine, auf die man sich verlässt",
    text: "Pünktliches Team, auch am Wochenende. Den Ablauf legen wir fest, bevor der Umzug beginnt.",
    icon: "check",
  },
] as const;

function PromiseIcon({ name }: { name: (typeof promises)[number]["icon"] }) {
  const common = {
    className: "w-6 h-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
  } as const;

  if (name === "document") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }
  if (name === "person") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (name === "pin") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function Trust() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase text-primary">
            Darauf können Sie sich <span className="text-accent-ink">verlassen</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Bevor der Umzug beginnt, wissen Sie, wer kommt, was versichert ist und was es kostet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((item) => (
            <div key={item.title} className="bg-surface rounded-lg border border-border p-8">
              <div className="w-12 h-12 rounded-lg bg-accent text-primary-dark flex items-center justify-center mb-5" aria-hidden="true">
                <PromiseIcon name={item.icon} />
              </div>
              <h3 className="font-bold text-primary text-lg">{item.title}</h3>
              <p className="mt-2 text-text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
