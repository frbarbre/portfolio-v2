"use client";

import { Project } from "@/types";
import Projects from "../shared/Projects";

export default function WorksContainer({ projects }: { projects: Project[] }) {
  const filteredProjects = projects;

  return (
    <div>
      <Projects projects={filteredProjects} />
    </div>
  );
}
