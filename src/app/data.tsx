import { Location } from "../../public/assets/icons/Location";

export const navigation = [
  { id: "home", name: "Home" },
  { id: "services", name: "Services" },
  { id: "projects", name: "Projects" },
  { id: "about", name: "About Me" },
  { id: "contact", name: "Contact" },
];

export const projects = [
  {
    title: "Project 1",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    imageUrl: "/assets/project-1.jpg",
    link: "https://github.com/project-1",
  },
  {
    title: "Project 2",
    description:
      "This is another sample project showcasing UI components and frontend engineering.",
    imageUrl: "/assets/project-2.jpg",
    link: "https://github.com/project-2",
  },
  {
    title: "Project 3",
    description:
      "This is another sample project showcasing UI components and frontend engineering.",
    imageUrl: "/assets/project-3.jpg",
    link: "https://github.com/project-3",
  },
];

export const detailItems = [
  {
    icon: <Location height="18" width="18" />,
    heading: "SOFTWARE ENGINEERING",
    description:
      "Say goodbye to the hassle of managing multiple providers and get an all-in-one website solution that covers design, development, and content creation",
  },
  {
    icon: <Location height="18" width="18" />,
    heading: "WEB CONSULTANT",
    description:
      "Say goodbye to the hassle of managing multiple providers and get an all-in-one website solution that covers design, development, and content creation",
  },
  {
    icon: <Location height="18" width="18" />,
    heading: "ACADEMIC RESEARCHER",
    description:
      "Say goodbye to the hassle of managing multiple providers and get an all-in-one website solution that covers design, development, and content creation",
  },
];

export const testimonials = [
  {
    quote: "Our expectations were surpassed by the exceptional web design",
    description:
      "Detail and creativity exceeded our expectations during our website redesign. The visually stunning and user-friendly site she produced immediately enhanced our online presence",
    imageSrc: "/assets/my-pics.png",
    name: "Abisoye Aremu",
    company: "Adevar Inc",
  },
  {
    quote: "Top-notch service from start to finish",
    description:
      "The process was smooth and the outcome outstanding. Our new site reflects our brand perfectly. We couldn’t be happier!",
    imageSrc: "/assets/my-pics.png",
    name: "Tosin Bakare",
    company: "StudioX",
  },
  {
    quote: "Absolutely transformed our online presence",
    description:
      "The intuitive design and professional look helped us gain more traction. Highly recommend working with her!",
    imageSrc: "/assets/my-pics.png",
    name: "Kenny Aluko",
    company: "BrightCore",
  },
];
