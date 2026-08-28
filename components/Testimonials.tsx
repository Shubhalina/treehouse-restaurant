"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
  createdAt?: string;
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

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
      setMessage("Please enter your name and feedback.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          rating,
          review: review.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to submit feedback");
      }

      setReviews((prev) => [data, ...prev]);

      setName("");
      setRating(5);
      setReview("");
      setMessage("Thank you for your feedback!");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="feedback"
      className="bg-[#F7F4ED] px-5 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#B18424]">
            Guest Feedback
          </p>

          <h2 className="text-3xl font-bold text-[#1E2823] md:text-4xl">
            What Did You Think?
          </h2>

          <div className="mx-auto mt-4 mb-4 h-[2px] w-12 bg-[#C79A32]" />

          <p className="mx-auto max-w-xl text-sm leading-6 text-[#66706A] md:text-base">
            We&apos;d love to hear about your experience at TREE HOUSE.
          </p>
        </motion.div>

        {/* FEEDBACK + RECENT FEEDBACK */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#17352A] p-6 shadow-lg md:p-7"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E2BD62]">
              Your Feedback Matters
            </p>

            <h3 className="mb-6 text-2xl font-bold text-white">
              Share Your Feedback
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Your Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-[#B7C2BC] focus:border-[#E2BD62]"
                />
              </div>

              {/* RATING */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Your Rating
                </label>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      aria-label={`Rate ${star} star${
                        star > 1 ? "s" : ""
                      }`}
                      className="p-0.5 transition-transform hover:scale-110"
                    >
                      <Star
                        size={25}
                        fill={
                          star <= rating ? "#E2BD62" : "transparent"
                        }
                        className={
                          star <= rating
                            ? "text-[#E2BD62]"
                            : "text-[#718078]"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* FEEDBACK */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Your Feedback
                </label>

                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Share a few words about your experience..."
                  rows={3}
                  maxLength={500}
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-[#B7C2BC] focus:border-[#E2BD62]"
                />

                <p className="mt-1 text-right text-xs text-[#91A098]">
                  {review.length}/500
                </p>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-[#C79A32] px-5 py-3 font-semibold text-[#17352A] transition hover:bg-[#E2BD62] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Feedback"}
              </button>

              {message && (
                <p className="text-center text-sm text-[#E2BD62]">
                  {message}
                </p>
              )}

            </form>
          </motion.div>

          {/* RECENT FEEDBACK */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-[#1E2823]">
                Recent Feedback
              </h3>

              <p className="mt-1 text-sm text-[#66706A]">
                A few words from our guests.
              </p>
            </div>

            {reviews.length === 0 ? (
              <div className="rounded-2xl border border-[#DCD8CE] bg-white p-6 text-center">
                <p className="text-sm text-[#66706A]">
                  Be the first to share your experience.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {reviews.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-[#E1DDD3] bg-white p-5 shadow-sm"
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h4 className="font-semibold text-[#1E2823]">
                        {item.name}
                      </h4>

                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={15}
                            fill={
                              star <= item.rating
                                ? "#C79A32"
                                : "transparent"
                            }
                            className={
                              star <= item.rating
                                ? "text-[#C79A32]"
                                : "text-[#D0CBC0]"
                            }
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-sm leading-6 text-[#66706A]">
                      {item.review}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}