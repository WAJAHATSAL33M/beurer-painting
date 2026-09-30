import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/locations";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Contact Us | Bauer Painting",
  description:
    "Tell us about your commercial painting project. Bauer Painting serves the Greater Toronto Area and surrounding communities across Southern Ontario.",
};

/* ---------- shared bits ---------- */
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const icons: Record<string, ReactNode> = {
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 3-6 6-6s6 2 6 6M16 5a3 3 0 0 1 0 6M18 14c2 .8 3 3 3 6" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  building: <path d="M6 21V4h12v17M3 21h18M10 8h1M13 8h1M10 12h1M13 12h1M10 16h4" />,
  chat: <><path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><path d="M19 9h1a2 2 0 0 1 2 2v6l-3-2h-4" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M9 12h6M9 16h6M9 8h3" /></>,
  roller: <><rect x="4" y="3" width="14" height="6" rx="1.5" /><path d="M18 6h2v5h-8v4M12 15v6" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M8 3v4M16 3v4" /></>,
  handshake: <path d="M3 12l4-4 4 2 4-2 6 5-5 5-3-2-2 2-8-6z" />,
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

const Brand = () => (
  <p className="mt-6 text-[13px] font-bold tracking-wide text-bauer-lav">BAUER PAINTING</p>
);

const Tag = ({ lines, dark }: { lines: string[]; dark?: boolean }) => (
  <p className={`text-[11px] font-semibold tracking-[0.18em] leading-6 border-l-2 pl-3 ${dark ? "text-white/90 border-white/70" : "text-bauer-lav border-[var(--acc)]"}`}>
    {lines.map((l) => <span key={l} className="block">{l}</span>)}
  </p>
);

const Feature = ({ ic, t, d }: { ic: string; t: string; d: string }) => (
  <div className="reveal-item flex items-start gap-3">
    <span className="shrink-0 w-11 h-11 rounded-full bg-[var(--acc)]/10 text-[var(--acc)] flex items-center justify-center">
      <Icon n={ic} size={20} />
    </span>
    <div>
      <p className="font-bold text-bauer-ink text-[15px] leading-tight">{t}</p>
      <p className="text-[13px] text-bauer-lav mt-1 leading-snug">{d}</p>
    </div>
  </div>
);

/* ---------- page data ---------- */
const heroFeatures = [
  ["building", "Commercial Focus", "Offices, retail, industrial and more."],
  ["shield", "Trusted & Reliable", "Professional service from start to finish."],
  ["users", "Serving Ontario", "GTA and surrounding business communities."],
];

const quoteFeatures = [
  ["building", "Commercial Properties", "Offices, retail, industrial, warehouses, and more."],
  ["roller", "Complete Painting Solutions", "Interior, exterior, and specialty services."],
  ["shield", "Professional & Reliable", "Experienced team, insured, quality results."],
  ["users", "Serving Southern Ontario", "GTA and surrounding business communities."],
];

const nextSteps = [
  ["doc", "We Review", "We review your project details and requirements."],
  ["chat", "We Connect", "Our team follows up to discuss your property and project."],
  ["calendar", "We Plan", "We determine the appropriate scope, preparation, scheduling, and approach."],
  ["handshake", "We Quote", "You receive a clear project plan and quote based on your requirements."],
];

const directContacts = [
  ["phone", "Call Us", COMPANY.phone, COMPANY.hours, COMPANY.phoneHref],
  ["mail", "Email Us", COMPANY.email, "We typically respond within one business day.", `mailto:${COMPANY.email}`],
  ["pin", "Our Office", "53 Churchill Road North", "Acton, Ontario, Canada", undefined],
  ["clock", "Business Hours", "Monday – Friday", "9:00 AM – 5:00 PM", undefined],
];

const finalFeatures = [
  ["users", "Experienced Team", "Professional service from start to finish."],
  ["shield", "Quality Results", "Long-lasting finishes for commercial spaces."],
  ["building", "Local Experts", "Serving businesses across Southern Ontario."],
];

const serviceAreas = [
  "Toronto", "Mississauga", "Oakville", "Burlington", "Hamilton", "Kitchener",
  "Niagara Region", "Milton", "Brampton", "Guelph", "Cambridge",
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <SiteHeader />

      {/* 1 — Contact Us (hero) */}
      <section className="grid lg:grid-cols-2 reveal">
        <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-14 sm:py-16 lg:py-20`}>
          <Eyebrow n="01" label="Contact Us" />
          <Brand />
          <h1 className={`${H} mt-3 text-[clamp(36px,4.4vw,58px)]`}>
            Let&apos;s Talk About Your Commercial Painting Project<Dot />
          </h1>
          <p className="mt-6 text-[16px] sm:text-[17px] text-bauer-lav leading-relaxed max-w-md">
            Tell us a little about your property, project, and requirements. Our team will review your
            information and help determine the right next step.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#quote-form" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
            <Link href={COMPANY.phoneHref} className="hghost"><Icon n="phone" size={16} /> {COMPANY.phone}</Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200 reveal-group">
            {heroFeatures.map(([ic, t, d], i) => (
              <div key={t} className={i > 0 ? "sm:border-l sm:border-gray-200 sm:pl-8" : ""}>
                <Feature ic={ic} t={t} d={d} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[380px] lg:min-h-full">
          <Photo src="/process/cta.jpg" alt="Bauer Painting commercial office building" cls="!absolute inset-0" />
          <div className="absolute top-8 left-6 sm:left-8">
            <Tag lines={["PROFESSIONAL", "PAINTING", "FOR STRONGER", "BUSINESSES."]} dark />
          </div>
          <div className="absolute left-6 bottom-6 bg-white/95 backdrop-blur px-5 py-4 rounded shadow-lg">
            <p className="font-heading font-extrabold text-bauer-ink text-lg tracking-tight leading-none">BAUER PAINTING</p>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-bauer-lav mt-2">
              PEOPLE&nbsp;&nbsp;SPACES&nbsp;&nbsp;POSSIBILITIES
            </p>
          </div>
        </div>
      </section>

      {/* 2 — Request a Quote */}
      <section id="quote-form" className="grid lg:grid-cols-2 bg-[#F8F8F9] reveal scroll-mt-20">
        <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-14 sm:py-16`}>
          <Eyebrow n="02" label="Request a Quote" />
          <Brand />
          <h2 className={`${H} mt-3 text-[clamp(32px,3.8vw,52px)]`}>Tell Us About Your Project<Dot /></h2>
          <p className="mt-6 text-[16px] text-bauer-lav leading-relaxed max-w-lg">
            Provide a few details about your commercial property and painting requirements. Our team will
            review your information and get back to you with expert advice and next steps.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 reveal-group">
            {quoteFeatures.map(([ic, t, d], i) => (
              <div key={t} className={`reveal-item py-6 ${i < 2 ? "border-b border-gray-200" : ""} ${i % 2 === 0 ? "sm:border-r sm:border-gray-200 sm:pr-8" : "sm:pl-8"}`}>
                <Feature ic={ic} t={t} d={d} />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-end gap-6">
            <Photo src="/process/prep.jpg" alt="Row of commercial office buildings" cls="flex-1 h-48 sm:h-52 rounded" />
            <Tag lines={["WELL-", "MAINTAINED", "SPACES.", "STRONGER", "BUSINESSES."]} />
          </div>
        </div>

        <div className={`${pad} lg:pr-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pl-12 py-14 sm:py-16`}>
          <QuoteForm />
        </div>
      </section>

      {/* 3 — What happens next */}
      <section className="bg-white reveal">
        <div className="grid lg:grid-cols-2">
          <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-14 sm:py-16`}>
            <Eyebrow n="03" label="What Happens Next" />
            <Brand />
            <h2 className={`${H} mt-3 text-[clamp(32px,3.8vw,52px)]`}>What Happens After You Reach Out?<Dot /></h2>
            <p className="mt-5 text-[16px] text-bauer-lav leading-relaxed max-w-md">
              We&apos;ve made the process simple and straightforward. After you submit your quote request,
              here&apos;s what you can expect.
            </p>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 reveal-group">
              {nextSteps.map(([ic, t, d], i) => (
                <div key={t} className="reveal-item relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="shrink-0 w-14 h-14 rounded-full bg-[var(--acc)]/10 text-[var(--acc)] flex items-center justify-center">
                      <Icon n={ic} size={24} />
                    </span>
                    {i < nextSteps.length - 1 && (
                      <span className="hidden lg:block text-gray-300 shrink-0">
                        <Icon n="arrow" size={16} />
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--acc)] text-sm font-bold">{`0${i + 1}`}</p>
                  <h3 className="font-bold text-bauer-ink">{t}</h3>
                  <p className="text-[13px] text-bauer-lav mt-1 leading-snug">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[340px] lg:min-h-full">
            <Photo src="/process/hero.jpg" alt="Bauer Painting commercial office building" cls="!absolute inset-0" />
            <div className="absolute top-8 right-6 sm:right-8">
              <Tag lines={["COMMERCIAL", "SPACES.", "LASTING", "RESULTS."]} dark />
            </div>
          </div>
        </div>

        {/* Contact Bauer directly band */}
        <div className="bg-bauer-mist">
          <div className={`${pad} py-12`}>
            <div className="flex flex-wrap items-start justify-between gap-8 mb-10">
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-bauer-ink">Contact Bauer Directly</h3>
                <p className="text-[15px] text-bauer-lav mt-2">Prefer to speak with our team? You can reach us directly using the information below.</p>
              </div>
              <div className="hidden lg:block"><Tag lines={["PROFESSIONAL PAINTING", "FOR STRONGER BUSINESSES."]} /></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 reveal-group">
              {directContacts.map(([ic, t, v, d, href], i) => (
                <div key={t as string} className={`reveal-item flex items-start gap-4 ${i > 0 ? "lg:border-l lg:border-gray-200 lg:pl-8" : ""}`}>
                  <span className="shrink-0 w-12 h-12 rounded-full bg-white text-[var(--acc)] flex items-center justify-center shadow-sm">
                    <Icon n={ic as string} size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] text-bauer-lav">{t as string}</p>
                    {href ? (
                      <a href={href as string} className="font-bold text-bauer-ink leading-tight mt-0.5 block break-words hover:text-[var(--acc)] transition-colors">
                        {v as string}
                      </a>
                    ) : (
                      <p className="font-bold text-bauer-ink leading-tight mt-0.5">{v as string}</p>
                    )}
                    <p className="text-[13px] text-bauer-lav mt-0.5">{d as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Ready to get started */}
      <section className="bg-white reveal">
        <div className="grid lg:grid-cols-2">
          <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-14 sm:py-16 flex flex-col justify-center`}>
            <Eyebrow n="04" label="Get Started Today" />
            <Brand />
            <h2 className={`${H} mt-3 text-[clamp(32px,3.8vw,52px)]`}>Ready to Get Your Project Started?<Dot /></h2>
            <p className="mt-5 text-[16px] text-bauer-lav leading-relaxed max-w-md">
              Tell us what you&apos;re planning, and we&apos;ll help you take the next step. Our team is ready to
              discuss your property, understand your requirements, and provide the right solution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#quote-form" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
              <Link href={COMPANY.phoneHref} className="hghost"><Icon n="phone" size={16} /> {COMPANY.phone}</Link>
            </div>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200 reveal-group">
              {finalFeatures.map(([ic, t, d], i) => (
                <div key={t} className={i > 0 ? "sm:border-l sm:border-gray-200 sm:pl-8" : ""}>
                  <Feature ic={ic} t={t} d={d} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-0 lg:aspect-[5/6] overflow-hidden bg-[#f5f7fa]">
            <Image
              src="/contact/contact-map.jpg"
              alt="Map of Bauer Painting's Southern Ontario service area"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
            <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 w-[58%] sm:w-[52%] h-[46%] rounded-lg overflow-hidden shadow-xl">
              <Photo src="/process/cta.jpg" alt="Bauer Painting office building" cls="!absolute inset-0" />
            </div>
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/85 backdrop-blur-sm rounded px-1 py-1">
              <Tag lines={["SERVING", "SOUTHERN ONTARIO", "COMMERCIAL", "PROPERTIES."]} />
            </div>
          </div>
        </div>

        {/* Service area band */}
        <div className={`${pad} py-10 sm:py-12 border-t border-gray-200`}>
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">
            <div className="lg:max-w-xs shrink-0">
              <h3 className="font-bold text-bauer-ink text-lg">Our Service Area</h3>
              <p className="text-[14px] text-bauer-lav mt-2 leading-snug">
                We provide commercial painting services across the Greater Toronto Area and surrounding
                communities.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
              {serviceAreas.map((a, i) => (
                <span
                  key={a}
                  className={`flex items-center gap-2 text-[15px] font-medium text-bauer-ink ${i > 0 ? "sm:border-l sm:border-gray-200 sm:pl-6" : ""}`}
                >
                  <span className="text-[var(--acc)] shrink-0"><Icon n="pin" size={16} /></span>{a}
                </span>
              ))}
            </div>
            <Link href="#quote-form" className="shrink-0 text-[14px] text-bauer-lav lg:text-right lg:pl-6 lg:border-l lg:border-gray-200">
              Not sure if you&apos;re in our service area?
              <span className="flex items-center gap-1.5 font-semibold text-[var(--acc)] mt-1 lg:justify-end">
                Get in touch <Icon n="arrow" size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
