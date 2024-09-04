"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavButtonProps {
  children: React.ReactNode;
  href: string;
}

function NavButton({ children, href }: NavButtonProps) {
  return (
    <Button
      variant="ghost"
      className="hover:text-primary transition-colors"
      asChild
    >
      <a href={href}>{children}</a>
    </Button>
  );
}

export default function DocsNavbar() {
  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full",
        "bg-background/80 backdrop-blur-sm",
        "border-border/40 border-b",
        "supports-[backdrop-filter]:bg-background/60"
      )}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.h1
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              WitPro
            </a>
          </motion.h1>
          <div className="space-x-4">
            <NavButton href="/features">Features</NavButton>
            <NavButton href="/docs">Documentation</NavButton>
            <NavButton href="/download">Download</NavButton>
            <Button
              variant="outline"
              className="transition-transform hover:scale-105"
            >
              Support
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
