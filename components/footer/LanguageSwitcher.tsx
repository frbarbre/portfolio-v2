import { useStore } from '@/app/store';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useStore(
    (state) => [state.language, state.setLanguage],
    shallow
  );
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    if (localStorage.getItem('language') === 'en') {
      setLanguage('en');
    } else {
      setLanguage('da');
    }
  }, []);

  function handleLanguage(language: 'en' | 'da') {
    setLanguage(language);
    localStorage.setItem('language', language === 'en' ? 'da' : 'en');
  }

  return (
    <section className="font-bold text-[18px] tracking-[1.08px] cursor-pointer">
      <LanguageSwitch
        handleLanguage={handleLanguage}
        lang="en"
        language={language}
        theme={theme}
      />
      {" "}
      <LanguageSwitch
        handleLanguage={handleLanguage}
        lang="da"
        language={language}
        theme={theme}
      />
    </section>
  );
}

export function LanguageSwitch({
  lang,
  handleLanguage,
  theme,
  language,
}: {
  lang: 'en' | 'da';
  handleLanguage: (language: 'en' | 'da') => void;
  theme: string;
  language: string;
}) {
  return (
    <span
      onClick={() => handleLanguage(lang)}
      className={`${
        language === lang
          ? theme === 'light'
            ? 'text-primary-light'
            : 'text-primary-dark'
          : theme === 'light'
          ? 'text-black/50'
          : 'text-white/50'
      } transition-colors uppercase`}
    >
      {lang}
    </span>
  );
}
