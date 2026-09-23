import { useState } from "react";
import type { Activity, City } from "../types";
import { Gallery } from "./Gallery";

interface ActivityCardProps {
  activity: Activity;
  city: City;
}

export function ActivityCard({ activity, city }: ActivityCardProps) {
  const [expanded, setExpanded] = useState(false);
  const googleImagesUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    `${activity.n} ${city} Vietnam`,
  )}`;
  const googleMapsUrl = activity.loc
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.loc)}`
    : null;

  function toggleExpand() {
    setExpanded((v) => !v);
  }

  return (
    <div
      className={`activity-card focus-ring flex flex-wrap items-stretch gap-2.5 rounded-card p-3 mb-2.5 cursor-pointer select-none ${
        expanded ? "expanded" : ""
      }`}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onClick={toggleExpand}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleExpand();
        }
      }}
    >
      <div className="activity-thumb flex-none w-20 h-20 self-center rounded-lg overflow-hidden bg-black/[.06]">
        {activity.thumb ? (
          <img
            src={activity.thumb}
            alt=""
            loading="lazy"
            onError={(e) => e.currentTarget.remove()}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl opacity-40" aria-hidden="true">
            🖼️
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center gap-[3px]">
        <div className="text-[15px] font-bold leading-tight">{activity.n}</div>
        <div className="text-[12.5px] leading-snug text-ink-soft">{activity.d}</div>
        <div className="flex items-center gap-2.5 flex-wrap">
          {googleMapsUrl && (
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-more focus-ring self-start inline-block text-[12px] font-bold pb-px"
              onClick={(e) => e.stopPropagation()}
            >
              Open in maps 📍
            </a>
          )}
          {activity.website && (
            <a
              href={activity.website}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-more focus-ring self-start inline-block text-[12px] font-bold pb-px"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Page 🌐
            </a>
          )}
        </div>
      </div>

      {expanded && (
        <div className="basis-full">
          <Gallery name={activity.n} images={activity.im ?? []} googleImagesUrl={googleImagesUrl} />
        </div>
      )}

      <div
        className="expandbar basis-full flex items-center justify-center gap-1.5 min-h-[26px] -mx-3 -mb-3 mt-1.5 rounded-b-[12px]"
        aria-hidden="true"
      >
        <span className="text-[11px] font-semibold">Images</span>
        <span className="arrow text-[8px]">▼</span>
      </div>
    </div>
  );
}
