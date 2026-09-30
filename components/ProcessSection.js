const steps = [
  {
    number: "01",
    title: "Plan",
    summary: "Understand your goals. Build the right plan.",
    items: ["Site assessment", "Understand requirements", "Detailed project planning"],
  },
  {
    number: "02",
    title: "Prepare",
    summary: "Set the stage for a smooth and efficient project.",
    items: ["Surface preparation", "Protect surrounding areas", "Ensure a safe work environment"],
  },
  {
    number: "03",
    title: "Execute",
    summary: "Deliver high-quality work with minimal disruption.",
    items: ["Professional application", "Efficient project management", "Regular communication"],
  },
  {
    number: "04",
    title: "Complete",
    summary: "A finished space, ready for what's next.",
    items: ["Final walkthrough", "Quality inspection", "On-time project completion"],
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-text-muted">
              <span className="h-px w-8 bg-primary" />
              HOW WE WORK
            </div>
            <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              A clear process for better results.
            </h2>
            <p className="mt-4 max-w-md text-text-muted">
              From planning to final walkthrough, we keep your project on track with clear
              communication, professional execution, and a focus on quality at every stage.
            </p>
          </div>
          <div className="photo aspect-[16/9]" aria-hidden="true">
            close-up of roller applying paint to concrete wall
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-xl font-bold text-text-muted/50">{step.number}</span>
                <h3 className="font-heading text-lg font-bold">{step.title}</h3>
              </div>
              <p className="mt-1 text-sm text-text-muted">{step.summary}</p>
              <div className="photo mt-4 aspect-[4/3]" aria-hidden="true">
                {step.title.toLowerCase()} step photo
              </div>
              <ul className="mt-3 space-y-1.5 bg-ink p-4 text-xs text-white/80">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden bg-ink text-white">
          <div className="photo absolute inset-0 opacity-40" aria-hidden="true">
            glass office exterior, low angle
          </div>
          <div className="relative flex flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <blockquote className="max-w-lg font-heading text-2xl font-semibold italic">
              <span className="mr-1 text-primary">&ldquo;</span>
              A well-managed project leads to spaces that work harder for your business.
            </blockquote>
            <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-white/70">
              Built for
              <br />
              what&rsquo;s next.
            </p>
            <a
              href="/quote"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
