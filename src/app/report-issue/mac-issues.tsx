"use client";
import React, { useState } from "react";

const MacIssues = () => {
  const [macIssues, setMacIssues] = useState([
    {
      title: "App is broken or damaged.",
      answer: `
        Open Finder
        Go to Applications
        Right-click on Wit-Pro
        Click on Open
        Click on Open again
      `,
      opened: false,
    },
    {
      title: "App is broken or damaged.",
      answer: `
        Open Finder
        Go to Applications
        Right-click on Wit-Pro
        Click on Open
        Click on Open again
      `,
      opened: false,
    },
  ]);

  const handleAccordionOpen = (index: number) => {
    setMacIssues((prevState) => {
      return prevState.map((issue, i) => {
        if (i === index) {
          return {
            ...issue,
            opened: !issue.opened,
          };
        }
        return issue;
      });
    });
  };

  return (
    <div className="w-2/5 rounded-md border px-10 py-5">
      <p className="text-center text-lg">
        Here are some known issues encountered by Mac users:
      </p>
      <ul className="mt-4">
        {macIssues.map((issue, index) => (
          <li key={index} className="my-2">
            <div
              className="flex cursor-pointer justify-between rounded-t-md border-gray-500 bg-gray-800 px-4 py-2"
              onClick={() => handleAccordionOpen(index)}
            >
              <h3 className="text-gray-400">{issue.title}</h3>
              <button className="rounded-md px-2">+</button>
            </div>

            {issue.opened && (
              <div className="rounded-b-md bg-gray-800 px-4 py-2">
                <p className="text-sm">{issue.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MacIssues;
