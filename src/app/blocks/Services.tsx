"use client";
import { motion } from "framer-motion";
import { detailItems } from "../data";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden bg-[#000000]"
    >
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-blue-400 font-medium mb-4 uppercase tracking-widest text-sm">
              Expertise
            </h2>
            <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Innovative <br />
              Digital Solutions
            </h3>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              I provide end-to-end technical services to help you launch
              high-performing products that grow with your business.
            </p>
          </motion.div>

          <div className="w-full lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {detailItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                className="glass-dark p-10 rounded-[2.5rem] border border-white/5 transition-all duration-500 group relative"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-all duration-500 group-hover:rotate-6">
                  <div className="text-blue-400 scale-[1.5]">{item.icon}</div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {item.heading}
                </h4>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
