"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "../../form/ContactForm";
import { Location } from "../../../../../public/assets/icons/Location";
import { Mail } from "../../../../../public/assets/icons/Mail";
import { Phone } from "../../../../../public/assets/icons/Phone";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 relative overflow-hidden mesh-gradient"
    >
      {/* Background Decorative Elements with 3D feel */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [-20, 30, -20],
            y: [0, 40, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -120, 0],
            x: [0, -50, 0],
            y: [20, -30, 20],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <h2 className="text-blue-400 font-medium mb-4 uppercase tracking-widest text-sm">
              Contact
            </h2>
            <h3 className="text-4xl font-bold text-white mb-6">
              Let&apos;s Build Something
            </h3>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Have a project in mind? I&apos;m currently available for new
              opportunities and collaborations.
            </p>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-10"
          >
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Mail height="24" width="24" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 tracking-tight">
                    Email
                  </h4>
                  <p className="text-white/50 text-lg font-medium">
                    akinfergie@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Phone height="24" width="24" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 tracking-tight">
                    Phone
                  </h4>
                  <p className="text-white/50 text-lg font-medium">
                    +44 7748120797
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Location height="24" width="24" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 tracking-tight">
                    Location
                  </h4>
                  <p className="text-white/50 text-lg font-medium">
                    Birmingham, United Kingdom
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-xl grayscale contrast-[1.2] opacity-60 hover:opacity-100 transition-opacity duration-700">
              <iframe
                title="Birmingham Map"
                className="w-full h-72 border-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95807.09198933028!2d-1.96752435!3d52.4894719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc8e8bb0c56f%3A0xeed69d37b52a3b99!2sBirmingham!5e0!3m2!1sen!2suk!4v1710077123456"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Segun Akindipe. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#home"
              className="text-white/30 hover:text-white transition-colors text-sm"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
