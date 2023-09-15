import WorksContainer from "@/components/works/WorkContainer";
import { fetchProjects } from "@/utils/fetchProjects";
import { sortProjects } from "@/utils/sortProjects";

export default async function Works() {
  const projects = await fetchProjects();
  const featuredProjects = projects.filter((project) => project.acf.isFeatured);
  sortProjects(featuredProjects);

  return (
    <section className="max-w-custom mx-auto">
      <WorksContainer projects={featuredProjects} />
    </section>
  );
}
