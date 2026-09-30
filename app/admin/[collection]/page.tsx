import { notFound } from "next/navigation";
import Link from "next/link";
import Editor from "@/components/admin/Editor";
import { getCollection } from "@/lib/admin/schema";

export default function CollectionPage({ params }: { params: { collection: string } }) {
  const col = getCollection(params.collection);
  if (!col) notFound();
  return (
    <>
      <Link href="/admin" className="text-sm text-gray-600 hover:text-bauer-ink">← All sections</Link>
      <h1 className="mt-2 font-heading font-extrabold text-3xl">{col.title}</h1>
      <div className="mt-6"><Editor collectionId={col.id} /></div>
    </>
  );
}
