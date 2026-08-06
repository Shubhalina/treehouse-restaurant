"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-yellow-500"
        >
          TREE HOUSE
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-yellow-500 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Reserve Button */}
        <a
          href="#booking"
          className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-3 rounded-full font-semibold"
        >
          Reserve Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">

          <nav className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-500"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-500 text-black rounded-xl py-3 text-center font-semibold"
            >
              Reserve Now
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}