import Link from "next/link";
import React from "react";
import PostCard from "./PostCard";

const BlogSection = () => {
  return (
    <section className="lg:py-16" id="blog">
      <PostCard />
    </section>
  );
};

export default BlogSection;
