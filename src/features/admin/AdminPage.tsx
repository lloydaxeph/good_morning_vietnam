import { EditPlaceholder } from "./EditPlaceholder";
import { LoginForm } from "./LoginForm";
import { useAdminSession } from "./useAdminSession";

export default function AdminPage() {
  const { state, login, logout } = useAdminSession();

  return (
    <main className="min-h-dvh flex items-center justify-center px-6">
      {state.kind === "checking" && <p className="text-[13px] text-ink-soft">Checking session…</p>}
      {state.kind === "error" && (
        <p role="alert" className="text-[13px] text-han-deep">
          {state.message}
        </p>
      )}
      {state.kind === "loggedOut" && <LoginForm onLogin={login} />}
      {state.kind === "loggedIn" && <EditPlaceholder username={state.username} onLogout={logout} />}
    </main>
  );
}
