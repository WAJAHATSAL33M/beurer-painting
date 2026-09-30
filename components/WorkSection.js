"use client";

import { useState } from "react";

const filters = ["All Projects", "Interior", "Exterior", "Industrial", "Commercial", "Coatings"];

const projects = [
  {
    title: "Corporate Office Renovation",
    location: "Mississauga, ON",
    category: "Commercial Office",
    tag: "Featured Project",
    featured: true,
  },
  {
    title: "Industrial Facility",
    location: "Burlington, ON",
    category: "Industrial",
    tag: "Exterior Painting",
  },
  {
    title: "Healthcare Facility",
    location: "Hamilton, ON",
    category: "Healthcare",
    tag: "Interior Painting",
  },
  {
    title: "Retail Storefront",
    location: "Oakville, ON",
    category: "Retail",
    tag: "Commercial Interior",
  },
  {
    title: "Warehouse Facility",
    location: "Toronto, ON",
    category: "Industrial",
    tag: "Epoxy Floor Coatings",
  },
];

const badges = [
  { label: "Quality Workmanship" },
  { label: "On Time Completion" },
  { label: "Diverse Projects" },
  { label: "Trusted by Businesses" },
];

export default function WorkSection() {
  const [filter, setFilter] = useState(filters[0]);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-text-muted">
              <span className="h-px w-8 bg-primary" />
              OUR WORK
            </div>
            <h2 className="mt-5 max-w-md font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              Work that speaks for itself.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-text-muted">
              From modern office spaces to large-scale industrial facilities, our work reflects a
              commitment to quality, precision, and professional results.
            </p>
            <a
              href="/our-work"
              className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              View All Projects →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs font-semibold text-text-muted sm:grid-cols-4">
            {badges.map((b) => (
              <div key={b.label} className="max-w-[8rem]">{b.label}</div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f ? "bg-ink text-white" : "text-text-muted hover:text-text"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {featured && (
            <a href="/our-work/1" className="group relative row-span-2 block">
              <div className="photo aspect-[4/3] lg:aspect-auto lg:h-full" aria-hidden="true">
                {featured.title.toLowerCase()} photo
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                  {featured.tag}
                </div>
                <h3 className="mt-1 font-heading text-2xl font-bold text-white">{featured.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-white/70">
                  <span>{featured.location}</span>
                  <span className="text-white/90 group-hover:text-primary">View Project →</span>
                </div>
              </div>
            </a>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((project) => (
              <a key={project.title} href="/our-work/1" className="group relative block">
                <div className="photo aspect-[4/3]" aria-hidden="true">
                  {project.title.toLowerCase()} photo
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {project.tag}
                  </div>
                  <h3 className="mt-1 font-heading text-base font-bold text-white">{project.title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-white/70">
                    <span>{project.location}</span>
                    <span className="text-white/90 group-hover:text-primary">View Project →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <blockquote className="max-w-lg font-heading text-xl font-semibold italic">
            <span className="mr-1 text-primary">&ldquo;</span>
            Well-executed spaces do more than look good. They help businesses perform better.
          </blockquote>
          <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-text-muted">
            Different projects.
            <br />
            Stronger communities.
          </p>
          <a
            href="/our-work"
            className="inline-flex items-center gap-2 border border-text/20 px-6 py-3 text-sm font-semibold text-text hover:border-text"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
