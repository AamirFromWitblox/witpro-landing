import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Sidebar() {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
          Getting Started
        </h4>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          <Button
            variant="ghost"
            className="w-full justify-start font-normal"
            asChild
          >
            <Link href="/docs">Introduction</Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start font-normal"
            asChild
          >
            <Link href="/docs/installation">Installation</Link>
          </Button>
          <div className="ml-4">
            <Button
              variant="ghost"
              className="w-full justify-start font-normal"
              asChild
            >
              <Link href="/docs/installation/windows">
                Windows Installation
              </Link>
            </Button>
          </div>
          <div className="ml-4">
            <Button
              variant="ghost"
              className="w-full justify-start font-normal"
              asChild
            >
              <Link href="/docs/installation/mac">Mac Installation</Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start font-normal"
            asChild
          >
            <Link href="/docs/quickstart">Quickstart</Link>
          </Button>
        </div>
        {/* <h4 className="px-2 py-1 mt-4 mb-1 text-sm font-medium rounded-md">
          Core Concepts
        </h4>
        <div className="grid grid-flow-row text-sm auto-rows-max">
          <Button
            variant="ghost"
            className="justify-start w-full font-normal"
            asChild
          >
            <Link href="/docs/architecture">Architecture</Link>
          </Button>
          <Button
            variant="ghost"
            className="justify-start w-full font-normal"
            asChild
          >
            <Link href="/docs/data-model">Data Model</Link>
          </Button>
          <Button
            variant="ghost"
            className="justify-start w-full font-normal"
            asChild
          >
            <Link href="/docs/security">Security</Link>
          </Button>
        </div> */}
      </ScrollArea>
    </aside>
  );
}
