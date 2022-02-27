import React from "react"
import Menu from "./Menu"
import Navigation from "./Navigation"
import { motion, useCycle } from "framer-motion"

const sidebarVariants = {
	open: {
		clipPath: `circle(1000px at 40px 40px)`,
		transition: {
			duration: 0.4,
		},
	},
	closed: {
		clipPath: `circle(30px at 40px 40px)`,
		transition: {
			duration: 0.4,
			delay: 0.4,
		},
	},
}

const Navbar = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	return (
		<motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
			<motion.div className="background" variants={sidebarVariants} />
			<Menu toggle={() => toggleOpen()} />
			<Navigation />
		</motion.nav>
	)
}

export default Navbar
