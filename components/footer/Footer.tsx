import { useStore } from '@/app/store';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const theme = useStore((state) => state.theme);

  return (
    <footer
      className={`px-[24px] md:px-[103px] flex justify-between py-[26px] border-t ${
        theme === 'light' ? 'border-t-black/50' : 'border-t-white/50'
      }`}
    >
      <LanguageSwitcher />
      <p
        className={`text-[16px] font-medium tracking-[0.96px] ${
          theme === 'light' ? 'text-black/50' : 'text-white/50'
        }`}
      >
        © Frederik Barbrè, 2023
      </p>
    </footer>
  );
}
