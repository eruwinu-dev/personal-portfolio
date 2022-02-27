import React from "react"
import Image from "next/image"

import { motion } from "framer-motion"

import WorkTrack from "../../public/WorkTrack.png"
import BillTracker from "../../public/BillTracker.png"
import UPIECEPWebsite from "../../public/UPIECEPWebsite.png"

const projectsList = [
	{
		name: "WorkTrack",
		image: WorkTrack,
		site: "https://worktrack.vercel.app/",
		desc: "A web app that keeps track of how you spend your time.",
	},
	{
		name: "BillTracker",
		image: BillTracker,
		site: "https://react-bill-tracker.herokuapp.com/",
		desc: "A web app that utilizes charts to visualize your bill trends.",
	},
	{
		name: "UP IECEP Website",
		image: UPIECEPWebsite,
		site: "https://upiecep-website.vercel.app/",
		desc: "The website of UP IECEP.",
	},
]

const cardVariants = {
	offscreen: {
		y: 600,
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 1,
		},
	},
}

const Projects = () => {
	return (
		<div
			className={[
				"lg:box-border min-h-screen lg:max-h-screen lg:h-max",
				"flex flex-col items-center justify-center",
				"bg-gradient-to-b from-sky-500 to-blue-500",
				"lg:p-0 p-4",
				"border-0",
			].join(" ")}
		>
			<div className={["flex flex-col items-center justify-center", "space-y-4", "lg:w-1/2 w-full"].join(" ")}>
				<span
					className={[
						"lg:text-4xl sm:text-3xl text-2xl font-bold tracking-wider text-gray-900 text-center",
					].join(" ")}
				>
					Projects
				</span>
				<span className={["lg:text-xl text-md font-semibold text-gray-900"].join(" ")}>
					Here are some of my hobby projects.
				</span>
				<div
					className={[
						"grid grid-flow-row lg:grid-rows-2 grid-rows-3 lg:grid-cols-2 grid-cols-1 lg:gap-x-16 gap-x-4 gap-y-4",
					].join(" ")}
				>
					{projectsList.map((project, index) => (
						<ProjectTile project={project} key={index} />
					))}
				</div>
			</div>
		</div>
	)
}

const ProjectTile = ({ project }) => {
	return (
		<motion.div className="w-full" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 1 }}>
			<motion.div className={["w-full", "p-4"].join(" ")} variants={cardVariants}>
				<a
					href={project.site}
					target="_blank"
					rel="noopener noreferrer"
					className={[
						"flex flex-col items-center justify-start",
						"rounded-lg",
						"bg-transparent",
						"lg:opacity-90 opacity-100 hover:opacity-100",
						"shadow-none hover:shadow-lg",
						"hover:-translate-y-2",
						"transition delay-150 duration-300 ease-in-out",
						"bg-white",
					].join(" ")}
				>
					<div className={["w-full", "border-b-2 border-blue-500"].join(" ")}>
						<Image
							alt={project.name}
							src={project.image}
							layout="responsive"
							className={["rounded-t-lg"].join(" ")}
						/>
					</div>

					<div
						className={[
							"w-full flex flex-col items-center justify-center",
							"p-4",
							"space-y-4 rounded-b-lg",
						].join(" ")}
					>
						<span
							className={["w-full text-center text-2xl font-bold tracking-wider text-gray-900"].join(" ")}
						>
							{project.name}
						</span>
						<p className={["text-justified font-semibold text-center text-gray-900"].join(" ")}>
							{project.desc}
						</p>
					</div>
				</a>
			</motion.div>
		</motion.div>
	)
}

export default Projects
