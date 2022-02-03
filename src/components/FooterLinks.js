import React from "react"
import { Link } from "react-router-dom"
import Arrow from "../ressources/Arrow"

function FooterLinks() {
	return (
		<div className='Link'>
			<Link to='/' className='Link__link'>
				<Arrow link='Home' css='arrow-small' />
			</Link>
			<Link to='/portfolio' className='Link__link'>
				<Arrow link='Portfolio' css='arrow-small' />
			</Link>
			<Link to='/skills' className='Link__link'>
				<Arrow link='Skills' css='arrow-small' />
			</Link>
			<Link to='/about' className='Link__link'>
				<Arrow link='About' css='arrow-small' />
			</Link>
		</div>
	)
}

export default FooterLinks
