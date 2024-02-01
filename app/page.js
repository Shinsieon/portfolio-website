"use client";
import HeroSection from "./components/HeroSection";
import { ThemeProvider } from "next-themes";
import ThemeButton from "./components/ThemeButton";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex flex-col ">
        <ThemeButton></ThemeButton>
        {/* <Navbar /> */}
        <div className="container mx-auto px-12 py-20 scrollbar-hide">
          <HeroSection />
        </div>
      </main>
    </ThemeProvider>
  );
}
