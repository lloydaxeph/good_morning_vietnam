import { CityPage } from "../../components/CityPage";
import { TicketHeader } from "../../components/TicketHeader";
import { TimeBlockSection } from "../../components/TimeBlockSection";
import { blockElementId } from "../../lib/itineraryLink";
import type { Day } from "../../types";
import { useEdit } from "./EditContext";

interface DayPageProps {
  day: Day;
  dayIndex: number;
  dayCount: number;
  /** 0-based block to highlight as the one linked to, or null for none */
  highlightBlock: number | null;
}

export function DayPage({ day, dayIndex, dayCount, highlightBlock }: DayPageProps) {
  const { editing, updateDay, addDay, removeDay, addBlock } = useEdit();

  return (
    <CityPage city={day.city}>
      <TicketHeader day={day} dayNumber={dayIndex + 1} editing={editing} onChange={(patch) => updateDay(dayIndex, patch)} />
      {editing ? (
        <textarea
          value={day.note}
          onChange={(e) => updateDay(dayIndex, { note: e.target.value })}
          placeholder="Day note (HTML <b> tags allowed)"
          rows={3}
          className="focus-ring w-full text-[13px] leading-relaxed text-ink-soft mt-3 mx-0.5 mb-1 rounded-lg border border-line p-2 bg-white"
        />
      ) : (
        <p
          className="text-[13px] leading-relaxed text-ink-soft mt-3 mx-0.5 mb-1 [&_b]:text-ink"
          dangerouslySetInnerHTML={{ __html: day.note }}
        />
      )}
      {day.blocks.map((block, blockIndex) => (
        <TimeBlockSection
          key={blockIndex}
          id={blockElementId(dayIndex, blockIndex)}
          block={block}
          city={day.city}
          dayIndex={dayIndex}
          blockIndex={blockIndex}
          blockCount={day.blocks.length}
          highlighted={blockIndex === highlightBlock}
        />
      ))}
      {editing && (
        <button
          type="button"
          onClick={() => addBlock(dayIndex, day.blocks.length - 1)}
          className="focus-ring w-full mt-3 min-h-10 rounded-lg border border-dashed border-line text-[12.5px] font-semibold text-ink-soft active:scale-[.98]"
        >
          + Add block
        </button>
      )}
      {editing && (
        <div className="flex gap-2 mt-4 mb-2">
          <button
            type="button"
            onClick={() => addDay(dayIndex)}
            className="focus-ring flex-1 min-h-10 rounded-lg border border-line text-[12.5px] font-semibold active:scale-[.98]"
          >
            + Add day after
          </button>
          {dayCount > 1 && (
            <button
              type="button"
              onClick={() => removeDay(dayIndex)}
              className="focus-ring flex-1 min-h-10 rounded-lg border border-han text-han-deep text-[12.5px] font-semibold active:scale-[.98]"
            >
              Delete this day
            </button>
          )}
        </div>
      )}
    </CityPage>
  );
}
