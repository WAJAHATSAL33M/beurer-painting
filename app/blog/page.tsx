import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { pad, HL, Dot, Img, Eyebrow, Brand, FinalCta } from "@/components/blog/Shared";
import BlogGrid from "@/components/blog/BlogGrid";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog | Bauer Painting",
  description: "Tips, guides, and news on commercial interior and exterior painting from the Bauer Painting team.",
};

export default function BlogArchive() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main className="bg-white">
      <Header />

      {/* 1 — Hero */}
      <section className="relative bg-[#0a1220] text-white overflow-hidden reveal">
        <Img src="/home/skyline.jpg" cls="!absolute inset-0 opacity-30" pos="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-[#0a1220]/70 to-[#0a1220]/40" />
        <div className={`relative ${pad} pt-16 pb-14`}>
          <p className="hlabel">Bauer Painting Blog</p>
          <p className="mt-8 text-[13px] font-bold tracking-wide text-white/70">BAUER PAINTING</p>
          <h1 className="mt-4 font-extrabold tracking-tight leading-[1.02] text-[clamp(40px,5.6vw,76px)] max-w-[760px]">
            Ideas, Guides & Updates<Dot />
          </h1>
          <p className="mt-6 text-[clamp(17px,1.4vw,21px)] text-white/90 max-w-lg leading-relaxed">
            Practical advice on commercial painting, maintenance, and project planning — plus news from the Bauer Painting team.
          </p>
        </div>
      </section>

      {/* 2 — Featured post */}
      <section className={`${pad} py-16 bg-white reveal`}>
        <Eyebrow n="Latest" label="Featured Article" />
        <Link href={`/blog/${featured.slug}`} className="group mt-6 grid lg:grid-cols-2 gap-8 items-center border border-gray-200 rounded overflow-hidden hover:border-[var(--acc)] transition-colors">
          <div className="relative min-h-[260px] lg:min-h-[380px]"><Img src={featured.image} alt={featured.title} cls="!absolute inset-0" /></div>
          <div className="p-6 lg:p-8">
            <p className="text-[11px] font-bold tracking-widest uppercase text-[var(--acc)]">{featured.category}</p>
            <h2 className={`${HL} mt-3 text-[clamp(24px,2.6vw,36px)] group-hover:text-[var(--acc)] transition-colors`}>{featured.title}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{featured.excerpt}</p>
            <p className="mt-5 text-xs text-gray-400 flex items-center gap-2">{featured.date}<span>·</span>{featured.readTime}<span>·</span>{featured.author}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bauer-ink">Read Article <Icon n="arrow" size={16} /></span>
          </div>
        </Link>
      </section>

      {/* 3 — All posts, filterable */}
      <section className={`${pad} py-16 bg-[#F8F9FA] reveal`}>
        <Eyebrow n="Articles" label="All Posts" />
        <Brand />
        <h2 className={`${HL} mt-4 text-[clamp(30px,3.6vw,48px)] max-w-xl`}>
          Browse by Topic
          <Dot />
        </h2>
        <div className="mt-8">
          <BlogGrid posts={rest} categories={BLOG_CATEGORIES} />
        </div>
      </section>

      <FinalCta title="Have a Project in Mind?" />
      <Footer />
    </main>
  );
}
