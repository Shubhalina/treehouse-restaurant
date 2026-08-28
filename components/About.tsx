"use client";

import { motion } from "framer-motion";
import { Leaf, UtensilsCrossed, Heart, Baby} from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "A Relaxed Setting",
    text: "A welcoming space designed for dining, gathering and enjoying meaningful moments.",
  },
  {
    icon: UtensilsCrossed,
    title: "Good Food",
    text: "A diverse selection of dishes prepared to bring together familiar favourites and new flavours.",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    text: "We believe every guest should feel comfortable, welcomed and cared for.",
  },
  {
  icon: Baby,
  title: "Children's Playground",
  text: "A fun and welcoming play area where children can enjoy themselves while families relax and dine.",
},
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#17352A] py-20 md:py-24 px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================================================= */}
          {/* VIDEO */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-[520px] overflow-hidden rounded-2xl shadow-2xl bg-black">
              <video
                src="/images/about-tree-house.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* ABOUT TEXT */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* Small Heading */}

            <p className="text-[#E2BD62] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              About TREE HOUSE
            </p>

            {/* Main Heading */}

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              A Place to Eat,
              <br />
              Gather & Celebrate
            </h2>

            {/* Gold Divider */}

            <div className="w-14 h-[2px] bg-[#C79A32] mt-6 mb-7" />

            {/* First Paragraph */}

            <p className="text-[#C5CEC8] text-base md:text-lg leading-8 mb-5">
              TREE HOUSE is a destination in Jagiroad where food,
              celebrations and memorable moments come together.
            </p>

            {/* Second Paragraph */}

            <p className="text-[#AEBBB4] leading-7 mb-8">
              Whether you're joining us for a relaxed meal, spending time
              with family and friends or planning a special occasion,
              our aim is to create a comfortable and welcoming experience
              for every guest.
            </p>

            {/* ================================================= */}
            {/* HIGHLIGHTS */}
            {/* ================================================= */}

            <div className="space-y-5">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4"
                  >

                    {/* Icon */}

                    <div
                      className="
                        shrink-0
                        w-11
                        h-11
                        rounded-full
                        bg-[#C79A32]/15
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={21}
                        className="text-[#E2BD62]"
                      />
                    </div>

                    {/* Text */}

                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>

                      <p className="text-[#AEBBB4] text-sm leading-6 mt-1">
                        {item.text}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

          </motion.div>

        </div>

        {/* ================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-10 border-t border-white/10 text-center"
        >

          <p className="text-[#E2BD62] uppercase tracking-[0.2em] text-xs font-semibold">
            TREE HOUSE, JAGIROAD
          </p>

          <p className="text-white text-xl md:text-2xl font-medium mt-3">
            Good Food. Warm Hospitality. Memorable Moments.
          </p>

        </motion.div>

      </div>
    </section>
  );
}