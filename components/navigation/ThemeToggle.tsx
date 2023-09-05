import { useStore } from "@/app/store";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";

export default function ThemeToggle() {
  const [theme, setTheme] = useStore(
    (state) => [state.theme, state.setTheme],
    shallow
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="justify-self-end">
      <button onClick={handleTheme}>
        <div
          className={`w-[53px] h-[27px] border rounded-full relative flex items-center ${
            theme === "light" ? "border-black/20" : "border-white/20"
          }`}
        >
          <m.div
            animate={theme === "light" ? { x: 29 } : { x: 5 }}
            className={`w-[17px] h-[17px] translate-x-[5px] rounded-full absolute flex items-center justify-center  ${
              theme === "light" ? "bg-primary-light" : "bg-primary-dark"
            }`}
          >
            <Image
              src={theme === "light" ? "/sun.svg" : "/moon.svg"}
              alt="theme-icon"
              width={11}
              height={11}
            />
          </m.div>
        </div>
      </button>
    </div>
  );
}
