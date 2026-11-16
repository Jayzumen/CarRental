"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, LogOut, Menu, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/AuthProvider";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user, openSignIn, signOut } = useAuth();
  const close = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        aria-label="Open menu"
        className="grid size-10 place-items-center rounded-full transition-colors hover:bg-accent focus-visible:ring-4 focus-visible:ring-ring md:hidden"
      >
        <Menu className="size-5" />
      </DialogTrigger>
      <DialogContent side="right" className="p-6">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <DialogDescription className="sr-only">
          Site navigation
        </DialogDescription>
        <div className="flex h-10 items-center">
          <Logo />
        </div>

        <nav className="mt-10 flex flex-col">
          <Link
            href="/"
            onClick={close}
            className={cn(
              "border-b py-4 text-2xl font-semibold tracking-tight",
              pathname === "/" ? "text-primary" : "",
            )}
          >
            Home
          </Link>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className={cn(
                "flex items-center justify-between border-b py-4 text-2xl font-semibold tracking-tight",
                pathname.startsWith(l.href) ? "text-primary" : "",
              )}
            >
              {l.name}
              <ArrowUpRight className="size-5 text-muted-foreground" />
            </Link>
          ))}
          {user && (
            <Link
              href="/profile"
              onClick={close}
              className="border-b py-4 text-2xl font-semibold tracking-tight"
            >
              My bookings
            </Link>
          )}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <Button asChild size="lg">
            <Link href="/#booking" onClick={close}>
              Book a car
            </Link>
          </Button>
          {user ? (
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                signOut();
                close();
              }}
            >
              <LogOut /> Sign out
            </Button>
          ) : (
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                close();
                openSignIn();
              }}
            >
              Sign in
            </Button>
          )}
          <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
            <a href={site.phoneHref} className="flex items-center gap-2">
              <Phone className="size-4" /> {site.phone}
            </a>
            <ThemeToggle />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
