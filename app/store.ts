'use client';

import { createWithEqualityFn } from 'zustand/traditional';
let motionStorage: string | null;

if (typeof window !== 'undefined') {
  const languageStorage = localStorage.getItem('language');
  const themeStorage = localStorage.getItem('theme');
  motionStorage = localStorage.getItem('motion');
}

interface Store {
  language: string;
  setLanguage: (language: string) => void;

  theme: string;
  setTheme: (theme: string) => void;

  motion: string;
  setMotion: (motion: string) => void;
}

export const useStore = createWithEqualityFn<Store>()(
  (set) => ({
    language: 'en',
    setLanguage: (language) => set(() => ({ language: language })),

    theme: "null",
    setTheme: (theme) => set(() => ({ theme: theme })),

    motion: motionStorage as string,
    setMotion: (motion) => set(() => ({ motion: motion })),
  }),
  Object.is
);
