"use client";

import { useStore } from "@/app/store";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";

export default function ProjectCard({
  index,
  title,
  type,
  setModal,
  slug,
  delay,
}: {
  index: number;
  title: string;
  type: string;
  slug: string;
  delay: number;
  setModal: (modal: { active: boolean; index: number }) => void;
}) {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);

  return (
    <m.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: delay * 0.05 + 0.45, duration: 0.25 }}
      className="w-full"
    >
      <Link href={`/works/${slug}`} className="w-full">
        <div
          onMouseEnter={() => {
            setModal({ active: true, index });
          }}
          onMouseLeave={() => {
            setModal({ active: false, index });
          }}
          className={`flex w-full justify-between items-center px-[44px] py-[50px] border-t-[1px] ${
            theme === "light"
              ? "border-t-black/20 last:border-b-black/20"
              : "border-t-white/20 last:border-b-white/20"
          }  cursor-pointer transition-[200ms] last:border-b group`}
        >
          <h2
            className={`group-hover:translate-x-[-10px] font-bold text-[62px] tracking-[3.72px] uppercase transition-all duration-[400ms] group-hover:opacity-50`}
          >
            {title}
          </h2>
          <p className="group-hover:translate-x-[10px] uppercase text-[16px] font-bold tracking-[0.96px] transition-all duration-[400ms] group-hover:opacity-50">
            {type === "designdevelopment" && language === "da"
              ? "design & udvikling"
              : type === "development" && language === "da"
              ? "udvikling"
              : type === "designdevelopment" && language === "en"
              ? "design & development"
              : type}
          </p>
        </div>
      </Link>
    </m.div>
  );
}
