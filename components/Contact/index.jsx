import React from "react"
import Link from "next/link"

const Contact = () => {
	return (
		<div
			className={[
				"lg:box-border lg:max-h-screen lg:h-64 h-48",
				"flex flex-col items-center justify-center",
				"bg-gradient-to-b from-teal-500 to-emerald-500",
				"space-y-4",
				"lg:p-0 p-4",
				"border-0",
			].join(" ")}
		>
			<span
				className={["lg:text-4xl sm:text-3xl text-2xl font-bold tracking-wider text-gray-900 text-center"].join(
					" "
				)}
			>
				Who you gonna call?
			</span>
			<span className={["lg:text-xl text-md font-semibold text-gray-900"].join(" ")}>
				You may reach out to me on
				<Link href="https://www.linkedin.com/in/erwin-joshua-encisa-8b437a1b0/">
					<a
						target="_blank"
						rel="noopener noreferrer"
						className={["hover:text-white hover:bg-blue-500", "rounded-lg p-1"].join(" ")}
					>
						LinkedIn.
					</a>
				</Link>
			</span>
		</div>
	)
}

export default Contact
