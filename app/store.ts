"use client";

import { createWithEqualityFn } from "zustand/traditional";

if (typeof window !== "undefined") {
  const languageStorage = localStorage.getItem("language");
  const themeStorage = localStorage.getItem("theme");
}

interface Store {
  language: string;
  setLanguage: (language: string) => void;

  theme: string;
  setTheme: (theme: string) => void;
}

export const useStore = createWithEqualityFn<Store>()(
  (set) => ({
    language: "en",
    setLanguage: (language) => set(() => ({ language: language })),

    theme: "light",
    setTheme: (theme) => set(() => ({ theme: theme })),
  }),
  Object.is
);
