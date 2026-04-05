# JustOneMoreStep

![logo](public/justonemorestep-logo-design.png)

A deliberately frustrating April Fools app that weaponizes Google AI (Gemini) for overengineering.
It now behaves like a tiny satire product site with multiple pages and a floating top nav.

## What It Does

User asks a simple question, and the app responds with:

- A massive over-explained answer
- Endless unnecessary next steps
- Infinite terms and conditions
- AI-generated loading messages
- A fake completion loop that always restarts
- A dramatic non-2+2 doomsday warning mode

This project is intentionally useless and technically over-built.

## Pages And Navigation

- `/` Home: the main absurd "ask/loading/explain" experience.
- `/about`: the "AI dependency" satire page.
- `/services`: upcoming arithmetic services + fake venture rollout.

Top nav includes `Home`, `About`, and `Upcoming Services`, with active-route highlighting.

## AI-Driven Overengineering

Gemini is used in multiple places:

- `/api/explain` for absurdly long structured explanations
- `/api/terms` for infinite legal-ish clauses
- `/api/loading` for rotating loading messages
- `/api/steps` for meaningless "just one more step" instructions
- `/api/loop` for reasons why the process cannot end
- `/api/widgets` for floating background status chaos

## Stack

- Next.js (App Router) + React + TypeScript
- Google AI (Gemini API) via REST
- Custom CSS (single global stylesheet)

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env.local
```

Set your Gemini key in `.env.local`:

```env
GEMINI_API_KEY=...
GEMINI_MODEL=gemini-2.0-flash
GEMINI_ENABLE_FALLBACK=true
```

If Gemini quota is exhausted (HTTP 429), the app now automatically retries once and then switches to a local absurd fallback generator so the April Fools loop keeps running.

3. Start the app:

```bash
npm run dev
```

`npm run dev` clears `.next-dev` and runs with webpack cache disabled.
Production build still uses `.next` (`npm run build`).

If dev ever gets weird after many rapid changes, use:

```bash
npm run dev:clean
```

This clears both `.next` and `.next-dev` before starting dev.

Open `http://localhost:3000`.

## Suggested DEV Post Angle

Call it: **AI-driven overengineering**

Highlight that Gemini is used in 4+ places beyond answer generation, including loading UX, legal text generation, button labels, widget status, and loop orchestration.
