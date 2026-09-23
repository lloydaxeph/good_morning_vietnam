import type { TimeBlock } from "../types";

function formatClock(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const suffix = h < 12 ? "AM" : "PM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour12}${suffix}` : `${hour12}:${String(m).padStart(2, "0")}${suffix}`;
}

/** e.g. "6PM–10PM", or "11PM–6AM (next day)" for blocks crossing midnight. */
export function formatBlockTime(block: TimeBlock): string {
  const range = `${formatClock(block.start)}–${formatClock(block.end)}`;
  return block.end <= block.start ? `${range} (next day)` : range;
}
