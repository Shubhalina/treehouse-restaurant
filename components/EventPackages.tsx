"use client";

import { motion } from "framer-motion";
import { Cake, Heart, Home, Check, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const packages = [
  {
    title: "Birthday Celebration",
    price: "Starting from ₹4,999",
    icon: Cake,
    features: [
      "Beautiful Decorations",
      "Music Setup",
      "Delicious Food",
      "Private Seating",
      "Photography Space",
    ],
  },
  {
    title: "Wedding Reception",
    price: "Starting from ₹29,999",
    icon: Heart,
    features: [
      "Elegant Venue",
      "Buffet Catering",
      "Stage Decoration",
      "Guest Seating",
      "Parking Facility",
    ],
  },
  {
    title: "Private Dining Cottage",
    price: "Book by Time Slot",
    icon: Home,
    features: [
      "Private Cottage",
      "Food & Drinks",
      "Family Friendly",
      "Peaceful Environment",
      "Perfect for Small Groups",
    ],
  },
];

export default function EventPackages() {
  const router = useRouter();

  const handleBookNow = (packageName: string) => {
    router.push(
      `/booking/event?package=${encodeURIComponent(packageName)}`
    );
  };

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-white py-28 px-6"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-yellow-600 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            Celebrate With Us
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Event Packages
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-10 h-px bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-10 h-px bg-yellow-500" />
          </div>

          <p className="text-gray-500 text-lg leading-8 mt-7">
            From intimate family gatherings to unforgettable celebrations,
            make your special moments even more memorable at TREE HOUSE.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid lg:grid-cols-3 gap-7 items-stretch">

          {packages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-lg shadow-gray-200/50 hover:border-yellow-300 transition-all duration-300"
              >

                {/* Gold accent */}
                <div className="h-1 w-full bg-transparent group-hover:bg-yellow-400 transition-colors duration-300" />

                <div className="relative flex flex-col flex-1 p-8">

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-8">
                    <Icon
                      size={27}
                      className="text-yellow-600"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>

                  {/* Price */}
                  <p className="text-yellow-600 font-semibold mt-4">
                    {item.price}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 my-7" />

                  {/* Features */}
                  <ul className="space-y-4 flex-1">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center">
                          <Check
                            size={12}
                            className="text-yellow-600"
                            strokeWidth={3}
                          />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button
                    type="button"
                    onClick={() => handleBookNow(item.title)}
                    className="mt-9 w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-yellow-500 text-white hover:text-black py-3.5 rounded-full font-semibold transition-all duration-300"
                  >
                    Book This Package

                    <ArrowUpRight size={18} />
                  </button>

                </div>
              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}