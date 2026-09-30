import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { pad, HL, Dot, Brand } from "@/components/exterior/Shared";
import { CITY_LINKS, locationHref, COMPANY } from "@/lib/locations";

export const metadata = {
  title: "Service Locations | Bauer Painting",
  description: "Commercial painting across the Greater Toronto and Hamilton Area. Find your city.",
};

export default function LocationsHub() {
  return (
    <main className="bg-white">
      <Header />
      <section className={`${pad} py-12 lg:py-20`}>
        <Brand />
        <h1 className={`${HL} mt-3 text-[clamp(34px,5.4vw,64px)] max-w-3xl`}>Commercial painting near you<Dot /></h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">Choose your city to see the services, property types and neighbourhoods we cover. Not listed? Call {COMPANY.phone}.</p>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CITY_LINKS.map((c) => (
            <li key={c}>
              <Link href={locationHref(c) ?? "/contact"} className="flex items-center justify-between gap-3 rounded bg-[#F3F6F8] p-5 font-semibold text-bauer-ink hover:shadow-md transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
                <span className="flex items-center gap-3"><span className="text-[var(--acc)]"><Icon n="pin" size={20} /></span>{c}</span>
                <span className="text-xs font-medium text-gray-500">{locationHref(c) ? "View" : "Get a quote"}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
