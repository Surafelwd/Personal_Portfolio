"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "Home", href: "#" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Services", href: "#services" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav
			className="fixed w-full shadow-md z-50"
			style={{
				background: "linear-gradient(60deg, #071a32)",
			}}
		>
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<img
						src="/images/swd.png"
						alt="Logo"
						className="h-20 w-20 object-contain mr-2"
					/>
					

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="font-bold text-white hover:text-purple-200 transition-colors"
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-gray-600"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden"
					>
						<div className="flex flex-col space-y-2 py-4">
							{navItems.map((item) => (
								<motion.div
									key={item.name}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -10 }}
								>
									<Link
										href={item.href}
										className="font-bold text-white hover:text-purple-200 transition-colors block"
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
