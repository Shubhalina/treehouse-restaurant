"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const menu = [
  {
    name: "Chicken Biryani",
    price: "₹330",
    image: "/images/food1.jpg",
    desc: "Fragrant basmati rice layered with tender chicken and aromatic spices.",
    category: "Main Course",
  },
  {
    name: "Chicken Butter Masala",
    price: "₹390",
    image: "/images/food2.jpg",
    desc: "Tender chicken cooked in a rich, creamy tomato and butter gravy.",
    category: "Main Course",
  },
  {
    name: "Paneer Butter Masala",
    price: "₹310",
    image: "/images/food3.jpg",
    desc: "Soft paneer simmered in a rich and mildly spiced buttery gravy.",
    category: "Vegetarian",
  },
  {
    name: "Veg Chowmein",
    price: "₹160",
    image: "/images/food4.jpg",
    desc: "Fresh vegetables tossed with noodles and our house-style seasoning.",
    category: "Chinese",
  },
  {
    name: "Tandoori Chicken",
    price: "₹495",
    image: "/images/food5.jpg",
    desc: "Juicy chicken marinated with traditional spices and grilled to perfection.",
    category: "Tandoor",
  },
  {
    name: "Fresh Lime Soda",
    price: "₹70",
    image: "/images/food6.jpg",
    desc: "A refreshing blend of fresh lime, soda and your choice of sweet or salted.",
    category: "Beverages",
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Popular Menu
          </h2>

          <p className="text-gray-400 text-lg mt-5">
            Taste our customers' favourite dishes.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {menu.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-yellow-600 font-medium mb-2">
                      {item.category}
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.name}
                    </h3>
                  </div>

                  <span className="text-lg font-bold text-yellow-600 whitespace-nowrap">
                    {item.price}
                  </span>

                </div>

                <p className="text-gray-600 mt-3 leading-7">
                  {item.desc}
                </p>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}