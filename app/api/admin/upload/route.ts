import { NextResponse } from "next/server";
import { saveUpload } from "@/lib/admin/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" };

export async function POST(req: Request) {
  try {
    const file = (await req.formData()).get("file");
    if (!(file instanceof File)) return NextResponse.json({ error: "No file received." }, { status: 400 });
    const ext = TYPES[file.type];
    if (!ext) return NextResponse.json({ error: "Please upload a JPG, PNG, WebP or GIF image." }, { status: 400 });
    if (file.size > 4 * 1024 * 1024) return NextResponse.json({ error: "Image is too large (max 4 MB)." }, { status: 400 });
    const base = file.name.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "image";
    const path = await saveUpload(`${Date.now()}-${base}.${ext}`, Buffer.from(await file.arrayBuffer()));
    return NextResponse.json({ path });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Upload failed." }, { status: 500 });
  }
}
