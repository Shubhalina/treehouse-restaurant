"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center"
        >
          Gallery
        </motion.h2>

        <p className="text-center text-gray-600 mt-5 mb-16">
          Explore our restaurant, events, cottages, and delicious food.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-80 object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}