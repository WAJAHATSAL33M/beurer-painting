import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { EXTERIOR_PROCESS_STEPS } from "@/lib/exterior-services";

export const pad = "px-6 lg:px-[max(2.5rem,calc((100vw-1240px)/2))]";
export const HL = "font-heading font-extrabold tracking-[-0.02em] text-bauer-ink leading-[1.05]";
export const Dot = () => <span className="text-[var(--acc)]">.</span>;

export const Img = ({ src, alt = "", cls = "", pos = "object-cover" }: { src: string; alt?: string; cls?: string; pos?: string }) => (
  <div className={`relative overflow-hidden ${cls}`}>
    <Image src={src} alt={alt} fill className={pos} sizes="(min-width:1024px) 50vw, 100vw" />
  </div>
);

export const Eyebrow = ({ n, label }: { n: string; label: string }) => (
  <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.14em] uppercase text-bauer-lav">
    <span className="w-6 h-px bg-[var(--acc)]" />
    {n}
    <span className="text-gray-300">|</span>
    {label}
  </p>
);

/** Simple "BAUER PAINTING ·" eyebrow used above H1s, matching the rest of the site. */
export const Brand = () => <p className="text-[13px] font-bold tracking-wide text-bauer-lav">BAUER PAINTING</p>;

/** Thin coloured banner with a line of copy + a "Request a Quote" CTA — used to close most sections. */
export function StripCTA({ kicker, text }: { kicker: string; text: string }) {
  return (
    <div className={`${pad} py-8 bg-white border-t border-gray-200 flex flex-wrap items-center justify-between gap-6`}>
      <p className="hlabel text-gray-700 max-w-xs">{kicker}</p>
      <p className="text-gray-600 flex-1 min-w-[240px]">{text}</p>
      <Link href="/contact" className="hbtn shrink-0">
        Request a Quote <Icon n="arrow" size={16} />
      </Link>
    </div>
  );
}

/** Shared 4-step "Assess / Prepare / Paint / Complete" process section. */
export function ProcessSection() {
  return (
    <section className="bg-[#F3F4F6] reveal">
      <div className={`${pad} pt-14 pb-10`}>
        <Eyebrow n="Process" label="The Exterior Project Approach" />
        <Brand />
        <h2 className={`${HL} mt-4 text-[clamp(32px,4vw,56px)] max-w-2xl`}>
          A Proven Process for Exterior Projects
          <Dot />
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl leading-relaxed">
          From initial assessment to final walkthrough, we follow a structured process to ensure a smooth experience and a high-quality, long-lasting finish for your property.
        </p>
      </div>
      <div className={`${pad} pb-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-group`}>
        {EXTERIOR_PROCESS_STEPS.map((s) => (
          <div key={s.n} className="reveal-item">
            <Img src={s.img} cls="h-44 rounded" />
            <div className="mt-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[var(--acc)] text-white text-sm font-bold flex items-center justify-center shrink-0">{s.n}</span>
              <p className="font-bold text-lg text-bauer-ink">{s.title}</p>
            </div>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <StripCTA kicker="A SMOOTHER PROCESS. A STRONGER RESULT." text="Let's discuss your exterior painting project and create a plan that works for your property." />
    </section>
  );
}

/** Final CTA block used at the bottom of every exterior-painting page. */
export function FinalCta({ title = "Let's Bring Your Exterior Project to Life" }: { title?: string }) {
  const perks: [string, string][] = [
    ["chat", "Quick Response"],
    ["doc", "Detailed Quotes"],
    ["checkc", "No Obligation"],
  ];
  return (
    <section className="relative bg-[#0b1118] text-white overflow-hidden reveal">
      <Img src="/home/skyline.jpg" cls="!absolute inset-x-0 bottom-0 h-40 opacity-40" pos="object-cover object-top" />
      <div className={`relative ${pad} py-16`}>
        <Eyebrow n="Get Started" label="Final CTA" />
        <p className="mt-4 text-[13px] font-bold tracking-wide text-white/70">BAUER PAINTING</p>
        <h2 className="mt-4 text-[clamp(32px,4.2vw,58px)] font-extrabold tracking-tight leading-[1.05] max-w-2xl">
          {title}
          <Dot />
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
          From surface preparation to the final coat, Bauer Painting delivers long-lasting results that protect and enhance your property. Reach out today for a free consultation and discover the right solution for your building.
        </p>
        <div className="mt-8 flex flex-wrap gap-8">
          {perks.map(([ic, t]) => (
            <span key={t} className="flex items-center gap-3 text-sm font-medium">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Icon n={ic} size={18} /></span>
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
          <Link href="/contact" className="hghost on-dark">Talk to Our Team <Icon n="arrow" size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
