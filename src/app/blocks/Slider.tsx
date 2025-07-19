import Image from "next/image";
import Marquee from "react-fast-marquee";

const techStack = [
  { name: "React", src: "/assets/icons/svgs/react.svg" },
  { name: "Nextjs", src: "/assets/icons/svgs/nextdotjs.svg" },
  { name: "Typescript", src: "/assets/icons/svgs/typescript.svg" },
  { name: "Javascript", src: "/assets/icons/svgs/javascript.svg" },
  { name: "NodeJS", src: "/assets/icons/svgs/nodedotjs.svg" },
  { name: "PHP", src: "/assets/icons/svgs/php.svg" },
  { name: "Tailwind CSS", src: "/assets/icons/svgs/tailwindcss.svg" },
  { name: "Material UI", src: "/assets/icons/svgs/mui.svg" },
  { name: "Docker", src: "/assets/icons/svgs/docker.svg" },
  { name: "Sanity CMS", src: "/assets/icons/svgs/sanity.svg" },
  { name: "Google Cloud", src: "/assets/icons/svgs/googlecloud.svg" },
];

const Slider = () => {
  return (
    <Marquee
      pauseOnHover
      speed={40}
      gradient={false}
      delay={5}
      className="bg-white py-4 lg:py-8 text-black flex items-center justify-center"
    >
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-2 mx-6"
        >
          <Image
            src={tech.src}
            alt={tech.name}
            width={40}
            height={40}
            className="text-black"
          />
          <span className="text-black text-sm font-medium">{tech.name}</span>{" "}
        </div>
      ))}
    </Marquee>
  );
};

export default Slider;
