const routes = [
  "",
  "/services",
  "/services/interior-painting",
  "/services/exterior-painting",
  "/services/special-services",
  "/industries",
  "/service-areas",
  "/our-work",
  "/about",
  "/resources",
  "/blog",
  "/quote",
  "/contact",
];

export default function sitemap() {
  const base = "https://www.bauerpainting.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
