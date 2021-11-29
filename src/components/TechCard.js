import React, { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import vanillaTilt from "vanilla-tilt"
import "../styles/techcard.scss"

function TechCard({ index, speed, handleClickChevron, data }) {
	const cards = useRef()
	const card = useRef()
	useLayoutEffect(() => {
		gsap.fromTo(
			card.current,
			{ autoAlpha: 0, x: `${speed * 300}` },
			{ autoAlpha: 1, x: 0, duration: 1, ease: "back" },
		)
	}, [index, speed])

	vanillaTilt.init(cards.current, {
		max: 15,
		speed: 800,
		transition: false,
	})

	return (
		<div className='container' ref={cards}>
			<div className='card' ref={card} onClick={() => handleClickChevron(0)}>
				<div className='content'>
					<h2>{data[index - 1].abrev}</h2>
					<h3>{data[index - 1].title}</h3>
					<p>{data[index - 1].text}</p>
					<Link to='/skills'>View My Skills</Link>
				</div>
			</div>
		</div>
	)
}

export default TechCard
