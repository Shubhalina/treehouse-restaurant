"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing place! The food was delicious, and the staff made our birthday celebration memorable.",
    rating: 5,
  },
  {
    name: "Priya Das",
    review:
      "We hosted our wedding reception here. Beautiful decoration, excellent food, and great service.",
    rating: 5,
  },
  {
    name: "Amit Roy",
    review:
      "The private dining cottage was perfect for our family dinner. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center"
        >
          What Our Guests Say
        </motion.h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          Loved by families, couples, and food lovers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl shadow-lg p-8 border"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-7">
                "{review.review}"
              </p>

              <h3 className="mt-6 font-bold text-xl">
                {review.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}