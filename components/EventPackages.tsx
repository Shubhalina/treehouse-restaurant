"use client";

import { motion } from "framer-motion";
import { Cake, Heart, Home } from "lucide-react";

const packages = [
  {
    title: "Birthday Celebration",
    price: "Starting from ₹4,999",
    icon: Cake,
    features: [
      "Beautiful Decorations",
      "Music Setup",
      "Delicious Food",
      "Private Seating",
      "Photography Space",
    ],
  },
  {
    title: "Wedding Reception",
    price: "Starting from ₹29,999",
    icon: Heart,
    features: [
      "Elegant Venue",
      "Buffet Catering",
      "Stage Decoration",
      "Guest Seating",
      "Parking Facility",
    ],
  },
  {
    title: "Private Dining Cottage",
    price: "Book by Time Slot",
    icon: Home,
    features: [
      "Private Cottage",
      "Food & Drinks",
      "Family Friendly",
      "Peaceful Environment",
      "Perfect for Small Groups",
    ],
  },
];

export default function EventPackages() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          Event Packages
        </motion.h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          Celebrate your special moments with us.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">

          {packages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="rounded-3xl shadow-2xl border p-8"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-black" />
                </div>

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="text-yellow-600 font-semibold mt-3 mb-6">
                  {item.price}
                </p>

                <ul className="space-y-3 text-gray-600">
                  {item.features.map((feature) => (
                    <li key={feature}>✅ {feature}</li>
                  ))}
                </ul>

                <button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-full font-semibold transition">
                  Book Now
                </button>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}