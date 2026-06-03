// Auth simple via Basic Auth — password = WEBHOOK_SECRET
// username peut être n'importe quoi (ex: "admin")

export function requireAuth(req: Request, secret: string): Response | null {
  const auth = req.headers.get("authorization") || "";
  if (!auth.startsWith("Basic ")) return unauthorized();
  try {
    const decoded = atob(auth.slice(6));
    const pwd = decoded.split(":", 2)[1] || "";
    if (timingSafeEqual(pwd, secret)) return null;
  } catch { /* fallthrough */ }
  return unauthorized();
}

function unauthorized(): Response {
  return new Response("Auth required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="opti-cds-admin"' },
  });
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
