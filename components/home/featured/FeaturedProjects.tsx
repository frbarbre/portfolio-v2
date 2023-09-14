import Projects from "@/components/shared/Projects";
import { fetchProjects } from "@/utils/fetchProjects";
import { sortProjects } from "@/utils/sortProjects";

export default async function FeaturedProjects() {
  const projects = await fetchProjects();
  sortProjects(projects);

  const newestProjects = [projects[0], projects[1], projects[2], projects[3]];

  return (
    <>
      <Projects projects={newestProjects} />
    </>
  );
}
