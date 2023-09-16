"use client";

import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import { Fragment, useState } from "react";
import Modal from "./Modal";
import StaticProjectCard from "./StaticProjectCard";
import { usePathname } from "next/navigation";
import { useStore } from "@/app/store";
import Link from "next/link";
import SquareButton from "./SquareButton";
import Magnetic from "./Magnetic";
import { motion as m } from "framer-motion";

export default function Projects({ projects }: { projects: Project[] }) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const pathname = usePathname();
  const [projectsLoaded, setProjectsLoaded] = useState(12);
  const motion = useStore((state) => state.motion);

  return (
    <>
      {pathname === "/" && (
        <h2
          className={`${
            theme === "light" ? "text-primary-light" : "text-primary-dark"
          } font-bold text-[26px] uppercase tracking-[1.56px] pl-[24px] pb-[30px] md:pl-[103px] md:pb-[50px]`}
        >
          {language === "en" ? "Newest Work" : "Nyeste Projekter"}
        </h2>
      )}
      <div
        className={`flex-col items-center hidden justify-center px-md ${
          motion === "true" ? "lg:flex" : "hidden"
        }`}
      >
        {projects.map((project, index) => {
          return (
            <Fragment key={index}>
              {index + 1 <= projectsLoaded && (
                <ProjectCard
                  index={index}
                  delay={index < 10 ? index : index - projectsLoaded + 5}
                  title={project.acf.title}
                  setModal={setModal}
                  type={project.acf.type}
                  slug={project.acf.slug}
                />
              )}
            </Fragment>
          );
        })}
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          pathname !== "/" && "lg:grid-cols-3"
        } gap-[30px] md:gap-[45px] px-sm md:px-md ${
          motion === "true" && "lg:hidden"
        }`}
      >
        {projects.map((project, index) => (
          <Fragment key={index}>
            {index + 1 <= projectsLoaded && (
              <StaticProjectCard
                index={index < 12 ? index : index - projectsLoaded + 5}
                image={project.acf.images[0]}
                prefix={project.acf.prefix}
                slug={project.acf.slug}
                title={project.acf.title}
                year={project.acf.year}
                color={project.acf.color}
              />
            )}
          </Fragment>
        ))}
      </div>
      {projects.length > projectsLoaded && (
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, delay: 11 * 0.05 + 0.45 }}
          className="mt-[30px] md:mt-[50px] w-full flex justify-center cursor-pointer"
          onClick={() => setProjectsLoaded((prev) => prev + 12)}
        >
          <div className="max-w-[236px] w-full lg:hidden">
            <SquareButton
              daText="Indlæs Flere"
              enText="Load More"
              variant="std"
            />
          </div>
          <div className="max-w-[236px] w-full hidden lg:block">
            <Magnetic>
              <SquareButton
                daText="Indlæs Flere"
                enText="Load More"
                variant="std"
              />
            </Magnetic>
          </div>
        </m.div>
      )}
      {pathname === "/works" && (
        <Link
          href={"/works/archive"}
          className="mt-[30px] md:mt-[50px] w-full flex justify-center cursor-pointer max-w-[236px] mx-auto"
        >
          <span className="w-full lg:hidden">
            <SquareButton
              daText="Gå til arkiv"
              enText="Go to archive"
              variant="std"
            />
          </span>

          <Magnetic width="w-full">
            <SquareButton
              daText="Gå til arkiv"
              enText="Go to archive"
              variant="std"
            />
          </Magnetic>
        </Link>
      )}
      <Modal modal={modal} projects={projects} />

      {pathname === "/" && (
        <div className="mt-[46px] mb-[100px] max-w-[254px] mx-auto">
          <Magnetic>
            <Link href={"/works"} className="w-full block">
              <SquareButton enText="Show All" daText="Se Alle" variant="std" />
            </Link>
          </Magnetic>

          <span className="lg:hidden mt-[49px] mb-[100px] max-w-[254px] mx-auto">
            <Link href={"/works"} className="w-full block">
              <SquareButton enText="Show All" daText="Se Alle" variant="std" />
            </Link>
          </span>
        </div>
      )}
    </>
  );
}
