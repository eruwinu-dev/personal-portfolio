import React from "react"
import Link from "next/link"

const Header = () => {
	return (
		<header
			className={[
				"w-1/2",
				"absolute top-0 mx-auto inset-x-0",
				"py-4",
				"flex flex-row items-center justify-between",
			].join(" ")}
		>
			<div>
				<Link href="/">
					<a>Home</a>
				</Link>
			</div>
			<div className={["flex flex-row items-center justify-center space-x-4"].join(" ")}>
				<Link href="/">
					<a>About</a>
				</Link>
				<Link href="/">
					<a>Projects</a>
				</Link>
				<Link href="/">
					<a>Blog</a>
				</Link>
				<Link href="/">
					<a>Contact</a>
				</Link>
			</div>
		</header>
	)
}

export default Header
