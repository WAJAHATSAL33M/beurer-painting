"use client";

import { useState } from "react";

const perks = [
  { title: "Quick & Easy Process", description: "Get started in minutes." },
  { title: "Tailored Quotes", description: "Based on your project needs." },
  { title: "Responsive Team", description: "We're here to help." },
  { title: "No Obligation", description: "Just expert advice." },
];

const projectTypes = [
  { id: "interior", title: "Interior Painting", description: "Offices, retail, healthcare, schools, and more." },
  { id: "exterior", title: "Exterior Painting", description: "Buildings, facades, siding, masonry, and more." },
  { id: "special", title: "Special Services", description: "Epoxy floors, coatings, spray painting, and more." },
  { id: "multiple", title: "Multiple Services", description: "A combination of interior, exterior, or special services." },
];

const wizardSteps = ["Project Type", "Property Type", "Location", "Project Details", "Your Information"];

export default function QuoteCTA() {
  const [selected, setSelected] = useState("interior");

  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
        <div className="relative flex flex-col justify-between overflow-hidden px-6 py-16 lg:px-10 lg:py-20">
          <div className="photo absolute inset-0 opacity-50" aria-hidden="true">
            Bauer Painting head office exterior, evening
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/20" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/60">
              <span className="h-px w-8 bg-primary" />
              REQUEST A QUOTE
            </div>
            <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              Let&rsquo;s bring your vision to life.
            </h2>
            <p className="mt-4 max-w-sm text-white/70">
              Tell us about your project and our team will get back to you with a detailed quote.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {perks.map((perk) => (
                <div key={perk.title}>
                  <h3 className="text-sm font-bold">{perk.title}</h3>
                  <p className="mt-1 text-xs text-white/60">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="relative mt-14 text-xs font-semibold uppercase tracking-widest text-white/50">
            Better Spaces.
            <br />
            Brighter Tomorrows.
          </p>
        </div>

        <div className="bg-paper px-6 py-16 text-text lg:px-10 lg:py-20">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-text-muted">
            <span className="h-px w-8 bg-primary" />
            GET YOUR QUOTE
          </div>
          <h3 className="mt-4 font-heading text-3xl font-extrabold">Tell us about your project.</h3>
          <p className="mt-2 text-sm text-text-muted">
            A few quick details help us understand your needs and provide an accurate quote.
          </p>

          <ol className="mt-8 flex items-center gap-2">
            {wizardSteps.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    i === 0 ? "bg-primary text-white" : "bg-paper-2 text-text-muted"
                  }`}
                >
                  {i + 1}
                </span>
                {i < wizardSteps.length - 1 && <span className="h-px w-4 bg-border sm:w-6" />}
              </li>
            ))}
          </ol>
          <p className="mt-2 text-xs text-text-muted">Step 1 of {wizardSteps.length}</p>

          <div className="mt-6">
            <h4 className="font-heading text-lg font-bold">What type of project are you planning?</h4>
            <p className="mt-1 text-sm text-text-muted">Select the option that best describes your project.</p>

            <div role="radiogroup" className="mt-4 space-y-3">
              {projectTypes.map((type) => (
                <label
                  key={type.id}
                  className={`flex cursor-pointer items-center justify-between border p-4 transition-colors ${
                    selected === type.id ? "border-primary bg-white" : "border-border bg-white/60"
                  }`}
                >
                  <span>
                    <span className="block text-sm font-semibold">{type.title}</span>
                    <span className="block text-xs text-text-muted">{type.description}</span>
                  </span>
                  <input
                    type="radio"
                    name="project-type"
                    value={type.id}
                    checked={selected === type.id}
                    onChange={() => setSelected(type.id)}
                    className="h-4 w-4 accent-primary"
                  />
                </label>
              ))}
            </div>

            <a
              href="/quote"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Next Step →
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-border pt-6 text-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper-2">🎧</span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-text-muted">Need Help?</div>
              <div className="text-text-muted">
                Speak with our team &nbsp;|&nbsp; 905-738-9171 &nbsp;|&nbsp; info@bauerpainting.com
              </div>
            </div>
            <a href="/contact" className="ml-auto whitespace-nowrap font-semibold text-primary">
              We&rsquo;re happy to help →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
