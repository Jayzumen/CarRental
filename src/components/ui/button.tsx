import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-200 outline-none focus-visible:ring-4 focus-visible:ring-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[inset_0_1px_0_0_oklch(1_0_0/18%),0_6px_16px_-6px_var(--primary)] hover:bg-primary-hover",
        secondary: "bg-foreground text-background hover:bg-foreground/85",
        outline:
          "border border-input bg-card text-foreground hover:border-foreground/25 hover:bg-accent",
        ghost: "text-foreground hover:bg-accent",
        glass:
          "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
        link: "rounded-none px-0 text-foreground underline-offset-4 hover:text-primary hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-[0.9375rem]",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
