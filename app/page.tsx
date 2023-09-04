import { Project, Tools } from "@/types";
import { nanoid } from "nanoid";
import Image from "next/image";
import { Fragment } from "react";

export default async function Home() {
  const data = await fetch(
    "https://wp.frederikbarbre.dk/wp-json/wp/v2/posts?per_page=100",
    { cache: "no-store" }
  );
  const projects = (await data.json()) as Project[];

  projects.sort((a, b) => {
    if (a.acf.createdat < b.acf.createdat) {
      return 1;
    }
    if (a.acf.createdat > b.acf.createdat) {
      return -1;
    }
    return 0;
  });

  return (
    <main>
      Future Portfolio Dropping Soon...
      {projects.map((project) => (
        <Fragment key={nanoid()}>
          <div>{project.acf.title}</div>
          <Image
            src={`/screens/${project.acf.prefix}${project.acf.images[0]}`}
            alt={project.acf.title}
            width={500}
            height={500}
          />
          {project.acf.createdat}
          {project.acf.tools.map((tool) => (
            <>{tool === Tools.tailwind && <div>{tool}</div>}</>
          ))}
        </Fragment>
      ))}
    </main>
  );
}
