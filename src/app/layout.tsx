import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
        <div className="from-background to-secondary min-h-screen bg-gradient-to-b px-20">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
