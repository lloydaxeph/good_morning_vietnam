import { CityPage } from "../../components/CityPage";
import { TicketHeader } from "../../components/TicketHeader";
import { TimeBlockSection } from "../../components/TimeBlockSection";
import { blockElementId } from "../../lib/itineraryLink";
import type { Day } from "../../types";

interface DayPageProps {
  day: Day;
  dayIndex: number;
  /** 0-based block to highlight as the one linked to, or null for none */
  highlightBlock: number | null;
}

export function DayPage({ day, dayIndex, highlightBlock }: DayPageProps) {
  return (
    <CityPage city={day.city}>
      <TicketHeader day={day} dayNumber={dayIndex + 1} />
      <p
        className="text-[13px] leading-relaxed text-ink-soft mt-3 mx-0.5 mb-1 [&_b]:text-ink"
        dangerouslySetInnerHTML={{ __html: day.note }}
      />
      {day.blocks.map((block, blockIndex) => (
        <TimeBlockSection
          key={blockIndex}
          id={blockElementId(dayIndex, blockIndex)}
          block={block}
          city={day.city}
          highlighted={blockIndex === highlightBlock}
        />
      ))}
    </CityPage>
  );
}
