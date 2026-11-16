import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card text-card-foreground shadow-soft",
        className,
      )}
      {...props}
    />
  );
}
