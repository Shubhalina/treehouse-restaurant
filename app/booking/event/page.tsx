"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "918876951989";

export default function EventBookingPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const eventType = String(formData.get("eventType") || "");
    const date = String(formData.get("date") || "");
    const time = String(formData.get("time") || "");
    const guests = String(formData.get("guests") || "");
    const budget = String(formData.get("budget") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = `
🌳 TREE HOUSE RESTAURANT

🎉 NEW EVENT BOOKING REQUEST

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}

🎊 Event Type: ${eventType}
📅 Date: ${date}
⏰ Time: ${time}
👥 Guests: ${guests}
💰 Budget: ${budget || "Not specified"}

📝 Special Request:
${message || "None"}

Please contact me to confirm the event booking.
`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappUrl, "_blank");

    form.reset();
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
            Book an Event
          </h1>

          <p className="text-center text-gray-600 mt-4 mb-10">
            Tell us about your event and contact us through WhatsApp.
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

            <select
              name="eventType"
              required
              className="border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            >
              <option value="">Select Event Type</option>
              <option value="Birthday Celebration">
                Birthday Celebration
              </option>
              <option value="Wedding Reception">
                Wedding Reception
              </option>
              <option value="Corporate Event">
                Corporate Event
              </option>
              <option value="Private Party">
                Private Party
              </option>
              <option value="Other">
                Other
              </option>
            </select>

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
              placeholder="Estimated Budget"
              className="border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your event..."
              className="md:col-span-2 border border-gray-300 rounded-xl p-4 text-gray-900 bg-white outline-none focus:border-yellow-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition disabled:opacity-50"
            >
              {loading
                ? "Opening WhatsApp..."
                : "Book Event on WhatsApp"}
            </button>

          </form>

        </div>
      </div>
    </main>
  );
}