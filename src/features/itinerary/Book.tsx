import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from "react";
import { blockElementId } from "../../lib/itineraryLink";
import type { Day } from "../../types";
import { DayPage } from "./DayPage";

interface BookProps {
  days: Day[];
  initialIndex: number;
  /** 0-based block on the initial day to scroll to and highlight, or null for none */
  focusBlock: number | null;
  onPageChange: (index: number) => void;
}

export interface BookHandle {
  goTo: (index: number) => void;
}

/**
 * Horizontally swipeable day pages; opens at `initialIndex` without animation,
 * scrolled down to `focusBlock` on that day when given.
 */
export const Book = forwardRef<BookHandle, BookProps>(function Book(
  { days, initialIndex, focusBlock, onPageChange },
  ref,
) {
  const elRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = elRef.current;
    if (!el) return;
    el.scrollLeft = initialIndex * el.clientWidth;
    if (focusBlock === null) return;
    document
      .getElementById(blockElementId(initialIndex, focusBlock))
      ?.scrollIntoView({ block: "start", inline: "nearest" });
  }, [initialIndex, focusBlock]);

  useImperativeHandle(ref, () => ({
    goTo(index: number) {
      const el = elRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(days.length - 1, index));
      el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    },
  }));

  function handleScroll() {
    const el = elRef.current;
    if (!el) return;
    onPageChange(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <div
      ref={elRef}
      className="book no-scrollbar"
      aria-label="Itinerary pages, swipe left and right"
      onScroll={handleScroll}
    >
      {days.map((day, i) => (
        <DayPage
          key={day.date}
          day={day}
          dayIndex={i}
          highlightBlock={i === initialIndex ? focusBlock : null}
        />
      ))}
    </div>
  );
});
