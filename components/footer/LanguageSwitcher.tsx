import { useStore } from "@/app/store";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useStore(
    (state) => [state.language, state.setLanguage],
    shallow
  );
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    if (localStorage.getItem("language") === null) {
      if (navigator.language.includes("da")) {
        setLanguage("da");
      } else {
        setLanguage("en");
      }
      return;
    }
    if (localStorage.getItem("language") === "da") {
      setLanguage("da");
    } else {
      setLanguage("en");
    }
  }, []);

  function handleLanguage(language: "en" | "da") {
    setLanguage(language);
    localStorage.setItem("language", language === "en" ? "en" : "da");
  }

  return (
    <article className="font-bold text-[18px] tracking-[1.08px] cursor-pointer">
      <LanguageSwitch
        handleLanguage={handleLanguage}
        lang="en"
        language={language}
        theme={theme}
      />{" "}
      <LanguageSwitch
        handleLanguage={handleLanguage}
        lang="da"
        language={language}
        theme={theme}
      />
    </article>
  );
}

export function LanguageSwitch({
  lang,
  handleLanguage,
  theme,
  language,
}: {
  lang: "en" | "da";
  handleLanguage: (language: "en" | "da") => void;
  theme: string;
  language: string;
}) {
  return (
    <button
      onClick={() => handleLanguage(lang)}
      className={`${
        language === lang
          ? theme === "light"
            ? "text-primary-light"
            : "text-primary-dark"
          : theme === "light"
          ? "text-black/50 hover:text-primary-light/50"
          : "text-white/50 hover:text-primary-dark/50"
      } transition-colors tracking-[0.96px] uppercase`}
    >
      {lang}
    </button>
  );
}
