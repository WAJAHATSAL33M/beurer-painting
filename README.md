# Bauer Painting — "Our Work" page

A Next.js 14 (App Router) + Tailwind CSS recreation of the Bauer Painting
"Our Work" page: hero, project filter bar, featured projects grid,
commercial-spaces/industries grid, interior/exterior/special-services
panels, 4-step process, and the closing contact CTA.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- Photography is pulled from Unsplash as stand-ins for the original site's
  photos (those are proprietary project photos, so they couldn't be copied
  directly) — swap the `src` values in `components/Hero.tsx`,
  `FeaturedProjects.tsx`, `Industries.tsx`, `ServicesInAction.tsx`,
  `Process.tsx`, and `ContactCTA.tsx` for your real project photography.
- Brand green is `#2FAE5B`, ink/navy text is `#101828`, the dark CTA
  background is `#0D1B2A` — all defined in `tailwind.config.js` under the
  `bauer` color palette, so you can retune them in one place.
- All copy (headlines, descriptions, stats, process steps, contact info)
  matches the source page.
