"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

// Replace Twitter with Upwork
const socialLinks = [
	{
		name: "Upwork",
		icon: (
			<img
				src="/images/upp.png"
				alt="Upwork"
				className="h-6 w-6"
			/>
		),
		href: "https://www.upwork.com/freelancers/~013a78423d60b53a40?mp_source=share",
		color: "hover:text-green-600",
		bg: "bg-white",
	},
	{
		name: "GitHub",
		icon: <Github className="h-6 w-6" />,
		href: "https://github.com/Surafelwd",
		color: "hover:text-gray-800",
		bg: "bg-white",
	},
	{
		name: "LinkedIn",
		icon: <Linkedin className="h-6 w-6" />,
		href: "https://www.linkedin.com/in/surafel-wondmagegn-23a88026a",
		color: "hover:text-blue-600",
		bg: "bg-white",
	},
	
];

export default function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Background Image and Gradient Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `
            
            url('/images/background.png')
          `,
				}}
			>
				{/* Optional: Animated gradient overlay */}
				<div className="absolute inset-0 "></div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 relative z-10 pl-14 pt-10 flex">
				{/* Left Side: Existing content */}
				<div className="max-w-4xl mx-auto text-left text-white  pt-12 md:w-1/2">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl md:text-4xl font-bold text-white mb-4">
							Hi, I'm{" "}
							<span className="text-purple-200">Surafel Wondmagegn </span>
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="text-2xl md:text-4xl font-semibold mb-8 flex items-center"
					>
						I'm {" "}
						<TypeAnimation
							sequence={[
								"Electronics Engineer",
								2000,
								"PCB Designer",
								2000,
								"Embedded Engineer",
								2000,
								"Freelancer",
								2000,
							]}
							wrapper="span"
							speed={50}
							className="ml-2 text-purple-200 transition-colors duration-700"
							repeat={Infinity}
						/>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-lg  font-serif text-gray-200 mb-3 max-w-4xl "
					>
						<span className=" mb-6 pl-14">
							Hey there! 👋 Welcome to my corner of the web! make yourself at
							HOME as you explore.
							<br />
						</span>

						I help innovators and businesses bring their hardware ideas to life
						with efficient, real-world embedded systems. From IoT and robotics to
						custom PCB design, I love turning complex problems into simple,
						reliable solutions. Need someone who can design, code, and deliver?
						You’re in the right place. let’s build something amazing together.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="flex justify-center space-x-4 items-center"
					>
						<Link
							href="#projects"
							className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold 
                hover:bg-purple-100 transition-colors duration-300 flex items-center"
						>
							View Projects
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
						<Link
							href="#contact"
							className="border-2 border-white text-white px-8 py-3 rounded-lg 
                font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
						>
							Contact Me
						</Link>
						{/* Social Links beside Contact */}
						<div className="flex items-center space-x-4 ml-4">
							{socialLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center"
									style={{ transition: "transform 0.3s" }}
								>
									{link.icon}
								</a>
							))}
						</div>
					</motion.div>
				</div>
				{/* Right Side: Image */}
				<div className="hidden md:flex md:w-1/2 items-center justify-center">
					<img
						src="/images/l.jpg"
						alt="Right Side"
						className="relative max-w-2xl w-full h-auto rounded-2xl mix-blend-multiply opacity-60"
						style={{
							zIndex: 1,
							WebkitMaskImage:
								"radial-gradient(circle at center, white 25%, transparent 100%)",
							maskImage:
								"radial-gradient(circle at center, white 25%, transparent 100%)",
						}}
					/>
				</div>
			</div>
		</section>
	);
}
