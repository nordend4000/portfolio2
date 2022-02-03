import React from "react"
import { motion } from "framer-motion/dist/framer-motion"
import Intro from "../components/Intro"
import "../styles/intro.css"

const blackBox = {
	initial: {
		height: "100vh",
		bottom: 0,
		opacity: 1,
	},
	animate: {
		opacity: [1, 1, 0],
		height: 0,
		transition: {
			when: "afterChildren",
			duration: 0.9,
			ease: [0.37, 0, 0.63, 1],
			times: [0, 0.4, 1],
		},
	},
}

const text = {
	initial: {
		opacity: 1,
		scale: 1,
	},
	animate: {
		opacity: [1, 1, 0],
		scale: [1, 1, 0.5],
		transition: {
			duration: 3.7,
			ease: [0.11, 0, 0.5, 0],
			times: [0, 0.9, 1],
		},
	},
}

const InitialTransition = () => {
	return (
		<motion.div
			className='blackbox'
			initial='initial'
			animate='animate'
			variants={blackBox}
			onAnimationStart={() => document.body.classList.add("overflow-hidden")}
			onAnimationComplete={() =>
				document.body.classList.remove("overflow-hidden")
			}>
			<motion.div variants={text} className='anim-svg'>
				<Intro />
			</motion.div>
		</motion.div>
	)
}

export default InitialTransition
