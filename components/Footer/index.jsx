import React from "react"

const Footer = () => {
	return (
		<div
			className={[
				"box-border",
				"py-2",
				"flex flex-grow flex-col items-center justify-center",
				"bg-teal-300",
			].join(" ")}
		>
			<span className={["text-base font-semibold text-gray-900"].join(" ")}>
				Made using NextJS and TailwindCSS. Encisa &copy; 2022.
			</span>
		</div>
	)
}

export default Footer
