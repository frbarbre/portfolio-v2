import Heading from "@/components/shared/Heading";
import WorksContainer from "@/components/works/WorkContainer";
import { fetchProjects } from "@/utils/fetchProjects";
import { sortProjects } from "@/utils/sortProjects";

export default async function Works() {
  const projects = await fetchProjects();
  sortProjects(projects);

  return (
    <section className="max-w-custom mx-auto">
      <Heading daText="Projekter" enText="Works" />
      <WorksContainer projects={projects} />
    </section>
  );
}
