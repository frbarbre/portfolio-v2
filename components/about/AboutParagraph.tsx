'use client';

import { useStore } from '@/app/store';
import Image, { StaticImageData } from 'next/image';
import { Fragment } from 'react';

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

  const paragraphSplitEN = enText.split('<br>');
  const paragraphSplitDA = daText.split('<br>');

  return (
    <section
      className={`flex flex-col gap-[30px] lg:gap-[114px] ${
        isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } justify-between px-[24px] md:px-[103px] items-center`}
    >
      <article className="flex-1">
        {enTitle !== '' && (
          <h2
            className={`${
              theme === 'light' ? 'text-primary-light' : 'text-primary-dark'
            } uppercase text-[14px] tracking-[0.84px] font-bold md:text-[26px] md:tracking-[1.56px] pb-[10px] md:pb-[16px]`}
          >
            {language === 'en' ? enTitle : daTitle}
          </h2>
        )}
        <p className="text-[14px] font-medium tracking-[0.84px] md:text-[18px] md:tracking-[1.08px]">
          {language === 'en'
            ? paragraphSplitEN.map((paragraph, index) => (
                <Fragment key={paragraph}>
                  {paragraph}
                  {index < paragraphSplitEN.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </Fragment>
              ))
            : paragraphSplitDA.map((paragraph, index) => (
                <Fragment key={paragraph}>
                  {paragraph}
                  {index < paragraphSplitDA.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </Fragment>
              ))}
        </p>
      </article>
      <Image
        src={image}
        alt="Picture of Frederik Barbre"
        width={1200}
        height={1200}
        placeholder='blur'
        className={`lg:flex-1 rounded-[5px] md:rounded-[10px] w-full min-h-[366px] object-about object-cover ${
          theme === 'light' ? 'border-black/20' : 'border-white/20'
        } border-[2px]`}
      />
    </section>
  );
}
