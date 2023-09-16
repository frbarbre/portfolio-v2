import Hero from "@/components/home/hero/Hero";
import FeaturedProjects from "@/components/home/featured/FeaturedProjects";
import Skills from "@/components/home/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-custom mx-auto">
        <Skills />
        <FeaturedProjects />
      </div>
    </>
  );
}
