"use client";

import { useState, type ReactNode } from "react";
import { COMPANY } from "@/lib/locations";

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const glyphs: Record<string, ReactNode> = {
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
};
const I = ({ n, size = 16 }: { n: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...P} aria-hidden>{glyphs[n]}</svg>
);

const projectTypes = ["Interior Painting", "Exterior Painting", "Special Services", "Multiple Services", "Not Sure Yet"];
const timings = ["As soon as possible", "Within 1 month", "1–3 months", "3+ months", "Just exploring options"];

type Values = {
  fullName: string; company: string; email: string; phone: string;
  location: string; projectType: string; timing: string; details: string;
};
const empty: Values = { fullName: "", company: "", email: "", phone: "", location: "", projectType: "", timing: "", details: "" };

const inputCls = (bad: boolean) =>
  `w-full rounded border bg-white px-4 py-3 text-sm text-bauer-ink placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-1 ${
    bad
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "border-gray-200 focus:border-[var(--acc)] focus:ring-[var(--acc)]"
  }`;

function StepHead({ title, step }: { title: string; step: string }) {
  return (
    <div className="flex items-center gap-4">
      <h4 className="font-bold text-bauer-ink whitespace-nowrap">{title}</h4>
      <span className="flex-1 h-px bg-gray-200" />
      <span className="text-[11px] font-semibold tracking-widest text-gray-400 whitespace-nowrap">{step}</span>
    </div>
  );
}

function Err({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1.5 text-xs font-medium text-red-600">{msg}</p>;
}

export default function QuoteForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const getErrors = (): Partial<Record<keyof Values, string>> => {
    const e: Partial<Record<keyof Values, string>> = {};
    if (v.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
    if (v.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
    if (v.location.trim().length < 2) e.location = "Please enter the property city or address.";
    if (v.details.trim().length < 10) e.details = "Please share a few details (at least 10 characters).";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = getErrors();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      // move focus to the first invalid field
      const order: (keyof Values)[] = ["fullName", "email", "phone", "location", "details"];
      const bad = order.find((k) => e[k]);
      if (bad) document.getElementById(`qf-${bad}`)?.focus();
      return;
    }
    const lines = [
      `Name: ${v.fullName.trim()}`,
      v.company.trim() && `Company: ${v.company.trim()}`,
      `Email: ${v.email.trim()}`,
      `Phone: ${v.phone.trim()}`,
      `Location: ${v.location.trim()}`,
      v.projectType && `Project type: ${v.projectType}`,
      v.timing && `Timing: ${v.timing}`,
      "",
      "Project details:",
      v.details.trim(),
    ].filter(Boolean);
    const subject = encodeURIComponent(`Quote request — ${v.fullName.trim()}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-10 text-center">
        <span className="mx-auto w-16 h-16 rounded-full bg-[var(--acc)]/10 text-[var(--acc)] flex items-center justify-center">
          <I n="check" size={30} />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-bauer-ink">Thanks, {v.fullName.trim().split(" ")[0]}!</h3>
        <p className="mt-3 text-[15px] text-bauer-lav leading-relaxed max-w-md mx-auto">
          Your email app should have opened with your quote request ready to send to{" "}
          <span className="font-semibold text-bauer-ink">{COMPANY.email}</span>. Just hit send and our team
          will get back to you shortly.
        </p>
        <p className="mt-4 text-[15px] text-bauer-lav">
          Prefer to talk now?{" "}
          <a href={COMPANY.phoneHref} className="font-bold text-[var(--acc)] inline-flex items-center gap-1.5">
            <I n="phone" size={15} /> {COMPANY.phone}
          </a>
        </p>
        <button
          type="button"
          onClick={() => { setV(empty); setErrors({}); setSent(false); }}
          className="mt-6 text-sm font-semibold text-bauer-lav underline underline-offset-4 hover:text-bauer-ink"
        >
          Send another request
        </button>
      </div>
    );
  }

  const label = "block text-sm font-medium text-bauer-ink mb-1.5";
  const req = <span className="text-[var(--acc)]">*</span>;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
      <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-bauer-ink">Request a Quote</h3>
      <p className="mt-2 text-[15px] text-bauer-lav">Fill out the form below and our team will get in touch with you shortly.</p>

      <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
        <StepHead title="Contact Information" step="STEP 01" />
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="qf-fullName">Full Name {req}</label>
            <input id="qf-fullName" type="text" autoComplete="name" placeholder="Your full name"
              value={v.fullName} onChange={set("fullName")} aria-invalid={!!errors.fullName} className={inputCls(!!errors.fullName)} />
            <Err msg={errors.fullName} />
          </div>
          <div>
            <label className={label} htmlFor="qf-company">Company Name</label>
            <input id="qf-company" type="text" autoComplete="organization" placeholder="Your company name"
              value={v.company} onChange={set("company")} className={inputCls(false)} />
          </div>
          <div>
            <label className={label} htmlFor="qf-email">Email {req}</label>
            <input id="qf-email" type="email" autoComplete="email" placeholder="you@company.com"
              value={v.email} onChange={set("email")} aria-invalid={!!errors.email} className={inputCls(!!errors.email)} />
            <Err msg={errors.email} />
          </div>
          <div>
            <label className={label} htmlFor="qf-phone">Phone {req}</label>
            <input id="qf-phone" type="tel" autoComplete="tel" placeholder="(905) 123-4567"
              value={v.phone} onChange={set("phone")} aria-invalid={!!errors.phone} className={inputCls(!!errors.phone)} />
            <Err msg={errors.phone} />
          </div>
        </div>

        <div className="pt-2"><StepHead title="Project Information" step="STEP 02" /></div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="qf-location">Property / Project Location {req}</label>
            <input id="qf-location" type="text" autoComplete="address-level2" placeholder="City or address"
              value={v.location} onChange={set("location")} aria-invalid={!!errors.location} className={inputCls(!!errors.location)} />
            <Err msg={errors.location} />
          </div>
          <div>
            <label className={label} htmlFor="qf-projectType">Project Type</label>
            <select id="qf-projectType" value={v.projectType} onChange={set("projectType")} className={inputCls(false)}>
              <option value="" disabled>Select a service</option>
              {projectTypes.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className={label} htmlFor="qf-timing">Approximate Project Timing</label>
          <select id="qf-timing" value={v.timing} onChange={set("timing")} className={inputCls(false)}>
            <option value="" disabled>Select timing</option>
            {timings.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="qf-details">Tell Us About Your Project {req}</label>
          <textarea id="qf-details" rows={4} placeholder="Please share as much detail as possible about your project, including the type of property, areas to be painted, and any specific requirements."
            value={v.details} onChange={set("details")} aria-invalid={!!errors.details} className={`${inputCls(!!errors.details)} resize-none`} />
          <Err msg={errors.details} />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
          <button type="submit" className="hbtn w-full sm:w-auto justify-center whitespace-nowrap">
            Request a Quote <I n="arrow" size={16} />
          </button>
          <p className="flex items-center gap-2 text-xs text-gray-500 leading-snug">
            <span className="text-gray-400 shrink-0"><I n="lock" size={16} /></span>
            Your information is secure and will only be used to respond to your inquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
