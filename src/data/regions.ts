export type Region = {
  slug: string;
  name: string;
  plz: string;
  kanton: string;
  description: string;
  highlights: string[];
  distanceFromBern: string;
  population?: string;
};

export const regions: Region[] = [
  {
    slug: "bern",
    name: "Bern",
    plz: "3000",
    kanton: "BE",
    description:
      "Als Hauptstadt des Kantons Bern und UNESCO-Weltkulturerbe ist Bern ein beliebter Wohn- und Arbeitsort. Unser Umzugsteam kennt die Besonderheiten der Berner Altstadt, enge Gassen und die vielfältigen Wohnquartiere von Bümpliz bis Kirchenfeld.",
    highlights: ["Altstadt", "Mattenhof", "Länggasse", "Kirchenfeld", "Bümpliz"],
    distanceFromBern: "0 km",
    population: "133'000",
  },
  {
    slug: "koeniz",
    name: "Köniz",
    plz: "3098",
    kanton: "BE",
    description:
      "Köniz ist die grösste Gemeinde im Berner Mittelland und direkt an Bern angrenzend. Wir führen regelmässig Umzüge in Liebefeld, Spiegel, Niederwangen und Schliern durch.",
    highlights: ["Liebefeld", "Spiegel", "Niederwangen", "Schliern"],
    distanceFromBern: "5 km",
    population: "42'000",
  },
  {
    slug: "ostermundigen",
    name: "Ostermundigen",
    plz: "3072",
    kanton: "BE",
    description:
      "Ostermundigen verbindet städtisches Leben mit ländlicher Idylle. Unser Team ist bestens vertraut mit den Wohngebieten und führt Umzüge effizient und termingerecht durch.",
    highlights: ["Zollhaus", "Deisswil", "Vechigenstrasse"],
    distanceFromBern: "4 km",
    population: "17'000",
  },
  {
    slug: "biel-bienne",
    name: "Biel/Bienne",
    plz: "2500",
    kanton: "BE",
    description:
      "Biel/Bienne ist die zweitgrösste Stadt im Kanton Bern und zweisprachig. Wir bieten Umzüge in der gesamten Region Seeland – von der Altstadt bis zu den Neubaugebieten.",
    highlights: ["Altstadt", "Nidau", "Vingelz", "Bözingen"],
    distanceFromBern: "28 km",
    population: "55'000",
  },
  {
    slug: "thun",
    name: "Thun",
    plz: "3600",
    kanton: "BE",
    description:
      "Thun am Thunersee ist ein wichtiges Wirtschaftszentrum im Berner Oberland. Wir organisieren Umzüge in Thun und Umgebung – vom Seeufer bis zur Altstadt.",
    highlights: ["Altstadt", "Dürrenast", "Gwatt", "Steffisburg"],
    distanceFromBern: "28 km",
    population: "44'000",
  },
  {
    slug: "burgdorf",
    name: "Burgdorf",
    plz: "3400",
    kanton: "BE",
    description:
      "Burgdorf im Emmental ist bekannt für seine historische Altstadt und lebendige Wirtschaft. Unser Umzugsservice deckt Burgdorf und das gesamte Emmental ab.",
    highlights: ["Altstadt", "Heimiswil", "Schönaustadt"],
    distanceFromBern: "22 km",
    population: "16'000",
  },
  {
    slug: "langenthal",
    name: "Langenthal",
    plz: "4900",
    kanton: "BE",
    description:
      "Langenthal ist das Zentrum des Oberaargaus. Wir führen Umzüge in Langenthal und den umliegenden Gemeinden professionell und zuverlässig durch.",
    highlights: ["Altstadt", "Schönenwerd", "Aarwangen"],
    distanceFromBern: "42 km",
    population: "16'000",
  },
  {
    slug: "interlaken",
    name: "Interlaken",
    plz: "3800",
    kanton: "BE",
    description:
      "Interlaken im Herzen des Berner Oberlands ist ein beliebtes Wohn- und Tourismusgebiet. Wir kennen die Herausforderungen von Bergumzügen und Tourismusregionen.",
    highlights: ["Unterseen", "Matten", "Wilderswil"],
    distanceFromBern: "57 km",
    population: "5'600",
  },
  {
    slug: "spiez",
    name: "Spiez",
    plz: "3700",
    kanton: "BE",
    description:
      "Spiez am Thunersee bietet eine hohe Lebensqualität. Unser Team führt Umzüge entlang des Thunersees und im ganzen Frutigland durch.",
    highlights: ["Faulensee", "Einigen", "Hondrich"],
    distanceFromBern: "35 km",
    population: "13'000",
  },
  {
    slug: "muri-bei-bern",
    name: "Muri bei Bern",
    plz: "3074",
    kanton: "BE",
    description:
      "Muri bei Bern ist eine attraktive Wohngemeinde südlich der Hauptstadt. Wir sind regelmässig in Muri, Gümligen und Wabern im Einsatz.",
    highlights: ["Gümligen", "Wabern", "Allmendingen"],
    distanceFromBern: "6 km",
    population: "13'000",
  },
  {
    slug: "belp",
    name: "Belp",
    plz: "3123",
    kanton: "BE",
    description:
      "Belp liegt im Gürbetal und ist gut an Bern angebunden. Wir führen Umzüge in Belp, Kehrsatz und dem ganzen Gürbetal durch.",
    highlights: ["Kehrsatz", "Toffen", "Gürbetal"],
    distanceFromBern: "10 km",
    population: "12'000",
  },
  {
    slug: "worb",
    name: "Worb",
    plz: "3076",
    kanton: "BE",
    description:
      "Worb im Emmental ist eine ländliche Gemeinde mit städtischem Charakter. Unser Umzugsteam kennt die Region und führt Umzüge effizient durch.",
    highlights: ["Enggistein", "Trimstein", "Worb Dorf"],
    distanceFromBern: "8 km",
    population: "12'000",
  },
  {
    slug: "zollikofen",
    name: "Zollikofen",
    plz: "3052",
    kanton: "BE",
    description:
      "Zollikofen grenzt direkt an Bern und ist ein beliebter Wohnort. Wir führen regelmässig Umzüge in Zollikofen und den angrenzenden Quartieren durch.",
    highlights: ["Zollikofen Dorf", "Itzigen", "Mittellandstrasse"],
    distanceFromBern: "5 km",
    population: "10'000",
  },
  {
    slug: "lyss",
    name: "Lyss",
    plz: "3250",
    kanton: "BE",
    description:
      "Lyss ist das Zentrum des Seelandes und wirtschaftlich wichtig. Wir organisieren Umzüge in Lyss und der gesamten Seeland-Region.",
    highlights: ["Busswil", "Herrenschwanden", "Seeland"],
    distanceFromBern: "20 km",
    population: "15'000",
  },
  {
    slug: "steffisburg",
    name: "Steffisburg",
    plz: "3612",
    kanton: "BE",
    description:
      "Steffisburg ist eine der grössten Gemeinden im Berner Oberland. Wir führen Umzüge in Steffisburg und Umgebung zuverlässig durch.",
    highlights: ["Schwarzseestrasse", "Flamatt", "Unterlangenegg"],
    distanceFromBern: "25 km",
    population: "16'000",
  },
  {
    slug: "muenchenbuchsee",
    name: "Münchenbuchsee",
    plz: "3053",
    kanton: "BE",
    description:
      "Münchenbuchsee liegt im Berner Mittelland und ist ideal an das Strassennetz angebunden. Unser Team führt Umzüge schnell und professionell durch.",
    highlights: ["Diemerswil", "Wiggiswil", "Mittelland"],
    distanceFromBern: "8 km",
    population: "11'000",
  },
  {
    slug: "schwarzenburg",
    name: "Schwarzenburg",
    plz: "3150",
    kanton: "BE",
    description:
      "Schwarzenburg im Sensebezirk ist eine charmante Gemeinde im Berner Mittelland. Wir decken Umzüge in Schwarzenburg und der Sense-Region ab.",
    highlights: ["Schwarzenburg Dorf", "Mamishaus", "Sensebezirk"],
    distanceFromBern: "22 km",
    population: "7'000",
  },
  {
    slug: "moutier",
    name: "Moutier",
    plz: "2740",
    kanton: "BE",
    description:
      "Moutier im Berner Jura ist das Zentrum der französischsprachigen Region. Wir bieten Umzüge im Jura und im Berner Mittelland an.",
    highlights: ["Perrefitte", "Champoz", "Jura"],
    distanceFromBern: "45 km",
    population: "7'500",
  },
  {
    slug: "bolligen",
    name: "Bolligen",
    plz: "3065",
    kanton: "BE",
    description:
      "Bolligen liegt östlich von Bern und bietet viel Grün und Ruhe. Wir führen Umzüge in Bolligen und den umliegenden Dörfern durch.",
    highlights: ["Bolligen Dorf", "Stettlen", "Itzigen"],
    distanceFromBern: "6 km",
    population: "7'000",
  },
  {
    slug: "ittigen",
    name: "Ittigen",
    plz: "3063",
    kanton: "BE",
    description:
      "Ittigen ist eine moderne Wohngemeinde mit guter Anbindung an Bern. Unser Umzugsteam ist regelmässig in Ittigen im Einsatz.",
    highlights: ["Ittigen Dorf", "Worblaufen", "Gümligen"],
    distanceFromBern: "4 km",
    population: "12'000",
  },
  {
    slug: "kirchlindach",
    name: "Kirchlindach",
    plz: "3038",
    kanton: "BE",
    description:
      "Kirchlindach im Berner Mittelland ist eine ruhige Wohngemeinde. Wir führen Umzüge in Kirchlindach und Umgebung professionell durch.",
    highlights: ["Kirchlindach Dorf", "Herrenschwanden", "Mittelland"],
    distanceFromBern: "10 km",
    population: "5'500",
  },
  {
    slug: "seftigen",
    name: "Seftigen",
    plz: "3662",
    kanton: "BE",
    description:
      "Seftigen liegt im Gürbetal und ist eine wachsende Gemeinde. Wir organisieren Umzüge in Seftigen und dem Gürbetal.",
    highlights: ["Gurten", "Gürbetal", "Seftigen Dorf"],
    distanceFromBern: "12 km",
    population: "2'800",
  },
  {
    slug: "wohlen-bei-bern",
    name: "Wohlen bei Bern",
    plz: "3033",
    kanton: "BE",
    description:
      "Wohlen bei Bern ist eine ländliche Gemeinde westlich der Hauptstadt. Unser Team führt Umzüge im Berner Mittelland zuverlässig durch.",
    highlights: ["Wohlen Dorf", "Anglikon", "Mittelland"],
    distanceFromBern: "12 km",
    population: "4'500",
  },
  {
    slug: "kerzers",
    name: "Kerzers",
    plz: "3210",
    kanton: "FR",
    description:
      "Kerzers ist das Zentrum des Grossen Moores und grenzt an den Kanton Bern. Wir führen Umzüge in Kerzers und der Seeland-Region durch.",
    highlights: ["Moos", "Grosses Moos", "Seeland"],
    distanceFromBern: "25 km",
    population: "5'000",
  },
  {
    slug: "meiringen",
    name: "Meiringen",
    plz: "3860",
    kanton: "BE",
    description:
      "Meiringen im Haslital ist ein Tor zum Berner Oberland. Wir kennen die Besonderheiten von Bergumzügen und führen Umzüge im Oberland durch.",
    highlights: ["Haslital", "Brünig", "Oberland"],
    distanceFromBern: "65 km",
    population: "4'600",
  },
  {
    slug: "frutigen",
    name: "Frutigen",
    plz: "3714",
    kanton: "BE",
    description:
      "Frutigen im Kandertal ist ein wichtiger Knotenpunkt im Berner Oberland. Wir organisieren Umzüge im Kandertal und Frutigland.",
    highlights: ["Kandertal", "Adelboden", "Frutigland"],
    distanceFromBern: "45 km",
    population: "7'000",
  },
  {
    slug: "laupen",
    name: "Laupen",
    plz: "3177",
    kanton: "BE",
    description:
      "Laupen an der Saane ist eine historische Kleinstadt im Berner Mittelland. Wir führen Umzüge in Laupen und der Sense-Region durch.",
    highlights: ["Altstadt", "Saane", "Sensebezirk"],
    distanceFromBern: "18 km",
    population: "3'200",
  },
  {
    slug: "aarberg",
    name: "Aarberg",
    plz: "3270",
    kanton: "BE",
    description:
      "Aarberg am Aareufer ist eine malerische Kleinstadt im Seeland. Unser Umzugsteam deckt Aarberg und die gesamte Seeland-Region ab.",
    highlights: ["Altstadt", "Aare", "Seeland"],
    distanceFromBern: "22 km",
    population: "4'800",
  },
  {
    slug: "niederbipp",
    name: "Niederbipp",
    plz: "4704",
    kanton: "BE",
    description:
      "Niederbipp im Oberaargau ist gut an die Region Bern angebunden. Wir führen Umzüge im Oberaargau und Mittelland professionell durch.",
    highlights: ["Oberaargau", "Jura-Südfuss", "Mittelland"],
    distanceFromBern: "38 km",
    population: "4'000",
  },
  {
    slug: "muensingen",
    name: "Münsingen",
    plz: "3110",
    kanton: "BE",
    description:
      "Münsingen ist eine der grössten Gemeinden im Berner Mittelland. Wir führen regelmässig Umzüge in Münsingen und den umliegenden Dörfern durch.",
    highlights: ["Münsingen Dorf", "Trimstein", "Rubigen"],
    distanceFromBern: "12 km",
    population: "13'000",
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
