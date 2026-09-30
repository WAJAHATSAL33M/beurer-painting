const pillars = [
  {
    number: "01",
    title: "Smart Planning",
    description:
      "Detailed planning to keep projects on schedule and minimize disruption to your business.",
  },
  {
    number: "02",
    title: "Total Reliability",
    description: "A team you can count on to show up, communicate clearly, and get the job done right.",
  },
  {
    number: "03",
    title: "Quality Workmanship",
    description: "High-quality finishes that enhance and protect your property for the long term.",
  },
  {
    number: "04",
    title: "Built Around Budgets",
    description: "Efficient execution and practical solutions that deliver exceptional value.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <div>
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-text-muted">
            <span className="h-px w-8 bg-primary" />
            BUILT FOR COMMERCIAL PROJECTS
          </div>
          <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            Painting is the finish. Planning is what makes the project work.
          </h2>
          <p className="mt-6 max-w-lg text-text-muted">
            Since 2001, Bauer Painting has focused on smart, efficient planning, total reliability,
            and a commitment to surpassing our clients&rsquo; expectations. We deliver high-quality
            commercial painting that meets timelines, budgets, and the highest standards.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Our Story →
            </a>
            <button className="flex items-center gap-3 text-sm font-semibold text-text">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-text/30">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 1l9 5-9 5V1z" fill="currentColor" />
                </svg>
              </span>
              Watch How We Work
              <span className="block text-xs font-normal text-text-muted">2 Minute Video</span>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="photo aspect-[4/3] w-full" aria-hidden="true">
            painter applying roller to interior wall, natural light
          </div>
          <div className="absolute -bottom-6 -right-6 hidden bg-ink px-6 py-5 text-white sm:block">
            <div className="text-xs uppercase tracking-widest text-white/60">Est.</div>
            <div className="font-heading text-4xl font-extrabold">2001</div>
            <div className="mt-1 max-w-[10rem] text-xs text-white/70">
              Serving commercial clients for over 24 years
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-paper-2/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {pillars.map((pillar) => (
            <div key={pillar.number}>
              <div className="font-heading text-2xl font-bold text-text-muted/60">{pillar.number}</div>
              <h3 className="mt-3 font-heading text-lg font-bold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <blockquote className="max-w-2xl font-heading text-2xl font-semibold italic sm:text-3xl">
            <span className="mr-1 text-primary">&ldquo;</span>
            We don&rsquo;t just paint buildings. We help businesses create better spaces.
          </blockquote>
          <p className="whitespace-nowrap text-sm uppercase tracking-widest text-white/70">
            Commercial Spaces.
            <br />
            Brighter Tomorrows.
          </p>
        </div>
      </div>
    </section>
  );
}
