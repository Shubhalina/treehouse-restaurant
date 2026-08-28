"use client";

import Navbar from "@/components/Navbar";
import PageCloseButton from "@/components/PageCloseButton";

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

        {/* PAGE HEADER */}
        <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-8">

          <div className="text-center">

            <p className="text-[#C79A32] uppercase tracking-[0.25em] text-sm font-semibold">
              Wedding & Reception
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#17352A] mt-4">
              Wedding Packages
            </h1>

            <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5 mb-6" />

            <p className="text-[#68736D] text-lg max-w-3xl mx-auto leading-8">
              Choose from our proposed wedding and reception packages.
            </p>

          </div>

          {/* PRICE NOTE */}
          <div
            className="
              mt-10
              bg-white
              border border-[#E2BD62]
              rounded-2xl
              p-6 md:p-8
              text-center
            "
          >
            <h2 className="text-xl font-bold text-[#17352A] mb-3">
              Proposed / Estimated Package Prices
            </h2>

            <p className="text-[#68736D] leading-7 max-w-6xl mx-auto">
              The prices shown are proposed package rates for discussion
              purposes and are not confirmed final TREE HOUSE tariffs.
              Final pricing will be confirmed based on the event date,
              guest count, menu, decor requirements, venue arrangements
              and selected services.
            </p>
          </div>

        </section>

        {/* WEDDING PACKAGES */}
        <section className="max-w-7xl mx-auto px-6 py-8">

          <div className="grid lg:grid-cols-3 gap-7">

            {weddingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="
                  bg-[#17352A]
                  text-white
                  rounded-2xl
                  p-7
                  shadow-lg
                  border border-[#2D5A49]
                  flex flex-col
                "
              >

                {/* Package Name */}
                <h2 className="text-2xl font-bold mb-6">
                  {pkg.name}
                </h2>

                {/* Price */}
                <div className="mb-2">

                  <span className="text-[#E2BD62] text-4xl font-bold">
                    {pkg.price}
                  </span>

                  <span className="text-[#C5CEC8] ml-2">
                    / person
                  </span>

                </div>

                <p className="text-[#E2BD62] font-semibold text-sm mb-4">
                  Proposed / Estimated Price
                </p>

                <p className="text-[#C5CEC8] mb-6">
                  {pkg.minimum}
                </p>

                {/* Estimated Total */}
                <div
                  className="
                    bg-[#214C3E]
                    border border-[#376956]
                    rounded-xl
                    p-5
                    mb-7
                  "
                >
                  <p className="text-[#AEBBB4] text-sm">
                    Estimated package for 200 guests
                  </p>

                  <p className="text-white text-2xl font-bold mt-2">
                    {pkg.estimated}
                  </p>
                </div>

                {/* Features */}
                <h3 className="text-[#E2BD62] font-semibold text-lg mb-4">
                  Package Includes
                </h3>

                <ul className="space-y-3 flex-1">

                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-[#C5CEC8]"
                    >
                      <span className="text-[#E2BD62] shrink-0">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                {/* Inquiry Button */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Hello TREE HOUSE, I am interested in the ${pkg.name}. Please share more details about this wedding package.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
                    w-full
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#C79A32]
                    px-6
                    py-4
                    text-[#17352A]
                    font-bold
                    text-lg
                    hover:bg-[#E2BD62]
                    transition-all
                    duration-300
                  "
                >
                  Enquire About This Package
                </a>

              </div>
            ))}

          </div>

        </section>

        {/* ADDITIONAL OPTIONS */}
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-8">

          <div className="text-center mb-10">

            <p className="text-[#C79A32] uppercase tracking-[0.25em] text-sm font-semibold">
              Additional Options
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#17352A] mt-3">
              Optional Services
            </h2>

            <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5" />

          </div>

          <div
            className="
              bg-white
              rounded-2xl
              border border-[#E2BD62]
              overflow-hidden
              shadow-sm
            "
          >

            {optionalServices.map(([service, price], index) => (
              <div
                key={service}
                className={`
                  flex flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-2
                  px-6
                  py-5
                  ${
                    index !== optionalServices.length - 1
                      ? "border-b border-[#E5DED1]"
                      : ""
                  }
                `}
              >

                <span className="text-[#17352A] font-medium">
                  {service}
                </span>

                <span className="text-[#C79A32] font-semibold">
                  {price}
                </span>

              </div>
            ))}

          </div>

        </section>

        {/* FINAL CONTACT */}
        <section className="max-w-4xl mx-auto px-6 pt-8 pb-16">

          <div className="bg-[#17352A] rounded-2xl p-8 md:p-12 text-center">

            <p className="text-[#E2BD62] uppercase tracking-[0.2em] text-sm font-semibold">
              Planning Your Special Day?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Let's Plan Your Wedding Together
            </h2>

            <p className="text-[#C5CEC8] mt-4 leading-7 max-w-2xl mx-auto">
              Contact TREE HOUSE to discuss your wedding date, guest count,
              menu, decoration and package requirements.
            </p>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hello TREE HOUSE, I would like to enquire about wedding and reception packages."
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
                text-[#17352A]
                font-bold
                text-lg
                hover:bg-[#E2BD62]
                transition-all
                duration-300
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