"use client";

import { AlertsPanel } from "@/components/alerts-panel";
import { PageHeader } from "@/components/ui/page-header";

export default function AlertsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <PageHeader
        eyebrow="Saved alerts"
        title={
          <>
            Your <span className="sf-gradient-text">live trigger queue</span>
          </>
        }
        subtitle="Price conditions the monitor checks every 60 seconds against live market data. Zero AI tokens — just pure price math. When any fire, Telegram pings you instantly."
      />
      <div className="sf-anim-fade-up sf-delay-100">
        <AlertsPanel refreshSignal={0} defaultExpanded />
      </div>
    </div>
  );
}
