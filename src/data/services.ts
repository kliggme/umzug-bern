export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: "home" | "building" | "truck";
};

export const services: Service[] = [
  {
    slug: "privatumzug",
    title: "Privatumzug Bern",
    shortTitle: "Privatumzug",
    description:
      "Von der Einzimmerwohnung bis zum Einfamilienhaus – wir organisieren Ihren Privatumzug in Bern und Umgebung zuverlässig und stressfrei.",
    longDescription:
      "Ein Privatumzug ist mehr als nur Transport – es ist ein neuer Lebensabschnitt. Unser erfahrenes Team begleitet Sie von der ersten Planung bis zum letzten Karton. Ob Umzug innerhalb Berns, ins Berner Oberland oder in eine andere Schweizer Stadt: Wir kümmern uns um Demontage, Verpackung, Transport und Aufbau Ihrer Möbel. Mit unserer lokalen Expertise kennen wir die Besonderheiten der Berner Altstadt, enge Treppenhäuser und Parkregelungen.",
    features: [
      "Kostenlose Besichtigung und Offerte",
      "Professionelle Verpackung und Demontage",
      "Möbelmontage am Zielort",
      "Versicherungsschutz inklusive",
      "Flexible Terminplanung",
    ],
    icon: "home",
  },
  {
    slug: "geschaeftsumzug",
    title: "Geschäftsumzug Bern",
    shortTitle: "Geschäftsumzug",
    description:
      "Ob interner Umzug oder kompletter Standortwechsel – wir minimieren Ausfallzeiten und sorgen für einen reibungslosen Firmenumzug.",
    longDescription:
      "Ein Geschäftsumzug erfordert präzise Planung und koordiniertes Vorgehen. Wir übernehmen den Umzug Ihrer Büroeinrichtung, IT-Infrastruktur und sensiblen Dokumente. Dank effektiver Projektplanung halten wir Ihre Betriebsunterbrechung auf ein Minimum. Ob KMU in Bern oder Grossunternehmen – wir liefern massgeschneiderte Umzugslösungen.",
    features: [
      "Projektleitung und Zeitplan",
      "IT-Equipment Transport",
      "Wochenend- und Nachtumzüge",
      "Datenschutzkonforme Aktenvernichtung",
      "Einrichtung am neuen Standort",
    ],
    icon: "building",
  },
  {
    slug: "transport",
    title: "Transport Bern",
    shortTitle: "Transport",
    description:
      "Termingenaue Transporte in der ganzen Schweiz – von Bern aus zuverlässig von Tür zu Tür.",
    longDescription:
      "Neben klassischen Umzügen bieten wir professionelle Transportdienstleistungen für Möbel, Geräte und Spezialgüter. Durch optimierte Tourenplanung sparen wir Zeit und Kosten. Unser moderner Fahrzeugpark ermöglicht Transporte jeder Grössenordnung – vom Einzelstück bis zur kompletten Haushaltsauflösung.",
    features: [
      "Schweizweite Lieferungen",
      "Spezialtransporte für empfindliche Güter",
      "Express- und Same-Day-Service",
      "Tracking und Terminbestätigung",
      "Hebebühne und Tragetechnik",
    ],
    icon: "truck",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
