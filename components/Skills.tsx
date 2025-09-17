"use client";

import { motion } from "framer-motion";
import {
  

  FileJson,
  Blocks,
  Layout,
  Smartphone,
  PenTool,
  
  Server,
  Database,
  Globe,
  Code2,
  Cpu,
  Network,
  Cloud,
  Lock,
  
  Github,
  GitBranch,
  Terminal,
  Figma,
  Box,
  TestTube,
  Wrench,
  Settings,
  Monitor,
  Bug,
  BatteryLow,
} from "lucide-react";

export const techStacks = {
  "Embedded Systems Engineer": [
    { name: "Firmware Development", icon: <Cpu className="h-5 w-5" /> },
    { name: "Embedded C / C++ Programming", icon: <Code2 className="h-5 w-5" /> },
    { name: "RTOS", icon: <Server className="h-5 w-5" /> },
    { name: "Microcontroller Programming (STM32, ESP32, ATtiny, Raspberry Pi Pico)", icon: <Smartphone className="h-5 w-5" /> },
    { name: "Hardware–Software Integration", icon: <Layout className="h-5 w-5" /> },
    { name: "Low-Power / Battery-Efficient Design", icon: <BatteryLow className="h-5 w-5" /> },
    { name: "Sensor & Actuator Interfacing", icon: <Settings className="h-5 w-5" /> },
    { name: "Communication Protocols (UART, SPI, I2C, CAN, Modbus, LoRa)", icon: <Network className="h-5 w-5" /> },
  ],
  "PCB Design Skills": [
    { name: "Schematic Capture", icon: <Layout className="h-5 w-5" /> },
    { name: "PCB Layout & Routing (Single-layer, Multi-layer)", icon: <Cpu className="h-5 w-5" /> },
    { name: "Gerber File Generation & Verification", icon: <FileJson className="h-5 w-5" /> },
    { name: "Design for Manufacturability (DFM)", icon: <Settings className="h-5 w-5" /> },
    { name: "Power Integrity & Thermal Management", icon: <BatteryLow className="h-5 w-5" /> },
    { name: "Component Selection & Footprint Creation", icon: <Blocks className="h-5 w-5" /> },
    { name: "EMI/EMC Considerations", icon: <Cloud className="h-5 w-5" /> },
    { name: "High-Frequency (HF) PCB Design", icon: <Network className="h-5 w-5" /> },
    { name: "PCB Design Tools: Altium Designer, KiCad, Proteus", icon: <PenTool className="h-5 w-5" /> },
    { name: "Design Documentation & BOM Creation", icon: <FileJson className="h-5 w-5" /> },
  ],
  "IoT & AI Integration Skills": [
    { name: "IoT Device Development & Connectivity", icon: <Cloud className="h-5 w-5" /> },
    { name: "Cloud Platforms & Web Integration (Flask, Django, REST APIs)", icon: <Globe className="h-5 w-5" /> },
    { name: "Wireless Protocols: Wi-Fi, Bluetooth, LoRa, Zigbee, MQTT", icon: <Network className="h-5 w-5" /> },
    { name: "Edge & On-Device AI/ML Implementation", icon: <Cpu className="h-5 w-5" /> },
    { name: "Neural Networks, k-NN, and Machine Learning Algorithms", icon: <TestTube className="h-5 w-5" /> },
    { name: "Sensor & Actuator Data Processing", icon: <Settings className="h-5 w-5" /> },
    { name: "Remote Monitoring & Control", icon: <Monitor className="h-5 w-5" /> },
    { name: "Data Collection, Analysis & Visualization", icon: <FileJson className="h-5 w-5" /> },
    { name: "Embedded Security & Secure Communication", icon: <Lock className="h-5 w-5" /> },
    { name: "Automation & Intelligent Decision-Making", icon: <Wrench className="h-5 w-5" /> },
    { name: "Mobile App Integration for IoT Devices", icon: <Smartphone className="h-5 w-5" /> },
    { name: "Linux & SSH Configuration for Remote Access", icon: <Terminal className="h-5 w-5" /> },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20"
      style={{
        background: "linear-gradient(#071a32 )"
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-white"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-yellow-400 font-bold"
          >
            A comprehensive overview of my technical expertise and tools I work
            with
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {Object.entries(techStacks).map(
            ([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                variants={categoryVariants}
                className="rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                style={{
                  background: "rgba(49,76,82,0.45)", // transparent dark background
                }}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <motion.h3
                  className="text-xl font-semibold mb-6 text-purple-400 border-b pb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {category}
                </motion.h3>
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                      }}
                      className="flex items-center p-1 rounded-lg transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + categoryIndex * 0.2,
                      }}
                    >
                      <motion.div
                        className="text-purple-400 mr-2"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-white font-medium text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-yellow-400 font-bold">
            Continuously learning and exploring new technologies to stay at the forefront of embedded systems, PCB design, and IoT innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
