// =============================================================================
// INTERIOR PAINTING — SUB-SERVICE CONTENT
// =============================================================================
// Mirrors lib/exterior-services.ts. This is the ONLY place you need to touch
// to add, edit, or remove an Interior Painting sub-service page.
//
// HOW TO ADD A NEW SUB-PAGE
// -------------------------
// 1. Copy one of the objects in INTERIOR_SERVICES below.
// 2. Give it a unique `slug` (this becomes the URL: /services/interior-painting/<slug>).
// 3. Fill in the fields — see the comments on the InteriorService type.
// 4. Save the file.
// That's it — the route at app/services/interior-painting/[slug]/page.tsx reads
// this array and automatically builds the page, the hub page's service grid,
// the nav/footer lists, and the "related services" carousel. No other file
// needs to change and no new page file needs to be created.
//
// To remove a sub-page, delete its object from the array. To reorder the
// service grid on the hub page, reorder the array.
// =============================================================================

export type InteriorService = {
  /** Unique URL slug -> lives at /services/interior-painting/<slug> */
  slug: string;
  /** Full display name, e.g. "Commercial Office Painting" */
  label: string;
  /** Icon name — must match a key in components/Icon.tsx */
  icon: string;
  /** Photo used for the hero, the hub grid card, and the applications tab (/public/home/...) */
  image: string;
  /** One sentence used on the hub page's service grid card */
  cardBlurb: string;
  /** 1–2 sentence hero paragraph on the sub-service page */
  description: string;
  /** 3 short hero highlight chips */
  highlights: [string, string, string];
  /** 6–8 short items for the "What We Paint" / coverage section */
  coverageAreas: string[];
  /** Optional longer paragraph for the overview section; falls back to `description` */
  overview?: string;
};

export const INTERIOR_SERVICES: InteriorService[] = [
  {
    slug: "commercial-office-painting",
    label: "Commercial Office Painting",
    icon: "building",
    image: "/home/ind1.jpg",
    cardBlurb: "Professional interior painting for offices, meeting rooms, and common areas.",
    description: "Professional interior painting for offices, meeting rooms, common areas, and more. We create clean, modern environments that support your team and leave a lasting impression on clients.",
    highlights: ["Minimal Disruption", "Professional Finishes", "On-Time Projects"],
    coverageAreas: ["Private Offices & Open Areas", "Meeting Rooms & Huddle Spaces", "Reception Areas & Lobbies", "Hallways & Corridors", "Kitchens & Break Rooms", "Restrooms", "Stairwells & Common Areas"],
    overview: "A well-painted office creates a clean, professional environment for your team and visitors. At Bauer Painting, we deliver high-quality interior painting for offices of all sizes — from single suites to multi-floor corporate buildings — with minimal disruption to your operations.",
  },
  {
    slug: "retail-interiors",
    label: "Retail Interiors",
    icon: "home",
    image: "/home/ind2.jpg",
    cardBlurb: "Clean, modern interior finishes for retail stores and shopping environments.",
    description: "Professional interior painting for retail stores, boutiques, and shopping centers. We help create bright, inviting spaces that support the customer experience and reflect your brand.",
    highlights: ["Brand-Consistent Finishes", "After-Hours Scheduling", "Customer-Ready Results"],
    coverageAreas: ["Sales Floors & Display Areas", "Fitting Rooms", "Checkout & Service Counters", "Storage & Back-of-House", "Entrances & Storefront Interiors", "Signage & Feature Walls", "Restrooms"],
  },
  {
    slug: "warehouse-interiors",
    label: "Warehouse Interiors",
    icon: "grid",
    image: "/home/ind3.jpg",
    cardBlurb: "Durable interior coatings for warehouse and distribution facilities.",
    description: "Interior painting solutions built for large-scale warehouse environments — durable finishes for high-traffic floors, racking, and structural surfaces that hold up to daily operations.",
    highlights: ["Large-Scale Coverage", "Durable, Wear-Resistant Coatings", "Minimal Downtime"],
    coverageAreas: ["Interior Walls & Ceilings", "Structural Columns & Beams", "Racking & Storage Areas", "Loading Dock Interiors", "Safety Markings & Line Painting", "Office & Break Room Areas", "Stairwells & Catwalks"],
  },
  {
    slug: "factory-interiors",
    label: "Factory Interiors",
    icon: "gear",
    image: "/home/work5.jpg",
    cardBlurb: "High-performance interior coatings for manufacturing and industrial facilities.",
    description: "Factory and manufacturing interiors face constant wear, moisture, and chemical exposure. We use industrial-grade coating systems designed for demanding production environments.",
    highlights: ["Industrial-Grade Coatings", "Chemical & Wear Resistance", "Scheduled Around Production"],
    coverageAreas: ["Production Floor Areas", "Structural Steel & Columns", "Equipment Surrounds", "Ceilings & Overhead Structures", "Safety & Wayfinding Markings", "Break Rooms & Offices", "Loading & Receiving Areas"],
  },
  {
    slug: "commercial-ceiling-painting",
    label: "Commercial Ceiling Painting",
    icon: "roller",
    image: "/home/how1.jpg",
    cardBlurb: "Specialized ceiling and dryfall coatings for commercial and industrial spaces.",
    description: "Ceilings take specialized products and application methods. Our team delivers clean, consistent ceiling finishes — including dryfall coatings for exposed-structure spaces.",
    highlights: ["Dryfall & Overspray-Safe Coatings", "Clean, Even Finishes", "Specialized Equipment"],
    coverageAreas: ["Exposed Structure Ceilings", "Suspended Ceiling Grids", "Ductwork & Overhead Piping", "Warehouse & Industrial Ceilings", "Office & Retail Ceilings", "Parking Structure Ceilings"],
  },
  {
    slug: "healthcare-facilities-hospitals",
    label: "Healthcare Facilities & Hospitals",
    icon: "shield",
    image: "/home/ind4.jpg",
    cardBlurb: "Clean, safe interior painting for hospitals, clinics, and healthcare properties.",
    description: "Healthcare interiors require careful scheduling, low-odour products, and strict site protocols. We deliver clean, durable finishes with minimal disruption to patients and staff.",
    highlights: ["Low-Odour, Safe Products", "Strict Site Protocols", "Scheduled Around Patient Care"],
    coverageAreas: ["Patient Rooms & Wards", "Waiting & Reception Areas", "Hallways & Nurses' Stations", "Exam & Treatment Rooms", "Administrative Offices", "Cafeterias & Break Rooms", "Restrooms"],
  },
  {
    slug: "hotels-hospitality",
    label: "Hotels & Hospitality",
    icon: "layers",
    image: "/home/ind5.jpg",
    cardBlurb: "Refined interior painting for hotels, resorts, and hospitality properties.",
    description: "First impressions matter most in hospitality. We deliver refined interior finishes across guest-facing and back-of-house areas while working around guest activity and brand standards.",
    highlights: ["Brand-Consistent Finishes", "Guest-Friendly Scheduling", "Premium Interior Results"],
    coverageAreas: ["Lobbies & Reception Areas", "Guest Rooms & Corridors", "Banquet & Meeting Spaces", "Restaurants & Bars", "Fitness & Amenity Areas", "Back-of-House & Staff Areas", "Stairwells & Elevators"],
  },
  {
    slug: "restaurant-interiors",
    label: "Restaurant Interiors",
    icon: "dot",
    image: "/home/ind6.jpg",
    cardBlurb: "Fast-turnaround interior painting for restaurants and food service spaces.",
    description: "Restaurant interiors need durable, food-safe finishes and fast turnaround to minimize closures. We work overnight and during off-hours to keep your business open.",
    highlights: ["Overnight & Off-Hours Work", "Food-Safe, Durable Coatings", "Fast Turnaround"],
    coverageAreas: ["Dining Areas", "Kitchens & Prep Areas", "Bar & Service Counters", "Restrooms", "Entrances & Waiting Areas", "Storage & Back-of-House"],
  },
  {
    slug: "schools-educational-buildings",
    label: "Schools & Educational Buildings",
    icon: "doc",
    image: "/home/ind7.jpg",
    cardBlurb: "Trusted interior painting for schools, colleges, and educational facilities.",
    description: "Schools require careful scheduling and safe, low-disruption work. We plan interior projects around the academic calendar to keep campuses safe, clean, and looking their best.",
    highlights: ["Scheduled Around Terms", "Safety-First Process", "Long-Lasting Finishes"],
    coverageAreas: ["Classrooms", "Hallways & Stairwells", "Gymnasiums & Auditoriums", "Cafeterias", "Administrative Offices", "Libraries & Common Areas", "Restrooms"],
  },
  {
    slug: "government-building-offices",
    label: "Government Building Offices",
    icon: "building",
    image: "/home/ind8.jpg",
    cardBlurb: "Professional interior painting for municipal and government office buildings.",
    description: "Government buildings require careful coordination, security awareness, and minimal disruption to public services. We deliver professional, durable interior finishes with full compliance to site requirements.",
    highlights: ["Security-Aware Scheduling", "Compliant, Documented Process", "Durable Public-Space Finishes"],
    coverageAreas: ["Public Service Counters & Lobbies", "Private Offices", "Meeting & Council Rooms", "Hallways & Waiting Areas", "Records & Storage Rooms", "Restrooms"],
  },
];

export function getInteriorService(slug: string): InteriorService | undefined {
  return INTERIOR_SERVICES.find((s) => s.slug === slug);
}

export function getRelatedInteriorServices(slug: string, count = 6): InteriorService[] {
  const others = INTERIOR_SERVICES.filter((s) => s.slug !== slug);
  const idx = INTERIOR_SERVICES.findIndex((s) => s.slug === slug);
  // Rotate the list so related services feel varied depending on which page you're on.
  const rotated = [...others.slice(idx % others.length), ...others.slice(0, idx % others.length)];
  return rotated.slice(0, count);
}

// Generic, evergreen copy shared by every interior-painting page. Kept in one
// place so the whole section stays consistent — edit here to change it site-wide.

export const INTERIOR_PROCESS_STEPS = [
  { n: "01", title: "Assess", icon: "search", img: "/home/how2.jpg", desc: "We visit your space, understand your goals, and assess the surfaces, schedule, and any special requirements." },
  { n: "02", title: "Prepare", icon: "roller", img: "/home/how3.jpg", desc: "We protect your furniture, floors, and equipment, properly prep all surfaces, and ensure a clean, safe workspace before painting begins." },
  { n: "03", title: "Paint", icon: "gear", img: "/home/how1.jpg", desc: "Our team applies premium paints with precision and care, delivering smooth, durable finishes that enhance your space." },
  { n: "04", title: "Complete", icon: "checkc", img: "/home/how4.jpg", desc: "We conduct a thorough walkthrough, address any final details, and ensure your complete satisfaction before considering the project done." },
];

export const INTERIOR_OVERVIEW_POINTS: [string, string, string][] = [
  ["clock", "Flexible Scheduling", "We work around your operations to minimize disruption to your business."],
  ["checkc", "Professional Workmanship", "High-quality finishes that make a strong impression and last."],
  ["users", "Experienced Teams", "Skilled and reliable professionals on every project."],
  ["shield", "Cleaner Environments", "Spaces that are ready for what's next when we're done."],
];

export const INTERIOR_WHY_IT_MATTERS: [string, string, string][] = [
  ["building", "Professional Appearance", "A clean, modern environment creates a positive impression for clients, visitors, and your team."],
  ["clock", "Minimal Disruption", "We plan and schedule around your business operations to help keep things running smoothly."],
  ["roller", "Thoughtful Colour", "Colour choices can support the character of your space and contribute to a more productive environment."],
  ["users", "Reliable Execution", "We focus on organized planning, clear communication, and professional workmanship from start to finish."],
];
