import { Link } from "react-router-dom";
import { TopBar } from "../../components/TopBar";
import { useDays } from "../../hooks/useDays";
import { useTripStatus } from "../../hooks/useTripStatus";
import { itineraryLink } from "../../lib/itineraryLink";
import { CurrentCard } from "./CurrentCard";
import { PhotoSlideshow } from "./PhotoSlideshow";
import { PrevNextFooter } from "./PrevNextFooter";
import { TripMessage } from "./TripMessage";

export default function NowPage() {
  const { state } = useDays();
  const days = state.kind === "ready" ? state.days : null;
  const status = useTripStatus(days);

  if (state.kind === "loading" || status === null) {
    return (
      <main className="h-dvh flex items-center justify-center px-6">
        <p className="text-[13px] text-ink-soft">Loading…</p>
      </main>
    );
  }

  if (state.kind === "error") {
    return (
      <main className="h-dvh flex items-center justify-center px-6">
        <p role="alert" className="text-[13px] text-han-deep">
          {state.message}
        </p>
      </main>
    );
  }

  if (status.kind === "before") {
    return (
      <TripMessage
        eyebrow="Vietnam 2026"
        title={`Upcoming Trip in ${status.weeks} ${status.weeks === 1 ? "week" : "weeks"}`}
        above={<PhotoSlideshow days={days ?? []} />}
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

  const cityClass = shown.day.city === "Sapa" ? "page-sapa" : shown.day.city === "Ninh Binh" ? "page-ninh" : "page-hanoi";

  return (
    <div className={`h-dvh animate-fade-in ${cityClass}`}>
      <TopBar linkTo={itineraryLink(shown.dayIndex)} linkLabel="Itinerary" />
      <main className="h-full flex flex-col px-4 pt-[calc(var(--safe-top)+68px)] pb-[calc(env(safe-area-inset-bottom,0px)+100px)]">
        <CurrentCard entry={shown} isNow={isNow} />
      </main>
      <PrevNextFooter prev={prev} next={next} />
    </div>
  );
}
