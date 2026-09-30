import type { Day } from "../types";
import { readError } from "./adminApi";

export async function fetchDays(): Promise<Day[]> {
  const res = await fetch("/api/days");
  if (!res.ok) throw new Error(await readError(res, "Couldn't load the itinerary."));
  return (await res.json()) as Day[];
}

/** Admin-only: persists the full itinerary. Throws on a bad/expired token or malformed data. */
export async function saveDays(token: string, days: Day[]): Promise<void> {
  const res = await fetch("/api/days", {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(days),
  });
  if (!res.ok) throw new Error(await readError(res, "Couldn't save the itinerary."));
}
