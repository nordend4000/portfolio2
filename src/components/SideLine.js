import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { SiToptal } from "react-icons/si"
import { SiFiverr } from "react-icons/si"
import { SiUpwork } from "react-icons/si"

function SideLine() {
	const sideline = useRef()

	useEffect(() => {
		gsap.from(sideline.current, {
			duration: 2.6,
			delay: 0.2,
			x: -600,
			ease: "back",
		})
	}, [])
	return (
		<div className='SideLine' ref={sideline}>
			<Link to='/contact' className='SideLine__email'>
				romaingiouxdev@gmail.com
			</Link>
			<div className='SideLine__line'></div>
			<Link to='/contact'>
				<AiOutlineMail className='SideLine__icons' />
			</Link>
			<a
				href={"https://www.linkedin.com/in/romain-gioux/"}
				target='_blank'
				rel='noreferrer'>
				<AiFillLinkedin className='SideLine__icons' />
			</a>
			<a
				href={"https://github.com/nordend4000/"}
				target='_blank'
				rel='noreferrer'>
				<AiFillGithub className='SideLine__icons' />
			</a>
			<SiToptal className='SideLine__icons' />
			<SiFiverr className='SideLine__icons' />
			<SiUpwork className='SideLine__icons' />
			<div className='SideLine__line'></div>
		</div>
	)
}

export default SideLine
