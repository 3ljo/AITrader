import { PixelArrowButton } from "@/components/ui/pixel-arrow-button";

const FEATURES = [
  {
    icon: "/aivora/icon/feature-icon01.svg",
    title: "Smarter signals",
    desc: "Make faster, risk-adjusted trade decisions powered by real-time AI chart analysis.",
  },
  {
    icon: "/aivora/icon/feature-icon02.svg",
    title: "Integrated alerts",
    desc: "No extra bots or plugins needed. Telegram pings you the moment your setup fires.",
  },
  {
    icon: "/aivora/icon/feature-icon03.svg",
    title: "End-to-end automation",
    desc: "One AI call writes the plan. A free monitor watches price 24/7 so you don't have to.",
  },
];

export function LandingHero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center pt-32 pb-24 sm:pt-44 sm:pb-32"
      style={{ backgroundImage: "url(/aivora/bg/hero_bg.png)" }}
    >
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6">
        {/* Row: title + gif */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="sf-anim-fade-up lg:col-span-9">
            <h1 className="sf-display-lg text-[color:var(--color-fg)]">
              Empower your trading with smarter{" "}
              <span className="sf-gradient-text">AI signals</span>
            </h1>
            <p className="sf-anim-fade-up sf-delay-100 mt-7 max-w-2xl text-base leading-relaxed text-[color:var(--color-fg-muted)] sm:text-lg">
              Unlock clarity and speed with tailored AI trading analysis. We use live market data
              and your chosen strategy to help you trade with confidence — and get pinged on
              Telegram the moment your setup is real.
            </p>
            <div className="sf-anim-fade-up sf-delay-200 mt-10">
              <PixelArrowButton href="/chat" size="lg">
                Begin today with us
              </PixelArrowButton>
            </div>
          </div>

          <div className="sf-anim-scale-in sf-delay-300 lg:col-span-3">
            <div className="relative mx-auto max-w-[280px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Hero icon"
                src="/aivora/icon/animated-gif02.gif"
                className="sf-float w-full"
              />
            </div>
          </div>
        </div>

        {/* Row: 3 feature cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="sf-anim-fade-up group"
              style={{ animationDelay: `${400 + i * 100}ms` }}
            >
              <div className="flex items-start gap-5 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60 p-6 backdrop-blur transition-all hover:border-cyan-500/40">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-surface-3)] to-[color:var(--color-surface)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src={f.icon} className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="sf-display text-xl text-[color:var(--color-fg)]">{f.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
