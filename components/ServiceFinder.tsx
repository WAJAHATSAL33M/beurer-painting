"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { SERVICES, checkServiceArea, normalizePostal } from "@/lib/site-data";

export default function ServiceFinder({ variant = "hero" }: { variant?: "hero" | "section" }) {
  const [service, setService] = useState(SERVICES[0].label);
  const [postal, setPostal] = useState("");
  const [result, setResult] = useState<"available" | "unavailable" | null>(null);
  const [normalized, setNormalized] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const submit = () => {
    if (!postal.trim()) {
      setError("Please enter your postal code.");
      return;
    }
    const code = normalizePostal(postal);
    if (!code) {
      setError("Please enter a valid postal code, e.g. L5B 2C9.");
      return;
    }
    setError("");
    setNormalized(code);
    setResult(checkServiceArea(postal));
    setOpen(true);
  };

  const svc = SERVICES.find((s) => s.label === service) ?? SERVICES[0];

  const isHero = variant === "hero";
  const fieldCls = isHero ? "h-14 rounded-sm bg-white text-gray-800 px-4" : "h-14 border border-gray-300 px-5 bg-white text-gray-800";

  return (
    <>
      {isHero ? (
        <div className="mt-4 grid sm:grid-cols-[1fr_1.2fr_auto] gap-3">
          <select value={service} onChange={(e) => setService(e.target.value)} className={fieldCls}>
            {SERVICES.map((s) => <option key={s.label}>{s.label}</option>)}
          </select>
          <input
            value={postal}
            onChange={(e) => { setPostal(e.target.value); setError(""); }}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className={fieldCls}
            placeholder="Enter Postal Code (e.g. L5B 2C9)"
          />
          <button type="button" onClick={submit} className="hbtn justify-center h-14">Find Service <Icon n="arrow" size={16} /></button>
        </div>
      ) : (
        <div className="mt-7 flex max-w-lg">
          <input
            value={postal}
            onChange={(e) => { setPostal(e.target.value); setError(""); }}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className="flex-1 h-14 border border-gray-300 px-5 bg-white"
            placeholder="Enter your postal code"
          />
          <button type="button" onClick={submit} className="hbtn !rounded-none h-14">Find Service <Icon n="arrow" size={16} /></button>
        </div>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-[2px] animate-[fadeIn_.15s_ease-out]"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl relative max-h-[92vh] overflow-y-auto animate-[popIn_.18s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 sm:p-8 modal-reveal">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
              </button>

              <div className="flex items-start gap-4 sm:gap-5 pr-8">
                <span
                  className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                    result === "available" ? "bg-green-50 text-[var(--acc)]" : "bg-red-50 text-red-600"
                  }`}
                >
                  <Icon n={result === "available" ? "checkc" : "pin"} size={result === "available" ? 28 : 26} />
                </span>
                <div className="min-w-0">
                  <p
                    className={`text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] ${
                      result === "available" ? "text-[var(--acc)]" : "text-red-600"
                    }`}
                  >
                    {result === "available" ? "SERVICE AVAILABLE" : "SERVICE NOT AVAILABLE"}
                  </p>
                  <h3 className="mt-1.5 text-xl sm:text-[28px] font-extrabold tracking-tight text-bauer-ink leading-tight">
                    {result === "available" ? (
                      <>Good News — We Serve Your Area<span className="text-[var(--acc)]">.</span></>
                    ) : (
                      <>Outside Our Standard Service Area<span className="text-[var(--acc)]">.</span></>
                    )}
                  </h3>
                  <p className="mt-2.5 text-[15px] text-gray-500 leading-relaxed">
                    {result === "available" ? (
                      "Bauer Painting provides commercial painting services in your area. You can move forward with confidence knowing our team is ready to help."
                    ) : (
                      <>The postal code you entered ({normalized}) is outside our standard service area. However, we may still be able to help depending on your project requirements and location. Contact our team and we&apos;ll be happy to discuss the best next step.</>
                    )}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 shrink-0"><Icon n={svc.icon} size={26} /></span>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-widest text-gray-400">SELECTED SERVICE</p>
                    <p className="font-semibold text-bauer-ink leading-tight truncate">{svc.label}</p>
                    <p className="text-sm text-gray-500">{svc.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:border-l sm:border-gray-200 sm:pl-6">
                  <span className="text-gray-700 shrink-0"><Icon n="pin" size={24} /></span>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-widest text-gray-400">YOUR POSTAL CODE</p>
                    <p className="font-semibold text-bauer-ink leading-tight truncate">{normalized}</p>
                    <p className="text-sm text-gray-500">{result === "available" ? "Serviced Area" : "Outside Standard Area"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-lg bg-green-50 p-4 flex gap-3">
                <span className="text-[var(--acc)] shrink-0"><Icon n={result === "available" ? svc.icon : "chat"} size={22} /></span>
                {result === "available" ? (
                  <p className="text-sm text-gray-700 leading-relaxed">{svc.blurb}</p>
                ) : (
                  <p className="text-sm text-gray-700 leading-relaxed"><span className="block font-semibold text-bauer-ink mb-0.5">Let&apos;s Talk About Your Project.</span>Every project is different. Our team can review your location and requirements to see how we can help.</p>
                )}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {result === "available" ? (
                  <>
                    <Link href="/contact" className="hbtn justify-center">Request a Quote <Icon n="arrow" size={16} /></Link>
                    <Link href="/contact" className="hghost justify-center">Talk to Our Team <Icon n="arrow" size={16} /></Link>
                    <Link href={svc.href} className="hghost justify-center">View Service Page <Icon n="arrow" size={16} /></Link>
                  </>
                ) : (
                  <>
                    <Link href="/contact" className="hbtn justify-center">Talk to Our Team <Icon n="arrow" size={16} /></Link>
                    <Link href="/contact" className="hghost justify-center">Contact Bauer <Icon n="arrow" size={16} /></Link>
                    <button type="button" onClick={() => setOpen(false)} className="hghost justify-center">Change Postal Code <Icon n="arrow" size={16} /></button>
                  </>
                )}
              </div>
              <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3 text-center text-xs text-gray-500">
                {result === "available" ? (
                  <><span>Get a detailed estimate for your project.</span><span>Speak with our experts about your needs.</span><span>{`Learn more about ${svc.label}.`}</span></>
                ) : (
                  <><span>Speak with our experts about your project.</span><span>Get in touch and we&apos;ll find the best solution.</span><span>Try a different postal code to check availability.</span></>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
