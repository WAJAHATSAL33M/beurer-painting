import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { SEC } from "@/lib/spacing";

export const metadata = {
  title: "Our Process | Bauer Painting",
  description:
    "A better project starts with a better process. See how Bauer Painting plans, prepares, and delivers commercial painting projects across Southern Ontario.",
};

/* ---------- shared ---------- */
const GREEN = "#25D366";
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const icons: Record<string, ReactNode> = {
  chat: <><path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><path d="M19 9h1a2 2 0 0 1 2 2v6l-3-2h-4" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M9 12h6M9 16h6M9 8h3" /></>,
  cal: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 10h16M8 3v4M16 3v4" /></>,
  roller: <><rect x="4" y="3" width="14" height="6" rx="1.5" /><path d="M18 6h2v5h-8v4M12 15v6" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  checkCircle: <><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 5-6" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 3-6 6-6s6 2 6 6M16 5a3 3 0 0 1 0 6M18 14c2 .8 3 3 3 6" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  shieldCheck: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  mask: <path d="M4 10h16v3a8 8 0 0 1-16 0zM9 21h6" />,
  hardhat: <><path d="M4 16a8 8 0 0 1 6-7.7V4h4v4.3A8 8 0 0 1 20 16" /><path d="M2 16h20" /></>,
  award: <><circle cx="12" cy="9" r="5" /><path d="M9 13.5L7 21l5-2.5L17 21l-2-7.5" /></>,
  paint: <path d="M4 10h16v3a8 8 0 0 1-16 0zM9 21h6" />,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
  clipboard: <><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4h6M9 11h6M9 15h6M9 7h3" /></>,
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
};
const Icon = ({ n, size = 24 }: { n: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...P} aria-hidden>{icons[n]}</svg>
);

const pad = "px-6 lg:px-[max(2.5rem,calc((100vw-1240px)/2))]";
const H = "font-heading font-extrabold tracking-[-0.02em] text-[#0B1220] leading-[1.06]";
const Dot = () => <span style={{ color: GREEN }}>.</span>;
const body = "text-[#8A8FA3] leading-relaxed";

const Eyebrow = ({ label }: { label: string }) => (
  <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.14em] uppercase text-[#8A8FA3]">
    <span className="w-6 h-[3px]" style={{ background: GREEN }} />
    {label}
  </p>
);
const SideTag = ({ lines, light }: { lines: string[]; light?: boolean }) => (
  <p className={`hidden xl:block text-[11px] font-semibold tracking-[0.22em] leading-7 border-l-2 pl-4 ${light ? "text-white/85 border-white/50" : "text-[#8A8FA3] border-gray-300"}`}>
    {lines.map((l) => <span key={l} className="block">{l}</span>)}
    <span className="block w-8 h-[3px] mt-2" style={{ background: GREEN }} />
  </p>
);
const Photo = ({ src, alt, cls = "" }: { src: string; alt: string; cls?: string }) => {
  const pos = cls.includes("absolute") ? "" : "relative";
  return (
    <div className={`${pos} overflow-hidden ${cls}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
    </div>
  );
};
const GreenBtn = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[15px] font-semibold text-white transition hover:brightness-110" style={{ background: GREEN }}>
    {children}<Icon n="arrow" size={16} />
  </Link>
);
const GhostBtn = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[15px] font-semibold text-[#0B1220] border border-gray-300 bg-white transition hover:border-gray-500">
    {children}<Icon n="arrow" size={16} />
  </Link>
);
const StepIcon = ({ n }: { n: string }) => (
  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50" style={{ color: GREEN }}>
    <Icon n={n} size={30} />
  </span>
);

/* ================= page ================= */
export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ---------- 1 · HERO ---------- */}
        <section className="relative overflow-hidden bg-white">
          <div className="grid lg:grid-cols-2">
            <div className={`${pad} ${SEC} lg:pr-10`}>
              <Eyebrow label="Our Process" />
              <h1 className={`${H} mt-6 text-[clamp(38px,4.4vw,62px)]`}>
                A Better Project Starts With a Better Process<Dot />
              </h1>
              <p className={`${body} mt-6 max-w-xl text-[17px]`}>
                We take the time to properly assess your property and develop a detailed plan — so the project runs smoothly, efficiently, and delivers the results you expect.
              </p>
              <div className="mt-8">
                <GreenBtn href="/contact">Request a Quote</GreenBtn>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {[
                  ["chat", "01", "Understand", "We listen to your goals and requirements."],
                  ["doc", "02", "Plan", "We develop a detailed plan and schedule."],
                  ["roller", "03", "Prepare", "We prepare every surface the right way."],
                  ["checkCircle", "04", "Execute", "We deliver with precision and care."],
                ].map(([icon, n, t, d]) => (
                  <div key={t}>
                    <StepIcon n={icon} />
                    <p className="mt-4 text-[14px] font-bold" style={{ color: GREEN }}>{n}</p>
                    <p className="mt-1 text-[17px] font-bold text-[#0B1220]">{t}</p>
                    <p className="mt-1 text-[13px] text-[#8A8FA3] leading-snug">{d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[340px] lg:min-h-0">
              <Photo src="/process/hero.jpg" alt="Bauer Painting professional rolling a commercial wall" cls="absolute inset-0" />
            </div>
          </div>
        </section>

        {/* ---------- 2 · FIVE STEPS ---------- */}
        <section className="bg-white border-t border-gray-100">
          <div className={`${pad} ${SEC}`}>
            <Eyebrow label="Our Process" />
            <h2 className={`${H} mt-6 text-[clamp(34px,3.8vw,54px)]`}>
              From First Conversation<br />to Final Finish<Dot />
            </h2>
            <p className={`${body} mt-4 text-[16px]`}>A structured process. A better experience. A longer-lasting result.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10">
              {[
                ["chat", "01", "Understand", "We listen to your goals and requirements."],
                ["search", "02", "Assess", "We evaluate the property and project needs."],
                ["cal", "03", "Plan", "We develop a tailored solution and schedule."],
                ["roller", "04", "Execute", "We prepare and apply with precision and care."],
                ["checkCircle", "05", "Review", "We inspect, confirm completion and leave your space ready for what's next."],
              ].map(([icon, n, t, d], i, arr) => (
                <div key={t} className="relative">
                  <div className="flex items-center">
                    <StepIcon n={icon} />
                    {i < arr.length - 1 && (
                      <span className="hidden lg:block flex-1 h-px bg-gray-200 mx-4" />
                    )}
                  </div>
                  <p className="mt-5 text-[14px] font-bold" style={{ color: GREEN }}>{n}</p>
                  <p className="mt-1 text-[18px] font-bold text-[#0B1220]">{t}</p>
                  <p className="mt-2 text-[13px] text-[#8A8FA3] leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                ["/process/step1.jpg", "01", "Listen. Learn.", "Find the right approach."],
                ["/process/step2.jpg", "02", "Evaluate. Identify.", "Plan with confidence."],
                ["/process/step3.jpg", "03", "Define. Schedule.", "Set everything in motion."],
                ["/process/step4.jpg", "04", "Prepare. Apply.", "Deliver quality."],
                ["/process/step5.jpg", "05", "Inspect. Confirm.", "Complete."],
              ].map(([src, n, t1, t2]) => (
                <div key={n as string} className="relative h-44 overflow-hidden">
                  <Image src={src as string} alt={`${t1} ${t2}`} fill className="object-cover" sizes="(min-width:1024px) 20vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <p className="text-[12px] font-bold" style={{ color: GREEN }}>{n}</p>
                    <p className="text-white text-[15px] font-bold leading-snug">{t1}<br />{t2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 3 · ASSESS / PLAN ---------- */}
        <section className="bg-white border-t border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className={`${pad} ${SEC} lg:pr-10`}>
              <Eyebrow label="Our Process" />
              <h2 className={`${H} mt-6 text-[clamp(34px,3.8vw,54px)]`}>
                The Right Preparation Starts Before the First Coat<Dot />
              </h2>
              <p className={`${body} mt-6 text-[17px] max-w-xl`}>
                We take the time to properly assess your property and develop a detailed plan — so the project runs smoothly, efficiently, and delivers the results you expect.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-4">
                    <StepIcon n="clipboard" />
                    <div>
                      <p className="text-[14px] font-bold" style={{ color: GREEN }}>01</p>
                      <p className="text-[20px] font-bold text-[#0B1220]">Assess</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[14px] text-[#8A8FA3]">A detailed understanding leads to better solutions.</p>
                  <ul className="mt-5 space-y-3">
                    {["Property assessment", "Surfaces and substrates", "Environment and conditions", "Access and site requirements", "Project goals and challenges"].map((c) => (
                      <li key={c} className="flex items-center gap-3 text-[15px] text-[#0B1220]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ color: GREEN }}><Icon n="checkCircle" size={20} /></span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:border-l sm:border-gray-200 sm:pl-10">
                  <div className="flex items-center gap-4">
                    <StepIcon n="cal" />
                    <div>
                      <p className="text-[14px] font-bold" style={{ color: GREEN }}>02</p>
                      <p className="text-[20px] font-bold text-[#0B1220]">Plan</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[14px] text-[#8A8FA3]">A clear plan keeps everything on track.</p>
                  <ul className="mt-5 space-y-3">
                    {["Scope of work", "Material specifications", "Scheduling and timelines", "Work-area preparation", "Project coordination"].map((c) => (
                      <li key={c} className="flex items-center gap-3 text-[15px] text-[#0B1220]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ color: GREEN }}><Icon n="checkCircle" size={20} /></span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <GreenBtn href="/contact">Request a Quote</GreenBtn>
                <GhostBtn href="/our-process">Learn More About Our Process</GhostBtn>
              </div>
            </div>
            <div className="relative min-h-[340px] lg:min-h-0">
              <Photo src="/process/prep.jpg" alt="Bauer Painting team reviewing plans on site" cls="absolute inset-0" />
              <div className="absolute top-8 right-8 lg:right-12 text-right">
                <p className="text-white text-[15px] font-bold tracking-[0.12em] leading-8 drop-shadow">BETTER<br />SPACES<br />STRONGER<br />BUSINESSES</p>
                <span className="block w-10 h-[3px] mt-2 ml-auto" style={{ background: GREEN }} />
              </div>
              <div className="absolute bottom-10 right-8 lg:right-12"><SideTag light lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} /></div>
            </div>
          </div>
        </section>

        {/* ---------- 4 · PREPARE / EXECUTE ---------- */}
        <section className="bg-white border-t border-gray-100">
          <div className={`${pad} ${SEC}`}>
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="max-w-3xl">
                <Eyebrow label="Our Process" />
                <h2 className={`${H} mt-6 text-[clamp(34px,3.8vw,54px)]`}>
                  Preparation Sets the Foundation.<br />Execution Brings It to Life<Dot />
                </h2>
                <p className={`${body} mt-6 text-[17px]`}>
                  A smooth, efficient project comes down to proper preparation and expert execution.
                </p>
              </div>
              <div className="hidden xl:block pt-16"><SideTag lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} /></div>
            </div>
          </div>
          <div className={`${pad} pb-16 lg:pb-20`}>
            <div className="relative grid lg:grid-cols-2 gap-6">
              {[
                {
                  src: "/process/prepare.jpg", n: "01", t: "Prepare",
                  d: "We get everything ready so the work can be completed safely, efficiently and to the highest standard.",
                  feats: [
                    ["shield", "Surface preparation", "Cleaning, repairs and priming as required."],
                    ["paint", "Protect surrounding areas", "Floors, fixtures, equipment and occupied spaces."],
                    ["hardhat", "Equipment and materials", "Staging, setup and safety checks before application."],
                  ],
                },
                {
                  src: "/process/execute.jpg", n: "02", t: "Execute",
                  d: "With everything in place, our skilled team applies the right coatings with precision, care and minimal disruption.",
                  feats: [
                    ["roller", "Professional application", "Interior, exterior and specialized coatings."],
                    ["award", "Attention to detail", "Consistent coverage and quality workmanship."],
                    ["hardhat", "Safe and efficient", "Experienced crews, proper equipment and a focus on site safety."],
                  ],
                },
              ].map((c) => (
                <div key={c.n} className="relative overflow-hidden min-h-[560px] flex">
                  <Image src={c.src} alt={`Bauer Painting ${c.t}`} fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/90 via-[#0B1220]/55 to-transparent" />
                  <div className="relative p-8 lg:p-10 max-w-md flex flex-col justify-center">
                    <p className="flex items-center gap-3 text-[18px] font-extrabold" style={{ color: GREEN }}>{c.n}<span className="w-10 h-[3px]" style={{ background: GREEN }} /></p>
                    <p className="mt-3 text-[34px] font-extrabold text-white">{c.t}</p>
                    <p className="mt-4 text-[15px] text-white/80 leading-relaxed">{c.d}</p>
                    <div className="mt-8 space-y-6">
                      {c.feats.map(([icon, ft, fd]) => (
                        <div key={ft as string} className="flex gap-4">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10" style={{ color: GREEN }}>
                            <Icon n={icon as string} size={24} />
                          </span>
                          <div>
                            <p className="font-bold text-white text-[15px]">{ft}</p>
                            <p className="mt-1 text-[13px] text-white/65 leading-snug">{fd}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <span className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 items-center justify-center rounded-full text-white shadow-xl z-10" style={{ background: GREEN }}>
                <Icon n="arrow" size={26} />
              </span>
            </div>
          </div>
        </section>

        {/* ---------- 5 · REVIEW ---------- */}
        <section className="bg-white border-t border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className={`${pad} ${SEC} lg:pr-10`}>
              <Eyebrow label="Our Process" />
              <h2 className={`${H} mt-6 text-[clamp(34px,3.8vw,54px)]`}>
                The Job Isn&rsquo;t Finished Until the Details Are Right<Dot />
              </h2>
              <p className={`${body} mt-6 text-[17px] max-w-xl`}>
                We complete every project with a thorough review to ensure the work meets our high standards — and yours.
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
                {[
                  ["search", "01", "Review", "We inspect the finished work in detail to ensure everything meets our quality standards."],
                  ["chat", "02", "Communicate", "We walk through the results with you, address any final requirements, and ensure you're completely satisfied."],
                  ["checkCircle", "03", "Complete", "We leave your property clean, organized and ready for what comes next."],
                ].map(([icon, n, t, d], i, arr) => (
                  <div key={t} className="relative">
                    <div className="flex items-center gap-5">
                      <StepIcon n={icon} />
                      {i < arr.length - 1 && <span className="hidden sm:block flex-1 h-px bg-gray-200" />}
                    </div>
                    <p className="mt-5 text-[14px] font-bold" style={{ color: GREEN }}>{n}</p>
                    <p className="mt-1 text-[18px] font-bold text-[#0B1220]">{t}</p>
                    <p className="mt-2 text-[13px] text-[#8A8FA3] leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span style={{ color: GREEN }}><Icon n="shieldCheck" size={40} /></span>
                  <p className="text-[16px] font-semibold text-[#0B1220]">A higher standard. A space you can be proud of.</p>
                </div>
                <SideTag lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} />
              </div>
            </div>
            <div className="grid grid-rows-[1fr_auto] min-h-[340px] lg:min-h-0">
              <Photo src="/process/review-main.jpg" alt="Finished Bauer Painting commercial lobby" cls="min-h-[280px]" />
              <div className="grid grid-cols-3">
                <Photo src="/process/review-a.jpg" alt="Detail of finished paintwork" cls="min-h-[140px]" />
                <Photo src="/process/review-b.jpg" alt="Finished commercial hallway" cls="min-h-[140px]" />
                <div className="bg-white p-6 flex flex-col justify-center border-l border-gray-100">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8A8FA3] leading-6">IT&rsquo;S MORE<br />THAN PAINT.<br />IT&rsquo;S A BETTER<br />SPACE.</p>
                  <span className="block w-8 h-[3px] mt-3" style={{ background: GREEN }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 6 · CTA ---------- */}
        <section className="bg-white border-t border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className={`${pad} ${SEC} lg:pr-10`}>
              <Eyebrow label="Our Process" />
              <h2 className={`${H} mt-6 text-[clamp(34px,4vw,58px)]`}>
                Ready to Put the<br />Process to Work?<Dot />
              </h2>
              <p className={`${body} mt-6 text-[17px] max-w-xl`}>
                Tell us about your commercial painting project and let&rsquo;s determine the right approach for your property.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <GreenBtn href="/contact">Request a Quote</GreenBtn>
                <GhostBtn href="/contact">Contact Bauer</GhostBtn>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-6">
                {[
                  ["chat", "01", "Understand", "We listen to your goals and requirements."],
                  ["search", "02", "Assess", "We evaluate the property and project needs."],
                  ["cal", "03", "Plan", "We develop a tailored solution and schedule."],
                  ["roller", "04", "Execute", "We prepare and apply with precision and care."],
                  ["checkCircle", "05", "Review", "We inspect, confirm completion and leave your space ready for what's next."],
                ].map(([icon, n, t, d]) => (
                  <div key={t}>
                    <StepIcon n={icon} />
                    <p className="mt-3 text-[13px] font-bold" style={{ color: GREEN }}>{n}</p>
                    <p className="text-[15px] font-bold text-[#0B1220]">{t}</p>
                    <p className="mt-1 text-[12px] text-[#8A8FA3] leading-snug">{d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 grid sm:grid-cols-[1fr_1.4fr] gap-8">
                <div className="flex gap-4">
                  <span className="shrink-0" style={{ color: GREEN }}><Icon n="pin" size={30} /></span>
                  <p className="text-[15px] font-semibold text-[#0B1220] leading-snug">Proudly Serving Commercial Properties Across Southern Ontario.</p>
                </div>
                <p className="text-[12px] font-semibold tracking-[0.1em] text-[#8A8FA3] leading-7">
                  TORONTO &nbsp;•&nbsp; MISSISSAUGA &nbsp;•&nbsp; BRAMPTON &nbsp;•&nbsp; VAUGHAN<br />
                  MARKHAM &nbsp;•&nbsp; OAKVILLE &nbsp;•&nbsp; BURLINGTON &nbsp;•&nbsp; HAMILTON<br />
                  AND SURROUNDING AREAS
                </p>
              </div>
            </div>
            <div className="grid grid-rows-[1fr_auto] min-h-[340px] lg:min-h-0">
              <div className="relative min-h-[280px]">
                <Photo src="/process/cta.jpg" alt="Bauer Painting commercial building" cls="absolute inset-0" />
                <div className="absolute top-8 right-8 lg:right-12 text-right">
                  <p className="text-white text-[13px] font-semibold tracking-[0.2em] leading-7 drop-shadow">A BRIGHTER<br />TOMORROW<br />STARTS HERE.</p>
                  <span className="block w-10 h-[3px] mt-2 ml-auto" style={{ background: GREEN }} />
                </div>
              </div>
              <div className="bg-[#0B1220] text-white grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                {[
                  ["handshake", "Trusted Partner", "A professional, reliable team you can count on."],
                  ["hardhat", "Minimal Disruption", "A well-planned process keeps your business moving."],
                  ["award", "Longer-Lasting Results", "Quality workmanship for spaces that perform."],
                ].map(([icon, t, d]) => (
                  <div key={t as string} className="p-8">
                    <span style={{ color: GREEN }}><Icon n={icon as string} size={30} /></span>
                    <p className="mt-4 font-bold text-[16px]">{t}</p>
                    <p className="mt-2 text-[13px] text-white/60 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
