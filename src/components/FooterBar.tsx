import type { ReactNode } from "react";

/** Fixed bottom bar with the paper fade, shared by the itinerary pager and the prev/next footer. */
export function FooterBar({ children }: { children: ReactNode }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-1.5 pointer-events-none"
      style={{
        padding: "10px 0 calc(env(safe-area-inset-bottom, 0px) + 12px)",
        background: "linear-gradient(to top, rgba(247,243,234,.96) 60%, rgba(247,243,234,0))",
      }}
    >
      {children}
      <div className="w-full px-3 text-right text-[9px] text-ink-soft/60">
        © 2026 Axeos Technologies. All rights reserved.
      </div>
    </div>
  );
}
