"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/about.jpg"
            alt="Tree House Restaurant"
            width={700}
            height={600}
            className="rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-600 font-semibold uppercase tracking-widest">
            About Us
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6">
            Welcome to TREE HOUSE
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            TREE HOUSE is more than just a restaurant. We offer delicious food,
            a peaceful atmosphere, private dining cottages, birthday
            celebrations, wedding receptions, and family gatherings. Whether
            you're here for a meal or a special occasion, we make every visit
            memorable.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <p>Fresh & Delicious Food</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <p>Wedding Reception Venue</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <p>Birthday Party Celebration</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <p>Private Dining Cottages</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <p>Family Friendly Environment</p>
            </div>

          </div>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
}