import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { Project } from '@/types';
import { useStore } from '@/app/store';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({
  modal,
  projects,
}: {
  modal: { active: boolean; index: number };
  projects: Project[];
}) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const theme = useStore((state) => state.theme);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });
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
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        className="h-[320px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center z-10"
      >
        <div
          style={{ top: index * -100 + '%' }}
          className="h-full w-full absolute transtion-transform duration-[500ms] ease-modal"
        >
          {projects.map((project, index) => {
            const { images, prefix, color } = project.acf;
            return (
              <div
                className="h-full w-full flex items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={`/screens/${prefix}${images[0]}`}
                  width={300}
                  height={0}
                  alt="image"
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className={`w-[80px] h-[80px] rounded-full ${
          theme === 'light' ? 'bg-primary-light' : 'bg-primary-dark'
        } text-white absolute z-[30] flex items-center justify-center text-[14px] font-regular pointer-events-none`}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={`${
          theme === 'light' ? 'text-white' : 'text-near-black'
        } w-[80px] h-[80px] rounded-full bg-transparent uppercase absolute z-[30] flex items-center justify-center text-[14px] font-medium pointer-events-none`}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      >
        View
      </motion.div>
    </>
  );
}
