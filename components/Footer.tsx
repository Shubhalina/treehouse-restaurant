export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E3D8]">

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-10">

        {/* ============================= */}
        {/* MAIN FOOTER */}
        {/* ============================= */}

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          {/* LOGO / BRAND */}

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide text-[#17352A]">
              TREE HOUSE
            </h2>

            <p className="mt-1 text-xs text-[#7A837E]">
              Restaurant • Events • Experiences
            </p>
          </div>

          {/* NAVIGATION */}

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs md:text-sm">

            <a
              href="/"
              className="text-[#66706A] transition hover:text-[#B18424]"
            >
              Home
            </a>

            <a
              href="/#menu"
              className="text-[#66706A] transition hover:text-[#B18424]"
            >
              Menu
            </a>

            <a
              href="/about"
              className="text-[#66706A] transition hover:text-[#B18424]"
            >
              About
            </a>

            <a
              href="/#gallery"
              className="text-[#66706A] transition hover:text-[#B18424]"
            >
              Gallery
            </a>

            <a
              href="/#contact"
              className="text-[#66706A] transition hover:text-[#B18424]"
            >
              Contact
            </a>

          </nav>

        </div>

        {/* ============================= */}
        {/* DIVIDER */}
        {/* ============================= */}

        <div className="my-6 h-px bg-[#E8E3D8]" />

        {/* ============================= */}
        {/* BOTTOM */}
        {/* ============================= */}

        <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">

          <p className="text-xs text-[#7A837E]">
            © {new Date().getFullYear()} TREE HOUSE Restaurant.
            All Rights Reserved.
          </p>

          <p className="text-xs text-[#9A9F9B]">
            Jagiroad, Assam
          </p>

        </div>

      </div>

    </footer>
  );
}