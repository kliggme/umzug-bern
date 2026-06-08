import type { Region, RegionCategory } from "@/data/regions";

export type RegionFaq = {
  question: string;
  answer: string;
};

function parseDistanceKm(distance: string): number {
  const match = distance.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function highlightsList(highlights: string[]): string {
  if (highlights.length <= 1) return highlights[0] ?? regionFallback;
  if (highlights.length === 2) return `${highlights[0]} und ${highlights[1]}`;
  return `${highlights.slice(0, -1).join(", ")} und ${highlights[highlights.length - 1]}`;
}

const regionFallback = "der Region";

function getCategoryIntro(category: RegionCategory, region: Region): string {
  const { name, distanceFromBern, highlights } = region;
  const areas = highlightsList(highlights);

  switch (category) {
    case "capital":
      return `Bern ist die Hauptstadt des Kantons Bern, UNESCO-Weltkulturerbe und mit rund ${region.population ?? "133'000"} Einwohnern eine der wichtigsten Wohn- und Wirtschaftsmetropolen der Schweiz. Als Umzugsunternehmen mit Sitz in Bern kennen wir jedes Quartier – von der historischen Altstadt über die Universitätsviertel bis zu den Aussenquartieren. Ob Umzug in ${areas}: Unser Team ist täglich in der Stadt unterwegs und weiss, wo Halteverbotszonen nötig sind, welche Treppenhäuser eng sind und wie man auch an einem geschäftigen Samstag effizient umzieht.`;

    case "suburban":
      return `${name} liegt nur ${distanceFromBern} von Bern entfernt und gehört zu den beliebtesten Wohngemeinden im Berner Mittelland. Mit rund ${region.population ?? "10'000"} Einwohnern verbindet ${name} die Nähe zur Hauptstadt mit mehr Wohnraum, Grün und einer hohen Lebensqualität. Wir führen regelmässig Umzüge in ${areas} durch – von der 2.5-Zimmer-Wohnung bis zum Einfamilienhaus. Dank kurzer Anfahrtswege von unserem Standort in Bern können wir flexible Termine anbieten und faire Preise kalkulieren.`;

    case "oberland":
      return `${name} liegt im Berner Oberland, ca. ${distanceFromBern} von Bern entfernt, und bietet mit seiner Lage ${region.population ? `und rund ${region.population} Einwohnern` : ""} eine hohe Lebensqualität zwischen Bergen und Seen. Umzüge im Oberland haben besondere Anforderungen: engere Zufahrtsstrassen, höhere Lagen, teils steile Zufahrten und saisonale Verkehrsspitzen. Unser Team kennt diese Gegebenheiten in ${areas} und plant jeden Umzug mit dem passenden Fahrzeug, Equipment und Zeitpuffer.`;

    case "seeland":
      return `${name} ist ein wichtiger Standort im Seeland, ${distanceFromBern} von Bern entfernt. Die Region zeichnet sich durch flaches Gelände, gute Verkehrsanbindung und eine Mischung aus historischen Altstädten und modernen Wohngebieten aus. Wir organisieren Umzüge in ${areas} und der gesamten Seeland-Region – ob innerhalb ${name}s, nach Bern oder schweizweit. ${region.kanton === "FR" ? "Auch als Grenzgemeinde zum Kanton Bern sind wir Ihr zuverlässiger Umzugspartner." : "Als Teil des Kantons Bern kennen wir die Seeland-Region aus jahrelanger Praxis."}`;

    case "emmental":
      return `${name} liegt im Emmental, einer der charaktervollsten Regionen des Kantons Bern, ca. ${distanceFromBern} von der Hauptstadt entfernt. Hügelige Landschaft, historische Dörfer und eine starke lokale Wirtschaft prägen das Gebiet. Umzüge in ${areas} erfordern Erfahrung mit ländlichen Zufahrten, älteren Gebäuden und teils beengten Dorfstrassen. Unser Team aus Bern führt regelmässig Umzüge im Emmental durch und plant jeden Auftrag individuell.`;

    case "jura":
      return `${name} liegt im Berner Jura, ca. ${distanceFromBern} von Bern entfernt, und ist das Zentrum der französischsprachigen Region im Kanton. Wir bieten Umzüge in ${areas} und im gesamten Jura an – für Privatpersonen, KMU und Institutionen. Unser Team aus Bern deckt den gesamten Kanton ab und koordiniert auch mehrsprachige Umzüge professionell.`;

    case "mittelland":
    default:
      return `${name} liegt im Berner Mittelland, ca. ${distanceFromBern} von Bern entfernt${region.population ? `, und zählt rund ${region.population} Einwohner` : ""}. Die Gemeinde verbindet ländliche Ruhe mit guter Infrastruktur und Anbindung an Bern. Wir führen regelmässig Umzüge in ${areas} und den umliegenden Dörfern durch – zuverlässig, termingerecht und zu fairen Preisen.`;
  }
}

function getCategorySpecifics(category: RegionCategory, region: Region): string {
  const { name } = region;

  switch (category) {
    case "capital":
      return `## Besonderheiten beim Umzug in Bern

Die Berner Altstadt mit ihren Sandsteinbauten, engen Gassen und den berühmten Lauben stellt besondere Anforderungen: Umzüge sind oft nur zu festgelegten Zeiten erlaubt, Halteverbotszonen müssen bei der Stadtpolizei beantragt werden, und viele Gebäude haben keinen Lift. In Quartieren wie Länggasse, Mattenhof oder Kirchenfeld sind die Treppenhäuser teils sehr eng.

In den Aussenquartieren Bümpliz, Breitenrain oder Beundenfeld dominieren Hochhäuser und moderne Wohnblocks – hier sind Liftkapazität und Parkplatzreservierung wichtig. Unser Team kennt beide Welten und plant jeden Bern-Umzug mit den nötigen Bewilligungen und dem passenden Personal.

**Tipp:** Planen Sie Bern-Umzüge in der Altstadt mindestens 4 Wochen im Voraus, damit Bewilligungen und Halteverbotszonen rechtzeitig beantragt werden können.`;

    case "suburban":
      return `## Besonderheiten beim Umzug in ${name}

Als Pendler- und Wohngemeinde in unmittelbarer Nähe zu Bern ist ${name} geprägt von Einfamilienhäusern, Reihenhäusern und kleineren Mehrfamilienhäusern. Viele Umzüge finden in Wohnüberbauungen mit Tiefgaragen statt – hier koordinieren wir Zufahrten, Liftreservierungen und die zeitliche Abstimmung mit der Verwaltung.

Die kurze Distanz zu unserem Standort in Bern (${region.distanceFromBern}) bedeutet für Sie: keine hohen Anfahrtskosten, flexible Terminwahl und schnelle Reaktionszeiten bei kurzfristigen Anfragen.`;

    case "oberland":
      return `## Besonderheiten beim Umzug in ${name}

Im Berner Oberland spielen Gelände und Zufahrt eine zentrale Rolle. Steile Strassen, enge Kurven und Parkplätze in Entfernung vom Haus sind keine Seltenheit. Für schwere Möbel und grosse Umzüge setzen wir bei Bedarf zusätzliches Personal und Spezialausrüstung ein.

${name} liegt ${region.distanceFromBern} von Bern – wir planen die Anfahrt effizient und kalkulieren die Transportzeit transparent in der Offerte. Auch Umzüge von ${name} nach Bern, Thun, Interlaken oder in andere Kantone führen wir regelmässig durch.`;

    case "seeland":
      return `## Besonderheiten beim Umzug in ${name}

Das Seeland bietet mit seinem flachen Gelände ideale Bedingungen für Umzugswagen und Hebebühnen. Gleichzeitig gibt es in historischen Altstädten enge Gassen und Brücken mit Höhenbeschränkungen. In ${name} kennen wir die lokalen Gegebenheiten und wählen die optimale Route und Fahrzeuggrösse.

${region.name === "Biel/Bienne" ? "Als zweisprachige Stadt sprechen wir Deutsch und Französisch – für einen reibungslosen Ablauf in beiden Sprachräumen." : ""} Umzüge innerhalb des Seelands, nach Bern oder in den Jura planen wir mit optimierten Touren.`;

    case "emmental":
      return `## Besonderheiten beim Umzug in ${name}

Das Emmental ist bekannt für seine Hügel, alten Bauernhäuser und charmanten Dörfer. Umzüge hier bedeuten oft: längere Zufahrtswege, ältere Gebäude ohne Lift und grosszügige Wohnflächen mit viel Inventar. Unser Team ist darauf vorbereitet und bringt die nötige Erfahrung für ländliche Umzüge mit.

Von Bern aus sind es ${region.distanceFromBern} bis ${name} – wir kalkulieren die Anfahrt fair und transparent.`;

    case "jura":
      return `## Besonderheiten beim Umzug in ${name}

Der Berner Jura mit seiner französischsprachigen Bevölkerung und bergigem Gelände erfordert flexible Planung. In ${name} und Umgebung führen wir Umzüge für Privatpersonen und Unternehmen durch – diskret, zuverlässig und in der Sprache Ihrer Wahl.

Die Entfernung von Bern (${region.distanceFromBern}) planen wir effizient in die Logistik ein.`;

    case "mittelland":
    default:
      return `## Besonderheiten beim Umzug in ${name}

Im Berner Mittelland verbinden sich ländliche Strukturen mit guter Infrastruktur. ${name} bietet eine Mischung aus älteren Wohnhäusern, Neubauten und Einfamilienhäusern – jeder Umzug ist anders. Wir passen Teamgrösse, Fahrzeug und Zeitplan individuell an.

Mit ${region.distanceFromBern} Entfernung zu Bern sind wir schnell bei Ihnen und kennen die Region aus regelmässigen Einsätzen.`;
  }
}

function getPriceNote(distanceKm: number): string {
  if (distanceKm === 0) {
    return "Als Umzug innerhalb Berns fallen keine Anfahrtskosten an. Preise können in der Altstadt oder ohne Lift höher liegen.";
  }
  if (distanceKm <= 15) {
    return `Dank der kurzen Entfernung von nur ${distanceKm} km zu Bern sind die Anfahrtskosten moderat.`;
  }
  if (distanceKm <= 35) {
    return `Bei ${distanceKm} km Entfernung zu Bern kalkulieren wir eine moderate Anfahrtsgebühr – transparent in der Offerte ausgewiesen.`;
  }
  return `Bei ${distanceKm} km Entfernung zu Bern ist die Anfahrt im Preis berücksichtigt. Wir erstellen eine faire, positionsbezogene Offerte.`;
}

export function getRegionKeywords(region: Region): string[] {
  const name = region.name.toLowerCase();
  return [
    `umzug ${name}`,
    `umzugsfirma ${name}`,
    `umzugsunternehmen ${name}`,
    `umzug ${region.plz}`,
    `privatumzug ${name}`,
    `geschäftsumzug ${name}`,
    `umzug ${name} bern`,
  ];
}

export function getRegionFaqs(region: Region): RegionFaq[] {
  const { name, plz, distanceFromBern, highlights, population } = region;
  const distanceKm = parseDistanceKm(distanceFromBern);
  const areas = highlightsList(highlights);

  const faqs: RegionFaq[] = [
    {
      question: `Was kostet ein Umzug in ${name}?`,
      answer: `Die Kosten für einen Umzug in ${name} (${plz}) hängen von Wohnungsgrösse, Stockwerk, Lift und Umzugsvolumen ab. Eine 2.5-Zimmer-Wohnung kostet typischerweise CHF 1'200–2'200, eine 4.5-Zimmer-Wohnung CHF 2'500–4'000. ${getPriceNote(distanceKm)} Wir erstellen nach kostenloser Besichtigung eine transparente Offerte.`,
    },
    {
      question: `Wie weit ist ${name} von Bern entfernt?`,
      answer: `${name} liegt ca. ${distanceFromBern} von Bern entfernt${population ? ` und hat rund ${population} Einwohner` : ""}. Unser Umzugsteam mit Sitz in Bern (3027) ist regelmässig in ${name} im Einsatz – in ${areas} und allen umliegenden Gebieten.`,
    },
    {
      question: `Bieten Sie Privatumzüge in ${name} an?`,
      answer: `Ja, Privatumzüge in ${name} gehören zu unseren häufigsten Aufträgen. Wir übernehmen Verpackung, Demontage, Transport und Möbelmontage – von der Einzimmerwohnung bis zum Einfamilienhaus. Kostenlose Besichtigung und Offerte innerhalb von 24 Stunden.`,
    },
    {
      question: `Führen Sie auch Geschäftsumzüge in ${name} durch?`,
      answer: `Ja, wir führen Geschäftsumzüge in ${name} für KMU, Büros, Praxen und Verwaltungen durch. Wochenend- und Nachtumzüge sind möglich, um Betriebsausfallzeiten zu minimieren. Kontaktieren Sie uns für eine massgeschneiderte Projektofferte.`,
    },
    {
      question: `Wie weit im Voraus sollte ich einen Umzug in ${name} buchen?`,
      answer: `Wir empfehlen 4–6 Wochen Vorlauf, besonders an Monatsenden und in der Sommersaison. In ${name} sind kurzfristige Termine nach Verfügbarkeit oft möglich – fragen Sie uns einfach an.`,
    },
  ];

  if (region.category === "capital") {
    faqs.push({
      question: "Brauche ich eine Bewilligung für den Umzug in der Berner Altstadt?",
      answer:
        "Ja, in der Berner Altstadt sind Umzüge oft nur zu bestimmten Zeiten erlaubt. Halteverbotszonen müssen bei der Stadtpolizei Bern beantragt werden. Wir unterstützen Sie bei der Beantragung und kennen die lokalen Vorschriften aus jahrelanger Erfahrung.",
    });
  } else if (distanceKm <= 15) {
    faqs.push({
      question: `Können Sie auch Umzüge von ${name} nach Bern (oder umgekehrt) durchführen?`,
      answer: `Ja, Umzüge zwischen ${name} und Bern (${distanceFromBern}) führen wir täglich durch. Die kurze Distanz ermöglicht flexible Termine und faire Preise. Auch Umzüge von ${name} in andere Kantone oder schweizweit sind möglich.`,
    });
  } else {
    faqs.push({
      question: `Transportieren Sie auch von ${name} nach Bern und in andere Regionen?`,
      answer: `Ja, wir führen Umzüge von ${name} nach Bern, in das Berner Oberland, das Seeland und schweizweit durch. ${distanceKm} km nach Bern – wir planen die Logistik effizient und kalkulieren transparent.`,
    });
  }

  return faqs;
}

export function getRegionContent(region: Region): string {
  const { name, plz, kanton, highlights, population, distanceFromBern } = region;
  const areas = highlightsList(highlights);
  const distanceKm = parseDistanceKm(distanceFromBern);
  const intro = getCategoryIntro(region.category, region);
  const specifics = getCategorySpecifics(region.category, region);

  return `Sie planen einen **Umzug in ${name}** (${plz}, Kanton ${kanton})? Umzug Bern ist Ihr lokales Umzugsunternehmen mit Sitz in Bern und langjähriger Erfahrung im gesamten Kanton Bern und darüber hinaus. Ob Privatumzug, Geschäftsumzug oder Einzeltransport – wir begleiten Sie von der Planung bis zum Einzug.

${intro}

## Unsere Umzugsleistungen in ${name}

Als vollständiger Umzugsdienstleister bieten wir in ${name} das gesamte Spektrum:

- **Privatumzug in ${name}** – Wohnungen, Reihenhäuser und Einfamilienhäuser in ${areas}
- **Geschäftsumzug in ${name}** – Büros, KMU, Praxen und Verwaltungen
- **Transport und Einzelstücke** – Möbeltransport, Abholung und Lieferung in ${name}
- **Verpackungsservice** – Professionelles Einpacken und Schutz empfindlicher Güter
- **Möbelmontage** – Demontage am alten und Aufbau am neuen Standort
- **Entsorgung** – Mitnahme und fachgerechte Entsorgung nicht mehr benötigter Gegenstände

## Quartiere und Einsatzgebiete in ${name}

Wir sind in allen Teilen von ${name} im Einsatz – insbesondere in **${areas}**. Egal ob Umzug innerhalb ${name}s, von ${name} nach Bern oder von einer anderen Stadt nach ${name}: Unser Team plant die optimale Route und das passende Fahrzeug.

${population ? `Mit rund **${population} Einwohnern** ist ${name} ${distanceKm <= 15 ? "ein wichtiger Wohnstandort in der Region Bern" : "ein bedeutender Standort im Kanton Bern"}. ` : ""}Die Entfernung zu unserem Standort in Bern beträgt **${distanceFromBern}** – kurze Wege bedeuten für Sie flexible Termine und faire Preise.

## Preisübersicht Umzug ${name}

| Wohnungsgrösse | Geschätzte Kosten |
|---|---|
| 1.5-Zimmer (30–40 m²) | CHF 800 – 1'500 |
| 2.5-Zimmer (50–65 m²) | CHF 1'200 – 2'200 |
| 3.5-Zimmer (70–85 m²) | CHF 1'800 – 3'000 |
| 4.5-Zimmer (90–110 m²) | CHF 2'500 – 4'000 |
| Einfamilienhaus | CHF 3'500 – 7'000 |

${getPriceNote(distanceKm)} Alle Preise sind Richtwerte – die genaue Offerte erstellen wir nach kostenloser Besichtigung.

## So läuft Ihr Umzug in ${name} ab

1. **Anfrage:** Kontakt per Telefon, E-Mail oder Online-Formular. Wir besprechen Termin, Wohnungsgrösse und besondere Anforderungen in ${name}.
2. **Besichtigung:** Kostenlose Besichtigung vor Ort in ${name} – wir erfassen Volumen, Zugang und Stockwerk.
3. **Offerte:** Transparente, unverbindliche Offerte innerhalb von 24 Stunden.
4. **Umzugstag:** Pünktliches Team, Schutz von Böden und Treppen, sorgfältiger Transport nach Plan.
5. **Einzug:** Möbelmontage, Abstellung der Kartons, Abschlusskontrolle mit Ihnen.

${specifics}

## Warum Umzug Bern für Ihren Umzug in ${name}?

- **Lokaler Partner** mit Sitz in Bern – keine anonyme Fernumzugsfirma
- **Erfahrung in ${name}** und der gesamten Region (${distanceFromBern} von Bern)
- **Transparente Preise** – kostenlose Besichtigung, Offerte innerhalb 24 Stunden
- **Versicherung inklusive** – Ihr Inventar ist während des Transports abgesichert
- **Flexibel** – Privatumzug, Geschäftsumzug, Wochenendtermine und Express-Transporte
- **Persönliche Betreuung** – feste Ansprechpartner von der Planung bis zum Einzug

Planen Sie Ihren Umzug in ${name}? Fordern Sie jetzt Ihre kostenlose Offerte an – unverbindlich und innerhalb von 24 Stunden.`;
}

export function getNearbyRegions(region: Region, allRegions: Region[], limit = 6): Region[] {
  const distanceKm = parseDistanceKm(region.distanceFromBern);
  return allRegions
    .filter((r) => r.slug !== region.slug)
    .sort(
      (a, b) =>
        Math.abs(parseDistanceKm(a.distanceFromBern) - distanceKm) -
        Math.abs(parseDistanceKm(b.distanceFromBern) - distanceKm)
    )
    .slice(0, limit);
}
