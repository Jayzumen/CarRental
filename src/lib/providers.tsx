"use client";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProviders>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProviders>
  );
};
