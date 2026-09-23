import { Link } from "react-router-dom";
import { FooterBar } from "../../components/FooterBar";
import { itineraryLink } from "../../lib/itineraryLink";
import type { ScheduledBlock } from "../../types";

interface PrevNextFooterProps {
  prev: ScheduledBlock | null;
  next: ScheduledBlock | null;
}

function NeighbourCard({ entry, direction }: { entry: ScheduledBlock | null; direction: "prev" | "next" }) {
  if (!entry) return <div className="flex-1" aria-hidden="true" />;
  const isNext = direction === "next";
  return (
    <Link
      to={itineraryLink(entry.dayIndex, entry.blockIndex)}
      className={`focus-ring flex-1 min-w-0 flex flex-col gap-0.5 rounded-card bg-white border border-line shadow-card px-3 py-2.5 active:scale-[.98] ${
        isNext ? "text-right" : "text-left"
      }`}
    >
      <span className="text-[10px] tracking-[.14em] uppercase text-ink-soft">
        {isNext ? "Next ›" : "‹ Previous"}
      </span>
      <span className="text-[13px] font-bold leading-tight truncate">{entry.block.item.n}</span>
    </Link>
  );
}

export function PrevNextFooter({ prev, next }: PrevNextFooterProps) {
  return (
    <FooterBar>
      <nav aria-label="Previous and next activity" className="w-full px-4 flex gap-2.5 pointer-events-auto">
        <NeighbourCard entry={prev} direction="prev" />
        <NeighbourCard entry={next} direction="next" />
      </nav>
    </FooterBar>
  );
}
