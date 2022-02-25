import React from "react"
import Link from "next/link"

const links = [
	{ name: "About", linkStr: "#about" },
	{ name: "Projects", linkStr: "#projects" },
	{ name: "TechStack", linkStr: "#stack" },
	{ name: "Blog", linkStr: "#blog" },
]

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
					<a className={["font-bold tracking-widest text-gray-900"].join(" ")}>eruwinu-dev</a>
				</Link>
			</div>
			<div className={["flex flex-row items-center justify-center space-x-4"].join(" ")}>
				{links.map((linkItem, index) => (
					<Link key={index} href={linkItem.linkStr}>
						<a>{linkItem.name}</a>
					</Link>
				))}
			</div>
		</header>
	)
}

export default Header
