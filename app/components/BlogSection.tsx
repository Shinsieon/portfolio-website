import React from "react";
import { motion } from "framer-motion";
import BlogHeaderSection from "./BlogHeaderSection";
import BlogTableSection from "./BlogTableSection";
const BlogSection = () => {
  return (
    <section id="blog">
      <div className="grid grid-cols-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center text-center sm:text-left justify-self-start w-full"
        >
          {" "}
          <BlogHeaderSection />
          <BlogTableSection />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
