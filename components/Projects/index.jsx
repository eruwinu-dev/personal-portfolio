import React from "react"
import Image from "next/image"

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

const Projects = () => {
	return (
		<div
			className={[
				"box-border min-h-screen max-h-screen h-max",
				"flex flex-col items-center justify-center",
				"bg-blue-300",
				"space-y-4",
			].join(" ")}
		>
			<span className={["text-4xl font-bold tracking-wider text-gray-900"].join(" ")}>Projects</span>
			<div className={["w-1/2 grid grid-flow-row grid-rows-2 grid-cols-2 gap-x-16 gap-y-4"].join(" ")}>
				{projectsList.map((project, index) => (
					<a
						href={project.site}
						target="_blank"
						rel="noopener noreferrer"
						key={index}
						className={[
							"flex flex-col items-center justify-start",
							"space-y-4",
							"p-4",
							"rounded-lg",
							"bg-transparent hover:bg-blue-400",
						].join(" ")}
					>
						<div className={["w-full"].join(" ")}>
							<Image
								alt={project.name}
								src={project.image}
								layout="responsive"
								className={["rounded-lg"].join(" ")}
							/>
						</div>

						<div className={["w-full flex flex-col items-center justify-center", "space-y-4"].join(" ")}>
							<span className={["w-full text-center text-2xl font-bold tracking-wider"].join(" ")}>
								{project.name}
							</span>
							<p className={["text-justified font-semibold"].join(" ")}>{project.desc}</p>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}

export default Projects
