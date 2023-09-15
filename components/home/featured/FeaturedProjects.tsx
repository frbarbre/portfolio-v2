import Projects from "@/components/shared/Projects";
import { fetchProjects } from "@/utils/fetchProjects";
import { sortProjects } from "@/utils/sortProjects";

export default async function FeaturedProjects() {
  const projects = await fetchProjects();
  const FeaturedProjects = projects.filter((project) => project.acf.isFeatured); 
  sortProjects(FeaturedProjects);

  const newestProjects = [FeaturedProjects[0], FeaturedProjects[1], FeaturedProjects[2], FeaturedProjects[3]];

  return (
    <>
      <Projects projects={newestProjects} />
    </>
  );
}
