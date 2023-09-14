import { useStore } from '@/app/store';
import { motion as m, AnimatePresence } from 'framer-motion';

export default function PopUpModal({
  children,
  isOpen,
  setIsOpen,
  isDissmissable,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isDissmissable?: boolean;
}) {
  const theme = useStore((state) => state.theme);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50] cursor-pointer flex justify-center items-center"
        >
          <m.article
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className={`${
              theme === 'light'
                ? 'border-black/20 bg-white'
                : 'border-white/20 bg-near-black'
            } border-[2px] rounded-[5px] md:rounded-[10px] z-[60] relative w-max mx-[24px]`}
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </m.div>
          </m.article>
          <div
            className={`absolute inset-0 ${isDissmissable && "lg:z-[65]"}`}
            onClick={() => setIsOpen(false)}
          ></div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
