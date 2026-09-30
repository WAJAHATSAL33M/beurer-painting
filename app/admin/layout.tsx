import Link from "next/link";
import type { Metadata } from "next";
import LogoutButton from "@/components/admin/LogoutButton";

export const metadata: Metadata = { title: "Site admin | Bauer Painting", robots: { index: false, follow: false } };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F3F6F8] text-bauer-ink">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/admin" className="font-heading font-extrabold tracking-tight">Bauer Painting <span className="text-[var(--acc-d)]">Admin</span></Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/" target="_blank" className="text-gray-600 hover:text-bauer-ink">View site</Link>
            <LogoutButton />
          </nav>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">{children}</div>
    </div>
  );
}
