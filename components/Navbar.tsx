"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Menu", href: "/#menu" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#071C15]/95 backdrop-blur-md border-b border-white/5">

      {/* ================= HEADER ================= */}

      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[64px] flex items-center justify-between">

        {/* ================= BRAND ================= */}

        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 outline-none"
        >

          {/* Tree House Logo */}

          <div className="relative w-[40px] h-[48px] md:w-[44px] md:h-[52px] shrink-0">
            <Image
              src="/images/tree-house-logo.jpeg"
              alt="TREE HOUSE"
              fill
              priority
              sizes="44px"
              className="object-contain"
            />
          </div>

          {/* Brand Name */}

          <div className="flex flex-col justify-center leading-none">

            <span className="text-[#F4F1E8] text-[20px] md:text-[22px] font-semibold tracking-[0.04em]">
              TREE HOUSE
            </span>

            <span className="text-[#D7A936] text-[8px] md:text-[9px] tracking-[0.22em] mt-[5px] font-medium">
              FOOD FUN REPOSE
            </span>

          </div>

        </Link>

        {/* ================= DESKTOP NAV ================= */}

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                text-[#F5F3EC]
                text-[18px]
                font-medium
                transition-all
                duration-300
                hover:text-[#E2BD62]
                outline-none
              "
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            text-[#F5F3EC]
            hover:text-[#D7A936]
            transition
            outline-none
          "
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* ================= MOBILE NAV ================= */}

      {isOpen && (
        <div className="md:hidden bg-[#071C15] border-t border-white/10">

          <nav className="flex flex-col px-6 py-4">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-[#F5F3EC]
                  text-[18px]
                  font-medium
                  py-3
                  border-b
                  border-white/5
                  hover:text-[#D7A936]
                  transition
                  outline-none
                "
              >
                {item.name}
              </Link>
            ))}

          </nav>

        </div>
      )}

    </header>
  );
}