import { Link } from "react-router-dom";

interface TopBarProps {
  linkTo: string;
  linkLabel: string;
}

export function TopBar({ linkTo, linkLabel }: TopBarProps) {
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between pointer-events-none"
      style={{
        padding: "calc(var(--safe-top) + 10px) 14px 10px 16px",
        background: "linear-gradient(to bottom, rgba(247,243,234,.96) 55%, rgba(247,243,234,0))",
      }}
    >
      <div className="pointer-events-auto">
        <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft">Vietnam 2026</div>
        <div className="text-[15px] font-bold font-serif">Good Morning Vietnam</div>
      </div>
      <Link
        to={linkTo}
        className="pointer-events-auto focus-ring flex items-center min-h-11 px-4 rounded-full bg-ink text-paper text-sm font-semibold tracking-wide shadow-card active:scale-[.97]"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
