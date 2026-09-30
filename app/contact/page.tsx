import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/locations";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Bauer Painting",
  description:
    "Tell us about your commercial painting project. Bauer Painting serves the Greater Toronto Area and surrounding communities across Southern Ontario.",
};

/* ---------- shared bits (matches app/about/page.tsx) ---------- */
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
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M8 3v4M16 3v4" /></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
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

const Field = ({ label, placeholder, required, type = "text" }: { label: string; placeholder: string; required?: boolean; type?: string }) => (
  <label className="block">
    <span className="block text-sm font-medium text-bauer-ink mb-1.5">
      {label} {required && <span className="text-[var(--acc)]">*</span>}
    </span>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-bauer-ink placeholder:text-gray-400 focus:outline-none focus:border-[var(--acc)] focus:ring-1 focus:ring-[var(--acc)] transition-colors"
    />
  </label>
);

const Select = ({ label, placeholder, options }: { label: string; placeholder: string; options: string[] }) => (
  <label className="block">
    <span className="block text-sm font-medium text-bauer-ink mb-1.5">{label}</span>
    <select
      defaultValue=""
      className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-bauer-ink focus:outline-none focus:border-[var(--acc)] focus:ring-1 focus:ring-[var(--acc)] transition-colors"
    >
      <option value="" disabled className="text-gray-400">{placeholder}</option>
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </label>
);

const SectionHead = ({ title, step }: { title: string; step: string }) => (
  <div className="flex items-center gap-4">
    <h4 className="font-bold text-bauer-ink whitespace-nowrap">{title}</h4>
    <span className="flex-1 h-px bg-gray-200" />
    <span className="text-[11px] font-semibold tracking-widest text-gray-400 whitespace-nowrap">{step}</span>
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

const projectTypes = ["Interior Painting", "Exterior Painting", "Special Services", "Multiple Services", "Not Sure Yet"];
const timings = ["As soon as possible", "Within 1 month", "1–3 months", "3+ months", "Just exploring options"];

const nextSteps = [
  ["doc", "We Review", "We review your project details and requirements."],
  ["chat", "We Connect", "Our team follows up to discuss your property and project."],
  ["calendar", "We Plan", "We determine the appropriate scope, preparation, scheduling, and approach."],
  ["handshake", "We Quote", "You receive a clear project plan and quote based on your requirements."],
];

const directContacts = [
  ["phone", "Call Us", COMPANY.phone, COMPANY.hours],
  ["mail", "Email Us", COMPANY.email, "We typically respond within one business day."],
  ["pin", "Our Office", "53 Churchill Road North", "Acton, Ontario, Canada"],
  ["clock", "Business Hours", "Monday – Friday", "9:00 AM – 5:00 PM"],
];

const finalFeatures = [
  ["users", "Experienced Team", "Professional service from start to finish."],
  ["shield", "Quality Results", "Long-lasting finishes for commercial spaces."],
  ["building", "Local Experts", "Serving businesses across Southern Ontario."],
];

const mapPins: { name: string; top: string; left: string }[] = [
  { name: "Barrie", top: "6%", left: "16%" },
  { name: "Orangeville", top: "18%", left: "6%" },
  { name: "Guelph", top: "36%", left: "10%" },
  { name: "Kitchener", top: "48%", left: "4%" },
  { name: "Cambridge", top: "58%", left: "14%" },
  { name: "Brampton", top: "26%", left: "40%" },
  { name: "Toronto", top: "24%", left: "68%" },
  { name: "Milton", top: "44%", left: "36%" },
  { name: "Mississauga", top: "42%", left: "56%" },
  { name: "Oakville", top: "55%", left: "50%" },
  { name: "Burlington", top: "64%", left: "42%" },
  { name: "Hamilton", top: "72%", left: "36%" },
  { name: "Niagara Region", top: "88%", left: "48%" },
];

const serviceAreas = ["Toronto", "Mississauga", "Oakville", "Burlington", "Hamilton", "Kitchener", "Niagara Region", "Milton", "Brampton", "Guelph", "Cambridge"];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Header />

      {/* 1 — Contact Us (hero) */}
      <section className="grid lg:grid-cols-2 reveal">
        <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16 lg:py-20`}>
          <Eyebrow n="01" label="Contact Us" />
          <Brand />
          <h1 className={`${H} mt-3 text-[clamp(38px,4.4vw,58px)]`}>
            Let&apos;s Talk About Your Commercial Painting Project<Dot />
          </h1>
          <p className="mt-6 text-[17px] text-bauer-lav leading-relaxed max-w-md">
            Tell us a little about your property, project, and requirements. Our team will review your
            information and help determine the right next step.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
            <Link href={COMPANY.phoneHref} className="hghost"><Icon n="phone" size={16} /> {COMPANY.phone}</Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200 reveal-group">
            {heroFeatures.map(([ic, t, d]) => <Feature key={t} ic={ic} t={t} d={d} />)}
          </div>
        </div>
        <div className="relative min-h-[380px] lg:min-h-full">
          <Photo src="/process/cta.jpg" alt="Bauer Painting commercial office building" cls="!absolute inset-0" />
          <div className="absolute top-8 right-8 text-white text-right">
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
      <section className="grid lg:grid-cols-2 bg-[#F8F8F9] reveal">
        <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16`}>
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
            <Photo src="/process/prep.jpg" alt="Row of commercial office buildings" cls="flex-1 h-52 rounded" />
            <Tag lines={["WELL-", "MAINTAINED", "SPACES.", "STRONGER", "BUSINESSES."]} />
          </div>
        </div>

        <div className={`${pad} lg:pr-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pl-12 py-16`}>
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-bauer-ink">Request a Quote</h3>
            <p className="mt-2 text-[15px] text-bauer-lav">Fill out the form below and our team will get in touch with you shortly.</p>

            <form className="mt-8 space-y-5">
              <SectionHead title="Contact Information" step="STEP 01" />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" placeholder="Your full name" required />
                <Field label="Company Name" placeholder="Your company name" />
                <Field label="Email" placeholder="you@company.com" type="email" required />
                <Field label="Phone" placeholder="(905) 123-4567" type="tel" required />
              </div>

              <div className="pt-2">
                <SectionHead title="Project Information" step="STEP 02" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Property / Project Location" placeholder="City or address" required />
                <Select label="Project Type" placeholder="Select a service" options={projectTypes} />
              </div>
              <Select label="Approximate Project Timing" placeholder="Select timing" options={timings} />
              <label className="block">
                <span className="block text-sm font-medium text-bauer-ink mb-1.5">
                  Tell Us About Your Project <span className="text-[var(--acc)]">*</span>
                </span>
                <textarea
                  rows={4}
                  placeholder="Please share as much detail as possible about your project, including the type of property, areas to be painted, and any specific requirements."
                  className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-bauer-ink placeholder:text-gray-400 focus:outline-none focus:border-[var(--acc)] focus:ring-1 focus:ring-[var(--acc)] transition-colors resize-none"
                />
              </label>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button type="button" className="hbtn w-full sm:w-auto justify-center">
                  Request a Quote <Icon n="arrow" size={16} />
                </button>
                <p className="flex items-center gap-2 text-xs text-gray-500 leading-snug">
                  <span className="text-gray-400 shrink-0"><Icon n="lock" size={16} /></span>
                  Your information is secure and will only be used to respond to your inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3 — What happens next */}
      <section className="bg-white reveal">
        <div className="grid lg:grid-cols-2">
          <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16`}>
            <Eyebrow n="03" label="What Happens Next" />
            <Brand />
            <h2 className={`${H} mt-3 text-[clamp(32px,3.8vw,52px)]`}>What Happens After You Reach Out?<Dot /></h2>
            <p className="mt-5 text-[16px] text-bauer-lav leading-relaxed max-w-md">
              We&apos;ve made the process simple and straightforward. After you submit your quote request,
              here&apos;s what you can expect.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-10 reveal-group">
              {nextSteps.map(([ic, t, d], i) => (
                <div key={t} className="reveal-item relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="shrink-0 w-14 h-14 rounded-full bg-green-50 text-[var(--acc)] flex items-center justify-center">
                      <Icon n={ic} size={24} />
                    </span>
                    {i < nextSteps.length - 1 && (
                      <span className="hidden sm:block text-gray-300 shrink-0">
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
            <div className="absolute top-8 right-8 text-white text-right">
              <Tag lines={["COMMERCIAL", "SPACES.", "LASTING", "RESULTS."]} dark />
            </div>
          </div>
        </div>

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
              {directContacts.map(([ic, t, v, d], i) => (
                <div key={t as string} className={`reveal-item flex items-start gap-4 ${i > 0 ? "lg:border-l lg:border-gray-200 lg:pl-8" : ""}`}>
                  <span className="shrink-0 w-12 h-12 rounded-full bg-white text-[var(--acc)] flex items-center justify-center">
                    <Icon n={ic as string} size={22} />
                  </span>
                  <div>
                    <p className="text-[13px] text-bauer-lav">{t as string}</p>
                    <p className="font-bold text-bauer-ink leading-tight mt-0.5">{v as string}</p>
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
          <div className={`${pad} lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16 flex flex-col justify-center`}>
            <Eyebrow n="04" label="Get Started Today" />
            <Brand />
            <h2 className={`${H} mt-3 text-[clamp(32px,3.8vw,52px)]`}>Ready to Get Your Project Started?<Dot /></h2>
            <p className="mt-5 text-[16px] text-bauer-lav leading-relaxed max-w-md">
              Tell us what you&apos;re planning, and we&apos;ll help you take the next step. Our team is ready to
              discuss your property, understand your requirements, and provide the right solution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
              <Link href={COMPANY.phoneHref} className="hghost"><Icon n="phone" size={16} /> {COMPANY.phone}</Link>
            </div>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200 reveal-group">
              {finalFeatures.map(([ic, t, d]) => <Feature key={t} ic={ic} t={t} d={d} />)}
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-full bg-bauer-mist overflow-hidden">
            <div className="absolute inset-4 sm:inset-8">
              {mapPins.map((p) => (
                <div key={p.name} className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center" style={{ top: p.top, left: p.left }}>
                  <span className="text-[var(--acc)]"><Icon n="pin" size={20} /></span>
                  <span className="mt-0.5 whitespace-nowrap text-[11px] font-semibold text-bauer-ink bg-white/85 px-1.5 py-0.5 rounded">{p.name}</span>
                </div>
              ))}
              <p className="absolute text-[11px] italic tracking-wide text-bauer-lav/70" style={{ top: "70%", left: "70%" }}>
                Lake Ontario
              </p>
            </div>
            <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 w-[62%] sm:w-[55%] h-[52%] rounded-lg overflow-hidden shadow-xl">
              <Photo src="/process/cta.jpg" alt="Bauer Painting office building" cls="!absolute inset-0" />
            </div>
            <div className="absolute top-8 left-8 sm:right-8 sm:left-auto text-right">
              <Tag lines={["SERVING", "SOUTHERN ONTARIO", "COMMERCIAL", "PROPERTIES."]} />
            </div>
          </div>
        </div>

        {/* Service area band */}
        <div className={`${pad} py-10 border-t border-gray-200`}>
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div className="max-w-xs">
              <h3 className="font-bold text-bauer-ink text-lg">Our Service Area</h3>
              <p className="text-[14px] text-bauer-lav mt-2 leading-snug">
                We provide commercial painting services across the Greater Toronto Area and surrounding
                communities.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {serviceAreas.map((a) => (
                <span key={a} className="flex items-center gap-2 text-[15px] text-bauer-ink">
                  <span className="text-[var(--acc)]"><Icon n="pin" size={16} /></span>{a}
                </span>
              ))}
            </div>
            <Link href="#top" className="text-right text-[14px] text-bauer-lav">
              Not sure if you&apos;re in our service area?
              <span className="block font-semibold text-[var(--acc)] mt-1">Get in touch <Icon n="arrow" size={14} /></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
