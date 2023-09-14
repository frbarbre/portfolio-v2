import { useStore } from '@/app/store';
import { motion as m } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ScrollCursor({
  active,
  animationVariant,
  enText,
  daText,
  zIndex,
}: {
  active: boolean;
  animationVariant: any;
  enText: string;
  daText: string;
  zIndex?: string;
}) {
  const theme = useStore((state) => state.theme);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const language = useStore((state) => state.language);
  const motion = useStore((state) => state.motion);

  useEffect(() => {
    if (motion === 'true') {
      //Move cursor
      let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
        duration: 0.5,
        ease: 'power3',
      });
      let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
        duration: 0.5,
        ease: 'power3',
      });
      //Move cursor label
      let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
        duration: 0.45,
        ease: 'power3',
      });
      let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
        duration: 0.45,
        ease: 'power3',
      });

      window.addEventListener('mousemove', (e) => {
        const { pageX, pageY } = e;
        xMoveCursor(pageX);
        yMoveCursor(pageY);
        xMoveCursorLabel(pageX);
        yMoveCursorLabel(pageY);
      });
    }
  }, []);

  return (
    <div className="hidden lg:block">
      <m.div
        ref={cursor}
        className={`w-[80px] h-[80px] rounded-full ${
          theme === 'light'
            ? 'bg-primary-light text-white'
            : 'bg-primary-dark text-near-black'
        } transition-colors uppercase absolute ${
          zIndex || 'z-30'
        } flex items-center justify-center text-[14px] font-medium pointer-events-none`}
        variants={animationVariant}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      />
      <m.div
        ref={cursorLabel}
        className={`${
          theme === 'light' ? 'text-white' : 'text-near-black'
        } w-[80px] h-[80px] rounded-full bg-transparent uppercase absolute ${
          zIndex || 'z-30'
        } flex items-center justify-center text-[14px] tracking-[0.84px] font-medium pointer-events-none`}
        variants={animationVariant}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      >
        {language === 'en' ? enText : daText}
      </m.div>
    </div>
  );
}
