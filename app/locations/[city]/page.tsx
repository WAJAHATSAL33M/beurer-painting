import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LOCATIONS, getLocation, subHref, COMPANY } from "@/lib/locations";
import { pad, HL, Dot, Img, Eyebrow, Brand, StripCTA } from "@/components/exterior/Shared";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }) {
  const loc = getLocation(params.city);
  if (!loc) return {};
  return {
    title: `Commercial Painting in ${loc.city} | Bauer Painting`,
    description: `High-quality commercial painting for offices, retail, industrial and multi-unit properties across ${loc.city}, with durable finishes and minimal disruption.`,
  };
}

const H2 = `${HL} mt-4 text-[clamp(30px,4.2vw,54px)]`;
const lead = "mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl";
const card = "rounded bg-[#F3F6F8] p-4 sm:p-5";
const iconBox = "grid place-items-center w-11 h-11 shrink-0 rounded bg-white text-bauer-ink";

const trust: [string, string][] = [
  ["shield", "Trusted by local businesses"],
  ["users", "Professional & reliable team"],
  ["building", "Commercial painting specialists"],
];

const properties: [string, string, string][] = [
  ["building", "Office Buildings", "Professional interiors and exteriors that reflect your brand and support productivity."],
  ["pin", "Retail & Shopping Centres", "Durable finishes for retail spaces, plazas and shopping destinations."],
  ["gear", "Industrial & Warehouses", "Heavy-duty coatings designed for high-traffic, demanding environments."],
  ["home", "Multi-Unit Properties", "Painting for condos, apartments and multi-residential buildings."],
  ["users", "Schools & Educational", "Safe, clean and long-lasting finishes for schools, colleges and learning spaces."],
  ["shield", "Healthcare Facilities", "Low-odour, high-durability coatings for clinics, hospitals and care spaces."],
  ["layers", "Hospitality & Hotels", "Welcoming spaces for hotels, restaurants and hospitality venues."],
  ["clip", "Government & Institutional", "Reliable painting for municipal, government and institutional properties."],
];

const services: [string, string, string][] = [
  ["roller", "Interior Painting", "Offices, retail spaces, industrial facilities and more."],
  ["building", "Exterior Painting", "Weather-resistant painting that protects and enhances your property."],
  ["gear", "Spray Painting", "Efficient spraying for large spaces and specialized surfaces."],
  ["layers", "Surface Preparation", "Cleaning, repairs and priming for long-lasting results."],
  ["shield", "High-Durability Coatings", "Specialized coatings for high-traffic, demanding environments."],
  ["users", "Property Manager Services", "Reliable solutions for property managers and multi-unit buildings."],
  ["check", "Eco-Friendly Solutions", "Low-VOC options for healthier spaces."],
  ["clip", "Customized Solutions", "Tailored plans for the unique needs of your property."],
];

const steps: [string, string, string, string, string][] = [
  ["01", "Consult & Assess", "Understand your needs", "/process/step1.jpg", "We start with a detailed consultation on your goals, requirements and timeline, then review surfaces and recommend the best solutions."],
  ["02", "Prepare & Plan", "Set the right foundation", "/process/step2.jpg", "We protect your property, prepare surfaces and build a project plan, including scheduling that works around your operations."],
  ["03", "Paint & Execute", "Deliver quality results", "/process/step3.jpg", "Skilled painters use quality products and proven techniques, keeping the work area clean and safe throughout."],
  ["04", "Review & Complete", "Your satisfaction matters", "/process/step4.jpg", "A thorough walkthrough confirms everything meets our standards and yours, and we stand behind our work."],
];


const why: [string, string, string][] = [
  ["users", "Commercial Expertise", "Years of experience painting commercial properties, from small businesses to large facilities."],
  ["shield", "Reliable & Professional", "We show up on time, communicate clearly and deliver on our commitments."],
  ["clock", "Flexible Scheduling", "Evenings, weekends and phased work to minimize disruption."],
  ["roller", "High-Quality Materials", "Premium, industry-leading coatings for demanding commercial environments."],
  ["chart", "Long-Term Value", "Protect your property, improve its appearance and reduce maintenance costs."],
  ["pin", "A Trusted Local Partner", "Dependable service and lasting results for the local business community."],
];

const considerations: [string, string][] = [
  ["Choosing the right contractor", "Look for proven commercial experience, a strong local reputation, clear communication, detailed quotes and a structured plan."],
  ["Planning around operations", "A good contractor builds a schedule around you, including evenings, weekends or phased work areas."],
  ["Preparing surfaces properly", "Assessment, repairs, cleaning and priming address peeling, cracks or moisture damage before any paint goes on."],
  ["Interior and exterior needs", "Interiors often call for low-odour, fast-drying products; exteriors need coatings that withstand Ontario's changing climate."],
  ["Maintaining the property", "Regular painting protects surfaces, keeps spaces welcoming and can reduce long-term repair costs."],
  ["Local knowledge & compliance", "Local experience means understanding environmental conditions, building codes and property management standards."],
];


export default function LocationPage({ params }: { params: { city: string } }) {
  const loc = getLocation(params.city);
  if (!loc) notFound();
  const CITY = loc.city;
  const svcHref = (i: number) => subHref(loc, loc.services[i].slug);
  const propHref = (i: number) => subHref(loc, loc.properties[i].slug);
  return (
    <main className="bg-white">
      <Header />

      {/* 1 — Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className={`${pad} py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center`}>
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 flex flex-wrap gap-2">
              <Link href="/" className="hover:text-bauer-ink">Home</Link>/<Link href="/locations" className="hover:text-bauer-ink">Locations</Link>/
              <span className="text-[var(--acc-d)] font-medium" aria-current="page">{CITY}</span>
            </nav>
            <div className="mt-8"><Brand /></div>
            <h1 className={`${HL} mt-3 text-[clamp(38px,6vw,72px)]`}>
              Commercial Painting in {CITY}<Dot />
            </h1>
            <p className={lead}>
              High-quality commercial painting for businesses across {CITY}. From office buildings to industrial
              facilities, we deliver durable finishes with minimal disruption, backed by a team you can rely on.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="hbtn justify-center">Request a Quote <Icon n="arrow" size={16} /></Link>
              <Link href="#service-area" className="hghost justify-center"><Icon n="pin" size={18} /> Find Your Service Area</Link>
            </div>
            <ul className="mt-10 grid sm:grid-cols-3 gap-4">
              {trust.map(([i, t]) => (
                <li key={t} className="flex items-center gap-3 text-sm font-medium text-bauer-ink">
                  <span className={iconBox}><Icon n={i} size={20} /></span>{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Img src="/process/cta.jpg" alt={`Bauer Painting commercial building in ${CITY}`} cls="aspect-[4/3] rounded" />
            <p className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 rounded px-4 py-3 text-sm shadow">
              <span className="flex items-center gap-2 font-bold text-bauer-ink"><Icon n="pin" size={16} /> {CITY}, ON</span>
              <span className="text-gray-500">Commercial painting services</span>
            </p>
          </div>
        </div>
        <StripCTA kicker={`Serving businesses in ${CITY} and surrounding areas.`} text={`Clean spaces. Stronger businesses. We help ${CITY} companies keep welcoming, professional environments.`} />
      </section>

      {/* 2 — Overview */}
      <section className="reveal">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-[1.2fr_.8fr_1fr] gap-10 items-start`}>
          <div>
            <Eyebrow n="02" label="Location overview" />
            <h2 className={H2}>A higher standard for {CITY} commercial spaces<Dot /></h2>
            <p className="mt-5 text-gray-600 leading-relaxed">{CITY} is home to corporate offices, retail centres, industrial facilities and multi-unit properties. As the city grows, well-maintained commercial spaces create safe, professional and welcoming environments for employees, customers and tenants.</p>
            <p className="mt-4 text-gray-600 leading-relaxed">At Bauer Painting, we help property owners and managers protect their buildings, enhance their appearance and maintain long-term value, with solutions tailored to this fast-growing city.</p>
          </div>
          <Img src="/home/built.jpg" alt="Bauer painter rolling a commercial wall" cls="aspect-[4/5] rounded w-full max-w-sm mx-auto lg:max-w-none" />
          <div className={`${card} sm:p-6`}>
            <h3 className="font-heading font-extrabold text-xl text-bauer-ink">Commercial properties we serve in {CITY}</h3>
            <ul className="mt-4 space-y-2">
              {properties.slice(0, 7).map(([i, t], k) => (
                <li key={t}><Link href={propHref(k)} className="flex items-center gap-3 text-sm text-bauer-ink hover:underline"><span className={iconBox}><Icon n={i} size={18} /></span>{t}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3 — Services */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="03" label="Commercial painting services" />
          <h2 className={`${H2} max-w-3xl`}>Commercial painting services in {CITY}<Dot /></h2>
          <p className={lead}>A complete range of services for different property types, focused on quality, durability and minimal disruption.</p>
          <ul className="mt-10 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {services.map(([i, t, d], k) => (
              <li key={t}>
                <Link href={svcHref(k)} className="group flex h-full gap-4 rounded bg-white p-5 hover:shadow-md transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
                  <span className={`${iconBox} bg-[#F3F6F8]`}><Icon n={i} size={20} /></span>
                  <span><span className="block font-semibold text-bauer-ink">{t}</span><span className="block mt-1 text-sm text-gray-600">{d}</span></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded bg-bauer-navy text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <h3 className="font-heading font-extrabold text-2xl">Need a customized painting solution?</h3>
              <p className="mt-2 text-white/75 max-w-xl">Every property is different. We'll help you find the right services for your needs in {CITY}.</p>
            </div>
            <Link href="/contact" className="hbtn justify-center shrink-0">Request a Quote <Icon n="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 4 — Property types */}
      <section className="reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="04" label="Painting for local commercial properties" />
          <h2 className={`${H2} max-w-3xl`}>Commercial spaces we paint in {CITY}<Dot /></h2>
          <p className={lead}>Every commercial property has unique requirements. We provide tailored solutions for businesses and facilities throughout the city.</p>
          <div className="mt-10 grid lg:grid-cols-[.9fr_1.1fr] gap-8">
            <div className="relative">
              <Img src="/home/ind-feat.jpg" alt="Freshly painted commercial interior" cls="h-64 lg:h-full min-h-[280px] rounded" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-bold drop-shadow">Well-maintained properties create stronger businesses.</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {properties.map(([i, t, d], k) => (
                <li key={t}><Link href={propHref(k)} className={`${card} flex gap-4 h-full hover:shadow-md transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]`}>
                  <span className={iconBox}><Icon n={i} size={20} /></span>
                  <span><span className="block font-semibold text-bauer-ink">{t}</span><span className="block mt-1 text-sm text-gray-600">{d}</span></span>
                </Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 — Process */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="05" label="Our local project approach" />
          <h2 className={`${H2} max-w-3xl`}>A commercial painting process built for {CITY}<Dot /></h2>
          <p className={lead}>A structured, flexible process that delivers high-quality results with minimal disruption, from first consultation to final walkthrough.</p>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(([n, t, s, img, d]) => (
              <li key={n}>
                <Img src={img} alt="" cls="h-44 rounded" />
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-heading font-extrabold text-4xl text-[var(--acc)]">{n}</span>
                  <span><span className="block font-semibold text-bauer-ink">{t}</span><span className="block text-xs font-bold text-bauer-lav">{s}</span></span>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 — Service area */}
      <section id="service-area" className="reveal scroll-mt-24">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center`}>
          <div>
            <Eyebrow n="06" label={`Serving businesses throughout ${CITY}`} />
            <h2 className={H2}>Serving businesses throughout {CITY}<Dot /></h2>
            <p className={lead}>Whether you're in a busy commercial district, an industrial area or a neighbourhood business centre, our team is ready to help, with reliable service and flexible scheduling.</p>
            <Img src="/home/skyline.jpg" alt={`${CITY} skyline`} cls="mt-8 h-32 sm:h-40 rounded" />
          </div>
          <div className={`${card} sm:p-6`}>
            <h3 className="font-heading font-extrabold text-xl text-bauer-ink">Key areas we serve</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {loc.areas.map((a) => (
                <li key={a.slug}><Link href={subHref(loc, a.slug)} className="flex items-center gap-3 text-sm text-bauer-ink bg-white rounded px-3 py-2.5 hover:shadow-md">
                  <span className="text-[var(--acc)]"><Icon n="pin" size={18} /></span>{a.label}
                </Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7 — Why Bauer */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="07" label="Why businesses choose Bauer" />
          <h2 className={`${H2} max-w-3xl`}>Why businesses choose Bauer in {CITY}<Dot /></h2>
          <p className={lead}>More than a painting contractor: a trusted partner known for professionalism, reliability and commitment to quality.</p>
          <ul className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {why.map(([i, t, d], k) => (
              <li key={t} className="flex gap-4 rounded bg-white p-5">
                <span className={`${iconBox} bg-[#F3F6F8]`}><Icon n={i} size={20} /></span>
                <span>
                  <span className="block font-semibold text-bauer-ink"><span className="text-[var(--acc-d)] mr-2">0{k + 1}</span>{t}</span>
                  <span className="block mt-1 text-sm text-gray-600">{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 — What to know */}
      <section className="reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="08" label={`Commercial painting in ${CITY}: what to know`} />
          <h2 className={`${H2} max-w-4xl`}>What property owners should consider<Dot /></h2>
          <p className={lead}>A well-maintained property creates a positive impression, supports operations and protects your investment.</p>
          <ol className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {considerations.map(([t, d], k) => (
              <li key={t} className="border-t-2 border-[var(--acc)] pt-4">
                <h3 className="font-semibold text-bauer-ink"><span className="text-[var(--acc-d)] font-extrabold mr-2">0{k + 1}</span>{t}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 rounded bg-[#F3F6F8] p-5 text-sm text-gray-700"><strong className="text-bauer-ink">Additional considerations:</strong> building age, surface type and operational requirements can all affect the scope of a project. Our team can answer your questions and give guidance tailored to your property.</p>
        </div>
      </section>

      {/* 9 — FAQ */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="09" label="FAQs" />
          <h2 className={H2}>Frequently asked questions<Dot /></h2>
          <p className={lead}>Can't find your question? Contact our team and we'll be happy to help.</p>
          <div className="mt-10 grid lg:grid-cols-2 gap-4 items-start">
            {loc.faqs.map(({ q, a }, k) => (
              <details key={q} open={k === 0} className="group rounded bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-bauer-ink [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
                  {q}
                  <span aria-hidden className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-[#F3F6F8] group-open:bg-[var(--acc)] group-open:text-white text-lg leading-none">
                    <span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Final CTA */}
      <section className="bg-bauer-navy text-white">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center`}>
          <div>
            <Eyebrow n="10" label="Get a free quote" />
            <h2 className={`${HL} mt-4 text-[clamp(30px,4.5vw,58px)] !text-white`}>Ready to transform your commercial property<span className="text-[var(--acc)]">?</span></h2>
            <p className="mt-4 text-white/75 max-w-xl leading-relaxed">Get a free, no-obligation quote and expert advice from our local team.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {["Free consultation", "Detailed quote", "Professional, insured team", "Quality results"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="text-[var(--acc)]"><Icon n="checkc" size={18} /></span>{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/contact" className="hbtn justify-center">Request a Quote <Icon n="arrow" size={16} /></Link>
              <a href={COMPANY.phoneHref} className="font-semibold hover:underline">Or call {COMPANY.phone}</a>
            </div>
          </div>
          <div className="grid gap-4">
            {([["phone", "Call us", COMPANY.phone, COMPANY.hours], ["mail", "Email us", COMPANY.email, "We typically respond within one business day."], ["pin", "Our location", `${CITY}, ${loc.province}`, "Serving the city and surrounding areas."]] as const).map(([i, l, v, s]) => (
              <div key={l} className="flex items-center gap-4 rounded bg-white/5 p-5">
                <span className="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-white/10 text-[var(--acc)]"><Icon n={i} size={20} /></span>
                <span className="min-w-0"><span className="block text-xs text-white/60">{l}</span><span className="block font-bold break-words">{v}</span><span className="block text-xs text-white/60">{s}</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
