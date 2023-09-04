import { Project } from "@/types";

export default async function Work({ params }: { params: { slug: string } }) {
  const data = await fetch(
    "https://wp.frederikbarbre.dk/wp-json/wp/v2/posts?per_page=41",
    { cache: "no-store" }
  );
  const projects = (await data.json()) as Project[];
  const currentProject = projects.find(
    (project) => project.acf.slug === params.slug
  );

  return (
    <div>
      <h1>Work: {currentProject?.acf.title}</h1>
    </div>
  );
}
