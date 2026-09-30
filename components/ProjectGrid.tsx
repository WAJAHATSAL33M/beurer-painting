"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export type Project = {
  id: string;
  img: string;
  title: string;
  location: string;
  category: string; // shown as the small label on the card
  tags: string[]; // filter membership — a project can match more than one
};

const FILTERS = ["All Projects", "Interior", "Exterior", "Industrial", "Commercial", "Coatings"];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All Projects");

  const visible = useMemo(
    () => (active === "All Projects" ? projects : projects.filter((p) => p.tags.includes(active))),
    [active, projects]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects by type">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={`px-5 py-2.5 text-sm font-semibold rounded-full border transition-colors ${
              active === f
                ? "bg-[#111a24] text-white border-[#111a24]"
                : "bg-white text-gray-700 border-gray-200 hover:border-[var(--acc)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-gray-500 py-10">No projects in this category yet — check back soon.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p) => (
            <div
              key={p.id}
              className="group relative h-72 rounded overflow-hidden text-white animate-[fadeUp_.4s_ease-out_both]"
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111a24] via-[#111a24]/40 to-transparent" />
              <div className="absolute top-4 left-4 text-[11px] font-semibold tracking-widest uppercase bg-black/40 px-2.5 py-1 rounded">
                {p.category}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold leading-tight">{p.title}</h3>
                <p className="mt-1.5 text-xs flex items-center justify-between text-white/85">
                  <span>{p.location}</span>
                  <span className="inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
