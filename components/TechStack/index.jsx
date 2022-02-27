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
	{
		name: "Git",
		image: "/Git.svg",
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
				"space-y-4",
				"lg:p-0 p-4",
				"border-0",
			].join(" ")}
		>
			<span className={["lg:text-4xl sm:text-3xl text-2xl font-bold tracking-wider text-gray-900"].join(" ")}>
				My Tech Stack
			</span>
			<span className={["lg:text-xl text-md font-semibold text-gray-900 text-center"].join(" ")}>
				Here are the technologies that I am currently using.
			</span>
			<motion.div
				className={[
					"lg:w-1/2",
					"pt-4",
					"grid grid-flow-row lg:grid-rows-3 grid-rows-5 lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-8",
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
						<Image alt={tech.name} src={tech.image} layout="fixed" width={72} height={72} priority />
						<span className={["text-lg font-semibold text-gray-900"].join(" ")}>{tech.name}</span>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}

export default TechStack
