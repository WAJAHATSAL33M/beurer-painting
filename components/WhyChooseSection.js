const reasons = [
  { title: "Minimal Disruption", description: "We work around your schedule to keep your operations running smoothly and reduce downtime." },
  { title: "Professional Workmanship", description: "Our experienced team delivers clean, consistent, high-quality results on every project." },
  { title: "Project-Focused Planning", description: "We take the time to understand your goals, provide clear planning, and keep your project on track." },
  { title: "Spaces Built to Last", description: "We use professional-grade products and proven techniques to help protect and enhance your property." },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-text-muted">
              <span className="h-px w-8 bg-primary" />
              WHY CHOOSE BAUER
            </div>
            <h2 className="mt-5 max-w-xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              Why commercial properties choose Bauer.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-text-muted">
            Commercial properties have unique needs — and painting is about more than just a new
            coat of paint. It&rsquo;s about planning, professionalism, and making your space work
            better for the people who use it.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="bg-ink p-6 text-white">
              <div className="photo -mx-6 -mt-6 mb-5 aspect-[4/3]" aria-hidden="true">
                {reason.title.toLowerCase()}
              </div>
              <h3 className="font-heading text-lg font-bold">{reason.title}</h3>
              <p className="mt-2 text-sm text-white/70">{reason.description}</p>
              <span className="mt-4 block h-0.5 w-6 bg-primary" />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="relative">
            <div className="photo aspect-[16/9]" aria-hidden="true">
              glass office building exterior, daylight
            </div>
            <p className="absolute bottom-4 left-4 max-w-xs text-xs font-semibold uppercase tracking-widest text-white">
              Well-painted spaces do more than look good.
              <br />
              They help businesses perform better.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-paper-2 p-10">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-text-muted">
              <span className="h-px w-8 bg-primary" />
              A BRIGHTER TOMORROW
            </div>
            <h3 className="mt-4 font-heading text-2xl font-extrabold sm:text-3xl">
              Same commitment. Brighter spaces ahead.
            </h3>
            <p className="mt-3 text-sm text-text-muted">
              From today&rsquo;s projects to tomorrow&rsquo;s possibilities, Bauer Painting helps
              commercial properties create spaces that make a lasting impression.
            </p>
            <a
              href="/quote"
              className="mt-6 inline-flex w-fit items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Request a Quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
