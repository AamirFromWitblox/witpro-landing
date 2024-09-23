import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wit Pro | Block-based Arduino Programming Kit",
  description:
    "A drag and drop programming kit for Arduino that generates code for you using a simple block-based interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary px-10 md:px-20">
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
