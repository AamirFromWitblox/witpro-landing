import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Apple, Terminal } from "lucide-react";
import { useQueryState } from "nuqs";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useDownloads } from "@/hooks/useDownloads";

const DownloadTabs = () => {
  const { dowloads, error, isLoading } = useDownloads();
  const [platform, setPlatform] = useQueryState("platform");

  if (isLoading) return <LoaderSkeleton />;

  if (error || !dowloads) return <h3>{error}</h3>;

  return (
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
      <>
        <TabsContent value="windows">
          <DownloadCard
            icon={<Monitor className="mb-4 h-12 w-12 text-primary" />}
            title="WitPro for Windows"
            version={`v${dowloads.windows.version}`}
            requirements="Windows 10 or later"
            downloadLink={dowloads.windows.url}
            platform="windows"
          />
        </TabsContent>
        <TabsContent value="mac">
          <DownloadCard
            icon={<Apple className="mb-4 h-12 w-12 text-primary" />}
            title="WitPro for macOS"
            version={`v${dowloads.mac.version}`}
            requirements="macOS 10.15 or later"
            downloadLink={dowloads.mac.url}
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
      </>
    </Tabs>
  );
};

export default DownloadTabs;

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

function LoaderSkeleton() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-2 w-full animate-pulse self-center sm:w-3/6">
        <div className="mb-4 h-10 rounded-md bg-gray-200"></div>
        <div className="mb-4 h-72 rounded-md bg-gray-200"></div>
      </div>
    </div>
  );
}
