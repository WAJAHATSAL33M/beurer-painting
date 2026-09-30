// Blog content lives in content/blog.json and is edited from the /admin panel.
// (You can also edit the JSON by hand — same fields as the BlogPost type below.)
import data from "@/content/blog.json";


export type BlogPost = {
  /** Unique URL slug -> lives at /blog/<slug> */
  slug: string;
  title: string;
  /** One of BLOG_CATEGORIES below (or a new one — it'll show up automatically) */
  category: string;
  /** Photo for the archive card and post hero (/public/home/... or /public/process/...) */
  image: string;
  /** 1–2 sentence summary shown on the archive grid */
  excerpt: string;
  /** Display date, e.g. "September 20, 2026" */
  date: string;
  readTime: string;
  author: string;
  /** Body copy — see the guide above for headings ("## ") and bullets ("- ") */
  content: string[];
};

export const BLOG_CATEGORIES: string[] = data.categories;
export const BLOG_POSTS: BlogPost[] = data.posts;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(slug: string, count = 3): BlogPost[] {
  const current = getBlogPost(slug);
  const others = BLOG_POSTS.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === current?.category);
  const rest = others.filter((p) => p.category !== current?.category);
  return [...sameCategory, ...rest].slice(0, count);
}
