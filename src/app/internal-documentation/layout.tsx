import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="mb-10 text-center text-2xl font-semibold">
        Documentation
      </h1>
      {children}
    </div>
  );
};

export default Layout;
