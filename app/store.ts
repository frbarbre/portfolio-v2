'use client';

import { createWithEqualityFn } from 'zustand/traditional';

let language: string | null;
let theme: string | null;

if (typeof window !== 'undefined') {
  language = localStorage.getItem('houseDecider');
  theme = localStorage.getItem('userChoice');
}

interface Store {
  language: string;
  setLanguage: (language: string) => void;

  theme: string;
  setTheme: (theme: string) => void;
}

export const useStore = createWithEqualityFn<Store>()(
  (set) => ({
    language: language || 'en',
    setLanguage: (language) => set(() => ({ language: language })),

    theme: theme || 'dark',
    setTheme: (theme) => set(() => ({ theme: theme })),
  }),
  Object.is
);
