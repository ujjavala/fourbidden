*This is a submission for the [DEV April Fools Challenge](https://dev.to/challenges/aprilfools-2026)*

## What I Built
I built **Fourbidden**, a fake AI product dedicated to solving one extremely serious global problem: `2+2`.

The joke is that the problem could not be smaller, but the app treats it like the final summit of machine reasoning.

You ask a basic addition question, and instead of getting a basic addition answer, the app starts trying to **sum up** its own importance.

That means you get:

- AI-generated loading statements that sound suspiciously strategic
- circular explainers that get more philosophical and less useful over time
- escalating terms and conditions that keep turning arithmetic into a compliance event
- procedural next steps designed to preserve momentum without producing closure
- dashboard widgets, warnings, and theatrical system language
- surprise interactions like panic overlays, chaos toasts, prank label swaps, and a hidden Konami-style chaos mode

The T&C bit became one of my favorite parts of the whole thing.

The user is effectively told that before they can move closer to understanding `2+2`, they must first acknowledge expanding legal nonsense, accept more conditions, and agree to one more procedural step. Then another. Then another.

So the core gag is not just overengineering. It is **over-addition**: treating the smallest possible math question like a high-risk, high-governance product flow.

It is a satire of software that cannot simply give you the answer, because it is too busy building a whole process around the answer.

## Demo
- Live demo: https://ujjavala.github.io/fourbidden/
- Local version: `http://localhost:3000`
- Main routes:
  - Home: `/`
  - About: `/about`
  - Services: `/services`

## Code
- GitHub: https://github.com/ujjavala/fourbidden

Key route surface:

- `/api/explain`
- `/api/loading`
- `/api/terms`
- `/api/steps`
- `/api/loop`
- `/api/widgets`

## How I Built It
I wanted the app to feel like a glossy software product that exists entirely to avoid resolving `2+2` in a straightforward way.

So instead of making a single punchline screen, I built a full fake workflow around the idea of “solving” the problem while constantly refusing to complete it.

Tech stack:

- **Next.js 14 (App Router)**
- **React + TypeScript**
- **Google AI (Gemini API)** to generate the app's overblown explanations, loading copy, legal nonsense, escalation steps, loop logic, and widget chatter
- **Custom CSS** for the bright cinematic UI, orbit effects, shimmer, flashes, and overly dramatic motion
- **Lucide React** for icon-driven UI accents

Implementation choices that shape the vibe:

- The main joke is taking the tiniest math problem and inflating it into a full-stack event.
- The interface looks polished enough to imply a seed round and a brand strategy deck.
- The T&C flow is central to the bit: the user keeps having to consent to more nonsense before progress can allegedly continue.
- The text stays intentionally circular and jargon-heavy so the app never gives the satisfaction of a clean conclusion.
- The click surprises add a second layer of April Fools chaos on top of the main workflow.
- There is a static fallback path so the absurdity still works even when live AI calls are unavailable.

## How I Leveraged Google AI
Gemini is the narrative engine for the whole product illusion.

I did not use it as a single chatbot response. I split the experience into multiple AI-backed roles so each part of the fake platform has its own voice and function.

- `/api/explain`: produces long-form ceremonial non-answers
- `/api/loading`: turns waiting into executive messaging
- `/api/terms`: creates useless compliance clauses and acceptance loops around `2+2`
- `/api/steps`: invents process-heavy next actions
- `/api/loop`: explains why completion is still not operationally appropriate
- `/api/widgets`: generates fake platform telemetry and side-channel noise

To keep that experience stable, I added:

- prompt caching with a short TTL
- retry and backoff handling for quota and rate-limit failures
- local fallback generators when Gemini is unavailable
- client-side static mode for static hosting environments

That way the joke survives whether the AI is live, rate-limited, or completely absent.

## Prize Categories
**Best Google AI Usage**

Google AI is not just providing flavor text here. It is powering the entire illusion that a hopelessly overbuilt software stack has been assembled to “solve” a single grade-school math prompt. Every stage of that ridiculous journey gets its own AI-generated nonsense.

**Best Ode to Larry Masinter**

This app is proudly unnecessary. It manufactures protocol, ceremony, terms, gates, and pseudo-serious internet behavior around a task that should end instantly. It feels like the kind of thing that technically works while making arithmetic worse.

**Community Favorite**

I think the joke lands quickly: everyone understands `2+2`, and everyone also recognizes software that delivers process instead of outcomes. Combining those two ideas made it easy to build something immediate, silly, and annoyingly plausible.

If it makes people laugh and also mutter, "why does this feel plausible," then it did its job.
