import React from "react"
import Image from "next/image"

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

const TechStack = () => {
	return (
		<div
			className={[
				"box-border min-h-screen max-h-screen h-max",
				"flex flex-col items-center justify-center",
				"bg-orange-300",
				"space-y-8",
			].join(" ")}
		>
			<span className={["text-4xl font-bold tracking-wider text-gray-900"].join(" ")}>My Tech Stack</span>
			<div className={["w-1/2 grid grid-flow-row grid-rows-3 grid-cols-3 gap-8"].join(" ")}>
				{technologies.map((tech, index) => (
					<div key={index} className={["flex flex-col items-center justify-center", "space-y-4"].join(" ")}>
						<Image alt={tech.name} src={tech.image} layout="fixed" width={72} height={72} />
						<span className={["text-lg font-semibold text-gray-900"].join(" ")}>{tech.name}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TechStack
