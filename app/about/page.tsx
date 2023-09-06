import AboutParagraph from "@/components/about/AboutParagraph";
import Heading from "@/components/shared/Heading";
import { aboutParagraphs } from "@/constants";
import { nanoid } from "nanoid";

export default function About() {
  return (
    <section className="max-w-custom mx-auto">
      <Heading daText="Om Mig" enText="About Me" />
      <article className="flex flex-col gap-[30px] lg:gap-[100px] pb-[100px]">
        {aboutParagraphs.map((paragraph) => (
          <AboutParagraph
            key={nanoid()}
            isReverse={paragraph.isReverse}
            daText={paragraph.da.text}
            enText={paragraph.en.text}
            daTitle={paragraph.da.title}
            enTitle={paragraph.en.title}
            image={paragraph.image}
          />
        ))}
      </article>
    </section>
  );
}
