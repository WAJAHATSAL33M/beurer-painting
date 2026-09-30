import Link from "next/link";
import Icon from "./Icon";
import { SERVICE_AREA_NAMES } from "@/lib/site-data";
import { locationHref, COMPANY } from "@/lib/locations";

const cols: [string, string[]][] = [
  ["Services", ["Interior Painting", "Exterior Painting", "Special Services", "High-Durability Coatings", "Spray Painting", "Commercial Repaints", "Multiple Services"]],
  ["Industries", ["Offices", "Retail", "Warehouses & Factories", "Healthcare", "Hotels & Hospitality", "Restaurants", "Schools", "Government Buildings", "Gyms & Sports Facilities", "Places of Worship", "High-Rises"]],
  ["Service Areas", SERVICE_AREA_NAMES],
  ["Company", ["About Us", "Our Work", "Our Process", "Blog", "FAQs", "Careers", "Contact"]],
];
const hrefs: Record<string, string> = { "Our Work": "/our-work", "Our Process": "/our-process", Contact: "/contact", "About Us": "/about", "Exterior Painting": "/services/exterior-painting", "Interior Painting": "/services/interior-painting", Blog: "/blog", "Special Services": "/services/special-services", "High-Durability Coatings": "/services/special-services/high-durability-coatings", "Spray Painting": "/services/special-services/spray-painting" };

export default function Footer() {
  return (
    <footer className="bg-[#0b1118] text-white">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-[1.3fr_repeat(4,1fr)_1.3fr] gap-10">
        <div>
          <p className="text-4xl font-extrabold tracking-tight">BAUER</p>
          <p className="tracking-[0.35em] text-sm font-semibold">PAINTING</p>
          <span className="block w-12 h-0.5 bg-[var(--acc)] my-5" />
          <p className="tracking-[0.2em] text-sm leading-relaxed">BETTER SPACES.<br />BRIGHTER TOMORROWS.</p>
          <p className="mt-5 text-white/70 max-w-[260px]">Commercial painting solutions that help businesses, buildings, and communities thrive.</p>
          <div className="mt-6 flex gap-3">
            {["in", "ig", "f", "yt"].map((s) => (
              <span key={s} className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-xs font-bold">{s}</span>
            ))}
          </div>
        </div>
        {cols.map(([t, items]) => (
          <div key={t}>
            <span className="block w-6 h-0.5 bg-[var(--acc)] mb-4" />
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5">{t}</p>
            <ul className="space-y-3 text-sm text-white/75">
              {items.map((i) => <li key={i}><Link href={hrefs[i] ?? (t === "Service Areas" ? locationHref(i) ?? "/contact" : "#")} className="hover:text-white">{i}</Link></li>)}
            </ul>
          </div>
        ))}
        <div className="lg:border-l lg:border-white/15 lg:pl-8">
          <span className="block w-6 h-0.5 bg-[var(--acc)] mb-4" />
          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5">Get in Touch</p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><span className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center"><Icon n="phone" size={16} /></span>{COMPANY.phone}</li>
            <li className="flex items-center gap-3"><span className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center"><Icon n="mail" size={16} /></span>{COMPANY.email}</li>
            <li className="flex gap-3"><span className="w-9 h-9 shrink-0 rounded-full border border-white/40 flex items-center justify-center"><Icon n="pin" size={16} /></span><span>Mississauga, ON<br /><span className="text-white/60">Serving the Greater Toronto and Hamilton Area</span></span></li>
          </ul>
          <Link href="/contact" className="hbtn mt-8">Request a Quote <Icon n="arrow" size={16} /></Link>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="max-w-content mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-end justify-between gap-4 text-sm text-white/75">
          <div>
            <p className="hidden text-[10px] font-medium leading-6 tracking-[0.24em] text-white/50 md:block">PEOPLE. SPACES. BUSINESSES. STRONGER TOMORROWS.<span className="mt-2 block h-0.5 w-9 bg-[var(--acc)]" /></p>
            <p className="mt-3">© {new Date().getFullYear()} Bauer Painting. All rights reserved.</p>
          </div>
          <p className="flex gap-5"><span>Privacy Policy</span><span>Terms of Service</span><span>Sitemap</span></p>
          <p>Built for Better Spaces.<span className="mt-2 block h-0.5 w-9 bg-[var(--acc)]" /></p>
        </div>
      </div>
    </footer>
  );
}
