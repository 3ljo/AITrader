"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { PixelArrow } from "./pixel-arrow";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-cyan-400 text-black hover:bg-cyan-300 disabled:bg-cyan-400/40 disabled:text-black/60 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_10px_30px_-15px_rgba(34,211,238,0.6)]",
  outline:
    "border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]/70 text-[color:var(--color-fg)] backdrop-blur hover:border-cyan-400 hover:text-cyan-300",
  ghost:
    "text-[color:var(--color-fg-muted)] hover:text-cyan-300",
  light:
    "bg-white text-black hover:bg-white/90",
};

const SIZES: Record<Size, { btn: string; arrow: number }> = {
  sm: { btn: "h-9 text-xs px-4 gap-2", arrow: 18 },
  md: { btn: "h-11 text-sm px-5 gap-2.5", arrow: 22 },
  lg: { btn: "h-14 text-base px-7 gap-3", arrow: 26 },
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  showArrow?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type ButtonProps = BaseProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

type LinkProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type Props = ButtonProps | LinkProps;

export function PixelArrowButton(props: Props) {
  const { variant = "primary", size = "md", loading = false, showArrow = true, className, children } = props;
  const sz = SIZES[size];

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden">
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <span className="relative block h-full w-full">
              <PixelArrow
                size={sz.arrow}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-[220%] group-hover:-translate-y-1/2"
              />
              <PixelArrow
                size={sz.arrow}
                className="absolute left-1/2 top-1/2 translate-x-[120%] -translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
              />
            </span>
          )}
        </span>
      )}
    </>
  );

  const classes = cn(
    "group relative inline-flex items-center justify-center rounded-xl font-semibold transition-colors disabled:cursor-not-allowed",
    sz.btn,
    VARIANTS[variant],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} target={props.target} rel={props.rel} className={classes}>
        {inner}
      </Link>
    );
  }

  const { href: _h, ...rest } = props as ButtonProps & { href?: never };
  void _h;
  return (
    <button
      className={classes}
      disabled={(rest as ButtonProps).disabled || loading}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}
