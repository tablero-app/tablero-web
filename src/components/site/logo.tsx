import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  variant?: "full" | "mark";
}

const FULL_RATIO = 1147 / 256;
const MARK_RATIO = 512 / 562;

export function Logo({ size = 32, className, variant = "full" }: LogoProps) {
  const src = variant === "full" ? "/intralogik-logo.png" : "/intralogik-mark.png";
  const ratio = variant === "full" ? FULL_RATIO : MARK_RATIO;
  const width = Math.round(size * ratio);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={src}
        alt="Intralogik"
        width={width}
        height={size}
        priority
        className="h-auto w-auto"
        style={{ height: size, width }}
      />
    </span>
  );
}
