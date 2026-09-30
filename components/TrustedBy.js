const clients = ["Scotiabank", "Loblaw", "Tim Hortons", "Costco Wholesale", "Sheraton"];

export default function TrustedBy() {
  return (
    <section className="border-b border-border bg-paper-2/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-4 px-6 py-6 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
          Trusted by
          <br />
          Leading Businesses
        </p>
        <ul className="flex flex-1 flex-wrap items-center gap-x-10 gap-y-3">
          {clients.map((name) => (
            <li key={name} className="font-heading text-base font-bold text-text/70">
              {name}
            </li>
          ))}
        </ul>
        <a href="/our-work" className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-text hover:text-primary">
          And Many More →
        </a>
      </div>
    </section>
  );
}
