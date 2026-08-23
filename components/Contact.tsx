"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const phoneNumber = "08876951989";
  const whatsappNumber = "918876951989";

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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

            {/* Address */}
            <div className="flex gap-5">
              <MapPin
                className="text-yellow-500 flex-shrink-0"
                size={32}
              />

              <div>
                <h3 className="text-2xl font-semibold">
                  Address
                </h3>

                <p className="text-gray-400 mt-2 leading-7">
                  TREE HOUSE Resort & Restaurant,
                  <br />
                  NH-37, Jagiroad,
                  <br />
                  Pachim Nagaon, Assam
                  <br />
                  782410
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <Phone
                className="text-yellow-500 flex-shrink-0"
                size={32}
              />

              <div>
                <h3 className="text-2xl font-semibold">
                  Phone
                </h3>

                <a
                  href={`tel:${phoneNumber}`}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  088769 51989
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5">
              <Mail
                className="text-yellow-500 flex-shrink-0"
                size={32}
              />

              <div>
                <h3 className="text-2xl font-semibold">
                  Email
                </h3>

                <p className="text-gray-500 mt-1">
                  Email address not listed
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-5">
              <Clock
                className="text-yellow-500 flex-shrink-0"
                size={32}
              />

              <div>
                <h3 className="text-2xl font-semibold">
                  Opening Hours
                </h3>

                <p className="text-gray-400 mt-2 leading-7">
                  Monday – Sunday
                  <br />
                  10:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20TREE%20HOUSE%20Restaurant,%20I%20would%20like%20to%20make%20a%20reservation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition"
              >
                WhatsApp
              </a>

              {/* Call */}
              <a
                href={`tel:${phoneNumber}`}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition"
              >
                Call Now
              </a>

              {/* Directions */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tree+House+Resort+%26+Restaurant+Jagiroad+Assam"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-full font-semibold transition"
              >
                Get Directions
              </a>

            </div>

          </div>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl min-h-[500px]">

            <iframe
              src="https://www.google.com/maps?q=Tree+House+Resort+%26+Restaurant,+Jagiroad,+Assam&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
              title="TREE HOUSE Resort & Restaurant Location"
            />

          </div>

        </div>

      </div>
    </section>
  );
}