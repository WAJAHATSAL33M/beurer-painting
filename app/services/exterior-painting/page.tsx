import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { pad, HL, Dot, Img, Eyebrow, Brand, StripCTA, ProcessSection, FinalCta } from "@/components/exterior/Shared";
import ServiceAreaSection from "@/components/exterior/ServiceAreaSection";
import ApplicationsExplorer from "@/components/exterior/ApplicationsExplorer";
import { EXTERIOR_SERVICES, EXTERIOR_OVERVIEW_POINTS } from "@/lib/exterior-services";

export const metadata = {
  title: "Exterior Painting Services | Bauer Painting",
  description: "Professional commercial exterior painting that enhances your property's appearance, protects your investment, and keeps your building looking its best.",
};

const heroHighlights: [string, string, string][] = [
  ["shield", "Durable Finishes", "Coatings designed to perform."],
  ["building", "Professional Appearance", "A well-maintained exterior creates a stronger impression."],
  ["gear", "Minimal Disruption", "We work efficiently to keep your business moving."],
  ["users", "Experienced Team", "Trusted by businesses across our service area."],
];

const weatherPoints: [string, string, string][] = [
  ["chart", "Weather Exposure", "Exterior finishes need to perform through changing conditions, including sun, rain, wind and snow."],
  ["roller", "Surface Preparation", "Proper cleaning and preparation create the foundation for a better, longer-lasting finish."],
  ["building", "Building Appearance", "A well-maintained exterior creates a stronger first impression for clients, tenants and visitors."],
  ["shield", "Long-Term Performance", "We use coating systems that match your property and its environment for durable results."],
];

const otherServices: [string, string, string, string][] = [
  ["roller", "Interior Painting", "Commercial interior environments and specialized interior applications.", "/#services"],
  ["layers", "Special Services", "Coatings, surface preparation, spray painting and other specialized solutions.", "/#services"],
  ["pin", "Service Areas", "Explore Bauer Painting's commercial painting service locations.", "/services/exterior-painting#service-area"],
];

export default function ExteriorPaintingHub() {
  return (
    <main className="bg-white">
      <Header />

      {/* 1 — Hero */}
      <section className="relative bg-[#0a1220] text-white overflow-hidden reveal">
        <Img src="/home/work4.jpg" cls="!absolute inset-y-0 right-0 w-full lg:w-[58%]" pos="object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1220] via-[#0a1220]/88 to-[#0a1220]/25" />
        <div className={`relative ${pad} pt-16 pb-14`}>
          <p className="hlabel">Commercial Exterior Painting</p>
          <p className="mt-8 text-[13px] font-bold tracking-wide text-white/70">BAUER PAINTING</p>
          <h1 className="mt-4 font-extrabold tracking-tight leading-[1.02] text-[clamp(40px,5.6vw,84px)] max-w-[820px]">
            Exteriors Built to Make an Impression<Dot />
          </h1>
          <p className="mt-6 text-[clamp(17px,1.4vw,21px)] text-white/90 max-w-lg leading-relaxed">
            Professional commercial exterior painting that enhances your property&apos;s appearance, protects your investment, and keeps your building looking its best.
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
          <Eyebrow n="Overview" label="Exterior Painting Overview" />
          <Brand />
          <h2 className={`${HL} mt-4 text-[clamp(32px,4vw,56px)]`}>
            Professional Exterior Painting for Lasting Results
            <Dot />
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our commercial exterior painting services are designed to protect your building, enhance its appearance, and extend its life. We combine proven preparation methods, high-quality coatings, and experienced workmanship to deliver results that stand up to the demands of the environment.
          </p>
          <div className="mt-8 space-y-5">
            {EXTERIOR_OVERVIEW_POINTS.map(([ic, t, d]) => (
              <div key={t} className="flex gap-4 pb-5 border-b border-gray-100 last:border-0">
                <span className="w-11 h-11 rounded-full bg-[var(--acc)]/10 text-[var(--acc)] flex items-center justify-center shrink-0"><Icon n={ic} size={20} /></span>
                <div><p className="font-bold text-bauer-ink">{t}</p><p className="text-sm text-gray-600 mt-1 leading-relaxed">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 relative min-h-[340px] lg:min-h-[460px]">
          <Img src="/home/quote.jpg" cls="!absolute inset-0 rounded" />
        </div>
      </section>
      <StripCTA kicker="A STRONGER BUILDING STARTS WITH A BETTER PAINTING PARTNER." text="Let's discuss how Bauer Painting can help protect and enhance your property." />

      {/* 3 — Applications explorer */}
      <section className={`${pad} py-16 bg-[#F8F9FA] reveal`}>
        <Eyebrow n="Applications" label="Exterior Applications" />
        <Brand />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className={`${HL} text-[clamp(32px,4vw,56px)] max-w-xl`}>
            Exterior Applications We Service
            <Dot />
          </h2>
          <p className="text-gray-600 max-w-sm">
            We provide professional exterior painting for a wide range of commercial properties and building components. Explore the applications below to see how we can help protect and enhance your property.
          </p>
        </div>
        <div className="mt-10">
          <ApplicationsExplorer services={EXTERIOR_SERVICES.slice(0, 9)} />
        </div>
      </section>

      <ProcessSection />

      {/* 5 — Weather / challenges */}
      <section className={`${pad} py-16 bg-white grid lg:grid-cols-2 gap-10 items-center reveal`}>
        <div className="relative min-h-[320px] lg:min-h-[420px] order-2 lg:order-1">
          <Img src="/home/why-bg.jpg" cls="!absolute inset-0 rounded" />
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow n="Durability" label="Built for the Exterior Challenges" />
          <Brand />
          <h2 className={`${HL} mt-4 text-[clamp(30px,3.6vw,50px)]`}>
            Your Building&apos;s Exterior Takes the Weather. We Build for It<Dot />
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Commercial buildings face constant exposure to sun, rain, wind, snow and temperature changes. Our exterior painting solutions are designed to meet these challenges with the right preparation, coatings and expertise — so your property looks better and stays protected for the long term.
          </p>
          <div className="mt-8 grid gap-px bg-gray-200 sm:grid-cols-2 rounded overflow-hidden">
            {weatherPoints.map(([ic, t, d]) => (
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
        <Eyebrow n="Services" label="Exterior Painting Services" />
        <Brand />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className={`${HL} text-[clamp(32px,4vw,56px)] max-w-xl`}>
            Exterior Painting Services
            <Dot />
          </h2>
          <p className="text-gray-600 max-w-sm">
            From retail centers to industrial facilities, we provide specialized exterior painting solutions for a wide range of commercial properties. Explore our services below to find the right solution for your project.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-group">
          {EXTERIOR_SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/exterior-painting/${s.slug}`} className="reveal-item group block bg-white border border-gray-200 rounded overflow-hidden hover:border-[var(--acc)] transition-colors">
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
      <StripCTA kicker="SPECIALIZED SOLUTIONS FOR A STRONGER TOMORROW." text="Not sure which service fits your project? Let's talk. We'll help you find the right solution." />

      <ServiceAreaSection />

      {/* 8 — Related commercial services */}
      <section className={`${pad} py-16 bg-[#F8F9FA] reveal`}>
        <Eyebrow n="Related" label="Related Services" />
        <Brand />
        <h2 className={`${HL} mt-4 text-[clamp(32px,4vw,56px)] max-w-xl`}>
          Explore Our Other Commercial Services
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
