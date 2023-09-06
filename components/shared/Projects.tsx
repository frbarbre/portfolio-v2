"use client";

import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import Modal from "./Modal";
import StaticProjectCard from "./StaticProjectCard";
import { usePathname } from "next/navigation";
import { useStore } from "@/app/store";
import Link from "next/link";
import SquareButton from "./SquareButton";
import Magnetic from "./Magnetic";

export default function Projects({ projects }: { projects: Project[] }) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <h2
          className={`${
            theme === "light" ? "text-primary-light" : "text-primary-dark"
          } font-bold text-[20px] uppercase tracking-[1.2px] pl-[24px] pb-[30px] md:pl-[103px] md:pb-[50px]`}
        >
          {language === "en" ? "Featured Work" : "Udvalgte Projekter"}
        </h2>
      )}
      <div className="flex-col items-center hidden lg:flex justify-center px-[103px]">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              index={index}
              title={project.acf.title}
              setModal={setModal}
              type={project.acf.type}
              slug={project.acf.slug}
              key={index}
            />
          );
        })}
      </div>
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[45px] px-[24px] md:px-[103px]">
        {projects.map((project, index) => (
          <StaticProjectCard
            key={index}
            image={project.acf.images[0]}
            prefix={project.acf.prefix}
            slug={project.acf.slug}
            title={project.acf.title}
            year={project.acf.year}
            color={project.acf.color}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />

      {pathname === "/" && (
        <>
          <div className="hidden mt-[46px] mb-[100px] max-w-[254px] mx-auto lg:block">
            <Magnetic>
              <Link href={"/works"} className="w-full block">
                <SquareButton
                  enText="Show All"
                  daText="Se Alle"
                  variant="std"
                />
              </Link>
            </Magnetic>
          </div>

          <div className="lg:hidden mt-[49px] mb-[100px] max-w-[254px] mx-auto">
            <Link href={"/works"} className="w-full block">
              <SquareButton enText="Show All" daText="Se Alle" variant="std" />
            </Link>
          </div>
        </>
      )}
    </>
  );
}
