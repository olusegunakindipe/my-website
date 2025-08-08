"use client";
import { Typewriter } from "react-simple-typewriter";

import Button from "../components/button/Button";
import { ArrowRight } from "../../../public/assets/icons/ArrowRight";
import Image from "next/image";

const Homepage = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="bg-[#17152f] scroll-mt-24">
      <div className="min-h-screen pt-20 gap-8 lg:relative w-full flex flex-col lg:flex-row lg:items-center items-center lg:justify-start justify-center max-w-7xl mx-auto lg:pt-40">
        <div className="px-4 text-center lg:text-left pl-6 xl:pl-0">
          <h1 className="animate-slide-in-up opacity-0 delay-0 font-pacifico lg:mt-8 text-5xl lg:text-7xl font-bold text-white mb-4 ">
            {"I'm Segun"}
          </h1>
          <div className="animate-slide-in-up opacity-0 delay-300 flex items-center justify-center lg:justify-start lg:text-4xl rounded my-12 uppercase font-bold">
            <span> &nbsp;</span>
            <span className="inline-block text-white w-full font-marcellus">
              <Typewriter
                words={["Expert in Web app development"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
              />
            </span>
          </div>
          <Button
            onClick={(e) => handleClick(e)}
            className="hidden opacity-0 animate-slide-in-up delay-500 w-full lg:w-auto md:flex mx-auto lg:mx-0 justify-center items-center gap-4 mt-4 mb-12"
          >
            <span>Get in touch</span> <ArrowRight />
          </Button>
        </div>
        <div className="lg:hidden flex mb-8 justify-center items-center w-full mx-auto opacity-0 animate-slide-in-mid delay-500">
          <Button
            onClick={(e) => handleClick(e)}
            className="flex justify-center gap-4 items-center"
          >
            <span>Get in touch</span> <ArrowRight />
          </Button>
        </div>

        <div className="animate-slide-in-right lg:mt-32 transition-transform duration-300 ease-in hover:scale-115 scale-105 w-full max-w-md mx-auto lg:w-1/2 lg:absolute top-4 right-2">
          <Image
            src="/assets/my-pics.png"
            alt="Profile picture"
            width={1200}
            height={500}
            className="rounded-xl transform scale-100 lg:scale-125 w-full h-[400px] lg:h-[550px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
