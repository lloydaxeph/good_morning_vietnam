export type City = "Hanoi" | "Sapa";

export interface Activity {
  n: string; // name
  d: string; // description
  im?: string[]; // image urls
  loc?: string; // Google Maps query or place link
  thumb?: string; // thumbnail image url
  website?: string; // official website url
}

export interface TimeBlock {
  /** "HH:mm", Vietnam time */
  start: string;
  /** "HH:mm", Vietnam time; an end at or before `start` means it ends the next day */
  end: string;
  label: string;
  transit?: string;
  item: Activity;
}

export interface Day {
  date: string;
  nice: string;
  city: City;
  route: [string, string];
  note: string;
  blocks: TimeBlock[];
}

export interface ScheduledBlock {
  dayIndex: number;
  blockIndex: number;
  startMs: number;
  endMs: number;
  day: Day;
  block: TimeBlock;
}

export type TripStatus =
  | { kind: "before"; weeks: number }
  | { kind: "after" }
  | {
      kind: "during";
      /** Block happening now, or the next upcoming one when between blocks */
      shown: ScheduledBlock;
      /** False when `shown` hasn't started yet (free time before it) */
      isNow: boolean;
      prev: ScheduledBlock | null;
      next: ScheduledBlock | null;
    };
