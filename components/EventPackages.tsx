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
      className="bg-[#F7F3EA] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#C79A32] uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#17352A]">
            Event Packages
          </h2>

          <div className="w-14 h-[2px] bg-[#C79A32] mx-auto mt-5" />

          <p className="text-[#68736D] text-lg mt-6 max-w-2xl mx-auto">
            From celebrations to corporate gatherings, we offer
            comfortable spaces and memorable experiences for every occasion.
          </p>
        </div>

        {/* Four Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {eventPackages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#17352A] rounded-2xl p-8 text-white
                           border border-[#2D5A49]
                           shadow-lg
                           flex flex-col min-h-[390px]"
              >

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-full
                             bg-[#C79A32]/20
                             flex items-center justify-center
                             mb-8"
                >
                  <Icon
                    size={30}
                    className="text-[#E2BD62]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#C5CEC8] leading-7 flex-1">
                  {item.text}
                </p>

                {/* Button */}
                <div className="mt-8">

                  {item.wedding ? (
                    <Link
                      href="/booking/event/wedding"
                      className="inline-flex items-center gap-3
                                 text-[#E2BD62]
                                 font-semibold
                                 hover:text-white
                                 transition-colors"
                    >
                      View Wedding Packages
                      <span className="text-xl">→</span>
                    </Link>
                  ) : (
                    <a
                      href="https://wa.me/"
                      className="inline-flex items-center gap-3
                                 text-[#E2BD62]
                                 font-semibold
                                 hover:text-white
                                 transition-colors"
                    >
                      Enquire for Details
                      <span className="text-xl">→</span>
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