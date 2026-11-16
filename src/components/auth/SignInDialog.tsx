"use client";

import { useState } from "react";
import { Loader2, UserRound } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, Input, Label } from "@/components/ui/field";
import { Logo } from "@/components/layout/Logo";

// Demo account for portfolio visitors
const TEST_USER = { email: "test@test.com", password: "test1234" };

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

const friendlyError = (err: unknown) => {
  const code = (err as { code?: string })?.code ?? "";
  if (code.includes("invalid-credential") || code.includes("wrong-password"))
    return "Email or password is incorrect.";
  if (code.includes("email-already-in-use"))
    return "An account with this email already exists.";
  if (code.includes("weak-password"))
    return "Password must be at least 6 characters.";
  if (code.includes("popup-closed")) return "Sign-in was cancelled.";
  return "Something went wrong. Please try again.";
};

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.09V7.07H2.18a11 11 0 0 0 0 9.86l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

export default function SignInDialog({ open, onOpenChange }: Props) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [pending, setPending] = useState<null | "email" | "google" | "demo">(
    null,
  );
  const [error, setError] = useState("");

  const run = async (
    kind: "email" | "google" | "demo",
    fn: () => Promise<unknown>,
  ) => {
    setPending(kind);
    setError("");
    try {
      await fn();
      onOpenChange(false);
      toast.success("Welcome to Drivora");
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setPending(null);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email"));
    const password = String(data.get("password"));
    run("email", async () => {
      const m = await import("@/lib/firebase/auth");
      return mode === "signup"
        ? m.createUserWithEmailAndPassword(m.auth, email, password)
        : m.signInWithEmailAndPassword(m.auth, email, password);
    });
  };

  const isSignup = mode === "signup";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Logo className="mb-2" />
            <DialogTitle className="text-2xl">
              {isSignup ? "Create your account" : "Welcome back"}
            </DialogTitle>
            <DialogDescription>
              {isSignup
                ? "Book faster and manage all your rentals in one place."
                : "Sign in to book cars and view your reservations."}
            </DialogDescription>
          </div>

          <div className="grid gap-2">
            <Button
              variant="outline"
              size="lg"
              disabled={!!pending}
              onClick={() =>
                run("google", async () => {
                  const m = await import("@/lib/firebase/auth");
                  const provider = new m.GoogleAuthProvider();
                  provider.setCustomParameters({ prompt: "select_account" });
                  return m.signInWithPopup(m.auth, provider);
                })
              }
            >
              {pending === "google" ? (
                <Loader2 className="animate-spin" />
              ) : (
                <GoogleIcon />
              )}
              Continue with Google
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border border-dashed"
              disabled={!!pending}
              onClick={() =>
                run("demo", async () => {
                  const m = await import("@/lib/firebase/auth");
                  return m.signInWithEmailAndPassword(
                    m.auth,
                    TEST_USER.email,
                    TEST_USER.password,
                  );
                })
              }
            >
              {pending === "demo" ? (
                <Loader2 className="animate-spin" />
              ) : (
                <UserRound />
              )}
              Explore with demo account
            </Button>
          </div>

          <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase">
            <span className="h-px flex-1 bg-border" />
            or with email
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit} className="grid gap-4">
            <Field>
              <Label htmlFor="auth-email">Email</Label>
              <Input
                id="auth-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </Field>
            <Field>
              <Label htmlFor="auth-password">Password</Label>
              <Input
                id="auth-password"
                name="password"
                type="password"
                required
                minLength={6}
                autoComplete={isSignup ? "new-password" : "current-password"}
                placeholder="••••••••"
              />
            </Field>
            {error && (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            )}
            <Button type="submit" size="lg" disabled={!!pending}>
              {pending === "email" && <Loader2 className="animate-spin" />}
              {isSignup ? "Create account" : "Sign in"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            {isSignup ? "Already have an account?" : "New to Drivora?"}{" "}
            <button
              type="button"
              className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
              onClick={() => {
                setMode(isSignup ? "signin" : "signup");
                setError("");
              }}
            >
              {isSignup ? "Sign in" : "Create an account"}
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
