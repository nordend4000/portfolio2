import React from "react"
import TopMenu from "./TopMenu"
import Footer from "./Footer"
import SideLine from "./SideLine"

function Layout({ children }) {
	return (
		<main className='wrap'>
			<SideLine />
			<div className='App'>
				<TopMenu />
				<section>{children}</section>
				<Footer />
			</div>
		</main>
	)
}

export default Layout
