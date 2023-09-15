import { useStore } from '@/app/store';
import Image from 'next/image';
import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

export default function FilterTag({
  name,
  handleRemove,
}: {
  name: string;
  handleRemove: (filter: string) => void;
}) {
  const theme = useStore((state) => state.theme);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const language = useStore((state) => state.language);

  return (
    <m.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={`${
        theme === 'light'
          ? 'border-primary-light hover:text-white'
          : 'border-primary-dark hover:text-near-black'
      } border-[3px] rounded-full px-[23px] py-[10px] flex items-center gap-[13px] transition-colors cursor-pointer relative overflow-hidden`}
      onClick={() => handleRemove(name)}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <p className="uppercase font-bold text-[12px] tracking-[0.72px]">
        {name === 'design&development' && language === 'da'
          ? 'design & udvikling'
          : name === 'design&development' && language === 'en'
          ? 'design & development'
          : name === 'tailwindcss'
          ? 'tailwind css'
          : name === 'framermotion'
          ? 'framer motion'
          : name}
      </p>
      <Image
        src={
          theme === 'light'
            ? isMouseOver
              ? '/cross-dark.svg'
              : '/cross-light.svg'
            : isMouseOver
            ? '/cross-light.svg'
            : '/cross-dark.svg'
        }
        alt="close icon"
        width={8}
        height={8}
      />

      <AnimatePresence>
        {isMouseOver && (
          <m.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            className={`absolute inset-[-3px] rounded-full z-[-1] ${
              theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark'
            }`}
          />
        )}
      </AnimatePresence>
    </m.div>
  );
}
