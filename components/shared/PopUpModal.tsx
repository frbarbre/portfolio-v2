import { useStore } from '@/app/store';
import { motion as m, AnimatePresence } from 'framer-motion';

export default function PopUpModal({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const theme = useStore((state) => state.theme);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[1000] flex justify-center items-center"
        >
          <m.article
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', duration: 0.5}}
            className={`${
              theme === 'light'
                ? 'border-black/20 bg-white'
                : 'border-white/20 bg-near-black'
            } border-[2px] rounded-[5px] md:rounded-[10px] p-[24px] z-[-2]`}
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </m.div>
          </m.article>
        </m.div>
      )}
    </AnimatePresence>
  );
}
