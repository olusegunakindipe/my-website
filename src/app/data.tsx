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
  { id: "articles", name: "Articles" },
  { id: "contact", name: "Contact" },
];

export const projects = [
  {
    title: "CVJungle",
    description:
      "Built CVJungle, a CV and LinkedIn optimization product that aligns real experience to role, seniority, and industry. Truthful rewrites, ATS readable PDF export, and matching LinkedIn headline and About without inventing skills.",
    imageUrl: "/assets/cvjungle-hero.webp",
    link: "https://cvjungle.com/",
  },
  {
    title: "zkTUBE",
    description:
      "As one of the pioneer engineers, I implemented the frontend of zKtUBE, an Ethereum based decentralized video platform, using React and Ant Design for a seamless user experience.",
    imageUrl: "/assets/zktube.webp",
    link: "https://zktube.io/",
  },
  {
    title: "Aavegotchi",
    description:
      "Contributed to Aavegotchi, a blockchain gaming multiverse on Base where players earn crypto, customize onchain avatars, and compete across interoperable games. Worked on product experiences at the intersection of Web3, NFTs, and play to earn gameplay.",
    imageUrl: "/assets/aavegotchi.webp",
    link: "https://www.aavegotchi.com/",
  },
];

export const detailItems = [
  {
    icon: <Software height="24" width="24" fill="white" />,
    heading: "SOFTWARE ENGINEERING",
    description:
      "Build robust, AI-ready web applications, from intelligent frontend interfaces to scalable backends, including OAuth2/OIDC identity with AWS Cognito, Lambda, and DynamoDB, engineered for performance, automation, and long-term growth.",
  },
  {
    icon: <WebConsultant height="24" width="24" fill="white" />,
    heading: "WEB CONSULTANT",
    description:
      "Strategic guidance for AI-augmented digital products. From product discovery to launch, I help teams ship experiences that convert, adapt, and stay ahead of the curve.",
  },
  {
    icon: <Workflow height="24" width="24" fill="white" />,
    heading: "AI & MACHINE LEARNING",
    description:
      "Integrate modern AI models and agentic workflows into your stack, automating processes, personalizing UX, and unlocking data-driven insights that compound over time.",
  },
  {
    icon: <AcademicResearcher height="24" width="24" fill="white" />,
    heading: "ACADEMIC RESEARCHER",
    description:
      "Turn complex research into clear digital products: interactive tools, intelligent visualizations, and publication-ready platforms powered by thoughtful engineering and AI where it adds leverage.",
  },
];

export const processItems = [
  {
    icon: <Work height="24" width="24" fill="white" />,
    heading: "How I Work",
    description:
      "From discovery to deployment, I pair clear communication with AI-assisted engineering. Models accelerate research, scaffolding, and reviews, while humans stay accountable for architecture, quality, and outcomes.",
  },
  {
    icon: <Approach height="24" width="24" fill="white" />,
    heading: "My Approach",
    description:
      "I blend design thinking, full-stack craft, and AI tooling to ship tailored solutions. Every decision, from frontend to backend, is grounded in strategy, performance, and experiences that feel intelligent without feeling opaque.",
  },
  {
    icon: <Workflow height="24" width="24" fill="white" />,
    heading: "Workflow",
    description:
      "My workflow is lean, agile, and AI-enhanced. From clean codebases and automated checks to cloud deployment, I run the full build cycle so you can launch with confidence and iterate faster.",
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
