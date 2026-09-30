import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/locations";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteSection from "@/components/QuoteSection";

export const metadata = {
  title: "About Us | Bauer Painting",
  description:
    "Bauer Painting provides professional commercial painting services for businesses across the Greater Toronto Area and surrounding communities since 2001.",
};

/* ---------- shared bits ---------- */
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const icons: Record<string, ReactNode> = {
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 3-6 6-6s6 2 6 6M16 5a3 3 0 0 1 0 6M18 14c2 .8 3 3 3 6" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  building: <path d="M6 21V4h12v17M3 21h18M10 8h1M13 8h1M10 12h1M13 12h1M10 16h4" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  handshake: <path d="M3 12l4-4 4 2 4-2 6 5-5 5-3-2-2 2-8-6z" />,
  chat: <><path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><path d="M19 9h1a2 2 0 0 1 2 2v6l-3-2h-4" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M9 12h6M9 16h6M9 8h3" /></>,
  roller: <><rect x="4" y="3" width="14" height="6" rx="1.5" /><path d="M18 6h2v5h-8v4M12 15v6" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
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

const Photo = ({ src, alt, cls = "", pos = "object-cover" }: { src: string; alt: string; cls?: string; pos?: string }) => (
  <div className={`relative overflow-hidden ${cls}`}>
    <Image src={src} alt={alt} fill className={pos} sizes="(min-width:1024px) 50vw, 100vw" />
  </div>
);

const Eyebrow = ({ n, label }: { n: string; label: string }) => (
  <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.14em] uppercase text-bauer-lav">
    <span className="w-6 h-px bg-[var(--acc)]" />
    {n}
    <span className="text-gray-300">|</span>
    {label}
  </p>
);

const Brand = ({ dark }: { dark?: boolean }) => (
  <p className={`mt-6 text-[13px] font-bold tracking-wide ${dark ? "text-white/80" : "text-bauer-lav"}`}>BAUER PAINTING</p>
);

const Tag = ({ lines, dark }: { lines: string[]; dark?: boolean }) => (
  <p className={`text-[11px] font-semibold tracking-[0.18em] leading-6 border-l pl-3 ${dark ? "text-white/85 border-white/40" : "text-bauer-lav border-gray-300"}`}>
    {lines.map((l) => <span key={l} className="block">{l}</span>)}
  </p>
);

const Feature = ({ ic, t, d }: { ic: string; t: string; d: string }) => (
  <div className="reveal-item flex items-start gap-3">
    <span className="shrink-0 w-11 h-11 rounded-full bg-green-50 text-[var(--acc)] flex items-center justify-center">
      <Icon n={ic} size={20} />
    </span>
    <div>
      <p className="font-bold text-bauer-ink text-[15px] leading-tight">{t}</p>
      <p className="text-[13px] text-bauer-lav mt-1 leading-snug">{d}</p>
    </div>
  </div>
);

const Btns = () => (
  <div className="flex flex-wrap gap-4">
    <Link href="/services" className="hbtn">Explore Our Services <Icon n="arrow" size={16} /></Link>
    <Link href={COMPANY.phoneHref} className="hghost"><Icon n="phone" size={16} /> {COMPANY.phone}</Link>
  </div>
);

/* ---------- page data ---------- */
const heroFeatures = [
  ["users", "Commercial Focus", "Offices, retail, industrial and more."],
  ["shield", "Experienced Team", "Professional service from start to finish."],
  ["building", "Serving Southern Ontario", "GTA and surrounding business communities."],
];

const whoFeatures = [
  ["users", "Commercial Specialists", "Focused on businesses and commercial properties."],
  ["shield", "Trusted Partner", "Working with property owners, managers and businesses."],
  ["building", "Serving Ontario", "GTA and surrounding communities."],
];

const timeline = [
  ["2001", "Bauer Painting Founded", "Started with a commitment to quality workmanship and customer service."],
  ["2011", "Expanded Expertise", "Further developed our specialization in spray painting and commercial services."],
  ["TODAY", "Continuing to Grow", "A trusted commercial painting partner for businesses across Southern Ontario."],
];

const steps = [
  ["chat", "Understand", "We start by understanding your property, project requirements, goals, and any unique challenges."],
  ["doc", "Plan", "We develop a detailed plan, including scope, preparation, scheduling, and operating conditions, to minimize disruptions and keep your project on track."],
  ["roller", "Execute", "Our experienced team carries out the work with proper preparation, professional application, and attention to detail."],
  ["users", "Communicate", "We keep you informed throughout the project, providing updates and addressing any questions until completion."],
];

const standards = [
  ["01", "shield", "Professionalism", "A structured approach to commercial projects, with attention to detail and a commitment to doing the job right."],
  ["02", "gear", "Quality", "Careful preparation, the right products and methods, and attention to the finished result."],
  ["03", "handshake", "Reliability", "Clear communication, dependable scheduling, and a team that follows through on commitments."],
  ["04", "users", "Partnership", "We work closely with property owners, managers, and businesses to understand their needs and deliver solutions that support their goals."],
];

const ctaFeatures = [
  ["users", "Experienced Team", "Professional service from start to finish."],
  ["shield", "Quality Results", "Long-lasting finishes for commercial spaces."],
  ["building", "Trusted Partner", "Supporting businesses across Southern Ontario."],
];

const serviceAreas = ["Toronto", "Mississauga", "Oakville", "Milton", "Hamilton", "Kitchener", "Niagara Region", "Burlington", "Brampton", "Guelph", "Cambridge"];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Header />

      {/* 1 — About Bauer (hero) */}
      <section className="grid lg:grid-cols-2 reveal">
        <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16 lg:py-20`}>
          <Eyebrow n="01" label="About Bauer" />
          <Brand />
          <h1 className={`${H} mt-3 text-[clamp(38px,4.4vw,58px)]`}>
            Commercial Painting Built Around People, Spaces &amp; Possibilities<Dot />
          </h1>
          <p className="mt-6 text-[17px] text-bauer-lav leading-relaxed max-w-md">
            At Bauer Painting, we provide professional commercial painting services for businesses across the
            Greater Toronto Area and surrounding communities. Since 2001, we&apos;ve been helping property owners,
            managers, and businesses maintain and enhance their spaces with quality, reliability, and care.
          </p>
          <div className="mt-8"><Btns /></div>
          <div className="mt-12 grid sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200 reveal-group">
            {heroFeatures.map(([ic, t, d]) => <Feature key={t} ic={ic} t={t} d={d} />)}
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <Photo src="/process/cta.jpg" alt="Bauer Painting office building" cls="!absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/0" />
          <div className="absolute top-8 right-8 text-white text-right">
            <p className="text-[11px] tracking-[0.18em] font-semibold">ESTABLISHED</p>
            <p className="text-4xl font-extrabold mt-1">2001</p>
            <span className="block w-10 h-px bg-white/70 my-3 ml-auto" />
            <Tag lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} dark />
          </div>
        </div>
      </section>

      {/* 2 — Who we are */}
      <section className="grid lg:grid-cols-2 bg-[#F8F8F9] reveal">
        <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16`}>
          <Eyebrow n="02" label="Who We Are" />
          <Brand />
          <h2 className={`${H} mt-3 text-[clamp(32px,3.8vw,52px)]`}>Built on Experience. Focused on Commercial Work<Dot /></h2>
          <p className="mt-6 text-[16px] text-bauer-lav leading-relaxed max-w-xl">
            Bauer Painting was established in 2001 with a simple goal — to provide high-quality painting services
            and lasting results for commercial properties.
          </p>
          <p className="mt-4 text-[16px] text-bauer-lav leading-relaxed max-w-xl">
            Over the years, we&apos;ve grown into a trusted partner for property owners, property managers, and
            businesses across the Greater Toronto Area and surrounding communities. Our focus has always been on
            commercial work, from offices and retail spaces to industrial and multi-unit buildings.
          </p>
          <p className="mt-4 text-[16px] text-bauer-lav leading-relaxed max-w-xl">
            Today, we continue to build on that foundation by combining experience, professionalism, and attention
            to detail with a commitment to doing the job right. We understand the unique requirements of
            commercial properties and work closely with our clients to deliver solutions that support their
            spaces, their operations, and their long-term goals.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200 reveal-group">
            {whoFeatures.map(([ic, t, d]) => <Feature key={t} ic={ic} t={t} d={d} />)}
          </div>
        </div>
        <div className="relative min-h-[460px]">
          <Photo src="/process/hero.jpg" alt="Bauer painter rolling a concrete column" cls="!absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute right-6 top-10 flex flex-col items-end gap-8">
            {timeline.map(([y, t, d]) => (
              <div key={y} className="flex items-start gap-4 max-w-[220px] text-right">
                <div>
                  <p className="text-2xl font-extrabold text-white leading-none">{y}</p>
                  <p className="font-bold text-white mt-2 text-[15px]">{t}</p>
                  <p className="text-[12px] text-white/75 mt-1 leading-snug">{d}</p>
                </div>
                <span className="mt-1 w-3 h-3 rounded-full border-2 border-[var(--acc)] bg-white shrink-0" />
              </div>
            ))}
          </div>
          <div className="absolute left-6 bottom-6"><Tag lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} dark /></div>
        </div>
      </section>

      {/* 3 — How we work with clients */}
      <section className="bg-white reveal">
        <div className={`${pad} py-16`}>
          <div className="flex flex-wrap justify-between gap-8">
            <div className="max-w-xl">
              <Eyebrow n="03" label="How We Work With Clients" />
              <Brand />
              <h2 className={`${H} mt-3 text-[clamp(32px,3.8vw,52px)]`}>A Better Experience From Planning to Completion<Dot /></h2>
              <p className="mt-5 text-[16px] text-bauer-lav leading-relaxed">
                We take a clear and organized approach to every project, working closely with property owners,
                managers, and businesses to ensure a smooth process and outstanding results.
              </p>
            </div>
            <div className="hidden lg:block pt-2"><Tag lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} /></div>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 reveal-group">
            {steps.map(([ic, t, d], i) => (
              <div key={t} className="reveal-item relative">
                <div className="flex items-center gap-3 mb-5">
                  <span className="shrink-0 w-16 h-16 rounded-full bg-green-50 text-[var(--acc)] flex items-center justify-center">
                    <Icon n={ic} size={28} />
                  </span>
                  {i < 3 && (
                    <span className="hidden lg:flex flex-1 items-center text-gray-300">
                      <span className="flex-1 h-px bg-gray-300" />
                      <Icon n="arrow" size={16} />
                    </span>
                  )}
                </div>
                <p className="text-[var(--acc)] text-sm font-bold">{`0${i + 1}`}</p>
                <h3 className="font-bold text-bauer-ink text-lg">{t}</h3>
                <p className="text-[14px] text-bauer-lav mt-1 leading-snug">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1.1fr] min-h-[300px]">
          <Photo src="/process/hero.jpg" alt="Bauer painter at work" cls="hidden lg:block" />
          <Photo src="/process/prep.jpg" alt="Bauer team reviewing plans on site" cls="col-span-2" />
          <div className="bg-[#0D1B2A] text-white p-8 flex flex-col justify-center">
            <span className="block w-8 h-0.5 bg-[var(--acc)] mb-4" />
            <h3 className={`${H} text-white text-2xl`}>A Collaborative Approach for Lasting Results.</h3>
            <p className="mt-4 text-white/75 text-[15px] leading-relaxed">
              We believe great outcomes come from strong partnerships. That&apos;s why we work closely with our
              clients every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — What Bauer stands for */}
      <section className="bg-white reveal">
        <div className="relative min-h-[420px] overflow-hidden">
          <Photo src="/process/hero.jpg" alt="Bauer painter applying finish in commercial interior" cls="!absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/80 to-transparent" />
          <div className={`relative ${pad} py-16 max-w-2xl`}>
            <Eyebrow n="04" label="What Bauer Stands For" />
            <Brand dark />
            <h2 className={`${H} text-white mt-3 text-[clamp(32px,3.8vw,52px)]`}>The Standards Behind Every Project<Dot /></h2>
            <p className="mt-5 text-[16px] text-white/80 leading-relaxed max-w-lg">
              At Bauer Painting, our work is guided by a set of core principles that shape how we work with our
              clients, manage our projects, and deliver lasting results. These standards are at the heart of every
              space we paint and every relationship we build.
            </p>
            <div className="mt-6"><Tag lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} dark /></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[repeat(4,1fr)_1.1fr] reveal-group">
          {standards.map(([n, ic, t, d], i) => (
            <div key={t} className={`reveal-item ${pad} lg:px-8 py-10 ${i > 0 ? "lg:border-l lg:border-gray-200" : ""}`}>
              <p className="text-[var(--acc)] text-2xl font-extrabold">{n}</p>
              <span className="text-[var(--acc)] block mt-2"><Icon n={ic} size={26} /></span>
              <h3 className="font-bold text-bauer-ink mt-4">{t}</h3>
              <p className="text-[14px] text-bauer-lav mt-2 leading-snug">{d}</p>
            </div>
          ))}
          <div className="bg-[#0D1B2A] text-white p-8 flex flex-col justify-center lg:border-l lg:border-white/10">
            <h3 className="text-xl font-extrabold">More Than Painting<Dot /></h3>
            <p className="mt-3 text-white/75 text-[14px] leading-relaxed">
              A long-term partner for people, spaces and possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — Let's work together */}
      <section className="grid lg:grid-cols-2 bg-[#F8F8F9] reveal">
        <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16`}>
          <Eyebrow n="05" label="Let's Work Together" />
          <Brand />
          <h2 className={`${H} mt-3 text-[clamp(32px,3.8vw,52px)]`}>Let&apos;s Work on Your Next Project<Dot /></h2>
          <p className="mt-6 text-[16px] text-bauer-lav leading-relaxed max-w-lg">
            From commercial interiors and exteriors to specialized painting solutions, Bauer Painting is ready to
            help you plan your next project. Our team is here to discuss your property, understand your needs,
            and provide the right solution.
          </p>
          <div className="mt-8">
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
              <Link href={COMPANY.phoneHref} className="hghost"><Icon n="phone" size={16} /> {COMPANY.phone}</Link>
            </div>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200 reveal-group">
            {ctaFeatures.map(([ic, t, d]) => <Feature key={t} ic={ic} t={t} d={d} />)}
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <Photo src="/process/cta.jpg" alt="Bauer Painting office building" cls="!absolute inset-0" />
          <div className="absolute top-8 right-8"><Tag lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} dark /></div>
        </div>
      </section>

      {/* Service area band */}
      <section className={`${pad} py-10 bg-white border-t border-gray-200 reveal`}>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-xs">
            <h3 className="font-bold text-bauer-ink text-lg">Our Service Area</h3>
            <p className="text-[14px] text-bauer-lav mt-2 leading-snug">
              We provide commercial painting services across the Greater Toronto Area and surrounding communities.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {serviceAreas.map((a) => (
              <span key={a} className="flex items-center gap-2 text-[15px] text-bauer-ink">
                <span className="text-[var(--acc)]"><Icon n="pin" size={16} /></span>{a}
              </span>
            ))}
          </div>
          <Link href="/contact" className="text-right text-[14px] text-bauer-lav">
            Not sure if we serve your area?
            <span className="block font-semibold text-[var(--acc)] mt-1">Get in touch <Icon n="arrow" size={14} /></span>
          </Link>
        </div>
      </section>

      <QuoteSection />
      <Footer />
    </main>
  );
}
