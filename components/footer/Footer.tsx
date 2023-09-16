import { useStore } from '@/app/store';
import LanguageSwitcher from './LanguageSwitcher';
import MotionToggle from './MotionToggle';

export default function Footer() {
  const theme = useStore((state) => state.theme);

  return (
    <footer
      className={`border-t ${
        theme === 'light' ? 'border-t-black/50' : 'border-t-white/50'
      }`}
    >
      <section className="grid grid-cols-2 lg:grid-cols-3 max-w-custom mx-auto px-sm md:px-md py-[26px]">
        <LanguageSwitcher />
        <h6
          className={`text-[12px] font-medium tracking-[0.72px] uppercase self-center justify-self-end lg:justify-self-center ${
            theme === 'light' ? 'text-black/50' : 'text-white/50'
          }`}
        >
          © Frederik Barbrè, 2023
        </h6>
        <MotionToggle />
      </section>
    </footer>
  );
}
