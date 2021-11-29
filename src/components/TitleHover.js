import React, { useState, useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { TiArrowDownOutline } from "react-icons/ti"
import "../styles/title-hover.scss"

function TitleHover({ title, subtitle, scroll }) {
	const titleRef = useRef()
	const tl = useRef()
	const [mousePosition, setMousePosition] = useState({
		"--maskX": 0,
		"--maskY": 0,
	})
	let Mouse = useRef()
	const moveMouse = e => {
		const width = Mouse.current.clientWidth
		const height = Mouse.current.clientHeight
		const oX = Math.floor((e.nativeEvent.offsetX / width) * 100)
		const oY = Math.floor((e.nativeEvent.offsetY / height) * 100)
		setMousePosition({ "--maskX": oX, "--maskY": oY })
	}
	const outMouse = () => {
		setMousePosition({
			"--maskX": 0,
			"--maskY": 0,
		})
	}

	useLayoutEffect(() => {
		const q = gsap.utils.selector(titleRef)
		tl.current = gsap
			.timeline()
			.from(q("#titleH1"), {
				opacity: 0,
				duration: 1.2,
				x: 100,
				ease: "power1",
			})
			.from(q("#titleH2"), {
				opacity: 0,
				duration: 1,
				y: 50,
				ease: "power1",
			})
		return () => {
			tl.current.kill()
		}
	}, [])

	return (
		<>
			<div className='title-hover' ref={titleRef}>
				<div
					className='Mouse'
					onMouseMove={moveMouse}
					onMouseOut={outMouse}
					ref={Mouse}
					style={mousePosition}>
					<div className='Mouse-title' id='titleH1'>
						<h1>{title}</h1>
					</div>
					<div className='Mouse-title Mouse-mask'>
						<h1>{title}</h1>
					</div>
				</div>
				<h2 className='title-hover-subtitle' id='titleH2'>
					{subtitle}
				</h2>
			</div>
			{scroll && (
				<div className='scrolldown'>
					<TiArrowDownOutline className='scrolldown__icon' />
					Scroll
				</div>
			)}
		</>
	)
}

export default TitleHover
