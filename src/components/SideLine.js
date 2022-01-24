import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { IoDocumentTextOutline } from "react-icons/io5"
import PDF_EN from "../ressources/cv-en.pdf"

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
			<div className='tooltip'>
				<Link to='/contact'>
					<AiOutlineMail className='SideLine__icons' />
					<span className='tooltiptext'>Contact</span>
				</Link>
			</div>
			<a
				className='tooltip'
				href={"https://www.linkedin.com/in/romain-gioux/"}
				target='_blank'
				rel='noreferrer'>
				<AiFillLinkedin className='SideLine__icons' />
				<span className='tooltiptext'>LinkedIn</span>
			</a>
			<a
				className='tooltip'
				href={"https://github.com/nordend4000/"}
				target='_blank'
				rel='noreferrer'>
				<AiFillGithub className='SideLine__icons' />
				<span className='tooltiptext'>Git Hub</span>
			</a>
			<a href={PDF_EN} target='_blank' rel='noreferrer' className='tooltip'>
				<IoDocumentTextOutline className='SideLine__icons' />
				<span className='tooltiptext'>Resume</span>
			</a>

			<div className='SideLine__line'></div>
		</div>
	)
}

export default SideLine
