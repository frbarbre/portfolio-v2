"use client";

import { useStore } from "@/app/store";
import Image from "next/image";
import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

interface Props {
  daText: string;
  enText: string;
  variant: "std" | "long" | "icon";
}

export default function SquareButton({ daText, enText, variant }: Props) {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const stdVariant = "h-[73px] max-w-[236px] tracking-[0.96px] text-[16px]";
  const longVariant = "h-[73px] tracking-[0.96px] text-[16px]";
  const iconVariant =
    "h-[46px] max-w-[130px] text-[12px] tracking-[0.72px] gap-[12px] md:tracking-[0.96px] md:text-[16px] md:h-[56px] md:max-w-[188px] md:gap-[15px]";

  return (
    <div
      className={`${
        theme === "light"
          ? "border-primary-light hover:text-white"
          : "border-primary-dark hover:text-near-black"
      } border-[3px] transition-colors flex items-center justify-center rounded-full uppercase font-semibold w-full relative overflow-hidden ${
        variant === "std"
          ? stdVariant
          : variant === "long"
          ? longVariant
          : iconVariant
      }`}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {variant === "icon" && (
        <Image
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
          className="w-[12px] h-[11px] md:w-[16px] md:h-[15px]"
        />
      )}
      <p>{language === "en" ? enText : daText}</p>

      <AnimatePresence>
        {isMouseOver && (
          <>
            <m.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              className={`absolute inset-[-3px] rounded-full z-[-1] ${
                theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark'
              }`}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
