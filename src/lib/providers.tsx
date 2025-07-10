"use client";
import { ThemeProvider } from "@/components/util/theme-provider";
import { Toaster } from "react-hot-toast";

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

const ToastProvider = () => {
  return <Toaster position="top-center" reverseOrder={false} />;
};

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProviders>
      {children}
      <ToastProvider />
    </ThemeProviders>
  );
};
