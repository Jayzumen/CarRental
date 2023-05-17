"use client";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

const ToastProvider = () => {
  return <Toaster position="top-center" reverseOrder={false} />;
};

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProviders>
      <AuthProvider>
        {children}
        <ToastProvider />
      </AuthProvider>
    </ThemeProviders>
  );
};
