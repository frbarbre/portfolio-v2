interface Props {
  slug: string;
  title: string;
  year: string;
  image: string;
  prefix: string;
}

export default function StaticProjectCard({
  slug,
  title,
  year,
  image,
  prefix,
}: Props) {
  return (
    <div>
      <h2>ProjectCard</h2>
    </div>
  );
}
