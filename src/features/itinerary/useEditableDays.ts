import { useMemo, useState } from "react";
import type { Activity, Day, TimeBlock } from "../../types";
import type { EditApi } from "./EditContext";

const BLANK_ACTIVITY: Activity = { n: "New activity", d: "" };
const BLANK_BLOCK: TimeBlock = { start: "00:00", end: "00:00", label: "New block", items: [{ ...BLANK_ACTIVITY }] };
const BLANK_DAY: Day = {
  date: "2026-01-01",
  nice: "New day",
  city: "Hanoi",
  route: ["", ""],
  note: "",
  blocks: [{ ...BLANK_BLOCK, items: [{ ...BLANK_ACTIVITY }] }],
};

function insertAt<T>(arr: T[], index: number, item: T): T[] {
  const next = arr.slice();
  next.splice(index, 0, item);
  return next;
}

function removeAt<T>(arr: T[], index: number): T[] {
  return arr.filter((_, i) => i !== index);
}

/** Owns a local draft of `initial` and exposes an EditApi that mutates it immutably. */
export function useEditableDays(initial: Day[]) {
  const [draft, setDraft] = useState(initial);

  const editApi = useMemo<Omit<EditApi, "editing">>(
    () => ({
      updateDay(dayIndex, patch) {
        setDraft((days) => days.map((d, i) => (i === dayIndex ? { ...d, ...patch } : d)));
      },
      addDay(afterIndex) {
        setDraft((days) => insertAt(days, afterIndex + 1, { ...BLANK_DAY, blocks: [{ ...BLANK_BLOCK, items: [{ ...BLANK_ACTIVITY }] }] }));
      },
      removeDay(dayIndex) {
        setDraft((days) => (days.length > 1 ? removeAt(days, dayIndex) : days));
      },
      updateBlock(dayIndex, blockIndex, patch) {
        setDraft((days) =>
          days.map((d, i) =>
            i !== dayIndex ? d : { ...d, blocks: d.blocks.map((b, j) => (j === blockIndex ? { ...b, ...patch } : b)) },
          ),
        );
      },
      addBlock(dayIndex, afterIndex) {
        setDraft((days) =>
          days.map((d, i) =>
            i !== dayIndex
              ? d
              : { ...d, blocks: insertAt(d.blocks, afterIndex + 1, { ...BLANK_BLOCK, items: [{ ...BLANK_ACTIVITY }] }) },
          ),
        );
      },
      removeBlock(dayIndex, blockIndex) {
        setDraft((days) =>
          days.map((d, i) => (i !== dayIndex ? d : { ...d, blocks: removeAt(d.blocks, blockIndex) })),
        );
      },
      updateActivity(dayIndex, blockIndex, activityIndex, patch) {
        setDraft((days) =>
          days.map((d, i) =>
            i !== dayIndex
              ? d
              : {
                  ...d,
                  blocks: d.blocks.map((b, j) =>
                    j !== blockIndex
                      ? b
                      : { ...b, items: b.items.map((a, k) => (k === activityIndex ? { ...a, ...patch } : a)) },
                  ),
                },
          ),
        );
      },
      addActivity(dayIndex, blockIndex, afterIndex) {
        setDraft((days) =>
          days.map((d, i) =>
            i !== dayIndex
              ? d
              : {
                  ...d,
                  blocks: d.blocks.map((b, j) =>
                    j !== blockIndex ? b : { ...b, items: insertAt(b.items, afterIndex + 1, { ...BLANK_ACTIVITY }) },
                  ),
                },
          ),
        );
      },
      removeActivity(dayIndex, blockIndex, activityIndex) {
        setDraft((days) =>
          days.map((d, i) =>
            i !== dayIndex
              ? d
              : {
                  ...d,
                  blocks: d.blocks.map((b, j) =>
                    j !== blockIndex ? b : { ...b, items: b.items.length > 1 ? removeAt(b.items, activityIndex) : b.items },
                  ),
                },
          ),
        );
      },
    }),
    [],
  );

  return { draft, setDraft, editApi };
}
