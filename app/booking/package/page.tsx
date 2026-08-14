"use client";

import { FormEvent, useEffect, useState } from "react";

export default function PackageBookingPage() {
  const [packageName, setPackageName] = useState("Event Package");
  const [loading, setLoading] = useState(false);

  // Get package name from URL
  // Example:
  // /booking/package?package=Birthday%20Celebration
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const packageParam = params.get("package");

    if (packageParam) {
      setPackageName(packageParam);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      bookingType: packageName,
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
        alert(
          "Your booking request has been submitted successfully!"
        );

        form.reset();
      } else {
        alert(
          result.message || "Booking failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Booking error:", error);

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Booking Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
            Book Your Package
          </h1>

          {/* Selected Package */}
          <p className="text-center text-yellow-600 font-semibold text-xl mt-4">
            {packageName}
          </p>

          <p className="text-center text-gray-600 mt-3 mb-10">
            Fill in your details and we will contact you to confirm your
            booking.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >

            {/* Name */}
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            {/* Phone */}
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            {/* Date */}
            <input
              name="date"
              type="date"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            {/* Time */}
            <input
              name="time"
              type="time"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            {/* Guests */}
            <input
              name="guests"
              type="number"
              min="1"
              placeholder="Number of Guests"
              required
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            {/* Budget */}
            <input
              name="budget"
              type="text"
              placeholder="Estimated Budget"
              className="md:col-span-2 w-full border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            {/* Message */}
            <textarea
              name="message"
              rows={5}
              placeholder="Special Requests..."
              className="md:col-span-2 w-full border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Confirm Booking"}
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}