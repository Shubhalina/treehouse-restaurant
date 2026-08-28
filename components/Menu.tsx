"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const featuredItems = [
  {
    name: "Biryani",
    image: "/images/food1.jpg",
  },
  {
    name: "Tandoori",
    image: "/images/food2.jpg",
  },
  {
    name: "Sizzler",
    image: "/images/food3.jpg",
  },
  {
    name: "Chole Bhature",
    image: "/images/food4.jpg",
  },
  {
    name: "Seafood",
    image: "/images/food5.jpg",
  },
  {
    name: "Beverages",
    image: "/images/food6.jpg",
  },
];

export default function Menu() {
  const [showRestaurantMenu, setShowRestaurantMenu] = useState(false);
  const router = useRouter();

  const goHome = () => {
    setShowRestaurantMenu(false);
    router.push("/");
  };

  return (
    <>
      {/* ================================================= */}
      {/* MENU SECTION */}
      {/* ================================================= */}

      <section
        id="menu"
        className="bg-[#17352A] py-14 md:py-20 px-5 md:px-6 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-9 md:mb-12"
          >
            <p className="text-[#E2BD62] uppercase tracking-[0.22em] text-xs md:text-sm font-semibold mb-3">
              From Our Kitchen
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our Specialities
            </h2>

            <div className="w-12 h-[2px] bg-[#C79A32] mx-auto mt-4 mb-4" />

            <p className="text-[#C5CEC8] text-sm md:text-base leading-6">
              A glimpse of some of the favourites served at TREE HOUSE.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* SIX SMALL FOOD IMAGES */}
          {/* ================================================= */}

          <div
            className="
              flex
              gap-3
              md:gap-4
              overflow-x-auto
              md:overflow-visible
              md:justify-center
              pb-3
              max-w-6xl
              mx-auto
              scrollbar-hide
            "
          >
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="
                  shrink-0
                  w-[125px]
                  sm:w-[140px]
                  md:w-[150px]
                  lg:w-[165px]
                "
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-[#204437] shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="165px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <p className="text-white text-xs md:text-sm font-semibold text-center mt-2">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* MOBILE HINT */}

          <p className="text-center text-[#8FA198] text-xs mt-1 md:hidden">
            Swipe to see more
          </p>

          {/* ================================================= */}
          {/* VIEW FULL MENU BUTTON */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-7 md:mt-9"
          >
            <button
              type="button"
              onClick={() => setShowRestaurantMenu(true)}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#C79A32]
                hover:bg-[#E2BD62]
                text-[#17352A]
                px-6
                py-3
                md:px-8
                md:py-3.5
                text-sm
                md:text-base
                font-semibold
                transition-all
                duration-300
                shadow-md
                hover:shadow-lg
              "
            >
              View Full Restaurant Menu

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================================================= */}
      {/* FULL RESTAURANT MENU */}
      {/* ================================================= */}

      {showRestaurantMenu && (
        <div className="fixed inset-0 z-[100] bg-[#17352A] overflow-y-auto">

          {/* ================================================= */}
          {/* NAVBAR */}
          {/* ================================================= */}

          <div className="sticky top-0 z-[120]">
            <Navbar />
          </div>

          {/* ================================================= */}
          {/* CLOSE / HOME BUTTON */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={goHome}
            aria-label="Back to Home"
            className="
              fixed
              top-[90px]
              right-4
              md:top-[105px]
              md:right-8
              z-[130]
              w-10
              h-10
              md:w-11
              md:h-11
              rounded-full
              bg-[#C79A32]
              hover:bg-[#E2BD62]
              text-[#17352A]
              flex
              items-center
              justify-center
              shadow-lg
              transition-all
              duration-200
              hover:scale-105
            "
          >
            <X size={22} strokeWidth={2.5} />
          </button>

          {/* ================================================= */}
          {/* MENU PAGE */}
          {/* ================================================= */}

          <main className="bg-[#17352A] min-h-screen px-3 md:px-8 py-6 md:py-10">

            <div className="max-w-6xl mx-auto">

              {/* PAGE HEADING */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center mb-6 md:mb-8"
              >
                <p className="text-[#E2BD62] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                  TREE HOUSE
                </p>

                <h1 className="text-white text-2xl md:text-4xl font-bold mt-2">
                  Restaurant Menu
                </h1>

                <div className="w-12 h-[2px] bg-[#C79A32] mx-auto mt-3" />

                <p className="text-[#C5CEC8] text-sm md:text-base mt-3">
                  Explore our complete menu.
                </p>
              </motion.div>

              {/* ================================================= */}
              {/* MENU IMAGE */}
              {/* ================================================= */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="
                  bg-[#F7F4ED]
                  rounded-xl
                  md:rounded-2xl
                  p-2
                  md:p-4
                  shadow-2xl
                  overflow-hidden
                "
              >
                <Image
                  src="/images/tree-house-menu.jpeg"
                  alt="TREE HOUSE Restaurant Menu"
                  width={1536}
                  height={1024}
                  className="
                    w-full
                    h-auto
                    rounded-lg
                    md:rounded-xl
                    block
                  "
                  priority
                />
              </motion.div>

            </div>
          </main>
        </div>
      )}
    </>
  );
}