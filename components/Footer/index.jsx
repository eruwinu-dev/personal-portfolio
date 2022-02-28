import React from "react"

const Footer = () => {
	return (
		<div
			className={[
				"box-border",
				"p-4",
				"flex lg:flex-row flex-col items-center justify-center lg:space-y-0 space-y-2 lg:space-x-2",
				"bg-emerald-500",
				"border-0",
			].join(" ")}
		>
			<div className={["lg:text-base text-xs text-center font-semibold text-gray-900"].join(" ")}>
				Made using NextJS, TailwindCSS, and Framer Motion.
			</div>
			<div className={["lg:text-base text-xs text-center font-semibold text-gray-900"].join(" ")}>
				Encisa &copy; 2022.
			</div>
		</div>
	)
}

export default Footer
