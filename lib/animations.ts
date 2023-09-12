export const scaleAnimation = {
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

export const cursorAnimation = {
    initial: { scale: 0, x: '-50%', y: '-150%' },
    enter: {
      scale: 1,
      x: '-50%',
      y: '-150%',
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: '-50%',
      y: '-150%',
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };
