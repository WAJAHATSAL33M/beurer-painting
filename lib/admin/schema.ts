// Describes what the admin panel can edit. To add another editable area, add an entry here.
export type Field = {
  key: string;
  label: string;
  help?: string;
  type: "text" | "textarea" | "image" | "lines" | "body" | "date" | "faqs" | "select";
  options?: string[];
  rows?: number;
  required?: boolean;
  datalist?: string; // name of a top-level list in the file to suggest values from
};

export type Collection = {
  id: string;
  title: string;
  blurb: string;
  file: string;
  /** Key of the array inside the file. Omit for a single settings object. */
  listKey?: string;
  itemName?: string;
  labelKey?: string;
  subKey?: string;
  slugFrom?: string;
  livePath?: string; // e.g. "/blog/" + slug
  /** Adds each item's value to a top-level list (e.g. new blog categories). */
  ensure?: { field: string; list: string };
  blank?: Record<string, unknown>;
  fields: Field[];
};

export const FILES = ["content/blog.json", "content/special-services.json", "content/settings.json"];

const icons = ["roller", "building", "spray", "users", "leaf", "shield", "drop", "layers", "gear", "chat", "check", "clock", "pin", "home", "doc"];

export const COLLECTIONS: Collection[] = [
  {
    id: "blog",
    title: "Blog posts",
    blurb: "Write, edit and delete articles on the /blog page.",
    file: "content/blog.json",
    listKey: "posts",
    itemName: "post",
    labelKey: "title",
    subKey: "date",
    slugFrom: "title",
    livePath: "/blog/",
    ensure: { field: "category", list: "categories" },
    blank: { slug: "", title: "", category: "Tips & Guides", image: "/home/hero.jpg", excerpt: "", date: "", readTime: "5 min read", author: "Bauer Painting Team", content: [] },
    fields: [
      { key: "title", label: "Title", type: "text", required: true },
      { key: "category", label: "Category", type: "text", datalist: "categories", required: true, help: "Pick an existing one or type a new one." },
      { key: "date", label: "Publish date", type: "date" },
      { key: "image", label: "Main image", type: "image", help: "Shown on the blog page and at the top of the post." },
      { key: "excerpt", label: "Short summary", type: "textarea", rows: 3, required: true, help: "1–2 sentences shown on the blog list." },
      { key: "content", label: "Article", type: "body" },
      { key: "readTime", label: "Reading time", type: "text", help: 'For example "5 min read".' },
      { key: "author", label: "Author", type: "text" },
    ],
  },
  {
    id: "special-services",
    title: "Special services",
    blurb: "Edit the pages under Services → Special Services.",
    file: "content/special-services.json",
    listKey: "services",
    itemName: "service",
    labelKey: "label",
    slugFrom: "label",
    livePath: "/services/special-services/",
    blank: { slug: "", label: "", icon: "roller", image: "/process/execute.jpg", cardBlurb: "", description: "", highlights: [], overview: "", includes: [], faqs: [] },
    fields: [
      { key: "label", label: "Service name", type: "text", required: true },
      { key: "image", label: "Main image", type: "image" },
      { key: "icon", label: "Icon", type: "select", options: icons },
      { key: "cardBlurb", label: "Short line for the cards", type: "textarea", rows: 2, required: true },
      { key: "description", label: "Intro at the top of the page", type: "textarea", rows: 3, required: true },
      { key: "highlights", label: "Three highlights", type: "lines", help: "One per line. Three works best." },
      { key: "overview", label: "Overview", type: "textarea", rows: 5 },
      { key: "includes", label: "What's included", type: "lines", help: "One item per line." },
      { key: "faqs", label: "Questions & answers", type: "faqs" },
    ],
  },
  {
    id: "special-faqs",
    title: "Special services FAQs",
    blurb: "The questions on the main Special Services page.",
    file: "content/special-services.json",
    listKey: "faqs",
    itemName: "question",
    labelKey: "q",
    blank: { q: "", a: "" },
    fields: [
      { key: "q", label: "Question", type: "text", required: true },
      { key: "a", label: "Answer", type: "textarea", rows: 4, required: true },
    ],
  },
  {
    id: "settings",
    title: "Contact details",
    blurb: "Phone, email and hours used in the footer, contact page and location pages.",
    file: "content/settings.json",
    fields: [
      { key: "phone", label: "Phone number", type: "text", required: true, help: "For example 905-738-9171." },
      { key: "email", label: "Email", type: "text", required: true },
      { key: "hours", label: "Business hours", type: "text" },
    ],
  },
];

export const getCollection = (id: string) => COLLECTIONS.find((c) => c.id === id);
