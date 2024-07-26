import React from "react";

const CircularProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div>
      <svg className="h-full w-full" viewBox="0 0 100 100">
        <circle
          className="stroke-current text-gray-200"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        />
        <circle
          className="stroke-current text-indigo-500 transition-all duration-300 ease-in-out"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={`calc(251.2 - (251.2 * ${percentage}) / 100)`}
        />

        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {percentage.toFixed(0)}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
