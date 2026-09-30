const stats = [
  { value: "24+", label: "Years of Experience" },
  { value: "1000+", label: "Projects Completed" },
  { value: "100%", label: "Client Focused" },
  { value: "11", label: "Service Areas" },
];

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Special Services",
  "Multiple Services",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background photo placeholder — swap for a real building/crew photo */}
      <div className="photo absolute inset-0" aria-hidden="true">
        hero photo — commercial building facade with painting crew
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10 lg:pt-44">
        <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/80">
          <span className="h-px w-8 bg-primary" />
          COMMERCIAL PAINTING EXPERTS SINCE 2001
        </div>

        <h1 className="mt-6 max-w-3xl font-heading text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
          Spaces that work harder<span className="text-primary">.</span>
        </h1>

        <p className="mt-6 max-w-md text-lg text-white/85">
          High-quality commercial painting for a stronger, cleaner and more professional tomorrow.
        </p>

        {/* Find Your Painting Service */}
        <div className="mt-10 max-w-3xl bg-white/95 p-6 text-ink shadow-2xl backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-heading text-lg font-bold">Find Your Painting Service</h2>
            <p className="text-xs text-text-muted">Enter your postal code to get started.</p>
          </div>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="service">Select a service</label>
            <select
              id="service"
              className="flex-1 border border-border bg-white px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue=""
            >
              <option value="" disabled>Select a Service</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <label className="sr-only" htmlFor="postal">Postal code</label>
            <input
              id="postal"
              type="text"
              placeholder="Enter Postal Code (e.g. L5B 2C9)"
              className="flex-1 border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Find Service
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
          <p className="mt-3 text-xs text-text-muted">
            Serving Mississauga, Toronto, Oakville, Burlington, Hamilton and more.
          </p>
        </div>

        {/* Stats */}
        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-3xl font-extrabold sm:text-4xl">{stat.value}</dd>
              <div className="mt-1 text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
