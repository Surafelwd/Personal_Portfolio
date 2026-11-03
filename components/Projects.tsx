"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Filter, Mail, X } from "lucide-react";
import { useState } from "react";

const projects = [
	{
		title: "Power-Efficient Wearable ECG Patch for Remote Cardiac Monitoring",
		description:
			"A low-power single-lead ECG (MCOT) patch designed and validated for long-term ambulatory cardiac monitoring. The wearable combines a Cortex-M4 MCU with ECG and motion sensing, interrupt-driven firmware, DMA buffering, local SD storage, hardware power-gating, and intermittent LTE transmission for reliable arrhythmia data capture.",
		image: "/images/Power-Efficient Wearable ECG Patch for Remote Cardiac Monitoring.jpg",
		category: ["PCB Design", "Embedded Systems"],
		tags: ["Cortex-M4", "ECG Monitoring", "PCB Design"],
		private: true,
	},
	{
		title: "Modular Wi-Fi Sensor Node",
		description:
			"A compact, low-power, and modular Wi-Fi sensor node designed for IoT and industrial monitoring. Features high-precision ADCs (ADS1113, NAU7802), flexible U.FL antenna options, and expandable architecture for reliable field deployment in smart agriculture, logistics, environmental sensing, and more.",
		image: "/images/FRONT.PNG",
		link: "https://github.com/Surafelwd/Modular-Wi-Fi-Sensor-Node-PCB.git",
		category: "PCB Design",
		tags: ["ESP32", "PCB Design", "IoT"],
	},
	{
		title: "SMARTIO Rev.5 Industrial IoT Controller",
		description:
			"A four-layer industrial IoT controller built around an ESP32-S3 and 4G connectivity for valves, relays, flow sensors, and energy meters. The 12-24 V board includes six relay outputs, valve drivers, RS-485, USB-C debug, multiple regulated rails, and production-focused JLCPCB layout work.",
		image: "/images/SMARTIO_Rev5.png",
		category: "PCB Design",
		tags: ["ESP32-S3", "4G IoT", "4-Layer PCB"],
		private: true,
	},
	{
		title: "PourMetrics Smart Coaster",
		description:
			"A battery-powered smart coaster that measures beverage weight and identifies tagged containers using an ESP32-C3, HX711 load-cell ADC, and MFRC522 RFID reader. The two-layer board includes USB-C, Li-ion charging and protection, automatic USB/battery switching, and a custom five-turn PCB antenna with RF matching.",
		image: "/images/PCB_PourMetericsSmartCoaster_layout.png",
		link: "https://github.com/Surafelwd/ESP32-C3-smart-coaster-with-RFID-and-load-cell.git",
		category: "PCB Design",
		tags: ["ESP32-C3", "RFID", "EasyEDA"],
	},
	{
		title: "STM32-Based Motion Tracking PCBA",
		description:
			"A compact 2-layer PCB built around the STM32F411RET6 with onboard IMU and USB Type-C interface for motion tracking and data communication. Designed in Altium with full schematic, PCB, firmware, and testing documentation for wearable, robotics, and IoT applications.",
		image: "/images/stm32.PNG",
		link: "https://github.com/Surafelwd/ESP32_2_LAYER_BOARD.git",
		category: "PCB Design",
		tags: ["STM32", "PCB Design", "IMU"],
	},
	{
		title: "Hardware-Based Stepper Motor Angle Controller",
		description:
			"A fully hardware-based controller for a 28BYJ-48 5V unipolar stepper motor, delivering precise motion control without a microcontroller. A 555 timer generates clock pulses, a CD4017BE sequences the motor coils, and a CD40110 drives a common-anode 7-segment display for real-time angle tracking. Forward, backward, reset, and limit-switch inputs provide safe manual positioning.",
		image: "/images/Hardware-Based Stepper Motor Angle Controller.PNG",
		link: "https://github.com/Surafelwd/Hardware-Based-Stepper-Motor-Angle-Controller.git",
		category: "PCB Design",
		tags: ["555 Timer", "Digital Logic", "Altium PCB"],
	},
	{
		title: "Automated Bottle Inspection & Sorting System",
		description:
			"An STM32-based quality-control system that reads a bottle fill-level sensor through ADC1, classifies bottles against a defined threshold, and sorts them with a TIM3 servo. An LCD, UART monitoring, and a debounced PA12 pause/resume interrupt provide clear operator feedback and control.",
		image: "/images/bottle-inspection-system.svg",
		link: "https://github.com/Surafelwd/Automated-Bottle-Inspection-and-Sorting-System.-.git",
		category: "Embedded Systems",
		tags: ["STM32", "ADC", "Servo Control"],
	},
	{
		title: "Autonomous Car with Ultrasonic Sensor and Lane Detection",
		description:
			"An autonomous Raspberry Pi vehicle that combines ultrasonic distance measurement for obstacle avoidance with OpenCV camera processing for lane detection. Python motor-control logic stops the car when an obstacle is detected and adjusts its path to follow lane markings.",
		image: "/images/autonomous-car.svg",
		link: "https://github.com/Surafelwd/4k_labs_autonomous_car.git",
		category: "Robotics",
		tags: ["Raspberry Pi", "OpenCV", "Autonomous Vehicle"],
	},
	{
		title: "Smart Wake-Up Clock",
		description:
			"A touch-enabled smart wake-up clock built on the ESP32-S3-Touch-AMOLED-1.8. It combines day and night clock modes, weather-aware outfit and weekly forecast screens, Home Assistant alarm control with SD card tones and snooze, battery monitoring, and low-power operation.",
		image: "/images/Smart Wake-Up Clock on ESP32-S3-Touch-AMOLED-1.8.jpg",
		link: "https://github.com/Surafelwd/Wake-Up-Clock-ESP32-S3-Touch-AMOLED-1.8.git",
		category: "IoT",
		tags: ["ESP32-S3", "Touch UI", "Home Assistant"],
	},
	{
		title: "Automatic Air Freshener with ATtiny85",
		description:
			"A compact, low-power air freshener that uses a PIR motion sensor to activate an atomizer and release fragrant mist when a room is occupied. The ATtiny85 manages a 20-second dispensing cycle, a 15-minute cooldown, LED status indication, and reliable sensor stabilization without unnecessary power use.",
		image: "/images/automatic-air-freshener.svg",
		link: "https://github.com/Surafelwd/Airfreshersupported-by-atiny85.git",
		category: "Embedded Systems",
		tags: ["ATtiny85", "PIR Sensor", "Low Power"],
	},
];

const categories = ["All", "PCB Design", "Embedded Systems", "IoT", "Robotics"];

export default function Projects() {
	const [activeCategory, setActiveCategory] = useState("All");
	const [showAllProjects, setShowAllProjects] = useState(false);
	const [isInquiryOpen, setIsInquiryOpen] = useState(false);
	const [inquiryProject, setInquiryProject] = useState("");
	const visibleProjects = activeCategory === "All"
		? projects
		: projects.filter((project) =>
			Array.isArray(project.category)
				? project.category.includes(activeCategory)
				: project.category === activeCategory,
		);
	const displayedProjects = showAllProjects ? visibleProjects : visibleProjects.slice(0, 3);

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
				<div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filter projects">
					{categories.map((category) => (
						<button
							key={category}
							type="button"
							onClick={() => {
								setActiveCategory(category);
								setShowAllProjects(false);
							}}
							aria-pressed={activeCategory === category}
							className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
								activeCategory === category
									? "bg-white text-[#071a32]"
									: "border border-white/40 text-white hover:bg-white/10"
							}`}
						>
							{category === "All" && <Filter className="h-4 w-4" aria-hidden="true" />}
							{category}
						</button>
					))}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{displayedProjects.map((project) => (
						<div
							key={project.title}
							className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
							style={{
								minHeight: "420px",
							}}
						>
							<div className="relative h-56 bg-slate-100">
							<Image
								src={project.image}
								alt={project.title}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
								className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
							/>
							</div>
							<div className="flex flex-col p-5">
								<p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
									{Array.isArray(project.category) ? project.category.join(" · ") : project.category}
								</p>
								<h3 className="mb-2 text-xl font-bold text-slate-900">{project.title}</h3>
								<p className="mb-4 line-clamp-3 text-sm leading-6 text-slate-600">{project.description}</p>
								<div className="mb-5 flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{tag}</span>
									))}
								</div>
								<a
									href={project.link}
									target={project.link?.startsWith("http") ? "_blank" : undefined}
									rel={project.link?.startsWith("http") ? "noopener noreferrer" : undefined}
									onClick={project.private ? (event) => {
										event.preventDefault();
										setInquiryProject(project.title);
										setIsInquiryOpen(true);
									} : undefined}
									aria-label={project.private ? `Request ${project.title} details` : project.link?.startsWith("http") ? `View ${project.title} on GitHub` : `Discuss ${project.title}`}
									className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#071a32] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12365f]"
								>
									{project.private ? "Request project details" : project.link?.startsWith("http") ? "View on GitHub" : "Discuss project"}
									<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
								</a>
							</div>
						</div>
					))}
				</div>
				{visibleProjects.length > 3 && (
					<div className="mt-10 flex justify-center">
						<button
							type="button"
							onClick={() => setShowAllProjects((isShowingAll) => !isShowingAll)}
							className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#071a32]"
							aria-expanded={showAllProjects}
						>
							{showAllProjects ? "Show fewer projects" : "Show more projects"}
						</button>
					</div>
				)}

					{isInquiryOpen && (
						<div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
							<div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
								<button
									type="button"
									onClick={() => setIsInquiryOpen(false)}
									className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
									aria-label="Close inquiry form"
								>
									<X className="h-5 w-5" />
								</button>
								<div className="mb-6 pr-8">
									<Mail className="mb-3 h-7 w-7 text-[#071a32]" aria-hidden="true" />
									<h3 id="inquiry-title" className="text-2xl font-bold text-slate-900">Request {inquiryProject} details</h3>
									<p className="mt-2 text-sm text-slate-600">Tell me what you would like to know about this private project.</p>
								</div>
								<div className="space-y-4">
									<p className="text-sm leading-6 text-slate-600">
										Please use the <strong>Get In Touch</strong> section below to contact me about{" "}
										<strong>{inquiryProject}</strong>.
									</p>
									<a
										href="#contact"
										onClick={() => setIsInquiryOpen(false)}
										className="inline-flex w-full items-center justify-center rounded-lg bg-[#071a32] px-4 py-3 font-semibold text-white hover:bg-[#12365f]"
									>
										Go to Get In Touch
									</a>
								</div>
							</div>
						</div>
					)}
			</div>
		</section>
	);
}
