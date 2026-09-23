import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TopBar } from "../../components/TopBar";
import { DAYS } from "../../data/days";
import { Book, type BookHandle } from "./Book";
import { Pager } from "./Pager";

function parseDayParam(raw: string | null): number {
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1) return 0;
  return Math.min(n, DAYS.length) - 1;
}

export default function ItineraryPage() {
  const [searchParams] = useSearchParams();
  const [initialIndex] = useState(() => parseDayParam(searchParams.get("day")));
  const [current, setCurrent] = useState(initialIndex);
  const bookRef = useRef<BookHandle>(null);

  return (
    <>
      <TopBar linkTo="/" linkLabel="Now" />
      <Book ref={bookRef} days={DAYS} initialIndex={initialIndex} onPageChange={setCurrent} />
      <Pager days={DAYS} current={current} onGoTo={(i) => bookRef.current?.goTo(i)} />
    </>
  );
}
