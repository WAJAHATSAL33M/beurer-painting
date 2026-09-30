import { NextResponse } from "next/server";
import { FILES } from "@/lib/admin/schema";
import { readJson, writeJson } from "@/lib/admin/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const fileFor = (name: string) => FILES.find((f) => f === `content/${name}.json`);
const err = (e: unknown, status = 500) => NextResponse.json({ error: e instanceof Error ? e.message : "Something went wrong." }, { status });

export async function GET(_: Request, { params }: { params: { name: string } }) {
  const file = fileFor(params.name);
  if (!file) return err("Unknown content.", 404);
  try { return NextResponse.json(await readJson(file)); } catch (e) { return err(e); }
}

export async function PUT(req: Request, { params }: { params: { name: string } }) {
  const file = fileFor(params.name);
  if (!file) return err("Unknown content.", 404);
  try {
    const data = await req.json();
    if (!data || typeof data !== "object" || Array.isArray(data)) return err("Invalid data.", 400);
    const old = await readJson(file);
    for (const k of Object.keys(old)) if (!(k in data)) return err(`Missing "${k}" — nothing was saved.`, 400); // never drop a section by accident
    await writeJson(file, data, `Admin: update ${params.name}`);
    return NextResponse.json({ ok: true });
  } catch (e) { return err(e); }
}
