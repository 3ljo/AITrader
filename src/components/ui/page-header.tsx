import { Eyebrow } from "./eyebrow";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="sf-anim-fade-up mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="sf-display mt-3 text-3xl tracking-tight text-[color:var(--color-fg)] sm:text-[40px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
            {subtitle}
          </p>
        )}
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}
