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
      className="bg-[#F7F4ED] py-20 md:py-24 px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* ============================= */}
        {/* HEADING */}
        {/* ============================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[#B18424] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            A Glimpse of TREE HOUSE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2823]">
            Our Gallery
          </h2>

          <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5 mb-5" />

          <p className="text-[#66706A] text-base md:text-lg leading-7">
            Take a look at the spaces, moments and experiences that make
            TREE HOUSE special.
          </p>
        </motion.div>

        {/* ============================= */}
        {/* GALLERY */}
        {/* ============================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                y: 25,
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
                delay: (index % 3) * 0.08,
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E9E3D7]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition duration-500" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}