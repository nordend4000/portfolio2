import React, { useLayoutEffect, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Landing from "../components/Landing"
import Triptic from "../ressources/Triptic"
import Arrow from "../ressources/Arrow"
import ChevronLeft from "../ressources/ChevronLeft"
import ChevronRight from "../ressources/ChevronRight"
import TechCard from "../components/TechCard"
import InitialTransition from "../components/InitialTransition"
import FooterLinks from "../components/FooterLinks"
import DATA_SKILLS from "../ressources/DATA_SKILLS"
import DATA_PROJECT_HOME from "../ressources/DATA_PROJECT_HOME"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../styles/home.scss"
import { Page } from "../ressources/variants"
import { motion } from "framer-motion/dist/framer-motion"

function Home({ isFirstMount }) {
	const [tablet, setTablet] = useState()
	const [desktop, setDesktop] = useState()
	const [card, setCard] = useState(1)
	const [speed, setSpeed] = useState(1)

	const checkWidth = () => {
		if (window.innerWidth < 732) {
			setTablet(false)
			setDesktop(false)
		}
		if (window.innerWidth >= 732 && window.innerWidth <= 1130) {
			setTablet(true)
			setDesktop(false)
		}
		if (window.innerWidth > 1130) {
			setTablet(false)
			setDesktop(true)
		}
	}
	window.addEventListener("resize", checkWidth)
	useEffect(() => {
		if (window.innerWidth < 732) {
			setTablet(false)
			setDesktop(false)
		}
		if (window.innerWidth >= 732 && window.innerWidth <= 1130) {
			setTablet(true)
			setDesktop(false)
		}
		if (window.innerWidth > 1130) {
			setTablet(false)
			setDesktop(true)
		}
	}, [])

	gsap.registerPlugin(ScrollTrigger)
	// ANimATE PROJECTS
	useLayoutEffect(() => {
		gsap.utils.toArray(".animate-home").forEach(function (elem) {
			hide(elem)
			ScrollTrigger.create({
				id: "st-home",
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
			const stId2 = ScrollTrigger.getById("st-home")
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
	const handleClickChevron = n => {
		let cardNb = DATA_SKILLS.length
		setSpeed(n)
		if (card !== cardNb && n === 0) return setCard(card + 1)
		if (card === 1 && n === -1) return setCard(cardNb)
		if (card === cardNb && (n === 1 || n === 0)) return setCard(1)
		return setCard(card + n)
	}

	return (
		<>
			<div className='wrap'>{isFirstMount && <InitialTransition />}</div>
			<motion.div
				initial='initial'
				animate='animate'
				exit='exit'
				variants={Page}>
				<Layout>
					<Helmet>
						<title>Romain GIOUX - Portfolio</title>
						<meta
							name='title'
							content='Romain GIOUX - Portfolio WEB DEVELOPER'
							data-react-helmet='true'
						/>
						<meta
							name='description'
							content='Romain GIOUX - WEB DEVELOPER PORTFOLIO. Projects designed and built with love from scratch.'
							data-react-helmet='true'
						/>
						<meta name='author' content='Romain Gioux' />
					</Helmet>
					<Landing />
					<div className='home'>
						<div className='home__welcome'>
							<div className='home__welcome__photo'>
								<img
									src={process.env.PUBLIC_URL + "/images/ro.jpg"}
									alt='Romain GIOUX Web Developer'
								/>
							</div>
							<div className='home__welcome__text'>
								<p>
									Welcome to my space, I'm <b> Romain GIOUX </b> a French Web
									Developer lost in Switzerland.
								</p>
								<p>
									You will find on this website a portfolio of the web{" "}
									<b> Projects </b> I created and several sections about my
									coding <b> Skills</b>, <b> Background </b>
									and <b> Resume. </b>{" "}
								</p>
								<p>
									Finally a <b> Contact </b> form will allow you to share your
									thought and get in touch with me.
								</p>
								<p>
									I'm currently looking for <b> new opportunities </b> as Front
									End Developer and also freelancing project.
								</p>
							</div>
						</div>
						<div className='home__arrow'>
							<Arrow link='Featured Project' css='arrow-large' />
						</div>
						<section
							className='home__featured'
							style={
								desktop
									? { backgroundImage: "url(/images/visuelDesktop.png)" }
									: { backgroundImage: "none" }
							}>
							<div className='home__featured__text  animate-home slide_from_left'>
								<div className='home__featured__text__title'>
									E-commerce Store
								</div>
								<div className='home__featured__text__subtitle'>
									High Quality Print & Digital photographies for sale. Plateform
									including galleries, user account & admin dashboard to manage
									orders, customers & products.
								</div>
								<div className='home__featured__text__polygone1'>
									<img
										src={process.env.PUBLIC_URL + "/images/polygone-topo.png"}
										alt='polygone topographic shape for background'
									/>
								</div>
							</div>
							<div className='home__featured__buttons animate-home slide_from_left'>
								<a
									href={
										"https://github.com/nordend4000/rebecca-anderson-photography"
									}
									target='_blank'
									rel='noreferrer'>
									<button className='home__featured__buttons__btn'>
										Open Source
									</button>
								</a>
								<a
									href={"https://rebecca-anderson-photography.netlify.app"}
									target='_blank'
									rel='noreferrer'>
									<button className='home__featured__buttons__btn'>
										View Store
									</button>
								</a>
							</div>
							<div className='home__featured__visuel animate-home slide_from_right'>
								{!tablet && !desktop ? (
									<img
										src={process.env.PUBLIC_URL + "/images/visuel.png"}
										alt='e-commerce project thumbnail'
										className='home__featured__visuel__mobile'
									/>
								) : tablet ? (
									<img
										src={process.env.PUBLIC_URL + "/images/visuelTablet.png"}
										alt='e-commerce project thumbnail'
										className='home__featured__visuel__tablet'
									/>
								) : (
									""
								)}
							</div>
						</section>
						<section className='home__projects'>
							<div className='home__arrow'>
								<Arrow link='More Projects' css='arrow-large' />
							</div>
							{DATA_PROJECT_HOME.map((project, index) => (
								<div key={index}>
									<div className='home__projects__half  animate-home slide_from_left'>
										<div className='home__projects__proj'>
											<div className='home__projects__proj__title'>
												{project.title}
											</div>
											<div className='home__projects__proj__subtitle'>
												{project.subtitle}
											</div>
											<div className='home__projects__proj__polygone'>
												<img
													src={
														process.env.PUBLIC_URL + "/images/polygone-topo.png"
													}
													alt='polygone topographic shape for background'
												/>
											</div>
											<div className='fifty'>{project.stackLine}</div>
										</div>
										<img
											src={
												process.env.PUBLIC_URL + `/images/${project.image}.png`
											}
											alt={`${project.title} thumbnail`}
											className='home__projects__image'
										/>
									</div>
									<div className='home__projects__buttons  animate-home slide_from_right'>
										<a href={project.git} target='_blank' rel='noreferrer'>
											<button className='home__projects__buttons__btn'>
												Open Source
											</button>
										</a>
										<a href={project.url} target='_blank' rel='noreferrer'>
											<button className='home__projects__buttons__btn'>
												{project.btn}
											</button>
										</a>
									</div>
								</div>
							))}
							<div className='home__projects__large-button'>
								<Link to='/portfolio'>
									<button className='home__projects__large-button__btn'>
										View My Portfolio
									</button>
								</Link>
							</div>
						</section>
						<section className='home__skills'>
							<div className='home__arrow'>
								<Arrow link='Handled Technologies' css='arrow-large' />
							</div>
							<div className='chevron'>
								<div
									className='chevron__left'
									onClick={() => handleClickChevron(-1)}>
									<ChevronLeft />
								</div>
								<div
									className='chevron__right'
									onClick={() => handleClickChevron(1)}>
									<ChevronRight />
								</div>
							</div>
							<div className='home__skills__techno'>
								<div
									className='home__skills__techno__ctn'
									style={{
										backgroundImage: `url(${
											process.env.PUBLIC_URL + "/images/skills.png"
										})`,
									}}>
									<TechCard
										index={card}
										handleClickChevron={handleClickChevron}
										speed={speed}
										data={DATA_SKILLS}
									/>
								</div>
							</div>
						</section>
						<section className='home__about'>
							<div className='home__arrow'>
								<Arrow link='About Me' css='arrow-large' />
							</div>
							<div className='home__about__half'>
								<div className='home__about__half__triptic  animate-home slide_from_left'>
									<Triptic />
								</div>
								<div className='home__about__half__text'>
									<div className='home__about__half__text__first animate-home slide_from_right'>
										I'm a freelance web developer based in Zurich, Switzerland.
										I love creating animated web environments and generating
										interactive user interfaces powered by modern technologies.
									</div>
									<div className='home__about__half__text__first animate-home slide_from_right'>
										My back end awareness helps me to build full stack
										applications including user authentification, database flows
										and server communication.
									</div>
									<div className='home__about__half__text__second animate-home slide_from_right'>
										I’m currently looking for a junior Web development position
										after 2 years of an enthusiastic programming learning
										journey. I trained a lot using online courses, tutorials,
										offical documentations and the most formative experience :
										building real life projects.
									</div>
									<div className='home__about__half__text__second-last animate-home slide_from_right'>
										Now, I'm ready to share my motivation and knowledge with a
										professional and dynamic team.
									</div>
								</div>
							</div>
							<div className='home__projects__large-button  animate-home slide_from_left'>
								<Link to='/about'>
									<button className='home__projects__large-button__btn'>
										View My Background
									</button>
								</Link>
							</div>
							<FooterLinks />
						</section>
					</div>
				</Layout>
			</motion.div>
		</>
	)
}

export default Home
