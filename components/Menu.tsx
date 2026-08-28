"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import { useState } from "react";

const menuSections = [
  {
    title: "A Taste of TREE HOUSE",
    items: [
      {
        name: "Chicken Biryani",
        image: "/images/food1.jpg",
      },
      {
        name: "Butter Chicken",
        image: "/images/food2.jpg",
      },
      {
        name: "Paneer Butter Masala",
        image: "/images/food3.jpg",
      },
      {
        name: "Chole Bhature",
        image: "/images/food11.jpg",
      },
       {
        name: "Tandoori Chicken",
        image: "/images/food5.jpg",
      },
       {
        name: "Hakka Noodles",
        image: "/images/food4.jpg",
      },
      {
        name: "Veg Manchurian",
        image: "/images/food14.jpg",
      },
      {
        name: "Crispy Prawns",
        image: "/images/food8.jpg",
      },
      {
        name: "Grilled Octopus",
        image: "/images/food9.jpg",
      },
       {
        name: "Sizzler",
        image: "/images/food7.jpg",
      },
      {
        name: "Crispy BabyCorn",
        image: "/images/food16.jpg",
      },
      {
        name: "Chilli Paneer",
        image: "/images/food17.jpg",
      },
      {
        name: "Fresh Lime Soda",
        image: "/images/food6.jpg",
      },
      {
        name: "Cold Coffee",
        image: "/images/food12.jpg",
      },
      {
        name: "Black Tea",
        image: "/images/food13.jpg",
      },
      {
        name: "Milk Coffee",
        image: "/images/food15.jpg",
      },
    ],
  },
];

export default function Menu() {
  const [showRestaurantMenu, setShowRestaurantMenu] = useState(false);

  return (
    <>
      {/* ================================================= */}
      {/* MENU SECTION */}
      {/* ================================================= */}

      <section
        id="menu"
        className="bg-[#17352A] py-20 md:py-24 px-6 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">

          {/* ================================================= */}
          {/* MAIN HEADING */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-[#E2BD62] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              From Our Kitchen
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Specialities
            </h2>

            <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5 mb-5" />

            <p className="text-[#C5CEC8] text-base md:text-lg leading-7">
              Discover a selection of dishes prepared with care and
              served with the warmth of TREE HOUSE.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* MENU CATEGORIES */}
          {/* ================================================= */}

          <div className="space-y-24">

            {menuSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: sectionIndex * 0.05,
                }}
              >

                {/* ================================================= */}
                {/* CATEGORY HEADING */}
                {/* ================================================= */}

                <div className="flex items-center gap-4 md:gap-6 mb-10">

                  <div className="h-px flex-1 bg-white/20" />

                  <h3 className="text-2xl md:text-3xl font-semibold text-white whitespace-nowrap">
                    {section.title}
                  </h3>

                  <div className="h-px flex-1 bg-white/20" />

                </div>

                {/* ================================================= */}
                {/* FOOD GRID */}
                {/* ================================================= */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10 max-w-6xl mx-auto justify-items-center">

                  {section.items.map((item, index) => (
                    <motion.article
                      key={item.name}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -5 }}
                      className="group w-full max-w-[270px]"
                    >

                      {/* ================================================= */}
                      {/* FOOD IMAGE */}
                      {/* ================================================= */}

                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#204437] shadow-md">

                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 1024px) 45vw,
                            270px
                          "
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                      </div>

                      {/* ================================================= */}
                      {/* FOOD NAME */}
                      {/* ================================================= */}

                      <div className="pt-4 text-center">

                        <h4 className="text-lg md:text-xl font-semibold text-white">
                          {item.name}
                        </h4>

                      </div>

                    </motion.article>
                  ))}

                </div>

              </motion.div>
            ))}

          </div>

          {/* ================================================= */}
          {/* RESTAURANT MENU BUTTON */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-20"
          >

            <button
              type="button"
              onClick={() => setShowRestaurantMenu(true)}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#C79A32]
                hover:bg-[#D6AA45]
                text-[#17352A]
                px-8
                py-4
                font-semibold
                transition-all
                duration-300
                shadow-md
              "
            >
              Restaurant Menu

              <Maximize2
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />

            </button>

          </motion.div>

        </div>
      </section>

      {/* ================================================= */}
      {/* RESTAURANT MENU POPUP */}
      {/* ================================================= */}

      {showRestaurantMenu && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/90
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
            md:p-8
          "
          onClick={() => setShowRestaurantMenu(false)}
        >

          {/* ================================================= */}
          {/* CLOSE BUTTON */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={() => setShowRestaurantMenu(false)}
            className="
              absolute
              top-5
              right-5
              z-[110]
              w-11
              h-11
              rounded-full
              bg-white/10
              hover:bg-white/20
              text-white
              flex
              items-center
              justify-center
              transition
            "
            aria-label="Close restaurant menu"
          >
            <X size={25} />
          </button>

          {/* ================================================= */}
          {/* ACTUAL RESTAURANT MENU */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-6xl
              max-h-[92vh]
              overflow-auto
              bg-[#F7F4ED]
              rounded-2xl
              p-2
              md:p-4
              shadow-2xl
            "
          >

            <Image
              src="/images/tree-house-menu.jpeg"
              alt="TREE HOUSE restaurant menu"
              width={1536}
              height={1024}
              className="w-full h-auto rounded-xl"
            />

          </motion.div>

        </div>
      )}
    </>
  );
}