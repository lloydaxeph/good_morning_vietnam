import { FooterBar } from "../../components/FooterBar";
import type { Day } from "../../types";

interface PagerProps {
  days: Day[];
  current: number;
  onGoTo: (index: number) => void;
  isAdmin: boolean;
  editing: boolean;
  saving: boolean;
  saveError: string | null;
  onEditToggle: () => void;
  onCancel: () => void;
}

export function Pager({
  days,
  current,
  onGoTo,
  isAdmin,
  editing,
  saving,
  saveError,
  onEditToggle,
  onCancel,
}: PagerProps) {
  const atStart = current === 0;
  const atEnd = current === days.length - 1;

  return (
    <FooterBar>
      {isAdmin && (
        <div className="flex items-center gap-2 pointer-events-auto">
          {editing && (
            <button
              type="button"
              onClick={onCancel}
              disabled={saving}
              className="focus-ring flex items-center min-h-9 px-3.5 rounded-full border border-line text-[12.5px] font-semibold active:scale-[.97] disabled:opacity-60"
            >
              Cancel
            </button>
          )}
          <button
            type="button"
            onClick={onEditToggle}
            disabled={saving}
            className="focus-ring flex items-center min-h-9 px-4 rounded-full bg-ink text-paper text-[12.5px] font-semibold tracking-wide shadow-card active:scale-[.97] disabled:opacity-60"
          >
            {saving ? "Saving…" : editing ? "Save" : "Edit"}
          </button>
        </div>
      )}
      {saveError && (
        <p role="alert" className="text-[11px] text-han-deep px-4 text-center">
          {saveError}
        </p>
      )}
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
