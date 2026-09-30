import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostTemplate from "@/components/blog/PostTemplate";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";

// Pre-builds one page per entry in BLOG_POSTS — add an object to that array
// (in lib/blog-posts.ts) and a new post page appears here automatically.
export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Bauer Painting Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  return <BlogPostTemplate post={post} />;
}
