"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#10261F]">

      {/* ========================================================= */}
      {/* HERO IMAGE */}
      {/* ========================================================= */}

      <div className="absolute inset-0">

        <img
          src="/images/hero.jpg"
          alt="TREE HOUSE Restaurant"
          className="
            absolute
            top-0
            left-0
            w-full

            /* PHONE */
            h-auto
            min-h-0
            object-contain
            object-top

            /* LAPTOP / DESKTOP */
            md:h-full
            md:object-cover
            md:object-center
          "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#10261F]/65" />

      </div>


      {/* ========================================================= */}
      {/* CONTENT */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-5
          py-32

          /* On phone, keep enough space after the full image */
          pt-[230px]

          md:pt-32
        "
      >

        <div className="text-center w-full max-w-5xl">

          {/* ===================================================== */}
          {/* WELCOME */}
          {/* ===================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-bold
              text-[#FFFCF7]
            "
          >
            Welcome to
          </motion.h1>


          {/* ===================================================== */}
          {/* TREE HOUSE */}
          {/* ===================================================== */}

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="
              text-5xl
              sm:text-6xl
              md:text-8xl
              font-bold
              text-[#E2BD62]
              mt-3
              md:mt-4
            "
          >
            TREE HOUSE
          </motion.h2>


          {/* ===================================================== */}
          {/* DESCRIPTION */}
          {/* ===================================================== */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
            }}
            className="
              text-base
              sm:text-lg
              md:text-2xl
              text-[#F1EEE6]
              mt-6
              md:mt-8
              max-w-3xl
              mx-auto
              leading-7
              md:leading-9
            "
          >
            Restaurant • Wedding Reception • Birthday Celebration •
            Private Dining Cottages
          </motion.p>


          {/* ===================================================== */}
          {/* BUTTONS */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
            }}
            className="
              mt-8
              md:mt-10
              flex
              flex-col
              md:flex-row
              gap-4
              justify-center
              items-center
            "
          >

            {/* Reserve Table */}

            <a
              href="/booking/table"
              className="
                w-full
                max-w-[330px]
                md:w-auto
                md:max-w-none

                bg-[#C79A32]
                hover:bg-[#D5AE55]

                text-[#10261F]

                px-8
                py-4

                rounded-full

                font-semibold
                text-base
                md:text-lg

                text-center

                transition
                duration-300
              "
            >
              Reserve Table
            </a>


            {/* Book Event */}

            <a
              href="/booking/event"
              className="
                w-full
                max-w-[330px]
                md:w-auto
                md:max-w-none

                border-2
                border-[#FFFCF7]

                hover:bg-[#FFFCF7]
                hover:text-[#10261F]

                text-[#FFFCF7]

                px-8
                py-4

                rounded-full

                font-semibold
                text-base
                md:text-lg

                text-center

                transition
                duration-300
              "
            >
              Book an Event
            </a>

          </motion.div>

        </div>
      </div>

    </section>
  );
}