"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, Monitor, Apple, Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";

export default function DownloadPage() {
  const [platform, setPlatform] = useQueryState("platform");

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

      <Tabs
        defaultValue={platform ?? "windows"}
        className="mx-auto w-full max-w-3xl"
        onValueChange={setPlatform}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="windows">Windows</TabsTrigger>
          <TabsTrigger value="mac">macOS</TabsTrigger>
          <TabsTrigger value="linux">Linux</TabsTrigger>
        </TabsList>
        <TabsContent value="windows">
          <DownloadCard
            icon={<Monitor className="mb-4 h-12 w-12 text-primary" />}
            title="WitPro for Windows"
            version="v0.9.5"
            requirements="Windows 10 or later"
            downloadLink="https://firebasestorage.googleapis.com/v0/b/witpro-e38b9.appspot.com/o/executables%2Fwit-pro%20Setup%200.9.3.exe?alt=media&token=003188ee-13c0-4058-bb46-ca4de07d1864"
            platform="windows"
          />
        </TabsContent>
        <TabsContent value="mac">
          <DownloadCard
            icon={<Apple className="mb-4 h-12 w-12 text-primary" />}
            title="WitPro for macOS"
            version="v0.9.5"
            requirements="macOS 10.15 or later"
            downloadLink="https://firebasestorage.googleapis.com/v0/b/witpro-e38b9.appspot.com/o/executables%2Fwit-pro-0.9.5-universal.dmg?alt=media&token=627ce143-e891-4e93-bf63-2355657fa455"
            platform="mac"
          />
        </TabsContent>
        <TabsContent value="linux">
          <DownloadCard
            icon={<Terminal className="mb-4 h-12 w-12 text-primary" />}
            title="WitPro for Linux"
            version="v0.9.5"
            requirements="Ubuntu 20.04, Fedora 32, or compatible"
            downloadLink="#"
            platform="linux"
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
          asChild
        >
          <Link href="/documentation">
            View Documentation
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
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
  platform: "mac" | "windows" | "linux";
}

function DownloadCard({
  icon,
  title,
  version,
  requirements,
  downloadLink,
  comingSoon,
  platform,
}: DownloadCardProps) {
  const router = useRouter();

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
        <Button
          asChild
          className="w-full"
          disabled={comingSoon}
          onClick={() => {
            setTimeout(() => {
              router.push(
                `docs/installation/${platform}#step-3:-bypass-gatekeeper`
              );
            }, 2000);
          }}
        >
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
