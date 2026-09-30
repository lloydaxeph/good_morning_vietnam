import { useState } from "react";
import { useEdit } from "../features/itinerary/EditContext";
import type { Activity, City } from "../types";
import { ActivityDetailModal } from "./ActivityDetailModal";

interface ActivityCardProps {
  activity: Activity;
  city: City;
  dayIndex: number;
  blockIndex: number;
  activityIndex: number;
  activityCount: number;
  /** Greys out the card and blocks links when the plan isn't confirmed yet */
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
  const { editing, updateActivity, removeActivity } = useEdit();
  const [detailOpen, setDetailOpen] = useState(false);
  const googleImagesUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    `${activity.n} ${city} Vietnam`,
  )}`;
  const googleMapsUrl = activity.loc
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.loc)}`
    : null;

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
          <div className="flex items-center gap-2.5">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-black/[.06] flex-none">
              <img
                src={activity.thumb}
                alt=""
                onError={(e) => e.currentTarget.remove()}
                className="w-full h-full object-cover"
              />
            </div>
            <label className="flex items-center gap-1.5 text-[12.5px]">
              <input
                type="checkbox"
                checked={activity.slideshow ?? false}
                onChange={(e) => patch({ slideshow: e.target.checked || undefined })}
              />
              Show in home slideshow
            </label>
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
      className={`activity-card relative flex flex-wrap items-stretch gap-2.5 rounded-card p-3 mb-2.5 select-none ${
        disabled ? "opacity-50 grayscale cursor-not-allowed" : "cursor-pointer"
      }`}
      aria-disabled={disabled}
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
        {disabled ? (
          <div className="text-[15px] font-bold leading-tight">{activity.n}</div>
        ) : (
          <button
            type="button"
            onClick={() => setDetailOpen(true)}
            aria-haspopup="dialog"
            className="focus-ring self-start text-left text-[15px] font-bold leading-tight after:absolute after:inset-0 after:content-['']"
          >
            {activity.n}
          </button>
        )}
        <div className="text-[12.5px] leading-snug text-ink-soft">{activity.d}</div>
        <div className="relative z-10 flex items-center gap-2.5 flex-wrap">
          {googleMapsUrl && !disabled && (
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-more focus-ring self-start inline-block text-[12px] font-bold pb-px"
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
            >
              Visit Page 🌐
            </a>
          )}
          {!disabled && (
            <a
              href={googleImagesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-more focus-ring self-start inline-block text-[12px] font-bold pb-px"
            >
              See more images on Google →
            </a>
          )}
        </div>
      </div>
      {detailOpen && (
        <ActivityDetailModal
          activity={activity}
          googleMapsUrl={googleMapsUrl}
          googleImagesUrl={googleImagesUrl}
          onClose={() => setDetailOpen(false)}
        />
      )}
    </div>
  );
}
