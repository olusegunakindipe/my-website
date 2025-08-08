import { testimonials } from "../data";
import TestimonialCard from "../components/testimonial-card/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white scroll-mt-24">
      <div className="lg:pt-24 pt-12 pb-24 h-auto px-4 mx-auto flex flex-col items-center justify-center text-black max-w-7xl">
        <h2 className="text-4xl mb-12 font-marcellus font-bold">
          Praise from Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
