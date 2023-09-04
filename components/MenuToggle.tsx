import { useStore } from "@/app/store";
import { motion as m } from "framer-motion";

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export default function MenuToggle({ isActive, setIsActive }: Props) {
  const theme = useStore((state) => state.theme);

  return (
    <div
      className="justify-self-center flex items-center gap-[9px] cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex flex-col gap-[10px]">
        <m.span
          animate={isActive ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          className={`w-[30px] h-[3px] ${
            theme === "light" ? "bg-primary-light" : "bg-primary-dark"
          }`}
        ></m.span>
        <m.span
          animate={isActive ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          className={`w-[30px] h-[3px] ${
            theme === "light" ? "bg-primary-light" : "bg-primary-dark"
          }`}
        ></m.span>
      </div>
      <h3 className="font-bold tracking-[1.08px] text-[18px] uppercase w-[60px]">
        {isActive ? "Close" : "Menu"}
      </h3>
    </div>
  );
}
