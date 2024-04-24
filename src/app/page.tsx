import { HeroHighlight } from "@/components/hero-highlight";
import React from "react";

const Page = () => {
  return (
    <>
      <HeroHighlight className="flex h-screen flex-col items-center justify-center p-2">
        <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-center text-8xl font-bold text-transparent">
          Wit-Pro
        </h1>
        <p className="mt-4 text-center text-lg">
          A drag and drop programming kit for Arduino that <br />
          generates code for you using a simple block-based interface.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href=""
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Download for Windows
          </a>
          <div className="relative">
            <a
              className="cursor-default rounded-md bg-gray-500 px-4 py-2 text-white opacity-60"
              aria-disabled="true"
            >
              Download for Mac
            </a>

            <div className="absolute -right-5 -top-5">
              <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                Coming soon🔥
              </span>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </>
  );
};

export default Page;
