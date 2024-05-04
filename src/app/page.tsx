"use server";

import { HeroHighlight } from "@/components/hero-highlight";
import React from "react";

const windows_download_link =
  "https://firebasestorage.googleapis.com/v0/b/witblox-5ae68.appspot.com/o/wit-pro%2Fwit-pro-0.9.8-setup.exe?alt=media&token=cd77de23-e6cc-4dba-94d6-035f0e2de293";
const mac_download_link =
  "https://firebasestorage.googleapis.com/v0/b/witblox-5ae68.appspot.com/o/wit-pro%2Fwit-pro-0.9.8.dmg?alt=media&token=10a1eb6d-0951-4458-895b-d33c8cba3a74";

const Page = async () => {
  return (
    <>
      <HeroHighlight
        containerClassName="h-screen"
        className="flex flex-col items-center justify-center p-2"
      >
        <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-center text-8xl font-bold text-transparent">
          Wit-Pro
        </h1>
        <p className="mt-4 text-center text-lg">
          A drag and drop programming kit for Arduino that <br />
          generates code for you using a simple block-based interface.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={windows_download_link}
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            download={true}
            rel="noopener noreferrer"
            target="_blank"
          >
            Download for Windows
          </a>
          <a
            href={mac_download_link}
            className="rounded-md bg-gray-500 px-4 py-2 text-white"
            download={true}
            rel="noopener noreferrer"
            target="_blank"
          >
            Download for Mac
          </a>
        </div>
      </HeroHighlight>
    </>
  );
};

export default Page;
