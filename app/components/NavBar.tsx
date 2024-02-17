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
        <div className="container mx-auto px-12 py-20">{children}</div>
      </main>
    </ThemeProvider>
  );
};

export default NavBar;
