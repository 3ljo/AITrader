"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Open app", href: "/chat" },
];

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[color:var(--color-border-soft)] bg-[color:var(--color-bg)]/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[84px] max-w-[1650px] items-center justify-between px-5 sm:px-10">
          <Link href="/" className="relative z-10 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/aivora/logo/logo.svg" alt="SignalForge" className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-[15px] font-medium text-[color:var(--color-fg)] transition-colors hover:text-cyan-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/chat"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-[15px] font-semibold text-black transition-all hover:bg-white/90 hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.4)]"
            >
              Join now
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]/60 text-[color:var(--color-fg)] backdrop-blur lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[color:var(--color-bg)]/95 backdrop-blur-xl lg:hidden">
          <div className="flex h-[84px] items-center justify-between px-5 sm:px-10">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aivora/logo/logo.svg" alt="SignalForge" className="h-9 w-auto" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-8">
            {NAV.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="sf-anim-fade-up sf-display border-b border-[color:var(--color-border-soft)] py-5 text-3xl tracking-tight transition-colors hover:text-cyan-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-5 pt-10">
            <Link
              href="/chat"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-white px-6 text-base font-semibold text-black"
            >
              Join now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
