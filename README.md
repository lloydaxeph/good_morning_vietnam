# Good Morning Vietnam

Mobile-only, read-only trip calendar for Vietnam 2026 (Nov 5–11).

- `/` — what's happening right now (Vietnam time), with previous/next activity.
- `/itinerary` — swipeable day-by-day itinerary. `?day=N` opens day N.
- `/admin` — admin login; edit mode is a placeholder for now.

## Editing the itinerary

Edit [src/data/days.ts](src/data/days.ts). Each time block has exactly one `item`.
`start`/`end` are `"HH:mm"` in Vietnam time (UTC+7); an `end` at or before `start`
means the block runs past midnight into the next day. Put images in `public/images/`
and reference them as `/images/<file>`.

## Local development

```sh
cp .env.example .env   # fill in ADMIN_USERNAME, ADMIN_PASSWORD, SESSION_SECRET
npm install
npm run dev:server     # API on :3000
npm run dev            # Vite on :5173, proxies /api to :3000
```

Append `?now=2026-11-05T19:00%2B07:00` to `/` to pin the clock for testing (works in dev and production).

Production build: `npm run build && npm start` (serves `dist/` + API on `PORT`).

## Deploying to Railway

1. Push this repo to GitHub, then in Railway: **New Project → Deploy from GitHub repo**.
2. Railway detects Node and runs `npm run build` then `npm start`.
3. In the service's **Variables**, set:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - `SESSION_SECRET` — a long random string, e.g. `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
4. **Settings → Networking → Generate Domain** to get a public URL.

No database is needed yet.
