import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  variant?: "full" | "mark";
}

/**
 * Intralogik brand mark — 2×2 grid (panel de mando) with one active cell
 * in industrial orange. Wordmark in Geist 800 lowercase.
 */
export function Logo({ size = 32, className, variant = "full" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="2" y="2" width="13" height="13" rx="2.5" fill="currentColor" />
        <rect x="17" y="2" width="13" height="13" rx="2.5" fill="currentColor" />
        <rect
          x="2"
          y="17"
          width="13"
          height="13"
          rx="2.5"
          fill="var(--tablero-orange)"
        />
        <rect x="17" y="17" width="13" height="13" rx="2.5" fill="currentColor" />
      </svg>
      {variant === "full" && (
        <span className="text-xl font-extrabold tracking-tight text-foreground">
          intralogik
        </span>
      )}
    </span>
  );
}
