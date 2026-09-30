import { useMemo } from "react";
import { flattenBlocks, getTripStatus } from "../lib/schedule";
import type { Day, TripStatus } from "../types";
import { useNow } from "./useNow";

export function useTripStatus(days: Day[] | null): TripStatus | null {
  const now = useNow();
  const blocks = useMemo(() => (days ? flattenBlocks(days) : null), [days]);
  return useMemo(() => (blocks ? getTripStatus(blocks, now) : null), [blocks, now]);
}
