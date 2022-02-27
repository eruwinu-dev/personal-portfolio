import React from "react"
import Image from "next/image"

import { motion } from "framer-motion"

const technologies = [
	{
		name: "JavaScript",
		image: "/JavaScript.svg",
	},
	{
		name: "React",
		image: "/React.svg",
	},
	{
		name: "NodeJS",
		image: "/Node.js.svg",
	},
	{
		name: "NextJS",
		image: "/Next.js.svg",
	},
	{
		name: "Firebase",
		image: "/Firebase.svg",
	},
	{
		name: "Supabase",
		image: "/Supabase.svg",
	},
	{
		name: "MongoDB",
		image: "/MongoDB.svg",
	},
	{
		name: "React Native",
		image: "/ReactNative.svg",
	},
]

const TechStackContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			type: "spring",
			duration: 0.5,
		},
	},
}

const TechItem = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
}

const TechStack = () => {
	return (
		<div
			className={[
				"lg:box-border min-h-screen lg:max-h-screen lg:h-max",
				"flex flex-col items-center justify-center",
				"bg-gradient-to-b from-blue-500 to-teal-500",
				"space-y-8",
			].join(" ")}
		>
			<span className={["text-4xl font-bold tracking-wider text-gray-900", "mt-8 lg:mt-0 mb-8"].join(" ")}>
				My Tech Stack
			</span>
			<motion.div
				className={[
					"w-1/2 grid grid-flow-row lg:grid-rows-3 grid-rows-4 lg:grid-cols-3 grid-cols-2 gap-8",
				].join(" ")}
				variants={TechStackContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.8 }}
			>
				{technologies.map((tech, index) => (
					<motion.div
						variants={TechItem}
						key={index}
						className={["flex flex-col items-center justify-center", "space-y-4"].join(" ")}
					>
						<Image alt={tech.name} src={tech.image} layout="fixed" width={72} height={72} />
						<span className={["text-lg font-semibold text-gray-900"].join(" ")}>{tech.name}</span>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}

export default TechStack
