"use client";

import { CalendarPanel } from "@/components/calendar-panel";
import { PageHeader } from "@/components/ui/page-header";

export default function CalendarPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <PageHeader
        eyebrow="Economic calendar"
        title={
          <>
            News that <span className="sf-gradient-text">moves the market</span>
          </>
        }
        subtitle="Upcoming red-folder events filtered to your watchlist currencies. Sourced from ForexFactory, refreshes every 15 minutes."
      />
      <div className="sf-anim-fade-up sf-delay-100">
        <CalendarPanel defaultExpanded />
      </div>
    </div>
  );
}
