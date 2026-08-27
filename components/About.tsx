"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    "Fresh & Delicious Food",
    "Wedding Reception Venue",
    "Birthday Party Celebration",
    "Private Dining Cottages",
    "Family Friendly Environment",
  ];

  return (
    <section
      id="about"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about.jpg"
            alt="TREE HOUSE Restaurant"
            className="w-full h-[430px] object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Small Heading */}
          <p className="text-yellow-600 font-bold tracking-[0.2em] uppercase mb-4">
            About Us
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to TREE HOUSE
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-lg leading-8 mb-8">
            TREE HOUSE is more than just a restaurant. We offer delicious food,
            a peaceful atmosphere, private dining cottages, birthday
            celebrations, wedding receptions, and family gatherings. Whether
            you're here for a meal or a special occasion, we make every visit
            memorable.
          </p>

          {/* FEATURES */}
          <div className="space-y-5 mb-10">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <CheckCircle
                  size={25}
                  className="text-green-500 flex-shrink-0"
                />

                <span className="text-gray-600 text-lg font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <a
            href="#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition"
          >
            Learn More
          </a>
        </motion.div>

      </div>
    </section>
  );
}