"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Sparkles,
  Heart,
  Users,
  Trees,
  PartyPopper,
} from "lucide-react";

const reasons = [
  {
    icon: UtensilsCrossed,
    title: "Quality Food",
    description:
      "Freshly prepared dishes made with care, bringing together flavours for every kind of guest.",
  },
  {
    icon: Trees,
    title: "A Unique Setting",
    description:
      "A welcoming environment where good food, relaxed moments and memorable experiences come together.",
  },
  {
    icon: PartyPopper,
    title: "Perfect for Celebrations",
    description:
      "A comfortable destination for weddings, birthdays, family gatherings and special occasions.",
  },
  {
    icon: Users,
    title: "Events & Gatherings",
    description:
      "A versatile space suited for private celebrations, corporate gatherings and social events.",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    description:
      "We believe every guest deserves to feel welcomed, comfortable and well looked after.",
  },
  {
    icon: Sparkles,
    title: "Memorable Experiences",
    description:
      "From dining to celebrations, we focus on creating moments worth remembering.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-[#17352A] py-20 md:py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[#E2BD62] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            The TREE HOUSE Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose Us
          </h2>

          <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5 mb-5" />

          <p className="text-[#C5CEC8] text-base md:text-lg leading-7">
            More than a place to dine, TREE HOUSE is a place to gather,
            celebrate and create memorable moments.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group bg-[#204437] border border-white/10 rounded-2xl p-7 md:p-8 transition-all duration-300 hover:border-[#C79A32]/40"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#C79A32]/15 flex items-center justify-center mb-6 group-hover:bg-[#C79A32]/25 transition">
                  <Icon
                    size={23}
                    className="text-[#E2BD62]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#B9C5BE] leading-7 text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-[#E2BD62] text-sm uppercase tracking-[0.2em]">
            TREE HOUSE, JAGIROAD
          </p>

          <p className="text-white text-xl md:text-2xl font-medium mt-3">
            Good Food. Great Moments. Lasting Memories.
          </p>
        </motion.div>

      </div>
    </section>
  );
}