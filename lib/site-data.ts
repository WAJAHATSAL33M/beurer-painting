// Single source of truth for the service list and the areas Bauer Painting serves.
// Edit this file to change what shows up in the "Find Your Painting Service" popup,
// the footer, and the service-area section — nothing else needs to change.

export type Service = {
  id: string; // centralized internal ID — used for routing/lookups instead of matching on label text
  label: string;
  category: "Interior Painting" | "Exterior Painting" | "Special Services";
  icon: string; // matches an icon name in components/Icon.tsx
  blurb: string; // shown in the "service available" popup
  href: string; // destination service page — falls back to the relevant hub page until dedicated sub-pages exist
};

export const SERVICES: Service[] = [
  { id: "interior-painting", label: "Interior Painting", category: "Interior Painting", icon: "roller", blurb: "From offices to healthcare facilities, our interior painting delivers a clean, professional finish for spaces of any size.", href: "/#services" },
  { id: "exterior-painting", label: "Exterior Painting", category: "Exterior Painting", icon: "home", blurb: "Durable exterior coatings that protect and elevate your property, built to handle Southern Ontario's weather.", href: "/services/exterior-painting" },
  { id: "high-rise-painting", label: "High-Rise Painting", category: "Exterior Painting", icon: "building", blurb: "From high-rise residential buildings to mixed-use towers, our team has the experience and resources to deliver exceptional results.", href: "/services/exterior-painting/high-rises" },
  { id: "retail-storefronts", label: "Retail Storefronts", category: "Exterior Painting", icon: "home", blurb: "We keep storefronts looking sharp and on-brand, with scheduling built around your business hours.", href: "/services/exterior-painting/retail-storefronts-facades" },
  { id: "healthcare-facilities", label: "Healthcare Facilities", category: "Interior Painting", icon: "shield", blurb: "Low-odour, low-disruption painting solutions designed for occupied healthcare environments.", href: "/#services" },
  { id: "warehouses-factories", label: "Warehouses & Factories", category: "Interior Painting", icon: "grid", blurb: "Large-format interior painting for industrial spaces, completed with minimal downtime.", href: "/#services" },
  { id: "high-durability-coatings", label: "High-Durability Coatings", category: "Special Services", icon: "layers", blurb: "Advanced coating systems built to perform under heavy commercial and industrial use.", href: "/services/special-services/high-durability-coatings" },
  { id: "special-services", label: "Special Services", category: "Special Services", icon: "layers", blurb: "Spray painting, anti-graffiti coatings and other specialized solutions for unique commercial needs.", href: "/services/special-services" },
];

// One row per city/town Bauer serves. `prefixes` are the Canadian postal-code
// FSA letters (the first character) that fall inside that area, used only for
// the quick check in the popup — swap this for a real lookup/API when you have one.
export type ServiceArea = { name: string; prefixes: string[] };

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Toronto", prefixes: ["M"] },
  { name: "Mississauga", prefixes: ["L"] },
  { name: "Oakville", prefixes: ["L"] },
  { name: "Burlington", prefixes: ["L"] },
  { name: "Hamilton", prefixes: ["L"] },
  { name: "Guelph", prefixes: ["N"] },
  { name: "Kitchener", prefixes: ["N"] },
  { name: "Cambridge", prefixes: ["N"] },
  { name: "Milton", prefixes: ["L"] },
  { name: "Brampton", prefixes: ["L"] },
  { name: "St. Catharines", prefixes: ["L"] },
  { name: "Niagara Falls", prefixes: ["L"] },
];

export const SERVICE_AREA_NAMES = SERVICE_AREAS.map((a) => a.name);

// All FSA letters covered by at least one listed area (drives the popup's yes/no check).
export const SERVED_PREFIXES = Array.from(new Set(SERVICE_AREAS.flatMap((a) => a.prefixes)));

const POSTAL_RE = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

// Standardizes any valid input (m5v2t6, m5v 2t6, M5V-2T6...) to "M5V 2T6".
// Returns null if the input isn't a valid Canadian postal-code shape.
export function normalizePostal(raw: string): string | null {
  const stripped = raw.trim().toUpperCase().replace(/[\s-]/g, "");
  if (!/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(stripped)) return null;
  return `${stripped.slice(0, 3)} ${stripped.slice(3)}`;
}

export function checkServiceArea(raw: string): "available" | "unavailable" | null {
  const code = normalizePostal(raw);
  if (!code) return null;
  return SERVED_PREFIXES.includes(code[0]) ? "available" : "unavailable";
}
