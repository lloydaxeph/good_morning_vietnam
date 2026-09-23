import { Link } from "react-router-dom";

interface EditPlaceholderProps {
  username: string;
  onLogout: () => void;
}

export function EditPlaceholder({ username, onLogout }: EditPlaceholderProps) {
  return (
    <div className="w-full max-w-[340px] rounded-card bg-white border border-line shadow-card p-6 flex flex-col gap-4">
      <div>
        <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft">Signed in as {username}</div>
        <h1 className="text-xl font-bold font-serif">Edit mode</h1>
        <p className="text-[13px] text-ink-soft mt-1">Coming soon.</p>
      </div>
      <div className="flex gap-3">
        <Link
          to="/"
          className="focus-ring flex-1 flex items-center justify-center min-h-11 rounded-full border border-line text-sm font-semibold active:scale-[.97]"
        >
          Back to app
        </Link>
        <button
          type="button"
          onClick={onLogout}
          className="focus-ring flex-1 min-h-11 rounded-full bg-ink text-paper text-sm font-semibold shadow-card active:scale-[.97]"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
