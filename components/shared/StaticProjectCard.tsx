import Link from "@/components/shared/Link";
import { motion as m } from "framer-motion";

interface Props {
  slug: string;
  title: string;
  year: string;
  image: string;
  prefix: string;
  color: string;
  index: number;
}

export default function StaticProjectCard({
  slug,
  title,
  year,
  image,
  prefix,
  color,
  index,
}: Props) {
  return (
    <m.article
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05 + 0.45, duration: 0.25 }}
    >
      <Link routeName={title} href={`/${slug}`} className="w-full">
        <div className="w-full flex flex-col justify-center">
          <div
            style={{ backgroundColor: color }}
            className="py-[60px] px-[36px]"
          >
            <img
              src={`/screens/${prefix}${image}`}
              alt={title}
              width={600}
              height={600}
              className="mx-auto w-full max-w-[450px]"
            />
          </div>
          <div className="pt-[13px] flex justify-between items-center">
            <h3 className="text-[21px] font-bold uppercase tracking-[1.674px]">
              {title}
            </h3>
            <p className="text-[15.7px] font-semibold tracking-[1.256px]">
              {year}
            </p>
          </div>
        </div>
      </Link>
    </m.article>
  );
}
