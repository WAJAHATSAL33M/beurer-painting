import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { pad, HL, Dot, Img, Eyebrow, Brand, StripCTA, ProcessSection, FinalCta } from "@/components/interior/Shared";
import ServiceAreaSection from "@/components/interior/ServiceAreaSection";
import ApplicationsExplorer from "@/components/interior/ApplicationsExplorer";
import { INTERIOR_SERVICES, INTERIOR_OVERVIEW_POINTS } from "@/lib/interior-services";

export const metadata = {
  title: "Interior Painting Services | Bauer Painting",
  description: "Professional interior painting solutions for offices, retail spaces, healthcare facilities, schools, and more. We help businesses create clean, modern, and productive environments with minimal disruption.",
};

const heroHighlights: [string, string, string][] = [
  ["building", "Commercial Spaces", "Offices, retail and hospitality interiors."],
  ["users", "Institutional Facilities", "Healthcare, education and government spaces."],
  ["grid", "Industrial Environments", "Warehouses, factories and large facilities."],
  ["home", "Retail & Hospitality", "Customer-facing spaces that make an impression."],
];

const spacePoints: [string, string, string][] = [
  ["users", "People & Productivity", "Clean, well-finished interiors support a more focused, professional environment for staff and visitors alike."],
  ["clock", "Minimal Disruption", "We plan and schedule around your operations, working nights, weekends or in phases to keep you running."],
  ["roller", "Quality Materials", "Premium, low-odour coatings selected for durability in high-traffic commercial environments."],
  ["shield", "Consistent Standards", "The same professional workmanship and attention to detail on every space, every time."],
];

const otherServices: [string, string, string, string][] = [
  ["shield", "Commercial Exterior Painting", "Durable exterior painting solutions that protect your property and make a lasting impression.", "/services/exterior-painting"],
  ["layers", "Special Painting & Coating Services", "Specialized coatings for unique surfaces and demanding environments.", "/#services"],
  ["pin", "Service Areas", "Explore Bauer Painting's commercial painting service locations.", "/services/interior-painting#service-area"],
];

export default function InteriorPaintingHub() {
  return (
    <main className="bg-white">
      <Header />

      {/* 1 — Hero */}
      <section className="relative bg-[#0a1220] text-white overflow-hidden reveal">
        <Img src="/home/ind1.jpg" cls="!absolute inset-y-0 right-0 w-full lg:w-[58%]" pos="object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1220] via-[#0a1220]/88 to-[#0a1220]/25" />
        <div className={`relative ${pad} pt-16 pb-14`}>
          <p className="hlabel">Commercial Interior Painting</p>
          <p className="mt-8 text-[13px] font-bold tracking-wide text-white/70">BAUER PAINTING</p>
          <h1 className="mt-4 font-extrabold tracking-tight leading-[1.02] text-[clamp(40px,5.6vw,84px)] max-w-[820px]">
            Interior Spaces Built for Business<Dot />
          </h1>
          <p className="mt-6 text-[clamp(17px,1.4vw,21px)] text-white/90 max-w-lg leading-relaxed">
            Professional interior painting solutions for offices, retail spaces, healthcare facilities, schools, and more. We help businesses create clean, modern, and productive environments with minimal disruption.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
            <Link href="#service-area" className="hghost on-dark">Find Your Service Area <Icon n="arrow" size={16} /></Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl">
            {heroHighlights.map(([ic, t, d]) => (
              <div key={t} className="flex items-start gap-3">
                <span className="mt-0.5"><Icon n={ic} size={22} /></span>
                <div>
                  <p className="text-sm font-semibold">{t}</p>
                  <p className="text-xs text-white/70 mt-1 leading-snug">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — Overview */}
      <section className={`${pad} py-16 bg-white grid lg:grid-cols-2 gap-10 items-center reveal`}>
        <div className="order-2 lg:order-1">
          <Eyebrow n="Overview" label="Interior Painting Overview" />
          <Brand />
          <h2 className={`${HL} mt-4 text-[clamp(32px,4vw,56px)]`}>
            Interior Painting, Without Disrupting What Happens Inside
            <Dot />
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We provide professional interior painting solutions for commercial, institutional, and industrial spaces. Our team works with your schedule to help minimize disruption while delivering high-quality results that support clean, modern, and productive environments.
          </p>
          <div className="mt-8 space-y-5">
            {INTERIOR_OVERVIEW_POINTS.map(([ic, t, d]) => (
              <div key={t} className="flex gap-4 pb-5 border-b border-gray-100 last:border-0">
                <span className="w-11 h-11 rounded-full bg-[var(--acc)]/10 text-[var(--acc)] flex items-center justify-center shrink-0"><Icon n={ic} size={20} /></span>
                <div><p className="font-bold text-bauer-ink">{t}</p><p className="text-sm text-gray-600 mt-1 leading-relaxed">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 relative min-h-[340px] lg:min-h-[460px]">
          <Img src="/home/how-top.jpg" cls="!absolute inset-0 rounded" />
        </div>
      </section>
      <StripCTA kicker="SPACES THAT WORK HARDER." text="Let's discuss how Bauer Painting can help create a cleaner, more professional space for your business." />

      {/* 3 — Applications explorer */}
      <section className={`${pad} py-16 bg-[#F8F9FA] reveal`}>
        <Eyebrow n="Applications" label="Interior Applications" />
        <Brand />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className={`${HL} text-[clamp(32px,4vw,56px)] max-w-xl`}>
            One Service. Many Commercial Environments
            <Dot />
          </h2>
          <p className="text-gray-600 max-w-sm">
            From offices and retail spaces to healthcare facilities and industrial buildings, we provide interior painting solutions for a wide range of commercial environments.
          </p>
        </div>
        <div className="mt-10">
          <ApplicationsExplorer services={INTERIOR_SERVICES.slice(0, 9)} />
        </div>
      </section>

      <ProcessSection />

      {/* 5 — Built for demanding environments */}
      <section className={`${pad} py-16 bg-white grid lg:grid-cols-2 gap-10 items-center reveal`}>
        <div className="relative min-h-[320px] lg:min-h-[420px] order-2 lg:order-1">
          <Img src="/home/why-bg.jpg" cls="!absolute inset-0 rounded" />
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow n="The Bauer Advantage" label="Built for Demanding Environments" />
          <Brand />
          <h2 className={`${HL} mt-4 text-[clamp(30px,3.6vw,50px)]`}>
            A Partner Who Understands Your Space<Dot />
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Commercial interiors require more than a fresh coat of paint — they require a partner who understands your timeline, your operations, and your standards. Our team delivers durable, high-quality finishes with minimal disruption, so your business can keep moving forward.
          </p>
          <div className="mt-8 grid gap-px bg-gray-200 sm:grid-cols-2 rounded overflow-hidden">
            {spacePoints.map(([ic, t, d]) => (
              <div key={t} className="bg-white p-5">
                <Icon n={ic} size={24} />
                <p className="mt-3 font-bold text-bauer-ink text-sm">{t}</p>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Services grid */}
      <section className={`${pad} py-16 bg-[#F8F9FA] reveal`}>
        <Eyebrow n="Services" label="Interior Painting Services" />
        <Brand />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className={`${HL} text-[clamp(32px,4vw,56px)] max-w-xl`}>
            Interior Painting Services
            <Dot />
          </h2>
          <p className="text-gray-600 max-w-sm">
            From offices and retail spaces to schools and healthcare facilities, we provide professional interior painting for a wide range of commercial environments. Explore our services below to find the right solution for your space.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-group">
          {INTERIOR_SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/interior-painting/${s.slug}`} className="reveal-item group block bg-white border border-gray-200 rounded overflow-hidden hover:border-[var(--acc)] transition-colors">
              <div className="relative h-40"><Img src={s.image} alt={s.label} cls="!absolute inset-0" /></div>
              <div className="p-5">
                <p className="text-[var(--acc)] text-xs font-bold">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-bold text-bauer-ink flex items-center justify-between gap-2">
                  {s.label}
                  <Icon n="arrow" size={16} />
                </p>
                <p className="mt-2 text-sm text-gray-600 leading-snug">{s.cardBlurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <StripCTA kicker="A COMPLETE PAINTING PARTNER FOR YOUR BUSINESS." text="Not sure which service fits your space? Let's talk. We'll help you find the right solution." />

      <ServiceAreaSection />

      {/* 8 — Related commercial services */}
      <section className={`${pad} py-16 bg-[#F8F9FA] reveal`}>
        <Eyebrow n="Explore More Services" label="Related Services" />
        <Brand />
        <h2 className={`${HL} mt-4 text-[clamp(32px,4vw,56px)] max-w-xl`}>
          A Complete Painting Partner for Your Business
          <Dot />
        </h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {otherServices.map(([ic, t, d, href]) => (
            <Link key={t} href={href} className="block bg-white border border-gray-200 rounded p-6 hover:border-[var(--acc)] transition-colors">
              <Icon n={ic} size={26} />
              <p className="mt-4 font-bold text-bauer-ink flex items-center justify-between gap-2">{t}<Icon n="arrow" size={16} /></p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{d}</p>
            </Link>
          ))}
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
