import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TopBar } from "../../components/TopBar";
import { useAdminSession } from "../admin/useAdminSession";
import { useDays } from "../../hooks/useDays";
import { getAdminToken } from "../../lib/adminSession";
import { saveDays } from "../../lib/daysApi";
import type { Day } from "../../types";
import { Book, type BookHandle } from "./Book";
import { EditProvider } from "./EditContext";
import { Pager } from "./Pager";
import { useEditableDays } from "./useEditableDays";

function parseDayParam(raw: string | null, dayCount: number): number {
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1) return 0;
  return Math.min(n, dayCount) - 1;
}

function parseBlockParam(raw: string | null, day: Day | undefined): number | null {
  const n = Number(raw);
  if (raw === null || !day || !Number.isInteger(n) || n < 1 || n > day.blocks.length) return null;
  return n - 1;
}

export default function ItineraryPage() {
  const [searchParams] = useSearchParams();
  const { state: sessionState } = useAdminSession();
  const { state: daysState, setDays } = useDays();
  const isAdmin = sessionState.kind === "loggedIn";

  const days = daysState.kind === "ready" ? daysState.days : null;
  const [initialIndex] = useState(() => parseDayParam(searchParams.get("day"), days?.length ?? 1));
  const [focusBlock] = useState(() => parseBlockParam(searchParams.get("block"), days?.[initialIndex]));
  const [current, setCurrent] = useState(initialIndex);
  const bookRef = useRef<BookHandle>(null);

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const { draft, setDraft, editApi } = useEditableDays(days ?? []);

  useEffect(() => {
    if (days && !editing) setDraft(days);
  }, [days, editing, setDraft]);

  if (daysState.kind === "loading") {
    return (
      <main className="min-h-dvh flex items-center justify-center px-6">
        <p className="text-[13px] text-ink-soft">Loading…</p>
      </main>
    );
  }

  if (daysState.kind === "error" || !days) {
    return (
      <main className="min-h-dvh flex items-center justify-center px-6">
        <p role="alert" className="text-[13px] text-han-deep">
          {daysState.kind === "error" ? daysState.message : "Couldn't load the itinerary."}
        </p>
      </main>
    );
  }

  const shownDays = editing ? draft : days;

  async function handleEditToggle() {
    if (!editing) {
      setDraft(days!);
      setSaveError(null);
      setEditing(true);
      return;
    }
    const token = getAdminToken();
    if (!token) {
      setSaveError("Not logged in.");
      return;
    }
    setSaving(true);
    setSaveError(null);
    try {
      await saveDays(token, draft);
      setDays(draft);
      setEditing(false);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Couldn't save.");
    } finally {
      setSaving(false);
    }
  }

  function handleCancel() {
    setDraft(days!);
    setEditing(false);
    setSaveError(null);
  }

  return (
    <EditProvider value={{ editing, ...editApi }}>
      <TopBar linkTo="/" linkLabel="Now" />
      <Book
        ref={bookRef}
        days={shownDays}
        initialIndex={initialIndex}
        focusBlock={focusBlock}
        onPageChange={setCurrent}
      />
      <Pager
        days={shownDays}
        current={current}
        onGoTo={(i) => bookRef.current?.goTo(i)}
        isAdmin={isAdmin}
        editing={editing}
        saving={saving}
        saveError={saveError}
        onEditToggle={handleEditToggle}
        onCancel={handleCancel}
      />
    </EditProvider>
  );
}
