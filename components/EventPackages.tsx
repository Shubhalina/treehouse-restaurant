"use client";

import { motion } from "framer-motion";
import {
  Cake,
  Heart,
  Home,
  BriefcaseBusiness,
  Check,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const eventTypes = [
  {
    title: "Birthday Celebrations",
    description:
      "Celebrate special birthdays with delicious food, a beautiful setting and memorable moments with family and friends.",
    icon: Cake,
    message:
      "Hello, I would like to enquire about a Birthday Celebration at TREE HOUSE, Jagiroad.\n\nEvent Date:\nExpected Guests:\nRequirements:\n\nPlease share the available options and final pricing.",
  },
  {
    title: "Wedding & Receptions",
    description:
      "Celebrate your special day with thoughtfully planned wedding and reception packages designed for memorable gatherings.",
    icon: Heart,
    wedding: true,
  },
  {
    title: "Private Dining Cottages",
    description:
      "Enjoy a relaxed and private dining experience with family and friends in our private cottages.",
    icon: Home,
    message:
      "Hello, I would like to enquire about the Private Dining Cottages at TREE HOUSE, Jagiroad.\n\nPreferred Date:\nExpected Guests:\nRequirements:\n\nPlease share the available options and pricing.",
  },
  {
    title: "Corporate Conferences",
    description:
      "A comfortable setting for meetings, conferences, corporate gatherings and business events.",
    icon: BriefcaseBusiness,
    message:
      "Hello, I would like to enquire about Corporate Conference arrangements at TREE HOUSE, Jagiroad.\n\nEvent Date:\nExpected Guests:\nEvent Requirements:\n\nPlease share the available options and pricing.",
  },
];

const weddingPackages = [
  {
    name: "Signature Wedding Package",
    price: "₹1,299",
    minimum: "Minimum booking: 100 guests",
    estimated: "₹2,59,800",
    features: [
      "Welcome drink",
      "2 Veg starters",
      "2 Non-Veg starters",
      "2 Veg main-course dishes",
      "3 Non-Veg main-course dishes",
      "Dal",
      "Rice / Pulao",
      "Roti / Naan",
      "Salad & accompaniments",
      "2 varieties of dessert",
      "Tea / Coffee",
      "Function venue arrangement",
      "Basic stage backdrop",
      "Bride & groom seating",
      "Basic table & chair decoration",
      "Table linen",
      "Basic floral decoration",
      "Welcome signage",
      "Basic sound system",
      "Dedicated event coordinator",
    ],
  },
  {
    name: "Royal Wedding Package",
    price: "₹1,799",
    minimum: "Minimum booking: 100 guests",
    estimated: "₹3,59,800",
    features: [
      "Everything in Signature Package",
      "Welcome mocktail",
      "3 Veg starters",
      "3 Non-Veg starters",
      "Assamese speciality",
      "3 Veg main courses",
      "4 Non-Veg main courses",
      "Dal",
      "Pulao / Fried Rice",
      "Naan / Roti",
      "Salad",
      "3 desserts",
      "Ice cream",
      "Premium stage decoration",
      "Fresh / artificial floral arrangement",
      "Decorative entrance",
      "Couple table decoration",
      "Buffet decoration",
      "Decorative lighting",
      "Guest table centrepieces",
      "DJ setup",
      "2 wireless microphones",
      "Music system",
      "Basic dance-floor setup",
      "Wedding cake",
      "Couple welcome drink",
      "Event coordination",
      "Bride & groom special dinner",
    ],
  },
  {
    name: "Grand Wedding Package",
    price: "₹2,399",
    minimum: "Minimum booking: 150 guests",
    estimated: "₹4,79,800",
    features: [
      "Premium welcome mocktail",
      "4 Veg starters",
      "4 Non-Veg starters",
      "Assamese traditional speciality",
      "Live food counter",
      "4 Veg main courses",
      "5 Non-Veg main courses",
      "Dal",
      "Special pulao / biryani",
      "Assorted breads",
      "Salad & raita",
      "4 desserts",
      "Ice cream",
      "Tea / Coffee",
      "Luxury stage décor",
      "Floral backdrop",
      "Entrance decoration",
      "Mandap decoration",
      "Premium lighting",
      "Buffet décor",
      "Table centrepieces",
      "Bride & groom table décor",
      "Photo booth",
      "Professional DJ",
      "Sound system",
      "Dance floor",
      "Wireless microphones",
      "Basic event lighting",
      "Wedding cake",
      "Couple welcome drinks",
      "Bride & groom special meal",
      "Event coordinator",
      "Guest welcome desk",
    ],
  },
];

const optionalServices = [
  ["Additional guest – Signature", "₹1,299/person"],
  ["Additional guest – Royal", "₹1,799/person"],
  ["Additional guest – Grand", "₹2,399/person"],
  ["Basic stage decoration", "₹25,000"],
  ["Premium stage decoration", "₹45,000"],
  ["Luxury stage decoration", "₹75,000+"],
  ["Mandap decoration", "₹25,000–₹60,000"],
  ["DJ & sound", "₹15,000–₹30,000"],
  ["Photography", "₹20,000–₹35,000"],
  ["Photography + Videography", "₹35,000–₹60,000"],
  ["Pre-wedding photography", "₹15,000–₹30,000"],
  ["Bridal room / changing room", "₹3,000–₹5,000"],
  ["Welcome gate decoration", "₹8,000–₹20,000"],
  ["Flower decoration", "₹15,000–₹50,000"],
  ["LED screen", "₹15,000–₹30,000"],
  ["Live food counter", "₹8,000–₹20,000"],
  ["Mehendi setup", "₹8,000–₹15,000"],
  ["Haldi decoration", "₹15,000–₹30,000"],
];

const whatsappNumber = "918876951989";

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

function weddingWhatsApp(packageName: string, price: string) {
  const message = `🌸 TREE HOUSE, JAGIROAD — WEDDING PACKAGE ENQUIRY 🌸

Package: ${packageName}
Proposed price: ${price} per person

Client Name:
Event Date:
Expected Guests:

I would like to enquire about the ${packageName} at TREE HOUSE, Jagiroad.

Please confirm availability and provide the final quotation based on my requirements.

Thank you.`;

  return whatsappLink(message);
}

export default function EventPackages() {
  return (
    <section
      id="events"
      className="bg-[#F7F4ED] py-20 md:py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================================================= */}
        {/* MAIN HEADING */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#C79A32] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Celebrations at TREE HOUSE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2823]">
            Events & Celebrations
          </h2>

          <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5 mb-5" />

          <p className="text-[#66706A] text-lg leading-8">
            From intimate gatherings to grand celebrations, TREE HOUSE
            provides a welcoming setting for life's special occasions.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* EVENT TYPES */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

          {eventTypes.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="
                  group
                  bg-[#17352A]
                  border border-[#285040]
                  rounded-2xl
                  p-7
                  shadow-[0_12px_35px_rgba(23,53,42,0.15)]
                  hover:shadow-[0_18px_45px_rgba(23,53,42,0.22)]
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}

                <div
                  className="
                    w-13
                    h-13
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C79A32]/20
                    text-[#E2BD62]
                    mb-5
                  "
                >
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}

                <h3 className="text-xl font-bold text-white">
                  {event.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-[#C5CEC8]">
                  {event.description}
                </p>

                {/* Button */}

                {event.wedding ? (
                  <a
                    href="#wedding-packages"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#E2BD62]
                      hover:text-white
                      transition
                    "
                  >
                    View Wedding Packages
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <a
                    href={whatsappLink(event.message || "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#E2BD62]
                      hover:text-white
                      transition
                    "
                  >
                    Enquire for Details
                    <ArrowRight size={16} />
                  </a>
                )}

              </motion.article>
            );
          })}

        </div>

        {/* ================================================= */}
        {/* WEDDING PACKAGES */}
        {/* ================================================= */}

        <div
          id="wedding-packages"
          className="mt-20 scroll-mt-24"
        >

          {/* Wedding Heading */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <p className="text-[#C79A32] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
              Wedding & Reception
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-[#1E2823]">
              Wedding Packages
            </h3>

            <p className="text-[#66706A] mt-3">
              Choose from our proposed wedding and reception packages.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* PRICE NOTICE */}
          {/* ================================================= */}

          <div
            className="
              max-w-4xl
              mx-auto
              mb-10
              rounded-xl
              border
              border-[#E4D5AA]
              bg-[#FFFCF7]
              px-5
              py-4
              text-center
            "
          >
            <p className="font-semibold text-[#1E2823]">
              Proposed / Estimated Package Prices
            </p>

            <p className="mt-1 text-sm text-[#66706A] leading-relaxed">
              The prices shown are proposed package rates for discussion
              purposes and are not confirmed final TREE HOUSE tariffs.
              Final pricing will be confirmed based on the event date,
              guest count, menu, décor requirements, venue arrangements
              and selected services.
            </p>
          </div>

          {/* ================================================= */}
          {/* WEDDING CARDS */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

            {weddingPackages.map((pkg, index) => (

              <motion.article
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  bg-[#17352A]
                  border
                  border-[#285040]
                  rounded-2xl
                  overflow-hidden
                  shadow-[0_12px_40px_rgba(23,53,42,0.15)]
                  hover:shadow-[0_18px_50px_rgba(23,53,42,0.22)]
                  transition-all
                  duration-300
                "
              >

                <div className="p-7">

                  {/* Package Name */}

                  <h4 className="text-2xl font-bold text-white">
                    {pkg.name}
                  </h4>

                  {/* Price */}

                  <div className="mt-5">

                    <span className="text-4xl font-bold text-[#E2BD62]">
                      {pkg.price}
                    </span>

                    <span className="text-sm text-[#C5CEC8]">
                      {" "}
                      / person
                    </span>

                  </div>

                  {/* Price Label */}

                  <p className="mt-2 text-xs font-semibold text-[#E2BD62]">
                    Proposed / Estimated Price
                  </p>

                  {/* Minimum */}

                  <p className="mt-3 text-sm text-[#C5CEC8]">
                    {pkg.minimum}
                  </p>

                  {/* Estimated Total */}

                  <div
                    className="
                      mt-5
                      rounded-xl
                      bg-[#204437]
                      border
                      border-[#35604F]
                      p-4
                    "
                  >

                    <p className="text-xs text-[#AEBBB4]">
                      Estimated package for 200 guests
                    </p>

                    <p className="text-xl font-bold text-white mt-1">
                      {pkg.estimated}
                    </p>

                  </div>

                  {/* Package Includes */}

                  <div className="mt-7">

                    <p className="font-semibold text-white mb-4">
                      Package Includes
                    </p>

                    <ul className="space-y-2 max-h-[390px] overflow-y-auto pr-2">

                      {pkg.features.map((feature) => (

                        <li
                          key={feature}
                          className="
                            flex
                            items-start
                            gap-2
                            text-sm
                            text-[#C5CEC8]
                          "
                        >

                          <Check
                            size={16}
                            className="
                              text-[#E2BD62]
                              mt-0.5
                              shrink-0
                            "
                          />

                          <span>
                            {feature}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>

                  {/* WhatsApp Button */}

                  <a
                    href={weddingWhatsApp(
                      pkg.name,
                      pkg.price
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-7
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#C79A32]
                      hover:bg-[#D6AA45]
                      text-[#17352A]
                      font-semibold
                      py-3.5
                      transition
                    "
                  >
                    <MessageCircle size={18} />
                    Enquire About Package
                  </a>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

        {/* ================================================= */}
        {/* OPTIONAL SERVICES */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >

          <div className="text-center mb-8">

            <p className="text-[#C79A32] uppercase tracking-[0.2em] text-xs font-semibold mb-2">
              Additional Options
            </p>

            <h3 className="text-3xl font-bold text-[#1E2823]">
              Optional Services
            </h3>

            <p className="text-[#66706A] mt-2">
              Additional services can be arranged according to your
              requirements.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

            {optionalServices.map(([service, price]) => (

              <div
                key={service}
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  rounded-xl
                  border
                  border-[#285040]
                  bg-[#17352A]
                  px-4
                  py-3
                "
              >

                <span className="text-sm text-[#C5CEC8]">
                  {service}
                </span>

                <span className="text-sm font-semibold text-[#E2BD62] whitespace-nowrap">
                  {price}
                </span>

              </div>

            ))}

          </div>

        </motion.div>

        {/* ================================================= */}
        {/* FINAL NOTE */}
        {/* ================================================= */}

        <div className="mt-12 max-w-4xl mx-auto text-center">

          <p className="text-xs md:text-sm text-[#66706A] leading-relaxed">

            <strong className="text-[#1E2823]">
              Important:
            </strong>{" "}

            The above wedding package prices are proposed / estimated
            rates for discussion purposes. Final pricing is subject to
            confirmation by TREE HOUSE management based on venue capacity,
            menu, decor requirements, staffing, electricity, outside-vendor
            policy and event date. Taxes / GST, if applicable, may be added
            to the final invoice.

          </p>

        </div>

      </div>
    </section>
  );
}