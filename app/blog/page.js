import BlogHeaderSection from "../components/BlogHeaderSection";
import VisitorSection from "../components/VisitorSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] px-12 py-4">
      <div className="container mx-auto px-12 py-20">
        <BlogHeaderSection />
        <VisitorSection />
      </div>
    </main>
  );
}
