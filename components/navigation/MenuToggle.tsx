import { useStore } from "@/app/store";
import { motion as m } from "framer-motion";

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export default function MenuToggle({ isActive, setIsActive }: Props) {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);

  return (
    <button
      className="md:justify-self-center flex items-center gap-[9px] cursor-pointer font-bold tracking-[1.08px] text-[18px] uppercase w-[90px]"
      onClick={() => setIsActive(!isActive)}
    >
      <strong className="flex flex-col gap-[10px]">
        <m.span
          animate={isActive ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className={`w-[30px] h-[3px] ${
            theme === "light" ? "bg-primary-light" : "bg-primary-dark"
          }`}
        ></m.span>
        <m.span
          animate={isActive ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className={`w-[30px] h-[3px] ${
            theme === "light" ? "bg-primary-light" : "bg-primary-dark"
          }`}
        ></m.span>
      </strong>
      {isActive ? (language === "en" ? "Close" : "Luk") : "Menu"}
    </button>
  );
}
