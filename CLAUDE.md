# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev         # Next.js dev server (default http://localhost:3000)
npm run build       # Production build
npm run start       # Run built output
npm run lint        # next lint
npm run typecheck   # tsc --noEmit — run this before every commit
```

The alerts monitor boots automatically when `npm run dev` or `npm run start` starts — it's not a separate process. Disable with `DISABLE_MONITOR=1`.

## Architecture

SignalForge is a **single-user, local-storage** AI trading analyst. There is no database and no auth — all state lives in two JSON files (`data/settings.json`, `data/alerts.json`, both gitignored). Everything runs in one Next.js 15 process.

### The three axes of the system

```
 USER INPUT (chat / screenshot / scan)
        │  costs OpenAI tokens
        ▼
 ┌─────────────────────────────────┐
 │   AI pipeline (on-demand)       │   src/lib/signal-engine.ts
 │   gpt-4.1 + tool-calling loop   │   src/app/api/signal/route.ts
 │   returns Signal + alertTriggers│   src/app/api/scan/route.ts
 └──────────────┬──────────────────┘
                │ structured trigger saved
                ▼
 ┌─────────────────────────────────┐
 │   Alerts monitor (cron, free)   │   src/instrumentation.ts
 │   setInterval every 60s         │   src/app/api/cron/tick/route.ts
 │   evaluates conditions against  │   src/lib/alerts/monitor.ts
 │   live market data              │   src/lib/alerts/evaluator.ts
 └──────────────┬──────────────────┘
                │ conditions met
                ▼
 ┌─────────────────────────────────┐
 │   Telegram dispatch             │   src/lib/alerts/channels/
 │   (bot token in env,            │     telegram.ts + dispatch.ts
 │   chat_id in settings.json)     │
 └─────────────────────────────────┘
```

**The key insight: AI is called once per user action. The monitor runs forever at zero AI cost** — it's just fetching live prices and doing number comparisons against the structured conditions the AI already wrote.

### Market data routing

`src/lib/market-data.ts::getMarketSnapshot` is the single entry point. It routes by asset class:

- **Crypto** → Binance public klines (`src/lib/binance.ts`). No key. Always works.
- **Forex / metals / stocks** → Twelve Data primary (`src/lib/twelvedata.ts`) → Yahoo fallback. Needs `TWELVE_DATA_API_KEY`.
- **Indices** (NAS100, SPX500, US30) → Yahoo only (TD indices require their paid Grow plan).

Yahoo is flaky and rate-limits by IP aggressively — that's why Twelve Data is primary. `yahoo-finance2` is pinned to `2.13.3` because 2.14+ removed the `chart` module from the default export; don't upgrade without re-adding modules via `createYahooFinance`.

### Signal engine contract

`src/lib/signal-engine.ts` is the core AI loop. It uses OpenAI tool-calling with two tools:
- `get_market_data(symbol, timeframe)` — AI fetches candles + indicators + swings
- `submit_signal(...)` — AI's ONLY way to respond; no free-text replies

The system prompt enforces **data discipline**: if no live data AND no chart image, the AI must return `WAIT` with `alertTriggers: []` — never invent price levels. This was added after the model confabulated placeholder EURUSD levels from training data.

`STRATEGY_DIRECTIVES` in the same file adds a per-strategy system message (price-action / supply-demand / smc / rsi-momentum / etc.) that steers vocabulary and analysis framing.

### Profile has TWO separate axes

- `strategyStyle` — horizon (scalp / day / swing / position) — timeframe defaults
- `strategy` — methodology (smc / rsi-momentum / supply-demand / etc.) — analysis lens

Don't conflate them. Both live on `TradingProfile` and both override via the body's `profile` field in signal/scan requests.

### Alert triggers → monitor evaluation

`AlertTrigger.conditions[]` uses a discriminated union: `price_above`, `price_below`, `candle_close_above`, `candle_close_below`, `rsi_above`, `rsi_below`. All conditions on a rule must be true to fire (AND-ed). The evaluator (`src/lib/alerts/evaluator.ts`) fetches the minimum set of timeframes needed and checks them.

When a rule fires it flips to `status: "triggered"` so it doesn't spam. User re-arms via the bell icon in the Alerts panel. Rules are stored in `data/alerts.json` via the write-locked store in `src/lib/alerts/store.ts`.

### Onboarding is gated by AppShell

`src/components/app-shell.tsx` fetches `/api/settings` on mount. If `profile === null`, it renders `OnboardingWizard` fullscreen and blocks navigation. Once the wizard POSTs a profile, the shell re-renders with sidebar + top bar + children.

This means every route under `src/app/` can assume a profile exists when rendered inside the shell.

### Instrumentation quirk

`src/instrumentation.ts` is a Next.js hook that runs at server boot. It starts a `setInterval` that hits `/api/cron/tick` internally every 60s. It does **not** import `monitor.ts` directly because Next's instrumentation bundler can't handle `node:` built-ins or `nodemailer`-style CJS deps. Keep instrumentation.ts dependency-free — everything heavy loads lazily inside route handlers.

For Vercel deployment, set `DISABLE_MONITOR=1` and use Vercel Cron to hit `/api/cron/tick` instead (protected by `CRON_SECRET`).

## Env vars

Required: `OPENAI_API_KEY`, `TWELVE_DATA_API_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_BOT_USERNAME`.
Optional: `OPENAI_MODEL` (defaults to `gpt-4.1`), `MONITOR_INTERVAL_MS`, `CRON_SECRET`, `DISABLE_MONITOR`.

The recipient Telegram `chat_id` is **not** in env — it's captured via the one-click link flow (`src/app/api/telegram/link/route.ts` polls `getUpdates` for a `/start <code>`) and stored in `data/settings.json`.

## Conventions worth knowing

- **Path alias:** `@/*` → `./src/*` (see tsconfig.json).
- **No comments in code** unless the *why* is non-obvious — the repo style is terse.
- **Alerts data (`data/`) is gitignored.** So is `.claude/`, `.env.local`, and `aivora-react-template/` (a reference design template, not app code).
- **Telegram messages use HTML parse_mode** (`<b>`, `<i>`, `<code>`) — plain newlines are fine, but avoid ampersands/angle brackets in user content without escaping (see `escapeHtml` in `dispatch.ts`).
- **yahoo-finance2 logs are silenced** at import time via `yahooFinance.suppressNotices(...)` in `market-data.ts`.
