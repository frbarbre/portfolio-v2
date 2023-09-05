import { Project } from "@/types";

export async function fetchProjects() {
  const data = await fetch(
    "https://wp.frederikbarbre.dk/wp-json/wp/v2/posts?per_page=100&catagories=5",
    { cache: "no-store" }
  );
  const projects = (await data.json()) as Project[];
  
  return projects;
}
