import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import PostalCheck from "@/components/special/PostalCheck";
import { pad, HL, Dot, Img, Eyebrow, Brand, StripCTA } from "@/components/exterior/Shared";
import { SPECIAL_SERVICES, SPECIAL_HUB_FAQS } from "@/lib/special-services";
import { CITY_LINKS, locationHref, COMPANY } from "@/lib/locations";

export const metadata = {
  title: "Special Services | Bauer Painting",
  description: "Spray painting, high-durability and anti-graffiti coatings, surface preparation and property-manager support for commercial properties with unique requirements.",
};

const H2 = `${HL} mt-4 text-[clamp(30px,4.2vw,54px)]`;
const lead = "mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl";
const box = "grid place-items-center w-11 h-11 shrink-0 rounded bg-white text-bauer-ink";

const trust: [string, string, string][] = [
  ["shield", "Specialized solutions", "For complex commercial requirements."],
  ["building", "Trusted by businesses", "Across the GTA and surrounding areas."],
  ["users", "Professional & reliable", "A team committed to quality results."],
];
const overview: [string, string, string, string][] = [
  ["/process/execute.jpg", "spray", "Application", "Specialized application methods such as spray painting for efficient, high-quality results."],
  ["/home/how-top.jpg", "shield", "Protection", "High-durability and anti-graffiti coatings that help protect your property and maintain its appearance."],
  ["/home/ind11.jpg", "users", "Preparation & management", "Surface preparation, eco-friendly solutions, and dedicated support for property managers and multi-unit properties."],
];
const challenges: [string, string, string, string][] = [
  ["/process/execute.jpg", "spray", "Complex applications", "Specialized methods for projects that need precision, unique surfaces or advanced coating systems."],
  ["/process/prepare.jpg", "drop", "Surface conditions", "Preparation designed around the existing substrate to ensure proper adhesion and lasting results."],
  ["/home/work5.jpg", "shield", "High-traffic environments", "Durable, protective coatings for areas exposed to heavy use and harsh conditions."],
  ["/home/how1.jpg", "users", "Ongoing property needs", "Dedicated support for property managers, multi-unit properties and long-term maintenance."],
];
const steps: [string, string, string, string][] = [
  ["/process/step1.jpg", "chat", "Understand", "Consultation and scope development to understand the project requirements and goals."],
  ["/process/step2.jpg", "search", "Assess", "Evaluate the environment, surfaces, access and specific challenges before work begins."],
  ["/process/step3.jpg", "gear", "Prepare", "Clean, prepare, protect surrounding areas and set up the right equipment and materials."],
  ["/process/step4.jpg", "shield", "Execute & review", "Apply the selected solution with careful quality control, communication and a final review."],
];
const why: [string, string, string, string][] = [
  ["/home/why4.jpg", "shield", "Better surface performance", "Solutions matched to demanding environments, substrates and property requirements."],
  ["/process/execute.jpg", "gear", "Efficient application", "Specialized methods and equipment for the right finish, in less time, with minimal disruption."],
  ["/home/how-top.jpg", "clock", "Long-term protection", "Durable coatings and preparation designed to extend the life of your property."],
  ["/process/cta.jpg", "users", "Less operational disruption", "Careful planning and flexible scheduling to keep your property running during the work."],
];

export default function SpecialServicesHub() {
  return (
    <main className="bg-white">
      <Header />

      {/* 1 Hero */}
      <section className="bg-white">
        <div className={`${pad} py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center`}>
          <div>
            <Eyebrow n="01" label="Special services" />
            <div className="mt-6"><Brand /></div>
            <h1 className={`${HL} mt-3 text-[clamp(36px,5.6vw,68px)]`}>More than painting. Solutions built for the job<Dot /></h1>
            <p className={lead}>From specialty coatings to surface preparation, we provide advanced painting solutions for commercial properties with unique requirements.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="hbtn justify-center">Request a Quote <Icon n="arrow" size={16} /></Link>
              <Link href="#specialties" className="hghost justify-center">Explore Special Services <Icon n="arrow" size={16} /></Link>
            </div>
            <ul className="mt-10 grid sm:grid-cols-3 gap-5">
              {trust.map(([i, t, d]) => (
                <li key={t} className="flex gap-3"><span className={`${box} bg-[#F3F6F8] rounded-full`}><Icon n={i} size={20} /></span>
                  <span><span className="block text-sm font-bold text-bauer-ink">{t}</span><span className="block text-xs text-gray-600 mt-0.5">{d}</span></span></li>
              ))}
            </ul>
          </div>
          <Img src="/process/execute.jpg" alt="Bauer painter spray-painting an interior ceiling" cls="aspect-[4/3] lg:aspect-[5/4] rounded" pos="object-cover object-top" />
        </div>
      </section>

      {/* 2 Overview */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="02" label="Special services overview" />
          <h2 className={`${H2} max-w-3xl`}>Specialized solutions for complex commercial needs<Dot /></h2>
          <p className={lead}>Projects that need more than a standard paint job: advanced application methods, surface preparation, durable coatings and property-management support.</p>
          <ul className="mt-10 grid md:grid-cols-3 gap-5">
            {overview.map(([img, i, t, d]) => (
              <li key={t} className="rounded bg-white overflow-hidden">
                <Img src={img} alt="" cls="h-40" />
                <div className="p-5 flex gap-4"><span className={`${box} bg-[#F3F6F8]`}><Icon n={i} size={20} /></span>
                  <span><span className="block font-bold text-bauer-ink">{t}</span><span className="block mt-1 text-sm text-gray-600">{d}</span></span></div>
              </li>
            ))}
          </ul>
        </div>
        <StripCTA kicker="Tailored solutions for every property." text="No matter the challenge, our team brings the expertise, equipment and experience to get the job done right." />
      </section>

      {/* 3 Specialties */}
      <section id="specialties" className="reveal scroll-mt-24">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="03" label="Our specialties" />
          <h2 className={H2}>Our specialties<Dot /></h2>
          <p className={lead}>From advanced application methods to surface protection and property-management support, each service is built for the demands of commercial properties.</p>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SPECIAL_SERVICES.map((s, k) => (
              <li key={s.slug}>
                <Link href={`/services/special-services/${s.slug}`} className="group block h-full rounded bg-[#F3F6F8] overflow-hidden hover:shadow-md transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
                  <Img src={s.image} alt="" cls="h-40" />
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <span className="font-heading font-extrabold text-2xl text-[var(--acc)]">0{k + 1}</span>
                      <span className="font-semibold text-bauer-ink flex-1">{s.label}</span>
                      <span className="text-[var(--acc-d)] transition-transform group-hover:translate-x-1"><Icon n="arrow" size={18} /></span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{s.cardBlurb}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <StripCTA kicker="Specialized expertise for a wider range of projects." text="Not sure which service is right for your property? Our team is here to help you find the right solution." />
      </section>

      {/* 4 Challenges */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="04" label="Built around the challenge" />
          <h2 className={`${H2} max-w-3xl`}>Every property has different requirements<Dot /></h2>
          <p className={lead}>Commercial properties come with unique challenges. Our special services provide the right solution, whatever the surface, environment or complexity.</p>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {challenges.map(([img, i, t, d], k) => (
              <li key={t} className="rounded bg-white overflow-hidden">
                <Img src={img} alt="" cls="h-40" />
                <div className="p-5"><span className="text-[var(--acc-d)]"><Icon n={i} size={22} /></span>
                  <h3 className="mt-3 font-bold text-bauer-ink">{t}</h3><p className="mt-1 text-sm text-gray-600">{d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 Approach */}
      <section className="reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="05" label="Our approach" />
          <h2 className={`${H2} max-w-3xl`}>A process built around the project<Dot /></h2>
          <p className={lead}>From consultation to final inspection, we plan each project around its requirements, surfaces, schedule and operating environment.</p>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(([img, i, t, d], k) => (
              <li key={t}>
                <Img src={img} alt="" cls="h-40 rounded" />
                <div className="mt-4 flex items-center gap-3"><span className="font-heading font-extrabold text-3xl text-[var(--acc)]">0{k + 1}</span><span className="h-px flex-1 bg-gray-300" /></div>
                <h3 className="mt-2 font-bold text-bauer-ink">{t}</h3><p className="mt-1 text-sm text-gray-600 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 Why */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="06" label="Why special services matter" />
          <h2 className={`${H2} max-w-3xl`}>The right solution can change the entire project<Dot /></h2>
          <p className={lead}>Specialized painting does more than improve appearance. It helps protect your property, reduce long-term costs and keep operations running smoothly.</p>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {why.map(([img, i, t, d], k) => (
              <li key={t} className="rounded bg-white overflow-hidden">
                <Img src={img} alt="" cls="h-40" />
                <div className="p-5"><p className="flex items-center gap-2 font-bold text-bauer-ink"><span className="text-[var(--acc-d)] font-extrabold">0{k + 1}</span><Icon n={i} size={18} />{t}</p>
                  <p className="mt-2 text-sm text-gray-600">{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7 Service area */}
      <section className="reveal">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-[1.3fr_1fr] gap-10`}>
          <div>
            <Eyebrow n="07" label="Service area & consultation" />
            <h2 className={H2}>Specialty solutions. Local service<Dot /></h2>
            <p className={lead}>We provide specialized painting throughout the Greater Toronto Area and surrounding communities. Enter your postal code to confirm service at your property.</p>
            <div className="mt-8 max-w-xl"><PostalCheck /></div>
            <p className="mt-8 font-semibold text-bauer-ink">Find your city</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {CITY_LINKS.map((c) => (
                <li key={c}><Link href={locationHref(c) ?? "/contact"} className="inline-flex items-center gap-1.5 rounded bg-[#F3F6F8] px-3 py-2 text-sm hover:bg-gray-200"><span className="text-[var(--acc)]"><Icon n="pin" size={14} /></span>{c}</Link></li>
              ))}
            </ul>
          </div>
          <div className="rounded bg-bauer-navy text-white p-6 sm:p-8 self-start">
            <p className="text-sm text-white/70">Let's talk</p>
            <h3 className={`${HL} mt-2 text-3xl !text-white`}>Have a project in mind<span className="text-[var(--acc)]">?</span></h3>
            <p className="mt-3 text-white/75 leading-relaxed">Get in touch to discuss your specialized painting needs. We'll help you find the right solution for your property.</p>
            <Link href="/contact" className="hbtn mt-6 justify-center w-full sm:w-auto">Request a Consultation <Icon n="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 8 FAQ */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-[.8fr_1.2fr] gap-10`}>
          <div>
            <Eyebrow n="08" label="FAQs" />
            <h2 className={H2}>Questions? We've got answers<Dot /></h2>
            <p className={lead}>Can't find your question? Reach out and we'll be happy to help.</p>
          </div>
          <div className="grid gap-3">
            {SPECIAL_HUB_FAQS.map((f, k) => (
              <details key={f.q} open={k === 0} className="group rounded bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center gap-4 font-semibold text-bauer-ink [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
                  <span className="text-[var(--acc-d)] font-extrabold">0{k + 1}</span><span className="flex-1">{f.q}</span>
                  <span aria-hidden className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-[#F3F6F8] group-open:bg-[var(--acc)] group-open:text-white"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-9">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9 CTA */}
      <section className="bg-bauer-navy text-white">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center`}>
          <div>
            <Eyebrow n="09" label="Final CTA" />
            <h2 className={`${HL} mt-4 text-[clamp(32px,4.6vw,60px)] !text-white`}>Ready to get started<span className="text-[var(--acc)]">?</span></h2>
            <p className="mt-4 text-white/75 max-w-xl leading-relaxed">Let's discuss your project and find the right painting solution for your property, with expert guidance and a customized plan.</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {["Free consultation, no obligation", "Customized solutions", "Experienced team"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="text-[var(--acc)]"><Icon n="checkc" size={18} /></span>{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="hbtn justify-center">Request a Consultation <Icon n="arrow" size={16} /></Link>
              <a href={COMPANY.phoneHref} className="hghost on-dark justify-center"><Icon n="phone" size={18} /> {COMPANY.phone}</a>
            </div>
          </div>
          <Img src="/process/cta.jpg" alt="Bauer Painting commercial building" cls="aspect-[4/3] rounded" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
