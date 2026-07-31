"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../components/button/Button";
import { ArrowRight } from "../../../public/assets/icons/ArrowRight";
import { processItems, projects } from "../data";

const Projects = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 relative overflow-hidden mesh-gradient"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16 lg:mb-24"
        >
          <h2 className="text-blue-400 font-medium mb-4 uppercase tracking-widest text-sm">
            Portfolio
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            Featured Projects
          </h3>
          <p className="text-white/70 text-lg leading-relaxed">
            Selected product work across SaaS, Web3, and full-stack engineering.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0f14] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        priority={index === 0}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                  </a>
                </div>

                <div
                  className={`lg:col-span-5 w-full flex flex-col items-start text-left ${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <span className="text-blue-400/90 font-mono text-sm tracking-widest mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-8 w-full max-w-none lg:max-w-md">
                    {project.description}
                  </p>
                  <Button
                    href={project.link}
                    variant="outline"
                    size="lg"
                    className="group"
                  >
                    Visit site{" "}
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      <ArrowRight />
                    </span>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-28 lg:mt-36 pt-20 lg:pt-28 border-t border-white/10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 lg:sticky lg:top-28"
            >
              <h2 className="text-blue-400 font-medium mb-4 uppercase tracking-widest text-sm">
                Workflow
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                My Process
              </h3>
              <p className="text-white/75 text-lg leading-relaxed mb-10">
                A structured, AI-augmented approach to building high-quality
                digital products that ship faster and scale with confidence.
              </p>
              <Button variant="primary" size="lg" onClick={handleClick}>
                Let&apos;s Talk{" "}
                <span className="ml-2">
                  <ArrowRight />
                </span>
              </Button>
            </motion.div>

            <div className="w-full lg:w-2/3 grid gap-5">
              {processItems.map((item, index) => (
                <motion.div
                  key={item.heading}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-dark p-7 lg:p-8 rounded-3xl border border-white/5 flex gap-6 lg:gap-8 items-start group hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-blue-400 scale-125">{item.icon}</div>
                  </div>
                  <div className="min-w-0 pt-1">
                    <h4 className="text-lg lg:text-xl font-bold text-white mb-2 leading-tight uppercase tracking-tight">
                      {item.heading}
                    </h4>
                    <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
