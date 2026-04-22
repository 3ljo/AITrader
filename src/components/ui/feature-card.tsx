import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PixelArrow } from "./pixel-arrow";

export function FeatureCard({
  icon,
  iconSrc,
  title,
  desc,
  href,
  className,
}: {
  icon?: LucideIcon;
  iconSrc?: string;
  title: string;
  desc: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const Icon = icon;

  const body = (
    <div className={cn("sf-card-glow sf-noise group h-full p-6 sm:p-7", className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-gradient-to-br from-[color:var(--color-surface-3)] to-[color:var(--color-surface)] text-cyan-300">
          {iconSrc ? (
            <img src={iconSrc} alt="" className="h-7 w-7" />
          ) : Icon ? (
            <Icon className="h-5 w-5" />
          ) : null}
        </div>
        {href && (
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-fg-muted)] transition-all group-hover:border-cyan-400 group-hover:text-cyan-300 group-hover:rotate-[-45deg]">
            <PixelArrow size={14} />
          </span>
        )}
      </div>
      <h3 className="sf-display mt-6 text-xl text-[color:var(--color-fg)] sm:text-2xl">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">{desc}</p>
    </div>
  );

  return href ? <Link href={href}>{body}</Link> : body;
}
