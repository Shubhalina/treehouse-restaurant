"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Contact Us
          </h2>

          <p className="text-gray-400 mt-4">
            We'd love to host your next celebration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div className="space-y-8">

            <div className="flex gap-5">
              <MapPin className="text-yellow-500" size={32} />
              <div>
                <h3 className="text-2xl font-semibold">Address</h3>
                <p className="text-gray-400">
                  TREE HOUSE Restaurant,
                  Jagiroad, Assam
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Phone className="text-yellow-500" size={32} />
              <div>
                <h3 className="text-2xl font-semibold">Phone</h3>
                <a
                  href="tel:+919999999999"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  +91 99999 99999
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail className="text-yellow-500" size={32} />
              <div>
                <h3 className="text-2xl font-semibold">Email</h3>
                <a
                  href="mailto:info@treehouse.com"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  info@treehouse.com
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="text-yellow-500" size={32} />
              <div>
                <h3 className="text-2xl font-semibold">Opening Hours</h3>
                <p className="text-gray-400">
                  Monday – Sunday
                  <br />
                  10:00 AM – 10:30 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold"
              >
                WhatsApp
              </a>

              <a
                href="tel:+919999999999"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold"
              >
                Call Now
              </a>
            </div>

          </div>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=Jagiroad,Assam&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>

      </div>
    </section>
  );
}