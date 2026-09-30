import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ExteriorServiceTemplate from "@/components/exterior/ServiceTemplate";
import { EXTERIOR_SERVICES, getExteriorService } from "@/lib/exterior-services";

// Pre-builds one page per entry in EXTERIOR_SERVICES — add an object to that
// array and a new page appears here automatically, no other changes needed.
export function generateStaticParams() {
  return EXTERIOR_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getExteriorService(params.slug);
  if (!service) return {};
  return {
    title: `${service.label} | Exterior Painting | Bauer Painting`,
    description: service.description,
  };
}

export default function ExteriorServicePage({ params }: { params: { slug: string } }) {
  const service = getExteriorService(params.slug);
  if (!service) notFound();
  return <ExteriorServiceTemplate service={service} />;
}
