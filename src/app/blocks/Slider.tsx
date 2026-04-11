import Image from "next/image";
import Marquee from "react-fast-marquee";

const techStack = [
  { name: "Claude", src: "", color: "#D97757", isText: true },
  { name: "Cursor", src: "", color: "#3B82F6", isText: true },
  { name: "Gemini", src: "", color: "#8E75FF", isText: true },
  { name: "React", src: "/assets/icons/svgs/react.svg" },
  { name: "Nextjs", src: "/assets/icons/svgs/nextdotjs.svg" },
  { name: "NodeJS", src: "/assets/icons/svgs/nodedotjs.svg" },
  { name: "GraphQL", src: "/assets/icons/svgs/graphql.svg" },
  { name: "Typescript", src: "/assets/icons/svgs/typescript.svg" },
  { name: "PHP", src: "/assets/icons/svgs/php.svg" },
  { name: "Docker", src: "/assets/icons/svgs/docker.svg" },
];

const Slider = () => {
  return (
    <div className="py-8 surface-gradient border-y border-white/10 relative z-10 overflow-hidden shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <Marquee
        pauseOnHover
        speed={30}
        gradient={true}
        gradientColor="#0a0a0c"
        gradientWidth={200}
        className="flex items-center"
      >
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mx-12 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110 cursor-pointer group"
          >
            <div
              className="w-14 h-14 flex items-center justify-center p-3 rounded-2xl bg-white/10 border border-white/20 transition-colors group-hover:border-white/30 shadow-xl"
              style={tech.isText ? { borderColor: `${tech.color}66` } : {}}
            >
              {tech.isText ? (
                <span
                  className="text-xl font-black"
                  style={{ color: tech.color }}
                >
                  {tech.name[0]}
                </span>
              ) : (
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="object-contain invert brightness-[3]"
                />
              )}
            </div>
            <span className="text-white text-xl font-bold tracking-tighter uppercase font-heading">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </div>
  );
};

export default Slider;
