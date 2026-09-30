import { useCallback, useEffect, useState } from "react";
import { fetchDays } from "../lib/daysApi";
import type { Day } from "../types";

type DaysState =
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "ready"; days: Day[] };

/** Loads the itinerary from the server; `setDays` lets callers apply an already-saved edit locally. */
export function useDays() {
  const [state, setState] = useState<DaysState>({ kind: "loading" });

  const reload = useCallback(async () => {
    setState({ kind: "loading" });
    try {
      const days = await fetchDays();
      setState({ kind: "ready", days });
    } catch (err) {
      setState({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const setDays = useCallback((days: Day[]) => {
    setState({ kind: "ready", days });
  }, []);

  return { state, reload, setDays };
}
