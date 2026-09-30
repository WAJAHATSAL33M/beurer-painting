"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setErr("");
    const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pw }) });
    if (r.ok) { router.push("/admin"); router.refresh(); return; }
    setErr((await r.json().catch(() => ({}))).error || "Could not log in."); setBusy(false);
  };
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded p-6 shadow-sm">
      <h1 className="font-heading font-extrabold text-2xl">Log in</h1>
      <p className="mt-1 text-sm text-gray-600">Enter the admin password to edit the website.</p>
      <form onSubmit={submit} className="mt-5 grid gap-4">
        <label className="grid gap-1 text-sm font-medium">Password
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoFocus autoComplete="current-password"
            className="rounded border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--acc)]" />
        </label>
        {err && <p role="alert" className="text-sm text-red-700">{err}</p>}
        <button disabled={busy || !pw} className="hbtn justify-center disabled:opacity-50">{busy ? "Checking…" : "Log in"}</button>
      </form>
    </div>
  );
}
