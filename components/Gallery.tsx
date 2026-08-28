"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/gallery9.jpg",
    alt: "TREE HOUSE dining experience",
  },
  {
    src: "/images/gallery13.jpg",
    alt: "TREE HOUSE Corporate Conference",
  },
  {
    src: "/images/gallery2.jpg",
    alt: "TREE HOUSE Area",
  },
  {
    src: "/images/gallery3.jpg",
    alt: "TREE HOUSE Kids Play Zone",
  },
  {
    src: "/images/gallery4.jpg",
    alt: "TREE HOUSE Kids Play Zone",
  },
  {
    src: "/images/gallery10.jpg",
    alt: "TREE HOUSE restaurant",
  },
  {
    src: "/images/gallery6.jpg",
    alt: "TREE HOUSE restaurant",
  },
  {
    src: "/images/gallery12.jpg",
    alt: "TREE HOUSE restaurant experience",
  },
  {
    src: "/images/gallery8.jpg",
    alt: "TREE HOUSE restaurant ambience",
  },
  {
    src: "/images/gallery5.jpg",
    alt: "TREE HOUSE restaurant",
  },
  {
    src: "/images/gallery15.jpg",
    alt: "TREE HOUSE Corporate Conference",
  },
  {
    src: "/images/gallery16.jpg",
    alt: "TREE HOUSE Cottage Seating Area",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#F7F4ED] px-4 py-10 md:px-6 md:py-16 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* ============================= */}
        {/* HEADING */}
        {/* ============================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7 text-center md:mb-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B18424] md:mb-3">
            A Glimpse of TREE HOUSE
          </p>

          <h2 className="text-3xl font-bold text-[#1E2823] md:text-5xl">
            Our Gallery
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-12 bg-[#C79A32] md:mt-4 md:w-14" />

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#66706A] md:mt-4 md:text-base">
            Take a look at the spaces, moments and experiences that make
            TREE HOUSE special.
          </p>
        </motion.div>

        {/* ============================= */}
        {/* PHOTO STRIP */}
        {/* ============================= */}

        <div
          className="
            flex
            gap-3
            overflow-x-auto
            pb-3
            md:gap-4
            scrollbar-hide
            snap-x
            snap-mandatory
          "
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.04, 0.3),
              }}
              className="
                group
                relative
                shrink-0
                snap-start
                overflow-hidden
                rounded-xl
                bg-[#E9E3D7]
                w-[150px]
                h-[115px]
                sm:w-[180px]
                sm:h-[135px]
                md:w-[220px]
                md:h-[165px]
                lg:w-[240px]
                lg:h-[180px]
              "
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="
                  (max-width: 640px) 150px,
                  (max-width: 768px) 180px,
                  (max-width: 1024px) 220px,
                  240px
                "
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
            </motion.div>
          ))}
        </div>

        {/* ============================= */}
        {/* MOBILE HINT */}
        {/* ============================= */}

        <p className="mt-2 text-center text-xs text-[#8A918D] md:hidden">
          Swipe to explore our gallery →
        </p>

      </div>
    </section>
  );
}