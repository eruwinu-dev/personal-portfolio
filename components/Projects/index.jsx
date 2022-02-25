import React from "react"

const Projects = () => {
	return (
		<div
			className={[
				"box-border min-h-screen max-h-screen h-max",
				"flex flex-col items-center justify-center",
				"bg-blue-300",
			].join(" ")}
		>
			Projects | Work in Progress
			<ul>
				<li>WorkLogger</li>
				<li>BillsTracker</li>
				<li>UP IECEP Website</li>
			</ul>
		</div>
	)
}

export default Projects
