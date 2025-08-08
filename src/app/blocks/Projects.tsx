"use client";

import Image from "next/image";
import Button from "../components/button/Button";
import { ArrowRight } from "../../../public/assets/icons/ArrowRight";
import { processItems, projects } from "../data";
import ProjectCard from "../components/project-card/ProjectCard";
import Content from "../components/content/Content";
import Detail from "../components/layout/footer/Detail";
import { useEffect, useState } from "react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(
    Array(projects.length).fill(false),
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projects.forEach((_, idx) => {
      const el = document.getElementById(`project-${idx}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="projects" className="lg:pt-20 pt-12 pb-12 scroll-mt-24">
      <div className="h-auto px-8 xl:px-0 mx-auto flex flex-col items-center justify-center text-black container max-w-7xl">
        <h1 className="font-marcellus text-2xl lg:text-4xl font-bold mb-8 opacity-0 animate-slide-in-left">
          Featured Projects
        </h1>

        {projects.map((project, index) => {
          const isVisible = visibleProjects[index];
          return (
            <div
              id={`project-${index}`}
              key={index}
              className="w-full rounded-lg py-4 relative"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1280}
                height={500}
                className={`
                  h-[500px] object-cover rounded-xl opacity-0
                  ${isVisible ? "animate-slide-in-up delay-[200ms]" : ""}
                `}
                tabIndex={0}
              />

              <ProjectCard
                className={`
                  absolute bottom-8 left-1/2 -translate-x-1/2 
                  w-[90%] md:w-full max-w-md px-4
                  md:left-4 md:translate-x-0 md:bottom-10
                  opacity-0 ${
                    isVisible ? "animate-slide-in-mid delay-[1200ms]" : ""
                  }
                `}
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
          );
        })}

        {/* Process Section */}
        <div className="flex flex-col gap-4 lg:flex-row py-16 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <Content
              heading="My Process"
              description="Turning your website vision into a high-performing digital experience — with a clear, structured approach from start to finish."
            >
              <Button
                target="_blank"
                variant="secondary"
                className="inline-flex w-full md:w-auto mx-auto md:mx-0 justify-center items-center gap-4 mt-8 lg:mt-12"
                onClick={handleClick}
              >
                <span>Get in touch</span> <ArrowRight />
              </Button>
            </Content>
          </div>
          <div className="flex flex-col lg:gap-8 gap-6 w-full lg:w-1/2 mt-4 lg:mt-0">
            {processItems.map((item, index) => (
              <Detail
                key={index}
                icon={item.icon}
                heading={item.heading}
                description={item.description}
                className="border border-gray-300 p-4 lg:p-8 rounded-lg"
                animate="animate-slide-in-up"
                delay={index * 0.5}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
