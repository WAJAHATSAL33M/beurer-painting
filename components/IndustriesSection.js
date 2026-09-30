"use client";

import { useState } from "react";

const industries = [
  { name: "Commercial Offices", blurb: "Create productive, professional spaces with high-quality interior painting." },
  { name: "Retail Interiors", blurb: "Fresh, on-brand finishes that welcome customers in." },
  { name: "Warehouses & Factories", blurb: "Durable coatings built for high-traffic industrial use." },
  { name: "Healthcare Facilities", blurb: "Low-odour, hygienic finishes for sensitive environments." },
  { name: "Hotels & Hospitality", blurb: "Polished spaces that make the right first impression." },
  { name: "Restaurants", blurb: "Fast turnarounds that respect your operating hours." },
  { name: "Schools & Educational", blurb: "Safe, scheduled work around the academic calendar." },
  { name: "Government Buildings", blurb: "Compliant, professional-grade painting programs." },
  { name: "Gyms & Sports Facilities", blurb: "Coatings that stand up to heavy daily use." },
  { name: "Places of Worship", blurb: "Careful, respectful work in community spaces." },
  { name: "High-Rises", blurb: "Large-scale exterior and common-area painting programs." },
  { name: "Parking Garages", blurb: "Structural coatings built to handle traffic and weather." },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/60">
              <span className="h-px w-8 bg-primary" />
              INDUSTRIES WE PAINT
            </div>
            <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              Different industries. A higher standard.
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              From offices and retail spaces to industrial facilities and healthcare buildings, Bauer
              Painting delivers professional results for a wide range of commercial environments.
            </p>
            <a
              href="/industries"
              className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Explore All Industries →
            </a>
          </div>

          <div className="relative">
            <div className="photo aspect-[4/3]" aria-hidden="true">
              {current.name.toLowerCase()} — representative photo
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 bg-ink/95 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
                  <span className="h-px w-5 bg-primary" />
                  Featured Industry
                </div>
                <div className="mt-1 font-heading text-lg font-bold">{current.name}</div>
                <p className="mt-1 text-xs text-white/60">{current.blurb}</p>
              </div>
            </div>
            <div className="absolute right-4 top-4 flex items-center gap-2 text-xs text-white/50">
              <button
                aria-label="Previous industry"
                onClick={() => setActive((i) => (i - 1 + industries.length) % industries.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                ←
              </button>
              <button
                aria-label="Next industry"
                onClick={() => setActive((i) => (i + 1) % industries.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink hover:bg-white/90"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {industries.map((industry, i) => (
            <button
              key={industry.name}
              onClick={() => setActive(i)}
              className={`photo aspect-square text-left text-[11px] font-semibold leading-tight ${
                i === active ? "ring-2 ring-primary" : ""
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border-on-ink pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-white/70">
            No matter the industry, our focus remains the same — quality workmanship, efficient
            execution, and spaces that make a lasting impression.
          </p>
          <a
            href="/industries"
            className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
          >
            View All Industries →
          </a>
        </div>
      </div>
    </section>
  );
}
