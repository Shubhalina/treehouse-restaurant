"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Professional Forest Overlay */}
      <div className="absolute inset-0 bg-[#10261F]/65"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6">

          {/* Welcome */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-[#FFFCF7]"
          >
            Welcome to
          </motion.h1>

          {/* TREE HOUSE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-[#E2BD62] mt-4"
          >
            TREE HOUSE
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-[#F1EEE6] mt-8 max-w-3xl mx-auto"
          >
            Restaurant • Wedding Reception • Birthday Celebration •
            Private Dining Cottages
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
          >

            {/* Reserve Table */}
            <a
              href="/booking/table"
              className="bg-[#C79A32] hover:bg-[#D5AE55] text-[#10261F] px-8 py-4 rounded-full font-semibold transition duration-300"
            >
              Reserve Table
            </a>

            {/* Book Event */}
            <a
              href="/booking/event"
              className="border-2 border-[#FFFCF7] hover:bg-[#FFFCF7] hover:text-[#10261F] text-[#FFFCF7] px-8 py-4 rounded-full font-semibold transition duration-300"
            >
              Book an Event
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}