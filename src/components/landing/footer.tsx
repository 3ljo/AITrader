import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="relative border-t border-[color:var(--color-border-soft)] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1350px]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aivora/logo/logo.svg" alt="SignalForge" className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
              Your personal AI trading analyst. On-demand signals, free price-based alerts,
              all local-first.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol
              title="Product"
              links={[
                { label: "Features", href: "#features" },
                { label: "How it works", href: "#how-it-works" },
                { label: "Strategies", href: "#strategies" },
                { label: "FAQ", href: "#faq" },
              ]}
            />
            <FooterCol
              title="App"
              links={[
                { label: "Chat", href: "/chat" },
                { label: "Scanner", href: "/scanner" },
                { label: "Alerts", href: "/alerts" },
                { label: "Calendar", href: "/calendar" },
                { label: "Settings", href: "/settings" },
              ]}
            />
            <FooterCol
              title="Data sources"
              links={[
                { label: "Binance API", href: "https://binance.com", external: true },
                { label: "Twelve Data", href: "https://twelvedata.com", external: true },
                { label: "Yahoo Finance", href: "https://finance.yahoo.com", external: true },
                { label: "ForexFactory", href: "https://forexfactory.com", external: true },
                { label: "OpenAI", href: "https://openai.com", external: true },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[color:var(--color-border-soft)] pt-6 text-xs text-[color:var(--color-fg-dim)] sm:flex-row sm:items-center sm:justify-between">
          <div>&copy; {new Date().getFullYear()} SignalForge. AI-generated analysis, not financial advice.</div>
          <div>You are responsible for every trade you take.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[color:var(--color-fg-dim)]">
        {title}
      </div>
      <ul className="flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="text-sm text-[color:var(--color-fg-muted)] transition-colors hover:text-cyan-300"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
