"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20"
      style={{
        background:"linear-gradient(60deg, #071a32)",
}}

    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="relative md:w-1/2 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[320px] mt-[-32px]">
              <Image
                src="/images/mee.png"
                alt="Profile Picture"
                fill
                className="group-hover:scale-105 transition-transform duration-300 object-cover"
                priority
                style={{
                  WebkitMaskImage: "radial-gradient(circle at center, white 100%, transparent 100%)",
                  maskImage: "radial-gradient(circle at center, white 100%, transparent 100%)",
                  opacity: 1,
                  mixBlendMode: "lighten",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                {/* CV PDF Icon */}
                <a
                  href="/Surafel%20WondmagegnCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View CV"
                >
                  <FileText className="h-6 w-6 text-red-600" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: About Text */}
          <div className="flex-1 md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                maxWidth: "100%",
                color: "#b0bec5", // softer, muted text color for blending
                textAlign: "start",
                fontSize: "15px",
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                I’m a PCB designer and embedded systems engineer based in Addis Ababa,
                Ethiopia, with a BSc in Electrical and Computer Engineering from Addis
                Ababa University. I love bringing ideas to life, turning them into
                reliable hardware and firmware that solve real-world problems, from
                low-power IoT systems to wearable devices and robotics.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6"
              >
                <strong>PCB design is at the core of my work.</strong> I’ve designed
                boards professionally, taking them from schematic capture through
                layout to validated, manufacturable hardware. I work in Altium
                Designer, KiCad, and EasyEDA, and because I also write embedded
                firmware, I design with both the hardware and the code in mind. That
                means fewer surprises when the first boards arrive.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6"
              >
                I enjoy sharing what I learn. I’ve mentored new engineers, helped
                teach Arduino and data analysis courses, and I’m always looking for
                chances to collaborate on open-source projects and experimental
                hardware. I also tinker with AI as a hobbyist and keep up with new
                technologies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6"
              >
                Away from the workbench, I recharge with books, movies, and long
                quiet walks. I read both technical and spiritual literature, and I
                enjoy tech meetups where I can swap ideas with other builders.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                I’m open to remote PCB design and embedded engineering projects.
                Let’s build something together.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-6"
              >
                {/* Additional content if needed */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
