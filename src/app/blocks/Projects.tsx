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
      className="py-20 relative overflow-hidden mesh-gradient"
    >
      {/* Background Decorative Elements with 3D feel */}
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
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-400 font-medium mb-4 uppercase tracking-widest text-sm">
              Portfolio
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h3>
          </motion.div>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={1280}
                  height={720}
                  className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
              </div>

              <div className="w-full lg:w-2/5 text-left">
                <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  {project.title}
                </h4>
                <p className="text-white/85 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <Button
                  href={project.link}
                  variant="outline"
                  size="lg"
                  className="group"
                >
                  View Case Study{" "}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    <ArrowRight />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <h2 className="text-blue-400 font-medium mb-4 uppercase tracking-widest text-sm">
                Workflow
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                My Process
              </h3>
              <p className="text-white/85 text-lg leading-relaxed mb-10">
                A structured, transparent approach to building high-quality
                digital products that scale.
              </p>
              <Button variant="primary" size="lg" onClick={handleClick}>
                Let&apos;s Talk{" "}
                <span className="ml-2">
                  <ArrowRight />
                </span>
              </Button>
            </motion.div>

            <div className="w-full lg:w-2/3 grid gap-6">
              {processItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-dark p-8 rounded-3xl border border-white/5 flex gap-8 items-center group hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-400 scale-125">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 leading-tight uppercase tracking-tight">
                      {item.heading}
                    </h4>
                    <p className="text-white/70 leading-relaxed text-sm">
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
