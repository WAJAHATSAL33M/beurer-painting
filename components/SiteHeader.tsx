"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Interior Painting", href: "/services/interior-painting" },
  { label: "Exterior Painting", href: "/services/exterior-painting" },
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Our Process", href: "/our-process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header sticky top-0 z-50 bg-white border-b border-gray-100 ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-bar max-w-content mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M4 24L16 4L24 4L12 24H4Z" fill="var(--acc)" />
            <path d="M14 24L22 10H30L22 24H14Z" fill="var(--acc)" opacity="0.6" />
          </svg>
          <span className="leading-tight">
            <span className="block font-extrabold tracking-tight text-[17px] text-bauer-ink">
              BAUER
            </span>
            <span className="block text-[11px] font-semibold tracking-[0.18em] text-bauer-slate -mt-1">
              PAINTING
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((rawItem) => {
            const item = { ...rawItem, active: rawItem.href === "/" ? pathname === "/" : pathname.startsWith(rawItem.href) };
            return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative text-[15px] font-medium flex items-center gap-1 py-7 transition-colors ${
                item.active
                  ? "text-bauer-ink"
                  : "text-gray-600 hover:text-bauer-ink"
              }`}
            >
              {item.label}
              {item.active && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-bauer-green" />
              )}
            </Link>
          );})}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Link href="/contact" className="btn-primary text-[15px]">
            Request a Quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7H20"
              stroke="#101828"
              strokeWidth="1.8"
              strokeLinecap="round"
              style={{
                transformOrigin: "12px 7px",
                transition: "transform .2s ease, opacity .2s ease",
                transform: open ? "translateY(5px) rotate(45deg)" : "none",
              }}
            />
            <path
              d="M4 12H20"
              stroke="#101828"
              strokeWidth="1.8"
              strokeLinecap="round"
              style={{ transition: "opacity .15s ease", opacity: open ? 0 : 1 }}
            />
            <path
              d="M4 17H20"
              stroke="#101828"
              strokeWidth="1.8"
              strokeLinecap="round"
              style={{
                transformOrigin: "12px 17px",
                transition: "transform .2s ease, opacity .2s ease",
                transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
              }}
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 px-6 py-4 space-y-3 bg-white">
          {navItems.map((rawItem, i) => {
            const item = { ...rawItem, active: rawItem.href === "/" ? pathname === "/" : pathname.startsWith(rawItem.href) };
            return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block text-[15px] font-medium animate-[fadeUp_.3s_ease-out_both] ${
                item.active ? "text-bauer-green" : "text-gray-700"
              }`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          );})}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full justify-center mt-2 animate-[fadeUp_.3s_ease-out_both]"
            style={{ animationDelay: `${navItems.length * 40}ms` }}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
