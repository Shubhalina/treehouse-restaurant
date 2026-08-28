import Link from "next/link";
import {
  Utensils,
  Heart,
  Home,
  BriefcaseBusiness,
} from "lucide-react";

const WHATSAPP_NUMBER = "918876951989";

const eventPackages = [
  {
    icon: Utensils,
    title: "Birthday Celebration",
    text: "Celebrate unforgettable birthdays with decoration, food, music, and joyful memories.",
    button: "Enquire for Details",
    whatsapp: true,
    message:
      "Hello TREE HOUSE Restaurant,\n\nI would like to enquire about a Birthday Celebration. Please share the available packages, pricing and details.",
  },
  {
    icon: Heart,
    title: "Wedding & Reception",
    text: "Celebrate your special day with thoughtfully planned wedding and reception packages designed for memorable gatherings.",
    button: "View Wedding Packages",
    wedding: true,
  },
  {
    icon: Home,
    title: "Private Cottage",
    text: "Enjoy a peaceful and comfortable experience with family and friends in our private cottages.",
    button: "Enquire for Details",
    whatsapp: true,
    message:
      "Hello TREE HOUSE Restaurant,\n\nI would like to enquire about your Private Cottage. Please share the availability, pricing and details.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Conference & Corporate Events",
    text: "Host conferences, corporate gatherings and business events in a comfortable and professional setting.",
    button: "Enquire for Details",
    whatsapp: true,
    message:
      "Hello TREE HOUSE Restaurant,\n\nI would like to enquire about Conference & Corporate Events. Please share the available packages, pricing and details.",
  },
];

export default function EventPackages() {
  return (
    <section
      id="events"
      className="bg-[#F7F3EA] px-5 py-12 md:px-6 md:py-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <div className="mb-9 text-center md:mb-11">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C79A32] md:text-sm">
            Our Services
          </p>

          <h2 className="text-3xl font-bold text-[#17352A] md:text-5xl">
            Event Packages
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-12 bg-[#C79A32]" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#68736D] md:text-lg md:leading-7">
            From celebrations to corporate gatherings, we offer
            comfortable spaces and memorable experiences for every occasion.
          </p>

        </div>

        {/* ================================================= */}
        {/* FOUR CARDS */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">

          {eventPackages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  min-h-0
                  flex-col
                  rounded-xl
                  border
                  border-[#2D5A49]
                  bg-[#17352A]
                  p-5
                  text-white
                  shadow-md
                  md:rounded-2xl
                  md:p-6
                "
              >

                {/* ================================================= */}
                {/* ICON */}
                {/* ================================================= */}

                <div
                  className="
                    mb-4
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C79A32]/20
                    md:mb-5
                    md:h-12
                    md:w-12
                  "
                >
                  <Icon
                    size={21}
                    className="text-[#E2BD62]"
                  />
                </div>

                {/* ================================================= */}
                {/* TITLE */}
                {/* ================================================= */}

                <h3 className="mb-3 text-lg font-bold leading-snug md:text-xl">
                  {item.title}
                </h3>

                {/* ================================================= */}
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <p className="flex-1 text-sm leading-6 text-[#C5CEC8]">
                  {item.text}
                </p>

                {/* ================================================= */}
                {/* BUTTON */}
                {/* ================================================= */}

                <div className="mt-5">

                  {item.wedding ? (

                    <Link
                      href="/booking/event/wedding"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-[#E2BD62]
                        transition-colors
                        hover:text-white
                      "
                    >
                      View Wedding Packages

                      <span className="text-lg leading-none">
                        →
                      </span>
                    </Link>

                  ) : (

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        item.message || ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-[#E2BD62]
                        transition-colors
                        hover:text-white
                      "
                    >
                      {item.button}

                      <span className="text-lg leading-none">
                        →
                      </span>
                    </a>

                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}