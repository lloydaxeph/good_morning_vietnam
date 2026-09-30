import type { ReactNode } from "react";
import { FooterBar } from "../../components/FooterBar";

interface TripMessageProps {
  eyebrow: string;
  title: string;
  above?: ReactNode;
  children?: ReactNode;
}

/** Centered minimal message for the before/after trip states. */
export function TripMessage({ eyebrow, title, above, children }: TripMessageProps) {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center gap-5 px-6 text-center page-hanoi animate-fade-in">
      {above}
      <div>
        <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft">{eyebrow}</div>
        <h1 className="font-serif text-[28px] leading-tight mt-1">{title}</h1>
      </div>
      {children}
      <FooterBar>{null}</FooterBar>
    </main>
  );
}
