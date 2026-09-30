import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "About Us | Bauer Painting",
  description:
    "Bauer Painting provides professional commercial painting services for businesses across the Greater Toronto Area and surrounding communities since 2001.",
};

/* ---------- shared ---------- */
const RED = "#E63329";
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const icons: Record<string, ReactNode> = {
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 3-6 6-6s6 2 6 6M16 5a3 3 0 0 1 0 6M18 14c2 .8 3 3 3 6" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  building: <path d="M6 21V4h12v17M3 21h18M10 8h1M13 8h1M10 12h1M13 12h1M10 16h4" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  handshake: <path d="M3 12l4-4 4 2 4-2 6 5-5 5-3-2-2 2-8-6z" />,
  chat: <><path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><path d="M19 9h1a2 2 0 0 1 2 2v6l-3-2h-4" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M9 12h6M9 16h6M9 8h3" /></>,
  roller: <><rect x="4" y="3" width="14" height="6" rx="1.5" /><path d="M18 6h2v5h-8v4M12 15v6" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
};
const Icon = ({ n, size = 24 }: { n: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...P} aria-hidden>{icons[n]}</svg>
);

const pad = "px-6 lg:px-[max(2.5rem,calc((100vw-1240px)/2))]";
const H = "font-heading font-extrabold tracking-[-0.02em] text-[#0B1220] leading-[1.06]";
const Dot = () => <span style={{ color: RED }}>.</span>;
const body = "text-[#8A8FA3] leading-relaxed";

const Eyebrow = ({ n, label }: { n: string; label: string }) => (
  <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.14em] uppercase text-[#8A8FA3]">
    <span className="w-6 h-[3px]" style={{ background: RED }} />
    {n}<span className="text-gray-300">|</span>{label}
  </p>
);
const Brand = () => (
  <p className="mt-6 text-[13px] font-bold tracking-[0.08em] text-[#8A8FA3]">BAUER PAINTING</p>
);
const SideTag = ({ lines, light }: { lines: string[]; light?: boolean }) => (
  <p className={`hidden xl:block text-[11px] font-semibold tracking-[0.22em] leading-7 border-l-2 pl-4 ${light ? "text-white/85 border-white/50" : "text-[#8A8FA3] border-gray-300"}`}>
    {lines.map((l) => <span key={l} className="block">{l}</span>)}
    <span className="block w-8 h-[3px] mt-2" style={{ background: RED }} />
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
const RedBtn = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[15px] font-semibold text-white transition hover:brightness-110" style={{ background: RED }}>
    {children}<Icon n="arrow" size={16} />
  </Link>
);
const GhostBtn = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[15px] font-semibold text-[#0B1220] border border-gray-300 bg-white transition hover:border-gray-500">
    {children}
  </Link>
);
const MiniFeat = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
  <div className="flex gap-4">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50" style={{ color: RED }}>
      <Icon n={icon} size={22} />
    </span>
    <div>
      <p className="font-bold text-[#0B1220] text-[15px] leading-snug">{title}</p>
      <p className="mt-1 text-[13px] text-[#8A8FA3] leading-snug">{desc}</p>
    </div>
  </div>
);

/* ================= page ================= */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* ---------- 1 · HERO ---------- */}
        <section className="relative overflow-hidden bg-white">
          <div className="grid lg:grid-cols-2">
            <div className={`${pad} py-14 lg:py-20 lg:pr-10`}>
              <Eyebrow n="01" label="About Bauer" />
              <Brand />
              <h1 className={`${H} mt-4 text-[clamp(38px,4.4vw,62px)]`}>
                Commercial Painting Built Around People, Spaces &amp; Possibilities<Dot />
              </h1>
              <p className={`${body} mt-6 max-w-xl text-[17px]`}>
                At Bauer Painting, we provide professional commercial painting services for businesses across the Greater Toronto Area and surrounding communities. Since 2001, we&rsquo;ve been helping property owners, managers, and businesses maintain and enhance their spaces with quality, reliability, and care.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <RedBtn href="/services">Explore Our Services</RedBtn>
                <GhostBtn href="tel:+12899021221"><Icon n="phone" size={18} /> (289) 902-1221</GhostBtn>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:divide-x divide-gray-200">
                <MiniFeat icon="building" title="Commercial Focus" desc="Offices, retail, industrial and more." />
                <div className="sm:pl-6"><MiniFeat icon="shield" title="Experienced Team" desc="Professional service from start to finish." /></div>
                <div className="sm:pl-6"><MiniFeat icon="users" title="Serving Southern Ontario" desc="GTA and surrounding business communities." /></div>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-0">
              <Photo src="/about/about-hero.jpg" alt="Bauer Painting commercial building and service van" cls="absolute inset-0" />
              <div className="absolute top-24 lg:top-28 right-8 lg:right-12 text-right">
                <p className="text-white text-[13px] font-semibold tracking-[0.2em] leading-7 drop-shadow">ESTABLISHED<br />2001</p>
                <span className="block w-10 h-[3px] mt-2 ml-auto" style={{ background: RED }} />
              </div>
              <div className="absolute bottom-10 right-8 lg:right-12"><SideTag light lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} /></div>
            </div>
          </div>
        </section>

        {/* ---------- 2 · WHO WE ARE ---------- */}
        <section className="bg-white border-t border-gray-100">
          <div className="grid lg:grid-cols-[1fr_1fr_220px]">
            <div className={`${pad} py-14 lg:py-20 lg:pr-10`}>
              <Eyebrow n="02" label="Who We Are" />
              <Brand />
              <h2 className={`${H} mt-4 text-[clamp(34px,3.8vw,54px)]`}>
                Built on Experience.<br />Focused on Commercial Work<Dot />
              </h2>
              <div className={`${body} mt-6 space-y-5 text-[16px] max-w-xl`}>
                <p>Bauer Painting was established in 2001 with a simple goal — to provide high-quality painting services and lasting results for commercial properties.</p>
                <p>Over the years, we&rsquo;ve grown into a trusted partner for property owners, property managers, and businesses across the Greater Toronto Area and surrounding communities. Our focus has always been on commercial work, from offices and retail spaces to industrial and multi-unit buildings.</p>
                <p>Today, we continue to build on that foundation by combining experience, professionalism, and attention to detail with a commitment to doing the job right. We understand the unique requirements of commercial properties and work closely with our clients to deliver solutions that support their spaces, their operations, and their long-term goals.</p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:divide-x divide-gray-200">
                <MiniFeat icon="building" title="Commercial Specialists" desc="Focused on businesses and commercial properties." />
                <div className="sm:pl-6"><MiniFeat icon="shield" title="Trusted Partner" desc="Working with property owners, managers and businesses." /></div>
                <div className="sm:pl-6"><MiniFeat icon="pin" title="Serving Ontario" desc="GTA and surrounding communities." /></div>
              </div>
            </div>
            <Photo src="/about/about-story.jpg" alt="Bauer Painting team at work in a commercial space" cls="min-h-[320px] lg:min-h-0" />
            {/* timeline */}
            <div className="hidden lg:block py-20 pr-10 pl-2">
              <div className="relative border-l-2 border-gray-200 pl-8 space-y-12">
                {[
                  ["2001", "Bauer Painting Founded", "Started with a commitment to quality workmanship and customer service."],
                  ["2011", "Expanded Expertise", "Further developed our specialization in spray painting and commercial services."],
                  ["TODAY", "Continuing to Grow", "A trusted commercial painting partner for businesses across Southern Ontario."],
                ].map(([y, t, d]) => (
                  <div key={y} className="relative">
                    <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-[3px] bg-white" style={{ borderColor: RED }} />
                    <p className="text-[26px] font-extrabold text-[#0B1220] tracking-tight">{y}</p>
                    <p className="mt-1 font-bold text-[#0B1220]">{t}</p>
                    <p className="mt-1 text-[14px] text-[#8A8FA3] leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 ml-8"><SideTag lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} /></div>
            </div>
          </div>
          {/* mobile timeline */}
          <div className={`${pad} pb-14 lg:hidden`}>
            <div className="relative border-l-2 border-gray-200 pl-8 space-y-8">
              {[
                ["2001", "Bauer Painting Founded", "Started with a commitment to quality workmanship and customer service."],
                ["2011", "Expanded Expertise", "Further developed our specialization in spray painting and commercial services."],
                ["TODAY", "Continuing to Grow", "A trusted commercial painting partner for businesses across Southern Ontario."],
              ].map(([y, t, d]) => (
                <div key={y} className="relative">
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-[3px] bg-white" style={{ borderColor: RED }} />
                  <p className="text-[22px] font-extrabold text-[#0B1220]">{y}</p>
                  <p className="mt-1 font-bold text-[#0B1220]">{t}</p>
                  <p className="mt-1 text-[14px] text-[#8A8FA3]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 3 · HOW WE WORK WITH CLIENTS ---------- */}
        <section className="bg-white border-t border-gray-100">
          <div className={`${pad} py-14 lg:py-20`}>
            <Eyebrow n="03" label="How We Work With Clients" />
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="max-w-3xl">
                <Brand />
                <h2 className={`${H} mt-4 text-[clamp(34px,3.8vw,54px)]`}>
                  A Better Experience<br />From Planning to Completion<Dot />
                </h2>
                <p className={`${body} mt-6 text-[17px] max-w-2xl`}>
                  We take a clear and organized approach to every project, working closely with property owners, managers, and businesses to ensure a smooth process and outstanding results.
                </p>
              </div>
              <div className="hidden xl:block pt-16"><SideTag lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} /></div>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                ["chat", "01", "Understand", "We start by understanding your property, project requirements, goals, and any unique challenges."],
                ["doc", "02", "Plan", "We develop a detailed plan, including scope, preparation, scheduling, and operating conditions, to minimize disruptions and keep your project on track."],
                ["roller", "03", "Execute", "Our experienced team carries out the work with proper preparation, professional application, and attention to detail."],
                ["users", "04", "Communicate", "We keep you informed throughout the project, providing updates and addressing any questions until completion."],
              ].map(([icon, n, t, d], i, arr) => (
                <div key={t} className="relative">
                  <div className="flex items-center gap-6">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50" style={{ color: RED }}>
                      <Icon n={icon} size={30} />
                    </span>
                    {i < arr.length - 1 && <Icon n="arrow" size={22} />}
                  </div>
                  <p className="mt-5 text-[15px] font-bold" style={{ color: RED }}>{n}</p>
                  <p className="mt-1 text-[19px] font-bold text-[#0B1220]">{t}</p>
                  <p className="mt-2 text-[14px] text-[#8A8FA3] leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-[1fr_1fr_380px]">
            <Photo src="/about/about-team.jpg" alt="Bauer Painting team collaborating on site" cls="min-h-[280px] lg:min-h-[320px] lg:col-span-2" />
            <div className="bg-[#0B1220] text-white p-10 lg:p-12">
              <span className="block w-10 h-[3px]" style={{ background: RED }} />
              <p className="mt-6 text-[24px] font-extrabold leading-snug">A Collaborative Approach<br />for Lasting Results.</p>
              <p className="mt-4 text-[15px] text-white/70 leading-relaxed">We believe great outcomes come from strong partnerships. That&rsquo;s why we work closely with our clients every step of the way.</p>
            </div>
          </div>
        </section>

        {/* ---------- 4 · STANDARDS ---------- */}
        <section className="bg-white border-t border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className={`${pad} py-14 lg:py-20 lg:pr-10`}>
              <Eyebrow n="04" label="What Bauer Stands For" />
              <Brand />
              <h2 className={`${H} mt-4 text-[clamp(34px,3.8vw,54px)]`}>
                The Standards Behind<br />Every Project<Dot />
              </h2>
              <p className={`${body} mt-6 text-[16px] max-w-xl`}>
                At Bauer Painting, our work is guided by a set of core principles that shape how we work with our clients, manage our projects, and deliver lasting results. These standards are at the heart of every space we paint and every relationship we build.
              </p>
              <div className="mt-8">
                <span className="block w-10 h-[3px]" style={{ background: RED }} />
                <p className="mt-4 text-[12px] font-semibold tracking-[0.2em] text-[#8A8FA3] leading-7">PEOPLE<br />SPACES<br />POSSIBILITIES</p>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-0">
              <Photo src="/about/about-detail.jpg" alt="Bauer Painting craftsman painting a wall" cls="absolute inset-0" />
              <div className="absolute top-8 right-8 lg:right-12 text-right">
                <p className="text-white text-[13px] font-semibold tracking-[0.2em] leading-7 drop-shadow">QUALITY<br />PEOPLE<br />STRONGER<br />SPACES</p>
                <span className="block w-10 h-[3px] mt-2 ml-auto" style={{ background: RED }} />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-[1fr_380px] border-t border-gray-100">
            <div className={`${pad} py-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:divide-x divide-gray-200`}>
              {[
                ["01", "shield", "Professionalism", "A structured approach to commercial projects, with attention to detail and a commitment to doing the job right."],
                ["02", "gear", "Quality", "Careful preparation, the right products and methods, and attention to the finished result."],
                ["03", "users", "Reliability", "Clear communication, dependable scheduling, and a team that follows through on commitments."],
                ["04", "handshake", "Partnership", "We work closely with property owners, managers, and businesses to understand their needs and deliver solutions that support their goals."],
              ].map(([n, icon, t, d], i) => (
                <div key={t} className={i > 0 ? "sm:pl-8" : ""}>
                  <div className="flex items-center gap-4">
                    <p className="text-[26px] font-extrabold text-[#B9BFD0]">{n}</p>
                    <span style={{ color: RED }}><Icon n={icon} size={30} /></span>
                  </div>
                  <span className="block w-8 h-[3px] mt-4" style={{ background: RED }} />
                  <p className="mt-3 text-[18px] font-bold text-[#0B1220]">{t}</p>
                  <p className="mt-2 text-[14px] text-[#8A8FA3] leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#0B1220] text-white p-10 lg:p-12">
              <span className="block w-10 h-[3px]" style={{ background: RED }} />
              <p className="mt-6 text-[30px] font-extrabold leading-tight">More Than<br />Painting<Dot /></p>
              <p className="mt-4 text-[15px] text-white/70 leading-relaxed">A long-term partner for people, spaces and possibilities.</p>
            </div>
          </div>
        </section>

        {/* ---------- 5 · LET'S WORK TOGETHER ---------- */}
        <section className="bg-white border-t border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className={`${pad} py-14 lg:py-20 lg:pr-10`}>
              <Eyebrow n="05" label="Let's Work Together" />
              <Brand />
              <h2 className={`${H} mt-4 text-[clamp(34px,3.8vw,54px)]`}>
                Let&rsquo;s Work on Your<br />Next Project<Dot />
              </h2>
              <p className={`${body} mt-6 text-[16px] max-w-xl`}>
                From commercial interiors and exteriors to specialized painting solutions, Bauer Painting is ready to help you plan your next project. Our team is here to discuss your property, understand your needs, and provide the right solution.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <RedBtn href="/contact">Request a Quote</RedBtn>
                <GhostBtn href="tel:+12899021221"><Icon n="phone" size={18} /> (289) 902-1221</GhostBtn>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:divide-x divide-gray-200">
                <MiniFeat icon="users" title="Experienced Team" desc="Professional service from start to finish." />
                <div className="sm:pl-6"><MiniFeat icon="shield" title="Quality Results" desc="Long-lasting finishes for commercial spaces." /></div>
                <div className="sm:pl-6"><MiniFeat icon="building" title="Trusted Partner" desc="Supporting businesses across Southern Ontario." /></div>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-0">
              <Photo src="/about/about-hero.jpg" alt="Bauer Painting commercial building" cls="absolute inset-0" />
              <div className="absolute bottom-10 right-8 lg:right-12"><SideTag light lines={["PEOPLE", "SPACES", "POSSIBILITIES"]} /></div>
            </div>
          </div>
          {/* service area */}
          <div className={`${pad} py-12 border-t border-gray-100`}>
            <div className="grid lg:grid-cols-[280px_1fr_240px] gap-10 items-start">
              <div>
                <p className="text-[22px] font-extrabold text-[#0B1220]">Our Service Area</p>
                <p className="mt-3 text-[14px] text-[#8A8FA3] leading-relaxed">We provide commercial painting services across the Greater Toronto Area and surrounding communities.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                {["Toronto", "Oakville", "Milton", "Hamilton", "Kitchener", "Niagara Region", "Mississauga", "Burlington", "Brampton", "Guelph", "Cambridge"].map((c) => (
                  <p key={c} className="flex items-center gap-2 text-[14px] font-medium text-[#0B1220]">
                    <span style={{ color: RED }}><Icon n="pin" size={16} /></span>{c}
                  </p>
                ))}
              </div>
              <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                <p className="text-[14px] text-[#8A8FA3]">Not sure if we serve your area?</p>
                <Link href="/contact" className="mt-2 inline-flex items-center gap-2 text-[15px] font-bold" style={{ color: RED }}>
                  Get in touch <Icon n="arrow" size={16} />
                </Link>
                <span className="block w-10 h-[3px] mt-3" style={{ background: RED }} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
