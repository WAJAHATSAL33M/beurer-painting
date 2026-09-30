"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SEC } from "@/lib/spacing";

const pad = "px-6 lg:px-[max(2.5rem,calc((100vw-1240px)/2))]";

const industries = [
  { name: "Commercial Offices", blurb: "Create productive, professional spaces with high-quality interior painting.", icon: "building" },
  { name: "Retail Interiors", blurb: "Fresh, on-brand finishes that welcome customers in.", icon: "home" },
  { name: "Warehouses & Factories", blurb: "Durable coatings built for high-traffic industrial use.", icon: "grid" },
  { name: "Healthcare Facilities", blurb: "Low-odour, hygienic finishes for sensitive environments.", icon: "shield" },
  { name: "Hotels & Hospitality", blurb: "Polished spaces that make the right first impression.", icon: "layers" },
  { name: "Restaurants", blurb: "Fast turnarounds that respect your operating hours.", icon: "dot" },
  { name: "Schools & Educational", blurb: "Safe, scheduled work around the academic calendar.", icon: "doc" },
  { name: "Government Buildings", blurb: "Compliant, professional-grade painting programs.", icon: "building" },
  { name: "Gyms & Sports Facilities", blurb: "Coatings that stand up to heavy daily use.", icon: "gear" },
  { name: "Places of Worship", blurb: "Careful, respectful work in community spaces.", icon: "home" },
  { name: "High-Rises", blurb: "Large-scale exterior and common-area painting programs.", icon: "building" },
  { name: "Parking Garages", blurb: "Structural coatings built to handle traffic and weather.", icon: "grid" },
];
const img = (i: number) => `/home/ind${i + 1}.jpg`;

const Side = ({ lines }: { lines: string[] }) => (
  <p className="hidden lg:block text-[12px] tracking-[0.22em] leading-7 text-white/80">
    {lines.map((l) => <span key={l} className="block">{l}</span>)}
    <span className="block w-9 h-0.5 bg-[var(--acc)] mt-3" />
  </p>
);

export default function IndustriesShowcase() {
  const [active, setActive] = useState(0);
  const total = industries.length;
  const current = industries[active];

  const goTo = (i: number) => {
    setActive(((i % total) + total) % total);
    // On small screens the featured panel sits above the grid — bring the
    // freshly updated card into view so the change is visible.
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
      document.getElementById("industries-featured")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);
  const num = String(active + 1).padStart(2, "0");

  return (
    <section aria-label="Industries we paint" className="bg-[#0d1520] text-white reveal">
      <style>{`
        @keyframes indSwap { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .ind-swap { animation: indSwap .45s ease; }
      `}</style>

      {/* ---------- featured panel ---------- */}
      <div id="industries-featured" className="relative min-h-[460px] overflow-hidden">
        {/* crossfading backgrounds, one per industry */}
        <div className="absolute inset-0" aria-hidden="true">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`absolute inset-y-0 right-0 w-full lg:w-[56%] transition-opacity duration-700 ease-out ${i === active ? "opacity-100" : "opacity-0"}`}>
              <Image src={img(i)} alt="" fill className="object-cover" sizes="(min-width:1024px) 56vw, 100vw" priority={i === 0} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1520] via-[#0d1520]/90 to-transparent lg:via-[#0d1520]/70" />

        <div className={`relative ${pad} pt-16 pb-10 lg:pb-56`}>
          <div className="flex items-start justify-start gap-10">
            <div className="max-w-[620px]">
              <p className="hlabel">Industries We Paint</p>
              <h2 className="mt-8 text-[clamp(36px,4vw,58px)] leading-[1.05] tracking-tight"><b className="font-extrabold">Different Industries.</b><br /><span className="font-light text-white/85">A Higher Standard.</span></h2>
              <p className="mt-6 text-lg text-white/85 max-w-lg leading-relaxed">From offices and retail spaces to industrial facilities and healthcare buildings, Bauer Painting delivers professional results for a wide range of commercial environments.</p>
              <Link href="/industries" className="hbtn mt-8">Explore All Industries <Icon n="arrow" size={16} /></Link>
            </div>
            <Side lines={["SPACES", "PEOPLE", "BUSINESSES", "COMMUNITIES"]} />
          </div>
        </div>

        {/* mobile: featured card in normal flow so it never overlaps content */}
        <div className={`relative ${pad} pb-12 lg:hidden`} aria-live="polite">
          <div key={active} className="ind-swap flex items-center gap-5 rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <div className="min-w-0">
              <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-white/70"><span className="h-0.5 w-8 bg-[var(--acc)]" />FEATURED INDUSTRY</p>
              <p className="mt-3 text-2xl font-bold">{current.name}</p>
              <p className="mt-1 text-sm text-white/75">{current.blurb}</p>
            </div>
            <div className="ml-auto flex shrink-0 items-center gap-2">
              <button type="button" onClick={prev} aria-label="Previous industry" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white transition active:scale-95"><span className="inline-flex rotate-180"><Icon n="arrow" size={16} /></span></button>
              <button type="button" onClick={next} aria-label="Next industry" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0d1520] transition active:scale-95"><Icon n="arrow" size={16} /></button>
            </div>
          </div>
        </div>

        {/* desktop: pager rail with working arrows */}
        <div className="absolute inset-y-0 right-0 hidden w-16 flex-col items-center justify-between bg-[#0d1520] py-16 lg:flex">
          <p className="text-center text-[11px] font-medium leading-7 tracking-[0.24em] text-white/70">
            <span className="text-[var(--acc)]">{num}</span><br />
            {[0, 1, 2].map((s) => (
              <span key={s}><span className={`inline-block h-px w-5 ${s < Math.round(((active + 1) / total) * 3) ? "bg-[var(--acc)]" : "bg-white/50"}`} /><br /></span>
            ))}
            {String(total).padStart(2, "0")}
          </p>
          <div className="flex flex-col gap-3">
            <button type="button" onClick={prev} aria-label="Previous industry" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/25 text-white transition hover:bg-white/40 active:scale-95"><span className="rotate-180 inline-flex"><Icon n="arrow" size={18} /></span></button>
            <button type="button" onClick={next} aria-label="Next industry" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0d1520] transition hover:bg-white/85 active:scale-95"><Icon n="arrow" size={18} /></button>
          </div>
        </div>

        {/* desktop: floating glass featured card */}
        <div className="absolute bottom-8 left-6 right-6 hidden max-w-xl items-center gap-6 rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-md lg:flex lg:left-[max(2.5rem,calc((100vw-1240px)/2))]" aria-live="polite">
          <div key={active} className="ind-swap">
            <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-white/70"><span className="h-0.5 w-8 bg-[var(--acc)]" />FEATURED INDUSTRY<span className="h-px flex-1 bg-white/25" /></p>
            <p className="mt-3 text-2xl font-bold">{current.name}</p>
            <p className="mt-1 text-sm text-white/75">{current.blurb}</p>
          </div>
          <span className="ml-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/70"><Icon n="play" size={20} /></span>
        </div>
      </div>

      {/* ---------- tile grid (roomier) ---------- */}
      <div className={`${pad} ${SEC} bg-[#F3F4F6] text-white`}>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 reveal-group">
          {industries.slice(0, 8).map((ind, i) => (
            <TileButton key={ind.name} index={i} ind={ind} active={i === active} onSelect={() => goTo(i)} />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 reveal-group">
          {industries.slice(8).map((ind, k) => (
            <TileButton key={ind.name} index={k + 8} ind={ind} active={k + 8 === active} onSelect={() => goTo(k + 8)} />
          ))}
          <div className="col-span-2 sm:col-span-4 lg:col-span-4 text-gray-700 flex flex-wrap items-center gap-6 p-4 lg:p-6">
            <div className="flex-1 min-w-[240px]"><p className="hlabel text-xs !tracking-[.16em]">More Industries.<br />Stronger Communities.</p><p className="mt-4 text-sm text-gray-600 leading-relaxed">No matter the industry, our focus remains the same — quality workmanship, efficient execution, and spaces that make a lasting impression.</p></div>
            <Link href="/industries" className="hghost sm bg-gray-200/70 border-transparent">View All Industries <Icon n="arrow" size={14} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TileButton({ index, ind, active, onSelect }: { index: number; ind: { name: string; icon: string }; active: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      aria-label={`Show ${ind.name} as featured industry`}
      className={`reveal-item group relative h-44 rounded overflow-hidden text-left text-sm font-medium text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)] ${active ? "ring-2 ring-[var(--acc)] ring-offset-2 ring-offset-[#F3F4F6]" : "hover:-translate-y-1 hover:shadow-lg"}`}
    >
      <span className="absolute inset-0 block">
        <Image src={img(index)} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width:1024px) 11vw, (min-width:640px) 22vw, 44vw" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-t from-[#111a24] via-[#111a24]/70 to-transparent" />
      <span className="absolute bottom-3 left-3 right-3 block"><Icon n={ind.icon} size={24} /><span className="mt-2 block leading-tight">{ind.name}</span></span>
    </button>
  );
}
