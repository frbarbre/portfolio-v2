import { motion as m, AnimatePresence } from "framer-motion";

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  theme: string;
}

export default function NavMenu({ isActive, setIsActive, theme }: Props) {
  return (
    <>
      <AnimatePresence>
        {isActive && (
          <m.nav
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1]}}
            className={`absolute top-[77px] left-0 right-0 h-20 bg-inherit border-b ${
              theme === "light" ? "border-b-black/20" : "border-b-white/20"
            }`}
          >
            Nav
          </m.nav>
        )}
      </AnimatePresence>
    </>
  );
}
