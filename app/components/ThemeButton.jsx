"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@heroicons/react/24/solid";
const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="fixed bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg bottom-32 right-5"
    >
      <MoonIcon className="h-4 w-4"></MoonIcon>
    </button>
  );
};

export default ThemeButton;
