"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/gallery1.jpg",
    title: "The TREE HOUSE Experience",
    subtitle: "A peaceful dining atmosphere",
  },
  {
    src: "/images/gallery2.jpg",
    title: "Dining & Gatherings",
    subtitle: "Good food, good moments",
  },
  {
    src: "/images/gallery3.jpg",
    title: "Outdoor Dining",
    subtitle: "Enjoy the evening under the lights",
  },
  {
    src: "/images/gallery4.jpg",
    title: "Special Moments",
    subtitle: "Made for celebrations",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#f8f6f1] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-yellow-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Our Gallery
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            A Taste of TREE HOUSE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-8 mt-5"
          >
            Take a look at our food, dining spaces, celebrations,
            and the atmosphere that makes TREE HOUSE special.
          </motion.p>

        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">

          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group relative overflow-hidden rounded-2xl"
          >
            <div className="relative h-[420px] md:h-[520px]">

              <Image
                src={images[0].src}
                alt={images[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white">
                <p className="text-sm uppercase tracking-widest text-yellow-400 mb-2">
                  TREE HOUSE
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold">
                  {images[0].title}
                </h3>

                <p className="text-white/80 mt-2">
                  {images[0].subtitle}
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Images */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-5">

            {images.slice(1, 3).map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-[250px] md:h-[250px]">

                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <h3 className="text-lg font-semibold">
                      {image.title}
                    </h3>

                    <p className="text-sm text-white/75 mt-1">
                      {image.subtitle}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

            {/* Fourth Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-2 group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-[250px]">

                <Image
                  src={images[3].src}
                  alt={images[3].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm uppercase tracking-widest text-yellow-400 mb-1">
                    Celebrations
                  </p>

                  <h3 className="text-xl font-semibold">
                    {images[3].title}
                  </h3>

                  <p className="text-sm text-white/75 mt-1">
                    {images[3].subtitle}
                  </p>
                </div>

              </div>
            </motion.div>

          </div>

        </div>

        </div>
    </section>
  );
}