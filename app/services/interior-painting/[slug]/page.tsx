import { notFound } from "next/navigation";
import type { Metadata } from "next";
import InteriorServiceTemplate from "@/components/interior/ServiceTemplate";
import { INTERIOR_SERVICES, getInteriorService } from "@/lib/interior-services";

// Pre-builds one page per entry in INTERIOR_SERVICES — add an object to that
// array (in lib/interior-services.ts) and a new page appears here
// automatically, no other changes needed.
export function generateStaticParams() {
  return INTERIOR_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getInteriorService(params.slug);
  if (!service) return {};
  return {
    title: `${service.label} | Interior Painting | Bauer Painting`,
    description: service.description,
  };
}

export default function InteriorServicePage({ params }: { params: { slug: string } }) {
  const service = getInteriorService(params.slug);
  if (!service) notFound();
  return <InteriorServiceTemplate service={service} />;
}
