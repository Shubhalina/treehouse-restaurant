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
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Welcome to
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-yellow-400 mt-4"
          >
            TREE HOUSE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-200 mt-8 max-w-3xl mx-auto"
          >
            Restaurant • Wedding Reception • Birthday Celebration •
            Private Dining Cottages
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
          >
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition">
              Reserve Table
            </button>

            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition">
              Book an Event
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}