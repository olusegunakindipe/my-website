import About from "./blocks/About";
import Homepage from "./blocks/Homepage";
import Projects from "./blocks/Projects";
import Services from "./blocks/Services";

export default function Home() {
  return (
    <div className="w-full">
      <Homepage />
      <Services />
      <Projects />
      <About />
    </div>
  );
}
