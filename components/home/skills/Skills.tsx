'use client';

import { useStore } from '@/app/store';
import { skillsText } from '@/constants';
import RoundButton from '../../shared/RoundButton';
import Link from 'next/link';
import SkillIcons from './SkillIcons';

export default function Skills() {
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  return (
    <section className="px-[24px] md:px-[103px] md:py-[100px] py-[50px] md:pb-[100px] flex items-center justify-between gap-16">
      <article>
        <p className="max-w-[733px] text-[18px] tracking-[1.08px]">
          <SkillsText language={language} theme={theme} />
        </p>
        <SkillIcons />
      </article>
      <Link href={'/about'} className="hidden md:block">
        <RoundButton enText="About Me" daText="Om Mig" />
      </Link>
    </section>
  );
}

export function SkillsText({
  theme,
  language,
}: {
  theme: string;
  language: string;
}) {
  const enSplit = skillsText.en.split('JavaScript');
  const daSplit = skillsText.da.split('JavaScript');

  const enBreak = enSplit[0].split('<br>');
  const daBreak = daSplit[0].split('<br>');

  return (
    <>
      {language === 'en' ? (
        <SkillsTextContent
          breakArr={enBreak}
          splitArr={enSplit}
          theme={theme}
        />
      ) : (
        <SkillsTextContent
          breakArr={daBreak}
          splitArr={daSplit}
          theme={theme}
        />
      )}
    </>
  );
}

export function SkillsTextContent({
  splitArr,
  breakArr,
  theme,
}: {
  splitArr: string[];
  breakArr: string[];
  theme: string;
}) {
  return (
    <>
      {breakArr[0]}
      <br />
      <br />
      {breakArr[1]}
      <span
        className={
          theme === 'light' ? 'text-primary-light' : 'text-primary-dark'
        }
      >
        JavaScript
      </span>
      {splitArr[1]}
    </>
  );
}
