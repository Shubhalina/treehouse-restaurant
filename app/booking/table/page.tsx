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

      <main className="min-h-screen bg-[#F7F4ED] px-4 py-10 sm:px-5 sm:py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-4xl min-w-0">

          {/* MAIN GREEN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              w-full
              min-w-0
              overflow-hidden
              rounded-[24px]
              md:rounded-[28px]
              bg-[#17352A]
              border border-[#C79A32]/30
              shadow-[0_20px_60px_rgba(23,53,42,0.18)]
            "
          >

            {/* HEADER */}
            <div className="px-5 pt-8 pb-6 text-center sm:px-7 md:px-12 md:pt-14 md:pb-8">

              <p className="text-[#E2BD62] text-[11px] md:text-sm font-semibold uppercase tracking-[0.25em]">
                TREE HOUSE RESTAURANT
              </p>

              <h1 className="mt-3 text-3xl sm:text-4xl md:mt-4 md:text-5xl font-bold text-white">
                Reserve a Table
              </h1>

              <div className="mx-auto mt-4 h-[2px] w-12 bg-[#C79A32] md:mt-5 md:w-14" />

              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:mt-5 md:text-lg leading-6 md:leading-7 text-[#C5CEC8]">
                Reserve your table at TREE HOUSE and enjoy good food,
                warm hospitality and memorable moments.
              </p>

            </div>

            {/* FORM AREA */}
            <div className="min-w-0 px-5 pb-7 sm:px-7 md:px-12 md:pb-14">

              <form
                onSubmit={handleSubmit}
                className="
                  grid
                  min-w-0
                  gap-4
                  md:grid-cols-2
                  md:gap-5
                "
              >

                {/* NAME */}
                <div className="relative min-w-0 w-full">

                  <User
                    size={19}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      z-10
                      -translate-y-1/2
                      text-[#E2BD62]
                    "
                  />

                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    className="
                      block
                      w-full
                      min-w-0
                      max-w-full
                      box-border
                      rounded-xl
                      border
                      border-white/15
                      bg-[#204437]
                      px-4
                      py-3.5
                      pl-11
                      text-sm
                      sm:text-base
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

                {/* PHONE */}
                <div className="relative min-w-0 w-full">

                  <Phone
                    size={19}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      z-10
                      -translate-y-1/2
                      text-[#E2BD62]
                    "
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="
                      block
                      w-full
                      min-w-0
                      max-w-full
                      box-border
                      rounded-xl
                      border
                      border-white/15
                      bg-[#204437]
                      px-4
                      py-3.5
                      pl-11
                      text-sm
                      sm:text-base
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

                {/* EMAIL */}
                <div className="relative min-w-0 w-full">

                  <Mail
                    size={19}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      z-10
                      -translate-y-1/2
                      text-[#E2BD62]
                    "
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="
                      block
                      w-full
                      min-w-0
                      max-w-full
                      box-border
                      rounded-xl
                      border
                      border-white/15
                      bg-[#204437]
                      px-4
                      py-3.5
                      pl-11
                      text-sm
                      sm:text-base
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

                {/* ================================================= */}
                {/* DATE — FIXED FOR MOBILE */}
                {/* ================================================= */}

                <div className="relative min-w-0 w-full overflow-hidden">

                  <CalendarDays
                    size={19}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      z-10
                      -translate-y-1/2
                      text-[#E2BD62]
                    "
                  />

                  <input
                    name="date"
                    type="date"
                    required
                    className="
                      block
                      w-full
                      min-w-0
                      max-w-full
                      box-border
                      appearance-none
                      rounded-xl
                      border
                      border-white/15
                      bg-[#204437]
                      px-3
                      py-3.5
                      pl-11
                      pr-2
                      text-[14px]
                      sm:text-base
                      text-white
                      outline-none
                      transition
                      focus:border-[#C79A32]
                      focus:ring-2
                      focus:ring-[#C79A32]/20
                    "
                  />

                </div>

                {/* ================================================= */}
                {/* TIME — FIXED FOR MOBILE */}
                {/* ================================================= */}

                <div className="relative min-w-0 w-full overflow-hidden">

                  <Clock
                    size={19}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      z-10
                      -translate-y-1/2
                      text-[#E2BD62]
                    "
                  />

                  <input
                    name="time"
                    type="time"
                    required
                    className="
                      block
                      w-full
                      min-w-0
                      max-w-full
                      box-border
                      appearance-none
                      rounded-xl
                      border
                      border-white/15
                      bg-[#204437]
                      px-3
                      py-3.5
                      pl-11
                      pr-2
                      text-[14px]
                      sm:text-base
                      text-white
                      outline-none
                      transition
                      focus:border-[#C79A32]
                      focus:ring-2
                      focus:ring-[#C79A32]/20
                    "
                  />

                </div>

                {/* GUESTS */}
                <div className="relative min-w-0 w-full">

                  <Users
                    size={19}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      z-10
                      -translate-y-1/2
                      text-[#E2BD62]
                    "
                  />

                  <input
                    name="guests"
                    type="number"
                    min="1"
                    placeholder="Number of Guests"
                    required
                    className="
                      block
                      w-full
                      min-w-0
                      max-w-full
                      box-border
                      rounded-xl
                      border
                      border-white/15
                      bg-[#204437]
                      px-4
                      py-3.5
                      pl-11
                      text-sm
                      sm:text-base
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

                {/* SPECIAL REQUESTS */}
                <div className="relative min-w-0 w-full md:col-span-2">

                  <MessageSquare
                    size={19}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-4
                      z-10
                      text-[#E2BD62]
                    "
                  />

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Special Requests..."
                    className="
                      block
                      w-full
                      min-w-0
                      max-w-full
                      box-border
                      resize-none
                      rounded-xl
                      border
                      border-white/15
                      bg-[#204437]
                      px-4
                      py-3.5
                      pl-11
                      text-sm
                      sm:text-base
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

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    md:col-span-2
                    mt-1
                    w-full
                    min-w-0
                    rounded-xl
                    bg-[#C79A32]
                    px-4
                    py-3.5
                    text-sm
                    sm:text-base
                    text-[#17352A]
                    font-bold
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

          {/* BOTTOM TEXT */}
          <p className="mt-5 text-center text-xs sm:text-sm text-[#66706A]">
            We look forward to welcoming you at TREE HOUSE, Jagiroad.
          </p>

        </div>
      </main>
    </>
  );
}