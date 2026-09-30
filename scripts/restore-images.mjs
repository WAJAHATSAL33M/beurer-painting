// scripts/restore-images.mjs
// The about-page JPEGs are stored in git as base64 text (*.jpg.b64) because the
// GitHub push bridge used for this repo only transports UTF-8 text and cannot
// carry binary files. This script decodes them into real binary JPEGs under
// public/about/ before the Next.js build runs (see the "build" script in
// package.json). Safe to run multiple times; it simply rewrites the .jpg files.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const images = ["about-hero", "about-story", "about-team", "about-detail"];
mkdirSync(join(root, "public", "about"), { recursive: true });
for (const name of images) {
  const src = join(root, "public", "about", `${name}.jpg.b64`);
  const dest = join(root, "public", "about", `${name}.jpg`);
  if (!existsSync(src)) {
    console.warn(`[restore-images] WARNING: missing ${src}, skipping`);
    continue;
  }
  const b64 = readFileSync(src, "utf8").replace(/\s+/g, "");
  writeFileSync(dest, Buffer.from(b64, "base64"));
  console.log(`[restore-images] wrote ${dest}`);
}
