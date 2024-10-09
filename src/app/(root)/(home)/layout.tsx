import React from "react";
import Sidebar from "./../../../components/Sidebar";
import Navbar from "./../../../components/Navbar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex w-full">
        <Sidebar></Sidebar>
        {children}
      </div>
      FOOTER
    </div>
  );
}

export default HomeLayout;
