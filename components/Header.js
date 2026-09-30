import Link from "next/link";

const navItems = [
  { label: "Services", href: "/services", hasSubmenu: true },
  { label: "Industries", href: "/industries", hasSubmenu: true },
  { label: "Service Areas", href: "/service-areas", hasSubmenu: true },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources", hasSubmenu: true },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="font-heading text-2xl font-extrabold leading-none tracking-tight text-white">
          BAUER
          <span className="block text-xs font-bold tracking-[0.35em] text-white/90">PAINTING</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {item.label}
              {item.hasSubmenu && (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="hidden text-white lg:block">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Request a Quote
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
