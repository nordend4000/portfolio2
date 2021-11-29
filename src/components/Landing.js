import React, { useLayoutEffect, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import Waves from "../ressources/Waves"
import { gsap } from "gsap"
import * as PIXI from "pixi.js"
import { KawaseBlurFilter } from "@pixi/filter-kawase-blur"
import SimplexNoise from "simplex-noise"
import debounce from "debounce"
import "../styles/App.css"

const colorPalette = [
	"0xc4e3ec",
	"0x9cb8cc",
	"0xb4cfe3",
	"0x9cb8cc",
	"0x7382a2",
	"0xb4cfe3",
	"0xc4e3ec",
	"0x9cb8cc",
	"0xb4cfe3",
	"0x7382a2",
]

function Landing() {
	const landingRef = useRef()
	const tl = useRef()

	useLayoutEffect(() => {
		const q = gsap.utils.selector(landingRef)
		tl.current = gsap
			.timeline()
			.from(q(".Landing__background-image"), {
				duration: 1,
				opacity: 0,
				scale: 0.9,
				x: 100,
				y: 100,
			})
			.from(q(".Landing__text__title"), {
				opacity: 0,
				duration: 1,
				scale: 0.9,
				x: -100,
				ease: "back",
			})
			.from(q(".Landing__text__subtitle"), {
				opacity: 0,
				duration: 0.5,
				y: 50,
				ease: "power1",
			})
			.from(q(".Landing__text__buttons"), {
				opacity: 0,
				duration: 1,
				scale: 0.9,
				ease: "back",
			})
		return () => {
			tl.current.kill()
		}
	}, [])

	const simplex = new SimplexNoise()

	useEffect(() => {
		const app = new PIXI.Application({
			view: document.querySelector(".orb-canvas"),
			resizeTo: window,
			transparent: true,
		})
		app.stage.filters = [new KawaseBlurFilter(30, 10, true)]
		const orbs = []
		for (let i = 0; i < 10; i++) {
			const orb = new Orb(colorPalette[i])
			app.stage.addChild(orb.graphics)
			orbs.push(orb)
		}
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			app.ticker.add(() => {
				orbs.forEach(orb => {
					orb.update()
					orb.render()
				})
			})
		} else {
			orbs.forEach(orb => {
				orb.update()
				orb.render()
			})
		}
		//eslint-disable-next-line
	}, [])

	class Orb {
		constructor(fill = 0x000000) {
			this.bounds = this.setBounds()
			this.x = random(this.bounds["x"].min, this.bounds["x"].max)
			this.y = random(this.bounds["y"].min, this.bounds["y"].max)
			this.scale = 1
			this.fill = fill
			this.radius = random(window.innerHeight / 6, window.innerHeight / 3)
			this.xOff = random(0, 1000)
			this.yOff = random(0, 1000)
			this.inc = 0.002
			this.graphics = new PIXI.Graphics()
			this.graphics.alpha = 0.825
			window.addEventListener(
				"resize",
				debounce(() => {
					this.bounds = this.setBounds()
				}, 200),
			)
		}
		setBounds() {
			const maxDist =
				window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5

			const originX = window.innerWidth / 1.25
			const originY =
				window.innerWidth < 1000
					? window.innerHeight
					: window.innerHeight / 1.375

			return {
				x: {
					min: originX - maxDist,
					max: originX + maxDist,
				},
				y: {
					min: originY - maxDist,
					max: originY + maxDist,
				},
			}
		}

		update() {
			const xNoise = simplex.noise2D(this.xOff, this.xOff)
			const yNoise = simplex.noise2D(this.yOff, this.yOff)
			const scaleNoise = simplex.noise2D(this.xOff, this.yOff)

			this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max)
			this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max)
			this.scale = map(scaleNoise, -1, 1, 0.5, 1)
			this.xOff += this.inc
			this.yOff += this.inc
		}
		render() {
			this.graphics.x = this.x
			this.graphics.y = this.y
			this.graphics.scale.set(this.scale)
			this.graphics.clear()
			this.graphics.beginFill(this.fill)
			this.graphics.drawCircle(0, 0, this.radius)
			this.graphics.endFill()
		}
	}

	function random(min, max) {
		return Math.random() * (max - min) + min
	}

	function map(n, start1, end1, start2, end2) {
		return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2
	}

	return (
		<div>
			<canvas className='orb-canvas'></canvas>
			<div className='Landing' ref={landingRef}>
				<img
					src={process.env.PUBLIC_URL + "/images/background-landing.png"}
					alt='background'
					className='Landing__background-image'
				/>
				<div className='layered-waves'>
					<Waves />
				</div>
				<div className='Landing__text'>
					<h1 className='Landing__text__title'>Delightfully</h1>
					<h1 className='Landing__text__title'>Handmade</h1>
					<h1 className='Landing__text__title'>Web Experiences</h1>
					<h3 className='Landing__text__subtitle'>
						Front End Development, Full Stack Web Application, Interactive User
						Interface, Responsive Design, SEO optimisation & Performance
					</h3>
					<div className='Landing__text__buttons'>
						<Link to='/portfolio'>
							<button className='Landing__text__buttons__btn'>Portfolio</button>
						</Link>
						<Link to='/contact'>
							<button className='Landing__text__buttons__btn'>Contact</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Landing
