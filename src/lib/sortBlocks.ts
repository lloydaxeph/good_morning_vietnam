import type { Day } from "../types";

/** Returns `days` with each day's blocks ordered by start time, then end time; ties keep their existing order. */
export function sortBlocksByTime(days: Day[]): Day[] {
  return days.map((day) => ({
    ...day,
    blocks: day.blocks
      .slice()
      .sort((a, b) => a.start.localeCompare(b.start) || a.end.localeCompare(b.end)),
  }));
}
