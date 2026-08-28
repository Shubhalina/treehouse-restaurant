"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#17352A] py-20 md:py-24 px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[#E2BD62] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Visit TREE HOUSE
          </h2>

          <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5 mb-5" />

          <p className="text-[#C5CEC8] text-base md:text-lg leading-7">
            Whether you're planning a family gathering, celebration,
            special dinner or simply looking for a memorable place to dine,
            we'd love to welcome you.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* CONTACT CONTENT */}
        {/* ================================================= */}

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* ================================================= */}
          {/* CONTACT INFORMATION */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#204437] rounded-3xl p-8 md:p-10 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-7">

              {/* ================================================= */}
              {/* ADDRESS */}
              {/* ================================================= */}

              <div className="flex gap-4">

                <div className="shrink-0 w-11 h-11 rounded-full bg-[#C79A32]/15 flex items-center justify-center">
                  <MapPin
                    size={20}
                    className="text-[#E2BD62]"
                  />
                </div>

                <div>
                  <p className="text-sm text-[#AEBBB4] mb-1">
                    Address
                  </p>

                  <p className="text-white leading-6">
                    NH-37, Jagiroad
                    <br />
                    Assam, India
                  </p>
                </div>

              </div>

              {/* ================================================= */}
              {/* PHONE */}
              {/* ================================================= */}

              <div className="flex gap-4">

                <div className="shrink-0 w-11 h-11 rounded-full bg-[#C79A32]/15 flex items-center justify-center">
                  <Phone
                    size={20}
                    className="text-[#E2BD62]"
                  />
                </div>

                <div>
                  <p className="text-sm text-[#AEBBB4] mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+918876951989"
                    className="text-white hover:text-[#E2BD62] transition"
                  >
                    +91 88769 51989
                  </a>
                </div>

              </div>

              {/* ================================================= */}
              {/* EMAIL */}
              {/* ================================================= */}

              <div className="flex gap-4">

                <div className="shrink-0 w-11 h-11 rounded-full bg-[#C79A32]/15 flex items-center justify-center">
                  <Mail
                    size={20}
                    className="text-[#E2BD62]"
                  />
                </div>

                <div className="min-w-0">

                  <p className="text-sm text-[#AEBBB4] mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:resorttreehouse4@gmail.com"
                    className="text-white hover:text-[#E2BD62] transition break-all"
                  >
                    resorttreehouse4@gmail.com
                  </a>

                </div>

              </div>

              {/* ================================================= */}
              {/* OPENING HOURS */}
              {/* ================================================= */}

              <div className="flex gap-4">

                <div className="shrink-0 w-11 h-11 rounded-full bg-[#C79A32]/15 flex items-center justify-center">
                  <Clock
                    size={20}
                    className="text-[#E2BD62]"
                  />
                </div>

                <div>

                  <p className="text-sm text-[#AEBBB4] mb-1">
                    Opening Hours
                  </p>

                  <p className="text-white leading-6">
                    Open daily
                    <br />
                    Please contact us for current timings
                  </p>

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* WHATSAPP */}
            {/* ================================================= */}

            <a
              href="https://wa.me/918876951989"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                items-center
                justify-center
                gap-2
                w-full
                rounded-full
                bg-[#C79A32]
                hover:bg-[#D6AA45]
                text-[#17352A]
                font-semibold
                py-3.5
                transition
              "
            >
              <MessageCircle size={19} />

              Contact on WhatsApp
            </a>

          </motion.div>

          {/* ================================================= */}
          {/* GOOGLE MAP */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              min-h-[420px]
              rounded-3xl
              overflow-hidden
              bg-[#204437]
              border
              border-white/10
            "
          >

            <iframe
              src="https://www.google.com/maps?q=Tree+House+Jagiroad+Assam&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "420px",
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="TREE HOUSE Jagiroad Google Map"
              className="
                absolute
                inset-0
                w-full
                h-full
              "
            />

          </motion.div>

        </div>

        {/* ================================================= */}
        {/* BOTTOM TAGLINE */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-center
            mt-16
            pt-8
            border-t
            border-white/10
          "
        >

          <p className="text-[#E2BD62] text-sm uppercase tracking-[0.25em]">
            TREE HOUSE, JAGIROAD
          </p>

          <p className="text-white text-xl md:text-2xl font-medium mt-3">
            Your Celebration. Our Hospitality.
          </p>

        </motion.div>

      </div>
    </section>
  );
}