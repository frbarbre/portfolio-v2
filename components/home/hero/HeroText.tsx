import { useStore } from "@/app/store";

export default function HeroText({
  reference,
  isSecondText,
}: {
  reference: any;
  isSecondText?: boolean;
}) {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);

  return (
    <span
      className={`m-0 block text-white uppercase lg:text-[140px] font-bold pr-[30px] tracking-[4.8px] md:tracking-[8.4px] md:text-[80px] text-[60px] ${
        isSecondText && "absolute left-[100%] top-0"
      }`}
      ref={reference}
    >
      <Paragraph text="frederik barbre" theme={theme} />
      <Paragraph text="developer" theme={theme} language={language} />
      <Paragraph text="frederik barbre" theme={theme} />
      <Paragraph text="developer" theme={theme} language={language} />
    </span>
  );
}

export function Paragraph({
  text,
  language,
  theme,
}: {
  text: string;
  language?: string;
  theme: string;
}) {
  return (
    <>
      {text === "developer"
        ? language === "en"
          ? "frontend developer"
          : "frontend udvikler"
        : text}{" "}
      <span
        className={`${
          theme === "light" ? "text-primary-light" : "text-primary-dark"
        } transition-colors`}
      >
        -
      </span>{" "}
    </>
  );
}
