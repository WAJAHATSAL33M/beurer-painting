// Reads/writes content files. On Vercel it commits to GitHub (which triggers a redeploy);
// with no GitHub settings (local dev) it reads/writes the files on disk instead.
import fs from "fs/promises";
import path from "path";

const repo = process.env.GITHUB_REPO; // "owner/name"
const token = process.env.GITHUB_TOKEN;
const branch = process.env.GITHUB_BRANCH || "main";
const dir = (process.env.GITHUB_CONTENT_DIR || "").replace(/^\/+|\/+$/g, "");
export const useGithub = !!(repo && token);
export const storageInfo = () => (useGithub ? `GitHub: ${repo} (${branch})` : "Local files (development mode)");

const rel = (p: string) => (dir ? `${dir}/${p}` : p);
const gh = (p: string, init: RequestInit = {}) =>
  fetch(`https://api.github.com/repos/${repo}/contents/${p}`, {
    ...init,
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", ...(init.headers || {}) },
  });

async function putGithub(p: string, b64: string, message: string) {
  const url = `${rel(p)}`;
  const cur = await gh(`${url}?ref=${branch}`);
  const sha = cur.ok ? (await cur.json()).sha : undefined;
  const r = await gh(url, { method: "PUT", body: JSON.stringify({ message, content: b64, branch, sha }) });
  if (!r.ok) throw new Error(`GitHub save failed (${r.status}). Check GITHUB_TOKEN has "Contents: Read and write" access.`);
}

export async function readJson(file: string) {
  if (!useGithub) return JSON.parse(await fs.readFile(path.join(process.cwd(), file), "utf8"));
  const r = await gh(`${rel(file)}?ref=${branch}`);
  if (!r.ok) throw new Error(`GitHub read failed (${r.status}). Check GITHUB_REPO, GITHUB_BRANCH and GITHUB_CONTENT_DIR.`);
  return JSON.parse(Buffer.from((await r.json()).content, "base64").toString("utf8"));
}

export async function writeJson(file: string, data: unknown, message: string) {
  const text = JSON.stringify(data, null, 2) + "\n";
  if (!useGithub) return fs.writeFile(path.join(process.cwd(), file), text, "utf8");
  await putGithub(file, Buffer.from(text).toString("base64"), message);
}

export async function saveUpload(name: string, buf: Buffer) {
  const p = `public/uploads/${name}`;
  if (!useGithub) {
    await fs.mkdir(path.join(process.cwd(), "public/uploads"), { recursive: true });
    await fs.writeFile(path.join(process.cwd(), p), buf);
  } else await putGithub(p, buf.toString("base64"), `Admin: upload ${name}`);
  return `/uploads/${name}`;
}
