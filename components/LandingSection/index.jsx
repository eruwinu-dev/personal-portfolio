import React from "react"
import Image from "next/image"

import profile from "../../public/Profile.jpg"
import Link from "next/link"

import { FaGithub, FaLinkedin } from "react-icons/fa"

import { motion } from "framer-motion"

const LandingSectionContainer = {
	hidden: { x: 1000 },
	show: {
		x: 0,
		transition: {
			staggerChildren: 0.5,
			type: "spring",
			duration: 1,
		},
	},
}

const LandingSectionItem = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
}

const LandingSection = () => {
	return (
		<div
			className={[
				"lg:box-border min-h-screen lg:max-h-screen lg:h-max",
				"flex flex-grow flex-col items-center justify-center",
				"bg-gradient-to-b from-cyan-500 to-sky-500",
			].join(" ")}
		>
			<motion.div
				className={[
					"box-border min-h-screen h-max lg:w-1/2 w-11/12",
					"flex flex-grow flex-col items-center justify-center",
					"space-y-8",
					"bg-gradient-to-b from-cyan-500 to-sky-500",
				].join(" ")}
				initial="hidden"
				animate="show"
				variants={LandingSectionContainer}
			>
				<motion.div
					className={[
						"w-full",
						"flex lg:flex-row flex-col items-center justify-start lg:space-x-8 space-x-0",
					].join(" ")}
					variants={LandingSectionItem}
				>
					<div className={["lg:w-48 w-0"].join(" ")}>
						<Image alt="profile" src={profile} layout="responsive" className={["rounded-3xl"].join(" ")} />
					</div>
					<div className={["flex flex-col items- justify-center space-y-4"].join(" ")}>
						<span
							className={[
								"text-4xl lg:text-left text-center font-extrabold text-gray-800 tracking-wider text-left",
							].join(" ")}
						>
							Hi, I&apos;m Erwin!
						</span>
						<span
							className={[
								"text-2xl lg:text-left text-center font-bold text-gray-800 tracking-wider text-left",
							].join(" ")}
						>
							A frontend enthusiast, hobby web and IoT developer, Master&apos;s student, and lecturer.
						</span>
					</div>
				</motion.div>

				<motion.div
					className={["w-full", "flex flex-col items-start justify-start space-y-8"].join(" ")}
					variants={LandingSectionItem}
				>
					<span className={["text-xl font-bold text-gray-800 tracking-wider text-justify"].join(" ")}>
						I like to teach myself different frontend technologies, especially React and NextJS. I am
						passionate about learning new things and implementing them in real-life projects.
					</span>
				</motion.div>
				<motion.div
					className={["w-full", "flex flex-col items-start justify-start space-y-8"].join(" ")}
					variants={LandingSectionItem}
				>
					<span className={["text-xl font-bold text-gray-800 tracking-wider text-justify"].join(" ")}>
						I&apos;m also doing a project that involves digitally filtering sound waveforms using ESP32
						boards.
					</span>
				</motion.div>
				<motion.div
					className={["w-full", "flex flex-col items-start justify-start space-y-8"].join(" ")}
					variants={LandingSectionItem}
				>
					<span className={["text-xl font-bold text-gray-800 tracking-wider text-justify"].join(" ")}>
						I&apos;m currently enrolled as an MS Electrical Engineering student at University of the
						Philippines Diliman.
					</span>
				</motion.div>
				<motion.div
					className={["w-full", "flex flex-row items-center justify-center space-x-8"].join(" ")}
					variants={LandingSectionItem}
				>
					<Link href="https://github.com/eruwinu-dev">
						<a target="_blank" rel="noopener noreferrer">
							<button
								type="button"
								className={[
									"text-4xl font-bold",
									"hover:-translate-y-1 hover:scale-110 hover:text-gray-800",
									"transition-all delay-150 duration-300 ease-in-out",
								].join(" ")}
							>
								<FaGithub />
							</button>
						</a>
					</Link>
					<Link href="https://www.linkedin.com/in/erwin-joshua-encisa-8b437a1b0/">
						<a target="_blank" rel="noopener noreferrer">
							<button
								type="button"
								className={[
									"text-4xl font-bold",
									"hover:-translate-y-1 hover:scale-110 hover:text-blue-700",
									"transition-all delay-150 duration-300 ease-in-out",
								].join(" ")}
							>
								<FaLinkedin />
							</button>
						</a>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default LandingSection
