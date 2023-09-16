import WorksContainer from "@/components/shared/WorkContainer";
import { FilterSearchParams } from "@/types";
import { fetchProjects } from "@/utils/fetchProjects";
import { sortProjects } from "@/utils/sortProjects";

export default async function Archive({
  searchParams,
}: {
  searchParams: FilterSearchParams;
}) {
  const projects = await fetchProjects();
  const archivedProjects = projects.filter(
    (project) => !project.acf.isFeatured
  );
  sortProjects(archivedProjects);

  return (
    <div className="max-w-custom mx-auto">
      <WorksContainer
        isArchive
        projects={archivedProjects}
        searchParams={searchParams}
      />
    </div>
  );
}
