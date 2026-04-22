"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Does SignalForge execute trades for me?",
    a: "No — ever. SignalForge is an analyst, not an auto-trader. It writes the plan (entry, SL, TPs, sizing) and pings you when conditions fire. You decide whether to take the trade at your broker. That's intentional: humans in the loop, no rogue liquidations.",
  },
  {
    q: "How much do the AI calls cost?",
    a: "You use your own OpenAI key. A typical signal costs $0.01–0.03 in tokens. The background monitor (what watches your alerts) costs nothing — it runs on free market data and just does number comparisons.",
  },
  {
    q: "Do I need a paid market data subscription?",
    a: "No. Crypto uses Binance's public API (no key, unlimited). Forex/metals/stocks use Twelve Data's free tier (800 requests/day), with Yahoo Finance as a fallback. Indices run on Yahoo. Everything else is free public data.",
  },
  {
    q: "Can I trust the signals?",
    a: "The AI is built to refuse trades when market data is unavailable (no confabulation from training data), respects your per-trade risk cap, and honors prop-firm rules. That said, it's analysis — not a crystal ball. Verify at your broker before every entry.",
  },
  {
    q: "What strategies does it support?",
    a: "Nine analysis frameworks: Price Action, Smart Money Concepts (SMC/ICT), Supply & Demand, RSI/Momentum, MA Trend Following, S/R Levels, Breakout, Fibonacci, Mean Reversion. Pick one in your profile and the AI adopts that vocabulary and framing for every signal.",
  },
  {
    q: "Is my data private?",
    a: "Everything is local. Your profile, Telegram chat ID, and active alerts live in JSON files on your machine. No third-party database, no telemetry, no accounts. The only external calls go to OpenAI, Binance, Twelve Data, Yahoo, ForexFactory, and Telegram — and only when you actually use those features.",
  },
  {
    q: "What do I need to set up?",
    a: "An OpenAI API key (for AI calls), a Twelve Data free account (for forex/metals), and a Telegram bot you create in 2 min via @BotFather (for alerts). That's it. Full setup walkthrough in the onboarding.",
  },
];

export function LandingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          align="center"
          eyebrow="Common questions"
          title={
            <>
              Answers to what people <span className="sf-gradient-text">actually ask</span>
            </>
          }
        />

        <div className="mt-12 flex flex-col gap-2.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={cn(
                  "sf-anim-fade-up overflow-hidden rounded-xl border transition-colors",
                  isOpen
                    ? "border-cyan-500/40 bg-cyan-500/5"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60",
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className={cn("text-sm font-semibold sm:text-base", isOpen && "text-cyan-300")}>
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors",
                      isOpen
                        ? "border-cyan-400 text-cyan-300"
                        : "border-[color:var(--color-border)] text-[color:var(--color-fg-muted)]",
                    )}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
