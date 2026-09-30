"use client";

import { useState } from "react";
import { EXTERIOR_FAQS } from "@/lib/exterior-services";
import { pad, HL, Dot, Eyebrow, Brand, StripCTA } from "./Shared";

/** FAQ accordion (client component — needs state). */
export default function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className={`${pad} py-16 bg-white reveal`}>
      <Eyebrow n="FAQ" label="Frequently Asked Questions" />
      <Brand />
      <h2 className={`${HL} mt-4 text-[clamp(32px,4vw,56px)] max-w-2xl`}>
        Questions? We&apos;ve Got Answers
        <Dot />
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-xl leading-relaxed">
        Here are answers to some of the most common questions about our exterior painting services. If you don&apos;t see your question below, feel free to reach out — we&apos;re always happy to help.
      </p>
      <div className="mt-10 grid lg:grid-cols-2 gap-x-10 gap-y-3">
        {EXTERIOR_FAQS.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={q} className="border-b border-gray-200 py-4">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex items-baseline gap-3">
                  <span className="text-[var(--acc)] font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-semibold text-bauer-ink">{q}</span>
                </span>
                <span className={`shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center transition-transform ${isOpen ? "rotate-45 border-[var(--acc)] text-[var(--acc)]" : "text-gray-500"}`}>
                  +
                </span>
              </button>
              {isOpen && <p className="mt-3 text-sm text-gray-600 leading-relaxed pl-7">{a}</p>}
            </div>
          );
        })}
      </div>
      <div className="mt-10 -mx-6 lg:-mx-[max(2.5rem,calc((100vw-1240px)/2))]">
        <StripCTA kicker="STILL HAVE A QUESTION? WE'RE HERE TO HELP." text="Our team is ready to provide the information you need and help you get started with a customized quote." />
      </div>
    </section>
  );
}
