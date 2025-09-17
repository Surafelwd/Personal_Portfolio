"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
	{
		title: "Modular Wi-Fi Sensor Node",
		description:
			"A compact, low-power, and modular Wi-Fi sensor node designed for IoT and industrial monitoring. Features high-precision ADCs (ADS1113, NAU7802), flexible U.FL antenna options, and expandable architecture for reliable field deployment in smart agriculture, logistics, environmental sensing, and more.",
		image: "/images/FRONT.PNG",
		link: "https://github.com/Surafelwd/Modular-Wi-Fi-Sensor-Node-PCB.git",
	},
	{
		title: "STM32-Based Motion Tracking PCBA",
		description:
			"A compact 2-layer PCB built around the STM32F411RET6 with onboard IMU and USB Type-C interface for motion tracking and data communication. Designed in Altium with full schematic, PCB, firmware, and testing documentation for wearable, robotics, and IoT applications.",
		image: "/images/stm32.PNG",
		link: "https://github.com/Surafelwd/ESP32_2_LAYER_BOARD.git",
	},
	{
		title: "Hardware-Based Stepper Motor Angle Controller",
		description:
			"A fully hardware-implemented controller for the 28BYJ-48 stepper motor using 555 timer, CD4017BE, and CD40110 ICs. Features precise angle tracking on a 7-segment display, manual control buttons, and limit switch protection — no microcontroller required.",
		image: "/images/motor.PNG",
		link: "https://github.com/Surafelwd/Hardware-Based-Stepper-Motor-Angle-Controller.git",
	},
];

export default function Projects() {
	return (
		<section
			id="projects"
			className="py-20"
			style={{
				background: "linear-gradient(60deg, #071a32)",
}}
		>
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-3xl font-bold text-center mb-12 text-white"
				>
					Featured Projects
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="relative rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
							style={{
								minHeight: "320px",
								background: "none", // Removed transparent background
							}}
						>
							{/* Project Image fills the box, fully visible */}
							<img
								src={project.image}
								alt={project.title}
								className="absolute inset-0 w-full h-full object-contain"
								style={{ zIndex: 1, background: "transparent" }}
							/>
							{/* Overlay: hidden by default, shown on hover */}
							<div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
								<h3 className="text-lg font-semibold mb-2 text-white text-center">{project.title}</h3>
								<p className="text-gray-200 mb-4 text-center px-4">{project.description}</p>
								<a href={project.link} target="_blank" rel="noopener noreferrer">
									<div className="flex flex-col items-center">
										<img
											src="/images/view.14a299d4.png"
											alt="Check Project"
											className="h-8 w-8 mb-1"
										/>
										<span className="text-purple-300 text-xs font-semibold">Check Project</span>
									</div>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
