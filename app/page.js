"use client";
import AchievementsSection from "./components/AchievementsSection";
import BlogSection from "./components/BlogSection";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] px-12 py-4">
      <Navbar />
      <div className="container mx-auto px-12 py-20">
        <HeroSection />
        <AchievementsSection />
        <BlogSection />
        {/* <AboutSection /> */}
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
