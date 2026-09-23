import { formatBlockTime } from "../lib/format";
import type { City, TimeBlock } from "../types";
import { ActivityCard } from "./ActivityCard";
import { TransitStrip } from "./TransitStrip";

interface TimeBlockSectionProps {
  block: TimeBlock;
  city: City;
  id?: string;
  /** Outlines the block, e.g. when it was opened from a link */
  highlighted?: boolean;
}

export function TimeBlockSection({ block, city, id, highlighted = false }: TimeBlockSectionProps) {
  return (
    <div
      id={id}
      className={`mt-[22px] scroll-mt-[calc(var(--safe-top)+76px)] ${
        highlighted ? "rounded-card outline outline-2 outline-offset-4 outline-[var(--accent)]" : ""
      }`}
    >
      <div className="block-head flex items-center gap-2.5 mb-2.5">
        <span className="time-chip font-mono text-xs font-bold tracking-wide rounded-lg px-2.5 py-1.5 whitespace-nowrap">
          {formatBlockTime(block)}
        </span>
        <span className="text-[13px] text-ink-soft">{block.label}</span>
      </div>
      {block.transit && <TransitStrip text={block.transit} />}
      <ActivityCard activity={block.item} city={city} />
    </div>
  );
}
