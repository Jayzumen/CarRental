"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

export function UserButton() {
  const { user, ready, openSignIn, signOut } = useAuth();

  if (!ready) {
    return <span className="h-9 w-20 animate-pulse rounded-full bg-muted" />;
  }

  if (!user) {
    return (
      <Button size="sm" variant="secondary" onClick={openSignIn}>
        Sign in
      </Button>
    );
  }

  const name = user.displayName || user.email || "Account";
  return (
    <div className="flex items-center gap-1">
      <Link
        href="/profile"
        className="flex items-center gap-2 rounded-full py-1 pr-3 pl-1 text-sm font-medium transition-colors hover:bg-accent focus-visible:ring-4 focus-visible:ring-ring"
      >
        <Avatar name={name} />
        My bookings
      </Link>
      <button
        type="button"
        onClick={signOut}
        aria-label="Sign out"
        title="Sign out"
        className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-4 focus-visible:ring-ring"
      >
        <LogOut className="size-4" />
      </button>
    </div>
  );
}
