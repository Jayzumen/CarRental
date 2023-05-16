import { MainProvider } from "@/lib/providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Rental",
  description: "Car Rental Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-slate-100 dark:bg-[#121212]"}>
        <MainProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
