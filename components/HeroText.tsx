import { useStore } from "@/app/store";

export default function HeroText({
  reference,
  isSecondText,
}: {
  reference: any;
  isSecondText?: boolean;
}) {
  const theme = useStore((state) => state.theme);

  return (
    <p
      className={`m-0 text-white md:text-[140px] font-bold pr-[50px] tracking-[4.8px] md:tracking-[8.4px] text-[80px] ${
        isSecondText && "absolute left-[100%] top-0"
      }`}
      ref={reference}
    >
      FREDERIK BARBRÉ{" "}
      <span
        className={`${
          theme === "light" ? "text-primary-light" : "text-primary-dark"
        } transition-colors`}
      >
        -
      </span>{" "}
      FRONTEND DEVELOPER{" "}
      <span
        className={`${
          theme === "light" ? "text-primary-light" : "text-primary-dark"
        } transition-colors`}
      >
        -
      </span>{" "}
    </p>
  );
}
