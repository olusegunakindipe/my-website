import About from "./blocks/About";
import Homepage from "./blocks/Homepage";
import Projects from "./blocks/Projects";
import Services from "./blocks/Services";
import Slider from "./blocks/Slider";
import Testimonials from "./blocks/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Homepage />
      <Slider />
      <Services />
      <Projects />
      <About />
      <Testimonials />
    </div>
  );
}
