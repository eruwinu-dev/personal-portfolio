import React from "react"
import Image from "next/image"

import profile from "../../public/profile.jpg"
import Link from "next/link"

import { FaGithub, FaLinkedin } from "react-icons/fa"

const LandingSection = () => {
	return (
		<div
			className={[
				"box-border min-h-screen h-max",
				"flex flex-grow flex-col items-center justify-center",
				"space-y-8",
				"bg-green-300",
			].join(" ")}
		>
			<div className={["w-1/2", "flex flex-row items-center justify-start space-x-8"].join(" ")}>
				<div className={["w-48"].join(" ")}>
					<Image alt="profile" src={profile} layout="responsive" className={["rounded-3xl"].join(" ")} />
				</div>
				<div className={["flex flex-col items- justify-center space-y-4"].join(" ")}>
					<span className={["text-4xl font-extrabold text-gray-800 tracking-wider text-left"].join(" ")}>
						Hi, I&apos;m Erwin!
					</span>
					<span className={["text-2xl font-bold text-gray-800 tracking-wider text-left"].join(" ")}>
						A frontend enthusiast, hobby web and IoT developer, Master&apos;s student, and lecturer.
					</span>
				</div>
			</div>
			<div className={["w-1/2", "flex flex-row items-center justify-center space-x-8"].join(" ")}>
				<Link href="https://github.com/eruwinu-dev">
					<a target="_blank" rel="noopener noreferrer">
						<button type="button" className={["text-4xl font-bold"].join(" ")}>
							<FaGithub />
						</button>
					</a>
				</Link>
				<Link href="https://www.linkedin.com/in/erwin-joshua-encisa-8b437a1b0/">
					<a target="_blank" rel="noopener noreferrer">
						<button type="button" className={["text-4xl font-bold"].join(" ")}>
							<FaLinkedin />
						</button>
					</a>
				</Link>
			</div>
			<div className={["w-1/2", "flex flex-col items-start justify-start space-y-8"].join(" ")}>
				<span className={["text-xl font-bold text-gray-800 tracking-wider text-justify"].join(" ")}>
					I like to teach myself different frontend technologies, especially React and NextJS. I am passionate
					about learning new things and implementing them in real-life projects.
				</span>
				<span className={["text-xl font-bold text-gray-800 tracking-wider text-justify"].join(" ")}>
					I&apos;m also doing a project that involves digitally filtering sound waveforms using ESP32 boards.
				</span>
				<span className={["text-xl font-bold text-gray-800 tracking-wider text-justify"].join(" ")}>
					I&apos;m currently enrolled as an MS Electrical Engineering student at University of the Philippines
					Diliman.
				</span>
			</div>
		</div>
	)
}

export default LandingSection
