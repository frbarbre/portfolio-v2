'use client';

import { useStore } from '@/app/store';

export default function Heading({
  enText,
  daText,
  isFlex,
}: {
  enText: string;
  daText: string;
  isFlex?: boolean;
}) {
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  return (
    <h2
      className={`${
        theme === 'light' ? 'text-primary-light' : 'text-primary-dark'
      } text-[28px] font-bold tracking-[1.68px] uppercase md:text-[62px] md:tracking-[3.72px] ${
        !isFlex && 'pt-[50px] pb-[30px] pl-[24px] md:py-[100px] md:pl-[103px]'
      } `}
    >
      {language === 'en' ? enText : daText}
    </h2>
  );
}
