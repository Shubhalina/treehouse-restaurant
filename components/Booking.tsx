"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function Booking() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      bookingType: formData.get("bookingType"),
      date: formData.get("date"),
      time: formData.get("time"),
      guests: formData.get("guests"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        form.reset();
      } else {
        alert("Booking failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      className="scroll-mt-24 py-24 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          Book Your Experience
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-14">
          Reserve a table or book your next celebration with us.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-yellow-500"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-yellow-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-yellow-500"
          />

          <select
            name="bookingType"
            required
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-yellow-500"
          >
            <option value="">Select Booking Type</option>
            <option value="Restaurant Table">Restaurant Table</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Wedding Reception">Wedding Reception</option>
            <option value="Private Dining Cottage">Private Dining Cottage</option>
            <option value="Corporate Event">Corporate Event</option>
          </select>

          <input
            name="date"
            type="date"
            required
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-yellow-500"
          />

          <input
            name="time"
            type="time"
            required
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-yellow-500"
          />

          <input
            name="guests"
            type="number"
            placeholder="Number of Guests"
            required
            min="1"
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-yellow-500"
          />

          <input
            name="budget"
            type="text"
            placeholder="Estimated Budget (Optional)"
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-yellow-500"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Special Requests..."
            className="md:col-span-2 bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-yellow-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>
      </div>
    </section>
  );
}