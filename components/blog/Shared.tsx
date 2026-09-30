import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

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

export const Brand = () => <p className="text-[13px] font-bold tracking-wide text-bauer-lav">BAUER PAINTING</p>;

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

export function FinalCta({ title = "Ready to Start Your Project?" }: { title?: string }) {
  const perks: [string, string][] = [
    ["chat", "Quick Response"],
    ["doc", "Customized Solutions"],
    ["checkc", "No Obligation"],
  ];
  return (
    <section className="relative bg-[#0b1118] text-white overflow-hidden reveal">
      <Img src="/home/skyline.jpg" cls="!absolute inset-x-0 bottom-0 h-40 opacity-40" pos="object-cover object-top" />
      <div className={`relative ${pad} py-16`}>
        <Eyebrow n="Let's Get Started" label="Final CTA" />
        <p className="mt-4 text-[13px] font-bold tracking-wide text-white/70">BAUER PAINTING</p>
        <h2 className="mt-4 text-[clamp(32px,4.2vw,58px)] font-extrabold tracking-tight leading-[1.05] max-w-2xl">
          {title}
          <Dot />
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
          Whatever you're planning — interior, exterior, or something in between — our team is ready to talk through your project and provide a customized quote.
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
          <Link href="/blog" className="hghost on-dark">Read More Articles <Icon n="arrow" size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Turns a post's plain-text `content` array into rendered blocks.
 * "## " -> subheading. Consecutive "- " lines -> one bullet list. Anything else -> paragraph.
 */
export function PostContent({ content }: { content: string[] }) {
  const blocks: { type: "h2" | "p" | "ul"; items: string[] }[] = [];
  for (const line of content) {
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", items: [line.slice(3)] });
    } else if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      if (last && last.type === "ul") last.items.push(line.slice(2));
      else blocks.push({ type: "ul", items: [line.slice(2)] });
    } else {
      blocks.push({ type: "p", items: [line] });
    }
  }
  return (
    <div className="prose-blog max-w-none">
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 key={i} className="mt-10 mb-4 text-2xl font-heading font-extrabold text-bauer-ink tracking-tight">{b.items[0]}</h2>;
        if (b.type === "ul") return (
          <ul key={i} className="my-5 space-y-2.5">
            {b.items.map((it, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <span className="mt-1 text-[var(--acc)] shrink-0"><Icon n="check" size={14} /></span>{it}
              </li>
            ))}
          </ul>
        );
        return <p key={i} className="my-5 text-gray-700 leading-[1.8]">{b.items[0]}</p>;
      })}
    </div>
  );
}
