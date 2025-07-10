import type { Metadata } from "next";
import "./globals.css";
import { MainProvider } from "@/lib/providers";
import { Inter, Great_Vibes } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer/Footer";

const greatVibes = Great_Vibes({
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Car Rental Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${greatVibes.variable} flex min-h-screen flex-col`}
      >
        <MainProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
