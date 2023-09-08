'use client';

import { useStore } from '@/app/store';
import { Arrowcolor } from '@/types';
import Image from 'next/image';

export default function ImageControls({
  color,
  arrowColor,
}: {
  color: string;
  arrowColor: Arrowcolor;
}) {
  const theme = useStore((state) => state.theme);

  return (
    <div
      className={`mt-[17px] md:mt-[50px] h-[57px] md:h-[79px] ${
        theme === 'light' ? 'border-black/20' : 'border-white/20'
      } border-[2px] md:border-[3px] rounded-[5px] md:rounded-[10px]  mb-[30px] md:mb-[50px]`}
    >
      <div
        className={`flex justify-between w-full px-[20px] md:px-[37px] h-full rounded-[4px] md:rounded-[8px]`}
        style={{ backgroundColor: color }}
      >
        <Image
          src={
            arrowColor === Arrowcolor.Black
              ? '/arrow-black.svg'
              : '/arrow-white.svg'
          }
          alt="arrow"
          width={55}
          height={30}
          className="w-[30px] md:w-[55px]"
        />
        <Image
          src={
            arrowColor === Arrowcolor.Black
              ? '/arrow-black.svg'
              : '/arrow-white.svg'
          }
          alt="arrow"
          width={55}
          height={30}
          className="rotate-180 w-[30px] md:w-[55px]"
        />
      </div>
    </div>
  );
}
