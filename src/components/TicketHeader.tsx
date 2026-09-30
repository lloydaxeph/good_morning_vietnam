import type { City, Day } from "../types";

const CITIES: City[] = ["Hanoi", "Sapa", "Ninh Binh"];

interface TicketHeaderProps {
  day: Day;
  dayNumber: number;
  editing?: boolean;
  onChange?: (patch: Partial<Day>) => void;
}

export function TicketHeader({ day, dayNumber, editing = false, onChange }: TicketHeaderProps) {
  if (editing && onChange) {
    const fieldClass = "focus-ring rounded-md border border-white/30 bg-white/10 px-2 py-1 text-paper placeholder:text-paper/50";
    return (
      <header className="ticket">
        <div className="flex items-baseline justify-between gap-2">
          <div className="flex-1 min-w-0 flex flex-col gap-1.5">
            <div className="font-mono text-[11px] tracking-[.22em] uppercase opacity-85">Day {dayNumber}</div>
            <input
              type="date"
              value={day.date}
              onChange={(e) => onChange({ date: e.target.value })}
              className={`${fieldClass} text-[12px] font-mono`}
            />
            <input
              type="text"
              value={day.nice}
              onChange={(e) => onChange({ nice: e.target.value })}
              placeholder="Wed, Nov 4"
              className={`${fieldClass} font-serif text-[18px]`}
            />
          </div>
          <select
            value={day.city}
            onChange={(e) => onChange({ city: e.target.value as City })}
            className={`${fieldClass} text-[13px] font-bold uppercase`}
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <span className="punch punch-l" />
        <span className="punch punch-r" />
        <div className="font-mono mt-5 flex items-center gap-2 text-xs tracking-[.1em] opacity-90">
          <input
            type="text"
            value={day.route[0]}
            onChange={(e) => onChange({ route: [e.target.value, day.route[1]] })}
            placeholder="FROM"
            className={`${fieldClass} flex-1 min-w-0 text-[12px] tracking-[.14em] uppercase`}
          />
          <span aria-hidden="true">➤</span>
          <input
            type="text"
            value={day.route[1]}
            onChange={(e) => onChange({ route: [day.route[0], e.target.value] })}
            placeholder="TO"
            className={`${fieldClass} flex-1 min-w-0 text-[12px] tracking-[.14em] uppercase`}
          />
        </div>
      </header>
    );
  }

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
