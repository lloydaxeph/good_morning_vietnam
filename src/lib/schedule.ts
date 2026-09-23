import type { Day, ScheduledBlock, TripStatus } from "../types";

const VIETNAM_OFFSET = "+07:00";
const DAY_MS = 24 * 60 * 60 * 1000;
const WEEK_MS = 7 * DAY_MS;

function toMs(date: string, time: string): number {
  return new Date(`${date}T${time}:00${VIETNAM_OFFSET}`).getTime();
}

/** Every block across all days in itinerary order, with absolute start/end instants. */
export function flattenBlocks(days: Day[]): ScheduledBlock[] {
  return days.flatMap((day, dayIndex) =>
    day.blocks.map((block, blockIndex) => {
      const startMs = toMs(day.date, block.start);
      let endMs = toMs(day.date, block.end);
      if (endMs <= startMs) endMs += DAY_MS;
      return { dayIndex, blockIndex, startMs, endMs, day, block };
    }),
  );
}

/**
 * Where `nowMs` falls relative to the trip: weeks until it starts, finished,
 * or during it with the block to show (the current one, or the next one when
 * between blocks) plus its neighbours. `blocks` must be in chronological order.
 */
export function getTripStatus(blocks: ScheduledBlock[], nowMs: number): TripStatus {
  const first = blocks[0];
  const last = blocks[blocks.length - 1];
  if (!first || !last || nowMs >= last.endMs) return { kind: "after" };
  if (nowMs < first.startMs) {
    return { kind: "before", weeks: Math.max(1, Math.floor((first.startMs - nowMs) / WEEK_MS)) };
  }

  const index = blocks.findIndex((b) => nowMs < b.endMs);
  const shown = blocks[index];
  return {
    kind: "during",
    shown,
    isNow: nowMs >= shown.startMs,
    prev: blocks[index - 1] ?? null,
    next: blocks[index + 1] ?? null,
  };
}
