"use client";
import { Typewriter } from "react-simple-typewriter";

import Button from "../components/button/Button";
import { ArrowRight } from "../../../public/assets/icons/ArrowRight";
import Image from "next/image";

const Homepage = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="bg-[#17152f]">
      <div className="h-auto gap-8 lg:relative w-full flex flex-col lg:flex-row lg:items-start items-center lg:justify-start justify-center max-w-7xl mx-auto lg:pt-40">
        <div className="px-4 text-center lg:text-left lg: pl-6 xl:pl-0">
          <h1 className="text-7xl font-bold text-white mb-4">I'm Segun</h1>
          <div className="flex items-center justify-center lg:justify-start lg:text-4xl border-4 p-4 border-gray-500 rounded my-12 uppercase font-bold">
            <span>I'M A&nbsp;</span>
            <span className="inline-block  text-white">
              <Typewriter
                words={["Software Engineer"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
              />
            </span>
          </div>
          <Button
            onClick={(e) => handleClick(e)}
            className="w-full lg:w-auto flex mx-auto lg:mx-0 justify-center items-center gap-4 mt-4 mb-12"
          >
            <span>Get in touch</span> <ArrowRight />
          </Button>
        </div>
        <div className=" perspective-[1000px] w-full max-w-md mx-auto lg:w-1/2 lg:absolute top-4 right-2">
          <Image
            src="/assets/my-pics.png"
            alt="Profile picture"
            width={1200}
            height={500}
            className="rounded-xl shadow-2xl transform scale:100 lg:scale-105 -rotate-y-6 rotate-x-3 w-full h-[400px] lg:h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
