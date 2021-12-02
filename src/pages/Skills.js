import React, { useRef, useLayoutEffect } from "react"
import DATA_FRONTEND from "../ressources/DATA_FRONTEND"
import DATA_BACKEND from "../ressources/DATA_BACKEND"
import DATA_CROSSOVER1 from "../ressources/DATA_CROSSOVER1"
import DATA_CROSSOVER2 from "../ressources/DATA_CROSSOVER2"
import DATA_LANGUAGES from "../ressources/DATA_LANGUAGES"
import Stars from "../components/Stars"
import Triptic2 from "../ressources/Triptic2"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Helmet } from "react-helmet"
import "../styles/skills.scss"

function Skills() {
	const skillsRef = useRef()
	const skillsTripticRef = useRef()
	const panels = useRef()
	const tl = useRef()
	const tl2 = useRef()
	const q = gsap.utils.selector(panels)

	gsap.registerPlugin(ScrollTrigger)

	// PANEL SCROLLING
	useLayoutEffect(() => {
		tl.current = gsap
			.timeline({ defaults: { ease: "none", duration: 3 } })
			.from(q(".panel1"), {
				xPercent: -100,
			})
			.from(q(".panel2"), {
				xPercent: 100,
			})
			.from(q(".panel3"), {
				yPercent: 150,
			})
		ScrollTrigger.create({
			id: "st-skills",
			trigger: panels.current,
			animation: tl.current,
			start: "top top",
			scrub: 1,
			end: "+=4000",
			toggleActions: "play reset reverse reset",
			pin: true,
			anticipatePin: 1,
		})

		return () => {
			const stId3 = ScrollTrigger.getById("st-skills")
			if (stId3) {
				stId3.kill()
				tl.current.kill()
			}
		}
		//eslint-disable-next-line
	}, [])
	// landing ANIMATION
	useLayoutEffect(() => {
		gsap.from(skillsTripticRef.current, {
			duration: 2,
			scale: 0.4,
			rotate: 270,
		})
	}, [])
	useLayoutEffect(() => {
		const q = gsap.utils.selector(skillsRef)
		tl2.current = gsap
			.timeline()
			.from(q("#skillsTitle"), {
				opacity: 0,
				duration: 1,
				x: -1000,
				ease: "back",
				delay: 0.4,
			})
			.from(q("#skillsSubtitle"), {
				opacity: 0,
				duration: 0.4,
				y: 50,
				ease: "power1",
			})
			.from(q("#skillsP"), {
				opacity: 0,
				duration: 1,
				scale: 0.9,
				ease: "back",
			})
		return () => {
			tl2.current.kill()
		}
	}, [])

	return (
		<>
			<div className='Panel' ref={panels}>
				<Helmet>
					<title>Romain GIOUX - Skills</title>
					<meta
						name='title'
						content='Romain GIOUX - Portfolio WEB DEVELOPER'
						data-react-helmet='true'
					/>
					<meta
						name='description'
						content='Romain GIOUX - WEB DEVELOPER PORTFOLIO: Front end, back end and crossover skills.'
						data-react-helmet='true'
					/>
					<meta name='author' content='Romain Gioux' />
				</Helmet>
				<div className='panel1'>
					<div className='panel panel-last-child'>
						<div className='panel__text white-text'>FRONT END</div>
						<div className='panel__text-undeline red-light-text'>
							<p>User Experience </p> <p>SEO</p>
							<p>Performance</p>
						</div>
						<div className='panel__text-undeline red-light-text'>
							<p>Design</p>
							<p>Accessibility</p> <p>Testing</p>
						</div>
						<div className='Stars-container'>
							{DATA_FRONTEND.map(el => (
								<span className='Stars-container__rows' key={el.data}>
									{el.logo}
									<Stars
										data={el.data}
										level={el.level}
										title={el.title}
										icons={el.icons}
									/>
								</span>
							))}
						</div>
					</div>
				</div>
				<div className='panel2'>
					<div className='panel  panel-last-child'>
						<div className='panel__text  white-text'>BACK END</div>
						<div className='panel__text-undeline  red-text'>
							<p>Server </p>
							<p>Scalable </p>
							<p>Database </p>
							<p>Security </p>
						</div>
						<div className='Stars-container'>
							{DATA_BACKEND.map(el => (
								<span className='Stars-container__rows' key={el.data}>
									{el.logo}
									<Stars
										data={el.data}
										level={el.level}
										title={el.title}
										icons={el.icons}
									/>
								</span>
							))}
						</div>
					</div>
				</div>
				<div className='panel3'>
					<div className='panel-crossover'>
						<div className='panel__text  blue-text'>CROSSOVER</div>
						<div className='panel__text-undeline '>
							<p>Workflow</p>
							<p>Photography</p>
							<p>Design</p>
							<p>Languages</p>
						</div>
						<div className='Stars-container'>
							<div className='last-skills-columns'>
								{DATA_CROSSOVER1.map(el => (
									<span className='Stars-container__rows' key={el.data}>
										{el.logo}
										<Stars
											data={el.data}
											level={el.level}
											title={el.title}
											icons={el.icons}
										/>
									</span>
								))}
							</div>
							<div className='last-skills-columns'>
								{DATA_CROSSOVER2.map(el => (
									<span className='Stars-container__rows' key={el.data}>
										{el.logo}
										<Stars
											data={el.data}
											level={el.level}
											title={el.title}
											icons={el.icons}
										/>
									</span>
								))}
							</div>
							<div className='last-skills-columns'>
								{DATA_LANGUAGES.map(el => (
									<span className='Stars-container__rows' key={el.data}>
										<div className='flags'>{el.logo}</div>
										<Stars
											data={el.data}
											level={el.level}
											title={el.title}
											icons={el.icons}
										/>
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='skills-landing' ref={skillsRef}>
				<div className='skills-landing__box1'>
					<h1 id='skillsTitle'>SKILLS</h1>
					<h2 className='skills-landing__box1__subtitle' id='skillsSubtitle'>
						Organized Efficient Adaptable Team-Work
					</h2>
				</div>
				<div className='skills-landing__box2' id='skillsP'>
					<p>
						I’m specialized in <b>Front End Web Development</b> with a strong
						grasp in modern JavaScript ES6+. I like to create
						<b> Animated User Interfaces </b>
						using CSS, SVG and GSAP or designing web environments using Figma.
					</p>
					<p>
						<b> Technical SEO </b>is also essential for a complete achievement.
					</p>
					<p>
						Furthermore I'm trained in{" "}
						<b> integration, unit and end to end testing </b> using Jest and
						Cypress.
					</p>
					<p>
						On the <b> Server Side</b>, I used PHP and SQL at the beginning but
						I really enjoyed working with Node.js and Mongo DB to build my own
						REST API.
					</p>
				</div>
			</div>
			<div className='triptic2-pages' ref={skillsTripticRef}>
				<Triptic2 />
			</div>
			<div className='bottom-skills'></div>
		</>
	)
}

export default Skills
