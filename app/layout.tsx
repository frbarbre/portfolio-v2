"use client";

import "./globals.css";
import { Barlow } from "next/font/google";
import { useStore } from "./store";
import Navbar from "@/components/navigation/Navbar";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const language = useStore((state) => state.language);

  const pathname = usePathname();
  const pathSplit = pathname.split("/");
  let title = "";
  if (pathname.includes("/archive")) {
    title = `${language === "en" ? "Archive" : "Arkiv"} | `;
  }
  else if (pathSplit.length > 2) {
    const titleFormatted = pathSplit[2]
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    title = `${titleFormatted} | `;
  } else {
    title =
      pathname === "/"
        ? ""
        : pathname === "/about"
        ? `${language === "en" ? "About Me" : "Om Mig"} | `
        : pathname === "/works"
        ? `${language === "en" ? "Works" : "Projekter"} | `
        : pathname === "/contact"
        ? `${language === "en" ? "Contact Me" : "Kontakt Mig"} | `
        : "";
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>
          {title +
            `Frederik Barbre - Frontend/Fullstack ${
              language === "en" ? "Developer" : "Udvikler"
            } & Designer - Portfolio`}
        </title>
        <meta
          name="description"
          content="I'm a frontend/fullstack web developer with a passion for creating stunning web applications using React, Next.js, and TypeScript. Explore my portfolio to see my design-driven development work."
        />
        <meta
          name="keywords"
          content="React, Next.js, TypeScript, Web Development, UI/UX Design, Frontend Development, Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://frederikbarbre.dk/works" />
        <meta
          property="og:title"
          content="Frederik Barbre - Frontend/Fullstack Developer & Designer - Portfolio"
        />
        <meta
          property="og:description"
          content="I'm a frontend/fullstack web developer with a passion for creating stunning web applications using React, Next.js, and TypeScript. Explore my portfolio to see my design-driven development work."
        />
        <meta
          property="og:image"
          content="https://frederikbarbre.dk/images/hero.png"
        />
        <meta property="og:url" content="https://frederikbarbre.dk/works" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Frederik Barbre - Frontend/Fullstack Developer & Designer - Portfolio"
        />
        <meta
          name="twitter:description"
          content="I'm a frontend/fullstack web developer with a passion for creating stunning web applications using React, Next.js, and TypeScript. Explore my portfolio to see my design-driven development work."
        />
        <meta
          name="twitter:image"
          content="https://frederikbarbre.dk/images/hero.png"
        />
        <meta name="geo.region" content="DK" />
        <meta name="geo.placename" content="Aarhus" />
        <meta name="geo.position" content="56.1629;10.2039" />
        <meta name="ICBM" content="56.1629, 10.2039" />
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
