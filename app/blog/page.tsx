"use client";
import { ThemeProvider } from "next-themes";

import ThemeButton from "../components/ThemeButton";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex flex-col ">
        <ThemeButton></ThemeButton>
        <div className="container mx-auto px-12">
          <BlogSection />
        </div>
      </main>
    </ThemeProvider>
  );
}
