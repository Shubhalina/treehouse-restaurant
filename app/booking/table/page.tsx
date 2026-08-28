"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  Users,
  Phone,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageCloseButton from "@/components/PageCloseButton";

const WHATSAPP_NUMBER = "918876951989";

export default function TableBookingPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const date = String(formData.get("date") || "");
    const time = String(formData.get("time") || "");
    const guests = String(formData.get("guests") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = `
🌳 TREE HOUSE RESTAURANT

🍽️ TABLE RESERVATION REQUEST

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}

📅 Date: ${date}
⏰ Time: ${time}
👥 Number of Guests: ${guests}

📝 Special Requests:
${message || "None"}

I would like to reserve a table at TREE HOUSE Restaurant.
    `.trim();

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

    form.reset();
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <PageCloseButton />

      <main className="min-h-screen bg-[#F7F4ED] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">

          {/* Main Green Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              overflow-hidden
              rounded-[28px]
              bg-[#17352A]
              border border-[#C79A32]/30
              shadow-[0_25px_70px_rgba(23,53,42,0.18)]
            "
          >

            {/* Header */}
            <div className="px-7 pt-10 pb-8 text-center md:px-12 md:pt-14">

              <p className="text-[#E2BD62] text-xs md:text-sm font-semibold uppercase tracking-[0.28em]">
                TREE HOUSE RESTAURANT
              </p>

              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                Reserve a Table
              </h1>

              <div className="mx-auto mt-5 h-[2px] w-14 bg-[#C79A32]" />

              <p className="mx-auto mt-5 max-w-2xl text-[#C5CEC8] text-base md:text-lg leading-7">
                Reserve your table at TREE HOUSE and enjoy good food,
                warm hospitality and memorable moments.
              </p>

            </div>

            {/* Form Area */}
            <div className="px-7 pb-10 md:px-12 md:pb-14">

              <form
                onSubmit={handleSubmit}
                className="grid gap-5 md:grid-cols-2"
              >

                {/* Name */}
                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E2BD62]"
                  />

                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    className="
                      w-full rounded-xl
                      border border-white/15
                      bg-[#204437]
                      px-5 py-4 pl-12
                      text-white
                      outline-none
                      placeholder:text-[#AEBBB4]
                      transition
                      focus:border-[#C79A32]
                      focus:ring-2
                      focus:ring-[#C79A32]/20
                    "
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone
                    size={19}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E2BD62]"
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="
                      w-full rounded-xl
                      border border-white/15
                      bg-[#204437]
                      px-5 py-4 pl-12
                      text-white
                      outline-none
                      placeholder:text-[#AEBBB4]
                      transition
                      focus:border-[#C79A32]
                      focus:ring-2
                      focus:ring-[#C79A32]/20
                    "
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E2BD62]"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="
                      w-full rounded-xl
                      border border-white/15
                      bg-[#204437]
                      px-5 py-4 pl-12
                      text-white
                      outline-none
                      placeholder:text-[#AEBBB4]
                      transition
                      focus:border-[#C79A32]
                      focus:ring-2
                      focus:ring-[#C79A32]/20
                    "
                  />
                </div>

                {/* Date */}
                <div className="relative">
                  <CalendarDays
                    size={19}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E2BD62]"
                  />

                  <input
                    name="date"
                    type="date"
                    required
                    className="
                      w-full rounded-xl
                      border border-white/15
                      bg-[#204437]
                      px-5 py-4 pl-12
                      text-white
                      outline-none
                      transition
                      focus:border-[#C79A32]
                      focus:ring-2
                      focus:ring-[#C79A32]/20
                    "
                  />
                </div>

                {/* Time */}
                <div className="relative">
                  <Clock
                    size={19}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E2BD62]"
                  />

                  <input
                    name="time"
                    type="time"
                    required
                    className="
                      w-full rounded-xl
                      border border-white/15
                      bg-[#204437]
                      px-5 py-4 pl-12
                      text-white
                      outline-none
                      transition
                      focus:border-[#C79A32]
                      focus:ring-2
                      focus:ring-[#C79A32]/20
                    "
                  />
                </div>

                {/* Guests */}
                <div className="relative">
                  <Users
                    size={19}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E2BD62]"
                  />

                  <input
                    name="guests"
                    type="number"
                    min="1"
                    placeholder="Number of Guests"
                    required
                    className="
                      w-full rounded-xl
                      border border-white/15
                      bg-[#204437]
                      px-5 py-4 pl-12
                      text-white
                      outline-none
                      placeholder:text-[#AEBBB4]
                      transition
                      focus:border-[#C79A32]
                      focus:ring-2
                      focus:ring-[#C79A32]/20
                    "
                  />
                </div>

                {/* Special Requests */}
                <div className="relative md:col-span-2">
                  <MessageSquare
                    size={19}
                    className="absolute left-5 top-5 text-[#E2BD62]"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Special Requests..."
                    className="
                      w-full rounded-xl
                      border border-white/15
                      bg-[#204437]
                      px-5 py-4 pl-12
                      text-white
                      outline-none
                      resize-none
                      placeholder:text-[#AEBBB4]
                      transition
                      focus:border-[#C79A32]
                      focus:ring-2
                      focus:ring-[#C79A32]/20
                    "
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    md:col-span-2
                    mt-2
                    w-full
                    rounded-xl
                    bg-[#C79A32]
                    py-4
                    text-[#17352A]
                    font-bold
                    text-base
                    transition
                    hover:bg-[#E2BD62]
                    hover:shadow-lg
                    hover:shadow-[#C79A32]/20
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading
                    ? "Opening WhatsApp..."
                    : "Reserve Table on WhatsApp"}
                </button>

              </form>

            </div>
          </motion.div>

          {/* Bottom Text */}
          <p className="mt-8 text-center text-sm text-[#66706A]">
            We look forward to welcoming you at TREE HOUSE, Jagiroad.
          </p>

        </div>
      </main>
    </>
  );
}