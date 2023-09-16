"use client";

import { useStore } from "@/app/store";
import { skillsText } from "@/constants";
import RoundButton from "../../shared/RoundButton";
import Link from "next/link";
import SkillIcons from "./SkillIcons";
import Magnetic from "@/components/shared/Magnetic";

export default function Skills() {
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  return (
    <article className="px-sm md:px-md md:py-[100px] py-[50px] md:pb-[100px] md:flex items-center justify-between gap-16">
      <div>
        <p className="max-w-[733px] text-[18px] tracking-[1.08px] text-center md:text-left whitespace-pre-line">
          <SkillsText language={language} theme={theme} />
        </p>
        <SkillIcons />
      </div>

      <Magnetic>
        <Link href={"/about"} className="hidden md:block">
          <RoundButton enText="About Me" daText="Om Mig" />
        </Link>
      </Magnetic>

      <span className="lg:hidden">
        <Link href={"/about"} className="hidden md:block">
          <RoundButton enText="About Me" daText="Om Mig" />
        </Link>
      </span>
    </article>
  );
}

export function SkillsText({
  theme,
  language,
}: {
  theme: string;
  language: string;
}) {
  const enSplit = skillsText.en.split("JavaScript");
  const daSplit = skillsText.da.split("JavaScript");

  return (
    <>
      {language === "en" ? (
        <SkillsTextContent splitArr={enSplit} theme={theme} />
      ) : (
        <SkillsTextContent splitArr={daSplit} theme={theme} />
      )}
    </>
  );
}

export function SkillsTextContent({
  splitArr,
  theme,
}: {
  splitArr: string[];
  theme: string;
}) {
  return (
    <>
      {splitArr[0]}
      <span
        className={
          theme === "light" ? "text-primary-light" : "text-primary-dark"
        }
      >
        JavaScript
      </span>
      {splitArr[1]}
    </>
  );
}
