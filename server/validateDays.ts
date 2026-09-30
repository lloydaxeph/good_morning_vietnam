import type { Activity, City, Day, TimeBlock } from "./types.js";

const CITIES: City[] = ["Hanoi", "Sapa", "Ninh Binh"];

function isString(v: unknown): v is string {
  return typeof v === "string";
}

function isActivity(v: unknown): v is Activity {
  if (typeof v !== "object" || v === null) return false;
  const a = v as Record<string, unknown>;
  if (!isString(a.n) || !isString(a.d)) return false;
  if (a.im !== undefined && (!Array.isArray(a.im) || !a.im.every(isString))) return false;
  if (a.loc !== undefined && !isString(a.loc)) return false;
  if (a.thumb !== undefined && !isString(a.thumb)) return false;
  if (a.website !== undefined && !isString(a.website)) return false;
  if (a.slideshow !== undefined && typeof a.slideshow !== "boolean") return false;
  return true;
}

function isTimeBlock(v: unknown): v is TimeBlock {
  if (typeof v !== "object" || v === null) return false;
  const b = v as Record<string, unknown>;
  if (!isString(b.start) || !isString(b.end) || !isString(b.label)) return false;
  if (b.transit !== undefined && !isString(b.transit)) return false;
  if (b.confirmed !== undefined && typeof b.confirmed !== "boolean") return false;
  if (!Array.isArray(b.items) || !b.items.every(isActivity)) return false;
  return true;
}

function isDay(v: unknown): v is Day {
  if (typeof v !== "object" || v === null) return false;
  const d = v as Record<string, unknown>;
  if (!isString(d.date) || !isString(d.nice) || !isString(d.note)) return false;
  if (!isString(d.city) || !CITIES.includes(d.city as City)) return false;
  if (!Array.isArray(d.route) || d.route.length !== 2 || !d.route.every(isString)) return false;
  if (!Array.isArray(d.blocks) || !d.blocks.every(isTimeBlock)) return false;
  return true;
}

/** Structural validation for a PUT /api/days body: an array of well-formed Day objects. */
export function isValidDays(v: unknown): v is Day[] {
  return Array.isArray(v) && v.length > 0 && v.every(isDay);
}
