import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={cn("size-8 shrink-0", className)}
    >
      <rect width="32" height="32" rx="9" className="fill-primary" />
      <path
        d="M9 21.5V10.5h6.2c4 0 6.8 2.3 6.8 5.5s-2.8 5.5-6.8 5.5H9Z"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="16" r="1.9" fill="white" />
    </svg>
  );
}

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-lg text-lg font-semibold tracking-tight focus-visible:ring-4 focus-visible:ring-ring",
        className,
      )}
      aria-label="Drivora home"
    >
      <LogoMark />
      <span>Drivora</span>
    </Link>
  );
}
