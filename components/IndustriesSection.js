"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GREEN = "#25D366";
const INK = "#0B1220";

/* ---------- data ---------- */
const industries = [
  { name: "Commercial Offices", blurb: "Create productive, professional spaces with high-quality interior painting.", img: "/home/ind1.jpg", icon: "offices" },
  { name: "Retail Interiors", blurb: "Fresh, on-brand finishes that welcome customers in.", img: "/home/ind2.jpg", icon: "retail" },
  { name: "Warehouses & Factories", blurb: "Durable coatings built for high-traffic industrial use.", img: "/home/ind3.jpg", icon: "warehouse" },
  { name: "Healthcare Facilities", blurb: "Low-odour, hygienic finishes for sensitive environments.", img: "/home/ind4.jpg", icon: "health" },
  { name: "Hotels & Hospitality", blurb: "Polished spaces that make the right first impression.", img: "/home/ind5.jpg", icon: "hotel" },
  { name: "Restaurants", blurb: "Fast turnarounds that respect your operating hours.", img: "/home/ind6.jpg", icon: "dining" },
  { name: "Schools & Educational", blurb: "Safe, scheduled work around the academic calendar.", img: "/home/ind7.jpg", icon: "school" },
  { name: "Government Buildings", blurb: "Compliant, professional-grade painting programs.", img: "/home/ind8.jpg", icon: "civic" },
  { name: "Gyms & Sports Facilities", blurb: "Coatings that stand up to heavy daily use.", img: "/home/ind9.jpg", icon: "gym" },
  { name: "Places of Worship", blurb: "Careful, respectful work in community spaces.", img: "/home/ind10.jpg", icon: "worship" },
  { name: "High-Rises", blurb: "Large-scale exterior and common-area painting programs.", img: "/home/ind11.jpg", icon: "tower" },
  { name: "Parking Garages", blurb: "Structural coatings built to handle traffic and weather.", img: "/home/ind12.jpg", icon: "parking" },
];

/* ---------- icons (24px stroke) ---------- */
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
const icons = {
  offices: <><path d="M6 21V5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 5v16" /><path d="M3 21h18" /><path d="M9.5 7.5h2M13.5 7.5h2M9.5 11h2M13.5 11h2M9.5 14.5h2M13.5 14.5h2" /></>,
  retail: <><path d="M4.5 9.5L6 4.5h12l1.5 5" /><path d="M4.5 9.5V19h15V9.5" /><path d="M4.5 9.5h15" /><path d="M9.5 19v-4.5h5V19" /></>,
  warehouse: <><path d="M3.5 20.5v-9.7L12 4.5l8.5 6.3v9.7" /><path d="M3.5 20.5h17" /><path d="M8.5 20.5v-5.5h7v5.5" /></>,
  health: <><circle cx="12" cy="12" r="8.5" /><path d="M12 8.5v7M8.5 12h7" /></>,
  hotel: <><path d="M12 3.5l8.5 4.7-8.5 4.7-8.5-4.7z" /><path d="M3.5 13l8.5 4.7L20.5 13" /><path d="M3.5 16.8L12 21.5l8.5-4.7" /></>,
  dining: <><path d="M4 18.5h16" /><path d="M12 8.5a6.5 6.5 0 0 1 6.5 6.5h-13A6.5 6.5 0 0 1 12 8.5z" /><path d="M12 8.5V6" /><circle cx="12" cy="4.8" r="0.9" /></>,
  school: <><path d="M12 4.5L2.5 9.5 12 14.5l9.5-5z" /><path d="M6.5 12v4.2c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8V12" /><path d="M21.5 9.5V15" /></>,
  civic: <><path d="M3.5 9.5L12 4.5l8.5 5" /><path d="M5.5 10.5v7M10 10.5v7M14 10.5v7M18.5 10.5v7" /><path d="M3.5 20.5h17" /></>,
  gym: <><path d="M7 8.5v7M17 8.5v7M4 10.5v3M20 10.5v3M7 12h10" /></>,
  worship: <><path d="M12 2.5V6M10.2 4.2h3.6" /><path d="M5.5 20.5v-9.3L12 6l6.5 5.2v9.3" /><path d="M3.5 20.5h17" /><path d="M10.2 20.5v-4.5h3.6v4.5" /></>,
  tower: <><path d="M6.5 20.5V4.5h8v16" /><path d="M14.5 9.5h4.5v11" /><path d="M3.5 20.5h17" /><path d="M9.3 8h2.4M9.3 12h2.4M9.3 16h2.4" /></>,
  parking: <><rect x="4" y="4" width="16" height="16" rx="3.5" /><path d="M10 16.5v-9h3.2a2.6 2.6 0 0 1 0 5.2H10" /></>,
};
const Icon = ({ n, size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...P} aria-hidden="true">{icons[n]}</svg>
);
const ArrowL = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M11.5 3.5L6 9l5.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ArrowR = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M6.5 3.5L12 9l-5.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

/* ---------- section ---------- */
export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const total = industries.length;
  const current = industries[active];

  const goTo = (i) => {
    setActive(((i % total) + total) % total);
    // On small screens the featured panel sits above the grid — bring the
    // updated card into view so the change is visible.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      document.getElementById("industries-featured")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <section aria-label="Industries we paint" className="bg-white">
      <style>{`
        @keyframes featSwap { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        .feat-swap { animation: featSwap .45s ease; }
      `}</style>

      {/* ============ featured panel ============ */}
      <div id="industries-featured" className="relative overflow-hidden" style={{ background: INK }}>
        {/* crossfading backgrounds */}
        <div className="absolute inset-0" aria-hidden="true">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === active ? "opacity-100" : "opacity-0"}`}
            >
              <Image src={ind.img} alt="" fill className="object-cover" sizes="100vw" priority={i === 0} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0" style={{ background: "rgba(11,18,32,0.62)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-xl rounded-2xl border border-white/15 bg-white/[0.08] p-7 shadow-2xl backdrop-blur-xl sm:p-9 lg:p-11">
            <div className="flex items-center gap-5">
              <div key={active} className="feat-swap min-w-0 flex-1" aria-live="polite">
                <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">
                  <span className="h-[2px] w-8" style={{ background: GREEN }} />
                  Featured Industry
                </p>
                <h3 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white lg:text-[40px] lg:leading-[1.1]">
                  {current.name}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
                  {current.blurb}
                </p>
              </div>
              <Link
                href="/our-work"
                aria-label={`See our ${current.name} work`}
                className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition hover:scale-105 hover:border-white sm:flex"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7 4.5v11l9-5.5z" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* arrows */}
        <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3 lg:right-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous industry"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 active:scale-95"
          >
            {ArrowL}
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next industry"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition hover:bg-white/85 active:scale-95"
            style={{ color: INK }}
          >
            {ArrowR}
          </button>
        </div>
      </div>

      {/* ============ industry grid ============ */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
          {industries.slice(0, 8).map((ind, i) => (
            <IndustryCard key={ind.name} ind={ind} active={i === active} onSelect={() => goTo(i)} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-5 lg:gap-5">
          {industries.slice(8).map((ind, k) => (
            <IndustryCard key={ind.name} ind={ind} active={k + 8 === active} onSelect={() => goTo(k + 8)} />
          ))}

          {/* more-industries block */}
          <div className="col-span-2 flex flex-col justify-center rounded-xl p-2 sm:p-4">
            <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-[#0B1220]">
              <span className="h-[3px] w-8" style={{ background: GREEN }} />
              More industries.<br className="sm:hidden" /> Stronger communities.
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-500">
              No matter the industry, our focus remains the same — quality workmanship,
              efficient execution, and spaces that make a lasting impression.
            </p>
            <div className="mt-6">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-[#0B1220] transition hover:border-[#0B1220]"
              >
                View All Industries
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- grid card ---------- */
function IndustryCard({ ind, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      aria-label={`Show ${ind.name}`}
      className={`group relative overflow-hidden rounded-xl text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] ${
        active ? "ring-2 ring-[#25D366] ring-offset-2 ring-offset-white" : "hover:-translate-y-1 hover:shadow-xl"
      }`}
    >
      <span className="relative block aspect-[3/3.4]">
        <Image
          src={ind.img}
          alt={ind.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          sizes="(min-width:1024px) 12vw, (min-width:640px) 22vw, 45vw"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 block p-4">
          <span className="block text-white"><Icon n={ind.icon} /></span>
          <span className="mt-2 block text-[13.5px] font-bold leading-snug text-white">{ind.name}</span>
        </span>
      </span>
    </button>
  );
}
