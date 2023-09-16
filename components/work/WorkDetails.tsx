"use client";

import { ProjectType } from "@/types";
import Icon from "../shared/Icon";
import { skills } from "@/constants";
import Magnetic from "../shared/Magnetic";
import { useState, Fragment } from "react";
import { useStore } from "@/app/store";

export default function WorkDetails({
  title,
  type,
  year,
  toolsArr,
}: {
  title: string;
  type: ProjectType;
  year: string;
  toolsArr: string[];
}) {
  const [isMouseOver, setIsMouseOver] = useState("");
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  return (
    <article className="flex flex-col-reverse md:flex-row justify-between gap-x-10 pb-[20px] md:pb-[67px]">
      <section>
        <h1 className="text-[32px] font-bold tracking-[1.92px] md:text-[58px] md:tracking-[3.48px] uppercase pb-[7px]">
          {title}
        </h1>
        <h2 className="text-[14px] font-semibold tracking-[0.84px] md:text-[24px] md:tracking-[1.44px] uppercase pb-[15px] md:pb-[18px]">
          {type === ProjectType.Development ? (
            language === "en" ? (
              "Development"
            ) : (
              "Udvikling"
            )
          ) : language === "en" ? (
            <>
              Design{" "}
              <span
                className={
                  theme === "light" ? "text-primary-light" : "text-primary-dark"
                }
              >
                &
              </span>{" "}
              Development
            </>
          ) : (
            <>
              Design{" "}
              <span
                className={
                  theme === "light" ? "text-primary-light" : "text-primary-dark"
                }
              >
                &
              </span>{" "}
              Udvikling
            </>
          )}
        </h2>
        {toolsArr.length !== 0 && (
          <ul className="flex items-center gap-[15px] flex-wrap">
            {toolsArr.map((tool) => {
              const currentTool = skills.find((skill) => skill.id === tool);
              if (!currentTool) return null;

              return (
                <li
                  key={currentTool.id}
                  onMouseEnter={() => setIsMouseOver(currentTool.title)}
                  onMouseLeave={() => setIsMouseOver("")}
                >
                  <Magnetic padding="p-0">
                    <Icon
                      padding
                      icon={currentTool.icon}
                      link={currentTool.link}
                      name={currentTool.title}
                      isMouseOver={isMouseOver}
                      size="w-[35px] md:w-[45px]"
                    />
                  </Magnetic>

                  <span className="lg:hidden relative block">
                    <Icon
                      padding
                      icon={currentTool.icon}
                      link={currentTool.link}
                      name={currentTool.title}
                      isMouseOver={isMouseOver}
                      size="w-[35px] md:w-[45px]"
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      <h3 className="text-[12px] font-bold tracking-[0.72px] md:text-[24px] md:tracking-[1.44px] md:pt-[24px]">
        {year}
      </h3>
    </article>
  );
}
