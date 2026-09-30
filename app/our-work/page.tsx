import Link from "next/link";
import { COMPANY } from "@/lib/locations";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGrid, { type Project } from "@/components/ProjectGrid";

export const metadata = {
  title: "Our Work | Bauer Painting",
  description:
    "Explore commercial painting projects across interiors, exteriors, and specialized applications throughout the Greater Toronto Area.",
};

/* ---------- shared bits (matches app/about/page.tsx) ---------- */
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const icons: Record<string, ReactNode> = {
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  hat: <><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" /></>,
  building: <path d="M6 21V4h12v17M3 21h18M10 8h1M13 8h1M10 12h1M13 12h1M10 16h4" />,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 3-6 6-6s6 2 6 6M16 5a3 3 0 0 1 0 6M18 14c2 .8 3 3 3 6" /></>,
  roller: <><rect x="4" y="3" width="14" height="6" rx="1.5" /><path d="M18 6h2v5h-8v4M12 15v6" /></>,
  home: <path d="M4 11l8-7 8 7M6 9.5V20h12V9.5" />,
  layers: <><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5M3 8l9 5 9-5" /></>,
  chat: <><path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><path d="M19 9h1a2 2 0 0 1 2 2v6l-3-2h-4" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M9 12h6M9 16h6M9 8h3" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  checkc: <><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.3 2.3L16 10" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
};
const Icon = ({ n, size = 24 }: { n: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...P} aria-hidden>{icons[n]}</svg>
);

const pad = "px-6 lg:px-[max(2.5rem,calc((100vw-1240px)/2))]";
const H = "font-heading font-extrabold tracking-[-0.02em] text-bauer-ink leading-[1.08]";
const Dot = () => <span className="text-[var(--acc)]">.</span>;

const Eyebrow = ({ n, label }: { n: string; label: string }) => (
  <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.14em] uppercase text-bauer-lav">
    <span className="w-6 h-px bg-[var(--acc)]" />
    {n}
    <span className="text-gray-300">|</span>
    {label}
  </p>
);

const Brand = () => <p className="mt-6 text-[13px] font-bold tracking-wide text-bauer-lav">BAUER PAINTING</p>;

/* ---------- page data ---------- */
const projects: Project[] = [
  { id: "work1", img: "/home/work1.jpg", title: "Corporate Office Renovation", location: "Mississauga, ON", category: "Commercial Office", tags: ["Interior", "Commercial"] },
  { id: "work2", img: "/home/work2.jpg", title: "Industrial Facility", location: "Burlington, ON", category: "Exterior Painting", tags: ["Exterior", "Industrial"] },
  { id: "work3", img: "/home/work3.jpg", title: "Healthcare Facility", location: "Hamilton, ON", category: "Interior Painting", tags: ["Interior", "Commercial"] },
  { id: "work4", img: "/home/work4.jpg", title: "Retail Storefront", location: "Oakville, ON", category: "Commercial Interior", tags: ["Interior", "Commercial"] },
  { id: "work5", img: "/home/work5.jpg", title: "Warehouse Facility", location: "Toronto, ON", category: "High-Durability Coatings", tags: ["Industrial", "Coatings"] },
];

const industries = [
  ["building", "Commercial Offices"],
  ["home", "Retail Interiors"],
  ["layers", "Warehouses & Factories"],
  ["shield", "Healthcare Facilities"],
  ["users", "Hotels & Hospitality"],
  ["building", "High-Rises"],
] as const;

const serviceCards = [
  ["roller", "Interior Painting", "Offices, retail, healthcare, schools, and more."],
  ["home", "Exterior Painting", "Buildings, facades, siding, masonry, and more."],
  ["layers", "Special Services", "High-durability coatings, spray painting, and more."],
] as const;

const approach = [
  ["chat", "Understand", "We start by understanding your property, project requirements, goals, and any unique challenges."],
  ["doc", "Plan", "We develop a detailed plan, including scope, preparation, scheduling, and operating conditions."],
  ["roller", "Execute", "Our experienced team carries out the work with proper preparation and attention to detail."],
  ["checkc", "Complete", "A final walkthrough and quality inspection so the space is ready for what's next."],
];

export default function OurWork() {
  return (
    <main>
      <Header />

      {/* 1 — Hero */}
      <section className="bg-[#0D1B2A] text-white reveal">
        <div className={`${pad} py-16 lg:py-20`}>
          <Eyebrow n="01" label="Our Work" />
          <p className="mt-6 text-[13px] font-bold tracking-wide text-white/60">BAUER PAINTING</p>
          <h1 className={`${H} text-white mt-3 text-[clamp(36px,4.6vw,60px)] max-w-3xl`}>
            Work That Speaks for Itself<Dot />
          </h1>
          <p className="mt-6 text-[16px] text-white/70 leading-relaxed max-w-xl">
            From modern office spaces to large-scale industrial facilities, our work reflects a commitment to
            quality, precision, and professional results across the Greater Toronto Area.
          </p>
        </div>
      </section>

      {/* 2 — Featured projects (filterable grid) */}
      <section className={`${pad} py-16 lg:py-20 bg-white reveal`}>
        <Eyebrow n="02" label="Featured Projects" />
        <h2 className={`${H} mt-3 text-[clamp(30px,3.4vw,46px)] max-w-2xl`}>Projects Across Every Commercial Space<Dot /></h2>
        <p className="mt-5 text-[16px] text-bauer-lav leading-relaxed max-w-xl">
          Browse recent work by category, or explore everything we&apos;ve completed across offices, retail,
          healthcare, and industrial properties.
        </p>
        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </section>

      {/* 3 — Work across commercial spaces */}
      <section className="bg-[#F8F8F9] reveal">
        <div className={`${pad} py-16`}>
          <Eyebrow n="03" label="Work Across Commercial Spaces" />
          <Brand />
          <h2 className={`${H} mt-3 text-[clamp(30px,3.4vw,46px)] max-w-2xl`}>
            Every Industry. The Same Standard<Dot />
          </h2>
          <p className="mt-5 text-[16px] text-bauer-lav leading-relaxed max-w-xl">
            No matter the property type, our approach stays consistent — quality workmanship, efficient
            execution, and spaces that make a lasting impression.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 reveal-group">
            {industries.map(([ic, t]) => (
              <div key={t} className="reveal-item bg-white border border-gray-200 rounded p-5 text-center hover:border-[var(--acc)] transition-colors">
                <span className="text-[var(--acc)] flex justify-center"><Icon n={ic} size={26} /></span>
                <p className="mt-3 text-[13px] font-semibold text-bauer-ink leading-snug">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Interior / Exterior / Special */}
      <section className={`${pad} py-16 lg:py-20 bg-white reveal`}>
        <Eyebrow n="04" label="Interior / Exterior / Special" />
        <h2 className={`${H} mt-3 text-[clamp(30px,3.4vw,46px)] max-w-2xl`}>One Painting Partner. Every Surface That Matters<Dot /></h2>
        <div className="mt-10 grid lg:grid-cols-3 gap-4 reveal-group">
          {serviceCards.map(([ic, t, d]) => (
            <div key={t} className="reveal-item border border-gray-200 rounded p-7 hover:border-[var(--acc)] transition-colors">
              <span className="text-[var(--acc)]"><Icon n={ic} size={30} /></span>
              <h3 className="mt-4 font-bold text-xl text-bauer-ink">{t}</h3>
              <p className="mt-2 text-[14px] text-bauer-lav leading-relaxed">{d}</p>
              <Link href="/#services" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--acc)]">
                Explore {t} <Icon n="arrow" size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — How we approach every project */}
      <section className="bg-[#F8F8F9] reveal">
        <div className={`${pad} py-16`}>
          <Eyebrow n="05" label="How We Approach Every Project" />
          <h2 className={`${H} mt-3 text-[clamp(30px,3.4vw,46px)] max-w-2xl`}>A Clear Process for Better Results<Dot /></h2>
          <p className="mt-5 text-[16px] text-bauer-lav leading-relaxed max-w-xl">
            Every project follows the same disciplined process — see the full breakdown on our{" "}
            <Link href="/our-process" className="text-[var(--acc)] font-semibold">Our Process page</Link>.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-group">
            {approach.map(([ic, t, d], i) => (
              <div key={t} className="reveal-item">
                <div className="flex items-center gap-3 mb-4">
                  <span className="shrink-0 w-14 h-14 rounded-full bg-green-50 text-[var(--acc)] flex items-center justify-center">
                    <Icon n={ic} size={26} />
                  </span>
                  <p className="text-[var(--acc)] text-xl font-bold">{`0${i + 1}`}</p>
                </div>
                <h3 className="font-bold text-bauer-ink">{t}</h3>
                <p className="text-[14px] text-bauer-lav mt-1.5 leading-snug">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Start your project */}
      <section className={`${pad} py-16 lg:py-20 bg-[#0D1B2A] text-white reveal`}>
        <Eyebrow n="06" label="Start Your Project" />
        <h2 className={`${H} text-white mt-3 text-[clamp(30px,3.4vw,46px)] max-w-2xl`}>Let&apos;s Work on Your Next Project<Dot /></h2>
        <p className="mt-5 text-[16px] text-white/70 leading-relaxed max-w-xl">
          Tell us about your property and we&apos;ll get back to you with a detailed plan and quote.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
          <Link href={COMPANY.phoneHref} className="hghost on-dark"><Icon n="phone" size={16} /> {COMPANY.phone}</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
