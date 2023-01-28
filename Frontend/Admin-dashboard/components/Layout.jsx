import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-white flex-1 p-4">
          {children}
      </div>
    </div>
  );
};

export default Layout;
