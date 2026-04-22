"use client";

import { cn } from "@/lib/utils";

export function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "sf-marquee-wrap relative flex w-full overflow-hidden",
        pauseOnHover && "[&:hover_.sf-marquee-track]:[animation-play-state:paused]",
        className,
      )}
      style={
        {
          maskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
        } as React.CSSProperties
      }
    >
      <div
        className="sf-marquee-track flex shrink-0"
        style={{
          animation: `sf-marquee ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
