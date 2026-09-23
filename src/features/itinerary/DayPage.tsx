import { CityPage } from "../../components/CityPage";
import { TicketHeader } from "../../components/TicketHeader";
import { TimeBlockSection } from "../../components/TimeBlockSection";
import type { Day } from "../../types";

interface DayPageProps {
  day: Day;
  dayIndex: number;
}

export function DayPage({ day, dayIndex }: DayPageProps) {
  return (
    <CityPage city={day.city}>
      <TicketHeader day={day} dayNumber={dayIndex + 1} />
      <p
        className="text-[13px] leading-relaxed text-ink-soft mt-3 mx-0.5 mb-1 [&_b]:text-ink"
        dangerouslySetInnerHTML={{ __html: day.note }}
      />
      {day.blocks.map((block, blockIndex) => (
        <TimeBlockSection key={blockIndex} block={block} city={day.city} />
      ))}
    </CityPage>
  );
}
