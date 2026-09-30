import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
  play: <path d="M8 5l11 7-11 7z" fill="currentColor" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  checkc: <><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  clip: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4h6v3H9zM9 12h6M9 16h6" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  hat: <path d="M3 17h18M5 17a7 7 0 0 1 14 0M10 10V6h4v4" />,
  coins: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3 3 7 3s7-1.3 7-3v-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 3-6 6-6s6 2 6 6M16 5a3 3 0 0 1 0 6M18 14c2 .8 3 3 3 6" /></>,
  chart: <path d="M5 20v-6M11 20V9M17 20V4" />,
  roller: <><rect x="4" y="3" width="14" height="6" rx="1.5" /><path d="M18 6h2v5h-8v4M12 15v6" /></>,
  chat: <><path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M9 12h6M9 16h6" /></>,
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />,
  grid: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  home: <path d="M4 11l8-7 8 7v9H4zM10 20v-6h4v6" />,
  building: <path d="M6 21V4h12v17M3 21h18M10 8h1M13 8h1M10 12h1M13 12h1M10 16h4" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  headset: <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  bank: <path d="M3 9l9-5 9 5M5 9v9M9 9v9M15 9v9M19 9v9M3 21h18" />,
  cross: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />,
  hotel: <path d="M5 21V4h14v17M3 21h18M9 8h2M13 8h2M9 12h2M13 12h2M10 21v-4h4v4" />,
  leaf: <path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15zM5 19l8-8" />,
  school: <path d="M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />,
  spray: <><path d="M4 8h8v4H4zM12 9h3M12 11h3M17 8h3M17 12h3M8 12v8" /></>,
  store: <path d="M4 9l1-5h14l1 5M4 9c0 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0 1 2 4 2 4 0M5 12v8h14v-8M10 20v-5h4v5" />,
  warehouse: <path d="M3 21V9l9-5 9 5v12M7 21v-8h10v8M7 15h10M7 18h10" />,
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  dot: <rect x="6" y="6" width="12" height="12" rx="2" />,
};

export default function Icon({ n, size = 22 }: { n: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[n] ?? paths.dot}
    </svg>
  );
}
