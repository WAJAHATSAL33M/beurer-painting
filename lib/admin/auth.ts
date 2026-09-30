// Signed-cookie login. Uses only Web Crypto so it runs in middleware (edge) and API routes alike.
export const COOKIE = "bauer_admin";
const secret = () => process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || "";
const enc = new TextEncoder();
const b64u = (buf: ArrayBuffer) => {
  const bytes = new Uint8Array(buf);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

async function hmac(data: string) {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret()), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64u(await crypto.subtle.sign("HMAC", key, enc.encode(data)));
}
const same = (a: string, b: string) => {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
};

export const adminConfigured = () => !!process.env.ADMIN_PASSWORD;

export async function passwordOk(input: string) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false; // fail closed: no password set = nobody gets in
  return same(await hmac("pw:" + input), await hmac("pw:" + pw));
}
export async function createToken(days = 7) {
  const exp = String(Date.now() + days * 864e5);
  return `${exp}.${await hmac(exp)}`;
}
export async function verifyToken(token?: string) {
  if (!token || !secret()) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  return same(sig, await hmac(exp));
}
