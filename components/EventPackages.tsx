import Link from "next/link";
import {
  Utensils,
  Heart,
  Home,
  BriefcaseBusiness,
} from "lucide-react";

const eventPackages = [
  {
    icon: Utensils,
    title: "Birthday Celebration",
    text: "Celebrate unforgettable birthdays with decoration, food, music, and joyful memories.",
    button: "Enquire for Details",
    whatsapp: true,
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
  },
  {
    icon: BriefcaseBusiness,
    title: "Conference & Corporate Events",
    text: "Host conferences, corporate gatherings and business events in a comfortable and professional setting.",
    button: "Enquire for Details",
    whatsapp: true,
  },
];

export default function EventPackages() {
  return (
    <section
      id="events"
      className="bg-[#F7F3EA] py-12 md:py-16 px-5 md:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <div className="text-center mb-9 md:mb-11">

          <p className="text-[#C79A32] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-2">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#17352A]">
            Event Packages
          </h2>

          <div className="w-12 h-[2px] bg-[#C79A32] mx-auto mt-4" />

          <p className="text-[#68736D] text-sm md:text-lg mt-4 max-w-2xl mx-auto leading-6 md:leading-7">
            From celebrations to corporate gatherings, we offer
            comfortable spaces and memorable experiences for every occasion.
          </p>

        </div>

        {/* ================================================= */}
        {/* FOUR CARDS */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">

          {eventPackages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  bg-[#17352A]
                  rounded-xl
                  md:rounded-2xl
                  p-5
                  md:p-6
                  text-white
                  border
                  border-[#2D5A49]
                  shadow-md
                  flex
                  flex-col
                  min-h-0
                "
              >

                {/* ================================================= */}
                {/* ICON */}
                {/* ================================================= */}

                <div
                  className="
                    w-11
                    h-11
                    md:w-12
                    md:h-12
                    rounded-full
                    bg-[#C79A32]/20
                    flex
                    items-center
                    justify-center
                    mb-4
                    md:mb-5
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

                <h3 className="text-lg md:text-xl font-bold leading-snug mb-3">
                  {item.title}
                </h3>

                {/* ================================================= */}
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <p className="text-[#C5CEC8] text-sm leading-6 flex-1">
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
                        text-[#E2BD62]
                        text-sm
                        font-semibold
                        hover:text-white
                        transition-colors
                      "
                    >
                      View Wedding Packages

                      <span className="text-lg leading-none">
                        →
                      </span>
                    </Link>
                  ) : (
                    <a
                      href="https://wa.me/"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-[#E2BD62]
                        text-sm
                        font-semibold
                        hover:text-white
                        transition-colors
                      "
                    >
                      Enquire for Details

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