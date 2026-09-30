"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Icon from "./Icon";
import { SERVICES, matchServiceArea, normalizePostal, type ServiceArea } from "@/lib/site-data";

export default function ServiceFinder({ variant = "hero" }: { variant?: "hero" | "section" }) {
  const [service, setService] = useState(SERVICES[0].label);
  const [postal, setPostal] = useState("");
  const [result, setResult] = useState<"available" | "unavailable" | null>(null);
  const [area, setArea] = useState<ServiceArea | null>(null);
  const [normalized, setNormalized] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
    const match = matchServiceArea(postal);
    setResult(match.status);
    setArea(match.area);
    setOpen(true);
  };

  const svc = SERVICES.find((s) => s.label === service) ?? SERVICES[0];
  const areaLabel = area ? `${area.name}${area.province ? `, ${area.province}` : ""}` : "";

  const isHero = variant === "hero";
  const fieldCls =
    "h-14 w-full rounded-md border border-gray-300 bg-white px-4 text-gray-800 outline-none focus:border-[var(--acc)] focus:ring-2 focus:ring-[var(--acc)]/20";

  const ctas =
    result === "available"
      ? [
          { label: "Request a Quote", href: "/contact", primary: true, caption: "Get a detailed estimate for your project." },
          { label: "Talk to Our Team", href: "/contact", primary: false, caption: "Speak with our experts about your needs." },
          { label: "View Service Page", href: svc.href, primary: false, caption: `Learn more about ${svc.label}.` },
        ]
      : [
          { label: "Talk to Our Team", href: "/contact", primary: true, caption: "Speak with our experts about your project." },
          { label: "Contact Bauer", href: "/contact", primary: false, caption: "Get in touch and we'll find the best solution." },
          { label: "Change Postal Code", href: null, primary: false, caption: "Try a different postal code to check availability." },
        ];

  return (
    <>
      {isHero ? (
        <div className="mt-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="sf-service" className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-gray-700">
                FIND YOUR SERVICE
              </label>
              <select
                id="sf-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={`${fieldCls} appearance-none pr-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23667085%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-no-repeat bg-[position:right_1rem_center]`}
              >
                {SERVICES.map((s) => (
                  <option key={s.label}>{s.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="sf-postal" className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-gray-700">
                POSTAL CODE
              </label>
              <input
                id="sf-postal"
                value={postal}
                onChange={(e) => {
                  setPostal(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                className={fieldCls}
                placeholder="Enter Postal Code (e.g. L5B 2C9)"
                autoComplete="postal-code"
              />
            </div>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <button
            type="button"
            onClick={submit}
            className="hbtn mt-3 h-14 w-full justify-center !rounded-lg sm:w-auto sm:min-w-[248px]"
          >
            Find Your Service <Icon n="arrow" size={16} />
          </button>
        </div>
      ) : (
        <div className="mt-7">
          <div className="flex max-w-lg">
            <input
              value={postal}
              onChange={(e) => {
                setPostal(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              className="h-14 flex-1 border border-gray-300 bg-white px-5 text-gray-800"
              placeholder="Enter your postal code"
              autoComplete="postal-code"
            />
            <button type="button" onClick={submit} className="hbtn h-14 !rounded-none">
              Find Service <Icon n="arrow" size={16} />
            </button>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )}

      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-3 backdrop-blur-[2px] animate-[fadeIn_.15s_ease-out] sm:p-6"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={result === "available" ? "Service available" : "Service not available"}
          >
          <div
            className="relative my-auto w-full max-w-[880px] rounded-[24px] bg-white shadow-2xl animate-[popIn_.18s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-reveal p-6 sm:p-10">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 sm:right-6 sm:top-6"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>

              {/* Header */}
              <div className="flex items-start gap-4 pr-8 sm:gap-7 sm:pr-10">
                <span
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full sm:h-28 sm:w-28 ${
                    result === "available" ? "bg-[#e9faf0] text-[var(--acc)]" : "bg-[#fdecec] text-[#ef4444]"
                  }`}
                >
                  {result === "available" ? <Icon n="check" size={52} /> : <Icon n="pin" size={48} />}
                </span>
                <div className="min-w-0 pt-1">
                  <p
                    className={`text-[12px] font-bold tracking-[0.22em] sm:text-sm ${
                      result === "available" ? "text-[var(--acc)]" : "text-[#ef4444]"
                    }`}
                  >
                    {result === "available" ? "SERVICE AVAILABLE" : "SERVICE NOT AVAILABLE"}
                  </p>
                  <h3 className="mt-2 text-[24px] font-extrabold leading-tight tracking-tight text-[#101828] sm:text-[36px]">
                    {result === "available" ? (
                      <>
                        Good News — We Serve Your Area<span className="text-[var(--acc)]">.</span>
                      </>
                    ) : (
                      <>
                        Outside Our Standard Service Area<span className="text-[var(--acc)]">.</span>
                      </>
                    )}
                  </h3>
                  <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#667085] sm:text-base">
                    {result === "available" ? (
                      "Bauer Painting provides commercial painting services in your area. You can move forward with confidence knowing our team is ready to help."
                    ) : (
                      <>
                        The postal code you entered ({normalized}) is outside our standard service area. However, we may
                        still be able to help depending on your project requirements and location. Contact our team and
                        we&apos;ll be happy to discuss the best next step.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Details row */}
              <div className="mt-7 grid grid-cols-1 gap-5 border-t border-gray-200 pt-6 sm:grid-cols-2 sm:gap-0">
                <div className="flex items-center gap-4 sm:pr-8">
                  <span className="shrink-0 text-[#101828]">
                    <Icon n={svc.icon} size={44} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-400">SELECTED SERVICE</p>
                    <p className="mt-1 truncate text-lg font-bold leading-tight text-[#101828]">{svc.label}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{svc.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:border-l sm:border-gray-200 sm:pl-8">
                  <span className="shrink-0 text-[#101828]">
                    <Icon n="pin" size={44} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-400">YOUR POSTAL CODE</p>
                    <p className="mt-1 truncate text-lg font-bold leading-tight text-[#101828]">{normalized}</p>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {result === "available" ? areaLabel || "Serviced Area" : "Outside Standard Area"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info box */}
              <div className="mt-6 flex items-center gap-5 rounded-xl bg-[#f0fbf4] p-5 sm:gap-6 sm:p-6">
                <span className="shrink-0 text-[var(--acc)]">
                  <Icon n={result === "available" ? "building" : "chat"} size={44} />
                </span>
                <div className="border-l-2 border-[var(--acc)] pl-5 sm:pl-6">
                  {result === "available" ? (
                    <p className="text-[15px] leading-relaxed text-[#344054]">{svc.blurb}</p>
                  ) : (
                    <p className="text-[15px] leading-relaxed text-[#344054]">
                      <span className="mb-1 block text-base font-bold text-[#101828]">
                        Let&apos;s Talk About Your Project<span className="text-[var(--acc)]">.</span>
                      </span>
                      Every project is different. Our team can review your location and requirements to see how we can
                      help.
                    </p>
                  )}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {ctas.map((c) =>
                  c.href ? (
                    <Link
                      key={c.label}
                      href={c.href}
                      className={`${c.primary ? "hbtn" : "hghost"} h-14 w-full justify-center !rounded-lg`}
                    >
                      {c.label} <Icon n="arrow" size={16} />
                    </Link>
                  ) : (
                    <button
                      key={c.label}
                      type="button"
                      onClick={() => setOpen(false)}
                      className="hghost h-14 w-full justify-center !rounded-lg"
                    >
                      {c.label} <Icon n="arrow" size={16} />
                    </button>
                  ),
                )}
              </div>
              <div className="mt-2.5 grid grid-cols-1 gap-1 text-center text-[13px] leading-snug text-gray-500 sm:grid-cols-3 sm:gap-3">
                {ctas.map((c) => (
                  <span key={c.label}>{c.caption}</span>
                ))}
              </div>
            </div>
          </div>
          </div>,
          document.body,
        )}
    </>
  );
}
