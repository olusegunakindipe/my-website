"use client";
import { motion } from "framer-motion";
import Socials from "../components/social-icons/Socials";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden surface-gradient"
    >
      <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-blue-400 font-medium mb-4 uppercase tracking-[0.3em] text-xs">
              Full-Stack Leadership
            </h2>
            <h3 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
              System <br />
              <span className="text-blue-600">Architect.</span>
            </h3>
            <p className="text-white/85 text-xl leading-relaxed max-w-3xl mx-auto font-medium">
              Senior Full Stack Engineer delivering high-performance, scalable
              digital solutions across the UK, China, and Hong Kong.
            </p>
          </motion.div>

          {/* 3D Logic Core Visualization Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[500px] h-[400px] flex items-center justify-center group"
          >
            {/* The Background Core Glow */}
            <div className="absolute w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />

            {/* 3D Logic Core Visualization */}
            <div className="relative w-72 h-72 perspective-1000">
              {/* Inner Core */}
              <motion.div
                animate={{
                  rotateY: 360,
                  rotateX: [0, 10, -10, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-blue-500/20 rounded-full flex items-center justify-center p-8 backdrop-blur-3xl shadow-[0_0_50px_rgba(37,99,235,0.1)]"
              >
                <div className="w-full h-full border border-white/5 rounded-full animate-spin-slow opacity-30" />
              </motion.div>

              {/* Orbital Rings */}
              <motion.div
                animate={{ rotateZ: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 inset-y-12 border border-blue-400/10 rounded-[100%] border-dashed"
              />
              <motion.div
                animate={{ rotateZ: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 inset-x-12 border border-indigo-500/10 rounded-[100%] border-dashed"
              />

              {/* Floating Nodes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 20, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                />
              ))}

              {/* Center Logo/Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-500/30 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                  <div className="text-blue-400 font-black text-2xl tracking-tighter">
                    SA
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Specs Badge */}
            <div className="absolute -bottom-4 right-0 lg:right-10 p-6 glass-dark rounded-3xl border border-white/5 backdrop-blur-3xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                    System Architect
                  </span>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                    Full-Stack Expert
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl grid md:grid-cols-2 gap-12 text-left"
          >
            <div className="space-y-6 text-white/85 text-lg leading-relaxed">
              <p>
                Currently a{" "}
                <span className="text-white font-bold">
                  Senior Full Stack Engineer at Keystone Group
                </span>
                , I lead the technical evolution of global platforms. I
                specialize in architecting accessible, high-performance
                frontends that consistently hit{" "}
                <span className="text-blue-400">
                  &quot;Good&quot; Core Web Vitals
                </span>{" "}
                thresholds (LCP, CLS, INP) for tens of thousands of concurrent
                users.
              </p>
              <p>
                My background spans the full engineering lifecycle—from
                designing complex{" "}
                <span className="text-white">
                  Sanity CMS schemas with GraphQL/GROQ
                </span>
                to engineering automated CI/CD pipelines via{" "}
                <span className="text-white">GitHub Actions</span> for
                zero-downtime production deployments on GCP and Vercel.
              </p>
            </div>

            <div className="space-y-6 text-white/85 text-lg leading-relaxed">
              <p>
                I am a strong advocate for{" "}
                <span className="text-blue-400 font-bold">
                  AI-Assisted Development
                </span>
                , leveraging tools like Cursor and Copilot to sharpen code
                quality, accelerate feature delivery, and mentor engineering
                teams through high-standard code reviews.
              </p>
              <p>
                With a{" "}
                <span className="text-white">
                  First Class BSc in Computer Science
                </span>{" "}
                and an{" "}
                <span className="text-white">
                  MSc in Computer Technology from Xiamen University
                </span>
                , I bridge the gap between deep academic principles and modern,
                production-grade engineering excellence.
              </p>

              <div className="pt-6 flex flex-col items-start gap-4">
                <div className="flex gap-4">
                  <Socials />
                </div>
                <div className="text-white/60 text-[10px] uppercase font-black tracking-[0.4em]">
                  Based in the United Kingdom
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
