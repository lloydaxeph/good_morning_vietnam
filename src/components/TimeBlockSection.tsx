import { useEdit } from "../features/itinerary/EditContext";
import { formatBlockTime } from "../lib/format";
import type { City, TimeBlock } from "../types";
import { ActivityCard } from "./ActivityCard";
import { TransitStrip } from "./TransitStrip";

interface TimeBlockSectionProps {
  block: TimeBlock;
  city: City;
  dayIndex: number;
  blockIndex: number;
  blockCount: number;
  id?: string;
  /** Outlines the block, e.g. when it was opened from a link */
  highlighted?: boolean;
}

export function TimeBlockSection({
  block,
  city,
  dayIndex,
  blockIndex,
  blockCount,
  id,
  highlighted = false,
}: TimeBlockSectionProps) {
  const { editing, updateBlock, removeBlock, addActivity } = useEdit();
  const confirmed = block.confirmed !== false;

  return (
    <div
      id={id}
      className={`mt-[22px] scroll-mt-[calc(var(--safe-top)+76px)] ${
        highlighted ? "rounded-card outline outline-2 outline-offset-4 outline-[var(--accent)]" : ""
      }`}
    >
      {editing ? (
        <div className="flex flex-col gap-1.5 mb-2.5 rounded-lg border border-line bg-white p-2.5">
          <div className="flex items-center gap-1.5">
            <input
              type="time"
              value={block.start}
              onChange={(e) => updateBlock(dayIndex, blockIndex, { start: e.target.value })}
              className="focus-ring rounded-md border border-line px-1.5 py-1 text-xs font-mono"
            />
            <span className="text-xs text-ink-soft">to</span>
            <input
              type="time"
              value={block.end}
              onChange={(e) => updateBlock(dayIndex, blockIndex, { end: e.target.value })}
              className="focus-ring rounded-md border border-line px-1.5 py-1 text-xs font-mono"
            />
            <label className="ml-auto flex items-center gap-1.5 text-[11px] text-ink-soft">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => updateBlock(dayIndex, blockIndex, { confirmed: e.target.checked })}
              />
              Confirmed
            </label>
          </div>
          <input
            type="text"
            value={block.label}
            onChange={(e) => updateBlock(dayIndex, blockIndex, { label: e.target.value })}
            placeholder="Block label"
            className="focus-ring rounded-md border border-line px-2 py-1.5 text-[13px]"
          />
          <input
            type="text"
            value={block.transit ?? ""}
            onChange={(e) => updateBlock(dayIndex, blockIndex, { transit: e.target.value || undefined })}
            placeholder="Transit note (optional, emoji first)"
            className="focus-ring rounded-md border border-line px-2 py-1.5 text-[13px]"
          />
          {blockCount > 1 && (
            <button
              type="button"
              onClick={() => removeBlock(dayIndex, blockIndex)}
              className="focus-ring self-end mt-1 text-[11px] font-semibold text-han-deep active:scale-[.97]"
            >
              Delete block
            </button>
          )}
        </div>
      ) : (
        <div className="block-head flex items-center gap-2.5 mb-2.5">
          <span className="time-chip font-mono text-xs font-bold tracking-wide rounded-lg px-2.5 py-1.5 whitespace-nowrap">
            {formatBlockTime(block)}
          </span>
          <span className="text-[13px] text-ink-soft">{block.label}</span>
        </div>
      )}
      {(block.transit || editing) && !editing && <TransitStrip text={block.transit!} />}
      {block.items.map((activity, i) => (
        <ActivityCard
          key={i}
          activity={activity}
          city={city}
          dayIndex={dayIndex}
          blockIndex={blockIndex}
          activityIndex={i}
          activityCount={block.items.length}
          disabled={!confirmed && !editing}
        />
      ))}
      {editing && (
        <button
          type="button"
          onClick={() => addActivity(dayIndex, blockIndex, block.items.length - 1)}
          className="focus-ring w-full min-h-9 rounded-lg border border-dashed border-line text-[12px] font-semibold text-ink-soft active:scale-[.98]"
        >
          + Add activity
        </button>
      )}
    </div>
  );
}
