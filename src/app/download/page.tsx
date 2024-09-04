"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, Monitor, Apple, Terminal, ArrowRight } from "lucide-react";

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

      <Tabs defaultValue="windows" className="mx-auto w-full max-w-3xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="windows">Windows</TabsTrigger>
          <TabsTrigger value="mac">macOS</TabsTrigger>
          <TabsTrigger value="linux">Linux</TabsTrigger>
        </TabsList>
        <TabsContent value="windows">
          <DownloadCard
            icon={<Monitor className="text-primary mb-4 h-12 w-12" />}
            title="WitPro for Windows"
            version="v1.2.3"
            requirements="Windows 10 or later"
            downloadLink="https://firebasestorage.googleapis.com/v0/b/witpro-e38b9.appspot.com/o/executables%2Fwit-pro%20Setup%200.9.3.exe?alt=media&token=003188ee-13c0-4058-bb46-ca4de07d1864"
          />
        </TabsContent>
        <TabsContent value="mac">
          <DownloadCard
            icon={<Apple className="text-primary mb-4 h-12 w-12" />}
            title="WitPro for macOS"
            version="v1.2.3"
            requirements="macOS 10.15 or later"
            downloadLink="#"
            comingSoon
          />
        </TabsContent>
        <TabsContent value="linux">
          <DownloadCard
            icon={<Terminal className="text-primary mb-4 h-12 w-12" />}
            title="WitPro for Linux"
            version="v1.2.3"
            requirements="Ubuntu 20.04, Fedora 32, or compatible"
            downloadLink="#"
            comingSoon
          />
        </TabsContent>
      </Tabs>

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
        >
          View Documentation{" "}
          <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </section>
    </main>
  );
}

interface DownloadCardProps {
  icon: React.ReactNode;
  title: string;
  version: string;
  requirements: string;
  downloadLink: string;
  comingSoon?: boolean;
}

function DownloadCard({
  icon,
  title,
  version,
  requirements,
  downloadLink,
  comingSoon,
}: DownloadCardProps) {
  return (
    <Card className="mt-4">
      <CardHeader className="text-center">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-min"
        >
          {icon}
        </motion.div>
        <CardTitle className="flex items-center justify-center gap-2">
          {title}
          {comingSoon && <Badge variant="secondary">Coming Soon</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-2">Version: {version}</p>
        <p className="mb-4">System Requirements: {requirements}</p>
        <Button asChild className="w-full" disabled={comingSoon}>
          {!comingSoon && (
            <a href={downloadLink} download>
              <Download className="mr-2 h-4 w-4" />{" "}
              {comingSoon ? "Notify Me" : "Download Now"}
            </a>
          )}
        </Button>
      </CardContent>
    </Card>
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
