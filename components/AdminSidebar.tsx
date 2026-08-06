"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  CalendarDays,
  UtensilsCrossed,
  ImageIcon,
  PartyPopper,
  Settings,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Bookings",
    href: "/admin/bookings",
    icon: CalendarDays,
  },
  {
    name: "Menu",
    href: "/admin/menu",
    icon: UtensilsCrossed,
  },
  {
    name: "Gallery",
    href: "/admin/gallery",
    icon: ImageIcon,
  },
  {
    name: "Events",
    href: "/admin/events",
    icon: PartyPopper,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-72 bg-black text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold text-yellow-500 mb-10">
        TREE HOUSE
      </h1>

      <nav className="space-y-3">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-yellow-500 hover:text-black transition"
            >
              <Icon size={22} />
              {item.name}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}