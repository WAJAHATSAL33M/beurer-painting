// =============================================================================
// EXTERIOR PAINTING — SUB-SERVICE CONTENT
// =============================================================================
// This file is the "admin panel" for the Exterior Painting section: it is the
// ONLY place you need to touch to add, edit, or remove a sub-service page.
//
// HOW TO ADD A NEW SUB-PAGE
// -------------------------
// 1. Copy one of the objects in EXTERIOR_SERVICES below.
// 2. Give it a unique `slug` (this becomes the URL: /services/exterior-painting/<slug>).
// 3. Fill in the fields — see the comments on the ExteriorService type.
// 4. Save the file.
// That's it — the route at app/services/exterior-painting/[slug]/page.tsx reads
// this array and automatically builds the page, the hub page's service grid,
// the nav/footer lists, and the "related services" carousel. No other file
// needs to change and no new page file needs to be created.
//
// To remove a sub-page, delete its object from the array. To reorder the
// service grid on the hub page, reorder the array.
// =============================================================================

export type ExteriorService = {
  /** Unique URL slug -> lives at /services/exterior-painting/<slug> */
  slug: string;
  /** Full display name, e.g. "Retail Storefronts & Facades" */
  label: string;
  /** Icon name — must match a key in components/Icon.tsx */
  icon: string;
  /** Photo used for the hero, the hub grid card, and the applications tab (/public/home/...) */
  image: string;
  /** One sentence used on the hub page's service grid card */
  cardBlurb: string;
  /** 1–2 sentence hero paragraph on the sub-service page */
  description: string;
  /** 3 short hero highlight chips, e.g. ["Enhanced Curb Appeal", "Durable Finishes", "Professional Results"] */
  highlights: [string, string, string];
  /** 6–8 short items for the "Comprehensive Exterior Coverage" section */
  coverageAreas: string[];
  /** Optional longer paragraph for the overview section; falls back to `description` */
  overview?: string;
};

export const EXTERIOR_SERVICES: ExteriorService[] = [
  {
    slug: "retail-storefronts-facades",
    label: "Retail Storefronts & Facades",
    icon: "home",
    image: "/home/quote.jpg",
    cardBlurb: "Professional painting for retail centers, standalone stores, and commercial facades.",
    description: "Create a lasting first impression with professional exterior painting for retail storefronts and facades. We help commercial properties look their best with durable, high-quality finishes.",
    highlights: ["Enhanced Curb Appeal", "Durable Finishes", "Professional Results"],
    coverageAreas: ["Exterior Walls & Facades", "Storefront Entrances & Doors", "Window Frames & Surrounds", "Architectural Trim & Accents", "Awnings & Canopies", "Signage Areas & Feature Walls", "Metal Surfaces & Railings", "Loading Areas & Service Entrances"],
  },
  {
    slug: "warehouse-siding",
    label: "Warehouse Siding",
    icon: "grid",
    image: "/home/work2.jpg",
    cardBlurb: "Durable coatings for warehouse exteriors, metal siding, and large commercial buildings.",
    description: "Large-format warehouse exteriors need coatings that hold up to constant handling, weather, and wear. We deliver durable, consistent finishes across metal and concrete siding at scale.",
    highlights: ["Large-Scale Coverage", "Weather-Resistant Coatings", "Minimal Downtime"],
    coverageAreas: ["Metal & Steel Siding", "Loading Dock Areas", "Roll-Up Doors & Frames", "Exterior Walls & Panels", "Structural Trim", "Signage & Branding Walls", "Perimeter Fencing & Rails", "Roof Edges & Fascia"],
  },
  {
    slug: "industrial-buildings",
    label: "Industrial Buildings",
    icon: "gear",
    image: "/home/work4.jpg",
    cardBlurb: "High-performance coatings for manufacturing and industrial facilities.",
    description: "Industrial facilities face heavy exposure to chemicals, moisture, and temperature swings. Our coating systems are matched to your building's environment for long-term protection.",
    highlights: ["Industrial-Grade Coatings", "Corrosion Protection", "Built for Harsh Conditions"],
    coverageAreas: ["Exterior Cladding", "Structural Steel Elements", "Metal Siding & Panels", "Loading & Shipping Areas", "Pipe & Duct Exteriors", "Safety Markings", "Roofing Components", "Perimeter Structures"],
  },
  {
    slug: "shopping-malls-plazas",
    label: "Shopping Malls & Plazas",
    icon: "building",
    image: "/home/quote.jpg",
    cardBlurb: "Exterior painting for multi-tenant shopping centers and commercial plazas.",
    description: "Multi-tenant properties need painting that's planned around tenant schedules and foot traffic. We coordinate closely with property managers to keep plazas open and looking sharp.",
    highlights: ["Tenant-Friendly Scheduling", "Consistent Brand Standards", "Enhanced Visitor Appeal"],
    coverageAreas: ["Common Area Facades", "Storefront Bays", "Walkways & Covered Areas", "Signage Zones", "Parking Structure Elements", "Entry Features", "Metal Trim & Railings", "Shared Service Areas"],
  },
  {
    slug: "hotels",
    label: "Hotels",
    icon: "home",
    image: "/home/why-bg.jpg",
    cardBlurb: "Enhance curb appeal with professional exterior painting for hotels and hospitality properties.",
    description: "First impressions matter most in hospitality. We deliver refined, durable exterior finishes that support your brand standards while working around guest activity.",
    highlights: ["Brand-Consistent Finishes", "Guest-Friendly Scheduling", "Premium Curb Appeal"],
    coverageAreas: ["Building Facades", "Entrance & Porte-Cochère", "Balconies & Railings", "Window Surrounds", "Signage & Wayfinding Walls", "Trim & Architectural Details", "Pool & Amenity Areas", "Parking & Service Entrances"],
  },
  {
    slug: "schools-educational-buildings",
    label: "Schools & Educational Buildings",
    icon: "hat",
    image: "/home/ind11.jpg",
    cardBlurb: "Trusted painting solutions for schools, colleges, and educational facilities.",
    description: "Schools require careful scheduling and safe, low-disruption work. We plan projects around the academic calendar to keep campuses safe, clean, and looking their best.",
    highlights: ["Scheduled Around Terms", "Safety-First Process", "Long-Lasting Finishes"],
    coverageAreas: ["Building Facades", "Entrances & Breezeways", "Gymnasium & Portable Exteriors", "Window & Door Frames", "Signage & Wayfinding", "Fencing & Railings", "Trim & Fascia", "Playground-Adjacent Structures"],
  },
  {
    slug: "healthcare-facilities",
    label: "Healthcare Facilities",
    icon: "shield",
    image: "/home/why4.jpg",
    cardBlurb: "Professional exterior painting for hospitals, clinics, and healthcare properties.",
    description: "Healthcare properties need exterior work completed with minimal disruption to patients and staff. We follow strict scheduling and site-safety protocols on every project.",
    highlights: ["Low-Disruption Process", "Site Safety Compliance", "Durable, Clean Finishes"],
    coverageAreas: ["Building Facades", "Entrances & Ambulance Bays", "Window Frames & Surrounds", "Signage & Wayfinding Walls", "Canopies & Overhangs", "Railings & Handrails", "Trim & Fascia", "Parking Structure Elements"],
  },
  {
    slug: "government-buildings",
    label: "Government Buildings",
    icon: "building",
    image: "/home/quote.jpg",
    cardBlurb: "Reliable exterior painting solutions for municipal and government properties.",
    description: "Government and institutional properties call for careful compliance, documentation, and minimal public disruption. We work within procurement standards and public-facing schedules.",
    highlights: ["Compliance-Focused Process", "Public-Facing Scheduling", "Durable, Formal Finishes"],
    coverageAreas: ["Building Facades", "Masonry & Stone Trim", "Entrances & Columns", "Window & Door Frames", "Signage & Plaques", "Railings & Steps", "Trim & Cornices", "Perimeter Structures"],
  },
  {
    slug: "high-rises",
    label: "High-Rises",
    icon: "layers",
    image: "/home/ind11.jpg",
    cardBlurb: "Enhance curb appeal with professional exterior painting for high-rise properties.",
    description: "High-rise exteriors demand specialized access equipment, rigorous safety protocols, and coatings engineered for height and exposure. Our team is experienced with swing-stage and lift-based projects.",
    highlights: ["Height-Rated Access & Safety", "Specialized Coating Systems", "Experienced High-Rise Crews"],
    coverageAreas: ["Curtain Wall & Panel Systems", "Balconies & Railings", "Window Surrounds", "Podium & Base Facades", "Rooftop Structures", "Signage & Branding", "Metal Cladding", "Parking & Service Entrances"],
  },
  {
    slug: "metal-siding-gutters-painting",
    label: "Metal Siding & Gutters Painting",
    icon: "grid",
    image: "/home/work2.jpg",
    cardBlurb: "Specialized coatings for metal siding, gutters, and exterior metal surfaces.",
    description: "Metal surfaces need coatings that flex, resist rust, and hold color through seasonal temperature swings. We prep and coat metal siding and gutters for lasting protection.",
    highlights: ["Rust & Corrosion Resistant", "Flexible, Long-Lasting Coatings", "Detailed Surface Prep"],
    coverageAreas: ["Metal Siding Panels", "Gutters & Downspouts", "Flashing & Trim", "Roll-Up Doors", "Metal Railings", "Structural Metal Accents", "Soffits & Fascia", "Fencing & Gates"],
  },
  {
    slug: "brick-masonry-painting",
    label: "Brick & Masonry Painting",
    icon: "building",
    image: "/home/quote.jpg",
    cardBlurb: "Durable coatings and finishes for brick, block, and masonry exteriors.",
    description: "Masonry surfaces require breathable, purpose-built coatings that protect without trapping moisture. We assess each substrate and select the right system for the material.",
    highlights: ["Breathable Masonry Coatings", "Moisture-Aware Application", "Long-Term Protection"],
    coverageAreas: ["Brick Facades", "Block & Concrete Walls", "Stone Trim & Sills", "Mortar Joints", "Foundation Walls", "Retaining Walls", "Chimneys & Parapets", "Masonry Archways"],
  },
  {
    slug: "structural-steel-painting",
    label: "Structural Steel Painting",
    icon: "gear",
    image: "/home/work4.jpg",
    cardBlurb: "High-performance coatings for structural steel and exposed metal framework.",
    description: "Structural steel needs corrosion protection engineered for load-bearing components exposed to the elements. We apply industrial coating systems built for long-term structural performance.",
    highlights: ["Corrosion-Resistant Systems", "Industrial-Grade Application", "Built for Structural Loads"],
    coverageAreas: ["Exposed Beams & Columns", "Support Framework", "Stairwells & Catwalks", "Structural Connections", "Canopy & Awning Frames", "Railings & Guardrails", "Bracing & Trusses", "Equipment Support Structures"],
  },
  {
    slug: "waterproof-coatings",
    label: "Waterproof Coatings",
    icon: "shield",
    image: "/home/why-bg.jpg",
    cardBlurb: "Protective waterproof coating systems for commercial exteriors.",
    description: "Waterproof coatings add a critical layer of protection against moisture intrusion, extending the life of your building envelope. We match the right system to your surface and exposure.",
    highlights: ["Moisture Protection", "Extends Building Life", "Engineered Coating Systems"],
    coverageAreas: ["Foundation & Below-Grade Walls", "Parapet Walls", "Exterior Walls & Facades", "Balconies & Terraces", "Planter Walls", "Retaining Walls", "Masonry Surfaces", "Roof-to-Wall Transitions"],
  },
  {
    slug: "exterior-trim-painting",
    label: "Exterior Trim Painting",
    icon: "roller",
    image: "/home/why4.jpg",
    cardBlurb: "Detailed painting for exterior trim, fascia, and architectural accents.",
    description: "Trim and architectural details define the finished look of a building. Our detail-focused crews deliver clean lines and consistent coverage across every accent surface.",
    highlights: ["Precise Detail Work", "Consistent Color Matching", "Clean, Crisp Finishes"],
    coverageAreas: ["Fascia & Soffits", "Window & Door Trim", "Cornices & Mouldings", "Column & Pillar Accents", "Railing Trim", "Signage Trim", "Eaves & Roof Edges", "Decorative Architectural Details"],
  },
  {
    slug: "heat-reflective-roof-coatings",
    label: "Heat Reflective Roof Coatings",
    icon: "chart",
    image: "/home/ind11.jpg",
    cardBlurb: "Energy-efficient reflective coatings for commercial and industrial roofing.",
    description: "Reflective roof coatings reduce heat absorption, helping lower cooling costs while protecting the roof membrane from UV damage and weathering.",
    highlights: ["Reduces Cooling Costs", "UV & Weather Protection", "Extends Roof Life"],
    coverageAreas: ["Flat & Low-Slope Roofing", "Metal Roof Panels", "Roof Edges & Flashing", "Rooftop Equipment Curbs", "Parapet Caps", "Skylight Surrounds", "Drainage Areas", "Rooftop Walkways"],
  },
];

export function getExteriorService(slug: string): ExteriorService | undefined {
  return EXTERIOR_SERVICES.find((s) => s.slug === slug);
}

export function getRelatedExteriorServices(slug: string, count = 6): ExteriorService[] {
  const others = EXTERIOR_SERVICES.filter((s) => s.slug !== slug);
  const idx = EXTERIOR_SERVICES.findIndex((s) => s.slug === slug);
  // Rotate the list so related services feel varied depending on which page you're on.
  const rotated = [...others.slice(idx % others.length), ...others.slice(0, idx % others.length)];
  return rotated.slice(0, count);
}

// Generic, evergreen copy shared by every exterior-painting page. Kept in one
// place so the whole section stays consistent — edit here to change it site-wide.

export const EXTERIOR_PROCESS_STEPS = [
  { n: "01", title: "Assess", icon: "search", img: "/home/how2.jpg", desc: "We inspect your building, evaluate surfaces and conditions, and discuss your project goals to create the right plan for your property." },
  { n: "02", title: "Prepare", icon: "roller", img: "/home/how3.jpg", desc: "We clean, repair, and properly prepare all surfaces to ensure optimal adhesion and a smooth, durable finish." },
  { n: "03", title: "Paint", icon: "gear", img: "/home/how1.jpg", desc: "We apply high-quality, commercial-grade coatings using proven techniques to deliver a consistent and long-lasting finish." },
  { n: "04", title: "Complete", icon: "checkc", img: "/home/how4.jpg", desc: "We conduct a final walkthrough, review the finished work with you, and ensure your property is ready to make a strong impression." },
];

export const EXTERIOR_OVERVIEW_POINTS: [string, string, string][] = [
  ["home", "Improved Appearance", "A clean, well-maintained exterior helps attract more customers and strengthens your brand image."],
  ["shield", "Surface Protection", "High-quality coatings protect against weather, UV rays, and everyday wear."],
  ["building", "Minimized Disruption", "We work efficiently to complete projects with minimal impact on your business."],
  ["chart", "Long-Term Value", "A professional paint job extends the life of your building and reduces future maintenance costs."],
];

export const EXTERIOR_WHY_IT_MATTERS: [string, string, string][] = [
  ["home", "Attracts More Customers", "A fresh, professional exterior creates a positive first impression and draws more visitors to your business."],
  ["shield", "Protects Your Investment", "High-quality coatings shield your building from weather, UV rays, and everyday wear, reducing long-term repair costs."],
  ["chart", "Enhances Brand Image", "A clean and modern exterior shows that you care about your business and your customers."],
  ["users", "Creates a Welcoming Environment", "A well-maintained exterior makes customers and visitors feel confident and comfortable."],
];

export const EXTERIOR_FAQS: [string, string][] = [
  ["What types of commercial properties do you paint?", "We paint a wide range of commercial and industrial properties — including retail storefronts, warehouses, offices, hotels, schools, healthcare facilities, and high-rises."],
  ["Can you paint an active business without disrupting operations?", "Yes. We plan our schedule around your operating hours and work efficiently to minimize disruption to your business, staff, and customers."],
  ["What surfaces can be painted?", "We work with stucco, metal siding, brick and masonry, concrete, wood trim, structural steel, and more — matching the coating system to each surface."],
  ["How do you prepare exterior surfaces before painting?", "Our process includes cleaning, repairs, and proper surface preparation to ensure optimal adhesion and a smooth, long-lasting finish."],
  ["How long does a commercial exterior painting project take?", "Timelines vary based on the size and complexity of your property. We provide a detailed schedule as part of your project plan."],
  ["Do you provide colour consultations?", "Yes, our team can help you select colours and coating systems that match your brand and hold up to your building's environment."],
  ["Do you serve properties throughout your service area?", "We serve commercial properties across our primary service area — enter your postal code above to confirm coverage for your location."],
  ["How can I request a quote for my project?", "Use the Request a Quote button on this page, or contact our team directly and we'll schedule a free, no-obligation consultation."],
];
