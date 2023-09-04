import { fetchProjects } from "@/utils/fetchProjects";

export default async function Work({ params }: { params: { slug: string } }) {
  
  const projects = await fetchProjects();
  
  const currentProject = projects.find(
    (project) => project.acf.slug === params.slug
  );

  return (
    <div>
      <h1>Work: {currentProject?.acf.title}</h1>
    </div>
  );
}
