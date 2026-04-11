"use client";
import { motion } from "framer-motion";
import { testimonials } from "../data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#050507]">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-blue-400 font-medium mb-4 uppercase tracking-widest text-sm">
            Kind Words
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Praise from Clients
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-8 rounded-3xl border border-white/5 relative flex flex-col h-full"
            >
              <div className="text-4xl text-blue-500/30 font-serif mb-6">
                &ldquo;
              </div>
              <p className="text-white/70 italic mb-8 flex-grow leading-relaxed italic">
                {testimonial.description}
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/40 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
