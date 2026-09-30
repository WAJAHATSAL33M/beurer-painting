import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Process | Bauer Painting",
  description:
    "From first conversation to final finish — a structured process for commercial painting projects.",
};

const pad = "px-6 lg:px-[max(2.5rem,calc((100vw-1240px)/2))]";
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const icons: Record<string, ReactNode> = {
  chat: <><path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><path d="M19 9h1a2 2 0 0 1 2 2v6l-3-2h-4" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M9 12h6M9 16h6M9 8h3" /></>,
  cal: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16M9 14h2M13 14h2" /></>,
  roller: <><rect x="4" y="3" width="14" height="6" rx="1.5" /><path d="M18 6h2v5h-8v4M12 15v6" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  clip: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4h6v3H9zM9 12h6M9 16h6" /></>,
  medal: <><circle cx="12" cy="9" r="5" /><path d="M9 13l-2 8 5-3 5 3-2-8" /></>,
  hat: <><path d="M3 17h18M5 17a7 7 0 0 1 14 0M10 10V6h4v4" /></>,
  bucket: <><path d="M5 8h14l-1.5 12h-11z" /><path d="M5 8a7 3 0 0 1 14 0" /></>,
  floor: <><rect x="3" y="7" width="18" height="10" rx="2" /><path d="M7 12h10" /></>,
  handshake: <><path d="M3 12l4-4 4 2 4-2 6 5-5 5-3-2-2 2-8-6z" /></>,
  chart: <><path d="M5 20v-6M11 20V9M17 20V4" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
};
const Icon = ({ n, size = 24 }: { n: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...P} aria-hidden>{icons[n]}</svg>
);
const Bubble = ({ n, big }: { n: string; big?: boolean }) => (
  <span className={`shrink-0 rounded-full bg-green-50 text-bauer-green flex items-center justify-center ${big ? "w-20 h-20" : "w-14 h-14"}`}>
    <Icon n={n} size={big ? 34 : 26} />
  </span>
);
const Eyebrow = () => <p className="eyebrow mb-5 uppercase tracking-wider">Our Process</p>;
const Dot = () => <span className="text-bauer-green">.</span>;
const H = "font-heading font-extrabold tracking-[-0.025em] text-bauer-ink leading-[1.02]";
const Tag = ({ light }: { light?: boolean }) => (
  <p className={`text-[12px] font-semibold tracking-[0.12em] leading-relaxed border-l pl-4 ${light ? "text-white/80 border-white/40" : "text-bauer-lav border-gray-300"}`}>
    PEOPLE<br />SPACES<br />POSSIBILITIES
    <span className="block w-9 h-[2px] bg-bauer-green mt-3" />
  </p>
);
const Btns = ({ second }: { second: string }) => (
  <div className="flex flex-wrap gap-4">
    <Link href="/contact" className="btn-primary">Request a Quote <Icon n="arrow" size={16} /></Link>
    <Link href="/contact" className="btn-outline">{second} <Icon n="arrow" size={16} /></Link>
  </div>
);
const Photo = ({ src, alt, cls = "" }: { src: string; alt: string; cls?: string }) => (
  <div className={`relative overflow-hidden ${cls}`}>
    <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
  </div>
);

const hero = [
  ["chat", "Understand", "We listen to your goals and requirements."],
  ["doc", "Plan", "We develop a tailored solution and schedule."],
  ["roller", "Prepare", "We get everything ready for a smooth and efficient project."],
  ["check", "Execute", "We deliver a high-quality finish, on time and with care."],
];
const five = [
  ["chat", "Understand", "We listen to your goals, assess your needs and learn about your property.", "Listen. Learn.", "Find the right approach."],
  ["doc", "Assess", "We evaluate the space, surfaces, environment and project requirements.", "Evaluate. Identify.", "Plan with confidence."],
  ["cal", "Plan", "We develop a tailored solution, including scope, materials and a clear schedule.", "Define. Schedule.", "Set everything in motion."],
  ["roller", "Execute", "We prepare, protect and apply high-quality coatings with precision and care.", "Prepare. Apply.", "Deliver quality."],
  ["check", "Review", "We inspect, confirm completion and ensure your space is ready for what's next.", "Inspect. Confirm.", "Complete."],
];
const assess = ["Property assessment", "Surfaces and substrates", "Environment and conditions", "Access and site requirements", "Project goals and challenges"];
const plan = ["Scope of work", "Material specifications", "Scheduling and timelines", "Work-area preparation", "Project coordination"];
const prepare = [
  ["shield", "Surface preparation", "Cleaning, repairs and priming as required."],
  ["floor", "Protect surrounding areas", "Floors, fixtures, equipment and occupied spaces."],
  ["bucket", "Equipment and materials", "Staging, setup and safety checks before application."],
];
const execute = [
  ["roller", "Professional application", "Interior, exterior and specialized coatings."],
  ["medal", "Attention to detail", "Consistent coverage and quality workmanship."],
  ["hat", "Safe and efficient", "Experienced crews, proper equipment and a focus on site safety."],
];
const review = [
  ["search", "Review", "We inspect the finished work in detail to ensure everything meets our quality standards."],
  ["chat", "Communicate", "We walk through the results with you, address any final requirements, and ensure you're completely satisfied."],
  ["check", "Complete", "We leave your property clean, organized and ready for what comes next."],
];
const areas = "TORONTO • MISSISSAUGA • BRAMPTON • VAUGHAN • MARKHAM • OAKVILLE • BURLINGTON • HAMILTON AND SURROUNDING AREAS";
const trust = [
  ["handshake", "Trusted Partner", "A professional, reliable team you can count on."],
  ["hat", "Minimal Disruption", "A well-planned process keeps your business moving."],
  ["chart", "Longer-Lasting Results", "Quality workmanship for spaces that perform."],
];

const Num = ({ n }: { n: string }) => <p className="text-bauer-green text-sm font-bold">{n}</p>;

export default function OurProcessPage() {
  return (
    <main className="proc bg-[#F8FBFB]">
      <Header />

      {/* 1 — Hero */}
      <section className="grid lg:grid-cols-2 reveal">
        <div className="px-6 lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16 lg:py-20">
          <Eyebrow />
          <h1 className={`${H} text-[clamp(40px,4.6vw,74px)]`}>A Better Project Starts With a Better Process<Dot /></h1>
          <p className="mt-6 text-[clamp(16px,1.45vw,23px)] leading-snug text-bauer-lav font-medium max-w-lg leading-relaxed">
            A clear process leads to better results. From the first conversation to the final walkthrough, we plan, prepare and execute with precision—so your property looks its best and stays that way.
          </p>
          <Link href="/contact" className="btn-primary mt-8">Request a Quote <Icon n="arrow" size={16} /></Link>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {hero.map(([ic, t, d], i) => (
              <div key={t}>
                <div className="flex items-center gap-2 mb-4"><Bubble n={ic} />{i < 3 && <span className="hidden sm:block flex-1 h-px bg-gray-300" />}</div>
                <Num n={`0${i + 1}`} />
                <h3 className="font-bold text-bauer-ink">{t}</h3>
                <p className="text-[15px] text-bauer-lav mt-1 leading-snug">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <Photo src="/process/hero.jpg" alt="Bauer painter rolling a concrete column" cls="min-h-[420px]" />
      </section>

      {/* 2 — Five steps */}
      <section className="pt-16 bg-[#F8FBFB] reveal">
        <div className={pad}>
          <div className="flex justify-between gap-8">
            <div>
              <Eyebrow />
              <h2 className={`${H} text-[clamp(32px,3.6vw,58px)]`}>From First Conversation to Final Finish<Dot /></h2>
              <p className="mt-3 text-[clamp(16px,1.35vw,21px)] text-bauer-lav font-medium">A structured process. A better experience. A longer-lasting result.</p>
            </div>
            <div className="hidden lg:block"><Tag /></div>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 pb-14 reveal-group">
            {five.map(([ic, t, d], i) => (
              <div key={t} className="reveal-item">
                <div className="flex items-center gap-3 mb-5"><Bubble n={ic} big />{i < 4 && <span className="hidden lg:block flex-1 h-px bg-gray-300" />}</div>
                <p className="text-bauer-green text-xl font-bold">{`0${i + 1}`}</p>
                <h3 className="text-xl font-bold text-bauer-ink">{t}</h3>
                <p className="text-[15px] text-bauer-lav mt-1 leading-snug">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 reveal-group">
          {five.map(([, , , a, b], i) => (
            <div key={a} className="reveal-item relative h-72 lg:h-80 overflow-hidden">
              <Image src={`/process/step${i + 1}.jpg`} alt={a} fill className="object-cover" sizes="20vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-bauer-navy via-bauer-navy/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-3 text-white">
                <p className="text-bauer-green font-bold flex items-center gap-2">{`0${i + 1}`}<span className="w-8 h-px bg-bauer-green" /></p>
                <p className="mt-2 leading-snug">{a}<br />{b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 — Preparation */}
      <section className="grid lg:grid-cols-2 reveal">
        <div className="px-6 lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16">
          <Eyebrow />
          <h2 className={`${H} text-[clamp(32px,3.6vw,58px)]`}>The Right Preparation Starts Before the First Coat<Dot /></h2>
          <p className="mt-4 text-[clamp(16px,1.35vw,21px)] leading-snug text-bauer-lav font-medium max-w-xl leading-relaxed">
            We take the time to properly assess your property and develop a detailed plan — so the project runs smoothly, efficiently, and delivers the results you expect.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-10">
            {[
              ["01", "Assess", "A detailed understanding leads to better solutions.", "search", assess],
              ["02", "Plan", "A clear plan keeps everything on track.", "clip", plan],
            ].map(([n, t, d, ic, list]) => (
              <div key={t as string}>
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                  <Bubble n={ic as string} big />
                  <div><Num n={n as string} /><h3 className="text-2xl font-bold text-bauer-ink">{t as string}</h3><p className="text-sm text-bauer-lav leading-snug">{d as string}</p></div>
                </div>
                <ul className="mt-5 space-y-3">
                  {(list as string[]).map((x) => (
                    <li key={x} className="flex items-center gap-3 text-[15px] text-gray-700"><span className="text-bauer-green"><Icon n="check" size={20} /></span>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10"><Btns second="Learn More About Our Process" /></div>
        </div>
        <Photo src="/process/prep.jpg" alt="Bauer team assessing a commercial space" cls="min-h-[460px]" />
      </section>

      {/* 4 — Prepare / Execute */}
      <section className={`${pad} py-16 reveal`}>
        <div className="flex justify-between gap-8">
          <div>
            <Eyebrow />
            <h2 className={`${H} text-[clamp(32px,3.6vw,58px)]`}>Preparation Sets the Foundation<Dot /><br />Execution Brings It to Life<Dot /></h2>
            <p className="mt-3 text-[clamp(16px,1.35vw,21px)] text-bauer-lav font-medium">A smooth, efficient project comes down to proper preparation and expert execution.</p>
          </div>
          <div className="hidden lg:block"><Tag /></div>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-4">
          {[
            ["01", "Prepare", "We get everything ready so the work can be completed safely, efficiently and to the highest standard.", prepare, "prepare"],
            ["02", "Execute", "With everything in place, our skilled team applies the right coatings with precision, care and minimal disruption.", execute, "execute"],
          ].map(([n, t, d, items, img]) => (
            <div key={t as string} className="relative overflow-hidden bg-bauer-navy min-h-[520px] text-white">
              <Image src={`/process/${img}.jpg`} alt={t as string} fill className="object-cover object-right" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-bauer-navy via-bauer-navy/90 to-transparent lg:via-bauer-navy/80" />
              <div className="relative p-8 max-w-[75%]">
                <p className="text-bauer-green font-bold flex items-center gap-3">{n as string}<span className="w-14 h-px bg-bauer-green" /></p>
                <h3 className="text-4xl font-extrabold mt-2">{t as string}</h3>
                <p className="mt-3 text-white/85 leading-snug">{d as string}</p>
                <ul className="mt-8 space-y-5">
                  {(items as string[][]).map(([ic, a, b]) => (
                    <li key={a} className="flex gap-4">
                      <span className="w-12 h-12 shrink-0 rounded-full bg-white/10 text-bauer-green flex items-center justify-center"><Icon n={ic} size={22} /></span>
                      <span><span className="block font-semibold">{a}</span><span className="block text-sm text-white/70 leading-snug">{b}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — Details */}
      <section className="grid lg:grid-cols-2 reveal">
        <div className="px-6 lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16 flex flex-col">
          <Eyebrow />
          <h2 className={`${H} text-[clamp(32px,3.6vw,58px)]`}>The Job Isn't Finished Until the Details Are Right<Dot /></h2>
          <p className="mt-4 text-[clamp(16px,1.35vw,21px)] leading-snug text-bauer-lav font-medium max-w-xl leading-relaxed">
            We complete every project with a thorough review to ensure the work meets our high standards — and yours.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 reveal-group">
            {review.map(([ic, t, d], i) => (
              <div key={t} className="reveal-item">
                <div className="flex items-center gap-2 mb-4"><Bubble n={ic} />{i < 2 && <span className="hidden sm:block flex-1 h-px bg-gray-300" />}</div>
                <Num n={`0${i + 1}`} />
                <h3 className="text-lg font-bold text-bauer-ink">{t}</h3>
                <p className="text-[15px] text-bauer-lav mt-1 leading-snug">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-10">
            <div className="border-t border-gray-300 pt-6 flex items-center justify-between gap-6">
              <p className="flex items-center gap-4 text-bauer-ink"><span className="text-bauer-green"><Icon n="shield" size={36} /></span>A higher standard. A space you can be proud of.</p>
              <div className="hidden sm:block"><Tag /></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-[1.6fr_1fr] min-h-[360px] sm:min-h-[520px]">
          <Photo src="/process/review-main.jpg" alt="Bauer supervisor reviewing a finished lobby" cls="col-span-2 sm:col-span-3" />
          <Photo src="/process/review-a.jpg" alt="Checking a finished wall" />
          <Photo src="/process/review-b.jpg" alt="Finished corridor" />
          <div className="hidden sm:flex bg-[#F8FBFB] p-5 items-center">
            <p className="text-[12px] font-semibold tracking-[0.12em] text-bauer-lav border-l border-[#B8B8D0] pl-4 leading-relaxed">
              IT'S MORE<br />THAN PAINT.<br />IT'S A BETTER<br />SPACE.
              <span className="block w-9 h-[2px] bg-bauer-green mt-3" />
            </p>
          </div>
        </div>
      </section>

      {/* 6 — CTA */}
      <section className="grid lg:grid-cols-2 reveal">
        <div className="px-6 lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12 py-16">
          <Eyebrow />
          <h2 className={`${H} text-[clamp(40px,4.6vw,74px)]`}>Ready to Put the Process to Work?</h2>
          <p className="mt-6 text-[clamp(16px,1.45vw,23px)] leading-snug text-bauer-lav font-medium max-w-lg leading-relaxed">
            Tell us about your commercial painting project and let's determine the right approach for your property.
          </p>
          <div className="mt-8"><Btns second="Contact Bauer" /></div>
          <div className="mt-10 flex flex-wrap gap-x-3 gap-y-6">
            {five.map(([ic, t], i) => (
              <div key={t} className="w-[110px]">
                <Bubble n={ic} />
                <p className="text-bauer-green text-sm font-bold mt-3">{`0${i + 1}`}</p>
                <p className="font-semibold text-bauer-ink text-sm">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-gray-300 flex flex-wrap items-center gap-6">
            <span className="text-bauer-green"><Icon n="pin" size={34} /></span>
            <p className="text-bauer-ink max-w-[220px]">Proudly Serving Commercial Properties Across Southern Ontario.</p>
            <p className="text-[11px] tracking-wider text-bauer-lav max-w-xs leading-relaxed">{areas}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <Photo src="/process/cta.jpg" alt="Bauer Painting commercial building" cls="flex-1 min-h-[380px]" />
          <div className="bg-bauer-navy text-white grid sm:grid-cols-3 gap-6 p-8 reveal-group">
            {trust.map(([ic, t, d]) => (
              <div key={t} className="reveal-item">
                <span className="text-bauer-green"><Icon n={ic} size={30} /></span>
                <p className="font-semibold mt-2">{t}</p>
                <p className="text-sm text-white/70 leading-snug mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
