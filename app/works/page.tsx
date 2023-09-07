import WorksContainer from "@/components/works/WorkContainer";
import { fetchProjects } from "@/utils/fetchProjects";
import { sortProjects } from "@/utils/sortProjects";

export default async function Works() {
  const projects = await fetchProjects();
  sortProjects(projects);

  return (
    <section className="max-w-custom mx-auto">
      <WorksContainer projects={projects} />
    </section>
  );
}
