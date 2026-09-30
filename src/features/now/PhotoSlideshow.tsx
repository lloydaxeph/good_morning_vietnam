import { useEffect, useMemo, useState } from "react";
import type { Day } from "../../types";

interface PhotoSlideshowProps {
  days: Day[];
}

const INTERVAL_MS = 3000;

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function collectPhotoUrls(days: Day[]): string[] {
  const urls: string[] = [];
  for (const day of days) {
    for (const block of day.blocks) {
      for (const item of block.items) {
        if (item.thumb) urls.push(item.thumb);
      }
    }
  }
  return urls;
}

/** Slowly crossfading slideshow of trip photo thumbnails, shown before the trip starts. */
export function PhotoSlideshow({ days }: PhotoSlideshowProps) {
  const photos = useMemo(() => shuffle(Array.from(new Set(collectPhotoUrls(days)))), [days]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [photos.length]);

  if (photos.length === 0) return null;

  return (
    <div className="relative w-full max-w-xs aspect-square rounded-card overflow-hidden shadow-card bg-black/[.06]">
      {photos.map((url, i) => (
        <img
          key={url}
          src={url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
          style={{
            opacity: i === index ? 1 : 0,
            transitionDuration: "1500ms",
          }}
        />
      ))}
    </div>
  );
}
