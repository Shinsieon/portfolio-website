"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import ThemeButton from "./ThemeButton";

const NavBar = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <main className="flex flex-col font-ios">
        <ThemeButton></ThemeButton>
        {/* <Navbar /> */}
        <div className="container px-4 md:px-12 lg:px-12 py-5 md:py-20 w-full">
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
};

export default NavBar;
