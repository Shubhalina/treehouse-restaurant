"use client";

import { motion } from "framer-motion";
import {
  Car,
  Trees,
  Utensils,
  PartyPopper,
  HeartHandshake,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Delicious Food",
    desc: "Freshly prepared dishes with authentic flavors.",
  },
  {
    icon: PartyPopper,
    title: "Birthday Celebrations",
    desc: "Celebrate your special day with us.",
  },
  {
    icon: HeartHandshake,
    title: "Wedding Receptions",
    desc: "Elegant venue for unforgettable receptions.",
  },
  {
    icon: Trees,
    title: "Peaceful Environment",
    desc: "Relax and enjoy nature with your loved ones.",
  },
  {
    icon: Car,
    title: "Large Parking Area",
    desc: "Safe and spacious parking for all guests.",
  },
  {
    icon: Star,
    title: "Excellent Service",
    desc: "Friendly staff dedicated to your comfort.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center text-5xl font-bold"
        >
          Why Choose TREE HOUSE?
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-16 max-w-2xl mx-auto">
          We provide more than delicious food. We create memorable experiences
          for families, friends, and celebrations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 rounded-3xl p-8 border border-gray-800"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-6">
                  <Icon className="text-black" size={32} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}