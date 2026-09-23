async function readError(res: Response, fallback: string): Promise<string> {
  try {
    const body = (await res.json()) as { error?: string };
    return body.error ?? fallback;
  } catch {
    return fallback;
  }
}

export class UnauthorizedError extends Error {}

export async function adminLogin(username: string, password: string): Promise<string> {
  const res = await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error(await readError(res, "Login failed."));
  const body = (await res.json()) as { token: string };
  return body.token;
}

/** Resolves with the admin username; throws UnauthorizedError for a bad or expired token. */
export async function fetchAdminMe(token: string): Promise<string> {
  const res = await fetch("/api/admin/me", { headers: { Authorization: `Bearer ${token}` } });
  if (res.status === 401) throw new UnauthorizedError(await readError(res, "Not logged in."));
  if (!res.ok) throw new Error(await readError(res, "Couldn't reach the server."));
  const body = (await res.json()) as { username: string };
  return body.username;
}
