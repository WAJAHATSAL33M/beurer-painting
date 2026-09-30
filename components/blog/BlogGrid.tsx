"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Img } from "./Shared";
import type { BlogPost } from "@/lib/blog-posts";

export default function BlogGrid({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              active === c ? "bg-[var(--acc)] border-[var(--acc)] text-white" : "border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white border border-gray-200 rounded overflow-hidden hover:border-[var(--acc)] transition-colors">
            <div className="relative h-48"><Img src={p.image} alt={p.title} cls="!absolute inset-0" /></div>
            <div className="p-5">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[var(--acc)]">{p.category}</p>
              <p className="mt-2 font-bold text-bauer-ink leading-snug group-hover:text-[var(--acc)] transition-colors">{p.title}</p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">{p.excerpt}</p>
              <p className="mt-4 text-xs text-gray-400 flex items-center gap-2">{p.date}<span>·</span>{p.readTime}</p>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-gray-500 py-10 text-center">No posts in this category yet.</p>
        )}
      </div>
    </div>
  );
}
