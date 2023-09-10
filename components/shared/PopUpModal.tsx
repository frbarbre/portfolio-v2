import { useStore } from '@/app/store';

export default function PopUpModal({
  children,
  setIsOpen,
}: {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const theme = useStore((state) => state.theme);

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed top-0 left-0 w-full h-full bg-black/50 z-[1000] flex justify-center items-center"
    >
      <article
        className={`${
          theme === 'light' ? 'border-black/20 bg-white' : 'border-white/20 bg-near-black'
        } border-[2px] rounded-[5px] md:rounded-[10px] p-[24px]`}
      >
        {children}
      </article>
    </div>
  );
}
