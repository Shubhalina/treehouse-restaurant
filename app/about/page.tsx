"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import PageCloseButton from "@/components/PageCloseButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#17352A]">
      <Navbar />
      <PageCloseButton />
      <About />
    </main>
  );
}