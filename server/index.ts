import express from "express";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { credentialsMatch, issueToken, verifyToken } from "./auth.js";

if (existsSync(".env")) process.loadEnvFile(".env");

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var ${name}`);
  return value;
}

const ADMIN_USERNAME = requireEnv("ADMIN_USERNAME");
const ADMIN_PASSWORD = requireEnv("ADMIN_PASSWORD");
const SESSION_SECRET = requireEnv("SESSION_SECRET");
const PORT = Number(process.env.PORT ?? 3000);

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const distDir = path.join(rootDir, "dist");

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));

app.post("/api/admin/login", (req, res) => {
  const { username, password } = (req.body ?? {}) as { username?: unknown; password?: unknown };
  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    !credentialsMatch(username, password, ADMIN_USERNAME, ADMIN_PASSWORD)
  ) {
    res.status(401).json({ error: "Wrong username or password." });
    return;
  }
  res.json({ token: issueToken(SESSION_SECRET) });
});

app.get("/api/admin/me", (req, res) => {
  const header = req.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!verifyToken(token, SESSION_SECRET)) {
    res.status(401).json({ error: "Not logged in." });
    return;
  }
  res.json({ username: ADMIN_USERNAME });
});

app.use("/api", (_req, res) => {
  res.status(404).json({ error: "Not found." });
});

app.use(express.static(distDir, { index: false, maxAge: "1h" }));

app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Good Morning Vietnam listening on :${PORT}`);
});
