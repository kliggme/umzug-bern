const testimonials = [
  {
    name: "Rony Grepper",
    text: "Ein Dankeschön an das ganze umzug-bern.ch Team. Absolut einwandfreie Arbeit und freundliche, kompetente Mitarbeiter – wir würden jederzeit wieder buchen.",
  },
  {
    name: "Andrea E.",
    text: "Wir können umzug-bern.ch absolut weiterempfehlen! Vier kräftige und nette Zügelmänner sind pünktlich eingetroffen und haben unseren Umzug professionell und sorgfältig durchgeführt.",
  },
  {
    name: "Tatiana Warkentin",
    text: "Wir hatten von der ersten Beratung bis zum Umzugstag eine absolut fantastische Erfahrung mit umzug-bern.ch! Das Team war durchweg freundlich, zuverlässig und sehr gut organisiert.",
  },
  {
    name: "Milène Huber",
    text: "Speditiv transportiert, gut organisiert, zuvorkommend, gerne wieder!",
  },
  {
    name: "Roger Berdou",
    text: "Sehr freundliches und kompetentes Team, sehr effiziente und sorgfältige Arbeit, Preis-Leistungs-Verhältnis angemessen. Sehr zu empfehlen!",
  },
  {
    name: "Hans Hochstrasser",
    text: "Wir waren sehr zufrieden mit der Arbeit von umzug-bern.ch vertreten durch Aleks und Sergio: Sie waren sehr schnell, sehr sorgfältig, professionell, freundlich und haben alles tipptopp erledigt.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase text-primary">
            Das sagen <span className="text-accent">unsere Kunden</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Authentische Google-Bewertungen von zufriedenen Kunden in Bern und Umgebung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-surface rounded-lg border border-border p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-text-muted italic leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-sm text-text-muted">Google Bewertung</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
