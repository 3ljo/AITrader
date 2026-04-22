"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, CalendarDays, MessageCircle, Radar, Settings2 } from "lucide-react";
import type { TradingProfile } from "@/lib/types";
import { cn } from "@/lib/utils";

export const NAV_ITEMS = [
  { href: "/chat", label: "Chat", Icon: MessageCircle, hint: "Analyze a pair / upload a chart" },
  { href: "/scanner", label: "Scanner", Icon: Radar, hint: "Scan your watchlist" },
  { href: "/alerts", label: "Alerts", Icon: Bell, hint: "Saved triggers" },
  { href: "/calendar", label: "Calendar", Icon: CalendarDays, hint: "Economic events" },
] as const;

export function Sidebar({ profile }: { profile: TradingProfile | null }) {
  const pathname = usePathname();

  return (
    <aside className="relative hidden w-60 shrink-0 border-r border-[color:var(--color-border-soft)] bg-[color:var(--color-bg-elevated)] md:flex md:flex-col">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(400px 200px at 50% 0%, rgba(34,211,238,0.15), transparent 70%)",
      }} />

      <Link href="/" className="relative flex h-20 shrink-0 items-center border-b border-[color:var(--color-border-soft)] px-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/aivora/logo/logo.svg" alt="SignalForge" className="h-7 w-auto" />
      </Link>

      <nav className="relative flex-1 px-3 py-4">
        <div className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-fg-faint)]">
          Workspace
        </div>
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            const Icon = item.Icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                    active
                      ? "bg-gradient-to-r from-cyan-500/15 to-transparent text-cyan-300"
                      : "text-[color:var(--color-fg-muted)] hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-fg)]",
                  )}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-cyan-400" />
                  )}
                  <Icon className={cn("h-4 w-4", active ? "text-cyan-400" : "text-[color:var(--color-fg-dim)]")} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="relative border-t border-[color:var(--color-border-soft)] p-3">
        {profile && (
          <div className="mb-2 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-surface)]/60 p-3 text-[11px]">
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-fg-faint)]">
              Your profile
            </div>
            <div className="font-mono text-[color:var(--color-fg)]">
              {profile.accountCurrency} {profile.accountBalance.toLocaleString()}
            </div>
            <div className="mt-0.5 text-[color:var(--color-fg-dim)]">
              {profile.strategyStyle} · {profile.riskPerTradePct}% risk
            </div>
          </div>
        )}
        <Link
          href="/settings"
          className={cn(
            "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
            pathname === "/settings"
              ? "bg-gradient-to-r from-cyan-500/15 to-transparent text-cyan-300"
              : "text-[color:var(--color-fg-muted)] hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-fg)]",
          )}
        >
          <Settings2
            className={cn(
              "h-4 w-4",
              pathname === "/settings" ? "text-cyan-400" : "text-[color:var(--color-fg-dim)]",
            )}
          />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();
  const items = [...NAV_ITEMS, { href: "/settings", label: "Settings", Icon: Settings2, hint: "" }];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[color:var(--color-border-soft)] bg-[color:var(--color-bg-elevated)]/95 backdrop-blur-xl md:hidden">
      <ul className="flex items-stretch justify-around">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.Icon;
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] transition-all",
                  active ? "text-cyan-400" : "text-[color:var(--color-fg-dim)]",
                )}
              >
                <Icon className="h-[18px] w-[18px]" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Topbar({ profile }: { profile: TradingProfile | null }) {
  const pathname = usePathname();
  const title =
    NAV_ITEMS.find((i) => i.href === pathname)?.label ??
    (pathname === "/settings" ? "Settings" : "SignalForge");

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-[color:var(--color-border-soft)] bg-[color:var(--color-bg-elevated)]/80 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/aivora/logo/logo.svg" alt="SignalForge" className="h-6 w-auto md:hidden" />
        <div className="sf-display text-lg tracking-tight">{title}</div>
      </div>
      {profile && (
        <div className="hidden items-center gap-2 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-surface)]/60 px-3 py-1.5 text-xs backdrop-blur sm:flex">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="font-mono font-semibold text-[color:var(--color-fg)]">
              {profile.accountCurrency} {profile.accountBalance.toLocaleString()}
            </span>
          </span>
          <span className="text-[color:var(--color-fg-faint)]">·</span>
          <span className="text-[color:var(--color-fg-muted)]">{profile.strategyStyle}</span>
          <span className="text-[color:var(--color-fg-faint)]">·</span>
          <span className="text-[color:var(--color-fg-muted)]">{profile.riskPerTradePct}% risk</span>
          <span className="text-[color:var(--color-fg-faint)]">·</span>
          <span className="text-[color:var(--color-fg-muted)]">
            {profile.session.replace("-", " ")}
          </span>
        </div>
      )}
    </header>
  );
}
