import { useStore } from '@/app/store';
import Image from 'next/image';
import { motion as m, AnimatePresence } from 'framer-motion';

interface Props {
  link: string;
  icon: string;
  name: string;
  size?: string;
  isMouseOver?: string;
}

export default function Icon({ link, icon, name, size, isMouseOver }: Props) {
  const theme = useStore((state) => state.theme);

  return (
    <a href={link} target="_blank">
      <Image
        src={icon}
        alt={name}
        width={100}
        height={100}
        className={`${
          size || 'w-[45px] md:w-[65px]'
        } aspect-square relative z-[-1]`}
      />
      <div
        className={`absolute inset-[12px] rounded-full border z-[-1] ${
          theme === 'light' ? 'border-black/20' : 'border-white/20'
        }`}
      />
      <AnimatePresence>
        {isMouseOver === name && (
          <m.div
            initial={{ scale: 0, x: '-50%' }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className={`absolute bottom-[-26px] rounded-[6px] px-[15px] py-[6px] text-center w-max translate-x-[-50%] left-[50%] flex items-center justify-center ${
              theme === 'light'
                ? 'bg-primary-light text-white'
                : 'bg-primary-dark text-near-black'
            }`}
          >
            <p className="font-bold text-[12px] tracking-[0.72px]">{name}</p>
          </m.div>
        )}
      </AnimatePresence>
    </a>
  );
}
