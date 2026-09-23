import { useMemo } from "react";
import { DAYS } from "../data/days";
import { flattenBlocks, getTripStatus } from "../lib/schedule";
import type { TripStatus } from "../types";
import { useNow } from "./useNow";

const BLOCKS = flattenBlocks(DAYS);

export function useTripStatus(): TripStatus {
  const now = useNow();
  return useMemo(() => getTripStatus(BLOCKS, now), [now]);
}
