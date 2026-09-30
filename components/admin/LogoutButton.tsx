"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <button type="button" className="text-sm text-gray-600 hover:text-bauer-ink underline"
      onClick={async () => { await fetch("/api/admin/login", { method: "DELETE" }); router.push("/admin/login"); router.refresh(); }}>
      Log out
    </button>
  );
}
