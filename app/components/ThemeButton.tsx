"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { HomeIcon, MoonIcon } from "@heroicons/react/24/solid";
const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className=" bg-gray-800 flex gap-1 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-2 py-2 text-xs md:text-sm rounded-lg "
    >
      <MoonIcon width={20}></MoonIcon>
      DarkMode
    </button>
  );
};

export default ThemeButton;
