"use client";

import { useStore } from "@/app/store";
import Image from "next/image";
import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

interface Props {
  daText: string;
  enText: string;
  variant: "std" | "long" | "icon" | "reload";
}

export default function SquareButton({ daText, enText, variant }: Props) {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const stdVariant = "h-[73px] max-w-[236px] tracking-[0.96px] text-[16px]";
  const longVariant = "h-[59px] tracking-[0.96px] text-[16px]";
  const iconVariant =
    "h-[46px] max-w-[130px] text-[12px] tracking-[0.72px] gap-[12px] md:tracking-[0.96px] md:text-[16px] md:h-[56px] md:max-w-[188px] md:gap-[15px]";
  const reloadVariant = "h-[38px] min-w-[114px] text-[12px] tracking-[0.72px]";

  return (
    <span
      className={`${
        theme === "light"
          ? "border-primary-light lg:hover:text-white"
          : "border-primary-dark lg:hover:text-near-black"
      } border-[3px] transition-colors m-auto z-[1] flex items-center justify-center rounded-full uppercase font-semibold w-full relative overflow-hidden ${
        variant === "std"
          ? stdVariant
          : variant === "long"
          ? longVariant
          : variant === "icon"
          ? iconVariant
          : reloadVariant
      }`}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {variant === "icon" && (
        <>
          <img
            src={
              theme === "light"
                ? isMouseOver
                  ? "/filter-dark.svg"
                  : "/filter-light.svg"
                : isMouseOver
                ? "/filter-light.svg"
                : "/filter-dark.svg"
            }
            alt="filter icon"
            width={16}
            height={16}
            className="w-[12px] h-[11px] md:w-[16px] md:h-[15px] hidden lg:block z-20"
          />
          <img
            src={theme === "light" ? "/filter-light.svg" : "/filter-dark.svg"}
            alt="filter icon"
            width={16}
            height={16}
            className="w-[12px] h-[11px] md:w-[16px] md:h-[15px] lg:hidden"
          />
        </>
      )}
      <span className="z-[2] block relative">
        {language === "en" ? enText : daText}
      </span>

      <AnimatePresence>
        {isMouseOver && (
          <>
            <m.strong
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              className={`absolute hidden lg:block inset-[-3px] rounded-full z-0 ${
                theme === "light" ? "bg-primary-light" : "bg-primary-dark"
              }`}
            />
          </>
        )}
      </AnimatePresence>
    </span>
  );
}
