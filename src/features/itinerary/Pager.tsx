import { FooterBar } from "../../components/FooterBar";
import type { Day } from "../../types";

interface PagerProps {
  days: Day[];
  current: number;
  onGoTo: (index: number) => void;
}

export function Pager({ days, current, onGoTo }: PagerProps) {
  const atStart = current === 0;
  const atEnd = current === days.length - 1;

  return (
    <FooterBar>
      <div className="flex items-center gap-2 pointer-events-auto">
        <button
          type="button"
          aria-label="Previous day"
          disabled={atStart}
          onClick={() => onGoTo(current - 1)}
          className="pager-nav focus-ring flex items-center justify-center w-7 h-7 rounded-full text-[16px] font-bold leading-none disabled:opacity-30"
        >
          ‹
        </button>
        <div className="flex gap-[7px]" aria-hidden="true">
          {days.map((_, i) => (
            <span key={i} className={`dot ${i === current ? "on" : ""}`} />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next day"
          disabled={atEnd}
          onClick={() => onGoTo(current + 1)}
          className="pager-nav focus-ring flex items-center justify-center w-7 h-7 rounded-full text-[16px] font-bold leading-none disabled:opacity-30"
        >
          ›
        </button>
      </div>
      <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft" aria-live="polite">
        Day {current + 1} of {days.length} · {days[current]?.city}
      </div>
    </FooterBar>
  );
}
