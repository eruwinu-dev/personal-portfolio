import React from "react"

import Head from "next/head"

import Header from "../components/Header"
import LandingSection from "../components/LandingSection"
import Projects from "../components/Projects"
import TechStack from "../components/TechStack"
import Footer from "../components/Footer"

const Home = () => {
	return (
		<div
			className={[
				"min-h-screen max-h-screen max-w-full",
				"overflow-y-scroll smooth-scroll",
				"scrollbar scrollbar-thumb-transparent scrollbar-track-transparent scrollbar-rounded",
			].join(" ")}
		>
			<Head>
				<title>Home | eruwinu-dev</title>
			</Head>
			<Header />
			<LandingSection />
			<Projects />
			<TechStack />
			<Footer />
		</div>
	)
}

export default Home
