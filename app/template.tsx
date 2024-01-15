"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/animations";
import { useRouteStore, useStore } from "./store";

export default function Template({ children }: { children: React.ReactNode }) {
  const motion = useStore((state) => state.motion);
  const theme = useStore((state) => state.theme);
  const route = useRouteStore((state) => state.route);

  useEffect(() => {
    if (motion === "true") {
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
            : `w-[100svw] h-[100svh] font-bold uppercase tracking-[2.25px] z-[100] fixed top-0 left-0 flex items-center justify-center text-[56px] ${
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
