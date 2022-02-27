import React from "react"
import { motion } from "framer-motion"

const Introduction = () => {
	return (
		<div
			className={[
				"absolute top-0 left-0",
				"box-border h-full w-full",
				"z-10",
				"bg-gray-700",
				"flex flex-col items-center justify-center",
			].join(" ")}
		>
			Introduction
		</div>
	)
}

export default Introduction
