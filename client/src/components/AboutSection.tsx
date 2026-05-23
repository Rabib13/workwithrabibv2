const interests = [
  "Psychology & behavioral science",
  "Capital markets & investing",
  "Netflix documentaries",
  "Cooking & trying new recipes",
  "Pickleball & tennis",
  "Hiking",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-4">
              Outside of Work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              The Person Behind the Programs
            </h2>
            <p className="text-lg text-foreground/85 leading-relaxed">
              When I'm not managing programs, I enjoy reading psychology books, following capital markets, watching Netflix documentaries, trying out new recipes, and playing pickleball, tennis, or hiking.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Views expressed here are my own.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-6">
              Interests
            </p>
            <ul className="space-y-4">
              {interests.map((interest) => (
                <li key={interest} className="flex items-center gap-3 text-foreground/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
