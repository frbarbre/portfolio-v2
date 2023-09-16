import { useStore } from '@/app/store';
import { motion as m, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Props {
  enText: string;
  daText: string;
  variant?: 'lg' | 'sm';
  fill?: boolean;
}

export default function RoundButton({
  enText,
  daText,
  variant = 'lg',
  fill,
}: Props) {
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <span
      className={`${
        variant === 'lg'
          ? 'w-[173px] text-[18px] tracking-[1.08px]'
          : 'w-[87px] text-[12px] tracking-[0.72px]'
      } aspect-square rounded-full border-[3px] ${
        theme === 'light'
          ? 'border-primary-light lg:hover:text-white'
          : 'border-primary-dark lg:hover:text-near-black'
      } transition-colors flex items-center justify-center uppercase  font-bold  cursor-pointer relative overflow-hidden ${
        fill ? theme === 'light' ? 'bg-white lg:hover:bg-transparent' : 'bg-near-black lg:hover:bg-transparent'
      : "" }`}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {language === 'en' ? enText : daText}

      <AnimatePresence>
        {isMouseOver && (
          <>
            <m.strong
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              className={`absolute inset-[-3px] hidden lg:block rounded-full z-[-1] ${
                theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark'
              }`}
            />
          </>
        )}
      </AnimatePresence>
    </span>
  );
}
