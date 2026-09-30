import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { pad, HL, Dot, Img, Eyebrow, Brand, StripCTA, FinalCta, PostContent } from "@/components/blog/Shared";
import { getRelatedBlogPosts } from "@/lib/blog-posts";
import type { BlogPost } from "@/lib/blog-posts";

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
  const related = getRelatedBlogPosts(post.slug, 3);

  return (
    <main className="bg-white">
      <Header />

      {/* 1 — Hero */}
      <section className="bg-white reveal">
        <div className={`${pad} pt-10 pb-10`}>
          <p className="text-xs text-gray-500 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[var(--acc)]">Home</Link>
            <span>|</span>
            <Link href="/blog" className="hover:text-[var(--acc)]">Blog</Link>
            <span>|</span>
            <span className="text-gray-700">{post.title}</span>
          </p>
          <p className="mt-6 text-[11px] font-bold tracking-widest uppercase text-[var(--acc)]">{post.category}</p>
          <h1 className={`${HL} mt-3 text-[clamp(32px,4.6vw,56px)] max-w-3xl`}>
            {post.title}
            <Dot />
          </h1>
          <p className="mt-5 text-sm text-gray-500 flex items-center gap-2">{post.date}<span>·</span>{post.readTime}<span>·</span>By {post.author}</p>
        </div>
        <div className={`${pad} relative min-h-[280px] lg:min-h-[440px]`}>
          <Img src={post.image} alt={post.title} cls="!absolute inset-x-6 lg:inset-x-[max(2.5rem,calc((100vw-1240px)/2))] inset-y-0 rounded" />
        </div>
      </section>

      {/* 2 — Article body */}
      <section className={`${pad} py-14 reveal`}>
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          <article className="max-w-[720px]">
            <PostContent content={post.content} />
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded bg-[#F8F9FA] border border-gray-200 p-6">
              <p className="text-xs font-semibold tracking-widest text-gray-500 mb-4">HAVE A PROJECT IN MIND?</p>
              <p className="text-sm text-gray-600 leading-relaxed">Talk to our team about your commercial painting project — no obligation.</p>
              <Link href="/contact" className="hbtn mt-5 justify-center w-full">Request a Quote <Icon n="arrow" size={16} /></Link>
              <Link href="/blog" className="hghost mt-3 justify-center w-full">All Articles <Icon n="arrow" size={16} /></Link>
            </div>
          </aside>
        </div>
      </section>
      <StripCTA kicker="ENJOYED THIS ARTICLE?" text="Explore more guides and updates on the Bauer Painting blog, or get in touch about your project." />

      {/* 3 — Related posts */}
      {related.length > 0 && (
        <section className={`${pad} py-16 bg-[#F8F9FA] reveal`}>
          <Eyebrow n="Related" label="More From the Blog" />
          <Brand />
          <h2 className={`${HL} mt-4 text-[clamp(30px,3.6vw,48px)] max-w-2xl`}>
            Keep Reading
            <Dot />
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white border border-gray-200 rounded overflow-hidden hover:border-[var(--acc)] transition-colors">
                <div className="relative h-36"><Img src={p.image} alt={p.title} cls="!absolute inset-0" /></div>
                <div className="p-4">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--acc)]">{p.category}</p>
                  <p className="mt-1.5 font-semibold text-bauer-ink text-sm leading-snug group-hover:text-[var(--acc)] transition-colors">{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <FinalCta />
      <Footer />
    </main>
  );
}
