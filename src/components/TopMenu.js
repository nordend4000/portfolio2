import React, { useRef, useLayoutEffect, useEffect, useState } from "react"
import { gsap } from "gsap"
import { NavLink, Link } from "react-router-dom"
import Logo from "../ressources/Logo"

import "../styles/menu.scss"

const DATA_TOPLINK = ["Portfolio", "Skills", "About", "Contact"]
const DATA_MOBILE_LINK = [
	{
		title: "Home",
		link: "/",
		exact: true,
	},
	{
		title: "Portfolio",
		link: "/portfolio",
		exact: false,
	},
	{
		title: "Skills",
		link: "/skills",
		exact: false,
	},
	{
		title: "About",
		link: "/about",
		exact: false,
	},
	{
		title: "Contact",
		link: "/contact",
		exact: false,
	},
]

function TopMenu() {
	const [menuIcon, setMenuIcon] = useState(false)
	const [playMenu, setPlayMenu] = useState(false)
	const [reverseMenu, setReverseMenu] = useState(false)
	const [width, setWidth] = useState()
	const topMenu = useRef()
	const openedMenu = useRef()
	const tl = useRef()
	const tl2 = useRef()
	const q = gsap.utils.selector(openedMenu)

	const checkWidth = () => {
		if (window.innerWidth >= 960) {
			setWidth(true)
			if (menuIcon) {
				setMenuIcon(false)
			}
		} else {
			setWidth(false)
			if (menuIcon) {
				setMenuIcon(false)
			}
		}
	}
	window.addEventListener("resize", checkWidth)
	useEffect(() => {
		if (window.innerWidth >= 960) {
			setWidth(true)
		} else {
			setWidth(false)
		}
	}, [])

	useLayoutEffect(() => {
		gsap.from(topMenu.current, {
			duration: 2.6,
			delay: 0.2,
			y: -600,
			ease: "back",
		})
	}, [])

	useLayoutEffect(() => {
		if (!playMenu) return
		tl.current = gsap
			.timeline({ defaults: { ease: "back", duration: 1.1 } })
			.from(q(".OpenedMenu"), {
				clipPath: "circle(0%)",
				xPercent: 100,
				opacity: 0,
			})
			.from(q(".OpenedMenu__link"), {
				opacity: 1,
				delay: -0.8,
				yPercent: -30,
				stagger: 0.15,
			})
		setPlayMenu(false)
		//eslint-disable-next-line
	}, [playMenu])

	useLayoutEffect(() => {
		if (!reverseMenu) return
		tl2.current = gsap
			.timeline({ defaults: { ease: "back", duration: 0.7 } })
			.to(q(".OpenedMenu__link"), {
				opacity: 0,
				yPercent: -30,
				stagger: 0.05,
			})
			.to(q(".OpenedMenu"), {
				clipPath: "circle(0%)",
				xPercent: 100,
				opacity: 0,
				delay: -0.4,
				onComplete: closeMenu,
			})
		//eslint-disable-next-line
	}, [reverseMenu])

	const handleOpenMenu = () => {
		if (menuIcon) {
			setReverseMenu(true)
		}
		if (!menuIcon) {
			setMenuIcon(true)
			setPlayMenu(true)
		}
	}
	const closeMenu = () => {
		setMenuIcon(false)
		setReverseMenu(false)
		setPlayMenu(false)
	}

	return (
		<header className='header'>
			<Link to='/' className='logo'>
				<div className='logo-svg'>
					<Logo />
				</div>
			</Link>
			{width ? (
				<div className='TopMenu' ref={topMenu}>
					{DATA_TOPLINK.map(el => (
						<NavLink
							key={`topmenu-${el}`}
							to={`/${el.toLowerCase()}`}
							className='TopMenu__link'
							activeClassName='active'>
							{el}
						</NavLink>
					))}
				</div>
			) : (
				<div
					className={menuIcon ? "menu-btn open" : "menu-btn"}
					onClick={handleOpenMenu}>
					<div className='menu-btn__burger'></div>
				</div>
			)}
			<div ref={openedMenu}>
				{menuIcon && (
					<div className='OpenedMenu'>
						{DATA_MOBILE_LINK.map(el => (
							<NavLink
								key={`mobilemenu-${el.title}`}
								to={el.link}
								exact={el.exact}
								onClick={() => setMenuIcon(false)}
								className='OpenedMenu__link'
								activeClassName='active-open'>
								{el.title}
							</NavLink>
						))}
					</div>
				)}
			</div>
		</header>
	)
}

export default TopMenu
