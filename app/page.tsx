import { Project } from '@/types';
import Image from 'next/image';

export default async function Home() {
  const data = await fetch(
    'https://wp.frederikbarbre.dk/wp-json/wp/v2/posts?per_page=41',
    { cache: 'no-store' }
  );
  const projects = (await data.json()) as Project[];

  return (
    <main>
      Future Portfolio Dropping Soon...
      {projects.map((project) => (
        <>
          <div>{project.acf.title}</div>
          <Image
            src={`/screens/${project.acf.prefix}${project.acf.images[0]}`}
            alt={project.acf.title}
            width={500}
            height={500}
          />
        </>
      ))}
    </main>
  );
}
