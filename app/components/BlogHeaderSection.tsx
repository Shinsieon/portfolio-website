"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const BlogHeaderSection = () => {
  return (
    <section className="lg:py-2">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <TypeAnimation
              sequence={["Bono Space, Dev Blog", 1000]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-lg text-gray-500 lg:text-xl dark:text-gray-400">
            {"Welcome and be happy coders :)"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHeaderSection;
