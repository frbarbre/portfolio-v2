"use client";

import "./globals.css";
import { Barlow } from "next/font/google";
import { useStore } from "./store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useStore((state) => state.theme);

  return (
    <html lang="en">
      <head>
        <title>Frederik Barbré - Portfolio</title>
      </head>
      <body
        className={`${barlow.className} ${
          theme === "light"
            ? "text-near-black bg-white"
            : "bg-near-black text-white"
        } transition-colors`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
