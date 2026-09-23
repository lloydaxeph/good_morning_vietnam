interface TransitStripProps {
  text: string;
}

/** Dashed note above a block; a leading emoji (text before the first space) is shown as the icon. */
export function TransitStrip({ text }: TransitStripProps) {
  const spaceIdx = text.indexOf(" ");
  const first = spaceIdx > 0 ? text.slice(0, spaceIdx) : "";
  const hasIcon = /\p{Extended_Pictographic}/u.test(first);
  const icon = hasIcon ? first : "";
  const rest = hasIcon ? text.slice(spaceIdx + 1) : text;
  return (
    <div className="transit flex gap-2.5 items-start rounded-card px-3.5 py-3 text-[13.5px] leading-relaxed mb-2.5">
      {icon && <span className="text-base leading-tight">{icon}</span>}
      <span>{rest}</span>
    </div>
  );
}
