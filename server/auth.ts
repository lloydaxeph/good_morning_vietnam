import { createHmac, timingSafeEqual } from "node:crypto";

const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function credentialsMatch(
  username: string,
  password: string,
  expectedUsername: string,
  expectedPassword: string,
): boolean {
  const userOk = safeEqual(username, expectedUsername);
  const passOk = safeEqual(password, expectedPassword);
  return userOk && passOk;
}

/** Returns `<expiryMs>.<hmac>`, valid for 7 days. */
export function issueToken(secret: string, now = Date.now()): string {
  const payload = String(now + TOKEN_TTL_MS);
  return `${payload}.${sign(payload, secret)}`;
}

/** True when the token's signature matches and it hasn't expired. */
export function verifyToken(token: string, secret: string, now = Date.now()): boolean {
  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload, secret))) return false;
  const expiry = Number(payload);
  return Number.isFinite(expiry) && expiry > now;
}
