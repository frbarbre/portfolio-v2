'use client';

import { useStore } from '@/app/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const theme = useStore((state) => state.theme);
  const router = useRouter();

  return (
    <Image
      src={theme === 'light' ? '/arrow-blue.svg' : '/arrow-dark.svg'}
      alt="back-button"
      width={55}
      height={30}
      onClick={() => router.back()}
      className="cursor-pointer w-[30px] md:w-[55px] py-[30px] md:py-[50px]"
    />
  );
}
