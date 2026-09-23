interface GalleryProps {
  name: string;
  images: string[];
  googleImagesUrl: string;
}

export function Gallery({ name, images, googleImagesUrl }: GalleryProps) {
  return (
    <div className="pt-2.5 border-t border-dashed border-line">
      {images.length === 0 && (
        <div className="text-xs mb-2 text-ink-soft">No photos for this one — try the link below.</div>
      )}
      <div className="gallery-imgs no-scrollbar flex gap-1.5 overflow-x-auto -mx-3 px-3">
        {images.map((src, i) => (
          <img
            key={i}
            loading="lazy"
            alt={name}
            src={src}
            onError={(e) => e.currentTarget.remove()}
            className="flex-none w-[150px] h-[110px] object-cover rounded-lg bg-black/[.08]"
          />
        ))}
      </div>
      <a
        className="gallery-more focus-ring inline-block mt-2.5 text-[12.5px] font-bold pb-px"
        href={googleImagesUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        See more on Google Images →
      </a>
    </div>
  );
}
