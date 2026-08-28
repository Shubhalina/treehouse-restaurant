"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#10261F]
      "
    >
      {/* ========================================================= */}
      {/* HERO IMAGE */}
      {/* ========================================================= */}

      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="TREE HOUSE Restaurant"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover

            /* Mobile: show more of the TREE HOUSE building */
            object-[42%_center]

            /* Desktop */
            md:object-center
          "
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-[#10261F]/55" />

        {/* Bottom gradient for text readability */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#10261F]/20
            via-transparent
            to-[#10261F]/90
          "
        />

        {/* Slight mobile darkening */}
        <div className="absolute inset-0 bg-[#10261F]/10 md:bg-transparent" />
      </div>


      {/* ========================================================= */}
      {/* HERO CONTENT */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-10
          min-h-[100svh]
          flex
          items-center
          justify-center

          px-5
          sm:px-6
          pt-24
          pb-16

          md:pt-28
          md:pb-20
        "
      >
        <div className="w-full max-w-5xl text-center">

          {/* ===================================================== */}
          {/* WELCOME */}
          {/* ===================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              font-bold
              leading-tight
              text-[#FFFCF7]
            "
          >
            Welcome to
          </motion.h1>


          {/* ===================================================== */}
          {/* TREE HOUSE */}
          {/* ===================================================== */}

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="
              mt-2
              sm:mt-3
              md:mt-4

              text-5xl
              sm:text-6xl
              md:text-8xl
              lg:text-9xl

              font-bold
              leading-none

              text-[#E2BD62]

              drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]
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
              delay: 0.55,
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-7
              md:mt-8

              max-w-4xl

              text-base
              sm:text-lg
              md:text-2xl

              leading-7
              md:leading-9

              text-[#F1EEE6]

              drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
            "
          >
            Restaurant • Wedding Reception • Birthday Celebration •
            Private Dining Cottages
          </motion.p>


          {/* ===================================================== */}
          {/* BUTTONS */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.85,
              duration: 0.7,
            }}
            className="
              mt-9
              md:mt-10

              flex
              flex-col
              md:flex-row

              items-center
              justify-center

              gap-4
            "
          >

            {/* --------------------------------------------------- */}
            {/* RESERVE TABLE */}
            {/* --------------------------------------------------- */}

            <a
              href="/booking/table"
              className="
                w-full
                max-w-[330px]
                md:w-auto
                md:max-w-none

                rounded-full

                bg-[#C79A32]
                hover:bg-[#D5AE55]

                px-8
                py-4

                text-center

                text-base
                md:text-lg

                font-semibold
                text-[#10261F]

                shadow-lg
                shadow-black/20

                transition-all
                duration-300

                hover:scale-[1.02]
              "
            >
              Reserve Table
            </a>


            {/* --------------------------------------------------- */}
            {/* BOOK EVENT */}
            {/* --------------------------------------------------- */}

            <a
              href="/booking/event"
              className="
                w-full
                max-w-[330px]
                md:w-auto
                md:max-w-none

                rounded-full

                border-2
                border-[#FFFCF7]

                bg-black/10
                backdrop-blur-[2px]

                px-8
                py-4

                text-center

                text-base
                md:text-lg

                font-semibold
                text-[#FFFCF7]

                shadow-lg
                shadow-black/10

                transition-all
                duration-300

                hover:bg-[#FFFCF7]
                hover:text-[#10261F]

                hover:scale-[1.02]
              "
            >
              Book an Event
            </a>

          </motion.div>

        </div>
      </div>


      {/* ========================================================= */}
      {/* BOTTOM FADE */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-20

          bg-gradient-to-t
          from-[#10261F]
          to-transparent

          pointer-events-none
        "
      />

    </section>
  );
}