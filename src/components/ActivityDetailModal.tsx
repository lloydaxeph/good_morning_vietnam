import { useEffect, useRef } from "react";
import type { Activity } from "../types";

interface ActivityDetailModalProps {
  activity: Activity;
  googleMapsUrl: string | null;
  googleImagesUrl: string;
  onClose: () => void;
}

const linkClass = "gallery-more focus-ring inline-block text-[13px] font-bold pb-px";

/** Modal card with the full details of an activity; closes on Esc, backdrop click or the close button */
export function ActivityDetailModal({
  activity,
  googleMapsUrl,
  googleImagesUrl,
  onClose,
}: ActivityDetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="activity-modal-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-md max-h-[85vh] overflow-y-auto rounded-card border border-line bg-white p-0 text-ink shadow-xl backdrop:bg-black/50"
    >
      <div className="relative flex flex-col">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close"
          className="focus-ring absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-lg text-white active:scale-95"
        >
          ✕
        </button>
        {activity.thumb && (
          <img
            src={activity.thumb}
            alt=""
            onError={(e) => e.currentTarget.remove()}
            className="h-52 w-full object-cover"
          />
        )}
        <div className="flex flex-col gap-2 p-4">
          <h2 id="activity-modal-title" className="text-lg font-bold leading-tight">
            {activity.n}
          </h2>
          <p className="text-[14px] leading-relaxed text-ink-soft">{activity.d}</p>
          {activity.loc && <p className="text-[12.5px] text-ink-soft">📍 {activity.loc}</p>}
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
            {googleMapsUrl && (
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Open in maps 📍
              </a>
            )}
            {activity.website && (
              <a href={activity.website} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Visit Page 🌐
              </a>
            )}
            <a href={googleImagesUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              See more images on Google →
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
