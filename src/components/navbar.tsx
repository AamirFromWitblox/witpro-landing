"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "container sticky top-0 z-50 mx-auto w-full px-20 py-4",
        "bg-background/80 backdrop-blur-sm",
        "border-b border-border/40",
        "supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <nav className="flex items-center justify-center md:justify-between">
        <motion.h1
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">WitPro</Link>
        </motion.h1>
        <div className="hidden space-x-4 md:block">
          <NavButton link="/#features">Features</NavButton>
          <NavButton link="/#testimonials">Testimonials</NavButton>
          <NavButton link="/#faq">FAQ</NavButton>
          <Button
            variant="outline"
            className="transition-transform hover:scale-105"
            asChild
          >
            <Link href="/download">Download</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;

interface NavButtonProps {
  children: React.ReactNode;
  link: string;
}

function NavButton({ children, link }: NavButtonProps) {
  return (
    <Button
      variant="ghost"
      className="transition-colors hover:text-primary"
      asChild
    >
      <Link href={link}>{children}</Link>
    </Button>
  );
}
