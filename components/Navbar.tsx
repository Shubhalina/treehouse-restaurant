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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/images/tree-house-logo.jpeg"
            alt="Tree House"
            width={100}
            height={45}
            priority
            className="w-[80px] md:w-[95px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-[18px] font-medium hover:text-yellow-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-[18px] font-medium hover:text-yellow-400 transition"
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