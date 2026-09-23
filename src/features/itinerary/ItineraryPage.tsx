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

function parseBlockParam(raw: string | null, dayIndex: number): number | null {
  const n = Number(raw);
  if (raw === null || !Number.isInteger(n) || n < 1 || n > DAYS[dayIndex].blocks.length) return null;
  return n - 1;
}

export default function ItineraryPage() {
  const [searchParams] = useSearchParams();
  const [initialIndex] = useState(() => parseDayParam(searchParams.get("day")));
  const [focusBlock] = useState(() => parseBlockParam(searchParams.get("block"), initialIndex));
  const [current, setCurrent] = useState(initialIndex);
  const bookRef = useRef<BookHandle>(null);

  return (
    <>
      <TopBar linkTo="/" linkLabel="Now" />
      <Book
        ref={bookRef}
        days={DAYS}
        initialIndex={initialIndex}
        focusBlock={focusBlock}
        onPageChange={setCurrent}
      />
      <Pager days={DAYS} current={current} onGoTo={(i) => bookRef.current?.goTo(i)} />
    </>
  );
}
