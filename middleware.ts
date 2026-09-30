import { NextResponse, type NextRequest } from "next/server";
import { COOKIE, verifyToken } from "@/lib/admin/auth";

// Everything under /admin and /api/admin needs a valid login, except the login screen itself.
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/admin/login" || pathname === "/api/admin/login") return NextResponse.next();
  if (await verifyToken(req.cookies.get(COOKIE)?.value)) return NextResponse.next();
  if (pathname.startsWith("/api/")) return NextResponse.json({ error: "Please log in again." }, { status: 401 });
  return NextResponse.redirect(new URL("/admin/login", req.url));
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
