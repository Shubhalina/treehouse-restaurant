"use client";

import { FormEvent, useState } from "react";

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
        alert("Your table reservation has been submitted successfully!");
        form.reset();
      } else {
        alert("Reservation failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
            Reserve a Table
          </h1>

          <p className="text-center text-gray-600 mt-4 mb-10">
            Reserve your table at TREE HOUSE Restaurant.
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
              className="border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <input
              name="date"
              type="date"
              required
              className="border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <input
              name="time"
              type="time"
              required
              className="border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <input
              name="guests"
              type="number"
              min="1"
              placeholder="Number of Guests"
              required
              className="border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <input
              name="budget"
              type="text"
              placeholder="Estimated Budget (Optional)"
              className="md:col-span-2 border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Special Requests..."
              className="md:col-span-2 border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition disabled:opacity-50"
            >
              {loading ? "Reserving..." : "Reserve Table"}
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}