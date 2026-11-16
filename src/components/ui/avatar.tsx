import { cn } from "@/lib/utils";

export const initials = (name: string) =>
  name
    .split(/[\s@._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

export function Avatar({
  name,
  size = 32,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size, fontSize: size * 0.34 }}
      className={cn(
        "grid shrink-0 place-items-center rounded-full bg-foreground font-semibold text-background",
        className,
      )}
    >
      {initials(name)}
    </span>
  );
}
