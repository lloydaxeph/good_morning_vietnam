export type City = "Hanoi" | "Sapa" | "Ninh Binh";

export interface Activity {
  n: string;
  d: string;
  im?: string[];
  loc?: string;
  thumb?: string;
  website?: string;
}

export interface TimeBlock {
  start: string;
  end: string;
  label: string;
  transit?: string;
  items: Activity[];
  confirmed?: boolean;
}

export interface Day {
  date: string;
  nice: string;
  city: City;
  route: [string, string];
  note: string;
  blocks: TimeBlock[];
}
