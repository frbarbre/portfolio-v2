"use client";

import { useStore } from "@/app/store";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MenuToggle from "./MenuToggle";

export default function Navbar() {
  const theme = useStore((state) => state.theme);
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className={`w-full grid grid-cols-3 items-center px-[29px] py-[22px] transition-colors ${
        theme === "light"
          ? "text-near-black bg-white"
          : "text-white bg-near-black"
      }`}
    >
      <h2 className="font-bold text-[22px] tracking-[1.32px]">
        FREDERIK BARBRÉ
      </h2>
      <MenuToggle isActive={isActive} setIsActive={setIsActive} />
      <ThemeToggle />
    </header>
  );
}
