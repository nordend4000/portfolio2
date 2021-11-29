import React, { useLayoutEffect, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Landing from "../components/Landing"
import Polygone1 from "../ressources/Polygone1"
import Triptic from "../ressources/Triptic"
import Arrow from "../ressources/Arrow"
import ChevronLeft from "../ressources/ChevronLeft"
import ChevronRight from "../ressources/ChevronRight"
import TechCard from "../components/TechCard"
import FooterLinks from "../components/FooterLinks"
import DATA_SKILLS from "../ressources/DATA_SKILLS"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../styles/home.scss"

function Home() {
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
			<Landing />
			<div className='home'>
				<div className='home__welcome'>
					<p>
						Welcome to my space, I'm <b> Romain GIOUX </b> a French Web
						Developer lost in Switzerland.
					</p>
					<p>
						You will find on this website a portfolio of the web{" "}
						<b> Projects </b> I created and several sections about my coding{" "}
						<b> Skills</b>, <b> Background </b>
						and <b> Resume </b>.{" "}
					</p>
					<p>
						Finally a <b> Contact </b> form will allow you to share your thought
						and get in touch with me.
					</p>
					<p>
						I'm currently looking for <b> new opportunities </b> as Web
						Developer and any freelancing project.
					</p>
				</div>
				<div className='home__arrow'>
					<Arrow link='Latest Project' css='arrow-large' />
				</div>
				<section
					className='home__featured'
					style={
						desktop
							? { backgroundImage: "url(/images/visuelDesktop.png)" }
							: { backgroundImage: "none" }
					}>
					<div className='home__featured__text  animate-home slide_from_left'>
						<div className='home__featured__text__title'>E-commerce Store</div>
						<div className='home__featured__text__subtitle'>
							High Quality Print & Digital photographies for sale. Plateform
							including galleries, user account & admin dashboard to manage
							orders, customers & products.
						</div>
						<div className='home__featured__text__polygone1'>
							<Polygone1 />
						</div>
					</div>
					<div className='home__featured__buttons animate-home slide_from_right'>
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
					<div className='home__projects__half animate-home slide_from_left'>
						<div className='home__projects__proj'>
							<div className='home__projects__proj__title'>
								Showcase Website
							</div>
							<div className='home__projects__proj__subtitle'>
								Website to promote the book "Beyond Simien Mountains". Personal
								story and amazing photographies of a trek in Ethiopia to support
								local communities.
							</div>
							<div className='home__projects__proj__polygone'>
								<Polygone1 />
							</div>
						</div>
						<img
							src={process.env.PUBLIC_URL + "/images/simien.png"}
							alt='e-commerce project thumbnail'
							className='home__projects__image'
						/>
					</div>
					<div className='home__projects__buttons  animate-home slide_from_right'>
						<a
							href={"https://github.com/nordend4000/beyond-simien-moutains-"}
							target='_blank'
							rel='noreferrer'>
							<button className='home__projects__buttons__btn'>
								Open Source
							</button>
						</a>
						<a
							href={"https://beyondsimienmountains.com/"}
							target='_blank'
							rel='noreferrer'>
							<button className='home__projects__buttons__btn'>
								View Website
							</button>
						</a>
					</div>
					<div className='home__projects__half  animate-home slide_from_left'>
						<div className='home__projects__proj'>
							<div className='home__projects__proj__title'>
								Community Network
							</div>
							<div className='home__projects__proj__subtitle'>
								Social App to connect outdoor sport addicts. Join the community
								and post your planned trip to find people around you. Browse
								upcomming trips using an interactive map.
							</div>
							<div className='home__projects__proj__polygone'>
								<Polygone1 />
							</div>
						</div>
						<img
							src={process.env.PUBLIC_URL + "/images/neveralone.png"}
							alt='e-commerce project thumbnail'
							className='home__projects__image'
						/>
					</div>
					<div className='home__projects__buttons  animate-home slide_from_right'>
						<a
							href={"https://github.com/nordend4000/never-alone"}
							target='_blank'
							rel='noreferrer'>
							<button className='home__projects__buttons__btn'>
								Open Source
							</button>
						</a>
						<a
							href={"https://neveralone.netlify.app/"}
							target='_blank'
							rel='noreferrer'>
							<button className='home__projects__buttons__btn'>
								View Website
							</button>
						</a>
					</div>
					<div className='home__projects__half  animate-home slide_from_left'>
						<div className='home__projects__proj'>
							<div className='home__projects__proj__title'>
								Logbook Application
							</div>
							<div className='home__projects__proj__subtitle'>
								App to store Paragliding flights data, compute statistics,
								filter database and manage gear. Upload .gpx files to visualise
								flying trace on the map.
							</div>
							<div className='home__projects__proj__polygone'>
								<Polygone1 />
							</div>
						</div>
						<img
							src={process.env.PUBLIC_URL + "/images/logbook.png"}
							alt='e-commerce project thumbnail'
							className='home__projects__image'
						/>
					</div>
					<div className='home__projects__buttons  animate-home slide_from_right'>
						<a
							href={"https://github.com/nordend4000/paraglidinglogbook"}
							target='_blank'
							rel='noreferrer'>
							<button className='home__projects__buttons__btn'>
								Open Source
							</button>
						</a>
						<a
							href={"https://paraglidinglogbook.netlify.app"}
							target='_blank'
							rel='noreferrer'>
							<button className='home__projects__buttons__btn'>View App</button>
						</a>
					</div>
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
							<div className='home__about__half__text__first   animate-home slide_from_right'>
								I'm a freelance web developer based in Zurich, Switzerland. I
								love creating animated web environments and generating
								interactive user interfaces powered by modern technologies.
							</div>
							<div className='home__about__half__text__first'>
								My back end awareness helps me to build full stack applications
								including user authentification, database flows and server
								communication.
							</div>
							<div className='home__about__half__text__second   animate-home slide_from_right'>
								I’m currently looking for a junior Web development position
								after 2 years of an enthusiastic programming learning journey. I
								trained a lot using online courses, tutorials, offical
								documentations and the most formative experience : building real
								life projects.
							</div>
							<div className='home__about__half__text__second-last   animate-home slide_from_right'>
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
		</>
	)
}

export default Home
