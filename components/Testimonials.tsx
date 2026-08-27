"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Review = {
  id: string;
  name: string;
  review: string;
  rating: number;
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !review.trim()) {
      alert("Please enter your name and review.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          review,
          rating,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setReviews((prev) => [data, ...prev]);
        setName("");
        setReview("");
        setRating(5);
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch {
      alert("Unable to submit review.");
    }

    setLoading(false);
  };

  return (
    <section
      id="testimonials"
      className="bg-[#05070d] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#f5b400] uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            Guest Experiences
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Guests Say
          </h2>

          <div className="w-16 h-[2px] bg-[#f5b400] mx-auto mt-5 mb-4" />

          <p className="text-gray-400 text-lg">
            Share your experience at TREE HOUSE.
          </p>
        </motion.div>

        {/* Reviews */}
        {reviews.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {reviews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="bg-[#111827] rounded-2xl border border-gray-800 p-7 shadow-xl"
              >

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={19}
                      className={
                        star <= item.rating
                          ? "text-[#f5b400] fill-[#f5b400]"
                          : "text-gray-600"
                      }
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-300 leading-7 text-base">
                  "{item.review}"
                </p>

                {/* Name */}
                <div className="mt-5 pt-4 border-t border-gray-700">
                  <h3 className="font-semibold text-lg text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Guest
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        )}

        {/* Write Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-[#111827] rounded-2xl border border-gray-800 shadow-2xl p-7 md:p-9"
        >

          <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
            Share Your Experience
          </h3>

          <p className="text-gray-400 text-center mt-2 mb-7">
            We would love to hear about your visit.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Your Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-700 bg-[#080c14] text-white px-4 py-3 placeholder-gray-500 outline-none focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Your Rating
              </label>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={28}
                      className={
                        star <= rating
                          ? "text-[#f5b400] fill-[#f5b400]"
                          : "text-gray-600"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Your Review
              </label>

              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Tell us about your experience..."
                rows={4}
                className="w-full rounded-xl border border-gray-700 bg-[#080c14] text-white px-4 py-3 placeholder-gray-500 outline-none resize-none focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f5b400] hover:bg-[#d99e00] disabled:opacity-50 text-black font-semibold py-3 rounded-full transition duration-300"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}