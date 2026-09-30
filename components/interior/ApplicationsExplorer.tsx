"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Img } from "./Shared";
import type { InteriorService } from "@/lib/interior-services";

const CHECKS = ["Improves workplace appearance", "Supports employee & customer wellbeing", "Professional, long-lasting finishes"];

export default function ApplicationsExplorer({ services }: { services: InteriorService[] }) {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <div className="grid lg:grid-cols-[280px_1fr_300px] gap-0 border border-gray-200 rounded overflow-hidden bg-white">
      <div className="border-b lg:border-b-0 lg:border-r border-gray-200">
        {services.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setActive(i)}
            className={`w-full flex items-center justify-between gap-3 text-left px-5 py-4 border-b border-gray-100 last:border-0 transition-colors ${
              active === i ? "bg-[var(--acc)]/5 text-bauer-ink border-l-4 border-l-[var(--acc)]" : "text-gray-600 hover:bg-gray-50 border-l-4 border-l-transparent"
            }`}
          >
            <span className="flex items-center gap-3 text-sm font-semibold">
              <span className="text-xs font-bold text-gray-400">{String(i + 1).padStart(2, "0")}</span>
              {s.label}
            </span>
            <Icon n="arrow" size={14} />
          </button>
        ))}
      </div>

      <div className="relative min-h-[280px] lg:min-h-[420px]">
        <Img src={svc.image} alt={svc.label} cls="!absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
        <span className="absolute top-5 left-5 bg-black/70 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
          {svc.label}
        </span>
      </div>

      <div className="p-6 flex flex-col">
        <p className="text-[var(--acc)] font-bold text-sm">{String(active + 1).padStart(2, "0")}</p>
        <h3 className="mt-1 text-xl font-bold text-bauer-ink">{svc.label}</h3>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">{svc.cardBlurb}</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {CHECKS.map((c) => (
            <li key={c} className="flex items-start gap-2"><span className="mt-0.5 text-[var(--acc)]"><Icon n="check" size={14} /></span>{c}</li>
          ))}
        </ul>
        <Link href={`/services/interior-painting/${svc.slug}`} className="hbtn mt-6 justify-center">
          View Service <Icon n="arrow" size={16} />
        </Link>
      </div>
    </div>
  );
}
