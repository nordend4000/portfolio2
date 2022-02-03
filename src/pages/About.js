import React, { useLayoutEffect, useRef } from "react"
import FooterLinks from "../components/FooterLinks"
import Layout from "../components/Layout"
import "../styles/about.scss"
import { HiOutlineCode } from "react-icons/hi"
import { MdOutlineVolunteerActivism } from "react-icons/md"
import { GiHumanPyramid } from "react-icons/gi"
import { MdCastForEducation } from "react-icons/md"
import { RiOrganizationChart } from "react-icons/ri"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import DATA_RESUME from "../ressources/DATA_RESUME"
import Triptic2 from "../ressources/Triptic2"
import { Helmet } from "react-helmet"
import { Page } from "../ressources/variants"
import { motion } from "framer-motion/dist/framer-motion"

function About() {
	const aboutTripticRef = useRef()
	const aboutRef = useRef()
	const tl = useRef()

	gsap.registerPlugin(ScrollTrigger)

	//  landing ANIMATION
	useLayoutEffect(() => {
		gsap.from(aboutTripticRef.current, {
			duration: 2,
			scale: 0.4,
			rotate: -270,
		})
	}, [])
	useLayoutEffect(() => {
		const q = gsap.utils.selector(aboutRef)
		tl.current = gsap
			.timeline()
			.from(q("#aboutTitle"), {
				opacity: 0,
				duration: 1,
				x: -1000,
				ease: "back",
				delay: 0.4,
			})
			.from(q("#aboutSubtitle"), {
				opacity: 0,
				duration: 0.4,
				y: 50,
				ease: "power1",
			})
			.from(q("#aboutP"), {
				opacity: 0,
				duration: 1,
				scale: 0.9,
				ease: "back",
			})
		return () => {
			tl.current.kill()
		}
	}, [])
	//BACKGROUND TIMELINE ANIMATION
	useLayoutEffect(() => {
		gsap.utils.toArray(".animate").forEach(function (elem) {
			hide(elem)
			ScrollTrigger.create({
				id: "st-background",
				trigger: elem,
				onEnter: function () {
					animateFromTo(elem)
				},
				onEnterBack: function () {
					animateFromTo(elem, -1)
				},
				onLeave: function () {
					hide(elem)
				},
			})
		})
		return () => {
			const stId2 = ScrollTrigger.getById("st-background")
			if (stId2) {
				stId2.kill()
			}
		}
	}, [])

	const hide = elem => {
		gsap.set(elem, { autoAlpha: 0 })
	}

	const animateFromTo = (elem, direction) => {
		const offset = 1000
		let x = 0
		let y = direction * offset
		direction = direction | 1
		if (elem.classList.contains("slide_from_left")) {
			x = -offset
			y = 0
		} else if (elem.classList.contains("slide_from_right")) {
			x = offset
			y = 0
		}
		gsap.fromTo(
			elem,
			{ x: x, y: y, autoAlpha: 0 },
			{
				duration: 1.25,
				x: 0,
				y: 0,
				autoAlpha: 1,
				ease: "expo",
				overwrite: "auto",
			},
		)
	}
	return (
		<motion.div initial='initial' animate='animate' exit='exit' variants={Page}>
			<Layout>
				<div className='About' ref={aboutRef}>
					<Helmet>
						<title>Romain GIOUX - About</title>
						<meta
							name='title'
							content='Romain GIOUX - Portfolio WEB DEVELOPER'
							data-react-helmet='true'
						/>
						<meta
							name='description'
							content='Romain GIOUX - WEB DEVELOPER PORTFOLIO: Section about me and background.'
							data-react-helmet='true'
						/>
						<meta name='author' content='Romain Gioux' />
					</Helmet>
					<div className='About__landing'>
						<div className='About__landing__box1'>
							<h1 id='aboutTitle'>ABOUT</h1>
							<h2 className='About__landing__box1__subtitle' id='aboutSubtitle'>
								Always Setting New Goals
							</h2>
						</div>
						<div className='About__landing__box2' id='aboutP'>
							<p>
								Hi there, I'm <b>Romain GIOUX</b> an inspired self-taught
								<b> Web Developer </b> based in Zurich, Switzerland.
							</p>
							<p>
								I love discovering new technologies and
								<b> Solving Digital Puzzles.</b>
							</p>
							<p>
								Aiming for a career reconversion, I have past the last 2 years
								learning how
								<b> the Web is Built </b> and how I can contribute in make it{" "}
								<b> a Pleasant Space.</b>
							</p>
							<p>
								<b>My challenge</b> is to turn this enthusiasm and commitment
								into a professional activity, gain experience by
								<b> Creating Complex Projects </b> and join an
								<b> Ambitious Team.</b>
							</p>
						</div>
					</div>
					<div className='About__part2'>
						<h2>Overview of My Background</h2>
						<div className='About__part2__subtitle-background'>
							<div className='About__part2__subtitle-background__item'>
								<HiOutlineCode className='About__part2__subtitle-background__item__icons' />
								WEB DEVELOPMENT TRAINING
							</div>
							<div className='About__part2__subtitle-background__item'>
								<RiOrganizationChart className='About__part2__subtitle-background__item__icons' />
								WORKING EXPERIENCES
							</div>
							<div className='About__part2__subtitle-background__item'>
								<GiHumanPyramid className='About__part2__subtitle-background__item__icons' />
								HUMANITARIAN MISSONS
							</div>
							<div className='About__part2__subtitle-background__item'>
								<MdOutlineVolunteerActivism className='About__part2__subtitle-background__item__icons' />
								VOLUNTEERING
							</div>
							<div className='About__part2__subtitle-background__item'>
								<MdCastForEducation className='About__part2__subtitle-background__item__icons' />
								EDUCATION
							</div>
						</div>
					</div>
					<div className='timeline'>
						<ul>
							{DATA_RESUME.map((te, idx) => {
								return (
									<li key={`${te.title}_${te.date}`}>
										<div className='content'>
											<h6
												className={`animate ${
													idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
												}`}>
												{te.categorie}
											</h6>
											<h3
												className={`animate ${
													idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
												}`}>
												{te.title}
											</h3>
											<h5
												className={`animate ${
													idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
												}`}>
												{te.subtitle}
											</h5>
											<p
												className={`animate ${
													idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
												}`}>
												{te.description}
											</p>
										</div>
										<div
											className={`time animate ${
												idx % 2 === 0 ? "slide_from_right" : "slide_from_left"
											}`}>
											<h4>{te.date}</h4>
										</div>
									</li>
								)
							})}
							<div style={{ clear: "both" }}></div>
						</ul>
					</div>
					<div className='triptic2-pages' ref={aboutTripticRef}>
						<Triptic2 />
					</div>
					<FooterLinks />
				</div>
			</Layout>
		</motion.div>
	)
}

export default About
