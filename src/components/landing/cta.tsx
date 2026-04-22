import { PixelArrowButton } from "@/components/ui/pixel-arrow-button";

export function LandingCta() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="sf-card-glow sf-noise relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
            style={{
              backgroundImage: "url(/aivora/bg/hero-gradient.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 40%, rgba(34,211,238,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="mx-auto max-w-3xl">
            <h2 className="sf-display-lg text-[color:var(--color-fg)]">
              Stop guessing.{" "}
              <span className="sf-gradient-text">Start trading</span> with a real analyst.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-fg-muted)]">
              Onboard in 60 seconds. Ask your first pair in minutes. Get your first Telegram
              ping the next time the market actually matters.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PixelArrowButton href="/chat" size="lg">
                Get started free
              </PixelArrowButton>
              <PixelArrowButton href="#features" variant="outline" size="lg" showArrow={false}>
                Explore features
              </PixelArrowButton>
            </div>
            <div className="mt-8 text-xs text-[color:var(--color-fg-dim)]">
              No credit card · Your own API keys · All state local
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
