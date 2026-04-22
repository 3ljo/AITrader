"use client";

import { useState } from "react";
import { PixelArrow } from "@/components/ui/pixel-arrow";
import { PixelArrowButton } from "@/components/ui/pixel-arrow-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "AI Signal Engine",
    desc: "Multi-timeframe analysis across your watchlist. The AI reads structure, indicators, and liquidity to write a full trade plan — entry, SL, TPs, position sizing.",
    img: "/aivora/service/service-img01.jpg",
  },
  {
    title: "Chart Screenshot Analysis",
    desc: "Drop any TradingView screenshot. The AI reads your drawn trendlines, zones, and candles — then overlays live data to confirm or reject your thesis.",
    img: "/aivora/service/service-img02.jpg",
  },
  {
    title: "Smart Telegram Alerts",
    desc: "Save any trigger and the monitor watches live prices every 60 seconds. Zero AI tokens. When your setup fires, your phone buzzes with the full trade plan.",
    img: "/aivora/service/service-img03.jpg",
  },
  {
    title: "Strategy-Aware Analysis",
    desc: "SMC, Supply & Demand, RSI, MA Trend, Fibonacci and more. Pick your methodology — the AI analyzes through your chosen lens with the right vocabulary.",
    img: "/aivora/service/service-img04.jpg",
  },
];

export function LandingService() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative pt-32 pb-32">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="sf-anim-fade-up">
            <Eyebrow>Our main services</Eyebrow>
          </div>
          <h2 className="sf-anim-fade-up sf-delay-100 sf-display mt-5 text-3xl leading-[1.05] tracking-tight sm:text-5xl md:text-[58px]">
            <span className="mr-3 inline-flex h-[0.85em] w-[0.85em] overflow-hidden rounded-full align-middle">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aivora/icon/artificial-intelligence-11761.gif" alt="" className="h-full w-full object-cover" />
            </span>
            Helping you trade with the power of{" "}
            <span className="sf-gradient-text">AI analysis</span>
          </h2>
          <div className="sf-anim-fade-up sf-delay-200 mt-8 inline-block">
            <PixelArrowButton href="/chat" size="md" variant="primary">
              Start analyzing now
            </PixelArrowButton>
          </div>
        </div>
      </div>

      <div
        className="relative mt-20 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/aivora/bg/features-gradient-bg.png)" }}
      >
        <div className="mx-auto max-w-[1350px] px-4 sm:px-6">
          <div className="grid gap-0 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <ServiceItem
                key={s.title}
                {...s}
                index={i}
                active={active === i}
                onEnter={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  title,
  desc,
  img,
  index,
  active,
  onEnter,
}: {
  title: string;
  desc: string;
  img: string;
  index: number;
  active: boolean;
  onEnter: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      className={cn(
        "relative border-b border-r border-[color:var(--color-border)] p-6 transition-all duration-500 lg:border-b-0 lg:p-8",
        active ? "bg-[color:var(--color-surface)]/80" : "bg-[color:var(--color-surface-2)]/30",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="sf-display text-xl text-[color:var(--color-fg)] sm:text-2xl">{title}</h3>
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all",
            active
              ? "border-cyan-400 bg-cyan-400 text-black"
              : "border-[color:var(--color-border)] text-[color:var(--color-fg-muted)]",
          )}
        >
          <PixelArrow size={16} />
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">{desc}</p>

      <div
        className={cn(
          "mt-6 overflow-hidden rounded-xl border border-[color:var(--color-border)] transition-all duration-500",
          active ? "max-h-[280px] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-fg-dim)]">
        <span>0{index + 1}</span>
      </div>
    </div>
  );
}
