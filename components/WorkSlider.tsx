"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";

const TABS = ["All Projects", "Interior", "Exterior", "Industrial", "Commercial", "Coatings"];

type P = { img: string; tag: string; title: string; loc: string; cat: string };

const PROJECTS: P[] = [
  { img: "work1", tag: "Featured Project", title: "Corporate Office Renovation", loc: "Mississauga, ON", cat: "Commercial Office" },
  { img: "work2", tag: "Exterior Painting", title: "Industrial Facility", loc: "Burlington, ON", cat: "Industrial" },
  { img: "work3", tag: "Interior Painting", title: "Healthcare Facility", loc: "Hamilton, ON", cat: "Healthcare" },
  { img: "work4", tag: "Commercial Interior", title: "Retail Storefront", loc: "Oakville, ON", cat: "Retail" },
  { img: "work5", tag: "High-Durability Coatings", title: "Warehouse Facility", loc: "Toronto, ON", cat: "Industrial" },
];

// Which projects (by index) belong to each tab. First entry is the large feature card.
const TAB_PROJECTS: number[][] = [
  [0, 1, 2, 3, 4], // All Projects
  [2, 0, 3],       // Interior
  [1, 4],          // Exterior
  [1, 4],          // Industrial
  [0, 2, 3],       // Commercial
  [4],             // Coatings
];

const Img = ({ src, alt = "", cls = "" }: { src: string; alt?: string; cls?: string }) => (
  <div className={`relative overflow-hidden ${cls}`}>
    <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 33vw, 100vw" />
  </div>
);

function CardMeta({ p, big = false }: { p: P; big?: boolean }) {
  return (
    <>
      <div className={`absolute ${big ? "top-5 left-5" : "top-4 left-4"} hlabel ${big ? "text-[11px]" : "text-[10px]"}`}>{p.tag}</div>
      <div className={`absolute ${big ? "bottom-5 left-5 right-5" : "bottom-4 left-4 right-4"}`}>
        <h3 className={`${big ? "text-3xl leading-tight" : "text-xl"} font-bold`}>{p.title}</h3>
        <p className={`mt-2 ${big ? "text-sm" : "text-xs"} flex items-center justify-between gap-2`}>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Icon n="pin" size={big ? 14 : 12} />{p.loc}</span>
            <span className="flex items-center gap-1"><Icon n="building" size={big ? 14 : 12} />{p.cat}</span>
          </span>
          <span className="whitespace-nowrap">View Project →</span>
        </p>
      </div>
    </>
  );
}

export default function WorkSlider() {
  const [tab, setTab] = useState(0);
  const go = (dir: number) => setTab((t) => (t + dir + TABS.length) % TABS.length);

  return (
    <div>
      {/* Tabs + arrows */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <div role="tablist" aria-label="Filter projects" className="flex flex-1 flex-wrap text-sm border border-gray-200 bg-white rounded-sm overflow-hidden">
          {TABS.map((f, i) => (
            <button
              key={f}
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`relative px-5 py-3.5 transition-colors ${tab === i ? "bg-[#111a24] text-white font-medium" : "text-gray-700 hover:text-black"}`}
            >
              {f}
              {tab === i && <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-[var(--acc)]" />}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => go(-1)} aria-label="Previous category" className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-white transition hover:bg-gray-400">
            <span className="rotate-180 inline-flex"><Icon n="arrow" size={18} /></span>
          </button>
          <button onClick={() => go(1)} aria-label="Next category" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111a24] text-white transition hover:bg-black">
            <Icon n="arrow" size={18} />
          </button>
        </div>
      </div>

      {/* Sliding viewport — one slide per tab */}
      <div className="mt-5 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${tab * 100}%)` }}
        >
          {TAB_PROJECTS.map((idxs, si) => {
            const [feat, ...rest] = idxs.map((i) => PROJECTS[i]);
            return (
              <div key={TABS[si]} className="w-full shrink-0" aria-hidden={si !== tab}>
                <div className="grid lg:grid-cols-[1.25fr_1fr_1fr] lg:grid-rows-2 gap-4">
                  <div className={`relative ${rest.length === 0 ? "lg:col-span-3" : "lg:row-span-2"} min-h-[380px] rounded overflow-hidden text-white`}>
                    <Img src={`/home/${feat.img}.jpg`} alt={feat.title} cls="!absolute inset-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111a24] via-[#111a24]/40 to-transparent" />
                    <CardMeta p={feat} big />
                  </div>
                  {rest.map((p) => (
                    <div key={p.title} className={`relative min-h-[200px] rounded overflow-hidden text-white ${rest.length === 1 ? "lg:row-span-2 lg:col-span-2" : rest.length === 2 ? "lg:row-span-2" : ""}`}>
                      <Img src={`/home/${p.img}.jpg`} alt={p.title} cls="!absolute inset-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111a24] via-[#111a24]/50 to-transparent" />
                      <CardMeta p={p} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
