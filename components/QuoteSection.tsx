"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import settings from "@/content/settings.json";

const opts = [
  ["roller", "Interior Painting", "Offices, retail, healthcare, schools, and more."],
  ["home", "Exterior Painting", "Buildings, facades, siding, masonry, and more."],
  ["layers", "Special Services", "High-durability coatings, spray painting, and more."],
  ["grid", "Multiple Services", "A combination of interior, exterior, or special services."],
];
const perks = [
  ["chat", "Quick & Easy Process", "Get started in minutes."],
  ["doc", "Tailored Quotes", "Based on your project needs."],
  ["users", "Responsive Team", "We're here to help."],
  ["checkc", "No Obligation", "Just expert advice."],
];
const steps = ["Project Type", "Property Type", "Location", "Project Details", "Your Information"];

export default function QuoteSection() {
  const [sel, setSel] = useState(0);
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative bg-[#0b1118] text-white px-6 lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16 overflow-hidden">
        <Image src="/home/quote.jpg" alt="" fill className="object-cover object-right opacity-70" sizes="50vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1118] via-[#0b1118]/85 to-transparent" />
        <div className="relative max-w-md">
          <p className="hlabel">Request a Quote</p>
          <h2 className="mt-6 text-[clamp(38px,4.2vw,64px)] font-extrabold leading-[1.02] tracking-tight">Let&apos;s Bring Your Vision to Life<span className="text-[var(--acc)]">.</span></h2>
          <p className="mt-5 text-lg text-white/85">Tell us about your project and our team will get back to you with a detailed quote.</p>
          <ul className="mt-8 space-y-5">
            {perks.map(([ic, a, b]) => (
              <li key={a} className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center"><Icon n={ic} /></span>
                <span><span className="block font-semibold">{a}</span><span className="text-white/70 text-sm">{b}</span></span>
              </li>
            ))}
          </ul>
          <span className="block w-12 h-0.5 bg-[var(--acc)] mt-10 mb-4" />
          <p className="tracking-[0.2em] text-sm">BETTER SPACES.<br />BRIGHTER TOMORROWS.</p>
        </div>
      </div>
      <div className="bg-[#F8F9FA] px-6 lg:pr-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pl-12 py-16">
        <p className="hlabel text-gray-700">Get Your Quote</p>
        <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-bauer-ink">Tell us about your project.</h3>
        <p className="mt-2 text-gray-500">A few quick details help us understand your needs and provide an accurate quote.</p>
        <ol className="mt-8 flex justify-between text-[11px] text-gray-700 text-center">
          {steps.map((s, i) => (
            <li key={s} className="relative flex-1">
              {i < steps.length - 1 && <span className="absolute top-4 left-[calc(50%+22px)] right-[calc(-50%+22px)] hidden h-px bg-gray-300 sm:block" />}
              <span className={`relative mx-auto mb-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${i === 0 ? "bg-[var(--acc)] text-white" : "bg-gray-200 text-gray-600"}`}>{i + 1}</span>{s}
            </li>
          ))}
        </ol>
        <div className="mt-6 bg-white border border-gray-200 rounded p-6">
          <p className="text-xs text-gray-500">Step 1 of 5</p>
          <h4 className="text-xl font-bold text-bauer-ink">What type of project are you planning?</h4>
          <p className="text-sm text-gray-500 mb-4">Select the option that best describes your project.</p>
          <div className="space-y-3">
            {opts.map(([ic, t, d], i) => (
              <button key={t} type="button" onClick={() => setSel(i)} className={`w-full flex items-center gap-4 text-left rounded border px-4 py-3 ${sel === i ? "border-[var(--acc)]" : "border-gray-200"}`}>
                <Icon n={ic} size={26} />
                <span className="flex-1"><span className="block font-semibold text-bauer-ink">{t}</span><span className="text-sm text-gray-500">{d}</span></span>
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${sel === i ? "border-[var(--acc)]" : "border-gray-300"}`}>{sel === i && <span className="w-2.5 h-2.5 rounded-full bg-[var(--acc)]" />}</span>
              </button>
            ))}
          </div>
          <Link href="/contact" className="hbtn w-full justify-center mt-5">Next Step <Icon n="arrow" size={16} /></Link>
        </div>
        <div className="mt-8 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center"><Icon n="headset" /></span>
            <p><span className="block text-[11px] tracking-widest font-semibold">NEED HELP?</span>Speak with our team | {settings.phone} | {settings.email}</p>
          </div>
          <Link href="/contact" className="text-sm font-medium text-bauer-ink">We&apos;re happy<br />to help <span className="text-[var(--acc)]">→</span></Link>
        </div>
      </div>
    </section>
  );
}
