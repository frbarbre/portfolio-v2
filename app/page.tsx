import Hero from '@/components/home/hero/Hero';
import FeaturedProjects from '@/components/home/featured/FeaturedProjects';
import Skills from '@/components/home/skills/Skills';

export default function Home() {
  return (
    <section>
      <Hero />
      <Skills />
      <FeaturedProjects />
    </section>
  );
}
