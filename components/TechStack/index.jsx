import React from "react"

const TechStack = () => {
	return (
		<div
			className={[
				"box-border min-h-screen max-h-screen h-max",
				"flex flex-col items-center justify-center",
				"bg-orange-300",
			].join(" ")}
		>
			TechStack
			<ul>
				<li>Javascript</li>
				<li>React</li>
				<li>React Native</li>
				<li>NextJS</li>
				<li>NodeJS</li>
				<li>Firebase</li>
				<li>Supabase</li>
				<li>MongoDB</li>
			</ul>
		</div>
	)
}

export default TechStack
