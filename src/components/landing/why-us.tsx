import { Eyebrow } from "@/components/ui/eyebrow";

const LEFT = [
  {
    icon: "/aivora/icon/feature-icon01.svg",
    title: "Strategy-aware AI analysis",
    desc: "SMC, Supply & Demand, RSI, Price Action — the AI speaks your methodology fluently.",
  },
  {
    icon: "/aivora/icon/fea-small-icon01.svg",
    title: "Custom-built trade plans",
    desc: "Every signal sized to your balance, risk %, and preferred R:R. No generic calls.",
  },
  {
    icon: "/aivora/icon/fea-small-icon02.svg",
    title: "Risk-first by design",
    desc: "Hard-enforces your per-trade cap and prop-firm rules. Refuses to blow your account.",
  },
];

const RIGHT = [
  {
    icon: "/aivora/icon/feature-icon02.svg",
    title: "Expert-grade reasoning",
    desc: "gpt-4.1 with multi-timeframe structure, indicator confluence, and live data reconciliation.",
  },
  {
    icon: "/aivora/icon/fea-small-icon03.svg",
    title: "Speed without sacrificing quality",
    desc: "Signals in seconds. Scanner finds setups across 12+ pairs in under a minute.",
  },
  {
    icon: "/aivora/icon/fea-small-icon04.svg",
    title: "Trader-centered, not feature-bloated",
    desc: "Chat, scan, alert — nothing else. No marketing fluff. Everything does actual work.",
  },
];

export function LandingWhyUs() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6">
        <div className="sf-anim-fade-up mx-auto max-w-4xl text-center">
          <Eyebrow>Why choose SignalForge</Eyebrow>
          <h2 className="sf-display mt-5 text-3xl leading-[1.05] tracking-tight sm:text-5xl md:text-[58px]">
            Your success
            <span className="mx-3 inline-flex h-[0.85em] w-[0.85em] overflow-hidden rounded-full align-middle">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aivora/icon/diamond-icon02.gif" alt="" className="h-full w-full object-cover" />
            </span>
            is our <span className="sf-gradient-text">mission</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {/* LEFT column */}
          <div className="flex flex-col gap-6">
            {LEFT.map((c, i) => (
              <WhyCard
                key={c.title}
                align="right"
                icon={c.icon}
                title={c.title}
                desc={c.desc}
                delay={100 + i * 100}
              />
            ))}
          </div>

          {/* CENTER — big diamond animation */}
          <div className="sf-anim-scale-in sf-delay-300 relative hidden lg:flex">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(34,211,238,0.5) 0%, rgba(34,197,94,0.3) 40%, transparent 70%)",
              }}
            />
            <div className="relative h-[460px] w-[460px]">
              {/* orbit rings */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-500/20"
                style={{ animation: "sf-float 6s ease-in-out infinite" }}
              />
              <div
                className="absolute inset-8 rounded-full border border-emerald-500/20"
                style={{ animation: "sf-float 7s ease-in-out infinite reverse" }}
              />
              <div
                className="absolute inset-16 rounded-full border border-cyan-500/10"
                style={{ animation: "sf-float 8s ease-in-out infinite" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/aivora/icon/diamond-icon02.gif"
                  alt="SignalForge"
                  className="sf-float h-56 w-56 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile center gif */}
          <div className="sf-anim-scale-in sf-delay-300 mx-auto flex h-64 w-64 items-center justify-center lg:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/aivora/icon/diamond-icon02.gif"
              alt="SignalForge"
              className="sf-float h-48 w-48 object-contain"
            />
          </div>

          {/* RIGHT column */}
          <div className="flex flex-col gap-6">
            {RIGHT.map((c, i) => (
              <WhyCard
                key={c.title}
                align="left"
                icon={c.icon}
                title={c.title}
                desc={c.desc}
                delay={100 + i * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCard({
  icon,
  title,
  desc,
  align,
  delay,
}: {
  icon: string;
  title: string;
  desc: string;
  align: "left" | "right";
  delay: number;
}) {
  return (
    <div
      className="sf-anim-fade-up sf-card-glow sf-noise rounded-2xl p-5 sm:p-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`flex items-start gap-4 ${align === "right" ? "sm:flex-row-reverse sm:text-right" : ""}`}>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-gradient-to-br from-[color:var(--color-surface-3)] to-[color:var(--color-surface)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="" className="h-7 w-7" />
        </span>
        <div className="flex-1">
          <h3 className="sf-display text-lg leading-tight sm:text-xl">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">{desc}</p>
        </div>
      </div>
    </div>
  );
}
