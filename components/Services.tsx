"use client";

import {  Cpu, Layout, Cloud} from "lucide-react";
import { motion } from "framer-motion";

const services = [
	{
		icon: <Cpu className="h-12 w-12 text-purple-600" />,
		title: "Embedded Systems Engineer",
		description:
			"I design and develop custom embedded solutions that combine performance, efficiency, and reliability. From microcontroller programming to hardware–software integration, I bring ideas to life across a range of platforms including STM32, ESP32, Raspberry Pi, and ATtiny series.",
	},
	{
		icon: <Layout className="h-12 w-12 text-purple-600" />,
		title: "PCB Designer",
		description:
			"I provide end-to-end PCB design services—from schematic capture, Gerber files, and complete documentation to PCBA and prototypes. Using industry-standard tools such as Altium, KiCad, and Proteus, I design boards optimized for performance, manufacturability, and cost efficiency.",
	},
	{
		icon: <Cloud className="h-12 w-12 text-purple-600" />,
		title: "IoT & AI Integration",
		description:
			"I specialize in bringing intelligence and connectivity to embedded systems. By combining IoT connectivity with AI/ML algorithms, I create smart devices that can communicate, analyze, and adapt. From remote monitoring to real-time decision-making, I help transform traditional systems into intelligent solutions.",
	},
];

export default function Services() {
	return (
		<section
			id="services"
			className="py-20"
			style={{
				background: "linear-gradient(60deg, #071a32)",
}}
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12 text-white">
					My Services
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							whileHover={{ scale: 1.05 }}
							className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
						>
							<motion.div
								className="mb-4"
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								{service.icon}
							</motion.div>
							<h3 className="text-xl font-bold mb-2 text-black">
								{service.title}
							</h3>
							<p className="text-black ">{service.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
