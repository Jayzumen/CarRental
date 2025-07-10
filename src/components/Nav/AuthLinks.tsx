"use client";

import { auth } from "@/utils/firebase";
import {
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLoginModalStore } from "@/stores/modalStore";
import Modal from "../util/Modal";
import { useHandleOverflow } from "@/hooks/useOverflowHandler";
import Link from "next/link";

const TEST_USER = { email: "test@test.com", password: "test1234" };

type AuthLinksProps = {
  mobileToggle?: () => void;
};

const AuthLinks = ({ mobileToggle }: AuthLinksProps) => {
  const [user, setUser] = useState<User | null>(null);
  const { isOpen: loginModalOpen, toggle: modalToggle } = useLoginModalStore();
  useHandleOverflow(loginModalOpen);

  // Modal state
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
      modalToggle();
    } catch (err: any) {
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleTestUserSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(
        auth,
        TEST_USER.email,
        TEST_USER.password,
      );
      modalToggle();
    } catch (err: any) {
      setError("Test user sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        modalToggle();
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        modalToggle();
      }
    } catch (err: any) {
      setError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  // Reset modal state when opened
  useEffect(() => {
    if (loginModalOpen) {
      setIsSignup(false);
      setEmail("");
      setPassword("");
      setError("");
      setLoading(false);
    }
  }, [loginModalOpen]);

  return (
    <div className="flex flex-col items-center gap-4 font-semibold md:flex-row">
      {user && (
        <>
          <Link
            href={"/profile"}
            className="transition duration-300 hover:text-red-500"
            onClick={mobileToggle}
          >
            {user.displayName || user.email}
          </Link>
          <button
            className="transition duration-300 hover:text-red-500"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </>
      )}
      {!user && (
        <div>
          <button
            onClick={modalToggle}
            className="transition duration-300 hover:text-red-500"
          >
            Sign In
          </button>
          <Modal open={loginModalOpen} toggle={modalToggle}>
            <div className="flex w-80 flex-col gap-6 rounded-xl bg-white px-6 py-8 shadow-xl md:w-96 dark:bg-gray-900">
              <p className="mb-2 text-center text-2xl font-bold">
                {isSignup ? "Create Account" : "Sign In"}
              </p>
              <form onSubmit={handleEmailAuth} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete={isSignup ? "new-password" : "current-password"}
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-red-500 py-2 text-lg font-semibold text-white transition duration-300 hover:bg-red-600 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading
                    ? isSignup
                      ? "Signing up..."
                      : "Signing in..."
                    : isSignup
                      ? "Sign Up"
                      : "Sign In"}
                </button>
              </form>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center gap-2 rounded-md border border-slate-800 p-3 shadow-md shadow-slate-800 transition-colors duration-300 hover:bg-red-500 hover:text-white disabled:opacity-60"
                  disabled={loading}
                >
                  <span className="i-mdi-google text-xl" /> Sign in with Google
                </button>
                <button
                  onClick={handleTestUserSignIn}
                  className="flex items-center justify-center gap-2 rounded-md border border-slate-800 p-3 shadow-md shadow-slate-800 transition-colors duration-300 hover:bg-red-500 hover:text-white disabled:opacity-60"
                  disabled={loading}
                >
                  <span className="i-mdi-account text-xl" /> Sign in as Test
                  User
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm">
                  {isSignup
                    ? "Already have an account?"
                    : "Don't have an account?"}
                </span>
                <button
                  type="button"
                  className="text-sm font-semibold text-red-500 hover:underline"
                  onClick={() => setIsSignup(!isSignup)}
                  disabled={loading}
                >
                  {isSignup ? "Sign In" : "Sign Up"}
                </button>
              </div>
              {error && (
                <div className="mt-2 text-center text-sm text-red-500">
                  {error}
                </div>
              )}
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
