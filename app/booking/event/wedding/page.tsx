"use client";

import Navbar from "@/components/Navbar";
import PageCloseButton from "@/components/PageCloseButton";

const WHATSAPP_NUMBER = "918876951989";

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

export default function WeddingPage() {
  return (
    <>
      <Navbar />
      <PageCloseButton />

      <main className="min-h-screen bg-[#F7F3EA]">

        {/* ================================================= */}
        {/* PAGE HEADER */}
        {/* ================================================= */}

        <section className="mx-auto max-w-7xl px-5 pt-16 pb-8 md:px-6 md:pt-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A32]">
              Wedding & Reception
            </p>

            <h1 className="mt-4 text-4xl font-bold text-[#17352A] md:text-5xl">
              Wedding Packages
            </h1>

            <div className="mx-auto mt-5 h-[2px] w-14 bg-[#C79A32]" />

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#68736D] md:text-lg">
              Choose from our proposed wedding and reception packages.
            </p>

          </div>

          {/* PRICE NOTE */}

          <div
            className="
              mt-8
              rounded-2xl
              border
              border-[#E2BD62]
              bg-white
              p-5
              text-center
              md:mt-10
              md:p-8
            "
          >
            <h2 className="mb-3 text-xl font-bold text-[#17352A]">
              Proposed / Estimated Package Prices
            </h2>

            <p className="mx-auto max-w-6xl leading-7 text-[#68736D]">
              The prices shown are proposed package rates for discussion
              purposes and are not confirmed final TREE HOUSE tariffs.
              Final pricing will be confirmed based on the event date,
              guest count, menu, decor requirements, venue arrangements
              and selected services.
            </p>
          </div>

        </section>

        {/* ================================================= */}
        {/* WEDDING PACKAGES */}
        {/* ================================================= */}

        <section className="mx-auto max-w-7xl px-5 py-8 md:px-6">

          <div className="grid gap-5 lg:grid-cols-3 md:gap-7">

            {weddingPackages.map((pkg) => (

              <div
                key={pkg.name}
                className="
                  flex
                  flex-col
                  rounded-2xl
                  border
                  border-[#2D5A49]
                  bg-[#17352A]
                  p-5
                  text-white
                  shadow-lg
                  md:p-7
                "
              >

                {/* PACKAGE NAME */}

                <h2 className="mb-5 text-2xl font-bold">
                  {pkg.name}
                </h2>

                {/* PRICE */}

                <div className="mb-2">

                  <span className="text-4xl font-bold text-[#E2BD62]">
                    {pkg.price}
                  </span>

                  <span className="ml-2 text-[#C5CEC8]">
                    / person
                  </span>

                </div>

                <p className="mb-4 text-sm font-semibold text-[#E2BD62]">
                  Proposed / Estimated Price
                </p>

                <p className="mb-6 text-[#C5CEC8]">
                  {pkg.minimum}
                </p>

                {/* ESTIMATED TOTAL */}

                <div
                  className="
                    mb-7
                    rounded-xl
                    border
                    border-[#376956]
                    bg-[#214C3E]
                    p-5
                  "
                >
                  <p className="text-sm text-[#AEBBB4]">
                    Estimated package for 200 guests
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    {pkg.estimated}
                  </p>
                </div>

                {/* FEATURES */}

                <h3 className="mb-4 text-lg font-semibold text-[#E2BD62]">
                  Package Includes
                </h3>

                <ul className="flex-1 space-y-3">

                  {pkg.features.map((feature) => (

                    <li
                      key={feature}
                      className="flex gap-3 text-[#C5CEC8]"
                    >
                      <span className="shrink-0 text-[#E2BD62]">
                        ✓
                      </span>

                      <span>
                        {feature}
                      </span>
                    </li>

                  ))}

                </ul>

                {/* ================================================= */}
                {/* PACKAGE WHATSAPP INQUIRY */}
                {/* ================================================= */}

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hello TREE HOUSE Restaurant,

I am interested in the ${pkg.name}.

Please share more details about this wedding package, availability, pricing and booking process.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#C79A32]
                    px-6
                    py-4
                    text-lg
                    font-bold
                    text-[#17352A]
                    transition-all
                    duration-300
                    hover:bg-[#E2BD62]
                  "
                >
                  Enquire About This Package
                </a>

              </div>

            ))}

          </div>

        </section>

        {/* ================================================= */}
        {/* ADDITIONAL OPTIONS */}
        {/* ================================================= */}

        <section className="mx-auto max-w-5xl px-5 pt-10 pb-8 md:px-6 md:pt-12">

          <div className="mb-8 text-center md:mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C79A32]">
              Additional Options
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#17352A] md:text-4xl">
              Optional Services
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-14 bg-[#C79A32]" />

          </div>

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-[#E2BD62]
              bg-white
              shadow-sm
            "
          >

            {optionalServices.map(([service, price], index) => (

              <div
                key={service}
                className={`
                  flex
                  flex-col
                  gap-2
                  px-5
                  py-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  md:px-6
                  md:py-5
                  ${
                    index !== optionalServices.length - 1
                      ? "border-b border-[#E5DED1]"
                      : ""
                  }
                `}
              >

                <span className="font-medium text-[#17352A]">
                  {service}
                </span>

                <span className="font-semibold text-[#C79A32]">
                  {price}
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* ================================================= */}
        {/* FINAL CONTACT */}
        {/* ================================================= */}

        <section className="mx-auto max-w-4xl px-5 pt-8 pb-14 md:px-6 md:pb-16">

          <div className="rounded-2xl bg-[#17352A] p-7 text-center md:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E2BD62]">
              Planning Your Special Day?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Let's Plan Your Wedding Together
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#C5CEC8]">
              Contact TREE HOUSE to discuss your wedding date, guest count,
              menu, decoration and package requirements.
            </p>

            {/* ================================================= */}
            {/* WEDDING CONTACT WHATSAPP */}
            {/* ================================================= */}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hello TREE HOUSE Restaurant,

I would like to enquire about your Wedding & Reception packages.

Please share the available packages, pricing, availability and booking details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-[#C79A32]
                px-8
                py-4
                text-lg
                font-bold
                text-[#17352A]
                transition-all
                duration-300
                hover:bg-[#E2BD62]
              "
            >
              Contact Us About Your Wedding
            </a>

          </div>

        </section>

      </main>
    </>
  );
}