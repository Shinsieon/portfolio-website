"use client";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import { ThemeProvider } from "next-themes";
import ThemeButton from "./components/ThemeButton";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex min-h-screen flex-col ">
        <ThemeButton></ThemeButton>
        {/* <Navbar /> */}
        <div className="container mx-auto px-12 py-20 scrollbar-hide">
          <HeroSection />

          <EmailSection />
        </div>
      </main>
    </ThemeProvider>
  );
}
