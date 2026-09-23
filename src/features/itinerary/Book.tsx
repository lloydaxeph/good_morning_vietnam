import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from "react";
import type { Day } from "../../types";
import { DayPage } from "./DayPage";

interface BookProps {
  days: Day[];
  initialIndex: number;
  onPageChange: (index: number) => void;
}

export interface BookHandle {
  goTo: (index: number) => void;
}

/** Horizontally swipeable day pages; opens at `initialIndex` without animation. */
export const Book = forwardRef<BookHandle, BookProps>(function Book(
  { days, initialIndex, onPageChange },
  ref,
) {
  const elRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = elRef.current;
    if (el) el.scrollLeft = initialIndex * el.clientWidth;
  }, [initialIndex]);

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
        <DayPage key={day.date} day={day} dayIndex={i} />
      ))}
    </div>
  );
});
