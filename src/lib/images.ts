export const images = {
  hero: {
    src: "/images/hero.png",
    alt: "Umzugswagen beladen mit Möbeln und Kartons – Umzug Bern",
  },
  team: {
    src: "/images/team.png",
    alt: "Professionelle Umzugshelfer tragen Umzugskartons",
  },
  bern: {
    src: "/images/bern.png",
    alt: "Umzugswagen mit beladenem Innenraum vor dem Haus",
  },
  services: {
    privatumzug: {
      src: "/images/privatumzug.png",
      alt: "Privatumzug – Umzugskartons und Möbel in der Wohnung",
    },
    geschaeftsumzug: {
      src: "/images/geschaeftsumzug.png",
      alt: "Geschäftsumzug – professionelles Team beim Beladen des Transporters",
    },
    "raeumung-entsorgung": {
      src: "/images/entsorgen.png",
      alt: "Räumung und Entsorgung – Möbel und Kartons beim Entrümpeln",
    },
    reinigung: {
      src: "/images/erste-wohnung.png",
      alt: "Professionelle Reinigung – saubere Wohnung nach dem Umzug",
    },
  },
  ratgeber: {
    "umzug-checkliste": {
      src: "/images/checklist.png",
      alt: "Umzugs-Checkliste – Kartons und Umzugsvorbereitung",
    },
    "umzugskosten-bern": {
      src: "/images/kosten.png",
      alt: "Umzugskosten – Umzugskartons stapeln",
    },
    "umzug-mit-kindern": {
      src: "/images/familie.png",
      alt: "Familie beim Umzug mit Umzugskartons",
    },
    "umzug-bern-altstadt": {
      src: "/images/altstadt.png",
      alt: "Umzugswagen beladen vor dem Haus",
    },
    "umzug-versicherung": {
      src: "/images/versicherung.png",
      alt: "Sichere Verpackung beim Umzug",
    },
    "umzug-entsorgen": {
      src: "/images/entsorgen.png",
      alt: "Möbel und Kartons beim Entrümpeln",
    },
    "umzug-winter": {
      src: "/images/winter.png",
      alt: "Umzugstransporter unterwegs",
    },
    "moebel-verpacken": {
      src: "/images/verpacken.png",
      alt: "Möbel tragen und verpacken beim Umzug",
    },
  },
  blog: {
    "umzugstrends-2025": {
      src: "/images/trends.png",
      alt: "Umzugstransporter auf der Strasse",
    },
    "neues-quartier-bern": {
      src: "/images/quartiere.png",
      alt: "Einrichten der neuen Wohnung nach dem Umzug",
    },
    "firmenumzug-bern-tipps": {
      src: "/images/firmenumzug.png",
      alt: "Professioneller Firmenumzug – Beladen des Transporters",
    },
    "umzug-nachhaltig": {
      src: "/images/nachhaltig.png",
      alt: "Wiederverwendbare Umzugskartons",
    },
    "erste-wohnung-bern": {
      src: "/images/erste-wohnung.png",
      alt: "Erste eigene Wohnung – Umzug mit Kartons",
    },
    "umzug-stressfrei": {
      src: "/images/stressfrei.png",
      alt: "Zufriedene Kunden beim Umzug mit beladenem Umzugswagen",
    },
  },
} as const;

type ImageMeta = { src: string; alt: string };

export function getServiceImage(slug: string): ImageMeta {
  return images.services[slug as keyof typeof images.services] ?? images.hero;
}

export function getArticleImage(slug: string, type: "ratgeber" | "blog"): ImageMeta {
  const map = type === "ratgeber" ? images.ratgeber : images.blog;
  return (map as Record<string, ImageMeta>)[slug] ?? images.team;
}
