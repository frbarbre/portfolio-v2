"use client";

import { createWithEqualityFn } from "zustand/traditional";

let languageStorage: string | null;
let themeStorage: string | null;

if (typeof window !== "undefined") {
  languageStorage = localStorage.getItem("language");
  themeStorage = localStorage.getItem("theme");
}


interface Store {
  language: string;
  setLanguage: (language: string) => void;

  theme: string;
  setTheme: (theme: string) => void;
}

export const useStore = createWithEqualityFn<Store>()(
  (set) => ({
    language: languageStorage || "en",
    setLanguage: (language) => set(() => ({ language: language })),

    theme: "dark",
    setTheme: (theme) => set(() => ({ theme: theme })),
  }),
  Object.is
);
