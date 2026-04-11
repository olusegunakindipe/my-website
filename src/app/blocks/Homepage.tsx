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
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient"
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
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px]"
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

      <div className="container max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-medium mb-4 uppercase tracking-[0.3em] text-xs"
          >
            Senior Web Developer
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
          >
            Design <br />
            <span className="text-blue-600">Driven.</span> <br />
            Code <br />
            <span className="text-white/40">Refined.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            I architect high-performance digital solutions that bridge the gap
            between complex engineering and human-centric design.
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto lg:ml-auto w-full max-w-sm order-1 lg:order-2 perspective-1000 pt-20"
        >
          {/* The Background Card (Shoulder down) */}
          <div className="absolute inset-x-0 bottom-0 h-[80%] rounded-[3.5rem] border border-white/10 bg-glass-dark shadow-[0_50px_100px_rgba(59,130,246,0.15)] glass-dark z-0 transition-all duration-700 group-hover:border-blue-500/30" />

          <motion.div
            whileHover={{
              scale: 1.08,
              translateY: -20,
              rotateY: 8,
              rotateX: -5,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative z-10 group cursor-pointer"
          >
            {/* The Image (Popping out) */}
            <div className="relative aspect-[3/4] rounded-b-[3.5rem] overflow-hidden">
              <Image
                src="/assets/web-pic.webp"
                alt="Segun Akindipe"
                width={500}
                height={667}
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating details that stick to the person */}
            <div className="absolute top-1/3 -right-4 w-24 h-px bg-blue-500/30 blur-sm group-hover:bg-blue-500 transition-all duration-500" />
          </motion.div>

          {/* 3D Secondary Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-1/2 bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
