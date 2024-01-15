"use client";

import { useStore } from "@/app/store";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MenuToggle from "./MenuToggle";
import NavMenu from "./NavMenu";
import { motion as m, AnimatePresence } from "framer-motion";
import Link from "@/components/shared/Link";

export default function Navbar() {
  const theme = useStore((state) => state.theme);
  const [isActive, setIsActive] = useState(false);
  const language = useStore((state) => state.language);

  return (
    <>
      <header
        className={`w-full transition-colors text-inherit bg-inherit z-50 fixed border-b  ${
          theme === "light"
            ? "border-b-black/20 bg-white"
            : "border-b-white/20 bg-near-black"
        }`}
      >
        <div
          className={`max-w-custom mx-auto grid grid-cols-2 h-[77px] md:grid-cols-3 items-center px-navbar-inline xl:px-md py-[22px]`}
        >
          <Link
            routeName={language === "en" ? "Home" : "Hjem"}
            href={"/"}
            onClick={() => setIsActive(false)}
            className="font-bold text-[22px] tracking-[1.32px] w-max hidden md:block"
          >
            FREDERIK BARBRÉ
          </Link>

          <MenuToggle isActive={isActive} setIsActive={setIsActive} />
          <ThemeToggle />

          <NavMenu
            isActive={isActive}
            setIsActive={setIsActive}
            theme={theme}
          />
        </div>
      </header>

      <AnimatePresence>
        {isActive && (
          <m.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            onClick={() => setIsActive(false)}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-20"
          ></m.div>
        )}
      </AnimatePresence>
    </>
  );
}
