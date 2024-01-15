"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/animations";
import { useRouteStore, useStore } from "./store";
import useScreenSize from "@/hooks/useScreenSize";

export default function Template({ children }: { children: React.ReactNode }) {
  const motion = useStore((state) => state.motion);
  const theme = useStore((state) => state.theme);
  const route = useRouteStore((state) => state.route);
  const screenSize = useScreenSize();

  const isMobile = screenSize.width < 815;

  useEffect(() => {
    if (motion === "true" && !isMobile) {
      animatePageIn();
    }
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className={`${
          motion !== "true"
            ? "hidden"
            : `hidden w-[100svw] h-[100svh] font-bold uppercase tracking-[2.25px] z-[100] fixed top-0 left-0 lg:flex items-center justify-center text-[56px] ${
                theme === "light"
                  ? "bg-primary-light text-white"
                  : "bg-primary-dark text-near-black"
              }`
        }`}
      >
        {route}
      </div>
      {children}
    </div>
  );
}
