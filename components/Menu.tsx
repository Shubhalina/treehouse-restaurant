"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const menu = [
  {
    name: "Chicken Biryani",
    price: "₹280",
    image: "/images/food1.jpg",
    desc: "Fragrant basmati rice with spicy chicken.",
  },
  {
    name: "Butter Chicken",
    price: "₹320",
    image: "/images/food2.jpg",
    desc: "Creamy tomato gravy with tender chicken.",
  },
  {
    name: "Paneer Butter Masala",
    price: "₹260",
    image: "/images/food3.jpg",
    desc: "Rich buttery paneer curry.",
  },
  {
    name: "Hakka Noodles",
    price: "₹220",
    image: "/images/food4.jpg",
    desc: "Stir-fried noodles with fresh vegetables.",
  },
  {
    name: "Tandoori Chicken",
    price: "₹420",
    image: "/images/food5.jpg",
    desc: "Char-grilled chicken with Indian spices.",
  },
  {
    name: "Fresh Lime Soda",
    price: "₹90",
    image: "/images/food6.jpg",
    desc: "Refreshing sweet or salted lime drink.",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center text-white"
        >
          Popular Menu
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Taste our customers' favourite dishes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {menu.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={350}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <span className="text-yellow-600 font-bold">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-5">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={18} fill="currentColor" />
                    <span>4.8</span>
                  </div>

                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-semibold transition">
                    Order Now
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}