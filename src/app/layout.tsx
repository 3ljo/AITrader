import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SignalForge — AI Trading Analyst",
  description:
    "Your personal AI trading analyst. Ask a pair, get a risk-adjusted trade plan. Free Telegram alerts when your setup fires.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
