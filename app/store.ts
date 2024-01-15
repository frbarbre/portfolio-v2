"use client";

import { createWithEqualityFn } from "zustand/traditional";
import { persist } from "zustand/middleware";

let motionStorage: string | null;

if (typeof window !== "undefined") {
  const languageStorage = localStorage.getItem("language");
  const themeStorage = localStorage.getItem("theme");
  motionStorage = localStorage.getItem("motion");
}

interface Store {
  language: string;
  setLanguage: (language: string) => void;

  theme: "dark" | "light" | "null";
  setTheme: (theme: "dark" | "light" | "null") => void;

  motion: string;
  setMotion: (motion: string) => void;
}

export const useStore = createWithEqualityFn<Store>()(
  (set) => ({
    language: "en",
    setLanguage: (language) => set(() => ({ language: language })),

    theme: "light",
    setTheme: (theme) => set(() => ({ theme: theme })),

    motion: motionStorage as string,
    setMotion: (motion) => set(() => ({ motion: motion })),
  }),
  Object.is
);

interface RouteStore {
  route: string;
  setRoute: (route: string) => void;
}

export const useRouteStore = createWithEqualityFn<RouteStore>()(
  persist(
    (set): RouteStore => ({
      route: "home",
      setRoute: (route) => set(() => ({ route: route })),
    }),
    {
      name: "route-storage",
    }
  ),
  Object.is
);
