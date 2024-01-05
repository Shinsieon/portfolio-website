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
          <h3 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <TypeAnimation
              sequence={["Bono Space, Dev Blog", 1000]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h3>
          <span className="text-gray-300">
            <TypeAnimation
              sequence={["Welcome and be happy coders :)", 1000]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHeaderSection;
