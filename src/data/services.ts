export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  highlights: string[];
  keywords: string[];
  content: string;
  faqs: ServiceFaq[];
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
      "Ein Privatumzug ist mehr als nur Transport – es ist ein neuer Lebensabschnitt. Unser erfahrenes Team begleitet Sie von der ersten Planung bis zum letzten Karton. Ob Umzug innerhalb Berns, ins Berner Oberland oder in eine andere Schweizer Stadt: Wir kümmern uns um Demontage, Verpackung, Transport und Aufbau Ihrer Möbel.",
    features: [
      "Kostenlose Besichtigung und Offerte",
      "Professionelle Verpackung und Demontage",
      "Möbelmontage am Zielort",
      "Persönliche Betreuung",
      "Flexible Terminplanung",
    ],
    highlights: [
      "Wohnungsumzug",
      "Einfamilienhaus",
      "Altstadt Bern",
      "Berner Oberland",
      "Schweizweit",
    ],
    keywords: [
      "privatumzug bern",
      "umzugsfirma bern",
      "wohnungsumzug bern",
      "umzugsunternehmen bern",
      "umzug bern kosten",
      "möbeltransport bern",
    ],
    content: `Ein **Privatumzug in Bern** bedeutet für die meisten Menschen einen der wichtigsten Schritte im Leben: ein neues Zuhause, ein neues Quartier, vielleicht sogar ein neuer Job. Genau in dieser Phase brauchen Sie einen Umzugspartner, der nicht nur Möbel transportiert, sondern den gesamten Ablauf professionell plant und zuverlässig umsetzt. Umzug Bern ist Ihr lokales Umzugsunternehmen mit Sitz in Bern und langjähriger Erfahrung im Kanton Bern und der ganzen Schweiz.

## Was verstehen wir unter einem Privatumzug?

Ein Privatumzug umfasst den kompletten Transport Ihres Haushalts von der alten zur neuen Wohnung oder zum neuen Haus. Dazu gehören Möbel, Kartons, Haushaltsgeräte, Lampen und persönliche Gegenstände. Je nach Bedarf übernehmen wir auch Demontage, fachgerechte Verpackung, Möbelmontage und die Entsorgung nicht mehr benötigter Gegenstände. Ob 1.5-Zimmer-Wohnung in der Länggasse, 4.5-Zimmer-Wohnung in Köniz oder Einfamilienhaus in Ostermundigen – wir passen unser Team und unsere Fahrzeuge an Ihr Umzugsvolumen an.

## Unsere Privatumzug-Leistungen im Detail

**Besichtigung und Offerte:** Vor jedem Umzug führen wir eine kostenlose Besichtigung durch – vor Ort oder per Video. So erfassen wir Stockwerk, Liftverhältnisse, Zugangswege und das genaue Volumen. Wir melden uns innerhalb von 24 Stunden bei Ihnen und erstellen daraufhin eine transparente, unverbindliche Offerte ohne versteckte Kosten.

**Verpackung und Schutz:** Auf Wunsch verpacken wir Ihr gesamtes Inventar professionell. Möbel werden mit Decken und Folie geschützt, empfindliche Gegenstände wie Spiegel, Bilder und Geschirr separat gesichert. Standard-Umzugsmaterial wie Kartons, Klebeband und Luftpolsterfolie stellen wir bereit.

**Demontage und Montage:** Betten, Schränke, Regale und Tische werden fachgerecht demontiert und am Zielort wieder aufgebaut. So sparen Sie Zeit und vermeiden Beschädigungen durch unsachgemässes Handling.

**Transport und Logistik:** Unser moderner Fahrzeugpark reicht von Transportern für kleine Wohnungen bis zu grossen Umzugswagen mit Hebebühne. Wir planen die Route effizient und koordinieren Parkplätze sowie Halteverbotszonen – besonders wichtig in der Berner Altstadt und in dicht bebauten Quartieren.

## So läuft Ihr Privatumzug in Bern ab

1. **Anfrage stellen:** Kontaktieren Sie uns telefonisch, per E-Mail oder über unser Online-Formular. Wir besprechen Ihren Umzugstermin, die Wohnungsgrösse und besondere Anforderungen.
2. **Besichtigung:** Wir besichtigen Auszugs- und Einzugsobjekt und erstellen eine detaillierte Offerte.
3. **Buchung:** Nach Ihrer Zusage reservieren wir den Termin und planen Teamgrösse, Fahrzeug und Material.
4. **Umzugstag:** Unser Team trifft pünktlich ein, schützt Böden und Treppen, lädt sorgfältig und transportiert alles zum Ziel.
5. **Einzug:** Möbel werden aufgebaut, Kartons an den gewünschten Orten abgestellt. Sie prüfen das Ergebnis – wir sind erst fertig, wenn Sie zufrieden sind.

## Preisübersicht Privatumzug Bern

| Wohnungsgrösse | Geschätzte Kosten |
|---|---|
| 1.5-Zimmer (30–40 m²) | CHF 800 – 1'500 |
| 2.5-Zimmer (50–65 m²) | CHF 1'200 – 2'200 |
| 3.5-Zimmer (70–85 m²) | CHF 1'800 – 3'000 |
| 4.5-Zimmer (90–110 m²) | CHF 2'500 – 4'000 |
| Einfamilienhaus | CHF 3'500 – 7'000 |

Die genauen Kosten hängen von Volumen, Stockwerk, Lift, Distanz und Zusatzleistungen ab. Umzüge ohne Lift, in der Altstadt oder an Wochenenden können höher liegen. Wir empfehlen, mehrere Offerten zu vergleichen – unsere Preise sind fair kalkuliert und transparent.

## Besonderheiten beim Umzug in Bern

Bern hat als UNESCO-Weltkulturerbe-Stadt einige Besonderheiten: enge Gassen in der Altstadt, steile Treppenhäuser ohne Lift, eingeschränkte Zufahrtsmöglichkeiten und Parkregelungen. Unser Team kennt diese Gegebenheiten aus jahrelanger Praxis. Wir beantragen bei Bedarf Halteverbotszonen, koordinieren Umzugsfenster mit der Verwaltung und setzen erfahrenes Personal für schwierige Zugänge ein.

Auch in den Aussenquartieren wie Bümpliz, Breitenrain, Kirchenfeld oder Beundenfeld sind wir regelmässig im Einsatz. Für Umzüge ins Berner Oberland (Thun, Interlaken, Spiez) oder in andere Kantone planen wir die Logistik schweizweit.

## Für wen eignet sich unser Privatumzug?

- **Singles und Paare** mit kleiner bis mittlerer Wohnung
- **Familien** mit Kindern und grösserem Haushalt
- **Senioren**, die Unterstützung beim Downsizing oder Umzug ins Pflegeheim brauchen
- **Expats und Zuzüger**, die neu in Bern ankommen
- **Studierende**, die ihr Zimmer oder ihre WG wechseln

Egal ob Erstwohnung, Wohnungswechsel innerhalb Berns oder Umzug von Zürich, Basel oder Deutschland nach Bern – wir begleiten Sie persönlich und zuverlässig.

## Warum Umzug Bern als Ihr Privatumzugspartner?

Als lokales Unternehmen mit Sitz in Bern (Riedbachstrasse 51, 3027 Bern) sind wir schnell vor Ort, kennen die Region und sprechen Ihre Sprache. Kein anonymer Callcenter-Umzug aus der Ferne, sondern ein Team, das Bern wirklich kennt. Feste Ansprechpartner, faire Preise, pünktliche Termine und ein freundliches, erfahrenes Umzugsteam – das ist unser Versprechen.`,
    faqs: [
      {
        question: "Was kostet ein Privatumzug in Bern?",
        answer:
          "Die Kosten hängen von Wohnungsgrösse, Stockwerk, Lift und Distanz ab. Eine 2.5-Zimmer-Wohnung kostet typischerweise CHF 1'200–2'200, ein Einfamilienhaus CHF 3'500–7'000. Nach kostenloser Besichtigung erhalten Sie eine verbindliche Offerte ohne versteckte Gebühren.",
      },
      {
        question: "Wie lange dauert ein Privatumzug?",
        answer:
          "Eine 2.5-Zimmer-Wohnung ist in der Regel an einem Tag erledigt – inklusive Beladen, Transport und Entladen. Grössere Haushalte oder Umzüge mit viel Demontage/Montage können 1.5–2 Tage beanspruchen. Wir planen den Zeitrahmen realistisch in der Offerte.",
      },
      {
        question: "Müssen wir selbst verpacken?",
        answer:
          "Nein, das ist optional. Sie können selbst packen und Kosten sparen, oder unser Verpackungsservice nutzen. Viele Kunden packen persönliche Gegenstände selbst und überlassen uns Möbel, Küche und empfindliche Stücke.",
      },
      {
        question: "Ist der Umzug versichert?",
        answer:
          "Ja, alle unsere Privatumzüge sind durch eine Transportversicherung abgedeckt. Schäden am Inventar während des Transports sind versichert. Details besprechen wir transparent in der Offerte.",
      },
      {
        question: "Wie weit im Voraus sollte ich buchen?",
        answer:
          "Idealerweise 4–6 Wochen vor dem Umzugstermin, besonders in der Hochsaison (Mai–September) und an Monatsenden. Kurzfristige Termine sind nach Verfügbarkeit oft möglich – fragen Sie uns einfach an.",
      },
      {
        question: "Können Sie auch Umzüge in der Berner Altstadt durchführen?",
        answer:
          "Ja, die Altstadt gehört zu unseren häufigsten Einsatzgebieten. Wir kennen die Zugänge, beantragen Halteverbotszonen und setzen Personal mit Erfahrung in engen Treppenhäusern ein. Bewilligungen und Zeitfenster klären wir mit Ihnen vorab.",
      },
    ],
    icon: "home",
  },
  {
    slug: "geschaeftsumzug",
    title: "Geschäftsumzug Bern",
    shortTitle: "Geschäftsumzug",
    description:
      "Ob interner Umzug oder kompletter Standortwechsel – wir minimieren Ausfallzeiten und sorgen für einen reibungslosen Firmenumzug in Bern.",
    longDescription:
      "Ein Geschäftsumzug erfordert präzise Planung und koordiniertes Vorgehen. Wir übernehmen den Umzug Ihrer Büroeinrichtung, IT-Infrastruktur und sensiblen Dokumente. Dank effektiver Projektplanung halten wir Ihre Betriebsunterbrechung auf ein Minimum.",
    features: [
      "Projektleitung und Zeitplan",
      "IT-Equipment Transport",
      "Wochenend- und Nachtumzüge",
      "Datenschutzkonforme Aktenvernichtung",
      "Einrichtung am neuen Standort",
    ],
    highlights: [
      "Büroumzug",
      "KMU",
      "IT-Transport",
      "Nachtumzug",
      "Aktenarchiv",
    ],
    keywords: [
      "geschäftsumzug bern",
      "büroumzug bern",
      "firmenumzug bern",
      "umzug büro bern",
      "unternehmensumzug schweiz",
      "büroumzugsfirma bern",
    ],
    content: `Ein **Geschäftsumzug in Bern** ist deutlich komplexer als ein Privatumzug: Es geht nicht nur um Möbel, sondern um Arbeitsplätze, IT-Infrastruktur, Kundendaten, Vertraulichkeit und minimale Betriebsunterbrechung. Ob KMU in der Länggasse, Anwaltskanzlei am Bundesplatz oder Produktionsbetrieb im Industriegebiet – Umzug Bern plant und führt Firmenumzüge strukturiert und termingerecht durch.

## Was ist ein Geschäftsumzug?

Ein Geschäftsumzug (auch Büroumzug oder Firmenumzug genannt) umfasst den Umzug aller betriebsrelevanten Güter von einem Standort zum anderen. Dazu gehören Büromöbel, Schränke, Regale, Konferenztische, IT-Hardware, Server, Telefonanlagen, Aktenarchive und oft auch Maschinen oder Spezialausrüstung. Ziel ist es, den Betrieb so schnell wie möglich am neuen Standort wieder aufzunehmen – idealerweise ohne spürbare Ausfallzeit für Kunden und Mitarbeitende.

## Unsere Geschäftsumzug-Leistungen

**Projektleitung und Planung:** Jeder Geschäftsumzug erhält einen festen Ansprechpartner. Wir erstellen einen detaillierten Zeitplan mit Meilensteinen: Inventarisierung, Verpackung, Transport, Aufbau und Inbetriebnahme. Abstimmung mit Facility Management, Vermietern und IT-Dienstleistern inklusive.

**Inventarisierung und Kennzeichnung:** Jedes Möbelstück und jede Kiste wird erfasst und beschriftet. Arbeitsplätze werden dem neuen Grundriss zugeordnet, sodass am Umzugstag alles am richtigen Ort landet.

**IT- und Servertransport:** Computer, Monitore, Server und Netzwerktechnik werden antistatisch verpackt und sicher transportiert. Wir arbeiten mit Ihrer IT-Abteilung oder externen Partnern zusammen, um Kabel, Geräte und Konfigurationen korrekt zu dokumentieren.

**Wochenend- und Nachtumzüge:** Damit Ihr Tagesgeschäft nicht leidet, führen wir viele Geschäftsumzüge ausserhalb der Geschäftszeiten durch – freitags abends, samstags oder in der Nacht. Montagmorgen ist Ihr Team einsatzbereit.

**Akten und Datenschutz:** Vertrauliche Unterlagen und Aktenarchive werden datenschutzkonform transportiert. Auf Wunsch organisieren wir auch die sichere Vernichtung nicht mehr benötigter Dokumente nach DSG und DSGVO.

**Aufbau und Einrichtung:** Am neuen Standort richten wir Arbeitsplätze, Besprechungsräume und Empfangsbereiche gemäss Plan ein. Kabelmanagement und ergonomische Anordnung sind Teil unseres Services.

## Ablauf eines Geschäftsumzugs mit Umzug Bern

1. **Erstgespräch:** Wir analysieren Ihren Bedarf – Anzahl Arbeitsplätze, IT-Umfang, Zeitfenster, besondere Anforderungen.
2. **Begehung:** Besichtigung beider Standorte, Erfassung von Zugängen, Liftkapazitäten und Parkmöglichkeiten.
3. **Projektplan:** Detaillierter Zeitplan mit Ressourcenplanung, Verantwortlichkeiten und Kommunikationsstruktur.
4. **Vorbereitung:** Kennzeichnung, Vorverpackung empfindlicher Güter, Koordination mit IT und Facility.
5. **Umzugsdurchführung:** Strukturierter Transport nach Plan – oft am Wochenende oder über Nacht.
6. **Abschluss:** Aufbau, Funktionsprüfung, Übergabe und Nachbesprechung.

## Für welche Unternehmen wir arbeiten

- **KMU und Start-ups** mit 5–50 Arbeitsplätzen
- **Kanzleien, Treuhänder und Beratungsfirmen** mit sensiblen Akten
- **Arztpraxen und Therapiezentren** mit Spezialmöbeln
- **Gemeinnützige Organisationen und Verwaltungen**
- **Grossunternehmen** mit Teilumzügen oder Abteilungsverlagerungen

Ob interner Umzug innerhalb desselben Gebäudes in Bern oder Standortwechsel von Bern nach Biel, Thun oder Zürich – wir skalieren unser Team entsprechend.

## Kostenfaktoren beim Geschäftsumzug

| Unternehmensgrösse | Geschätzte Kosten |
|---|---|
| Kleines Büro (5–10 Arbeitsplätze) | CHF 2'500 – 5'000 |
| Mittleres Büro (15–30 Arbeitsplätze) | CHF 6'000 – 15'000 |
| Grosses Büro (50+ Arbeitsplätze) | CHF 15'000 – 40'000+ |

Die Kosten variieren stark je nach IT-Aufwand, Spezialtransporten, Stockwerken, Distanz und Zeitfenster (Nacht/Wochenende). Wir erstellen nach Begehung eine detaillierte, positionsbezogene Offerte.

## Minimale Ausfallzeit – unser Fokus

Jede Stunde Betriebsunterbrechung kostet Geld und Vertrauen. Deshalb planen wir Geschäftsumzüge so, dass Ihre Mitarbeitenden möglichst nahtlos weiterarbeiten können. Parallele Teams für Verpackung, Transport und Aufbau, klare Kommunikation und erfahrene Projektleitung sind der Schlüssel. Viele unserer Kunden in Bern sind montags um 8 Uhr am neuen Standort startklar – obwohl der eigentliche Transport am Wochenende stattfand.

## Warum Umzug Bern für Ihren Geschäftsumzug?

Wir sind kein anonymes Franchise, sondern ein etabliertes Bernese Umzugsunternehmen mit Erfahrung in Firmenumzügen im Kanton Bern und der ganzen Schweiz. Diskretion, Zuverlässigkeit und professionelle Projektplanung stehen bei uns an erster Stelle. Feste Ansprechpartner, transparente Offerten und ein eingespieltes Team – damit Ihr Geschäft weiterläuft, während wir den Umzug übernehmen.`,
    faqs: [
      {
        question: "Können Sie einen Geschäftsumzug am Wochenende durchführen?",
        answer:
          "Ja, Wochenend- und Nachtumzüge sind unser Standard bei Firmenumzügen. So ist Ihr Betrieb montags ohne Unterbrechung am neuen Standort einsatzbereit. Wir planen die Ressourcen und Zeitfenster individuell mit Ihnen.",
      },
      {
        question: "Wie wird IT-Equipment transportiert?",
        answer:
          "Computer, Server und Netzwerkgeräte werden antistatisch verpackt und beschriftet. Wir dokumentieren Arbeitsplatz-Zuordnungen und arbeiten mit Ihrer IT-Abteilung zusammen. Auf Wunsch erfolgt der Transport in verschlossenen, gekennzeichneten Containern.",
      },
      {
        question: "Was passiert mit vertraulichen Akten?",
        answer:
          "Akten und vertrauliche Dokumente werden in verschlossenen Behältern transportiert. Auf Wunsch bieten wir datenschutzkonforme Aktenvernichtung für nicht mehr benötigte Unterlagen nach geltendem Schweizer Datenschutzrecht.",
      },
      {
        question: "Wie lange dauert ein Büroumzug?",
        answer:
          "Ein kleines Büro mit 10 Arbeitsplätzen ist oft an einem Wochenende erledigt. Grössere Umzüge mit 30+ Arbeitsplätzen können 2–3 Tage beanspruchen. Wir erstellen einen realistischen Zeitplan in der Projektplanung.",
      },
      {
        question: "Bieten Sie auch Teilumzüge an (nur eine Abteilung)?",
        answer:
          "Ja, wir führen auch Teilumzüge durch – z.B. wenn nur die Marketing-Abteilung in ein anderes Gebäude zieht oder ein Stockwerk umgebaut wird. Der Umfang wird individuell geplant.",
      },
      {
        question: "Wie weit im Voraus sollte ein Geschäftsumzug geplant werden?",
        answer:
          "Für mittlere und grosse Firmenumzüge empfehlen wir 6–12 Wochen Vorlauf. So können IT, Facility, Vermieter und Mitarbeitende rechtzeitig informiert werden. Kleinere Büroumzüge sind oft auch kurzfristiger möglich.",
      },
    ],
    icon: "building",
  },
  {
    slug: "raeumung-entsorgung",
    title: "Räumung & Entsorgung Bern",
    shortTitle: "Räumung/Entsorgung",
    description:
      "Professionelle Wohnungsräumung, Entrümpelung und fachgerechte Entsorgung in Bern und der ganzen Region – schnell, diskret und umweltbewusst.",
    longDescription:
      "Ob Haushaltsauflösung, Kellerentrümpelung oder Büroräumung – wir räumen gründlich und entsorgen fachgerecht. Inklusive Abtransport und sortenreiner Entsorgung.",
    features: [
      "Komplette Haushaltsauflösungen",
      "Keller-, Dachboden- und Garagenräumung",
      "Büro- und Gewerberäumung",
      "Fachgerechte Entsorgung und Recycling",
      "Besenreine Übergabe auf Wunsch",
    ],
    highlights: [
      "Haushaltsauflösung",
      "Entrümpelung",
      "Sperrgutentsorgung",
      "Büroräumung",
      "Recycling",
    ],
    keywords: [
      "räumung bern",
      "entsorgung bern",
      "entrümpelung bern",
      "haushaltsauflösung bern",
      "wohnungsräumung bern",
      "sperrgutentsorgung bern",
    ],
    content: `Manchmal steht nicht ein Umzug an, sondern eine **Räumung oder Entsorgung in Bern** – nach einem Nachlass, bei einer Wohnungsauflösung, vor einer Renovation oder wenn Keller, Dachboden und Garage endlich entrümpelt werden sollen. **Umzug Bern** übernimmt die komplette Räumung: Wir sortieren, transportieren ab und entsorgen fachgerecht – diskret, effizient und umweltbewusst.

## Was umfasst unsere Räumung & Entsorgung?

Unser Räumungsservice in Bern deckt alle Situationen ab, in denen Räume geleert und Gegenstände entsorgt werden müssen. Wir arbeiten strukturiert, respektvoll und mit dem nötigen Feingefühl – besonders bei sensiblen Aufträgen wie Nachlassräumungen.

Typische Räumungsaufträge:
- Haushaltsauflösungen und Wohnungsräumungen
- Nachlass- und Erbschaftsräumungen
- Keller-, Dachboden- und Garagenentrümpelungen
- Büro- und Gewerberäumungen
- Sperrgut- und Möbelentsorgung
- Entrümpelung vor Renovation oder Verkauf

## Unsere Leistungen im Detail

**Komplette Räumung:** Wir leeren Wohnungen, Häuser, Büros und Lagerräume vollständig – inklusive Möbel, Kartons, Geräte und Sperrgut.

**Sortierung und Wiederverwertung:** Brauchbare Gegenstände geben wir an Bedürftige oder Secondhand-Läden weiter. Restmaterial wird sortenrein getrennt und fachgerecht entsorgt.

**Fachgerechte Entsorgung:** Elektrogeräte, Sonderabfälle und Sperrgut entsorgen wir gemäss den geltenden Vorschriften – inklusive Entsorgungsnachweis auf Wunsch.

**Besenreine Übergabe:** Auf Wunsch übergeben wir die geräumten Räume besenrein an Vermieter, Erben oder Käufer – ideal bei Wohnungsübergaben.

**Diskretion und Sorgfalt:** Bei Nachlassräumungen gehen wir respektvoll mit persönlichen Gegenständen um und stimmen wertvolle oder sentimentale Stücke vorab mit Ihnen ab.

## Preisübersicht Räumung Bern

| Räumungsart | Geschätzte Kosten |
|---|---|
| Keller oder Dachboden (klein) | CHF 300 – 600 |
| Einzelzimmer-Entrümpelung | CHF 400 – 800 |
| 2.5–3.5-Zimmer-Wohnung | CHF 800 – 1'800 |
| Komplette Haushaltsauflösung | CHF 1'500 – 4'000 |
| Büro- oder Gewerberäumung | nach Besichtigung |

Die genauen Kosten hängen von Volumen, Zugang, Stockwerk, Lift und Entsorgungsaufwand ab. Nach einer kostenlosen Besichtigung erstellen wir eine transparente Offerte.

## Wann lohnt sich eine professionelle Räumung?

- **Nachlass:** Sie müssen eine Wohnung nach einem Todesfall räumen und haben keine Kapazität dafür.
- **Wohnungsauflösung:** Sie ziehen ins Ausland oder ins Pflegeheim und lassen eine Wohnung zurück.
- **Verkauf:** Die Immobilie soll besenrein übergeben werden.
- **Renovation:** Keller, Dachboden oder Garage blockieren wertvollen Stauraum.
- **Gewerbe:** Büro, Praxis oder Lager muss schnell und termingerecht geräumt werden.

Eine professionelle Räumung spart Zeit, vermeidet Fehlentsorgungen und gibt Ihnen die Sicherheit, dass alles fachgerecht und dokumentiert abgewickelt wird.

## Einsatzgebiet: Bern, Region und Umgebung

Unser Standort in Bern (3027) ist ideal für Räumungen im Kanton Bern: Köniz, Ostermundigen, Biel, Thun, Burgdorf und das gesamte Mittelland. Wir sind schnell vor Ort und kennen die lokalen Entsorgungswege.

## Ablauf Ihrer Räumung

1. **Anfrage:** Sie schildern uns den Umfang – telefonisch, per E-Mail oder über unser Formular.
2. **Besichtigung:** Kostenlose Besichtigung vor Ort – wir erfassen Volumen, Zugang und besondere Anforderungen.
3. **Rückmeldung:** Wir melden uns innerhalb von 24 Stunden bei Ihnen und erstellen eine transparente, unverbindliche Offerte.
4. **Räumung:** Unser Team räumt termingerecht, sortiert brauchbare Gegenstände und transportiert alles ab.
5. **Entsorgung:** Fachgerechte Entsorgung und besenreine Übergabe auf Wunsch.

## Warum Umzug Bern für Ihre Räumung?

Wir kombinieren Umzugsexpertise mit professioneller Entsorgung – ein Team, ein Ansprechpartner, keine Koordination mit mehreren Dienstleistern. Kurze Wege aus Bern, faire Preise und ein erfahrenes Team, das auch in engen Treppenhäusern und Altbauwohnungen effizient arbeitet.`,
    faqs: [
      {
        question: "Was kostet eine Haushaltsauflösung in Bern?",
        answer:
          "Eine komplette Haushaltsauflösung kostet je nach Wohnungsgrösse und Volumen typischerweise CHF 1'500–4'000. Nach einer kostenlosen Besichtigung erhalten Sie eine genaue, unverbindliche Offerte.",
      },
      {
        question: "Entsorgen Sie auch Elektrogeräte und Sonderabfälle?",
        answer:
          "Ja, wir entsorgen Elektrogeräte, Sperrgut und Sonderabfälle fachgerecht gemäss den geltenden Vorschriften. Auf Wunsch stellen wir Entsorgungsnachweise aus.",
      },
      {
        question: "Wie schnell kann eine Räumung durchgeführt werden?",
        answer:
          "Kleinere Räumungen sind oft innerhalb von 2–5 Werktagen möglich. Bei dringenden Terminen – z.B. vor einer Wohnungsübergabe – kontaktieren Sie uns telefonisch.",
      },
      {
        question: "Übernehmen Sie auch Nachlassräumungen?",
        answer:
          "Ja, Nachlass- und Erbschaftsräumungen führen wir diskret und respektvoll durch. Wertvolle oder sentimentale Gegenstände stimmen wir vorab mit Ihnen ab.",
      },
      {
        question: "Räumen Sie auch Keller, Dachboden und Garage?",
        answer:
          "Ja, Keller-, Dachboden- und Garagenentrümpelungen gehören zu unseren häufigsten Aufträgen. Wir transportieren alles ab und entsorgen fachgerecht.",
      },
      {
        question: "Ist eine besenreine Übergabe möglich?",
        answer:
          "Ja, auf Wunsch übergeben wir die geräumten Räume besenrein – ideal bei Wohnungsübergaben an Vermieter oder Käufer.",
      },
    ],
    icon: "truck",
  },
  {
    slug: "reinigung",
    title: "Reinigung Bern",
    shortTitle: "Reinigung",
    description:
      "Professionelle Umzugsreinigung, Endreinigung und Unterhaltsreinigung in Bern – gründlich, termingerecht und mit Abnahmegarantie.",
    longDescription:
      "Ob Wohnungsübergabe, Büroreinigung oder Umzugsreinigung mit Abnahmegarantie – unser Reinigungsteam sorgt für blitzsaubere Räume, wenn es darauf ankommt.",
    features: [
      "Umzugs- und Endreinigung mit Abnahmegarantie",
      "Wohnungs- und Haushaltsreinigung",
      "Büro- und Gewerbereinigung",
      "Fenster- und Küchenreinigung",
      "Kombination mit Umzug und Räumung möglich",
    ],
    highlights: [
      "Abnahmegarantie",
      "Umzugsreinigung",
      "Endreinigung",
      "Büroreinigung",
      "Gründlich",
    ],
    keywords: [
      "reinigung bern",
      "umzugsreinigung bern",
      "endreinigung bern",
      "wohnungsreinigung bern",
      "abnahmegarantie reinigung bern",
      "büroreinigung bern",
    ],
    content: `Nach dem Umzug oder vor der Wohnungsübergabe muss es **blitzsauber** sein – und genau dafür bietet **Umzug Bern** professionelle Reinigungsleistungen in Bern und der ganzen Region. Ob Umzugsreinigung mit Abnahmegarantie, Endreinigung bei Auszug oder regelmässige Unterhaltsreinigung: Unser erfahrenes Team reinigt gründlich, termingerecht und zu fairen Preisen.

## Was umfasst unsere Reinigung?

Unser Reinigungsservice in Bern deckt alle Situationen ab, in denen Räume professionell gereinigt werden müssen – besonders im Zusammenhang mit Umzügen, Wohnungsübergaben und Geschäftsräumen.

Typische Reinigungsaufträge:
- Umzugsreinigung mit Abnahmegarantie
- Endreinigung bei Wohnungsauszug
- Reinigung nach Renovation oder Räumung
- Büro- und Gewerbereinigung
- Fenster- und Storenreinigung
- Küchen- und Badreinigung inklusive Entkalkung

## Unsere Reinigungsleistungen im Detail

**Umzugsreinigung mit Abnahmegarantie:** Wir reinigen Ihre alte Wohnung so gründlich, dass der Vermieter oder die Verwaltung die Abnahme problemlos durchführt. Bei Beanstandungen kommen wir kostenlos nach – das ist unsere Abnahmegarantie.

**Endreinigung:** Alle Räume werden von oben nach unten gereinigt – Böden, Wände, Fenster, Küche, Bad, Schränke innen und aussen, Lichtschalter, Steckdosen und Heizkörper.

**Reinigung nach Räumung:** Nach einer Haushaltsauflösung oder Entrümpelung übernehmen wir die abschliessende Reinigung – ideal in Kombination mit unserer Räumungsleistung aus einer Hand.

**Büroreinigung:** Büros, Praxen und Gewerberäume reinigen wir termingerecht – auch ausserhalb der Geschäftszeiten, damit Ihr Betrieb nicht gestört wird.

**Kombiniert mit Umzug:** Umzug, Räumung und Reinigung aus einer Hand – ein Ansprechpartner, ein Termin, weniger Koordinationsaufwand für Sie.

## Preisübersicht Reinigung Bern

| Reinigungsart | Geschätzte Kosten |
|---|---|
| 1.5–2.5-Zimmer Endreinigung | CHF 450 – 850 |
| 3.5–4.5-Zimmer Endreinigung | CHF 650 – 1'150 |
| 5.5+ Zimmer / Einfamilienhaus | CHF 950 – 1'750 |
| Büroreinigung (nach m²) | ab CHF 4.50/m² |
| Fensterreinigung (Zuschlag) | ab CHF 110 |

Die genauen Kosten hängen von Wohnungsgrösse, Zustand, Stockwerk und Umfang ab. Nach einer Besichtigung erstellen wir eine transparente Offerte.

## Wann lohnt sich eine professionelle Reinigung?

- **Wohnungsübergabe:** Der Vermieter erwartet eine besenreine, gründlich gereinigte Wohnung.
- **Nach dem Umzug:** Sie haben genug mit dem Umzug zu tun – die Endreinigung übernehmen wir.
- **Nach Renovation:** Baustaub und Schmutz nach Umbau oder Sanierung professionell entfernen.
- **Nach Räumung:** Geräumte Wohnungen oder Büros für die Übergabe vorbereiten.
- **Gewerbe:** Büros und Praxen regelmässig oder einmalig reinigen lassen.

Eine professionelle Reinigung spart Zeit, vermeidet Streit bei der Wohnungsabnahme und gibt Ihnen die Sicherheit, dass nichts übersehen wird.

## Einsatzgebiet: Bern und Region

Unser Standort in Bern (3027) ist ideal für Reinigungen im Kanton Bern: Köniz, Ostermundigen, Biel, Thun, Burgdorf und das gesamte Mittelland. Kurze Wege bedeuten flexible Termine – auch kurzfristig vor der Wohnungsübergabe.

## Ablauf Ihrer Reinigung

1. **Anfrage:** Sie schildern uns Wohnungsgrösse, Zustand und Wunschtermin.
2. **Besichtigung:** Bei Bedarf schauen wir uns die Räume vor Ort an.
3. **Rückmeldung:** Wir melden uns innerhalb von 24 Stunden bei Ihnen und erstellen eine transparente, unverbindliche Offerte.
4. **Reinigung:** Unser Team reinigt gründlich nach Checkliste – termingerecht vor Ihrer Übergabe.
5. **Abnahme:** Mit Abnahmegarantie – bei Beanstandungen kommen wir kostenlos nach.

## Warum Umzug Bern für Ihre Reinigung?

Wir kennen die Anforderungen von Vermietern und Verwaltungen in Bern. Unser Team arbeitet mit bewährten Checklisten, umweltfreundlichen Reinigungsmitteln und dem Anspruch, dass Ihre Wohnungsabnahme reibungslos verläuft. Kombinieren Sie Reinigung mit Umzug oder Räumung – alles aus einer Hand.`,
    faqs: [
      {
        question: "Was bedeutet Abnahmegarantie bei der Umzugsreinigung?",
        answer:
          "Mit unserer Abnahmegarantie garantieren wir, dass Ihre Wohnung den Anforderungen des Vermieters entspricht. Sollte bei der Abnahme etwas beanstandet werden, kommen wir kostenlos zur Nachreinigung.",
      },
      {
        question: "Was kostet eine Endreinigung in Bern?",
        answer:
          "Eine Endreinigung für eine 3.5-Zimmer-Wohnung kostet typischerweise CHF 650–1'150, abhängig vom Zustand und Umfang. Nach Besichtigung erhalten Sie eine genaue Offerte.",
      },
      {
        question: "Können Reinigung und Umzug kombiniert werden?",
        answer:
          "Ja, Umzug, Räumung und Reinigung bieten wir aus einer Hand an. So sparen Sie Koordinationsaufwand und haben einen festen Ansprechpartner für alles.",
      },
      {
        question: "Reinigen Sie auch Küche und Bad gründlich?",
        answer:
          "Ja, Küche und Bad gehören zu unserer Endreinigung dazu – inklusive Backofen, Kühlschrank, Entkalkung, Fliesen und Sanitäranlagen.",
      },
      {
        question: "Wie kurzfristig ist eine Reinigung möglich?",
        answer:
          "Bei freien Kapazitäten sind Reinigungen oft innerhalb von 2–5 Werktagen möglich. Für dringende Termine vor der Wohnungsübergabe kontaktieren Sie uns telefonisch.",
      },
      {
        question: "Reinigen Sie auch Büros und Gewerberäume?",
        answer:
          "Ja, wir reinigen Büros, Praxen und Gewerberäume – einmalig oder regelmässig. Termine planen wir auch ausserhalb der Geschäftszeiten.",
      },
    ],
    icon: "home",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
