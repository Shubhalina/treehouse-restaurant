"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#17352A] px-4 py-10 md:px-6 md:py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7 text-center md:mb-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#E2BD62]">
            We'd Love To Hear From You
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Contact Us
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-12 bg-[#C79A32]" />

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#C5CEC8] md:text-base">
            Planning a visit, celebration or special event?
            Get in touch with us.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* CONTACT + MAP */}
        {/* ================================================= */}

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">

          {/* ================================================= */}
          {/* CONTACT INFORMATION - WHITE BOX */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              rounded-2xl
              bg-white
              p-5
              shadow-lg
              md:p-7
            "
          >

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B18424]">
              TREE HOUSE
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#17352A] md:text-3xl">
              Come Visit Us
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#66706A]">
              Whether you're joining us for a meal or planning a special
              occasion, we're always happy to welcome you.
            </p>

            {/* DETAILS */}

            <div className="mt-5 space-y-3.5">

              {/* ADDRESS */}

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#17352A]/10">
                  <MapPin
                    size={18}
                    className="text-[#B18424]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#17352A]">
                    Visit Us
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-[#66706A]">
                    TREE HOUSE Restaurant
                    <br />
                    Jagiroad, Assam
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#17352A]/10">
                  <Phone
                    size={18}
                    className="text-[#B18424]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#17352A]">
                    Call Us
                  </p>

                  <a
                    href="tel:+918876951989"
                    className="mt-0.5 block text-xs text-[#66706A] transition hover:text-[#B18424]"
                  >
                    +91 88769 51989
                  </a>
                </div>
              </div>

              {/* EMAIL */}

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#17352A]/10">
                  <Mail
                    size={18}
                    className="text-[#B18424]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#17352A]">
                    Email
                  </p>

                  <a
                    href="mailto:info@treehouserestaurant.com"
                    className="mt-0.5 block break-all text-xs text-[#66706A] transition hover:text-[#B18424]"
                  >
                    info@treehouserestaurant.com
                  </a>
                </div>
              </div>

              {/* HOURS */}

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#17352A]/10">
                  <Clock
                    size={18}
                    className="text-[#B18424]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#17352A]">
                    Opening Hours
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-[#66706A]">
                    Monday – Sunday
                    <br />
                    10:00 AM – 10:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#17352A]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#C79A32]
                hover:text-[#17352A]
              "
            >
              <MessageCircle size={17} />

              Chat on WhatsApp

              <ArrowRight size={16} />
            </a>

          </motion.div>

          {/* ================================================= */}
          {/* MAP - WHITE BOX */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              overflow-hidden
              rounded-2xl
              bg-white
              p-2
              shadow-lg
              md:p-3
            "
          >
            <iframe
              title="TREE HOUSE Restaurant Location"
              src="https://www.google.com/maps?q=Jagiroad,Assam&output=embed"
              className="
                h-[260px]
                w-full
                rounded-xl
                border-0
                md:h-[380px]
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>

        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <p className="mt-5 text-center text-xs text-[#AEBBB4]">
          We look forward to welcoming you at TREE HOUSE.
        </p>

      </div>
    </section>
  );
}