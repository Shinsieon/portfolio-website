"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const BlogHeaderSection = () => {
  return (
    <section>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="justify-self-start"
        >
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <TypeAnimation
              sequence={["Bono's" + "\n" + "Dev Blog", 1000]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-sm text-gray-500 lg:text-xl dark:text-gray-400">
            {"Welcome and be happy coders :)"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHeaderSection;
