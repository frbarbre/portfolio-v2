import { useStore } from '@/app/store';
import { socials } from '@/constants';
import Image from 'next/image';
import Magnetic from '../shared/Magnetic';
import Icon from '../shared/Icon';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SquareButton from '../shared/SquareButton';
import RoundButton from '../shared/RoundButton';

export default function CTA() {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const [isMouseOver, setIsMouseOver] = useState('');
  const pathname = usePathname();

  return (
    <section
      className={`${
        theme === 'light' ? 'border-t-black/50' : 'border-t-white/50'
      } border-t`}
    >
      <div className="max-w-custom mx-auto">
        <h2
          className={`${
            theme === 'light' ? 'text-primary-light' : 'text-primary-dark'
          } font-bold text-[20px] uppercase tracking-[1.2px] pl-[24px] pt-[30px] pb-[20px] md:pl-[103px] md:pb-[66px] md:pt-[50px]`}
        >
          {language === 'en' ? 'Socials' : 'Sociale Medier'}
        </h2>
        <article
          className={`px-[24px] md:px-[103px] lg:px-[147px] flex gap-[20px] flex-col md:flex-row md:items-center justify-between md:mb-[66px] ${
            pathname !== '/contact' ? 'mb-[50px]' : 'mb-[30px]'
          }`}
        >
          <section className="flex md:items-center flex-col md:flex-row md:gap-[32px] gap-[12px]">
            <Image
              src={'/profilepic.png'}
              alt="Frederik Barbre Picture"
              width={102}
              height={102}
              className={`w-[50px] md:w-[102px] aspect-square rounded-full ${
                theme === 'light' ? 'border-black/20' : 'border-white/20'
              } border-[1px]`}
            />
            <article>
              <h2 className="text-[22px] font-bold tracking-[1.32px] uppercase md:text-[48px] md:tracking-[2.88px]">
                {language === 'en'
                  ? 'Check out my Socials'
                  : 'Tjek mine profiler ud'}
              </h2>
              <article className="flex translate-x-[-12px]">
                {socials.map((social) => (
                  <div
                    onMouseEnter={() => setIsMouseOver(social.title)}
                    onMouseLeave={() => setIsMouseOver('')}
                    key={social.icon}
                  >
                    <div className="hidden lg:block">
                      <Magnetic>
                        <Icon
                          icon={social.icon}
                          name={social.title}
                          link={social.link}
                          isMouseOver={isMouseOver}
                        />
                      </Magnetic>
                    </div>
                    <div className="lg:hidden p-[12px] relative">
                      <Icon
                        icon={social.icon}
                        name={social.title}
                        link={social.link}
                      />
                    </div>
                  </div>
                ))}
              </article>
            </article>
          </section>
          {pathname !== '/contact' && (
            <section className="flex flex-col gap-[30px]">
              <p
                className={`${
                  theme === 'light' ? 'text-primary-light' : 'text-primary-dark'
                } font-bold text-[18px] uppercase tracking-[1.08px] md:hidden`}
              >
                {language === 'en' ? 'Or' : 'Eller'}
              </p>

              <div className="md:hidden mx-auto max-w-[254px] w-full">
                <Link href={'/contact'}>
                  <SquareButton
                    daText="Kontakt Mig"
                    enText="Contact Me"
                    variant="std"
                  />
                </Link>
              </div>

              <div className="hidden md:block lg:hidden">
                <Link href={'/contact'}>
                  <RoundButton
                    daText="Kontakt Mig"
                    enText="Contact Me"
                    variant="lg"
                  />
                </Link>
              </div>

              <div className="hidden lg:block translate-x-[12px]">
                <Link href={'/contact'}>
                  <Magnetic>
                    <RoundButton
                      daText="Kontakt Mig"
                      enText="Contact Me"
                      variant="lg"
                    />
                  </Magnetic>
                </Link>
              </div>
            </section>
          )}
        </article>
      </div>
    </section>
  );
}
