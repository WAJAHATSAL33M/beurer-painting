"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll-reveal engine (Bauer motion spec, "Reveal" primitive).
 * Mounted once in app/layout.tsx so every page gets it automatically —
 * pages just add the "reveal" / "reveal-item" classes from globals.css.
 *
 * - .reveal            fades/slides in once ~15–20% of it is visible.
 * - .reveal-group > .reveal-item   staggers children ~70ms apart.
 *
 * Respects prefers-reduced-motion by revealing everything immediately
 * instead of disabling the observer (content still needs to end up visible).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealAll = () => {
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-item, .reveal-image").forEach((el) => {
        el.classList.add("reveal-in");
      });
    };

    if (reduceMotion) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const group = el.closest(".reveal-group");
          if (group && el.classList.contains("reveal-item")) {
            const items = Array.from(group.querySelectorAll<HTMLElement>(".reveal-item"));
            const index = items.indexOf(el);
            el.style.transitionDelay = `${Math.min(index, 8) * 70}ms`;
          }
          el.classList.add("reveal-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    // Re-scan after each navigation/render — new pages mount new elements.
    const timer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-item, .reveal-image").forEach((el) => {
        io.observe(el);
      });
    }, 50);

    return () => {
      window.clearTimeout(timer);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
