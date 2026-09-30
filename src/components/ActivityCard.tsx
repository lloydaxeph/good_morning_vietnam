import { useState } from "react";
import { useEdit } from "../features/itinerary/EditContext";
import type { Activity, City } from "../types";
import { Gallery } from "./Gallery";

interface ActivityCardProps {
  activity: Activity;
  city: City;
  dayIndex: number;
  blockIndex: number;
  activityIndex: number;
  activityCount: number;
  /** Greys out the card and blocks expand/links when the plan isn't confirmed yet */
  disabled?: boolean;
}

export function ActivityCard({
  activity,
  city,
  dayIndex,
  blockIndex,
  activityIndex,
  activityCount,
  disabled = false,
}: ActivityCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { editing, updateActivity, removeActivity } = useEdit();
  const googleImagesUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    `${activity.n} ${city} Vietnam`,
  )}`;
  const googleMapsUrl = activity.loc
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.loc)}`
    : null;

  function toggleExpand() {
    if (disabled) return;
    setExpanded((v) => !v);
  }

  function patch(fields: Partial<Activity>) {
    updateActivity(dayIndex, blockIndex, activityIndex, fields);
  }

  if (editing) {
    const fieldClass = "focus-ring w-full rounded-md border border-line px-2 py-1.5 text-[13px]";
    return (
      <div className="rounded-card p-3 mb-2.5 border border-line bg-white flex flex-col gap-1.5">
        <input
          type="text"
          value={activity.n}
          onChange={(e) => patch({ n: e.target.value })}
          placeholder="Name"
          className={`${fieldClass} font-bold`}
        />
        <textarea
          value={activity.d}
          onChange={(e) => patch({ d: e.target.value })}
          placeholder="Description"
          rows={2}
          className={fieldClass}
        />
        <input
          type="text"
          value={activity.loc ?? ""}
          onChange={(e) => patch({ loc: e.target.value || undefined })}
          placeholder="Location (optional)"
          className={fieldClass}
        />
        <input
          type="text"
          value={activity.website ?? ""}
          onChange={(e) => patch({ website: e.target.value || undefined })}
          placeholder="Website (optional)"
          className={fieldClass}
        />
        <input
          type="text"
          value={activity.thumb ?? ""}
          onChange={(e) => patch({ thumb: e.target.value || undefined })}
          placeholder="Photo URL (optional)"
          className={fieldClass}
        />
        {activity.thumb && (
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-black/[.06]">
            <img
              src={activity.thumb}
              alt=""
              onError={(e) => e.currentTarget.remove()}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {activityCount > 1 && (
          <button
            type="button"
            onClick={() => removeActivity(dayIndex, blockIndex, activityIndex)}
            className="focus-ring self-end text-[11px] font-semibold text-han-deep active:scale-[.97]"
          >
            Delete activity
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`activity-card focus-ring flex flex-wrap items-stretch gap-2.5 rounded-card p-3 mb-2.5 select-none ${
        disabled ? "opacity-50 grayscale cursor-not-allowed" : "cursor-pointer"
      } ${expanded ? "expanded" : ""}`}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-expanded={expanded}
      aria-disabled={disabled}
      onClick={toggleExpand}
      onKeyDown={(e) => {
        if (disabled) return;
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
          {googleMapsUrl && !disabled && (
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
          {activity.website && !disabled && (
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

      {expanded && !disabled && (
        <div className="basis-full">
          <Gallery name={activity.n} images={activity.im ?? []} googleImagesUrl={googleImagesUrl} />
        </div>
      )}

      {!disabled && (
      <div
        className="expandbar basis-full flex items-center justify-center gap-1.5 min-h-[26px] -mx-3 -mb-3 mt-1.5 rounded-b-[12px]"
        aria-hidden="true"
      >
        <span className="text-[11px] font-semibold">Images</span>
        <span className="arrow text-[8px]">▼</span>
      </div>
      )}
    </div>
  );
}
