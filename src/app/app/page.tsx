"use client";

import { Suspense } from "react";
import AppNav from "./AppNav";
import BlocklyComponent from "./BlocklyComponent";
import SourceCodeBlock from "./SourceCodeBlock";

const BlocklyPage = () => {
  return (
    <main className="flex h-screen flex-col bg-gray-900">
      <AppNav />
      <section className="grid flex-1 grid-cols-12 gap-4 p-2">
        <section className="relative col-span-9 h-full">
          <Suspense
            fallback={<h1 className="text-center text-gray-100">Loading...</h1>}
          >
            <BlocklyComponent />
          </Suspense>
        </section>

        <section className="relative col-span-3 col-start-10 w-full rounded-md bg-white text-xs leading-3 text-black">
          <SourceCodeBlock code={""} />
        </section>
      </section>
    </main>
  );
};

export default BlocklyPage;
