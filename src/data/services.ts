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
      "Versicherungsschutz inklusive",
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

**Besichtigung und Offerte:** Vor jedem Umzug führen wir eine kostenlose Besichtigung durch – vor Ort oder per Video. So erfassen wir Stockwerk, Liftverhältnisse, Zugangswege und das genaue Volumen. Sie erhalten innerhalb von 24 Stunden eine transparente, unverbindliche Offerte ohne versteckte Kosten.

**Verpackung und Schutz:** Auf Wunsch verpacken wir Ihr gesamtes Inventar professionell. Möbel werden mit Decken und Folie geschützt, empfindliche Gegenstände wie Spiegel, Bilder und Geschirr separat gesichert. Standard-Umzugsmaterial wie Kartons, Klebeband und Luftpolsterfolie stellen wir bereit.

**Demontage und Montage:** Betten, Schränke, Regale und Tische werden fachgerecht demontiert und am Zielort wieder aufgebaut. So sparen Sie Zeit und vermeiden Beschädigungen durch unsachgemässes Handling.

**Transport und Logistik:** Unser moderner Fahrzeugpark reicht von Transportern für kleine Wohnungen bis zu grossen Umzugswagen mit Hebebühne. Wir planen die Route effizient und koordinieren Parkplätze sowie Halteverbotszonen – besonders wichtig in der Berner Altstadt und in dicht bebauten Quartieren.

**Versicherung:** Alle Umzüge sind durch unsere Transportversicherung abgedeckt. Schäden sind ausgeschlossen, nicht nur unwahrscheinlich – Sie sind abgesichert.

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
    slug: "transport",
    title: "Transport Bern",
    shortTitle: "Transport",
    description:
      "Termingenaue Transporte in der ganzen Schweiz – von Bern aus zuverlässig von Tür zu Tür für Möbel, Geräte und Spezialgüter.",
    longDescription:
      "Neben klassischen Umzügen bieten wir professionelle Transportdienstleistungen für Möbel, Geräte und Spezialgüter. Durch optimierte Tourenplanung sparen wir Zeit und Kosten.",
    features: [
      "Schweizweite Lieferungen",
      "Spezialtransporte für empfindliche Güter",
      "Express- und Same-Day-Service",
      "Tracking und Terminbestätigung",
      "Hebebühne und Tragetechnik",
    ],
    highlights: [
      "Möbeltransport",
      "Einzelstücke",
      "Express",
      "Spezialgüter",
      "Schweizweit",
    ],
    keywords: [
      "transport bern",
      "möbeltransport bern",
      "transportdienst bern",
      "möbellieferung bern",
      "transport schweiz",
      "einzeltransport bern",
    ],
    content: `Nicht jeder Transport ist ein kompletter Umzug. Manchmal brauchen Sie nur ein Sofa von tutti.ch abzuholen, ein Klavier zu transportieren, Möbel aus dem Möbelhaus nach Hause zu liefern oder Paletten schweizweit zu versenden. **Umzug Bern** bietet professionelle Transportdienstleistungen von Tür zu Tür – termingerecht, versichert und mit dem richtigen Equipment für jedes Gut.

## Was umfasst unser Transport-Service?

Unser Transport-Service in Bern deckt alles ab, was zu schwer, zu sperrig oder zu empfindlich für den Privattransport ist. Wir holen ab, transportieren sicher und liefern am Zielort ab – in der Wohnung, im Büro oder im Lager. Kein Stress mit Mietwagen, keine Kratzer an der Wand, kein Rätselraten ob das Sofa durch die Tür passt.

Typische Transportaufträge:
- Möbelkauf-Abholung (IKEA, Pfister, lokale Möbelhäuser)
- Einzelstücke: Sofa, Schrank, Bett, Waschmaschine
- Klavier- und Flügeltransport
- Antiquitäten und Kunstgegenstände
- Büroausstattung und Maschinen
- Haushaltsauflösungen und Sperrgutentsorgung
- Schweizweite Lieferungen und Express-Sendungen

## Unsere Transport-Leistungen im Detail

**Tür-zu-Tür-Service:** Wir holen an der angegebenen Adresse ab und liefern an der Zieladresse – inklusive Tragen bis zum gewünschten Raum, nicht nur bis zur Haustür.

**Spezialtransporte:** Empfindliche Güter wie Klaviere, Glasvitrinen, Kunstwerke oder medizinische Geräte werden mit Spezialverpackung und geschultem Personal transportiert. Hebebühne und Tragegurte sind bei uns Standard.

**Express und Same-Day:** Dringende Transporte? Nach Verfügbarkeit bieten wir Express-Lieferungen innerhalb von Bern und der Region sowie Same-Day-Transporte schweizweit an.

**Versicherung und Sicherheit:** Alle Transporte sind versichert. Ladungssicherung, Schutzdecken und professionelle Verpackung gehören zum Standard – Ihre Güter kommen unbeschädigt an.

**Tracking und Kommunikation:** Sie erhalten eine Terminbestätigung mit Zeitfenster. Unser Fahrer meldet sich vor Ankunft – keine stundenlangen Wartezeiten ohne Information.

## Preisübersicht Transport Bern

| Transportart | Geschätzte Kosten |
|---|---|
| Einzelmöbel innerhalb Bern | CHF 120 – 300 |
| Möbelset (3–5 Stück) innerhalb Bern | CHF 350 – 700 |
| Klaviertransport innerhalb Region | CHF 400 – 800 |
| Transport Bern – Zürich/Basel | CHF 450 – 900 |
| Express Same-Day (nach Aufwand) | ab CHF 250 |

Die genauen Kosten hängen von Gewicht, Volumen, Stockwerk, Lift und Distanz ab. Für Einzeltransporte erstellen wir schnelle, unkomplizierte Offerten – oft noch am selben Tag.

## Wann lohnt sich ein professioneller Transport?

- **Möbelkauf:** Das neue Regal passt nicht in den Kombi, und die Parkgarage hat enge Kurven.
- **Online-Käufe:** Sie haben etwas auf Ricardo oder tutti.ch gefunden – wir holen ab und liefern.
- **Renovation:** Möbel müssen kurzfristig ausgelagert oder in eine andere Wohnung gebracht werden.
- **Haushaltsauflösung:** Nachlass, Wohnungsauflösung oder Entrümpelung – wir transportieren und entsorgen.
- **Firmenlogistik:** Büromöbel, IT-Geräte oder Maschinenteile zwischen Standorten.

Ein professioneller Transport spart Zeit, vermeidet Schäden an Möbeln und Gebäuden und ist oft günstiger als ein Mietwagen plus zwei helfende Freunde plus Muskelkater.

## Einsatzgebiet: Bern, Region und Schweiz

Unser Standort in Bern (3027) ist ideal für Transporte im Kanton Bern: Köniz, Ostermundigen, Biel, Thun, Burgdorf und das gesamte Mittelland. Gleichzeitig fahren wir regelmässig schweizweit – Zürich, Basel, Luzern, Genf und alle Kantone. Durch optimierte Tourenplanung halten wir auch Ferntransporte wirtschaftlich.

## Equipment und Fahrzeugpark

- Transporter und Umzugswagen in verschiedenen Grössen
- Hebebühne für schwere Güter und höhere Stockwerke
- Tragegurte, Möbelroller und Schutzdecken
- Spezialverpackung für empfindliche Güter
- Geschultes, versichertes Transportpersonal

## Warum Umzug Bern für Ihre Transporte?

Wir sind nicht nur Umzugsfirma, sondern auch Ihr lokaler Transportpartner in Bern. Kurze Wege, schnelle Reaktionszeiten, faire Preise und ein Team, das weiss wie man ein Klavier die Treppe hinunterträgt ohne Kratzer an Geländer und Flügel. Egal ob einzelnes Bürostuhl oder komplette Haushaltsauflösung – wir liefern zuverlässig.`,
    faqs: [
      {
        question: "Können Sie ein einzelnes Möbelstück transportieren?",
        answer:
          "Ja, Einzeltransporte sind einer unserer häufigsten Aufträge. Ob Sofa, Schrank, Waschmaschine oder Bett – wir holen ab und liefern an. Kein Mindestvolumen nötig.",
      },
      {
        question: "Bieten Sie Klaviertransport an?",
        answer:
          "Ja, Klavier- und Flügeltransporte führen wir mit Spezialausrüstung und erfahrenem Personal durch. Wir klären vorab Zugang, Stockwerk und Gewicht und planen das passende Team.",
      },
      {
        question: "Wie schnell kann ein Transport gebucht werden?",
        answer:
          "Einfache Transporte innerhalb Berns sind oft innerhalb von 24–48 Stunden möglich. Express- und Same-Day-Transporte nach Verfügbarkeit. Kontaktieren Sie uns telefonisch für dringende Anfragen.",
      },
      {
        question: "Transportieren Sie auch schweizweit?",
        answer:
          "Ja, wir fahren in alle Kantone der Schweiz. Bern–Zürich, Bern–Basel oder Bern–Genf sind regelmässige Strecken. Ferntransporte planen wir mit fixem Zeitfenster und transparenter Offerte.",
      },
      {
        question: "Was kostet ein Möbeltransport in Bern?",
        answer:
          "Ein einzelnes Möbelstück innerhalb Berns kostet typischerweise CHF 120–300, abhängig von Grösse, Gewicht und Stockwerk. Grössere Aufträge oder Fernfahrten werden individuell kalkuliert.",
      },
      {
        question: "Ist der Transport versichert?",
        answer:
          "Ja, alle Transporte sind durch unsere Transportversicherung abgedeckt. Schäden während des Transports sind versichert. Wir behandeln Ihre Güter mit professionellem Schutzmaterial.",
      },
    ],
    icon: "truck",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
