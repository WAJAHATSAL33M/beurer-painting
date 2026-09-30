/**
 * Placeholder for the future "Site Settings" document.
 *
 * Once the admin theme panel is wired up, this function will fetch the
 * singleton settings doc from Sanity (or wherever settings are stored) and
 * the values will be injected as CSS variables in app/layout.js, e.g.:
 *
 *   const settings = await getSiteSettings();
 *   <body style={{
 *     "--color-primary": settings.colors.primary,
 *     "--font-heading": settings.fonts.heading,
 *   }}>
 *
 * Until then, components can import these constants directly for things
 * that aren't pure CSS (e.g. phone number, service area list).
 */
export const siteSettings = {
  companyName: "Bauer Painting",
  phone: "905-738-9171",
  phoneHref: "tel:+19057389171",
  email: "info@bauerpainting.com",
  address: "Mississauga, ON",
  addressNote: "Serving the Greater Toronto and Hamilton Area",
  tagline: "Better Spaces. Brighter Tomorrows.",
  serviceAreas: [
    "Mississauga",
    "Toronto",
    "Oakville",
    "Burlington",
    "Hamilton",
    "Guelph",
    "Kitchener",
    "Cambridge",
    "Milton",
    "Brampton",
    "St. Catharines",
    "Niagara Falls",
  ],
  colors: {
    primary: "#d91e26",
    ink: "#10151c",
    paper: "#f5f4f1",
  },
  fonts: {
    heading: "Archivo",
    body: "Inter",
  },
};
