import BackButton from "@/components/shared/BackButton";
import ImageControls from "@/components/work/ImageControls";
import ImageSlider from "@/components/work/ImageSlider";
import WorkDescription from "@/components/work/WorkDescription";
import WorkDetails from "@/components/work/WorkDetails";
import { fetchProjects } from "@/utils/fetchProjects";

export default async function Work({ params }: { params: { slug: string } }) {
  const projects = await fetchProjects();
  const currentProject = projects.find(
    (project) => project.acf.slug === params.slug
  );
  if (!currentProject) return null;

  return (
    <div className="px-sm md:px-md max-w-custom mx-auto">
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
        <WorkDescription
          isChallenge={currentProject.acf.ischallenge}
          challengeUrl={currentProject.acf.challengeurl}
          daText={currentProject.acf.description.da}
          enText={currentProject.acf.description.en}
          liveUrl={currentProject.acf.liveurl}
          githubUrl={currentProject.acf.giturl}
        />
      </section>
    </div>
  );
}
