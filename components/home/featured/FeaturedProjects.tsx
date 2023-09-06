import Projects from "@/components/shared/Projects";
import { fetchProjects } from "@/utils/fetchProjects";
import { sortProjects } from "@/utils/sortProjects";

export default async function FeaturedProjects() {
  const projects = await fetchProjects();
  const featuredProject = projects.filter((project) => project.acf.isFeatured);
  sortProjects(featuredProject);

  return (
    <>
      <Projects projects={featuredProject} />
    </>
  );
}
