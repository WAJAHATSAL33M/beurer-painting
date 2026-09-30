const columns = [
  {
    title: "Services",
    links: ["Interior Painting", "Exterior Painting", "Special Services", "Epoxy Floor Coatings", "Spray Painting", "Commercial Repaints", "Multiple Services"],
  },
  {
    title: "Industries",
    links: ["Offices", "Retail", "Warehouses & Factories", "Healthcare", "Hotels & Hospitality", "Restaurants", "Schools", "Government Buildings", "Gyms & Sports Facilities", "Places of Worship", "High-Rises"],
  },
  {
    title: "Service Areas",
    links: ["Mississauga", "Toronto", "Oakville", "Burlington", "Hamilton", "Guelph", "Kitchener", "Cambridge", "Milton", "Brampton", "St. Catharines", "Niagara Falls"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Work", "Our Process", "FAQs", "Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)_1fr]">
          <div>
            <div className="font-heading text-2xl font-extrabold">
              BAUER<span className="text-primary">PAINTING</span>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/50">
              Better Spaces. Brighter Tomorrows.
            </p>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Commercial painting solutions that help businesses, buildings, and communities thrive.
            </p>
            <div className="mt-5 flex gap-3">
              {["in", "ig", "f", "yt"].map((icon) => (
                <span
                  key={icon}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <span className="mb-3 block h-[3px] w-6 bg-primary" aria-hidden="true" />
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
                {col.title}
              </h3>
              <ul className="space-y-2 text-sm text-white/75">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <span className="mb-3 block h-[3px] w-6 bg-primary" aria-hidden="true" />
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>905-738-9171</li>
              <li>info@bauerpainting.com</li>
              <li>
                Mississauga, ON
                <br />
                <span className="text-white/50">Serving the Greater Toronto and Hamilton Area</span>
              </li>
            </ul>
            <a
              href="/quote"
              className="mt-5 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Request a Quote →
            </a>
          </div>
        </div>

        <p className="mt-14 max-w-lg text-xs font-semibold uppercase leading-relaxed tracking-widest text-white/30">
          People. Spaces. Businesses. Stronger Tomorrows.
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bauer Painting. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
          </div>
          <p>Built for Better Spaces.</p>
        </div>
      </div>
    </footer>
  );
}
