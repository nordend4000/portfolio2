import React, { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from "../components/Layout"
import TripticProject from "../ressources/TripticProject"
import FooterLinks from "../components/FooterLinks"
import DATA_PORTFOLIO from "../ressources/DATA_PORTFOLIO"
import DATA_MOREPROJECTS from "../ressources/DATA_MOREPROJECTS"
import TitleHover from "../components/TitleHover"
import { Page } from "../ressources/variants"
import { motion } from "framer-motion/dist/framer-motion"
import { Helmet } from "react-helmet"
import "../styles/portfolio.scss"

function Portfolio() {
	const panels = useRef([])
	const panelsContainer = useRef()

	gsap.registerPlugin(ScrollTrigger)

	const createPanelsRefs = (panel, index) => {
		panels.current[index] = panel
	}
	//HORIZONTAL SCROLLING
	useLayoutEffect(() => {
		const totalPanels = panels.current.length
		gsap.to(panels.current, {
			xPercent: -100 * (totalPanels - 1),
			ease: "none",
			scrollTrigger: {
				id: "st-portfolio",
				trigger: panelsContainer.current,
				pin: true,
				scrub: 1,
				snap: 1 / (totalPanels - 1),
				end: () => "+=" + panelsContainer.current.offsetWidth,
			},
		})
		return () => {
			const stId = ScrollTrigger.getById("st-portfolio")
			if (stId) {
				stId.kill()
			}
		}
	}, [])
	// ANIMATE MORE PROJECTS
	useLayoutEffect(() => {
		gsap.utils.toArray(".animate-moreprojects").forEach(function (elem) {
			hide(elem)
			ScrollTrigger.create({
				id: "st-moreproj",
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
			const stId2 = ScrollTrigger.getById("st-moreproj")
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
				<Helmet>
					<title>Romain GIOUX - Portfolio</title>
					<meta
						name='title'
						content='Romain GIOUX - Portfolio WEB DEVELOPER'
						data-react-helmet='true'
					/>
					<meta
						name='description'
						content='Romain GIOUX - WEB DEVELOPER PORTFOLIO. Projects designed and built from scratch.'
						data-react-helmet='true'
					/>
					<meta name='author' content='Romain Gioux' />
				</Helmet>
				<div className='xcontainer Portfolio' ref={panelsContainer}>
					<div className='xpanel' ref={e => createPanelsRefs(e, 0)}>
						<div>
							<TitleHover
								title='PORTFOLIO'
								subtitle='Projects Built and Designed with love from Scratch'
								scroll={true}
							/>
						</div>
					</div>
					{DATA_PORTFOLIO.map(el => (
						<div
							className='xpanel'
							ref={e => createPanelsRefs(e, el.index)}
							key={el.index}>
							<div className='Portfolio__project'>
								<div className='Portfolio__project__text'>
									<h3>{el.title}</h3>
									<p>{el.subtitleP1}</p>
									<p>{el.subtitleP2}</p>
									<h5>STACK : Technologies & Dependencies</h5>
									<div className='Portfolio__project__text__stackline'>
										{el.stackLine}
									</div>
									<p>{el.depP1}</p>
									<p>{el.depP2}</p>
									<p>{el.depP3}</p>
									<p>{el.depP4}</p>
									<p>{el.depP5}</p>
									<div className='Portfolio__project__text__buttons'>
										<a href={`${el.linkGit}`} target='_blank' rel='noreferrer'>
											<button className='Portfolio__project__text__buttons__btn'>
												Open Source
											</button>
										</a>
										<a href={`${el.linkSite}`} target='_blank' rel='noreferrer'>
											<button className='Portfolio__project__text__buttons__btn'>
												{el.button}
											</button>
										</a>
									</div>
								</div>
								<div className='Portfolio__project__image'>
									<div className='Portfolio__project__image__top'>
										<img
											src={process.env.PUBLIC_URL + `/images/${el.img1}`}
											alt={`${el.title} desktop thumbnail`}
											className='Portfolio__project__image__top__img1'
										/>
									</div>
									<div className='Portfolio__project__image__bottom'>
										<div className='Portfolio__project__image__bottom__img3'>
											<TripticProject />
										</div>
										<div className='Portfolio__project__image__bottom__img2'>
											<img
												src={process.env.PUBLIC_URL + `/images/${el.img2}`}
												alt={`${el.title} mobile thumbnail`}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='Moreprojects'>
					<div className='Moreprojects__want'>
						<p>Want to see more projects ?</p>
					</div>
					{DATA_MOREPROJECTS.map(el => (
						<div key={el.index}>
							<div className='home__projects__half animate-moreprojects slide_from_left'>
								<div className='home__projects__proj'>
									<div className='home__projects__proj__title'>{el.title}</div>
									<div className='home__projects__proj__subtitle'>
										{el.subtitle}
									</div>
									<div className='home__projects__proj__polygone'>
										<img
											src={process.env.PUBLIC_URL + "/images/polygone-topo.png"}
											alt='polygone topographic shape for background'
										/>
									</div>
									<div className='fifty'>{el.stackLine}</div>
								</div>
								<img
									src={process.env.PUBLIC_URL + `/images/${el.img}`}
									alt={`${el.title} thumbnail`}
									className='home__projects__image'
								/>
							</div>
							<div className='home__projects__buttons  animate-moreprojects slide_from_right'>
								<a href={el.linkGit} target='_blank' rel='noreferrer'>
									<button className='home__projects__buttons__btn'>
										Open Source
									</button>
								</a>
								<a href={el.linkSite} target='_blank' rel='noreferrer'>
									<button className='home__projects__buttons__btn'>
										{el.button}
									</button>
								</a>
							</div>
						</div>
					))}
				</div>
				<FooterLinks />
			</Layout>
		</motion.div>
	)
}

export default Portfolio
