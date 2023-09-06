"use client";

import "./globals.css";
import { Barlow } from "next/font/google";
import { useStore } from "./store";
import Navbar from "@/components/navigation/Navbar";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";

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

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Frederik Barbré - Portfolio</title>
        <meta
          name="theme-color"
          content={theme === "light" ? "#FFFFFF" : "#0E0E0E"}
        />
      </head>
      <body
        className={`${barlow.className} ${
          theme === "light"
            ? "text-near-black bg-white"
            : "bg-near-black text-white"
        } transition-colors`}
      >
        {isClient && (
          <>
            <Navbar />
            <main className="pt-[77px]">{children}</main>
            <CTA />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
