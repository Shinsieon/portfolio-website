import BlogHeaderSection from "../components/BlogHeaderSection";
import BlogTableSection from "../components/BlogTableSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] px-12">
      <div className="container mx-auto px-12">
        <BlogHeaderSection />
        <BlogTableSection />
      </div>
    </main>
  );
}
