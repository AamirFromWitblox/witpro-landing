import React from "react";
import MacIssues from "./mac-issues";

const ReportIssue = () => {
  return (
    <main className="min-h-screen bg-gray-900">
      <h1 className="pt-32 text-center text-4xl">
        Facing Issues in
        <select id="" className="mx-3 rounded-md bg-gray-700 p-2 text-white">
          <option value="Windows">Windows</option>
          <option value="Mac">Mac</option>
        </select>
        OS?
      </h1>
      <section className="mt-10 flex flex-col items-center justify-center">
        <MacIssues />
      </section>
    </main>
  );
};

export default ReportIssue;
