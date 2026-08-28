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
      .then((data) => {
        if (Array.isArray(data)) {
          setReviews(data);
        }
      })
      .catch(() => {
        setReviews([]);
      });
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
          name: name.trim(),
          review: review.trim(),
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
        alert(data.error || "Unable to submit review.");
      }
    } catch {
      alert("Unable to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="testimonials"
      className="bg-[#F7F4ED] py-20 md:py-24 px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[#B18424] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Guest Experiences
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2823]">
            What Our Guests Say
          </h2>

          <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5 mb-5" />

          <p className="text-[#66706A] text-base md:text-lg leading-7">
            Every visit creates a story. Share yours with us.
          </p>
        </motion.div>

        {/* Reviews */}
        {reviews.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
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
                className="bg-white rounded-2xl border border-[#E2DDD2] p-7 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={
                        star <= item.rating
                          ? "text-[#C79A32] fill-[#C79A32]"
                          : "text-[#D8D3C8]"
                      }
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-[#59645D] leading-7">
                  “{item.review}”
                </p>

                {/* Guest */}
                <div className="mt-6 pt-5 border-t border-[#E8E3D9]">
                  <h3 className="font-semibold text-[#1E2823]">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#8A918C] mt-1 uppercase tracking-wider">
                    Guest
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Write Review */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#17352A] rounded-3xl p-8 md:p-10 shadow-xl">

            <div className="text-center mb-8">
              <p className="text-[#E2BD62] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                Your Experience Matters
              </p>

              <h3 className="text-3xl font-bold text-white">
                Share Your Experience
              </h3>

              <p className="text-[#C5CEC8] mt-3">
                Tell us about your time at TREE HOUSE.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/15 bg-white/10 text-white placeholder:text-[#AEBBB4] px-4 py-3 outline-none focus:border-[#C79A32] focus:ring-1 focus:ring-[#C79A32]"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your Rating
                </label>

                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110"
                      aria-label={`Give ${star} star${
                        star > 1 ? "s" : ""
                      }`}
                    >
                      <Star
                        size={27}
                        className={
                          star <= rating
                            ? "text-[#E2BD62] fill-[#E2BD62]"
                            : "text-[#718078]"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your Review
                </label>

                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Tell us about your experience..."
                  rows={5}
                  className="w-full rounded-xl border border-white/15 bg-white/10 text-white placeholder:text-[#AEBBB4] px-4 py-3 outline-none resize-none focus:border-[#C79A32] focus:ring-1 focus:ring-[#C79A32]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C79A32] hover:bg-[#D6AA45] disabled:opacity-50 text-[#17352A] font-semibold py-3.5 rounded-full transition duration-300"
              >
                {loading ? "Submitting..." : "Share Review"}
              </button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}