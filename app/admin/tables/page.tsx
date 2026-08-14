"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function TableBookingPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      bookingType: "Restaurant Table",
      date: formData.get("date"),
      time: formData.get("time"),
      guests: formData.get("guests"),
      budget: "",
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

      if (response.ok) {
        alert(result.message || "Table booked successfully!");
        form.reset();
      } else {
        alert(result.message || "Booking failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/"
          className="inline-block mb-8 text-yellow-400 hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Reserve a Table
          </h1>

          <p className="text-gray-400 text-center mt-4 mb-10">
            Reserve your table at Tree House Restaurant.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-yellow-500"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-yellow-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-yellow-500"
            />

            <input
              name="guests"
              type="number"
              min="1"
              placeholder="Number of Guests"
              required
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-yellow-500"
            />

            <input
              name="date"
              type="date"
              required
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-white outline-none focus:border-yellow-500"
            />

            <input
              name="time"
              type="time"
              required
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-white outline-none focus:border-yellow-500"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Special Requests..."
              className="md:col-span-2 bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 outline-none focus:border-yellow-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition disabled:opacity-50"
            >
              {loading ? "Booking..." : "Reserve Table"}
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}