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
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download CV"
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
                 I love bringing ideas to life, transforming them into reliable hardware and 
                 software that solve real-world problems. My career, rooted 
                 in Addis Ababa, Ethiopia, has been a journey of blending 
                 creativity with technical precision to build innovative devices, 
                 from smart IoT systems to robotics projects. I thrive on turning 
                 complex challenges into elegant solutions and am always motivated 
                 by the impact my work can have on people’s lives.</motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                Beyond the workbench, 
                I'm constantly exploring new technologies, staying updated
                 with the latest advancements, and engaging with AI as a 
                 hobbyist. I also enjoy mentoring fellow engineers, 
                 collaborating on open-source projects, and experimenting
                  with inventive hardware designs.</motion.p>
                  <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                To recharge, you'll find me immersed in a good book, 
                watching a captivating movie, or taking long, quiet walks 
                to reflect and gather inspiration. I also enjoy diving into 
                spiritual and technical literature, attending tech meetups,
                 and connecting with like-minded innovators to exchange
                  ideas and push the boundaries of what’s possible.
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
