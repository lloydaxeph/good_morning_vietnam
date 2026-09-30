import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Pool } from "pg";
import type { Day } from "./types.js";

const seedPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "seed-days.json");
const SEED_DAYS: Day[] = JSON.parse(readFileSync(seedPath, "utf8"));

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var ${name}`);
  return value;
}

const pool = new Pool({
  connectionString: requireEnv("DATABASE_URL"),
  ssl: process.env.PGSSLMODE === "disable" ? false : { rejectUnauthorized: false },
});

async function ensureSchema(): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS itinerary (
      id SMALLINT PRIMARY KEY DEFAULT 1,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      CONSTRAINT itinerary_singleton CHECK (id = 1)
    );
  `);
  const { rows } = await pool.query<{ count: string }>("SELECT count(*)::text FROM itinerary");
  if (rows[0].count === "0") {
    await pool.query("INSERT INTO itinerary (id, data) VALUES (1, $1)", [JSON.stringify(SEED_DAYS)]);
  }
}

const ready = ensureSchema();

export async function getDays(): Promise<Day[]> {
  await ready;
  const { rows } = await pool.query<{ data: Day[] }>("SELECT data FROM itinerary WHERE id = 1");
  return rows[0]?.data ?? SEED_DAYS;
}

export async function setDays(days: Day[]): Promise<void> {
  await ready;
  await pool.query(
    "UPDATE itinerary SET data = $1, updated_at = now() WHERE id = 1",
    [JSON.stringify(days)],
  );
}
