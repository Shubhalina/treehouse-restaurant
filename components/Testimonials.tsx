"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

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
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  /* ================================================= */
  /* LOAD REVIEWS */
  /* ================================================= */

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch("/api/reviews");

        if (!response.ok) {
          throw new Error("Failed to load reviews");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setReviews(data);
        }
      } catch {
        setReviews([]);
      }
    };

    loadReviews();
  }, []);

  /* ================================================= */
  /* SUBMIT FEEDBACK */
  /* ================================================= */

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!comment.trim()) {
      setMessage("Please enter your feedback.");
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
          review: comment.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      const newReview = await response.json();

      setReviews((prev) => [newReview, ...prev]);

      setName("");
      setRating(5);
      setComment("");

      setMessage("Thank you for your feedback!");

      setTimeout(() => {
        setShowForm(false);
        setMessage("");
      }, 1200);
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="feedback"
      className="bg-[#F7F4ED] px-4 py-10 md:px-6 md:py-14"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-7 max-w-3xl text-center md:mb-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#C79A32] md:text-sm">
            Guest Feedback
          </p>

          <h2 className="text-3xl font-bold text-[#17352A] md:text-5xl">
            What Our Guests Say
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-12 bg-[#C79A32]" />

          <p className="mt-3 text-sm leading-6 text-[#68736D] md:text-base">
            A few words from guests who visited TREE HOUSE.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* TESTIMONIAL CARDS */}
        {/* ================================================= */}

        {reviews.length > 0 ? (
          <div
            className="
              flex
              gap-4
              overflow-x-auto
              pb-3
              snap-x
              snap-mandatory
              scrollbar-hide
              md:grid
              md:grid-cols-3
              md:overflow-visible
            "
          >
            {reviews.slice(0, 6).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.2),
                }}
                className="
                  w-[285px]
                  shrink-0
                  snap-start
                  sm:w-[320px]
                  md:w-auto
                "
              >
                <div
                  className="
                    flex
                    min-h-[190px]
                    h-full
                    flex-col
                    rounded-2xl
                    bg-[#17352A]
                    p-5
                    shadow-md
                    md:min-h-[205px]
                    md:p-6
                  "
                >

                  {/* STARS */}

                  <div className="mb-3 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={17}
                        strokeWidth={1.8}
                        fill={
                          star <= review.rating
                            ? "#C79A32"
                            : "transparent"
                        }
                        className={
                          star <= review.rating
                            ? "text-[#C79A32]"
                            : "text-[#667A70]"
                        }
                      />
                    ))}
                  </div>

                  {/* FEEDBACK */}

                  <p className="line-clamp-4 text-sm leading-6 text-[#D0D8D3]">
                    “{review.review}”
                  </p>

                  {/* USER */}

                  <div className="mt-auto border-t border-[#365448] pt-3">
                    <p className="text-sm font-semibold text-white">
                      {review.name}
                    </p>

                    <p className="mt-0.5 text-xs text-[#9DAEA6]">
                      TREE HOUSE Guest
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div
            className="
              mx-auto
              max-w-md
              rounded-2xl
              bg-[#17352A]
              px-5
              py-7
              text-center
              shadow-md
            "
          >
            <div className="mb-3 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  fill="#C79A32"
                  className="text-[#C79A32]"
                />
              ))}
            </div>

            <p className="text-sm text-[#C5CEC8]">
              Be the first to share your experience at TREE HOUSE.
            </p>
          </div>
        )}

        {/* ================================================= */}
        {/* MOBILE SWIPE */}
        {/* ================================================= */}

        {reviews.length > 1 && (
          <p className="mt-2 text-center text-xs text-[#7C8881] md:hidden">
            Swipe to see more →
          </p>
        )}

        {/* ================================================= */}
        {/* FEEDBACK BUTTON */}
        {/* ================================================= */}

        <div className="mt-6 flex justify-center md:mt-8">
          <button
            type="button"
            onClick={() => {
              setShowForm((prev) => !prev);
              setMessage("");
            }}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#C79A32]
              px-6
              py-3
              text-sm
              font-semibold
              text-[#17352A]
              shadow-md
              transition-all
              duration-300
              hover:bg-[#E2BD62]
              hover:shadow-lg
              md:px-7
            "
          >
            {showForm
              ? "Close Feedback"
              : "Share Your Feedback"}

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* ================================================= */}
        {/* FEEDBACK FORM */}
        {/* ================================================= */}

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="
              mx-auto
              mt-6
              max-w-xl
              rounded-2xl
              bg-[#17352A]
              p-5
              shadow-lg
              md:mt-8
              md:p-7
            "
          >

            {/* FORM TITLE */}

            <div className="mb-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C79A32]">
                Your Feedback Matters
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                Share Your Experience
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* NAME */}

              <div>
                <label className="mb-1.5 block text-xs font-medium text-white">
                  Your Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-[#466257]
                    bg-[#29483D]
                    px-3
                    py-2.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-[#A9B6B0]
                    focus:border-[#C79A32]
                  "
                />
              </div>

              {/* RATING */}

              <div>
                <label className="mb-1.5 block text-xs font-medium text-white">
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
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={22}
                        fill={
                          star <= rating
                            ? "#C79A32"
                            : "transparent"
                        }
                        className={
                          star <= rating
                            ? "text-[#C79A32]"
                            : "text-[#708179]"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* COMMENT */}

              <div>
                <label className="mb-1.5 block text-xs font-medium text-white">
                  Your Feedback
                </label>

                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share a few words about your experience..."
                  rows={3}
                  maxLength={500}
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-[#466257]
                    bg-[#29483D]
                    px-3
                    py-2.5
                    text-sm
                    leading-5
                    text-white
                    outline-none
                    placeholder:text-[#A9B6B0]
                    focus:border-[#C79A32]
                  "
                />

                <p className="mt-1 text-right text-[10px] text-[#9DAEA6]">
                  {comment.length}/500
                </p>
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={submitting}
                className="
                  w-full
                  rounded-lg
                  bg-[#C79A32]
                  px-4
                  py-3
                  text-sm
                  font-bold
                  text-[#17352A]
                  transition
                  hover:bg-[#E2BD62]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {submitting
                  ? "Submitting..."
                  : "Submit Feedback"}
              </button>

              {/* MESSAGE */}

              {message && (
                <p className="text-center text-xs font-medium text-[#E2BD62]">
                  {message}
                </p>
              )}

            </form>
          </motion.div>
        )}

      </div>
    </section>
  );
}