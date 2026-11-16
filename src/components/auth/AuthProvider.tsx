"use client";

import dynamic from "next/dynamic";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { User } from "firebase/auth";

// The dialog (and its form logic) is only downloaded when first opened.
const SignInDialog = dynamic(() => import("./SignInDialog"), { ssr: false });

type AuthContextValue = {
  user: User | null;
  /** false until Firebase has reported the initial auth state */
  ready: boolean;
  openSignIn: () => void;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMounted, setDialogMounted] = useState(false);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    let cancelled = false;
    // Defer loading the Auth SDK until the browser is idle.
    const load = () =>
      import("@/lib/firebase/auth")
        .then(({ auth, onAuthStateChanged }) => {
          if (cancelled) return;
          unsubscribe = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setReady(true);
          });
        })
        .catch(() => setReady(true));

    const hasIdle = typeof window.requestIdleCallback === "function";
    const handle = hasIdle
      ? window.requestIdleCallback(load, { timeout: 2000 })
      : setTimeout(load, 300);

    return () => {
      cancelled = true;
      if (hasIdle) window.cancelIdleCallback(handle as number);
      else clearTimeout(handle);
      unsubscribe?.();
    };
  }, []);

  const openSignIn = useCallback(() => {
    setDialogMounted(true);
    setDialogOpen(true);
  }, []);

  const signOut = useCallback(async () => {
    const { auth, signOut } = await import("@/lib/firebase/auth");
    await signOut(auth);
  }, []);

  const value = useMemo(
    () => ({ user, ready, openSignIn, signOut }),
    [user, ready, openSignIn, signOut],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
      {dialogMounted && (
        <SignInDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
