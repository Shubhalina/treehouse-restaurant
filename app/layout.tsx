import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "TREE HOUSE Restaurant | Jagiroad, Assam",

  description:
    "TREE HOUSE Restaurant in Jagiroad, Assam — enjoy delicious food, private cottages, events, celebrations and a beautiful restaurant experience.",

  keywords: [
    "TREE HOUSE Restaurant",
    "Tree House Restaurant Jagiroad",
    "Restaurant in Jagiroad",
    "Restaurants in Assam",
    "Jagiroad Restaurant",
    "Tree House Restaurant Assam",
    "Private Cottage Jagiroad",
    "Birthday Party Jagiroad",
    "Wedding Reception Jagiroad",
    "Restaurant Events Jagiroad",
  ],

  authors: [
    {
      name: "TREE HOUSE Restaurant",
    },
  ],

  creator: "TREE HOUSE Restaurant",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "TREE HOUSE Restaurant | Jagiroad, Assam",

    description:
      "Visit TREE HOUSE Restaurant in Jagiroad, Assam for delicious food, private cottages, celebrations, events and a beautiful dining experience.",

    type: "website",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "TREE HOUSE Restaurant Jagiroad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "TREE HOUSE Restaurant | Jagiroad, Assam",

    description:
      "TREE HOUSE Restaurant in Jagiroad, Assam — food, events, celebrations and private cottages.",

    images: ["/images/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}