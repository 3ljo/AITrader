"use client";

import { useState } from "react";
import { ScanPanel } from "@/components/scan-panel";
import { PageHeader } from "@/components/ui/page-header";

export default function ScannerPage() {
  const [, setRefresh] = useState(0);
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <PageHeader
        eyebrow="Watchlist scanner"
        title={
          <>
            Find setups across your <span className="sf-gradient-text">top pairs</span>
          </>
        }
        subtitle="Runs the AI across your selected asset classes and surfaces high-confidence setups. Only spends OpenAI tokens when you click Scan."
      />
      <div className="sf-anim-fade-up sf-delay-100">
        <ScanPanel defaultExpanded onAlertCreated={() => setRefresh((x) => x + 1)} />
      </div>
    </div>
  );
}
