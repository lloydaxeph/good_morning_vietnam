import { Link } from "react-router-dom";
import { TransitStrip } from "../../components/TransitStrip";
import { formatBlockTime } from "../../lib/format";
import { itineraryLink } from "../../lib/itineraryLink";
import type { ScheduledBlock } from "../../types";

interface CurrentCardProps {
  entry: ScheduledBlock;
  isNow: boolean;
}

const linkClass =
  "relative z-10 focus-ring inline-flex items-center gap-1.5 min-h-11 px-4 rounded-full text-[13px] font-semibold border border-line bg-white text-[var(--accent-deep)] active:scale-[.97]";

/** Full-height hero card for the block shown on the Now page; clicking it opens that block in the itinerary. */
export function CurrentCard({ entry, isNow }: CurrentCardProps) {
  const { block, day, dayIndex, blockIndex } = entry;
  const { item } = block;
  const googleMapsUrl = item.loc
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.loc)}`
    : null;
  const googleImagesUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    `${item.n} ${day.city} Vietnam`,
  )}`;

  return (
    <article
      aria-labelledby="current-title"
      className="relative flex-1 min-h-0 flex flex-col rounded-card bg-white border-[1.5px] border-line shadow-card overflow-hidden transition-transform has-[.card-link:active]:scale-[.99]"
    >
      <div className="relative flex-none h-[38%] min-h-40 bg-[var(--tint)]">
        {item.thumb ? (
          <img
            src={item.thumb}
            alt=""
            onError={(e) => e.currentTarget.remove()}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl opacity-40" aria-hidden="true">
            🖼️
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full bg-[var(--accent)] text-paper text-[11px] font-bold tracking-[.14em] uppercase px-3 py-1.5 shadow-card">
          {isNow ? "Happening now" : "Up next"}
        </span>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar p-4 flex flex-col gap-3">
        <div className="font-mono text-[11px] tracking-[.18em] uppercase text-ink-soft">
          Day {dayIndex + 1} · {day.nice} · {day.city}
        </div>
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="time-chip font-mono text-xs font-bold tracking-wide rounded-lg px-2.5 py-1.5 whitespace-nowrap">
            {formatBlockTime(block)}
          </span>
          <span className="text-[13px] text-ink-soft">{block.label}</span>
        </div>
        <div>
          <h1 id="current-title" className="font-serif text-[26px] leading-tight">
            <Link
              to={itineraryLink(dayIndex, blockIndex)}
              className="card-link focus-ring after:absolute after:inset-0 after:content-['']"
            >
              {item.n}
            </Link>
          </h1>
          <p className="text-[14px] leading-relaxed text-ink-soft mt-1.5">{item.d}</p>
        </div>
        {block.transit && <TransitStrip text={block.transit} />}
        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {googleMapsUrl && (
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              📍 Maps
            </a>
          )}
          {item.website && (
            <a href={item.website} target="_blank" rel="noopener noreferrer" className={linkClass}>
              🌐 Website
            </a>
          )}
          <a href={googleImagesUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            🖼️ Photos
          </a>
        </div>
      </div>
    </article>
  );
}
