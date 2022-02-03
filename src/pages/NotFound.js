import React from "react"
import Layout from "../components/Layout"
import FooterLinks from "../components/FooterLinks"
import TitleHover from "../components/TitleHover"
import { Helmet } from "react-helmet"
import { Page } from "../ressources/variants"
import { motion } from "framer-motion/dist/framer-motion"

function NotFound() {
	return (
		<motion.div initial='initial' animate='animate' exit='exit' variants={Page}>
			<Layout>
				<div className='notfound'>
					<Helmet>
						<title>Romain GIOUX - 404 Page Not Found</title>
						<meta
							name='title'
							content='Romain GIOUX - Portfolio WEB DEVELOPER'
							data-react-helmet='true'
						/>
						<meta
							name='description'
							content='Romain GIOUX - WEB DEVELOPER PORTFOLIO. 404 Page not Found'
							data-react-helmet='true'
						/>
						<meta name='author' content='Romain Gioux' />
					</Helmet>
					<div>
						<TitleHover
							title='Not Found'
							subtitle="Ooopsss... The page you're looking for doesn't exist"
							scroll={false}
						/>
					</div>
					<p></p>
					<div className='notfound__links'>
						<FooterLinks />
					</div>
				</div>
			</Layout>
		</motion.div>
	)
}

export default NotFound
