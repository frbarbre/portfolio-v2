import Image from "next/image";
import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  year: string;
  image: string;
  prefix: string;
  color: string;
}

export default function StaticProjectCard({
  slug,
  title,
  year,
  image,
  prefix,
  color,
}: Props) {
  return (
    <Link href={`/works/${slug}`}>
      <article className="w-full flex flex-col justify-center">
        <div style={{ backgroundColor: color }} className="py-[60px] px-[36px]">
          <Image
            src={`/screens/${prefix}${image}`}
            alt={title}
            width={600}
            height={600}
            className="mx-auto w-full max-w-[450px]"
          />
        </div>
        <div className="pt-[13px] flex justify-between">
          <h2 className="text-[21px] font-bold uppercase tracking-[1.674px]">{title}</h2>
          <p className="text-[15.7px] font-semibold tracking-[1.256px]">{year}</p>
        </div>
      </article>
    </Link>
  );
}
