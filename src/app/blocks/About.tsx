"use client";
import Image from "next/image";
import Socials from "../components/social-icons/Socials";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate once and stop observing
        }
      },
      {
        root: null,
        rootMargin: "0px",
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-[#17152f] scroll-mt-24">
      <div className="h-auto w-full gap-32 lg:gap-48 flex flex-col-reverse lg:flex-row max-w-7xl lg:pt-40 pt-20 pb-12 lg:pb-20 mx-auto lg:justify-between">
        <div className="lg:w-1/2 w-full">
          <div
            ref={imgRef}
            className="relative mx-auto w-96 h-96 md:w-[550px] md:h-[550px] rounded-full bg-gray-200 overflow-visible"
          >
            <div className="absolute inset-0 rounded-full bg-white z-0"></div>
            <Image
              src="/assets/web-pic.png"
              alt="Profile picture"
              width={600}
              height={600}
              className={`absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 md:w-[600px] md:h-[600px] object-center rounded-full shadow-2xl z-10 border-white transition-opacity duration-1000 ${
                isVisible ? "delay-500 animate-slide-in-mid" : "opacity-0"
              }`}
              priority={true}
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full px-4 lg:px-0 font-marcellus text-white">
          <h6 className="uppercase text-xl mb-4 font-bold animate-slide-in-right delay-100">
            About - Olusegun Akindipe
          </h6>
          <h3 className="text-3xl opacity-0 leading-10 mb-8 animate-slide-in-right delay-700">
            {`Ready to impress your audience and grow your business? Let’s create something unforgettable.`}
          </h3>
          <p className="leading-8  animate-slide-in-right delay-[1500]">
            {`I’m a full-stack software developer with 6+ years of experience building robust, scalable, and user-centric web applications. I’ve worked across companies in China, Hong Kong, and now the UK, where I’m a Software Engineer at Keystone. My expertise spans React, Next.js, Angular, TypeScript, Node.js, PHP, AWS, and GCP. At Keystone, I tackle complex web application projects, delivering high-performance, maintainable solutions from concept to production.

            I deliver high-quality, maintainable code with a strong focus on performance, accessibility, and scalability. Whether you need an engaging frontend, a powerful backend, cloud infrastructure, or end-to-end product development—from idea to production—I bring the skills and experience to make it happen.

            Let’s create something that makes a real impact.`}
          </p>
          <div className="pt-6 flex gap-4">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
