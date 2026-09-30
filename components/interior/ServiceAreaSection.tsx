import ServiceFinder from "@/components/ServiceFinder";
import Icon from "@/components/Icon";
import { SERVICE_AREA_NAMES } from "@/lib/site-data";
import { Eyebrow, Brand, HL, Dot, pad } from "./Shared";

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className={`${pad} py-16 bg-white reveal scroll-mt-24`}>
      <Eyebrow n="Service Area" label="Project Consultation" />
      <Brand />
      <div className="mt-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className={`${HL} text-[clamp(32px,4vw,56px)]`}>
            Is Bauer Painting Available for Your Project
            <Dot />
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg leading-relaxed">
            We provide commercial interior painting services across our primary service area. Enter your postal code below to check availability and find out how we can support your project.
          </p>
          <ServiceFinder variant="section" />
        </div>
        <div className="rounded border border-gray-200 bg-[#F8F9FA] p-6">
          <p className="text-[11px] tracking-widest text-gray-500 font-semibold">OUR SERVICE AREAS</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
            {SERVICE_AREA_NAMES.map((a) => (
              <li key={a} className="flex items-center gap-2"><Icon n="pin" size={14} />{a}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-gray-500">Outside these areas? Contact us — we may still be able to help depending on your location and project.</p>
        </div>
      </div>
    </section>
  );
}
