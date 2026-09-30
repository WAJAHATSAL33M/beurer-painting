import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { pad, HL, Dot, Img, Eyebrow, Brand } from "@/components/exterior/Shared";
import { SPECIAL_SERVICES, getSpecialService } from "@/lib/special-services";
import { COMPANY } from "@/lib/locations";

export function generateStaticParams() {
  return SPECIAL_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getSpecialService(params.slug);
  if (!s) return {};
  return { title: `${s.label} | Special Services | Bauer Painting`, description: s.description };
}

const H2 = `${HL} mt-4 text-[clamp(28px,3.8vw,48px)]`;

export default function SpecialServicePage({ params }: { params: { slug: string } }) {
  const s = getSpecialService(params.slug);
  if (!s) notFound();
  const others = SPECIAL_SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <main className="bg-white">
      <Header />

      <section className={`${pad} py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center`}>
        <div>
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 flex flex-wrap gap-x-2">
            <Link href="/" className="hover:text-bauer-ink">Home</Link>/
            <Link href="/services/special-services" className="hover:text-bauer-ink">Special Services</Link>/
            <span className="text-[var(--acc-d)] font-medium" aria-current="page">{s.label}</span>
          </nav>
          <div className="mt-8"><Brand /></div>
          <h1 className={`${HL} mt-3 text-[clamp(34px,5.2vw,62px)]`}>{s.label}<Dot /></h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">{s.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {s.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 rounded bg-[#F3F6F8] px-3 py-2 text-sm font-medium text-bauer-ink"><span className="text-[var(--acc)]"><Icon n="checkc" size={16} /></span>{h}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="hbtn justify-center">Request a Quote <Icon n="arrow" size={16} /></Link>
            <a href={COMPANY.phoneHref} className="hghost justify-center"><Icon n="phone" size={18} /> {COMPANY.phone}</a>
          </div>
        </div>
        <Img src={s.image} alt={s.label} cls="aspect-[4/3] rounded" />
      </section>

      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-2 gap-10`}>
          <div>
            <Eyebrow n="01" label="Overview" />
            <h2 className={H2}>Built for demanding commercial properties<Dot /></h2>
            <p className="mt-5 text-gray-600 leading-relaxed">{s.overview}</p>
          </div>
          <div className="rounded bg-white p-6 sm:p-8">
            <h3 className="font-heading font-extrabold text-xl text-bauer-ink">What's included</h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {s.includes.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-bauer-ink"><span className="text-[var(--acc)] mt-0.5"><Icon n="check" size={18} /></span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="02" label="More special services" />
          <h2 className={H2}>Explore other specialties<Dot /></h2>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/special-services/${o.slug}`} className="flex h-full gap-4 rounded bg-[#F3F6F8] p-5 hover:shadow-md transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
                  <span className="grid place-items-center w-11 h-11 shrink-0 rounded bg-white text-bauer-ink"><Icon n={o.icon} size={20} /></span>
                  <span><span className="block font-semibold text-bauer-ink">{o.label}</span><span className="block mt-1 text-sm text-gray-600">{o.cardBlurb}</span></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/services/special-services" className="inline-flex items-center gap-2 font-semibold text-[var(--acc-d)] hover:underline">All special services <Icon n="arrow" size={16} /></Link>
            <Link href="/locations" className="inline-flex items-center gap-2 font-semibold text-[var(--acc-d)] hover:underline">Find your city <Icon n="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-[.8fr_1.2fr] gap-10`}>
          <div>
            <Eyebrow n="03" label="FAQs" />
            <h2 className={H2}>Common questions<Dot /></h2>
          </div>
          <div className="grid gap-3">
            {s.faqs.map((f, k) => (
              <details key={f.q} open={k === 0} className="group rounded bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-bauer-ink [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
                  {f.q}
                  <span aria-hidden className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-[#F3F6F8] group-open:bg-[var(--acc)] group-open:text-white"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bauer-navy text-white">
        <div className={`${pad} py-14 lg:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8`}>
          <div>
            <h2 className={`${HL} text-[clamp(28px,4vw,48px)] !text-white`}>Ready to get started<span className="text-[var(--acc)]">?</span></h2>
            <p className="mt-3 text-white/75 max-w-xl">Free, no-obligation consultation. {COMPANY.hours}. {COMPANY.email}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="hbtn justify-center">Request a Consultation <Icon n="arrow" size={16} /></Link>
            <a href={COMPANY.phoneHref} className="hghost on-dark justify-center">{COMPANY.phone}</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
