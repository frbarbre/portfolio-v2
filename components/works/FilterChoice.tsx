import { useStore } from '@/app/store';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

export default function FilterChoice({
  id,
  daText,
  enText,
  filters,
  handleAdd,
  isRadio,
}: {
  id: string;
  daText: string;
  enText: string;
  filters: string[];
  handleAdd: (filter: string) => void;
  isRadio: boolean;
}) {
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <article
      className="flex gap-2 items-center group cursor-pointer"
      onClick={() => handleAdd(id)}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div
        className={`w-[20px] h-[20px] ${
          theme === 'light' ? 'border-primary-light' : 'border-primary-dark'
        } border-[3px] ${
          isRadio ? 'rounded-full p-[4px]' : 'rounded-[2.5px] p-[4px]'
        } flex items-center justify-center`}
      >
        <AnimatePresence key={id}>
          {filters.includes(id) && (
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', duration: 0.1 }}
              className={`${
                theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark'
              } ${
                isRadio ? 'rounded-full aspect-square' : 'rounded-[1px]'
              } w-full h-full transition-opacity group-hover:opacity-80`}
            />
          )}
        </AnimatePresence>
      </div>
      <p
        key={nanoid()}
        className={`font-bold uppercase text-[12px] tracking-[0.72px] md:text-[16px] md:tracking-[0.96px] w-max`}
      >
        {language === 'en' ? enText : daText}
      </p>
    </article>
  );
}
