const services = [
  {
    number: "01",
    title: "Interior Painting",
    description: "Professional interior painting for commercial spaces of all sizes and industries.",
    href: "/services/interior-painting",
    items: [
      "Commercial Offices",
      "Retail Interiors",
      "Warehouses & Factories",
      "Healthcare Facilities",
      "Hotels & Hospitality",
      "Restaurants",
      "Schools & Educational",
      "Government Buildings",
      "Gyms & Sports Facilities",
      "Places of Worship",
      "Elevators & Stairwells",
      "Ceiling Painting",
      "Dryfall & Ceiling Decking",
      "Parking Garages",
    ],
  },
  {
    number: "02",
    title: "Exterior Painting",
    description: "Durable exterior painting solutions that protect and elevate your property.",
    href: "/services/exterior-painting",
    items: [
      "Retail Storefronts",
      "Warehouse Siding",
      "Industrial Buildings",
      "Shopping Malls & Plazas",
      "Hotels",
      "Schools & Educational",
      "Healthcare Facilities",
      "Government Buildings",
      "High-Rises",
      "Metal Siding & Gutters",
      "Brick & Masonry",
      "Structural Steel",
      "Waterproof Coatings",
      "Exterior Trim",
      "Heat Reflective Roof Coatings",
    ],
  },
  {
    number: "03",
    title: "Special Services",
    description: "Advanced painting and coating solutions for unique commercial needs.",
    href: "/services/special-services",
    items: [
      "Spray Painting Services",
      "Services for Property Managers",
      "Eco-Friendly Painting Services",
      "Epoxy Floor Coatings",
      "High-Durability Coatings",
      "Multi-Unit & Strata Painting",
      "Pressure Washing & Surface Preparation",
      "Anti-Graffiti Coatings",
    ],
  },
];

const bottomStats = [
  { value: "1000+", label: "Projects Completed" },
  { value: "24+", label: "Years of Experience" },
  { value: "11", label: "Service Areas" },
];

export default function ServicesSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-text-muted">
              <span className="h-px w-8 bg-primary" />
              WHAT WE DO
            </div>
            <h2 className="mt-5 max-w-xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              One painting partner. Every surface that matters.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-text-muted">
              From interior spaces to exterior structures and specialized coatings, Bauer Painting
              delivers high-quality solutions for every commercial environment.
            </p>
            <a href="/services" className="mt-3 inline-block text-sm font-semibold text-primary hover:text-primary-dark">
              Explore All Services →
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col bg-ink text-white">
              <div className="photo aspect-[4/3]" aria-hidden="true">
                {service.title.toLowerCase()} — representative project photo
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold text-white/50">{service.number}</div>
                <h3 className="mt-2 font-heading text-2xl font-extrabold uppercase">{service.title}</h3>
                <p className="mt-2 text-sm text-white/70">{service.description}</p>
                <div className="mt-5 grid flex-1 grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-white/60">
                  {service.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
                <a
                  href={service.href}
                  className="mt-6 text-xs font-semibold uppercase tracking-wide text-primary hover:text-white"
                >
                  Explore {service.title.split(" ")[0]} Services →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Different spaces.
            <br />A stronger tomorrow.
          </p>
          <div className="flex flex-wrap gap-10">
            {bottomStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-extrabold">{stat.value}</div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Request a Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
