"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import ChartComponent from "./VisitorSection";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-10 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Hello I am Sieon, <br></br>I Love Clean Codes.
          </h1>
          <p className="mb-6 text-lg text-gray-500 lg:text-xl dark:text-gray-400">
            I observe issues occurring around me and contemplate the best ways
            to solve them. Programming is my favorite tool, as with just a few
            lines of code, I can make a better world.
          </p>
          <AboutSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/profile-pic.png"
              alt="profile image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
