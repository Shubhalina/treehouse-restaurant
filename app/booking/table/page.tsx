"use client";

import { useState } from "react";

export default function TableBookingPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const date = formData.get("date");
    const time = formData.get("time");
    const guests = formData.get("guests");
    const budget = formData.get("budget");
    const message = formData.get("message");

    const whatsappNumber = "918876951989";

    const whatsappMessage = `
🌳 *TREE HOUSE - TABLE RESERVATION*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}

📅 *Date:* ${date}
⏰ *Time:* ${time}
👥 *Guests:* ${guests}
💰 *Budget:* ${budget || "Not specified"}

📝 *Special Requests:*
${message || "None"}

I would like to reserve a table at TREE HOUSE Restaurant.
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setLoading(false);
    form.reset();
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf8f2] px-6 py-16 md:py-20">

      {/* Soft Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />

        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-yellow-100/40 blur-3xl" />

        <div className="absolute top-24 left-[8%] h-3 w-3 rounded-full bg-yellow-400/50" />

        <div className="absolute top-40 right-[12%] h-4 w-4 rounded-full bg-yellow-500/30" />

        <div className="absolute bottom-24 left-[12%] h-4 w-4 rounded-full bg-amber-400/30" />

      </div>

      {/* Card */}
      <div className="relative z-10 mx-auto max-w-4xl rounded-[32px] border border-yellow-100/80 bg-white/90 p-8 shadow-[0_25px_70px_rgba(120,90,20,0.12)] backdrop-blur-sm md:p-12">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-[#111827] md:text-6xl">
            Reserve a Table
          </h1>

          <p className="mt-5 text-lg text-slate-500">
            Reserve your table at TREE HOUSE Restaurant.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />

          <input
            name="date"
            type="date"
            required
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />

          <input
            name="time"
            type="time"
            required
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />

          <input
            name="guests"
            type="number"
            min="1"
            placeholder="Number of Guests"
            required
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />

          <input
            name="budget"
            type="text"
            placeholder="Estimated Budget (Optional)"
            className="md:col-span-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Special Requests..."
            className="md:col-span-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 rounded-xl bg-yellow-500 py-4 font-bold text-black shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-400 hover:shadow-yellow-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Opening WhatsApp..." : "Reserve Table on WhatsApp"}
          </button>

        </form>

      </div>
    </main>
  );
}