import BackButton from '@/components/work/BackButton';
import ImageControls from '@/components/work/ImageControls';
import ImageSlider from '@/components/work/ImageSlider';
import WorkDetails from '@/components/work/WorkDetails';
import { fetchProjects } from '@/utils/fetchProjects';

export default async function Work({ params }: { params: { slug: string } }) {
  const projects = await fetchProjects();
  const currentProject = projects.find(
    (project) => project.acf.slug === params.slug
  );
  if (!currentProject) return null;

  return (
    <div className="px-[24px] md:px-[103px]">
      <BackButton />
      <section className="max-w-[980px] mx-auto">
        <ImageSlider project={currentProject} />
        <ImageControls
          color={currentProject.acf.color}
          arrowColor={currentProject.acf.arrowcolor}
        />
        <WorkDetails
          title={currentProject.acf.title}
          toolsArr={currentProject.acf.tools}
          type={currentProject.acf.type}
          year={currentProject.acf.year}
        />
      </section>
    </div>
  );
}
