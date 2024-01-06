import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <section className="lg:py-16" id="blog">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-col items-center justify-between">
        <Link
          className="text-center text-3xl font-bold text-white mt-4"
          href={"/blog"}
        >
          Look around My Blog {">"}
        </Link>
        <span className="text-center text-1xl text-white mt-4 mb-8 md:mb-12">
          The place where I note what I've learned and the things I've been up
          to
        </span>
      </div>
    </section>
  );
};

export default BlogSection;
