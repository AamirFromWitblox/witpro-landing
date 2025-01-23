"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DownloadTabs from "./DownloadTabs";

export default function DownloadPage() {
  return (
    <main className="container mx-auto py-12">
      <motion.h1
        className="mb-8 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Download WitPro
      </motion.h1>
      <motion.p
        className="mb-12 text-center text-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Choose your operating system to get started with WitPro
      </motion.p>

      <Suspense>
        <DownloadTabs />
      </Suspense>

      <section className="mt-20">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Why Choose WitPro?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            title="Easy to Use"
            description="Intuitive drag-and-drop interface makes Arduino programming accessible to everyone."
          />
          <FeatureCard
            title="Powerful"
            description="Advanced features for experienced developers, including code export and real-time collaboration."
          />
          <FeatureCard
            title="Cross-Platform"
            description="Available for Windows, macOS, and Linux, ensuring compatibility across your devices."
          />
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Need Help Getting Started?</h2>
        <p className="mb-8 text-xl">
          Check out our comprehensive documentation and tutorials.
        </p>
        <Button
          size="lg"
          className="group text-lg transition-transform hover:scale-105"
          asChild
        >
          <Link href="/docs">
            View Documentation
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>
    </main>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full transition-transform hover:scale-105">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
