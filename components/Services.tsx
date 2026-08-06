"use client";

import { motion } from "framer-motion";
import {
  Utensils,
  Cake,
  HeartHandshake,
  Home,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Restaurant",
    description:
      "Enjoy delicious food in a beautiful and peaceful atmosphere with your family and friends.",
    icon: Utensils,
  },
  {
    title: "Birthday Celebration",
    description:
      "Celebrate unforgettable birthdays with decoration, food, music, and joyful memories.",
    icon: Cake,
  },
  {
    title: "Wedding Reception",
    description:
      "Host elegant wedding receptions with spacious seating and delicious catering.",
    icon: HeartHandshake,
  },
  {
    title: "Private Dining Cottages",
    description:
      "Book private cottages for family dining, parties, and enjoying food & drinks together.",
    icon: Home,
  },
  {
    title: "Family Gatherings",
    description:
      "Perfect venue for anniversaries, reunions, office parties, and special occasions.",
    icon: Users,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Our Services
        </motion.h2>

        <p className="text-center text-gray-400 mb-14">
          Everything you need for dining and memorable celebrations.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg transition"
              >
                <div className="mb-5 inline-flex rounded-full bg-yellow-500 p-4 text-black">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}