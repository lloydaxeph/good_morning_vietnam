import { useEffect, useState } from "react";

const TICK_MS = 30_000;

/**
 * Current time in ms, refreshed every 30s. `?now=<ISO date>` in the URL pins
 * the clock for testing, in dev and production alike.
 */
export function useNow(): number {
  const [override] = useState(() => {
    const raw = new URLSearchParams(window.location.search).get("now");
    const ms = raw ? Date.parse(raw) : NaN;
    return Number.isNaN(ms) ? null : ms;
  });
  const [now, setNow] = useState(() => override ?? Date.now());

  useEffect(() => {
    if (override !== null) return;
    const id = setInterval(() => setNow(Date.now()), TICK_MS);
    const onVisible = () => {
      if (document.visibilityState === "visible") setNow(Date.now());
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [override]);

  return now;
}
