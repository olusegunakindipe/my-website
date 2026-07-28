"use client";
import { motion } from "framer-motion";
import Button from "../components/button/Button";
import { ArrowRight } from "../../../public/assets/icons/ArrowRight";
import Image from "next/image";

const Homepage = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-11.5rem)] items-center overflow-hidden mesh-gradient py-6 lg:py-8"
    >
      {/* Background Decorative Elements with 3D feel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] -left-[10%] h-[min(70vw,720px)] w-[min(70vw,720px)] rounded-full bg-cyan-600/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -right-[12%] -bottom-[20%] h-[min(75vw,820px)] w-[min(75vw,820px)] rounded-full bg-blue-600/10 blur-[150px]"
        />

        {/* 3D Floating Shapes */}
        <motion.div
          animate={{ y: [0, -40, 0], rotate: [0, 360, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-10 w-12 h-12 border-2 border-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm rotate-12"
        >
          <div className="w-4 h-4 bg-blue-500/40 rounded-full blur-sm" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 30, 0], rotate: [45, -45, 45] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 left-20 w-16 h-16 border border-white/5 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <div className="w-6 h-6 border border-blue-400/20" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-16 xl:max-w-[90rem] xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-5xl font-black leading-[0.9] tracking-tighter text-white sm:text-6xl lg:text-8xl xl:text-[7.5rem]"
          >
            AI <br />
            <span className="text-blue-600">Driven.</span> <br />
            Code <br />
            <span className="text-white/40">Refined.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-12 max-w-lg text-lg leading-relaxed text-white/70 lg:mx-0 lg:text-xl xl:text-2xl"
          >
            I architect high-performance digital solutions that blend
            AI-assisted engineering with human-centric design, shipping products
            that are fast, intelligent, and built to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <Button onClick={handleClick} size="lg" className="px-12 py-4">
              Start a Project{" "}
              <span className="ml-3">
                <ArrowRight />
              </span>
            </Button>
            <Button
              href="/#projects"
              variant="outline"
              size="lg"
              className="px-12 py-4"
            >
              View Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="perspective-1000 relative order-1 mx-auto w-full max-w-md pt-8 lg:order-2 lg:ml-auto lg:max-w-lg lg:pt-12 xl:max-w-xl"
        >
          {/* The Background Card (Shoulder down) */}
          <div className="glass-dark bg-glass-dark absolute inset-x-0 bottom-0 z-0 h-[80%] rounded-[3.5rem] border border-white/10 shadow-[0_50px_100px_rgba(59,130,246,0.15)] transition-all duration-700 group-hover:border-blue-500/30" />

          <motion.div
            whileHover={{
              scale: 1.03,
              translateY: -12,
              rotateY: 4,
              rotateX: -2,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="group relative z-10 cursor-pointer"
          >
            {/* The Image (Popping out) */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-b-[3.5rem]">
              <Image
                src="/assets/web-pic.webp"
                alt="Segun Akindipe"
                width={720}
                height={960}
                sizes="(max-width: 1024px) 28rem, (max-width: 1280px) 32rem, 36rem"
                quality={92}
                className="h-full w-full origin-top object-cover object-[center_12%] grayscale transition-all duration-1000 group-hover:scale-[1.04] group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b22] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating details that stick to the person */}
            <div className="absolute top-1/3 -right-4 h-px w-24 bg-blue-500/30 blur-sm transition-all duration-500 group-hover:bg-blue-500" />
          </motion.div>

          {/* 3D Secondary Glow */}
          <div className="absolute bottom-0 left-1/2 -z-10 h-1/2 w-[120%] -translate-x-1/2 animate-pulse rounded-full bg-blue-600/10 blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
