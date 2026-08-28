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
      className="bg-[#17352A] py-10 md:py-20 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <p className="text-[#E2BD62] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-2 md:mb-4">
            The TREE HOUSE Experience
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Why Choose Us
          </h2>

          <div className="w-12 md:w-14 h-[2px] bg-[#C79A32] mx-auto mt-3 md:mt-5 mb-3 md:mb-5" />

          <p className="text-[#C5CEC8] text-sm md:text-lg leading-6 md:leading-7">
            More than a place to dine, TREE HOUSE is a place to gather,
            celebrate and create memorable moments.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* REASONS */}
        {/* ================================================= */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -3 }}
                className="
                  group
                  bg-[#204437]
                  border
                  border-white/10
                  rounded-xl
                  md:rounded-2xl
                  p-4
                  md:p-7
                  transition-all
                  duration-300
                  hover:border-[#C79A32]/40
                "
              >

                {/* ICON */}

                <div
                  className="
                    w-9
                    h-9
                    md:w-12
                    md:h-12
                    rounded-full
                    bg-[#C79A32]/15
                    flex
                    items-center
                    justify-center
                    mb-3
                    md:mb-6
                    group-hover:bg-[#C79A32]/25
                    transition
                  "
                >
                  <Icon
                    size={18}
                    className="text-[#E2BD62] md:hidden"
                  />

                  <Icon
                    size={23}
                    className="text-[#E2BD62] hidden md:block"
                  />
                </div>

                {/* TITLE */}

                <h3 className="text-base md:text-xl font-semibold text-white mb-1.5 md:mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="text-[#B9C5BE] leading-5 md:leading-7 text-xs md:text-base">
                  {item.description}
                </p>

              </motion.div>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8 md:mt-14"
        >
          <p className="text-[#E2BD62] text-xs md:text-sm uppercase tracking-[0.2em]">
            TREE HOUSE, JAGIROAD
          </p>

          <p className="text-white text-base md:text-2xl font-medium mt-2 md:mt-3">
            Good Food. Great Moments. Lasting Memories.
          </p>
        </motion.div>

      </div>
    </section>
  );
}