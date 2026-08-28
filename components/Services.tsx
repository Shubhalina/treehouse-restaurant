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
  title: "Corporate Conferences",
  description:
    "A professional venue for conferences, meetings, corporate gatherings, and business events with comfortable arrangements for your guests.",
  icon: Users,
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
      className="bg-[#F7F4ED] py-20 md:py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-[#C79A32] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            What We Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2823]">
            Our Services
          </h2>

          <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5 mb-5" />

          <p className="text-[#66706A] text-lg leading-8">
            From everyday dining to special celebrations, TREE HOUSE offers
            spaces and experiences for every occasion.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-[#E4DED1] bg-[#FFFCF7] p-8 shadow-[0_12px_40px_rgba(35,45,38,0.06)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#17352A] text-[#E2BD62] transition-transform duration-300 group-hover:scale-105">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#1E2823] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#66706A] leading-7">
                  {service.description}
                </p>

                {/* Accent */}
                <div className="mt-6 h-[2px] w-10 bg-[#C79A32] transition-all duration-300 group-hover:w-16" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}