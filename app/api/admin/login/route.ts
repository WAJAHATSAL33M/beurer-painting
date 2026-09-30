import { NextResponse } from "next/server";
import { COOKIE, adminConfigured, createToken, passwordOk } from "@/lib/admin/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!adminConfigured()) return NextResponse.json({ error: "Admin is not set up yet. Add ADMIN_PASSWORD in your hosting settings." }, { status: 503 });
  const { password } = await req.json().catch(() => ({ password: "" }));
  if (!(await passwordOk(String(password ?? "")))) {
    await new Promise((r) => setTimeout(r, 900)); // slows down guessing
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, await createToken(), { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 7 * 86400 });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
