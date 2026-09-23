import { formatBlockTime } from "../lib/format";
import type { City, TimeBlock } from "../types";
import { ActivityCard } from "./ActivityCard";
import { TransitStrip } from "./TransitStrip";

interface TimeBlockSectionProps {
  block: TimeBlock;
  city: City;
}

export function TimeBlockSection({ block, city }: TimeBlockSectionProps) {
  return (
    <div className="mt-[22px]">
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
