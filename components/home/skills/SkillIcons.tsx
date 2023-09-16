import { skills } from "@/constants";
import Magnetic from "../../shared/Magnetic";
import Icon from "../../shared/Icon";
import { useState } from "react";

export default function SkillIcons() {
  const featuredSkills = skills.filter((skill) => skill.isFeatured);

  const [isMouseOver, setIsMouseOver] = useState("");

  return (
    <ul className="flex flex-wrap justify-center md:justify-start md:translate-x-[-12px] pt-[18px]">
      {featuredSkills.map((skill) => (
        <li
          onMouseEnter={() => setIsMouseOver(skill.title)}
          onMouseLeave={() => setIsMouseOver("")}
          key={skill.id}
        >
          <Magnetic>
            <Icon
              icon={skill.icon}
              name={skill.title}
              link={skill.link}
              isMouseOver={isMouseOver}
            />
          </Magnetic>

          <span className="lg:hidden p-[12px] relative block">
            <Icon icon={skill.icon} name={skill.title} link={skill.link} />
          </span>
        </li>
      ))}
    </ul>
  );
}
