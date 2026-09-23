import type { Day } from "../types";

interface TicketHeaderProps {
  day: Day;
  dayNumber: number;
}

export function TicketHeader({ day, dayNumber }: TicketHeaderProps) {
  return (
    <header className="ticket">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="font-mono text-[11px] tracking-[.22em] uppercase opacity-85">
            Day {dayNumber} · {day.date}
          </div>
          <div className="font-serif text-[26px] font-normal leading-tight mt-0.5">{day.nice}</div>
        </div>
        <div className="text-[13px] font-bold tracking-[.08em] uppercase bg-white/[.16] px-2.5 py-1.5 rounded-full">
          {day.city}
        </div>
      </div>
      <span className="punch punch-l" />
      <span className="punch punch-r" />
      <div className="font-mono mt-5 flex items-center justify-between text-xs tracking-[.1em] opacity-90">
        <b className="text-[13px] tracking-[.18em]">{day.route[0]}</b>
        <span aria-hidden="true">· · · ➤ · · ·</span>
        <b className="text-[13px] tracking-[.18em]">{day.route[1]}</b>
      </div>
    </header>
  );
}
