import { useStore } from "@/app/store";
import { socials } from "@/constants";
import Image from "next/image";
import Magnetic from "../shared/Magnetic";
import Icon from "../shared/Icon";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SquareButton from "../shared/SquareButton";
import RoundButton from "../shared/RoundButton";

export default function CTA() {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const [isMouseOver, setIsMouseOver] = useState("");
  const pathname = usePathname();

  return (
    <div
      className={`${
        theme === "light" ? "border-t-black/50" : "border-t-white/50"
      } border-t `}
    >
      <section className="max-w-custom mx-auto">
        <h4
          className={`${
            theme === "light" ? "text-primary-light" : "text-primary-dark"
          } font-bold text-[26px] uppercase tracking-[1.56px] pl-[24px] pt-[30px] pb-[30px] md:pl-[103px] md:pb-[66px] md:pt-[50px]`}
        >
          {language === "en" ? "Socials" : "Sociale Medier"}
        </h4>
        <article
          className={`px-sm md:px-md lg:px-lg flex gap-[20px] flex-col md:flex-row md:items-center justify-between md:mb-[66px] ${
            pathname !== "/contact" ? "mb-[50px]" : "mb-[30px]"
          }`}
        >
          <div className="flex md:items-center flex-col md:flex-row md:gap-[32px] gap-[12px]">
            <img
              src={"/profilepic.png"}
              alt="Frederik Barbre Picture"
              width={102}
              height={102}
              className={`w-[50px] md:w-[102px] aspect-square rounded-full ${
                theme === "light" ? "border-black/20" : "border-white/20"
              } border-[1px]`}
            />
            <section>
              <h5 className="text-[22px] font-bold tracking-[1.32px] uppercase md:text-[48px] md:tracking-[2.88px]">
                {language === "en"
                  ? "Check out my Socials"
                  : "Tjek mine profiler ud"}
              </h5>
              <ul className="flex translate-x-[-12px]">
                {socials.map((social) => (
                  <li
                    onMouseEnter={() => setIsMouseOver(social.title)}
                    onMouseLeave={() => setIsMouseOver("")}
                    key={social.icon}
                  >
                    <Magnetic>
                      <Icon
                        icon={social.icon}
                        name={social.title}
                        link={social.link}
                        isMouseOver={isMouseOver}
                      />
                    </Magnetic>

                    <span className="lg:hidden p-[12px] relative block">
                      <Icon
                        icon={social.icon}
                        name={social.title}
                        link={social.link}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {pathname !== "/contact" && (
            <>
              <p
                className={`${
                  theme === "light" ? "text-primary-light" : "text-primary-dark"
                } font-bold text-[18px] uppercase tracking-[1.08px] md:hidden`}
              >
                {language === "en" ? "Or" : "Eller"}
              </p>

              <Link
                href={"/contact"}
                className="md:hidden mx-auto max-w-[254px] w-full"
              >
                <SquareButton
                  daText="Kontakt Mig"
                  enText="Contact Me"
                  variant="std"
                />
              </Link>

              <Link href={"/contact"} className="hidden md:block lg:hidden">
                <RoundButton
                  daText="Kontakt Mig"
                  enText="Contact Me"
                  variant="lg"
                />
              </Link>

              <Link href={"/contact"}>
                <Magnetic padding="p-0">
                  <RoundButton
                    daText="Kontakt Mig"
                    enText="Contact Me"
                    variant="lg"
                  />
                </Magnetic>
              </Link>
            </>
          )}
        </article>
      </section>
    </div>
  );
}
