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
      <body className={inter.className}>
        <MainProvider>
          <Navbar />
          <main className="mx-auto min-h-[calc(100vh-160px)] lg:w-[80%]">
            {children}
          </main>
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
