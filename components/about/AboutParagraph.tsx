"use client";

import { useStore } from "@/app/store";
import Image, { StaticImageData } from "next/image";

export default function AboutParagraph({
  isReverse,
  daText,
  enText,
  daTitle,
  enTitle,
  image,
}: {
  isReverse: boolean;
  daText: string;
  enText: string;
  daTitle: string;
  enTitle: string;
  image: StaticImageData;
}) {
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  return (
    <section
      className={`flex flex-col gap-[30px] lg:gap-[114px] lg:grid lg:grid-cols-2 justify-between px-sm md:px-md items-center`}
    >
      <article className={`${isReverse && "order-2"}`}>
        {enTitle !== "" && (
          <h2
            className={`${
              theme === "light" ? "text-primary-light" : "text-primary-dark"
            } uppercase text-[14px] tracking-[0.84px] font-bold md:text-[26px] md:tracking-[1.56px] pb-[10px] md:pb-[16px]`}
          >
            {language === "en" ? enTitle : daTitle}
          </h2>
        )}
        <p className="text-[14px] font-medium whitespace-pre-line tracking-[0.84px] md:text-[18px] md:tracking-[1.08px]">
          {language === "en" ? enText : daText}
        </p>
      </article>
      <Image
        src={image}
        alt="Picture of Frederik Barbre"
        width={1200}
        height={1200}
        placeholder="blur"
        className={`rounded-[5px] md:rounded-[10px] w-full min-h-[366px] object-about object-cover ${
          theme === "light" ? "border-black/20" : "border-white/20"
        } border-[2px]`}
      />
    </section>
  );
}
