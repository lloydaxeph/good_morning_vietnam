import { useCallback, useEffect, useState } from "react";
import { UnauthorizedError, adminLogin, fetchAdminMe } from "../../lib/adminApi";
import { clearAdminToken, getAdminToken, setAdminToken } from "../../lib/adminSession";

type SessionState =
  | { kind: "checking" }
  | { kind: "loggedOut" }
  | { kind: "loggedIn"; username: string }
  | { kind: "error"; message: string };

/** Admin login state: verifies a stored token on mount and exposes login/logout. */
export function useAdminSession() {
  const [state, setState] = useState<SessionState>(() =>
    getAdminToken() ? { kind: "checking" } : { kind: "loggedOut" },
  );

  useEffect(() => {
    const token = getAdminToken();
    if (!token) return;
    let cancelled = false;
    const verify = async () => {
      try {
        const username = await fetchAdminMe(token);
        if (!cancelled) setState({ kind: "loggedIn", username });
      } catch (err) {
        if (cancelled) return;
        if (err instanceof UnauthorizedError) {
          clearAdminToken();
          setState({ kind: "loggedOut" });
        } else {
          setState({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
        }
      }
    };
    verify();
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const token = await adminLogin(username, password);
    setAdminToken(token);
    setState({ kind: "loggedIn", username });
  }, []);

  const logout = useCallback(() => {
    clearAdminToken();
    setState({ kind: "loggedOut" });
  }, []);

  return { state, login, logout };
}
