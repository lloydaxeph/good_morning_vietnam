import { Link } from "react-router-dom";
import { CityPage } from "../../components/CityPage";
import { TicketHeader } from "../../components/TicketHeader";
import { TimeBlockSection } from "../../components/TimeBlockSection";
import { TopBar } from "../../components/TopBar";
import { useTripStatus } from "../../hooks/useTripStatus";
import { itineraryLink } from "../../lib/itineraryLink";
import { PrevNextFooter } from "./PrevNextFooter";
import { TripMessage } from "./TripMessage";

export default function NowPage() {
  const status = useTripStatus();

  if (status.kind === "before") {
    return (
      <TripMessage
        eyebrow="Vietnam 2026"
        title={`Upcoming Trip in ${status.weeks} ${status.weeks === 1 ? "week" : "weeks"}`}
      >
        <Link
          to={itineraryLink(0)}
          className="focus-ring flex items-center min-h-11 px-5 rounded-full bg-han hover:bg-han-deep text-paper text-sm font-semibold tracking-wide shadow-card active:scale-[.97]"
        >
          View itinerary
        </Link>
      </TripMessage>
    );
  }

  if (status.kind === "after") {
    return (
      <TripMessage eyebrow="Vietnam 2026" title="The trip is done. Want to look back?">
        <Link
          to={itineraryLink(0)}
          className="focus-ring flex items-center min-h-11 px-5 rounded-full bg-han hover:bg-han-deep text-paper text-sm font-semibold tracking-wide shadow-card active:scale-[.97]"
        >
          Look back at Day 1
        </Link>
      </TripMessage>
    );
  }

  const { shown, isNow, prev, next } = status;

  return (
    <div className="h-dvh animate-fade-in">
      <TopBar linkTo={itineraryLink(shown.dayIndex)} linkLabel="Itinerary" />
      <CityPage city={shown.day.city}>
        <TicketHeader day={shown.day} dayNumber={shown.dayIndex + 1} />
        <div className="mt-5 -mb-3 text-[11px] tracking-[.14em] uppercase text-ink-soft">
          {isNow ? "Happening now" : "Free time · Up next"}
        </div>
        <TimeBlockSection block={shown.block} city={shown.day.city} />
      </CityPage>
      <PrevNextFooter prev={prev} next={next} />
    </div>
  );
}
