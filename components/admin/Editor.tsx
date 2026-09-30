"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useRef, useState } from "react";
import { getCollection, type Field } from "@/lib/admin/schema";

type Item = Record<string, any>;
type Root = Record<string, any>;

const slugify = (t: string) => t.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const today = () => new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
const inputCls = "w-full rounded border border-gray-300 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--acc)]";

/* ---- article text <-> list of paragraphs ("## " = heading, "- " = bullet) ---- */
const toText = (a: string[] = []) => a.map((s, i) => (i === 0 ? "" : s.startsWith("- ") && a[i - 1].startsWith("- ") ? "\n" : "\n\n") + s).join("");
const fromText = (t: string) =>
  t.split(/\n{2,}/).flatMap((b) => {
    const lines = b.split("\n").map((l) => l.trimEnd()).filter(Boolean);
    if (!lines.length) return [];
    return lines.every((l) => l.startsWith("- ")) ? lines : [lines.join(" ").trim()];
  });

/* ---- shrink big photos before upload so pages stay fast ---- */
async function shrink(file: File): Promise<File> {
  if (!/image\/(jpeg|png|webp)/.test(file.type)) return file;
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1, 1800 / bmp.width);
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * scale); c.height = Math.round(bmp.height * scale);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
  const blob: Blob | null = await new Promise((r) => c.toBlob(r, "image/jpeg", 0.85));
  return blob && blob.size < file.size ? new File([blob], file.name.replace(/\.\w+$/, ".jpg"), { type: "image/jpeg" }) : file;
}

function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [local, setLocal] = useState("");
  const pick = async (f?: File) => {
    if (!f) return;
    setBusy(true); setMsg("");
    try {
      const small = await shrink(f);
      const fd = new FormData(); fd.append("file", small);
      const r = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error);
      setLocal(URL.createObjectURL(small)); onChange(j.path); setMsg("Uploaded. It will show on the live site after you publish.");
    } catch (e) { setMsg(e instanceof Error ? e.message : "Upload failed."); }
    setBusy(false);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-48 aspect-[4/3] rounded bg-gray-100 overflow-hidden shrink-0">
        {(local || value) && <img src={local || value} alt="" className="w-full h-full object-cover" />}
      </div>
      <div className="grid gap-2 content-start">
        <label className="hghost sm cursor-pointer justify-center w-fit">
          {busy ? "Uploading…" : "Upload new image"}
          <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="sr-only" onChange={(e) => pick(e.target.files?.[0])} />
        </label>
        {msg && <p role="status" className="text-sm text-gray-700">{msg}</p>}
        <details className="text-sm text-gray-600"><summary className="cursor-pointer">Image file path (advanced)</summary>
          <input value={value} onChange={(e) => onChange(e.target.value)} className={`${inputCls} mt-2`} /></details>
      </div>
    </div>
  );
}

function BodyField({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const [text, setText] = useState(toText(value));
  const ref = useRef<HTMLTextAreaElement>(null);
  const set = (t: string) => { setText(t); onChange(fromText(t)); };
  const insert = (s: string) => {
    const el = ref.current; const at = el ? el.selectionStart : text.length;
    set(text.slice(0, at) + (at && !text.slice(0, at).endsWith("\n\n") ? "\n\n" : "") + s + text.slice(at));
    setTimeout(() => el?.focus(), 0);
  };
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <button type="button" onClick={() => insert("## ")} className="hghost sm">Add heading</button>
        <button type="button" onClick={() => insert("- ")} className="hghost sm">Add bullet list</button>
      </div>
      <textarea ref={ref} rows={18} value={text} onChange={(e) => set(e.target.value)} className={inputCls} />
      <p className="mt-1 text-xs text-gray-500">Leave a blank line between paragraphs. Start a line with <code>## </code> for a heading, or <code>- </code> for a bullet (one bullet per line).</p>
    </div>
  );
}

function FaqsField({ value = [], onChange }: { value: { q: string; a: string }[]; onChange: (v: { q: string; a: string }[]) => void }) {
  const upd = (i: number, k: "q" | "a", v: string) => onChange(value.map((f, j) => (j === i ? { ...f, [k]: v } : f)));
  return (
    <div className="grid gap-3">
      {value.map((f, i) => (
        <div key={i} className="rounded border border-gray-200 p-3 grid gap-2">
          <input aria-label="Question" placeholder="Question" value={f.q} onChange={(e) => upd(i, "q", e.target.value)} className={inputCls} />
          <textarea aria-label="Answer" placeholder="Answer" rows={3} value={f.a} onChange={(e) => upd(i, "a", e.target.value)} className={inputCls} />
          <button type="button" onClick={() => onChange(value.filter((_, j) => j !== i))} className="text-sm text-red-700 justify-self-start hover:underline">Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...value, { q: "", a: "" }])} className="hghost sm w-fit">Add a question</button>
    </div>
  );
}

function FieldInput({ f, item, set, root }: { f: Field; item: Item; set: (k: string, v: any) => void; root: Root }) {
  const v = item[f.key];
  switch (f.type) {
    case "textarea": return <textarea rows={f.rows ?? 4} value={v ?? ""} onChange={(e) => set(f.key, e.target.value)} className={inputCls} />;
    case "image": return <ImageField value={v ?? ""} onChange={(x) => set(f.key, x)} />;
    case "lines": return <textarea rows={5} value={(v ?? []).join("\n")} onChange={(e) => set(f.key, e.target.value.split("\n").map((s) => s.trim()).filter(Boolean))} className={inputCls} />;
    case "body": return <BodyField value={v ?? []} onChange={(x) => set(f.key, x)} />;
    case "faqs": return <FaqsField value={v} onChange={(x) => set(f.key, x)} />;
    case "select": return <select value={v ?? ""} onChange={(e) => set(f.key, e.target.value)} className={inputCls}>{f.options!.map((o) => <option key={o}>{o}</option>)}</select>;
    case "date": {
      const d = v ? new Date(v) : null;
      const iso = d && !isNaN(+d) ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}` : "";
      return <input type="date" value={iso} onChange={(e) => e.target.value && set(f.key, new Date(e.target.value + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))} className={inputCls} />;
    }
    default:
      return (<>
        <input value={v ?? ""} onChange={(e) => set(f.key, e.target.value)} list={f.datalist ? `dl-${f.key}` : undefined} className={inputCls} />
        {f.datalist && <datalist id={`dl-${f.key}`}>{(root[f.datalist] ?? []).map((o: string) => <option key={o} value={o} />)}</datalist>}
      </>);
  }
}

export default function Editor({ collectionId }: { collectionId: string }) {
  const col = getCollection(collectionId)!;
  const [root, setRoot] = useState<Root | null>(null);
  const [loadErr, setLoadErr] = useState("");
  const [dirty, setDirty] = useState(false);
  const [editing, setEditing] = useState<number | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);
  const [err, setErr] = useState("");
  const [toast, setToast] = useState<{ ok: boolean; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const name = col.file.replace(/^content\/|\.json$/g, "");

  useEffect(() => {
    fetch(`/api/admin/content/${name}`).then(async (r) => (r.ok ? setRoot(await r.json()) : setLoadErr((await r.json()).error))).catch(() => setLoadErr("Could not load."));
  }, [name]);
  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => { if (dirty) e.preventDefault(); };
    window.addEventListener("beforeunload", h); return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  const items: Item[] = useMemo(() => (root && col.listKey ? root[col.listKey] : []), [root, col.listKey]);
  const change = (fn: (r: Root) => void) => { setRoot((r) => { const n = structuredClone(r!); fn(n); return n; }); setDirty(true); setToast(null); };
  const setField = (k: string, v: any) => change((r) => {
    const t: Item = col.listKey ? r[col.listKey][editing!] : r;
    t[k] = v;
    if (col.listKey && isNew && !slugTouched && col.slugFrom && k === col.slugFrom) t.slug = slugify(v);
  });

  const validate = (it: Item, idx: number) => {
    for (const f of col.fields) if (f.required && !String(it[f.key] ?? "").trim()) return `Please fill in "${f.label}".`;
    if (col.slugFrom) {
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(it.slug || "")) return "The page address (URL) can only use lowercase letters, numbers and dashes.";
      if (items.some((o, j) => j !== idx && o.slug === it.slug)) return "Another item already uses this page address. Change it.";
    }
    return "";
  };
  const done = () => {
    if (col.listKey) { const m = validate(items[editing!], editing!); if (m) return setErr(m); }
    setErr(""); setEditing(null); setIsNew(false);
  };
  const add = () => {
    const blank = structuredClone(col.blank ?? {}) as Item;
    if ("date" in blank) blank.date = today();
    change((r) => r[col.listKey!].unshift(blank));
    setEditing(0); setIsNew(true); setSlugTouched(false); setErr("");
  };
  const remove = (i: number) => {
    if (!confirm(`Delete "${items[i][col.labelKey!] || "this item"}"? This is removed when you publish.`)) return;
    change((r) => r[col.listKey!].splice(i, 1));
  };
  const move = (i: number, d: number) => change((r) => { const a = r[col.listKey!]; [a[i], a[i + d]] = [a[i + d], a[i]]; });

  const publish = async () => {
    if (editing !== null) return setErr("Press “Done” on the item you're editing first.");
    setSaving(true); setToast(null);
    const data = structuredClone(root!);
    if (col.ensure && col.listKey) for (const it of data[col.listKey]) if (it[col.ensure.field] && !data[col.ensure.list].includes(it[col.ensure.field])) data[col.ensure.list].push(it[col.ensure.field]);
    try {
      const r = await fetch(`/api/admin/content/${name}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error);
      setRoot(data); setDirty(false);
      setToast({ ok: true, text: "Published! The live site will update in about 1–2 minutes." });
    } catch (e) { setToast({ ok: false, text: e instanceof Error ? e.message : "Could not save." }); }
    setSaving(false);
  };

  if (loadErr) return <p role="alert" className="rounded bg-red-50 text-red-800 p-4">{loadErr}</p>;
  if (!root) return <p className="text-gray-600">Loading…</p>;

  const single = !col.listKey;
  const formItem: Item | null = single ? root : editing !== null ? items[editing] : null;

  return (
    <div className={dirty ? "pb-24" : ""}>
      {toast && <p role="status" className={`mb-4 rounded p-3 text-sm ${toast.ok ? "bg-green-50 text-green-900" : "bg-red-50 text-red-800"}`}>{toast.text}</p>}

      {single || formItem ? (
        <div className="rounded bg-white p-5 sm:p-7 shadow-sm grid gap-6">
          {(single ? col.fields : col.fields).map((f) => (
            <div key={`${editing}-${f.key}`}>
              <label className="block text-sm font-semibold mb-1.5">{f.label}{f.required && <span className="text-red-600"> *</span>}</label>
              {f.help && <p className="text-xs text-gray-500 mb-1.5">{f.help}</p>}
              <FieldInput f={f} item={formItem!} set={setField} root={root} />
            </div>
          ))}
          {col.slugFrom && !single && (
            <div>
              <label className="block text-sm font-semibold mb-1.5">Page address (URL)</label>
              <p className="text-xs text-gray-500 mb-1.5">{col.livePath}<strong>{formItem!.slug || "…"}</strong> — filled in automatically. Changing it on a live page breaks old links.</p>
              <input value={formItem!.slug} onChange={(e) => { setSlugTouched(true); setField("slug", slugify(e.target.value)); }} className={inputCls} />
            </div>
          )}
          {err && <p role="alert" className="text-sm text-red-700">{err}</p>}
          {!single && <div className="flex gap-3"><button type="button" onClick={done} className="hbtn">Done</button></div>}
        </div>
      ) : (
        <>
          <button type="button" onClick={add} className="hbtn">Add new {col.itemName}</button>
          <ul className="mt-5 grid gap-3">
            {items.map((it, i) => (
              <li key={i} className="rounded bg-white p-4 shadow-sm flex flex-wrap items-center gap-3">
                <div className="flex-1 min-w-[200px]">
                  <p className="font-semibold">{it[col.labelKey!] || "(untitled)"}</p>
                  {col.subKey && <p className="text-sm text-gray-500">{it[col.subKey]}</p>}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {col.livePath && it.slug && <a href={col.livePath + it.slug} target="_blank" rel="noreferrer" className="text-gray-600 hover:underline">View</a>}
                  <button type="button" aria-label="Move up" disabled={i === 0} onClick={() => move(i, -1)} className="px-2 py-1 rounded border border-gray-300 disabled:opacity-30">↑</button>
                  <button type="button" aria-label="Move down" disabled={i === items.length - 1} onClick={() => move(i, 1)} className="px-2 py-1 rounded border border-gray-300 disabled:opacity-30">↓</button>
                  <button type="button" onClick={() => { setEditing(i); setIsNew(false); setSlugTouched(true); setErr(""); }} className="hghost sm">Edit</button>
                  <button type="button" onClick={() => remove(i)} className="px-3 py-2 text-red-700 hover:underline">Delete</button>
                </div>
              </li>
            ))}
            {!items.length && <li className="text-gray-600">Nothing here yet.</li>}
          </ul>
        </>
      )}

      {dirty && (
        <div className="fixed inset-x-0 bottom-0 z-10 bg-white border-t border-gray-200 px-4 py-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            <p className="text-sm text-gray-700">You have unpublished changes.</p>
            <button type="button" onClick={publish} disabled={saving} className="hbtn disabled:opacity-50">{saving ? "Publishing…" : "Publish changes"}</button>
          </div>
        </div>
      )}
    </div>
  );
}
