import { AcademicResearcher } from "../../public/assets/icons/AcademicResearcher";
import { Approach } from "../../public/assets/icons/Approach";
import { Software } from "../../public/assets/icons/Software";
import { WebConsultant } from "../../public/assets/icons/WebConsultant";
import { Work } from "../../public/assets/icons/Work";
import { Workflow } from "../../public/assets/icons/Workflow";

export const navigation = [
  { id: "home", name: "Home" },
  { id: "services", name: "Services" },
  { id: "projects", name: "Projects" },
  { id: "about", name: "About Me" },
  { id: "contact", name: "Contact" },
];

export const projects = [
  {
    title: "zkTUBE",
    description:
      "As one of the pioneer engineers, I implemented the frontend of zKtUBE — an Ethereum-based decentralized video platform — using React and Ant Design for a seamless user experience.",
    imageUrl: "/assets/zktube.jpeg",
    link: "https://zktube.io/",
  },
  {
    title: "Chops Delight",
    description:
      "Chops Delight is a modern web application for a confectionery brand specializing in cakes and pastries. Built with a focus on elegant UI and responsive design to showcase and sell delightful treats online",
    imageUrl: "/assets/project-2.jpg",
    link: "https://chopsdelight.vercel.app/",
  },
];

export const detailItems = [
  {
    icon: <Software height="24" width="24" fill="white" />,
    heading: "SOFTWARE ENGINEERING",
    description:
      "Build robust, scalable, and high-performing web applications — from frontend interfaces to backend systems — all in one seamless solution tailored to your business needs.",
  },
  {
    icon: <WebConsultant height="24" width="24" fill="white" />,
    heading: "WEB CONSULTANT",
    description:
      "Get expert guidance on creating effective, user-centered digital experiences. From strategy to execution, I help you launch impactful websites that convert and engage.",
  },
  {
    icon: <AcademicResearcher height="24" width="24" fill="white" />,
    heading: "ACADEMIC RESEARCHER",
    description:
      "Transform complex ideas into intuitive, accessible digital platforms. Whether it's data visualization, interactive tools, or publication-ready portals — I bring research to life on the web",
  },
];

export const processItems = [
  {
    icon: <Work height="24" width="24" fill="white" />,
    heading: "How We Work",
    description:
      "From discovery to deployment, we build robust web platforms with clear communication and a focus on long-term scalability. Our process ensures your idea becomes a high-performing product—on time and on point.",
  },
  {
    icon: <Approach height="24" width="24" fill="white" />,
    heading: "Our Approach",
    description:
      "We combine design thinking with technical expertise to craft tailored digital solutions. Every decision—front end to back end—is rooted in strategy, performance, and user experience.",
  },
  {
    icon: <Workflow height="24" width="24" fill="white" />,
    heading: "Workflow",
    description:
      "Our workflow is lean, agile, and transparent. From clean codebases to cloud deployment, we handle the entire build cycle—so you can launch with confidence and scale without stress.",
  },
];

export const testimonials = [
  {
    quote: "Our expectations were surpassed by the exceptional web design",
    description:
      "Detail and creativity exceeded our expectations during our website redesign. The visually stunning and user-friendly site he produced immediately enhanced our online presence",
    imageSrc: "/assets/abisoye.jpeg",
    name: "Abisoye Aremu",
    company: "Adevar Inc",
  },
  {
    quote: "Top-notch service from start to finish",
    description:
      "The process was smooth and the outcome outstanding. Our new site reflects our brand perfectly. We couldn’t be happier!",
    imageSrc: "/assets/tsam.jpeg",
    name: "Olufemi Titilayo",
    company: "Silverline Technologies",
  },
  {
    quote: "Absolutely transformed our online presence",
    description:
      "The intuitive design and professional look helped us gain more traction. Highly recommend working with Olusegun!",
    imageSrc: "/assets/emmanuella.jpeg",
    name: "Chiedu Emmanuella",
    company: "Chops Delight",
  },
];
