import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { pad, HL, Dot, Img, Eyebrow, Brand, StripCTA, ProcessSection, FinalCta } from "./Shared";
import FaqSection from "./FaqSection";
import ServiceAreaSection from "./ServiceAreaSection";
import type { ExteriorService } from "@/lib/exterior-services";
import { EXTERIOR_OVERVIEW_POINTS, EXTERIOR_WHY_IT_MATTERS, getRelatedExteriorServices } from "@/lib/exterior-services";

export default function ExteriorServiceTemplate({ service }: { service: ExteriorService }) {
  const related = getRelatedExteriorServices(service.slug, 6);

  return (
    <main className="bg-white">
      <Header />

      {/* 1 — Hero */}
      <section className="relative bg-white reveal">
        <div className={`${pad} pt-10 pb-14 grid lg:grid-cols-2 gap-10 items-center`}>
          <div>
            <p className="text-xs text-gray-500 flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-[var(--acc)]">Home</Link>
              <span>|</span>
              <Link href="/services/exterior-painting" className="hover:text-[var(--acc)]">Exterior Painting Services</Link>
              <span>|</span>
              <span className="text-gray-700">{service.label}</span>
            </p>
            <Brand />
            <h1 className={`${HL} mt-3 text-[clamp(38px,5vw,64px)]`}>
              {service.label}
              <Dot />
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-lg leading-relaxed">{service.description}</p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              {service.highlights.map((h) => (
                <span key={h} className="flex items-center gap-2 text-sm font-semibold text-bauer-ink">
                  <span className="w-9 h-9 rounded-full bg-[var(--acc)]/10 text-[var(--acc)] flex items-center justify-center"><Icon n="check" size={16} /></span>
                  {h}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
              <Link href="/services/exterior-painting#service-area" className="hghost">Find Your Service Area <Icon n="arrow" size={16} /></Link>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[440px]">
            <Img src={service.image} alt={service.label} cls="!absolute inset-0 rounded" />
            <div className="absolute right-5 bottom-5 bg-white shadow-lg p-4 max-w-[220px] rounded hidden sm:block">
              <p className="text-xs font-bold text-bauer-ink flex items-center gap-2"><Icon n="shield" size={16} />Stronger Properties.</p>
              <p className="text-xs text-gray-500 mt-1">Brighter Tomorrows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Overview */}
      <section className={`${pad} py-16 bg-[#F8F9FA] grid lg:grid-cols-2 gap-10 items-center reveal`}>
        <div className="relative min-h-[320px] lg:min-h-[420px]">
          <Img src={service.image} alt="" cls="!absolute inset-0 rounded" />
        </div>
        <div>
          <Eyebrow n="Overview" label="Service Overview" />
          <Brand />
          <h2 className={`${HL} mt-4 text-[clamp(30px,3.6vw,48px)]`}>
            A Professional Finish for {service.label}
            <Dot />
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            {service.overview ?? service.description}
          </p>
          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {EXTERIOR_OVERVIEW_POINTS.map(([ic, t, d]) => (
              <div key={t} className="flex gap-3">
                <span className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0"><Icon n={ic} size={18} /></span>
                <div><p className="font-semibold text-sm text-bauer-ink">{t}</p><p className="text-xs text-gray-600 mt-1 leading-relaxed">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StripCTA kicker="INVEST IN A STRONGER FIRST IMPRESSION." text={`Let's discuss how our ${service.label.toLowerCase()} services can elevate your property.`} />

      {/* 3 — Comprehensive coverage */}
      <section className="relative bg-[#0b1118] text-white overflow-hidden reveal">
        <div className={`relative ${pad} py-16`}>
          <Eyebrow n="Coverage" label="What We Service" />
          <Brand />
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-heading font-extrabold tracking-[-0.02em] leading-[1.05] text-[clamp(30px,3.6vw,48px)] max-w-xl">
              Comprehensive Exterior Coverage
              <Dot />
            </h2>
            <p className="text-white/70 max-w-sm leading-relaxed">
              We paint and protect every part of your {service.label.toLowerCase()}, using high-performance coatings designed for durability, beauty, and long-term performance.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {service.coverageAreas.map((a, i) => (
              <span key={a} className="flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full border border-white/15 bg-white/5 text-sm text-white/90">
                <span className="text-[var(--acc)] font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* 5 — Why this matters */}
      <section className={`${pad} py-16 bg-[#F8F9FA] reveal`}>
        <Eyebrow n="Why It Matters" label="Why This Service Matters" />
        <Brand />
        <h2 className={`${HL} mt-4 text-[clamp(30px,3.6vw,48px)] max-w-2xl`}>
          More Than Paint. A Stronger Business
          <Dot />
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl leading-relaxed">
          Your exterior is the first thing customers, tenants and visitors see. A clean, well-maintained property builds trust and helps your business stand out.
        </p>
        <div className="mt-8 grid gap-px bg-gray-200 sm:grid-cols-2 rounded overflow-hidden reveal-group">
          {EXTERIOR_WHY_IT_MATTERS.map(([ic, t, d], i) => (
            <div key={t} className={`reveal-item bg-white p-7 flex gap-5 ${i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""}`}>
              <span className="w-12 h-12 rounded-full bg-[var(--acc)]/10 text-[var(--acc)] flex items-center justify-center shrink-0"><Icon n={ic} size={22} /></span>
              <div>
                <p className="font-bold text-bauer-ink">{t}</p>
                <p className={`mt-1.5 text-sm text-gray-600 leading-relaxed ${i % 2 === 1 ? "sm:ml-auto" : ""} max-w-sm`}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <StripCTA kicker="INVEST IN AN EXTERIOR THAT WORKS FOR YOUR BUSINESS." text="A professionally painted exterior isn't just about appearance — it's about creating opportunities for growth." />

      {/* 6 — Related services */}
      <section className={`${pad} py-16 bg-white reveal`}>
        <Eyebrow n="Related" label="Related Services" />
        <Brand />
        <h2 className={`${HL} mt-4 text-[clamp(30px,3.6vw,48px)] max-w-2xl`}>
          Explore Our Exterior Painting Services
          <Dot />
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-group">
          {related.map((s) => (
            <Link key={s.slug} href={`/services/exterior-painting/${s.slug}`} className="reveal-item group block border border-gray-200 rounded overflow-hidden hover:border-[var(--acc)] transition-colors">
              <div className="relative h-36"><Img src={s.image} alt={s.label} cls="!absolute inset-0" /></div>
              <div className="p-4">
                <p className="font-semibold text-bauer-ink text-sm flex items-center justify-between gap-2">{s.label}<Icon n="arrow" size={14} /></p>
                <p className="mt-1.5 text-xs text-gray-600 leading-snug">{s.cardBlurb}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/services/exterior-painting" className="hghost mt-8 inline-flex">View All Exterior Services <Icon n="arrow" size={16} /></Link>
      </section>

      <ServiceAreaSection />
      <FaqSection />
      <FinalCta title={`Let's Bring Your ${service.label} Project to Life`} />
      <Footer />
    </main>
  );
}
