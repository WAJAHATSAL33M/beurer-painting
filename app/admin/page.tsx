import Link from "next/link";
import { COLLECTIONS } from "@/lib/admin/schema";
import { adminConfigured } from "@/lib/admin/auth";
import { storageInfo, useGithub } from "@/lib/admin/store";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  return (
    <>
      <h1 className="font-heading font-extrabold text-3xl">What would you like to edit?</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">Make your changes, then press <strong>Publish changes</strong>. The live website updates about a minute or two later.</p>
      <ul className="mt-8 grid sm:grid-cols-2 gap-4">
        {COLLECTIONS.map((c) => (
          <li key={c.id}>
            <Link href={`/admin/${c.id}`} className="block h-full rounded bg-white p-6 shadow-sm hover:shadow-md transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--acc)]">
              <h2 className="font-heading font-extrabold text-xl">{c.title}</h2>
              <p className="mt-1 text-sm text-gray-600">{c.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[var(--acc-d)]">Open →</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xs text-gray-500">Saving to: {storageInfo()}{!useGithub && process.env.NODE_ENV === "production" ? ". GitHub is not connected, so saving will fail. See ADMIN_SETUP.md." : ""}{!adminConfigured() ? " · ADMIN_PASSWORD is not set." : ""}</p>
    </>
  );
}
