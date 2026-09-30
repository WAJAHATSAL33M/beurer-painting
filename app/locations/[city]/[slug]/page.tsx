import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { pad, HL, Dot, Img, Eyebrow, Brand } from "@/components/exterior/Shared";
import { LOCATIONS, getLocation, getSubPage, siblingsOf, subHref, allSubPages, KIND_LABEL, COMPANY } from "@/lib/locations";

type Params = { city: string; slug: string };

export function generateStaticParams() {
  return LOCATIONS.flatMap((l) => allSubPages(l).map((s) => ({ city: l.slug, slug: s.slug })));
}

export function generateMetadata({ params }: { params: Params }) {
  const loc = getLocation(params.city);
  const page = loc && getSubPage(loc, params.slug);
  if (!loc || !page) return {};
  const title = page.kind === "area" ? `Commercial Painting in ${page.label}, ${loc.city}` : `${page.label} in ${loc.city}`;
  return { title: `${title} | Bauer Painting`, description: page.description };
}

const H2 = `${HL} mt-4 text-[clamp(28px,3.8vw,48px)]`;
const iconBox = "grid place-items-center w-11 h-11 shrink-0 rounded bg-white text-bauer-ink";

export default function LocationSubPage({ params }: { params: Params }) {
  const loc = getLocation(params.city);
  const page = loc && getSubPage(loc, params.slug);
  if (!loc || !page) notFound();

  const kind = KIND_LABEL[page.kind];
  const siblings = siblingsOf(loc, page);
  const title = page.kind === "area" ? `Commercial Painting in ${page.label}` : `${page.label} in ${loc.city}`;
  const cityHref = `/locations/${loc.slug}`;
  const faqs = [...page.faqs, ...loc.faqs.filter((f) => !page.faqs.some((p) => p.q === f.q))].slice(0, 5);

  return (
    <main className="bg-white">
      <Header />

      {/* Hero */}
      <section className={`${pad} py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center`}>
        <div>
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 flex flex-wrap gap-x-2">
            <Link href="/" className="hover:text-bauer-ink">Home</Link>/
            <Link href="/locations" className="hover:text-bauer-ink">Locations</Link>/
            <Link href={cityHref} className="hover:text-bauer-ink">{loc.city}</Link>/
            <span className="text-[var(--acc-d)] font-medium" aria-current="page">{page.label}</span>
          </nav>
          <div className="mt-8"><Brand /></div>
          <h1 className={`${HL} mt-3 text-[clamp(34px,5.4vw,64px)]`}>{title}<Dot /></h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">{page.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {page.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 rounded bg-[#F3F6F8] px-3 py-2 text-sm font-medium text-bauer-ink">
                <span className="text-[var(--acc)]"><Icon n="checkc" size={16} /></span>{h}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="hbtn justify-center">Request a Quote <Icon n="arrow" size={16} /></Link>
            <a href={COMPANY.phoneHref} className="hghost justify-center"><Icon n="phone" size={18} /> {COMPANY.phone}</a>
          </div>
        </div>
        <div className="relative">
          <Img src={page.image} alt={`${page.label} — Bauer Painting, ${loc.city}`} cls="aspect-[4/3] rounded" />
          <p className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 rounded px-4 py-3 text-sm shadow">
            <span className="flex items-center gap-2 font-bold text-bauer-ink"><Icon n="pin" size={16} /> {loc.city}, {loc.province}</span>
            <span className="text-gray-500">{kind.singular}</span>
          </p>
        </div>
      </section>

      {/* Overview + includes */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-2 gap-10`}>
          <div>
            <Eyebrow n="01" label="Overview" />
            <h2 className={H2}>{page.label} done properly<Dot /></h2>
            <p className="mt-5 text-gray-600 leading-relaxed">{page.overview}</p>
            {page.learnMore && (
              <Link href={page.learnMore.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--acc-d)] hover:underline">
                {page.learnMore.label} <Icon n="arrow" size={16} />
              </Link>
            )}
          </div>
          <div className="rounded bg-white p-6 sm:p-8">
            <h3 className="font-heading font-extrabold text-xl text-bauer-ink">{kind.includes}</h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {page.includes.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-bauer-ink">
                  <span className="text-[var(--acc)] mt-0.5"><Icon n="check" size={18} /></span>{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Siblings */}
      <section className="reveal">
        <div className={`${pad} py-14 lg:py-20`}>
          <Eyebrow n="02" label={`More ${kind.group.toLowerCase()} in ${loc.city}`} />
          <h2 className={H2}>Explore other {kind.group.toLowerCase()}<Dot /></h2>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link href={subHref(loc, s.slug)} className="flex h-full gap-4 rounded bg-[#F3F6F8] p-5 hover:shadow-md transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
                  <span className={iconBox}><Icon n={s.icon} size={20} /></span>
                  <span><span className="block font-semibold text-bauer-ink">{s.label}</span><span className="block mt-1 text-sm text-gray-600">{s.cardBlurb}</span></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={cityHref} className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--acc-d)] hover:underline">
            Back to commercial painting in {loc.city} <Icon n="arrow" size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F3F4F6] reveal">
        <div className={`${pad} py-14 lg:py-20 grid lg:grid-cols-[.8fr_1.2fr] gap-10`}>
          <div>
            <Eyebrow n="03" label="FAQs" />
            <h2 className={H2}>Common questions<Dot /></h2>
            <p className="mt-4 text-gray-600 max-w-md">Can't find your question? Call {COMPANY.phone} or request a quote.</p>
          </div>
          <div className="grid gap-3">
            {faqs.map((f, k) => (
              <details key={f.q} open={k === 0} className="group rounded bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-bauer-ink [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
                  {f.q}
                  <span aria-hidden className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-[#F3F6F8] group-open:bg-[var(--acc)] group-open:text-white text-lg leading-none">
                    <span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bauer-navy text-white">
        <div className={`${pad} py-14 lg:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8`}>
          <div>
            <h2 className={`${HL} text-[clamp(28px,4vw,48px)] !text-white`}>Ready to talk about your {loc.city} project<span className="text-[var(--acc)]">?</span></h2>
            <p className="mt-3 text-white/75 max-w-xl">Free, no-obligation quote. {COMPANY.hours}. {COMPANY.email}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="hbtn justify-center">Request a Quote <Icon n="arrow" size={16} /></Link>
            <a href={COMPANY.phoneHref} className="hghost on-dark justify-center">{COMPANY.phone}</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
