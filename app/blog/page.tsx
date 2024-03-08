"use client";
import { ThemeProvider } from "next-themes";

import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex flex-col ">
        <BlogSection />
      </main>
    </ThemeProvider>
  );
}
