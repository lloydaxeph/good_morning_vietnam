import { useState, type FormEvent } from "react";

interface LoginFormProps {
  onLogin: (username: string, password: string) => Promise<void>;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await onLogin(username.trim(), password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
      setBusy(false);
    }
  }

  const inputClass = "focus-ring min-h-11 px-3.5 rounded-xl border border-line bg-paper text-[15px]";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[340px] rounded-card bg-white border border-line shadow-card p-6 flex flex-col gap-4"
    >
      <div>
        <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft">Good Morning Vietnam</div>
        <h1 className="text-xl font-bold font-serif">Admin login</h1>
      </div>
      <input
        autoFocus
        type="text"
        autoComplete="username"
        autoCapitalize="none"
        placeholder="Username"
        aria-label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={inputClass}
      />
      <input
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        aria-label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={inputClass}
      />
      {error && (
        <p role="alert" className="text-[13px] text-han-deep">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={busy || !username.trim() || !password}
        className="focus-ring min-h-11 rounded-full bg-ink text-paper text-sm font-semibold tracking-wide shadow-card active:scale-[.97] disabled:opacity-60"
      >
        {busy ? "Checking…" : "Log in"}
      </button>
    </form>
  );
}
