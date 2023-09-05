import { useStore } from '@/app/store';
import { motion as m, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Props {
  enText: string;
  daText: string;
  variant?: 'lg' | 'sm';
}

export default function RoundButton({ enText, daText, variant = 'lg' }: Props) {
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className={`${
        variant === 'lg'
          ? 'w-[173px] text-[18px] tracking-[1.08px]'
          : 'w-[87px] text-[12px] tracking-[0.72px]'
      } aspect-square rounded-full border-[3px] ${
        theme === 'light'
          ? 'border-primary-light hover:text-white'
          : 'border-primary-dark hover:text-near-black'
      } transition-colors flex items-center justify-center uppercase  font-bold  cursor-pointer relative overflow-hidden`}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <p>{language === 'en' ? enText : daText}</p>

      <AnimatePresence>
        {isMouseOver && (
          <>
            <m.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              className={`absolute inset-[-3px] rounded-full z-[-1] ${
                theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark'
              }`}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
