import { useRef, useState } from 'react';
import { motion as m } from 'framer-motion';
import { useStore } from '@/app/store';

export default function Magnetic({
  children,
  padding,
}: {
  children: React.ReactNode;
  padding?: string;
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const motion = useStore((state) => state.motion);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (motion === 'true') {
      const { clientX, clientY } = e;
      // @ts-ignore
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <m.div
      className={`relative ${!padding && 'p-[12px]'} w-full`}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </m.div>
  );
}
