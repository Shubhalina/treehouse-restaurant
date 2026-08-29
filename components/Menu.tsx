"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  X,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const featuredItems = [
  {
    name: "Chicken Biryani",
    image: "/images/food1.jpg",
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
    name: "Fresh Lime Soda",
    image: "/images/food6.jpg",
  },
  {
    name: "Cold Coffee",
    image: "/images/food12.jpg",
  },
];

/* ================================================= */
/* FULL RESTAURANT MENU IMAGES */
/* ================================================= */

const restaurantMenuImages = [
  {
    src: "/images/tree-house-menu1.jpeg",
    alt: "TREE HOUSE Restaurant Menu - Page 1",
  },
  {
    src: "/images/tree-house-menu2.jpeg",
    alt: "TREE HOUSE Restaurant Menu - Page 2",
  },
];

export default function Menu() {
  const [showRestaurantMenu, setShowRestaurantMenu] =
    useState(false);

  const [currentMenuPage, setCurrentMenuPage] =
    useState(0);

  const router = useRouter();

  /* ================================================= */
  /* OPEN MENU */
  /* ================================================= */

  const openRestaurantMenu = () => {
    setCurrentMenuPage(0);
    setShowRestaurantMenu(true);
  };

  /* ================================================= */
  /* CLOSE MENU */
  /* ================================================= */

  const closeRestaurantMenu = () => {
    setShowRestaurantMenu(false);
    setCurrentMenuPage(0);
  };

  /* ================================================= */
  /* GO HOME */
  /* ================================================= */

  const goHome = () => {
    closeRestaurantMenu();
    router.push("/");
  };

  /* ================================================= */
  /* NEXT MENU PAGE */
  /* ================================================= */

  const nextMenuPage = () => {
    setCurrentMenuPage((current) =>
      Math.min(
        current + 1,
        restaurantMenuImages.length - 1
      )
    );
  };

  /* ================================================= */
  /* PREVIOUS MENU PAGE */
  /* ================================================= */

  const previousMenuPage = () => {
    setCurrentMenuPage((current) =>
      Math.max(current - 1, 0)
    );
  };

  return (
    <>
      {/* ================================================= */}
      {/* MENU SECTION */}
      {/* ================================================= */}

      <section
        id="menu"
        className="
          bg-[#17352A]
          px-4
          py-10
          scroll-mt-20
          md:px-6
          md:py-16
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* ================================================= */}
          {/* HEADING */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-7 text-center md:mb-10"
          >
            <p
              className="
                mb-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#E2BD62]
                md:mb-3
              "
            >
              From Our Kitchen
            </p>

            <h2
              className="
                text-3xl
                font-bold
                text-white
                md:text-5xl
              "
            >
              Our Specialities
            </h2>

            <div
              className="
                mx-auto
                mt-3
                h-[2px]
                w-12
                bg-[#C79A32]
                md:mt-4
                md:w-14
              "
            />

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-[#C5CEC8]
                md:mt-4
                md:text-base
              "
            >
              A glimpse of some of the favourites served
              at TREE HOUSE.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* HORIZONTAL FOOD SWIPE */}
          {/* ================================================= */}

          <div
            className="
              flex
              gap-3
              overflow-x-auto
              pb-3
              scrollbar-hide
              snap-x
              snap-mandatory
              md:gap-4
            "
          >
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(
                    index * 0.04,
                    0.3
                  ),
                }}
                className="
                  group
                  w-[135px]
                  shrink-0
                  snap-start
                  sm:w-[155px]
                  md:w-[190px]
                  lg:w-[210px]
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-[105px]
                    w-full
                    overflow-hidden
                    rounded-xl
                    bg-[#204437]
                    shadow-md
                    sm:h-[120px]
                    md:h-[145px]
                    lg:h-[160px]
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="
                      (max-width: 640px) 135px,
                      (max-width: 768px) 155px,
                      (max-width: 1024px) 190px,
                      210px
                    "
                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* NAME */}

                <p
                  className="
                    mt-2
                    text-center
                    text-xs
                    font-semibold
                    text-white
                    md:text-sm
                  "
                >
                  {item.name}
                </p>

              </motion.div>
            ))}
          </div>

          {/* ================================================= */}
          {/* SWIPE HINT */}
          {/* ================================================= */}

          <p
            className="
              mt-2
              text-center
              text-xs
              text-[#8FA198]
            "
          >
            Swipe to explore →
          </p>

          {/* ================================================= */}
          {/* VIEW FULL MENU */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mt-6
              flex
              justify-center
              md:mt-8
            "
          >
            <button
              type="button"
              onClick={openRestaurantMenu}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#C79A32]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-[#17352A]
                shadow-md
                transition-all
                duration-300
                hover:bg-[#E2BD62]
                hover:shadow-lg
                md:px-7
                md:py-3
              "
            >
              View Full Restaurant Menu

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================================================= */}
      {/* FULL RESTAURANT MENU POPUP */}
      {/* ================================================= */}

      {showRestaurantMenu && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            overflow-y-auto
            bg-[#17352A]
          "
        >

          {/* ================================================= */}
          {/* NAVBAR */}
          {/* ================================================= */}

          {/*
            IMPORTANT:
            Only clicking an actual Navbar LINK closes
            the restaurant-menu popup.

            Clicking the mobile hamburger does NOT close it.
          */}

          <div
            className="relative z-[150]"
            onClickCapture={(event) => {
              const target =
                event.target as HTMLElement;

              const link =
                target.closest("a");

              if (link) {
                closeRestaurantMenu();
              }
            }}
          >
            <Navbar />
          </div>

          {/* ================================================= */}
          {/* NAVBAR SPACE */}
          {/* ================================================= */}

          <div
            className="
              h-[76px]
              md:h-[82px]
            "
            aria-hidden="true"
          />

          {/* ================================================= */}
          {/* CLOSE BUTTON */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={closeRestaurantMenu}
            aria-label="Close restaurant menu"
            className="
              fixed
              right-4
              top-[90px]
              z-[200]
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#C79A32]
              text-[#17352A]
              shadow-lg
              transition-all
              duration-200
              hover:scale-105
              hover:bg-[#E2BD62]
              md:right-8
              md:top-[100px]
              md:h-11
              md:w-11
            "
          >
            <X
              size={22}
              strokeWidth={2.5}
            />
          </button>

          {/* ================================================= */}
          {/* RESTAURANT MENU CONTENT */}
          {/* ================================================= */}

          <main
            className="
              min-h-screen
              bg-[#17352A]
              px-3
              pb-12
              pt-3
              md:px-8
              md:pb-16
              md:pt-5
            "
          >
            <div
              className="
                mx-auto
                w-full
                max-w-[850px]
              "
            >

              {/* ================================================= */}
              {/* PAGE HEADING */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  mb-5
                  text-center
                  md:mb-7
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#E2BD62]
                    md:text-sm
                  "
                >
                  TREE HOUSE
                </p>

                <h1
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-white
                    md:text-4xl
                  "
                >
                  Restaurant Menu
                </h1>

                <div
                  className="
                    mx-auto
                    mt-3
                    h-[2px]
                    w-12
                    bg-[#C79A32]
                  "
                />

                <p
                  className="
                    mt-3
                    text-sm
                    text-[#C5CEC8]
                    md:text-base
                  "
                >
                  Explore our complete menu.
                </p>
              </motion.div>

              {/* ================================================= */}
              {/* MENU IMAGE CONTAINER */}
              {/* ================================================= */}

              <motion.div
                key={currentMenuPage}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  overflow-hidden
                  rounded-xl
                  bg-[#F7F4ED]
                  p-2
                  shadow-2xl
                  md:rounded-2xl
                  md:p-4
                "
              >

                <Image
                  src={
                    restaurantMenuImages[
                      currentMenuPage
                    ].src
                  }
                  alt={
                    restaurantMenuImages[
                      currentMenuPage
                    ].alt
                  }
                  width={1536}
                  height={1024}
                  priority={
                    currentMenuPage === 0
                  }
                  className="
                    block
                    h-auto
                    w-full
                    rounded-lg
                    object-contain
                    md:rounded-xl
                  "
                />

              </motion.div>

              {/* ================================================= */}
              {/* PAGE NUMBER */}
              {/* ================================================= */}

              <div
                className="
                  mt-4
                  text-center
                  text-sm
                  font-medium
                  text-[#C5CEC8]
                "
              >
                Menu Page{" "}
                {currentMenuPage + 1}{" "}
                of{" "}
                {restaurantMenuImages.length}
              </div>

              {/* ================================================= */}
              {/* PREVIOUS / NEXT BUTTONS */}
              {/* ================================================= */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-3
                  md:mt-5
                  md:gap-4
                "
              >

                {/* PREVIOUS */}

                <button
                  type="button"
                  onClick={previousMenuPage}
                  disabled={
                    currentMenuPage === 0
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#C79A32]
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#E2BD62]
                    transition-all
                    duration-200
                    hover:bg-[#C79A32]
                    hover:text-[#17352A]
                    disabled:cursor-not-allowed
                    disabled:opacity-35
                    md:px-6
                    md:py-3
                  "
                >
                  <ArrowLeft
                    size={17}
                  />

                  Previous
                </button>

                {/* NEXT */}

                <button
                  type="button"
                  onClick={nextMenuPage}
                  disabled={
                    currentMenuPage ===
                    restaurantMenuImages.length - 1
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#C79A32]
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#17352A]
                    shadow-md
                    transition-all
                    duration-200
                    hover:bg-[#E2BD62]
                    hover:shadow-lg
                    disabled:cursor-not-allowed
                    disabled:opacity-35
                    md:px-6
                    md:py-3
                  "
                >
                  Next

                  <ArrowRight
                    size={17}
                  />
                </button>

              </div>

              {/* ================================================= */}
              {/* MOBILE PAGE DOTS */}
              {/* ================================================= */}

              <div
                className="
                  mt-4
                  flex
                  justify-center
                  gap-2
                "
              >
                {restaurantMenuImages.map(
                  (_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to menu page ${
                        index + 1
                      }`}
                      onClick={() =>
                        setCurrentMenuPage(index)
                      }
                      className={`
                        h-2.5
                        w-2.5
                        rounded-full
                        transition-all
                        duration-200
                        ${
                          currentMenuPage === index
                            ? "bg-[#C79A32] scale-110"
                            : "bg-[#8FA198]"
                        }
                      `}
                    />
                  )
                )}
              </div>

            </div>
          </main>
        </div>
      )}
    </>
  );
}