'use client';

import { Project } from '@/types';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import Modal from './Modal';
import StaticProjectCard from './StaticProjectCard';

export default function Projects({ projects }: { projects: Project[] }) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
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
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <StaticProjectCard
            key={index}
            image={project.acf.images[0]}
            prefix={project.acf.prefix}
            slug={project.acf.slug}
            title={project.acf.title}
            year={project.acf.year}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </>
  );
}
