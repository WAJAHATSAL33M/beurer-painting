import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteSection from "@/components/QuoteSection";
import Icon from "@/components/Icon";
import ServiceFinder from "@/components/ServiceFinder";
import WorkSlider from "@/components/WorkSlider";
import { SERVICE_AREA_NAMES } from "@/lib/site-data";

export const metadata = {
  title: "Bauer Painting | Commercial Painting Experts Since 2001",
  description: "High-quality commercial painting for a stronger, cleaner and more professional tomorrow.",
};

const HL = "font-extrabold tracking-tight leading-[1.02]";
const pad = "px-6 lg:px-[max(2.5rem,calc((100vw-1240px)/2))]";
const Img = ({ src, alt = "", cls = "", pos = "object-cover" }: { src: string; alt?: string; cls?: string; pos?: string }) => (
  <div className={`relative overflow-hidden ${cls}`}><Image src={src} alt={alt} fill className={pos} sizes="(min-width:1024px) 33vw, 100vw" /></div>
);
const Dot = () => <span className="text-[var(--acc)]">.</span>;
const Side = ({ lines, dark }: { lines: string[]; dark?: boolean }) => (
  <p className={`hidden lg:block text-[12px] tracking-[0.22em] leading-7 ${dark ? "text-white/80" : "text-gray-600"}`}>
    {lines.map((l) => <span key={l} className="block">{l}</span>)}
    <span className="block w-9 h-0.5 bg-[var(--acc)] mt-3" />
  </p>
);
const Quote = ({ children, right, dark = true, img, cta }: { children: React.ReactNode; right: string[]; dark?: boolean; img?: string; cta?: { label: string; href: string } }) => (
  <div className={`relative overflow-hidden ${pad} py-10 flex flex-wrap items-center gap-8 ${dark ? "bg-[#151d26] text-white" : "bg-[#e5e7ea] text-bauer-ink"}`}>
    {img && <><Img src={img} cls="!absolute inset-y-0 right-0 w-full sm:w-[38%]" pos="object-cover object-center" /><div className={`absolute inset-0 ${dark ? "bg-gradient-to-r from-[#151d26] via-[#151d26]/92 to-[#151d26]/30" : "bg-gradient-to-r from-[#e5e7ea] via-[#e5e7ea]/92 to-[#e5e7ea]/30"}`} /></>}
    <div className="relative flex flex-wrap items-center gap-8 flex-1">
      <span className="text-5xl font-serif text-[var(--acc)] leading-none">“</span>
      <p className="font-serif italic text-2xl lg:text-3xl leading-snug flex-1 min-w-[260px]">{children}</p>
      <div className={`border-l pl-8 ${dark ? "border-white/30" : "border-gray-400"}`}><Side lines={right} dark={dark} /></div>
      {cta && <Link href={cta.href} className={`hghost sm ${dark ? "on-dark" : ""}`}>{cta.label} <Icon n="arrow" size={14} /></Link>}
    </div>
  </div>
);

const stats = [["24+", "Years of Experience"], ["1000+", "Projects Completed"], ["100%", "Client Focused"], ["11", "Service Areas"]];
const brands: [string, string][] = [
  ["Scotiabank", "font-bold tracking-tight"],
  ["Loblaw", "font-black tracking-tight"],
  ["Tim Hortons", "font-serif italic font-semibold"],
  ["COSTCO", "font-extrabold italic tracking-tight"],
  ["Sheraton", "font-serif font-semibold"],
];
const why4 = [
  ["clip", "Smart Planning", "Detailed planning to keep projects on schedule and minimize disruption to your business."],
  ["shield", "Total Reliability", "A team you can count on to show up, communicate clearly, and get the job done right."],
  ["hat", "Quality Workmanship", "High-quality finishes that enhance and protect your property for the long term."],
  ["coins", "Built Around Budgets", "Efficient execution and practical solutions that deliver exceptional value."],
];
const svcs = [
  ["Interior Painting", "Professional interior painting for commercial spaces of all sizes and industries.", ["Commercial Offices", "Retail Interiors", "Warehouses & Factories", "Healthcare Facilities", "Hotels & Hospitality", "Restaurants", "Schools & Educational", "Government Buildings", "Gyms & Sports Facilities", "Places of Worship", "Elevators & Stairwells", "Ceiling Painting", "Dryfall & Ceiling Decking", "Parking Garages"], "Interior"],
  ["Exterior Painting", "Durable exterior painting solutions that protect and elevate your property.", ["Retail Storefronts", "Warehouse Siding", "Industrial Buildings", "Shopping Malls & Plazas", "Hotels", "Schools & Educational", "Healthcare Facilities", "Government Buildings", "High-Rises", "Metal Siding & Gutters", "Brick & Masonry", "Structural Steel", "Waterproof Coatings", "Exterior Trim", "Heat Reflective Roof Coatings"], "Exterior"],
  ["Special Services", "Advanced painting and coating solutions for unique commercial needs.", ["Spray Painting Services", "Services for Property Managers", "Eco-Friendly Painting Services", "High-Durability Coatings", "Multi-Unit & Strata Painting", "Pressure Washing & Surface Preparation", "Anti-Graffiti Coatings"], "Special"],
];
const inds = ["Commercial Offices", "Retail Interiors", "Warehouses & Factories", "Healthcare Facilities", "Hotels & Hospitality", "Restaurants", "Schools & Educational", "Government Buildings", "Gyms & Sports Facilities", "Places of Worship", "High-Rises", "Parking Garages"];
const indIcons = ["building", "home", "grid", "shield", "layers", "dot", "doc", "building", "gear", "home", "building", "grid"];
const how = [
  ["Plan", "Understand your goals. Build the right plan.", "clip", ["Site assessment", "Understand requirements", "Detailed project planning"]],
  ["Prepare", "Set the stage for a smooth and efficient project.", "roller", ["Surface preparation", "Protect surrounding areas", "Ensure a safe work environment"]],
  ["Execute", "Deliver high-quality work with minimal disruption.", "gear", ["Professional application", "Efficient project management", "Regular communication"]],
  ["Complete", "A finished space, ready for what's next.", "checkc", ["Final walkthrough", "Quality inspection", "On-time project completion"]],
];
const areas = SERVICE_AREA_NAMES;
const whyc = [
  ["clock", "Minimal Disruption", "We work around your schedule to keep your operations running smoothly and reduce downtime."],
  ["gear", "Professional Workmanship", "Our experienced team delivers clean, consistent, high-quality results on every project."],
  ["users", "Project-Focused Planning", "We take the time to understand your goals, provide clear planning, and keep your project on track."],
  ["chart", "Spaces Built to Last", "We use professional-grade products and proven techniques to help protect and enhance your property."],
];

export default function Home() {
  return (
    <main className="bg-[#F3F4F6]">
      <Header />

      {/* 1 — Hero */}
      <section className="relative bg-[#0a1220] text-white overflow-hidden reveal">
        <Img src="/home/hero.jpg" cls="!absolute inset-y-0 right-0 w-full lg:w-[62%]" pos="object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1220] via-[#0a1220]/85 to-[#0a1220]/20" />
        <p className="absolute right-8 top-36 hidden text-right text-[11px] font-medium leading-8 tracking-[0.28em] text-white/70 xl:block">BUILDINGS<br />BUSINESSES<br />BRIGHTER TOMORROWS<span className="ml-auto mt-3 block h-0.5 w-9 bg-[var(--acc)]" /></p>
        <div className={`relative ${pad} pt-20 pb-14`}>
          <p className="hlabel">Commercial Painting Experts Since 2001</p>
          <h1 className={`${HL} mt-8 text-[clamp(48px,6.4vw,100px)] uppercase max-w-[900px]`}>Spaces<br />That Work<br />Harder<Dot /></h1>
          <span className="block w-10 h-px bg-white/70 my-6" />
          <p className="text-[clamp(17px,1.5vw,22px)] text-white/90 max-w-md leading-relaxed">High-quality commercial painting for a stronger, cleaner and more professional tomorrow.</p>
          <div className="mt-8 max-w-[760px] rounded border border-white/15 bg-black/40 backdrop-blur p-6">
            <div className="flex flex-wrap justify-between gap-2"><p className="font-semibold">Find Your Painting Service</p><p className="text-sm text-white/80">Enter your postal code to get started.</p></div>
            <ServiceFinder variant="hero" />
            <p className="mt-4 text-sm text-white/80 flex items-center gap-2"><Icon n="pin" size={16} />Serving Mississauga, Toronto, Oakville, Burlington, Hamilton and more.</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            {stats.map(([n, l]) => (<div key={l} className="border-r border-white/25 pr-10 last:border-0"><p className="text-3xl font-semibold">{n}</p><p className="text-sm text-white/80">{l}</p></div>))}
            <Link href="/our-process" className="ml-auto flex items-center gap-4 text-xs tracking-[0.2em]"><span className="w-16 h-16 rounded-full border border-white flex items-center justify-center"><Icon n="play" /></span>WATCH OUR STORY</Link>
          </div>
        </div>
      </section>
      <div className={`${pad} py-8 bg-[#F6F7F9] flex flex-wrap items-center gap-x-12 gap-y-4`}>
        <p className="text-xs font-bold tracking-widest text-gray-700">TRUSTED BY<br />LEADING BUSINESSES</p>
        {brands.map(([b, cls]) => <span key={b} className={`text-2xl text-gray-500 ${cls}`}>{b}</span>)}
        <span className="hidden h-10 w-px bg-gray-300 sm:block" />
        <span className="sm:ml-0 ml-auto text-xs font-semibold tracking-widest text-gray-700">AND MANY MORE <span className="text-[var(--acc)]">→</span></span>
      </div>

      {/* 2 — Built for commercial */}
      <section className="bg-[#EBECEE] reveal">
        <div className="grid lg:grid-cols-[1.35fr_1fr]">
          <div className={`relative ${pad} lg:pr-10 py-20`}>
            <p className="hlabel text-gray-700">Built for Commercial Projects</p>
            <p className="script pointer-events-none absolute right-4 top-60 hidden -rotate-6 text-right text-[34px] leading-[1.15] text-[var(--acc-d)] xl:block">More<br />Than<br />Paint.</p>
            <h2 className="mt-8 text-[clamp(36px,4.2vw,64px)] leading-[1.05] tracking-tight"><b className="font-extrabold">Painting is the finish.</b><br /><span className="font-light">Planning is what makes the project work.</span></h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">Since 2001, Bauer Painting has focused on smart, efficient planning, total reliability, and a commitment to surpassing our clients&apos; expectations. We deliver high-quality commercial painting that meets timelines, budgets, and the highest standards.</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link href="/about" className="hbtn">Our Story <Icon n="arrow" size={16} /></Link>
              <Link href="/our-process" className="flex items-center gap-3 font-medium"><span className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center"><Icon n="play" /></span><span>Watch How We Work<span className="block text-[10px] tracking-widest text-gray-500">2 MINUTE VIDEO</span></span></Link>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <Img src="/home/built.jpg" cls="!absolute inset-0" pos="object-cover object-top" />
            <div className="absolute right-0 top-0 hidden bg-[#0d1520]/90 px-6 py-5 md:block">
              <p className="text-[11px] font-medium leading-7 tracking-[0.24em] text-white/85">PLANNED<br />PREPARED<br />PROFESSIONAL<br />ON TIME<br />ON BUDGET</p>
            </div>
            <div className="absolute bottom-0 right-0 w-60 bg-[#e3e4e6]/95 p-6">
              <p className="flex items-center gap-3 text-xs tracking-[0.2em] text-gray-500">EST.<span className="h-px w-10 bg-gray-400" /><span className="h-px w-10 bg-[var(--acc)]" /></p>
              <p className="mt-1 text-7xl font-bold leading-none text-gray-400">2001</p>
              <p className="mt-2 text-[10px] tracking-[0.18em] text-gray-600">SERVING COMMERCIAL CLIENTS FOR OVER 24 YEARS</p>
            </div>
          </div>
        </div>
        <div className={`${pad} py-12 bg-[#F0F0F1] grid sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-group`}>
          {why4.map(([ic, t, d], i) => (
            <div key={t} className="reveal-item flex gap-4 lg:border-l lg:border-gray-300 lg:pl-6 lg:first:border-0 lg:first:pl-0">
              <div><p className="text-3xl font-bold text-gray-400">{`0${i + 1}`}</p><span className="block w-9 h-px bg-gray-400 mt-2" /></div>
              <div><span className="text-[var(--acc)]"><Icon n={ic} size={30} /></span><h3 className="font-bold text-bauer-ink mt-3">{t}</h3><p className="text-sm text-gray-600 mt-2 leading-relaxed">{d}</p></div>
            </div>
          ))}
        </div>
        <Quote right={["COMMERCIAL SPACES.", "BRIGHTER TOMORROWS."]} img="/home/hero.jpg">We don&apos;t just paint buildings.<br />We help businesses create better spaces.</Quote>
      </section>

      {/* 3 — What we do */}
      <section className={`${pad} py-20 bg-[#F1F2F4] reveal`}>
        <p className="hlabel text-gray-700">What We Do</p>
        <div className="mt-6 flex flex-wrap justify-between gap-8 items-end">
          <h2 className="text-[clamp(36px,4.4vw,68px)] leading-[1.05] tracking-tight"><b className="font-extrabold">One painting partner.</b><br /><span className="font-light">Every surface that matters.</span></h2>
          <div className="max-w-xs border-l border-gray-300 pl-6 text-sm text-gray-600">From interior spaces to exterior structures and specialized coatings, Bauer Painting delivers high-quality solutions for every commercial environment.<Link href="/services" className="block mt-3 text-xs font-semibold tracking-widest text-[var(--acc)]">EXPLORE ALL SERVICES →</Link></div>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 gap-4 reveal-group">
          {svcs.map(([t, d, list, k], i) => (
            <div key={t as string} className="reveal-item bg-[#111a24] text-white rounded overflow-hidden flex flex-col">
              <div className="relative h-56"><Img src={`/home/svc${i + 1}.jpg`} cls="!absolute inset-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#111a24] to-transparent" /></div>
              <div className="p-6 pt-0 flex-1 flex flex-col">
                <h3 className={`${HL} text-4xl uppercase`}>{(t as string).split(" ")[0]}<br />{(t as string).split(" ")[1]}</h3>
                <p className="mt-4 text-white/85">{d as string}</p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-[13px] text-white/75 flex-1 content-start">
                  {(list as string[]).map((x) => <li key={x} className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[var(--acc)]"><Icon n="check" size={14} /></span>{x}</li>)}
                </ul>
                <div className="mt-6 flex items-center justify-between"><Link href={k === "Interior" ? "/services/interior-painting" : k === "Exterior" ? "/services/exterior-painting" : "/services"} className="text-xs tracking-[0.18em] font-medium">EXPLORE {(k as string).toUpperCase()} SERVICES →</Link><span className="w-12 h-12 rounded-full border border-white/70 flex items-center justify-center"><Icon n="play" size={18} /></span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-8">
          <p className="hlabel text-xs !tracking-[.16em] text-gray-700">Different Spaces.<br />A Stronger Tomorrow.</p>
          <div className="flex gap-8 mx-auto">{[["1000+", "Projects Completed"], ["24+", "Years of Experience"], ["11", "Service Areas"]].map(([n, l]) => <div key={l} className="border-l border-gray-300 pl-6"><p className="text-2xl font-bold">{n}</p><p className="text-sm text-gray-600">{l}</p></div>)}</div>
          <Link href="/contact" className="hbtn">Request a Quote <Icon n="arrow" size={16} /></Link>
        </div>
      </section>

      {/* 4 — Industries */}
      <section className="bg-[#0d1520] text-white reveal">
        <div className="relative min-h-[460px] overflow-hidden">
          <Img src="/home/ind-feat.jpg" cls="!absolute inset-y-0 right-0 w-full lg:w-[56%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1520] via-[#0d1520]/90 to-transparent lg:via-[#0d1520]/70" />
          <div className={`relative ${pad} pt-14 pb-14 lg:pb-56`}>
            <div className="flex items-start justify-start gap-10">
              <div className="max-w-[620px]">
                <p className="hlabel">Industries We Paint</p>
                <h2 className="mt-8 text-[clamp(36px,4vw,58px)] leading-[1.05] tracking-tight"><b className="font-extrabold">Different Industries.</b><br /><span className="font-light text-white/85">A Higher Standard.</span></h2>
                <p className="mt-6 text-lg text-white/85 max-w-lg leading-relaxed">From offices and retail spaces to industrial facilities and healthcare buildings, Bauer Painting delivers professional results for a wide range of commercial environments.</p>
                <Link href="/industries" className="hbtn mt-8">Explore All Industries <Icon n="arrow" size={16} /></Link>
              </div>
              <Side dark lines={["SPACES", "PEOPLE", "BUSINESSES", "COMMUNITIES"]} />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 hidden w-16 flex-col items-center justify-between bg-[#0d1520] py-16 lg:flex">
            <p className="text-center text-[11px] font-medium leading-7 tracking-[0.24em] text-white/70"><span className="text-[var(--acc)]">01</span><br /><span className="inline-block h-px w-5 bg-[var(--acc)]" /><br /><span className="inline-block h-px w-5 bg-white/50" /><br /><span className="inline-block h-px w-5 bg-white/50" /><br />06</p>
            <div className="flex flex-col gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/25 text-white"><span className="rotate-180 inline-flex"><Icon n="arrow" size={18} /></span></span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0d1520]"><Icon n="arrow" size={18} /></span>
            </div>
          </div>
          <div className="absolute bottom-8 left-6 right-6 hidden max-w-xl items-center gap-6 rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-md lg:flex lg:left-[max(2.5rem,calc((100vw-1240px)/2))]">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-white/70"><span className="h-0.5 w-8 bg-[var(--acc)]" />FEATURED INDUSTRY<span className="h-px flex-1 bg-white/25" /></p>
              <p className="mt-3 text-2xl font-bold">Commercial Offices</p>
              <p className="mt-1 text-sm text-white/75">Create productive, professional spaces with high-quality interior painting.</p>
            </div>
            <span className="ml-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/70"><Icon n="play" size={20} /></span>
          </div>
        </div>
        <div className={`${pad} py-6 bg-[#F3F4F6] text-white`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 reveal-group">
            {inds.slice(0, 8).map((t, i) => <Tile key={t} i={i} t={t} />)}
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 reveal-group">
            {inds.slice(8).map((t, i) => <Tile key={t} i={i + 8} t={t} />)}
            <div className="col-span-2 sm:col-span-4 lg:col-span-4 text-gray-700 flex flex-wrap items-center gap-6 p-4">
              <div className="flex-1 min-w-[240px]"><p className="hlabel text-xs !tracking-[.16em]">More Industries.<br />Stronger Communities.</p><p className="mt-4 text-sm text-gray-600 leading-relaxed">No matter the industry, our focus remains the same — quality workmanship, efficient execution, and spaces that make a lasting impression.</p></div>
              <Link href="/industries" className="hghost sm bg-gray-200/70 border-transparent">View All Industries <Icon n="arrow" size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Our Work */}
      <section className={`${pad} pt-20 bg-[#F3F4F6] reveal`}>
        <p className="hlabel text-gray-700">Our Work</p>
        <div className="mt-6 flex flex-wrap justify-between gap-8">
          <div className="max-w-xl">
            <h2 className={`${HL} text-[clamp(38px,4.6vw,70px)]`}>Work that speaks for itself.</h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">From modern office spaces to large-scale industrial facilities, our work reflects a commitment to quality, precision, and professional results.</p>
            <Link href="/our-work" className="hbtn mt-7">View All Projects <Icon n="arrow" size={16} /></Link>
          </div>
          <div className="flex flex-wrap gap-8 items-start pt-4">
            {[["shield", "QUALITY WORKMANSHIP"], ["hat", "ON TIME COMPLETION"], ["building", "DIVERSE PROJECTS"], ["users", "TRUSTED BY BUSINESSES"]].map(([ic, l]) => <div key={l} className="text-center w-28 text-[10px] tracking-widest font-medium"><span className="flex justify-center mb-3"><Icon n={ic} size={30} /></span>{l}</div>)}
          </div>
        </div>
        <WorkSlider />
        <div className="mt-14 -mx-6 lg:-mx-[max(2.5rem,calc((100vw-1240px)/2))]"><Quote dark={false} right={["DIFFERENT PROJECTS.", "STRONGER COMMUNITIES."]} cta={{ label: "View All Projects", href: "/our-work" }}>Well-executed spaces do more than look good.<br />They help businesses perform better.</Quote></div>
      </section>

      {/* 6 — How we work */}
      <section className="bg-[#F3F4F6] reveal">
        <div className="relative overflow-hidden">
          <Img src="/home/how-top.jpg" cls="!absolute inset-y-0 right-0 w-full lg:w-[30%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3F4F6] via-[#F3F4F6]/90 to-transparent" />
          <div className={`relative ${pad} py-16`}>
            <div className="flex items-start justify-between gap-10">
              <div>
                <p className="hlabel text-gray-700">How We Work</p>
                <h2 className={`${HL} mt-6 text-[clamp(38px,4.6vw,70px)] max-w-2xl`}>A Clear Process for Better Results<Dot /></h2>
                <p className="mt-5 text-lg text-gray-600 max-w-xl leading-relaxed">From planning to final walkthrough, we keep your project on track with clear communication, professional execution, and a focus on quality at every stage.</p>
              </div>
              <div className="hidden lg:block shrink-0 lg:mr-[30%]"><Side lines={["PLAN", "PREPARE", "EXECUTE", "COMPLETE"]} /></div>
            </div>
          </div>
        </div>
        <div className={`${pad} py-10 bg-[#F8F8F9] grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-group`}>
          {how.map(([t, d, ic, list], i) => (
            <div key={t as string} className="reveal-item">
              <div className="relative flex gap-3 mb-5"><div><p className="text-4xl font-bold text-gray-400">{`0${i + 1}`}</p><span className="block w-10 h-0.5 bg-[var(--acc)] mt-1" /></div><div><p className="font-bold tracking-wide uppercase">{t as string}</p><p className="text-sm text-gray-600 leading-snug">{d as string}</p></div>{i < 3 && <span className="absolute -right-4 top-5 hidden text-gray-400 lg:block"><Icon n="arrow" size={18} /></span>}</div>
              <div className="rounded overflow-hidden bg-[#111a24] text-white">
                <Img src={`/home/how${i + 1}.jpg`} cls="h-44" />
                <div className="p-5 flex gap-4"><span className="mt-1"><Icon n={ic as string} size={34} /></span><ul className="space-y-2 text-sm">{(list as string[]).map((x) => <li key={x} className="flex gap-2"><Icon n="check" size={14} />{x}</li>)}</ul></div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden bg-[#111a24] text-white">
          <Img src="/home/why-bg.jpg" cls="!absolute inset-y-0 left-0 w-full sm:w-[30%]" pos="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111a24]/60 via-[#111a24] to-[#3a4450]" />
          <div className={`${pad} relative py-12 flex flex-wrap items-center justify-end gap-10`}>
            <p className="font-serif italic text-2xl max-w-md"><span className="text-4xl text-[var(--acc)] not-italic mr-3">“</span>A well-managed project leads to spaces that work harder for your business.</p>
            <p className="border-l border-white/30 pl-8 text-xs tracking-[0.2em]">BUILT FOR<br />WHAT&apos;S NEXT.</p>
            <Link href="/contact" className="hbtn">Start Your Project <Icon n="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 7 — Service area */}
      <section className="relative bg-[#F3F4F6] reveal">
        <div className={`${pad} pt-20 pb-72 grid lg:grid-cols-2 gap-8`}>
          <div className="relative z-10 min-w-0">
            <p className="hlabel text-gray-700">Our Service Area</p>
            <h2 className="mt-6 text-[clamp(38px,4.6vw,70px)] leading-[1.05] tracking-tight"><b className="font-extrabold">Is Bauer Painting available for</b><br /><span className="font-light">your project?</span></h2>
            <p className="mt-5 text-lg text-gray-600 max-w-lg leading-relaxed">We provide commercial painting services across the Greater Toronto and Hamilton Area. Enter your postal code to confirm if we service your location.</p>
            <ServiceFinder variant="section" />
            <p className="mt-5 flex items-center gap-3"><span className="w-10 h-10 rounded-full bg-[var(--acc)] text-white flex items-center justify-center"><Icon n="check" size={18} /></span><span><b className="text-[var(--acc-d)] block">We service your area!</b><span className="text-sm text-gray-600">Commercial painting services are available in your location.</span></span></p>
            <p className="mt-8 font-serif italic text-xl text-gray-700 max-w-md leading-relaxed">“From your neighbourhood to major commercial hubs, we help build better spaces across the region.”</p>
            <span className="block w-9 h-0.5 bg-[var(--acc)] mt-4" />
          </div>
          <div className="relative min-h-[380px] min-w-0"><Img src="/home/map.jpg" cls="!absolute inset-0" pos="object-contain object-right" />
            <p className="script absolute right-4 top-2 hidden -rotate-3 text-right text-[30px] leading-[1.2] text-white drop-shadow-md lg:block">Proudly<br />Serving<br />Your Area.</p>
            <div className="absolute right-0 bottom-0 bg-[#111a24]/95 text-white p-5 w-56 text-sm hidden lg:block"><p className="text-[10px] tracking-[0.2em] mb-3">OUR SERVICE AREAS</p><ul className="space-y-1.5">{areas.map((a) => <li key={a} className="flex items-center gap-2"><Icon n="pin" size={14} />{a}</li>)}</ul></div></div>
        </div>
        <Img src="/home/skyline.jpg" cls="!absolute left-0 right-0 bottom-32 h-52 opacity-90" pos="object-cover object-bottom" />
        <div className={`relative ${pad} py-9 bg-[#111a24] text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {[["pin", "LOCAL EXPERTISE", "We understand the unique needs of commercial properties in your area."], ["clock", "RELIABLE SERVICE", "On time, on schedule, and ready when you are."], ["users", "SUPPORTING LOCAL BUSINESSES", "Proud to work with businesses across our communities."], ["building", "BIGGER SPACES. BRIGHTER TOMORROWS.", ""]].map(([ic, t, d]) => <div key={t} className="flex gap-4 lg:border-l lg:border-white/20 lg:pl-6 lg:first:border-0"><Icon n={ic} size={32} /><div><p className="text-xs tracking-[0.18em] font-medium">{t}</p><p className="text-sm text-white/70 mt-2">{d}</p></div></div>)}
        </div>
      </section>

      {/* 8 — Why choose */}
      <section className={`${pad} py-20 bg-[#F3F4F6] reveal`}>
        <div className="flex items-start justify-between gap-10">
          <div>
            <p className="hlabel text-gray-700">Why Choose Bauer</p>
            <h2 className={`${HL} mt-6 text-[clamp(38px,4.6vw,70px)] max-w-3xl`}>Why Commercial Properties Choose Bauer<Dot /></h2>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl leading-relaxed">Commercial properties have unique needs — and painting is about more than just a new coat of paint. It&apos;s about planning, professionalism, and making your space work better for the people who use it.</p>
          </div>
          <div className="hidden xl:flex gap-10 shrink-0">
            <Side lines={["RELIABLE PARTNER", "EFFICIENT EXECUTION", "PROFESSIONAL RESULTS", "SPACES FOR WHAT'S NEXT"]} />
            <Side lines={["DIFFERENT SPACES.", "STRONGER COMMUNITIES."]} />
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal-group">
          {whyc.map(([ic, t, d], i) => (
            <div key={t} className="reveal-item bg-[#111a24] text-white rounded overflow-hidden">
              <div className="relative h-44"><Img src={`/home/why${i + 1}.jpg`} cls="!absolute inset-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#111a24] to-transparent" /><span className="absolute bottom-3 left-5 w-11 h-11 rounded-full bg-black/60 flex items-center justify-center"><Icon n={ic} /></span></div>
              <div className="p-5"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-sm text-white/80 leading-relaxed">{d}</p><span className="block w-9 h-0.5 bg-[var(--acc)] mt-5" /></div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid lg:grid-cols-2 items-center gap-8">
          <div className="relative min-h-[300px]"><Img src="/home/why-bg.jpg" cls="!absolute inset-0" pos="object-cover object-left" /><div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F3F4F6]" />
            <p className="absolute left-5 top-1/2 hidden -translate-y-1/2 text-[11px] font-medium leading-7 tracking-[0.24em] text-white/80 md:block">WELL-PAINTED<br />SPACES DO MORE<br />THAN LOOK GOOD.<br />THEY HELP<br />BUSINESSES<br />PERFORM BETTER.<span className="mt-3 block h-0.5 w-9 bg-[var(--acc)]" /></p>
          </div>
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="hlabel text-xs !tracking-[.16em] text-gray-700">A Brighter Tomorrow.</p>
              <h3 className={`${HL} mt-5 text-[clamp(30px,3.2vw,48px)]`}>Same Commitment.<br />Brighter Spaces Ahead.</h3>
              <p className="mt-4 text-gray-600 max-w-md leading-relaxed">From today&apos;s projects to tomorrow&apos;s possibilities, Bauer Painting helps commercial properties create spaces that make a lasting impression.</p>
              <Link href="/contact" className="hbtn sm mt-6">Request a Quote <Icon n="arrow" size={14} /></Link>
            </div>
            <Side lines={["PEOPLE", "SPACES", "BUSINESSES", "STRONGER", "TOMORROWS"]} />
          </div>
        </div>
      </section>

      <QuoteSection />
      <Footer />
    </main>
  );
}

function Tile({ i, t }: { i: number; t: string }) {
  return (
    <div className={`reveal-item relative h-40 rounded overflow-hidden text-sm font-medium ${i === 0 ? "ring-2 ring-[var(--acc)]" : ""}`}>
      <Img src={`/home/ind${i + 1}.jpg`} cls="!absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111a24] via-[#111a24]/70 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3"><Icon n={indIcons[i]} size={24} /><p className="mt-2 leading-tight">{t}</p></div>
    </div>
  );
}
