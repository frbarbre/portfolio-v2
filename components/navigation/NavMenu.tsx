import { navLinks } from '@/constants';
import { motion as m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useStore } from '@/app/store';

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  theme: string;
}

export default function NavMenu({ isActive, setIsActive, theme }: Props) {
  const [isMouseOver, setIsMouseOver] = useState('');
  const activeLink = navLinks.find((link) => link.title.en === isMouseOver);
  const pathname = usePathname();
  const language = useStore((state) => state.language);

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <m.article
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className={`absolute top-[77px] left-0 right-0 bg-inherit border-b flex item-center justify-between px-[63px] md:px-[29px] md:pt-[75px] md:pb-[69px] py-[42px] ${
              theme === 'light' ? 'border-b-black/20' : 'border-b-white/20'
            }`}
          >
            <nav className="flex flex-wrap lg:max-w-[880px] flex-col md:flex-row md:gap-x-[35px]">
              {navLinks.map((link, index) => (
                <m.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    transition: { delay: index * 0.05 },
                  }}
                  transition={{ delay: index * 0.15 + 0.45 }}
                  key={link.title.en}
                >
                  <Link
                    href={`/${link.path}`}
                    onClick={() => setIsActive(false)}
                    onMouseEnter={() => setIsMouseOver(link.title.en)}
                    onMouseLeave={() => setIsMouseOver('')}
                  >
                    <m.h2
                      className={`${
                        isMouseOver !== ''
                          ? activeLink?.path === link.path
                            ? theme === 'light'
                              ? 'text-primary-light'
                              : 'text-primary-dark'
                            : activeLink?.path !== link.path
                            ? theme === 'light'
                              ? 'lg:blur-[6px] text-near-black'
                              : 'lg:blur-[6px] text-white'
                            : ''
                          : (pathname !== '/'
                              ? link.path !== '' && pathname.includes(link.path)
                              : pathname === '/' && link.path === '') &&
                            (theme === 'light'
                              ? 'text-primary-light'
                              : 'text-primary-dark')
                      } transition-all duration-[500ms] md:text-[88px] text-[42px] tracking-[2.52px] font-bold uppercase md:tracking-[5.8px]`}
                    >
                      {language === 'en' ? link.title.en : link.title.da}
                    </m.h2>
                  </Link>
                </m.div>
              ))}
            </nav>
            <div className="w-[440px] h-[302px] relative hidden lg:block">
              {isMouseOver !== '' && (
                <Image
                  src={activeLink?.image || ''}
                  alt={activeLink?.title.en || ''}
                  fill
                  className={`rounded-[10px] border-[2px] ${
                    theme === 'light' ? 'border-black/20' : 'border-white/20'
                  }`}
                />
              )}
            </div>
          </m.article>
        )}
      </AnimatePresence>
    </>
  );
}
