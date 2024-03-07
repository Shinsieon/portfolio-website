"use client";
import React, { useState } from "react";
import { ThemeProvider } from "next-themes";
import ThemeButton from "./ThemeButton";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

const menus = [
  { menuName: "Home", href: "/" },
  { menuName: "Blog", href: "/blog" },
  { menuName: "DarkMode" },
];
const NavBar = ({ children }) => {
  const [selNav, setSelNav] = useState("Home");
  return (
    <ThemeProvider attribute="class">
      <main className="flex flex-col font-ios">
        <nav className=" border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex items-center justify-end mx-auto p-4">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-1 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <Bars3Icon width={15} />
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4  md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {menus.map((menu, idx) => {
                  if (menu.menuName === "DarkMode") {
                    return <ThemeButton></ThemeButton>;
                  } else {
                    return (
                      <li key={idx} className="text-xl">
                        <Link
                          href={menu.href}
                          className={
                            selNav === menu.menuName
                              ? "block mt-0.5 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                              : "block mt-0.5 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                          }
                          onClick={() => {
                            setSelNav(menu.menuName);
                          }}
                        >
                          {menu.menuName}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </nav>

        {/* <ThemeButton></ThemeButton> */}
        {/* <Navbar /> */}
        <div className="px-4 py-5 md:py-20 md:flex items-center justify-center">
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
};

export default NavBar;
