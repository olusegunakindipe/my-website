import Image from "next/image";
import Button from "../components/button/Button";
import { ArrowRight } from "../../../public/assets/icons/ArrowRight";
import { detailItems, projects } from "../data";
import ProjectCard from "../components/project-card/ProjectCard";
import Content from "../components/content/Content";
import Detail from "../components/layout/footer/Detail";

const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-12">
      <div className="h-auto px-8 xl:px-0 mx-auto flex flex-col items-center justify-center text-black container max-w-7xl">
        <h1 className="text-2xl lg:text-4xl font-bold mb-8">
          Featured Projects
        </h1>
        {projects.map((project, index) => (
          <div key={index} className="w-full rounded-lg py-4 relative">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1280}
              height={500}
              className="h-[500px] object-cover rounded-xl"
              tabIndex={0}
            />

            <ProjectCard
              className="
                absolute 
                bottom-8 
                left-1/2 
                -translate-x-1/2 
                w-[90%] 
                md:w-full
                max-w-md 
                px-4
                md:left-4 
                md:translate-x-0 
                md:bottom-10
                "
              title={project.title}
              description={project.description}
            >
              <Button
                href={project.link}
                target="_blank"
                variant="secondary"
                className="inline-flex w-full md:w-auto mx-auto md:mx-0 justify-center items-center gap-4 mt-4"
              >
                <span>View Project</span> <ArrowRight />
              </Button>
            </ProjectCard>
          </div>
        ))}

        <div className="flex flex-col gap-4 lg:flex-row py-16 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <Content
              heading="My Process"
              description="Transform your website dreams into a reality in just a few simple steps"
            >
              <Button
                target="_blank"
                variant="secondary"
                className="inline-flex w-full md:w-auto mx-auto md:mx-0 justify-center items-center gap-4 mt-4"
              >
                <span>View Project</span> <ArrowRight />
              </Button>
            </Content>
          </div>
          <div className="flex flex-col lg:gap-8 gap-6 w-full lg:w-1/2  mt-4 lg:mt-0 ">
            {detailItems.map((item, index) => (
              <Detail
                key={index}
                icon={item.icon}
                heading={item.heading}
                description={item.description}
                className="border border-gray-300 p-4 lg:p-8 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
