"use client";

import { useState } from "react";

const areas = [
  "Mississauga",
  "Toronto",
  "Oakville",
  "Burlington",
  "Hamilton",
  "Guelph",
  "Kitchener",
  "Cambridge",
  "Milton",
  "Brampton",
  "St. Catharines",
  "Niagara Falls",
];

const bottomFeatures = [
  { title: "Local Expertise", description: "We understand the unique needs of commercial properties in your area." },
  { title: "Reliable Service", description: "On time, on schedule, and ready when you are." },
  { title: "Supporting Local Businesses", description: "Proud to work with businesses across our communities." },
  { title: "Bigger Spaces. Brighter Tomorrows.", description: "" },
];

export default function ServiceAreaSection() {
  const [postal, setPostal] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-text-muted">
              <span className="h-px w-8 bg-primary" />
              OUR SERVICE AREA
            </div>
            <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              Is Bauer Painting available for your project?
            </h2>
            <p className="mt-4 max-w-md text-text-muted">
              We provide commercial painting services across the Greater Toronto and Hamilton Area.
              Enter your postal code to confirm if we service your location.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setChecked(postal.trim().length > 0);
              }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <label className="sr-only" htmlFor="area-postal">Postal code</label>
              <input
                id="area-postal"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
                placeholder="Enter your postal code"
                className="flex-1 border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Find Service →
              </button>
            </form>
            {checked && (
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-green-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-white">✓</span>
                We service your area! Commercial painting services are available in your location.
              </p>
            )}

            <blockquote className="mt-10 max-w-sm font-heading text-lg italic text-text/80">
              &ldquo;From your neighbourhood to major commercial hubs, we help build better spaces
              across the region.&rdquo;
            </blockquote>
          </div>

          <div className="relative">
            <div className="photo photo-light aspect-[4/3]" aria-hidden="true">
              service area map — GTA &amp; Hamilton region
            </div>
            <div className="absolute right-4 top-4 hidden w-48 bg-ink p-4 text-white sm:block">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                Our Service Areas
              </div>
              <ul className="mt-2 space-y-1 text-xs text-white/80">
                {areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {bottomFeatures.map((feature) => (
            <div key={feature.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide">{feature.title}</h3>
              {feature.description && (
                <p className="mt-2 text-sm text-text-muted">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
