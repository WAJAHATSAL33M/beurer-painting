// Content lives in content/special-services.json and is edited from /admin.
import type { Faq } from "@/lib/locations";
import data from "@/content/special-services.json";

export type SpecialService = {
  slug: string;
  label: string;
  /** Icon name from components/Icon.tsx */
  icon: string;
  image: string;
  cardBlurb: string;
  description: string;
  highlights: [string, string, string];
  overview: string;
  includes: string[];
  faqs: Faq[];
};

export const SPECIAL_SERVICES: SpecialService[] = data.services as SpecialService[];
export const SPECIAL_HUB_FAQS: Faq[] = data.faqs;

export const getSpecialService = (slug: string) => SPECIAL_SERVICES.find((s) => s.slug === slug);
