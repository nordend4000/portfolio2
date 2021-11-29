import React from "react"
import "../styles/footer.scss"
import { Link } from "react-router-dom"
import Signature from "../ressources/Signature"
import PDF_FR from "../ressources/cv-fr.pdf"
import PDF_EN from "../ressources/cv-en.pdf"

export default function Footer() {
	return (
		<div
			className='Footer'
			style={{ backgroundImage: "url(/images/footer-bg.jpg)" }}>
			<div className='Footer__part1'>
				<div className='Footer__part1__intouch'>
					<div className='Footer__part1__intouch__like'>Like my Portfolio?</div>
					<div className='Footer__part1__intouch__talk'>
						Want to talk about your project or hire me ?
					</div>
					<div className='Footer__part1__intouch__button'>
						<Link to='/contact'>
							<button className='Footer__part1__intouch__button__btn'>
								Get in Touch
							</button>
						</Link>
					</div>
				</div>
				<div className='Footer__part1__resume'>
					<h6 className='Footer__part1__resume__title'>CHECK OUT MY RESUME</h6>
					<div className='Footer__part1__resume__link'>
						<a
							href={PDF_EN}
							target='_blank'
							rel='noreferrer'
							className='Footer__part1__resume__link__doc'>
							ENGLISH
						</a>
						<a
							href={PDF_FR}
							target='_blank'
							rel='noreferrer'
							className='Footer__part1__resume__link__doc'>
							FRANÇAIS
						</a>
					</div>
				</div>
			</div>
			<div className='Footer__signature'>
				<Signature />
			</div>
			<div className='Footer__half'>
				<div className='Footer__half__copyright'>
					<div className='Footer__half__copyright__text'>
						Built & Designed with Love in Switzerland - 2021
					</div>
					<div className='Footer__half__copyright__line'></div>
				</div>
				<img
					src={process.env.PUBLIC_URL + "/images/footer-triangles.png"}
					alt='background triangles footer'
					className='Footer__half__triangles'
				/>
			</div>
		</div>
	)
}
