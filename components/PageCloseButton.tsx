"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PageCloseButton() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={goHome}
      aria-label="Back to Home"
      className="
        fixed
        top-[85px]
        right-5
        md:top-[100px]
        md:right-8
        z-[100]
        flex
        h-11
        w-11
        md:h-12
        md:w-12
        items-center
        justify-center
        rounded-full
        bg-[#C79A32]
        text-[#17352A]
        shadow-lg
        transition-all
        duration-200
        hover:scale-105
        hover:bg-[#E2BD62]
      "
    >
      <X size={25} strokeWidth={2.5} />
    </button>
  );
}