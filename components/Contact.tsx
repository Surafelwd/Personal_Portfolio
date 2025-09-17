"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

const contactInfo = {
  email: "surafelwondmagegn@gmail.com",
  phone: "+251 91 120 2323",
  github: "https://github.com/Surafelwd",
  linkedin: "https://www.linkedin.com/in/surafel-wondmagegn-23a88026a",
  upwork: "https://www.upwork.com/freelancers/~013a78423d60b53a40?mp_source=share",
};

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
    value: "Surafelwd",
    href: contactInfo.github,
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn",
    value: "surafel-wondmagegn-23a88026a",
    href: contactInfo.linkedin,
  },
  {
    icon: (
      <img
        src="/images/upp.png"
        alt="Upwork"
        className="h-6 w-6"
      />
    ),
    label: "Upwork",
    value: "Surafel Wondmagegn",
    href: contactInfo.upwork,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20" style={{
      background: "linear-gradient(60deg, #071a32)",
    }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-lg p-8 shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 rounded-full text-purple-600 ${method.label === "Upwork" ? "bg-black" : "bg-purple-100"}`}>
                    {method.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {method.label}
                    </h3>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-center text-gray-200"
            >
              <p>
                Feel free to reach out through any of these channels. I'll get
                back to you as soon as possible!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
