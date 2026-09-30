// =============================================================================
// LOCATIONS — CITY PAGES + SUB-PAGES
// =============================================================================
// This is the ONLY file you need to edit to add or change a location page.
//
//   /locations                       -> hub listing every city
//   /locations/mississauga           -> the city page (the mockup)
//   /locations/mississauga/<slug>    -> a sub-page, opened by clicking a card
//
// A city has three groups of sub-pages, and every card / map pin / list row on
// the city page links to one of them:
//   services   (Interior Painting, Spray Painting, ...)
//   properties (Office Buildings, Warehouses, ...)
//   areas      (Port Credit, Streetsville, ... — these also drive the map pins)
//
// HOW TO ADD A SUB-PAGE
//   Copy any object in a group below, give it a unique `slug`, save. The route
//   at app/locations/[city]/[slug]/page.tsx builds the page automatically.
//   Slugs must be unique across ALL three groups within a city.
//
// HOW TO ADD A CITY
//   Copy the MISSISSAUGA object, change the copy, add it to LOCATIONS at the
//   bottom. Then add its name to CITY_LINKS if it isn't already listed.
// =============================================================================

import settings from "@/content/settings.json";

export type SubKind = "service" | "property" | "area";

export type Faq = { q: string; a: string };

export type SubPage = {
  /** Unique URL slug -> /locations/<city>/<slug> */
  slug: string;
  kind: SubKind;
  label: string;
  /** Icon name — must exist in components/Icon.tsx */
  icon: string;
  /** Photo from /public (hero of the sub-page + card thumbnails) */
  image: string;
  /** Short line shown on the city-page card */
  cardBlurb: string;
  /** Hero paragraph on the sub-page */
  description: string;
  /** 3 short hero highlights */
  highlights: [string, string, string];
  /** Longer overview paragraph */
  overview: string;
  /** 6–8 items for the "what's included / typical work" chips */
  includes: string[];
  /** Optional link to the site-wide page that covers this topic in more depth */
  learnMore?: { label: string; href: string };
  /** 2–3 questions specific to this page */
  faqs: Faq[];
};

export type Area = SubPage & {
  /** Map pin position in the 0–100 map box (x = left→right, y = top→bottom) */
  pin: { x: number; y: number };
};

export type Location = {
  slug: string;
  city: string;
  province: string;
  /** e.g. "Mississauga and surrounding areas" */
  coverage: string;
  services: SubPage[];
  properties: SubPage[];
  areas: Area[];
  faqs: Faq[];
};

// -----------------------------------------------------------------------------
// Small helper so the many sub-pages don't repeat their FAQ boilerplate.
// -----------------------------------------------------------------------------

const timingFaq = (what: string): Faq => ({
  q: `How long does ${what} usually take?`,
  a: `It depends on the size of the space, the condition of the surfaces and the finish system. After a site visit we give you a written schedule, and we can phase the work by floor, unit or zone — including evenings and weekends — so your operations keep running.`,
});

const quoteFaq: Faq = {
  q: "How do I get a quote?",
  a: "Use the Request a Quote button or call us. We arrange a site visit, review the surfaces and your timeline, then send a clear, detailed quote with no obligation.",
};

// =============================================================================
// MISSISSAUGA
// =============================================================================
const MISSISSAUGA_AREAS: Area[] = [
    {
      slug: "downtown-mississauga",
      kind: "area",
      label: "Downtown Mississauga",
      icon: "building",
      image: "/process/review-main.jpg",
      pin: { x: 42, y: 46 },
      cardBlurb: "Office towers, retail and mixed-use buildings around the City Centre.",
      description: "Commercial painting for office towers, retail and mixed-use properties in and around Mississauga's City Centre.",
      highlights: ["High-Rise Experience", "After-Hours Scheduling", "Tenant Coordination"],
      overview: "Downtown Mississauga is the city's densest business district, with office towers, condominiums and retail. We work with property managers on lobby, corridor and suite refreshes and on exterior and podium work, scheduled to keep tenants comfortable.",
      includes: ["Office Towers & Podiums", "Condominium Common Areas", "Retail & Restaurants", "Parking Structures", "Lobbies & Amenity Spaces"],
      faqs: [quoteFaq],
    },
    {
      slug: "cooksville",
      kind: "area",
      label: "Cooksville",
      icon: "pin",
      image: "/home/work1.jpg",
      pin: { x: 60, y: 56 },
      cardBlurb: "Plazas, offices and mixed-use properties in a central Mississauga hub.",
      description: "Commercial painting for plazas, offices and multi-unit properties in Cooksville.",
      highlights: ["Local Crews", "Flexible Scheduling", "Plaza & Retail Experience"],
      overview: "Cooksville combines retail plazas, offices and multi-residential buildings. We paint storefronts, common areas and exteriors here on schedules that keep businesses trading.",
      includes: ["Plazas & Storefronts", "Office Suites", "Multi-Unit Buildings", "Restaurants", "Exteriors & Signage Surrounds"],
      faqs: [quoteFaq],
    },
    {
      slug: "port-credit",
      kind: "area",
      label: "Port Credit",
      icon: "pin",
      image: "/home/work2.jpg",
      pin: { x: 62, y: 69 },
      cardBlurb: "Waterfront storefronts, restaurants and mixed-use buildings.",
      description: "Commercial painting for waterfront storefronts, restaurants and mixed-use buildings in Port Credit.",
      highlights: ["Lakeside Weather Know-How", "Storefront Specialists", "Detail-Focused Crews"],
      overview: "Port Credit's village streets and waterfront put a premium on appearance. We paint storefronts, restaurants, offices and multi-unit buildings here, using coatings suited to lakeside conditions.",
      includes: ["Storefronts & Facades", "Restaurants & Cafés", "Offices", "Mixed-Use Buildings", "Exterior Trim & Railings"],
      faqs: [quoteFaq],
    },
    {
      slug: "streetsville",
      kind: "area",
      label: "Streetsville",
      icon: "pin",
      image: "/home/work3.jpg",
      pin: { x: 25, y: 34 },
      cardBlurb: "Village main-street businesses and neighbourhood commercial buildings.",
      description: "Commercial painting for main-street businesses and neighbourhood commercial buildings in Streetsville.",
      highlights: ["Heritage-Sensitive Care", "Small-Business Friendly", "Minimal Disruption"],
      overview: "Streetsville's village core is full of independent businesses. We help owners and landlords refresh storefronts, interiors and exteriors, working with small teams and short windows.",
      includes: ["Storefronts", "Restaurants & Shops", "Small Offices", "Medical & Professional Suites", "Exteriors"],
      faqs: [quoteFaq],
    },
    {
      slug: "meadowvale",
      kind: "area",
      label: "Meadowvale",
      icon: "pin",
      image: "/home/work5.jpg",
      pin: { x: 11, y: 22 },
      cardBlurb: "Business parks, offices and industrial properties in the west end.",
      description: "Commercial and industrial painting for business parks, offices and warehouses in Meadowvale.",
      highlights: ["Business-Park Experience", "Industrial Capability", "Off-Hours Work"],
      overview: "Meadowvale includes business parks, office buildings and light-industrial properties. We paint interiors, exteriors and specialty coatings here with off-shift scheduling.",
      includes: ["Business Park Offices", "Warehouses & Light Industrial", "Retail Plazas", "Exteriors", "Common Areas"],
      faqs: [quoteFaq],
    },
    {
      slug: "erindale",
      kind: "area",
      label: "Erindale",
      icon: "pin",
      image: "/process/step4.jpg",
      pin: { x: 29, y: 58 },
      cardBlurb: "Institutional, office and multi-unit properties near the Credit River.",
      description: "Commercial painting for institutional, office and multi-unit properties in Erindale.",
      highlights: ["Institutional Experience", "Calendar-Aware Scheduling", "Low-Odour Options"],
      overview: "Erindale has a mix of educational, residential and commercial properties. We schedule work around academic and tenant calendars and offer low-odour products for occupied spaces.",
      includes: ["Educational & Institutional Buildings", "Multi-Unit Properties", "Office Suites", "Plazas", "Common Areas"],
      faqs: [quoteFaq],
    },
    {
      slug: "hurontario",
      kind: "area",
      label: "Hurontario",
      icon: "pin",
      image: "/home/why-bg.jpg",
      pin: { x: 53, y: 35 },
      cardBlurb: "Offices, plazas and mixed-use buildings along the Hurontario corridor.",
      description: "Commercial painting for offices, plazas and mixed-use buildings along the Hurontario corridor.",
      highlights: ["Corridor Coverage", "Flexible Scheduling", "Multi-Site Experience"],
      overview: "The Hurontario corridor runs through the heart of Mississauga's commercial life. We paint offices, retail and mixed-use properties along it, and support owners with several sites.",
      includes: ["Office Buildings", "Retail Plazas", "Mixed-Use Properties", "Restaurants", "Exteriors"],
      faqs: [quoteFaq],
    },
    {
      slug: "east-credit",
      kind: "area",
      label: "East Credit",
      icon: "pin",
      image: "/home/work4.jpg",
      pin: { x: 71, y: 45 },
      cardBlurb: "Plazas, offices and community buildings in east-central Mississauga.",
      description: "Commercial painting for plazas, offices and community buildings in East Credit.",
      highlights: ["Plaza Experience", "Neighbourhood Businesses", "Reliable Scheduling"],
      overview: "East Credit's commercial properties include plazas, professional offices and community buildings. We help owners keep them looking well cared for with dependable scheduling.",
      includes: ["Plazas & Retail Units", "Professional Offices", "Community Buildings", "Restaurants", "Exteriors"],
      faqs: [quoteFaq],
    },
    {
      slug: "lisgar",
      kind: "area",
      label: "Lisgar",
      icon: "pin",
      image: "/home/work1.jpg",
      pin: { x: 53, y: 22 },
      cardBlurb: "Plazas, offices and community properties in north-west Mississauga.",
      description: "Commercial painting for plazas, offices and community properties in Lisgar.",
      highlights: ["Neighbourhood Plazas", "Flexible Scheduling", "Clean Job Sites"],
      overview: "Lisgar's commercial properties are largely neighbourhood plazas, offices and community buildings. We provide interior and exterior painting with clean, organised job sites.",
      includes: ["Plazas & Retail", "Offices", "Community Buildings", "Restaurants", "Exteriors"],
      faqs: [quoteFaq],
    },
    {
      slug: "lorne-park",
      kind: "area",
      label: "Lorne Park",
      icon: "pin",
      image: "/home/work2.jpg",
      pin: { x: 45, y: 81 },
      cardBlurb: "Boutique commercial, medical and institutional buildings in the south-west.",
      description: "Commercial painting for boutique retail, medical and institutional buildings in Lorne Park.",
      highlights: ["Detail-Focused Finishes", "Quiet, Tidy Sites", "Small-Scope Friendly"],
      overview: "Lorne Park's commercial buildings are typically smaller and boutique in character. We bring careful preparation and tidy sites to retail units, medical offices and institutional properties.",
      includes: ["Boutique Retail", "Medical & Professional Offices", "Schools & Institutions", "Restaurants", "Exteriors"],
      faqs: [quoteFaq],
    },
  ];

// -----------------------------------------------------------------------------
// Other cities: each area is just [label, what-we-paint-there]. Copy, pins and
// images are generated by makeArea(); to customise one, replace its tuple with
// a full Area object like the Mississauga ones above.
// -----------------------------------------------------------------------------
const AREA_IMAGES = ["/home/work1.jpg", "/home/work2.jpg", "/home/work3.jpg", "/home/work4.jpg", "/process/review-main.jpg"];
const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

function makeArea(city: string, label: string, focus: string, k: number, n: number): Area {
  return {
    slug: slugify(label),
    kind: "area",
    label,
    icon: "pin",
    image: AREA_IMAGES[k % AREA_IMAGES.length],
    pin: { x: 20 + ((k * 37) % 60), y: 15 + Math.round((k / Math.max(n - 1, 1)) * 70) },
    cardBlurb: `${cap(focus)} in ${label}.`,
    description: `Commercial painting for ${focus} in ${label}, ${city}.`,
    highlights: ["Flexible Scheduling", "Clean Job Sites", "Local Crew"],
    overview: `${label} is one of the commercial areas we serve in ${city}. We provide interior and exterior painting for ${focus}, with careful protection of your property and a schedule built around how your business operates.`,
    includes: ["Offices", "Retail & Plazas", "Industrial Units", "Exteriors", "Common Areas"],
    faqs: [quoteFaq],
  };
}

// [city, slug, [[area, what we paint there], ...]]
const CITY_AREAS: [string, string, [string, string][]][] = [
  ["Toronto", "toronto", [["Downtown Toronto", "office towers, retail and mixed-use buildings"], ["North York", "offices, plazas and multi-unit properties"], ["Scarborough", "industrial, retail and institutional properties"], ["Etobicoke", "industrial, office and retail properties"], ["Liberty Village", "creative offices and mixed-use buildings"], ["Yorkville", "boutique retail, offices and hospitality venues"]]],
  ["Oakville", "oakville", [["Downtown Oakville", "boutique retail, offices and restaurants"], ["Bronte", "shops, restaurants and waterfront properties"], ["Glen Abbey", "plazas, offices and community buildings"], ["Uptown Core", "retail, offices and mixed-use properties"], ["Palermo", "plazas, offices and industrial units"]]],
  ["Burlington", "burlington", [["Downtown Burlington", "offices, retail and hospitality properties"], ["Aldershot", "plazas, offices and community buildings"], ["Appleby", "offices, retail and industrial units"], ["Orchard", "plazas, offices and multi-unit properties"], ["Alton", "plazas, offices and community properties"]]],
  ["Hamilton", "hamilton", [["Downtown Hamilton", "offices, retail, institutional and mixed-use buildings"], ["Hamilton Mountain", "plazas, offices and multi-unit properties"], ["Stoney Creek", "industrial, retail and office properties"], ["Ancaster", "boutique retail, offices and medical buildings"], ["Dundas", "heritage storefronts, offices and restaurants"], ["Waterdown", "plazas, offices and community properties"]]],
  ["Guelph", "guelph", [["Downtown Guelph", "heritage storefronts, offices and restaurants"], ["South End", "plazas, offices and multi-unit properties"], ["Hanlon Corridor", "industrial units, warehouses and offices"], ["Guelph East", "industrial, retail and office properties"]]],
  ["Kitchener", "kitchener", [["Downtown Kitchener", "offices, tech workspaces and mixed-use buildings"], ["Bridgeport", "industrial, retail and community properties"], ["Doon", "plazas, offices and institutional buildings"], ["Forest Heights", "plazas, offices and multi-unit properties"]]],
  ["Cambridge", "cambridge", [["Galt", "heritage buildings, offices and retail"], ["Preston", "industrial, retail and office properties"], ["Hespeler", "storefronts, plazas and community buildings"], ["Blair", "plazas, offices and community properties"]]],
  ["Milton", "milton", [["Downtown Milton", "storefronts, offices and restaurants"], ["Derry Green", "industrial units, warehouses and logistics facilities"], ["Timberlea", "plazas, offices and community buildings"], ["Willmott", "plazas, offices and multi-unit properties"]]],
  ["Brampton", "brampton", [["Downtown Brampton", "offices, retail and institutional buildings"], ["Bramalea", "plazas, offices and multi-unit properties"], ["Heart Lake", "plazas, offices and community buildings"], ["Springdale", "industrial, retail and office properties"], ["Gore Industrial", "warehouses, factories and logistics facilities"], ["Mount Pleasant", "plazas, offices and community properties"]]],
  ["St. Catharines", "st-catharines", [["Downtown St. Catharines", "offices, retail and institutional buildings"], ["Port Dalhousie", "waterfront restaurants, shops and hospitality venues"], ["Merritton", "industrial, retail and community properties"], ["Glenridge", "plazas, offices and education buildings"], ["Fairview", "retail, plazas and offices"]]],
  ["Niagara Falls", "niagara-falls", [["Clifton Hill", "hospitality, attractions and retail properties"], ["Lundy's Lane", "hotels, restaurants and retail properties"], ["Stamford", "plazas, offices and community buildings"], ["Chippawa", "shops, restaurants and community properties"], ["Downtown Niagara Falls", "offices, storefronts and institutional buildings"]]],
];

function buildLocation(CITY: string, slug: string, areas: Area[]): Location {
  return {
  slug,
  city: CITY,
  province: "ON",
  coverage: `${CITY} and surrounding areas`,

  // ---------------------------------------------------------------- SERVICES
  services: [
    {
      slug: "interior-painting",
      kind: "service",
      label: "Interior Painting",
      icon: "roller",
      image: "/process/step5.jpg",
      cardBlurb: "Professional interior painting for offices, retail spaces, industrial facilities, and more.",
      description: `Professional interior painting for offices, retail spaces, industrial facilities and more across ${CITY}. Clean, durable finishes delivered with minimal disruption to your team.`,
      highlights: ["Minimal Disruption", "Professional Finishes", "On-Time Projects"],
      overview: `A well-finished interior shapes how staff, tenants and customers experience your building. Bauer Painting handles commercial interior projects throughout ${CITY} — from a single suite to multi-floor corporate buildings — with careful protection of your furniture, floors and equipment, and a schedule built around how your business actually operates.`,
      includes: ["Offices & Open Areas", "Reception & Lobbies", "Corridors & Stairwells", "Meeting & Break Rooms", "Washrooms", "Ceilings & Trim", "Feature & Brand Walls"],
      learnMore: { label: "Explore all Interior Painting services", href: "/services/interior-painting" },
      faqs: [timingFaq("a commercial interior painting project"), { q: "Can you paint while we stay open?", a: "Yes. We regularly work after hours, on weekends and in phases so occupied spaces stay usable. Low-odour products are available where odour is a concern." }],
    },
    {
      slug: "exterior-painting",
      kind: "service",
      label: "Exterior Painting",
      icon: "building",
      image: "/process/review-main.jpg",
      cardBlurb: "Durable, weather-resistant exterior painting to protect and enhance your property.",
      description: `Durable, weather-resistant exterior painting that protects and refreshes commercial buildings across ${CITY}, built to handle Southern Ontario's freeze-thaw seasons.`,
      highlights: ["Weather-Resistant Coatings", "Safe Access Equipment", "Curb-Appeal Results"],
      overview: `Exterior surfaces take the worst of Ontario weather — summer sun, road salt, moisture and repeated freeze-thaw cycles. We assess the substrate, repair what needs repairing and apply coating systems suited to each surface, using lifts and scaffolding where needed, so your building looks sharp and stays protected.`,
      includes: ["Facades & Cladding", "Stucco & Masonry", "Metal Panels & Railings", "Doors, Frames & Trim", "Loading Docks", "Parking Structures", "Signage Surrounds"],
      learnMore: { label: "Explore all Exterior Painting services", href: "/services/exterior-painting" },
      faqs: [{ q: "What time of year is best for exterior painting?", a: "Most coatings need dry weather and moderate temperatures, so late spring through early fall is the usual window. We plan around the forecast and product requirements and can advise on scheduling for your building." }, timingFaq("an exterior painting project")],
    },
    {
      slug: "spray-painting",
      kind: "service",
      label: "Spray Painting",
      icon: "spray",
      image: "/process/execute.jpg",
      cardBlurb: "Efficient spray painting for large commercial spaces and specialized surfaces.",
      description: `Efficient, even spray application for large commercial spaces and specialized surfaces in ${CITY} — fast coverage with a consistent finish.`,
      highlights: ["Fast Coverage", "Even, Consistent Finish", "Ideal for Large Areas"],
      overview: "Spray application covers big areas quickly and gives a uniform finish on surfaces that are slow to roll or brush — exposed ceilings, block walls, steel, pipe and metal fixtures. Careful masking and protection keep overspray where it belongs, and the speed shortens the time your space is disrupted.",
      includes: ["Exposed Ceilings & Ductwork", "Block & Concrete Walls", "Structural Steel", "Doors & Frames", "Metal Fixtures & Railings", "Warehouse Interiors", "New-Construction Shells"],
      faqs: [{ q: "Is overspray a problem in occupied buildings?", a: "We mask and protect surrounding surfaces, use dryfall or overspray-safe products where appropriate and schedule spray work for quiet periods so occupied areas are not affected." }, timingFaq("commercial spray painting")],
    },
    {
      slug: "surface-preparation",
      kind: "service",
      label: "Surface Preparation",
      icon: "layers",
      image: "/process/prepare.jpg",
      cardBlurb: "Thorough preparation for long-lasting results, including cleaning, repairs, and priming.",
      description: "Thorough preparation is what makes a paint job last. We clean, repair, sand and prime every surface so the finish coat bonds properly and holds up.",
      highlights: ["Cleaning & Repairs", "Correct Primers", "Longer-Lasting Finishes"],
      overview: "Most premature paint failures trace back to poor preparation. Before any finish coat goes on, we assess each surface, deal with peeling, cracking, moisture or staining, patch and sand, and choose the right primer for the substrate — so the result looks better on day one and keeps looking better for years.",
      includes: ["Pressure Washing & Cleaning", "Scraping & Sanding", "Crack & Drywall Repair", "Stain & Moisture Treatment", "Caulking & Sealing", "Primer Selection", "Protection of Floors & Fixtures"],
      faqs: [{ q: "Why is preparation such a big part of the quote?", a: "Because it decides how long the paint lasts. Skipping repairs or priming saves a little now and costs a repaint much sooner. We itemize preparation so you can see exactly what is included." }, quoteFaq],
    },
    {
      slug: "high-durability-coatings",
      kind: "service",
      label: "High-Durability Coatings",
      icon: "shield",
      image: "/home/svc3.jpg",
      cardBlurb: "Specialized coatings for high-traffic and demanding environments.",
      description: `Specialized coating systems for high-traffic, high-wear and demanding commercial and industrial environments across ${CITY}.`,
      highlights: ["Wear & Impact Resistance", "Easy-to-Clean Surfaces", "Extended Service Life"],
      overview: "Corridors, loading areas, production floors and public washrooms take more punishment than standard paint is designed for. We specify and apply tougher coating systems — epoxies, urethanes and other performance coatings — matched to the way each space is actually used.",
      includes: ["Corridors & High-Traffic Walls", "Epoxy & Urethane Systems", "Loading & Receiving Areas", "Commercial Kitchens", "Washrooms & Wet Areas", "Anti-Graffiti Coatings", "Safety & Line Marking"],
      learnMore: { label: "See how we work", href: "/our-process" },
      faqs: [{ q: "When do I need a high-durability coating instead of regular paint?", a: "Wherever surfaces are cleaned often, hit by carts or equipment, exposed to moisture or chemicals, or difficult to repaint frequently. We recommend a system after seeing the space." }, timingFaq("a specialty coating project")],
    },
    {
      slug: "property-manager-services",
      kind: "service",
      label: "Property Manager Services",
      icon: "users",
      image: "/process/step1.jpg",
      cardBlurb: "Reliable painting solutions for property managers and multi-unit buildings.",
      description: `Reliable, well-communicated painting for property managers and owners of multi-unit and multi-site portfolios in ${CITY}.`,
      highlights: ["Single Point of Contact", "Tenant-Friendly Scheduling", "Clear Reporting"],
      overview: "Property managers need predictable schedules, clear communication and as little tenant friction as possible. We coordinate access, notices and phasing, keep common areas safe and tidy, and provide straightforward quotes and updates so you can manage many properties without chasing details.",
      includes: ["Common Areas & Lobbies", "Corridors & Stairwells", "Suite & Unit Turnovers", "Parking Garages", "Exterior Refreshes", "Annual Maintenance Programs", "Multi-Property Portfolios"],
      faqs: [{ q: "Can you handle repeat work across several properties?", a: "Yes. We can set up planned maintenance programs and keep a consistent standard, scope and point of contact across your buildings." }, quoteFaq],
    },
    {
      slug: "eco-friendly-painting",
      kind: "service",
      label: "Eco-Friendly Painting Solutions",
      icon: "leaf",
      image: "/process/review-b.jpg",
      cardBlurb: "Low-VOC and environmentally friendly options for healthier spaces.",
      description: "Low-VOC and lower-odour paints and coatings for healthier indoor environments — without compromising durability or appearance.",
      highlights: ["Low-VOC Products", "Lower Odour", "Healthier Indoor Air"],
      overview: "For offices, schools, clinics and other occupied spaces, product choice matters. We offer low-VOC and low-odour coating options that dry quickly, reduce lingering smell and help keep people comfortable — and we can match the product to the surface and the level of wear it will see.",
      includes: ["Low-VOC Interior Paints", "Low-Odour Primers", "Fast-Drying Systems", "Occupied-Building Projects", "Schools & Healthcare Spaces", "Offices & Common Areas"],
      faqs: [{ q: "Do eco-friendly paints hold up in commercial spaces?", a: "Modern low-VOC commercial products are durable and scrubbable. We recommend the right one for each surface and traffic level rather than a one-size-fits-all product." }, quoteFaq],
    },
    {
      slug: "customized-solutions",
      kind: "service",
      label: "Customized Solutions",
      icon: "gear",
      image: "/process/step3.jpg",
      cardBlurb: "Tailored painting plans to meet the unique needs of your commercial property.",
      description: `A painting plan tailored to your property, schedule, budget and operating constraints — for projects that don't fit a standard package in ${CITY}.`,
      highlights: ["Tailored Scope", "Flexible Scheduling", "Single Accountable Team"],
      overview: "Some projects mix interior and exterior work, special coatings, tight timelines or unusual access. We start with a detailed consultation and build a plan around your property and priorities — scope, sequence, products and schedule — then deliver it with one accountable team.",
      includes: ["Mixed Interior/Exterior Scopes", "Phased & Overnight Schedules", "Specialty Coatings", "Brand-Colour Programs", "Occupied-Site Planning", "Budget-Phased Multi-Year Plans"],
      learnMore: { label: "See our project process", href: "/our-process" },
      faqs: [{ q: "What if my project doesn't fit a standard category?", a: "That is exactly what this is for. Tell us what you need and we will scope it around your building and constraints." }, quoteFaq],
    },
  ],

  // -------------------------------------------------------------- PROPERTIES
  properties: [
    {
      slug: "office-buildings",
      kind: "property",
      label: "Office Buildings",
      icon: "building",
      image: "/home/ind-feat.jpg",
      cardBlurb: "Professional interiors and exteriors that reflect your brand and create a productive environment.",
      description: `Professional interior and exterior painting for ${CITY} office buildings — clean, modern spaces that reflect your brand and support your team.`,
      highlights: ["After-Hours Scheduling", "Brand-Ready Finishes", "Minimal Disruption"],
      overview: `${CITY} is home to a large concentration of corporate offices. We paint single suites, full floors and entire office buildings, coordinating with property managers and tenants so lobbies, corridors and workspaces stay usable throughout.`,
      includes: ["Suites & Open Offices", "Lobbies & Reception", "Boardrooms & Meeting Rooms", "Corridors & Stairwells", "Washrooms & Kitchenettes", "Exterior Cladding & Entrances"],
      learnMore: { label: "Commercial Office Painting", href: "/services/interior-painting/commercial-office-painting" },
      faqs: [timingFaq("painting an office floor"), quoteFaq],
    },
    {
      slug: "retail-shopping-centres",
      kind: "property",
      label: "Retail & Shopping Centres",
      icon: "store",
      image: "/process/review-a.jpg",
      cardBlurb: "Durable, high-quality finishes for retail spaces, plazas, and shopping destinations.",
      description: `Durable, high-quality finishes for retail units, plazas and shopping centres in ${CITY} — scheduled around your trading hours.`,
      highlights: ["Overnight Work", "Brand-Consistent Finishes", "Fast Turnaround"],
      overview: "Retail spaces need to look fresh and be back open quickly. We refresh sales floors, storefronts, common areas and back-of-house, working overnight or in phases so customers barely notice we were there.",
      includes: ["Sales Floors & Display Walls", "Storefronts & Facades", "Common Areas & Corridors", "Back-of-House & Storage", "Washrooms", "Plaza Exteriors & Canopies"],
      learnMore: { label: "Retail Interiors", href: "/services/interior-painting/retail-interiors" },
      faqs: [{ q: "Can you work overnight so our store stays open?", a: "Yes — overnight and early-morning work is common for retail. We plan it around your hours and reset the space before you open." }, quoteFaq],
    },
    {
      slug: "industrial-warehouses",
      kind: "property",
      label: "Industrial & Warehouses",
      icon: "warehouse",
      image: "/home/work5.jpg",
      cardBlurb: "Heavy-duty coatings designed for high-traffic and demanding environments.",
      description: `Heavy-duty coatings and large-scale painting for industrial buildings, warehouses and distribution facilities across ${CITY}.`,
      highlights: ["Large-Scale Coverage", "Heavy-Duty Coatings", "Minimal Downtime"],
      overview: "Industrial and warehouse spaces call for durable systems and efficient application. We paint walls, ceilings, steel, dock areas and safety markings, using spray equipment and lifts to cover big areas quickly while operations continue around us where possible.",
      includes: ["Walls & Ceilings", "Structural Steel & Columns", "Loading Dock Areas", "Safety Lines & Markings", "Exposed Ductwork", "Exteriors & Metal Cladding"],
      learnMore: { label: "Warehouse Interiors", href: "/services/interior-painting/warehouse-interiors" },
      faqs: [timingFaq("painting a warehouse"), { q: "Can you work around live operations?", a: "Yes. We phase work by zone, use off-shift hours and coordinate with your safety requirements." }],
    },
    {
      slug: "multi-unit-properties",
      kind: "property",
      label: "Multi-Unit Properties",
      icon: "building",
      image: "/home/hero.jpg",
      cardBlurb: "Painting solutions for condos, apartments, and multi-residential buildings.",
      description: `Painting solutions for condominiums, apartment buildings and multi-residential properties in ${CITY} — common areas, exteriors and suite turnovers.`,
      highlights: ["Resident-Friendly Scheduling", "Common-Area Specialists", "Clear Communication"],
      overview: "Multi-unit buildings have many stakeholders. We coordinate with property managers and boards, give residents clear notice and keep corridors, lobbies and stairwells safe and clean while the work is under way.",
      includes: ["Lobbies & Corridors", "Stairwells & Amenity Rooms", "Underground & Surface Parking", "Balconies & Exteriors", "Suite Turnovers", "Exterior Facade Refreshes"],
      learnMore: { label: "High-Rise Painting", href: "/services/exterior-painting/high-rises" },
      faqs: [{ q: "How do you handle notices and access for residents?", a: "We work with your property manager on notices, access windows and phasing so residents know what to expect and disruption stays low." }, quoteFaq],
    },
    {
      slug: "schools-educational-buildings",
      kind: "property",
      label: "Schools & Institutional Buildings",
      icon: "school",
      image: "/process/step4.jpg",
      cardBlurb: "Safe, clean, and long-lasting finishes for schools, colleges, and learning environments.",
      description: `Safe, clean and long-lasting finishes for schools, colleges and institutional buildings in ${CITY}, scheduled around the academic calendar.`,
      highlights: ["Scheduled Around Terms", "Safety-First Process", "Durable Finishes"],
      overview: "Educational buildings are best painted when students are away. We plan summer, March-break and holiday projects, use low-odour products and keep sites clean and secure so classrooms are ready when students return.",
      includes: ["Classrooms", "Hallways & Stairwells", "Gyms & Auditoriums", "Cafeterias", "Administrative Offices", "Libraries & Common Areas"],
      learnMore: { label: "Schools & Educational Buildings", href: "/services/interior-painting/schools-educational-buildings" },
      faqs: [{ q: "Can projects be done during school breaks?", a: "Yes — most school projects are scheduled for summer, holidays and breaks, with low-odour products so spaces are ready to use quickly." }, quoteFaq],
    },
    {
      slug: "healthcare-facilities",
      kind: "property",
      label: "Healthcare Facilities",
      icon: "cross",
      image: "/process/step2.jpg",
      cardBlurb: "Low-odour, high-durability coatings for hospitals, clinics, and healthcare spaces.",
      description: `Low-odour, high-durability painting for clinics, medical offices, hospitals and care facilities in ${CITY}, with strict site protocols.`,
      highlights: ["Low-Odour Products", "Strict Site Protocols", "Scheduled Around Care"],
      overview: "Healthcare interiors need careful scheduling, cleanable finishes and respect for patients and staff. We follow your site protocols, contain work areas, use low-odour products and phase projects so services continue.",
      includes: ["Exam & Treatment Rooms", "Waiting & Reception Areas", "Corridors & Nurses' Stations", "Patient Rooms", "Administrative Offices", "Washrooms"],
      learnMore: { label: "Healthcare Facilities & Hospitals", href: "/services/interior-painting/healthcare-facilities-hospitals" },
      faqs: [{ q: "Can you follow our infection-control and site rules?", a: "Yes. Tell us your protocols up front and we plan containment, access, product selection and scheduling around them." }, quoteFaq],
    },
    {
      slug: "hospitality-hotels",
      kind: "property",
      label: "Hospitality & Hotels",
      icon: "hotel",
      image: "/home/work4.jpg",
      cardBlurb: "Attractive, welcoming spaces for hotels, restaurants, and hospitality venues.",
      description: `Attractive, welcoming interiors and exteriors for ${CITY} hotels, restaurants and hospitality venues — delivered around guest activity.`,
      highlights: ["Guest-Friendly Scheduling", "Premium Finishes", "Fast Turnarounds"],
      overview: "In hospitality, appearance is part of the product. We repaint lobbies, guest corridors, banquet spaces, dining rooms and exteriors on schedules that protect guest experience, including overnight and floor-by-floor phasing.",
      includes: ["Lobbies & Reception", "Guest Corridors & Rooms", "Banquet & Meeting Spaces", "Restaurants & Bars", "Back-of-House Areas", "Exteriors & Entrances"],
      learnMore: { label: "Hotels & Hospitality", href: "/services/interior-painting/hotels-hospitality" },
      faqs: [{ q: "Can you paint restaurants and hotels while they stay open?", a: "Often, yes — with overnight, off-peak and phased work. We plan closures to be as short as possible." }, quoteFaq],
    },
    {
      slug: "government-institutional",
      kind: "property",
      label: "Government & Institutional",
      icon: "bank",
      image: "/home/ind-feat.jpg",
      cardBlurb: "Reliable painting services for municipal, government, and institutional properties.",
      description: `Reliable, documented painting services for municipal, government and institutional properties across ${CITY}.`,
      highlights: ["Documented Process", "Security-Aware Scheduling", "Durable Public-Space Finishes"],
      overview: "Public buildings need careful coordination, clear documentation and finishes that stand up to constant use. We work to your site requirements, keep communication clear and deliver durable results on schedule.",
      includes: ["Public Counters & Lobbies", "Offices & Meeting Rooms", "Corridors & Waiting Areas", "Community & Recreation Spaces", "Records & Storage Rooms", "Exteriors"],
      learnMore: { label: "Government Building Offices", href: "/services/interior-painting/government-building-offices" },
      faqs: [{ q: "Can you meet our documentation and site-access requirements?", a: "Yes. Share your requirements at the outset and we will plan access, documentation and scheduling around them." }, quoteFaq],
    },
  ],

  // ------------------------------------------------------------------- AREAS
  areas,

  // -------------------------------------------------------------------- FAQS
  faqs: [
    { q: `What types of commercial properties do you paint in ${CITY}?`, a: "We paint office buildings, retail stores and plazas, industrial facilities and warehouses, schools, medical offices, restaurants, hotels, government buildings and multi-unit properties. Our team has the experience and equipment for projects of all sizes." },
    { q: "How do you minimize disruption to our business operations?", a: "We plan around you: evenings, weekends and phased work by zone or floor, clear communication, protection of furniture and equipment, and a clean, safe site every day." },
    { q: "Do you provide a detailed quote before starting the project?", a: "Yes. After a site visit we provide a clear, itemized quote covering scope, preparation, products and schedule — with no obligation." },
    { q: "What kind of paint and materials do you use?", a: "We use premium commercial-grade coatings chosen for each surface and use case, including low-VOC and low-odour options and high-durability systems where needed." },
    { q: "How long does a typical commercial painting project take?", a: "It depends on size, surface condition and access. A single suite can take days; a multi-floor or exterior project can take weeks. You get a written schedule before work starts." },
    { q: "Are your painters insured?", a: "Yes, we are insured and can provide proof of insurance and the documentation your property or tenant requirements call for. Ask us about anything specific to your site." },
    { q: "Can you work outside of regular business hours?", a: "Yes. Evening, overnight and weekend work is common, especially for retail, offices and healthcare." },
    { q: "Do you offer colour consultation services?", a: "We can help you choose colours and finishes that suit your brand, lighting and traffic levels, and coordinate with your designer if you have one." },
    { q: `What areas of ${CITY} do you serve?`, a: `All of it — including ${areas.map((x) => x.label).join(", ")} — plus the surrounding communities.` },
    { q: "How do I get started with a commercial painting project?", a: "Request a quote or call us. We will arrange a site visit, discuss your goals and timeline, and send a detailed quote." },
  ],
  };
}

export const LOCATIONS: Location[] = [
  buildLocation("Mississauga", "mississauga", MISSISSAUGA_AREAS),
  ...CITY_AREAS.map(([city, slug, list]) => buildLocation(city, slug, list.map(([label, focus], k) => makeArea(city, label, focus, k, list.length)))),
];

// Cities shown on the /locations hub. Cities without a page yet fall back to
// the contact form (see app/locations/page.tsx).
export const CITY_LINKS: string[] = [
  "Mississauga", "Toronto", "Brampton", "Oakville", "Milton", "Burlington", "Hamilton", "Guelph", "Kitchener", "Cambridge", "St. Catharines", "Niagara Falls",
];

// ---------------------------------------------------------------- lookups
export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function locationHref(city: string) {
  const loc = LOCATIONS.find((l) => l.city.toLowerCase() === city.toLowerCase());
  return loc ? `/locations/${loc.slug}` : undefined;
}

export function subHref(loc: Location, slug: string) {
  return `/locations/${loc.slug}/${slug}`;
}

export function allSubPages(loc: Location): SubPage[] {
  return [...loc.services, ...loc.properties, ...loc.areas];
}

export function getSubPage(loc: Location, slug: string): SubPage | undefined {
  return allSubPages(loc).find((s) => s.slug === slug);
}

export function siblingsOf(loc: Location, page: SubPage): SubPage[] {
  const group = page.kind === "service" ? loc.services : page.kind === "property" ? loc.properties : loc.areas;
  return group.filter((s) => s.slug !== page.slug);
}

export const KIND_LABEL: Record<SubKind, { group: string; singular: string; includes: string }> = {
  service: { group: "Services", singular: "Service", includes: "What's Included" },
  property: { group: "Property Types", singular: "Property Type", includes: "Spaces We Paint" },
  area: { group: "Areas We Serve", singular: "Neighbourhood", includes: "Properties We Paint Here" },
};

// Real, site-wide facts (same numbers the homepage/about/contact pages use).
export const COMPANY = {
  phone: settings.phone,
  phoneHref: `tel:+1${settings.phone.replace(/\D/g, "").replace(/^1/, "")}`,
  email: settings.email,
  hours: settings.hours,
  since: 2001,
  stats: [
    { n: "24+", l: "Years of Experience" },
    { n: "1000+", l: "Projects Completed" },
    { n: "100%", l: "Client Focused" },
  ],
};
